import { Plugin, Notice, TFile, TFolder } from "obsidian";

export default class GeminiFileOrganizer extends Plugin {
  async onload() {
    new Notice("Plugin Gemini File Organizer carregado!");

    this.addRibbonIcon("folder-plus", "Organizar com Gemini", async () => {
      const files = this.app.vault.getMarkdownFiles();

      if (files.length === 0) {
        new Notice("Nenhum arquivo Markdown encontrado para organizar.");
        return;
      }

      // Obter os caminhos dos arquivos
      const filePaths = files.map((file) => file.name);

      try {
        const response = await this.sendToGemini(filePaths);

        await this.organizeFiles(response);

        new Notice("Arquivos organizados com sucesso!");
      } catch (error) {
        console.error("Erro ao organizar os arquivos:", error);
        new Notice(
          "Erro ao organizar os arquivos. Verifique o console para mais detalhes."
        );
      }
    });
  }

  onunload() {
    new Notice("Plugin Gemini File Organizer descarregado!");
  }

  /**
   * Envia os caminhos dos arquivos para a API do Gemini e retorna a resposta.
   * @param filePaths Lista de caminhos dos arquivos.
   * @returns Resposta da API no formato "pasta:arquivo,arquivo;pasta2:arquivo,arquivo".
   */
  private async sendToGemini(filePaths: string[]): Promise<string> {
    const apiUrl =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
    const apiKey = "AIzaSyDeoEv-URUOmfvHLyisZJr-XHE9RKM03n4"; // Substitua pela sua chave de API

    // Estrutura do payload
    const payload = {
      contents: [
        {
          parts: [
            {
              text: `Organize os seguintes arquivos em pastas: ${filePaths.join(
                ", "
              )}`,
            },
            {
              text: "quero o output assim \n `[folder]:[file],[file];[folder]:[file],[file]",
            },
            {
              text: "quero somente o output, sem formatacao ou quebra de linha ou saudacoes",
            },
          ],
        },
      ],
    };

    const response = await fetch(`${apiUrl}?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Erro na API do Gemini: ${response.statusText}`);
    }

    const data = await response.json();

    return data.candidates[0].content.parts[0].text;
  }
/**
 * Remove todas as pastas vazias do vault.
 */
private async removeEmptyFolders() {
  const allFolders = this.app.vault.getAllLoadedFiles().filter((file) => file instanceof TFolder) as TFolder[];

  for (const folder of allFolders) {
    const folderContents = folder.children;

    // Verifica se a pasta está vazia
    if (folderContents.length === 0) {
      try {
        await this.app.vault.adapter.rmdir(folder.path, true); // Remove a pasta
        console.log(`Pasta removida: ${folder.path}`);
      } catch (error) {
        console.error(`Erro ao remover a pasta ${folder.path}:`, error);
      }
    }
  }
}
  /**
   * Processa a resposta da API e move os arquivos para as pastas correspondentes.
   * @param structure Estrutura no formato "pasta:arquivo,arquivo;pasta2:arquivo,arquivo".
   */
  private async organizeFiles(structure: string) {
    const folders = structure.split(";");

    for (const folder of folders) {
      const [folderName, files] = folder.split(":");
      const fileList = files.split(",");
  
      // Criar a pasta, se não existir
      const folderPath = `${folderName}/`;
      try {
        if (!(await this.app.vault.adapter.exists(folderPath))) {
          await this.app.vault.createFolder(folderPath);
        }
      } catch (error) {
        console.error(`Erro ao criar a pasta ${folderPath}:`, error);
        continue; // Pula para a próxima pasta se houver erro
      }
  
      // Mover os arquivos para a pasta
      for (const fileName of fileList) {
        const sanitizedFileName = this.sanitizeFileName(fileName.trim()); // Limpa o nome do arquivo
        const file = this.findFileByName(sanitizedFileName);
  
        if (file instanceof TFile) {
          const newPath = `${folderPath}${file.name}`;
  
          try {
            await this.app.vault.rename(file, newPath);
            console.log(`Arquivo movido: ${file.path} -> ${newPath}`);
          } catch (error) {
            console.error(
              `Erro ao mover o arquivo ${file.path} para ${newPath}:`,
              error
            );
          }
        } else {
          console.warn(`Arquivo não encontrado: ${sanitizedFileName}`);
        }
      }
    }
    await this.removeEmptyFolders();
  }

  
  /**
 * Busca recursivamente por um arquivo no vault pelo nome.
 * @param fileName Nome do arquivo a ser encontrado.
 * @returns O arquivo encontrado ou null se não for encontrado.
 */
private findFileByName(fileName: string): TFile | null {
  const allFiles = this.app.vault.getFiles(); // Obtém todos os arquivos do vault

  for (const file of allFiles) {
    if (file.name === fileName) {
      return file; // Retorna o arquivo se o nome corresponder
    }
  }

  return null; // Retorna null se o arquivo não for encontrado
}
  

  /**
   * Remove caracteres inválidos do nome do arquivo.
   * @param fileName Nome do arquivo original.
   * @returns Nome do arquivo limpo.
   */
  private sanitizeFileName(fileName: string): string {
    // Remove espaços ou pontos no final do nome do arquivo
    return fileName.replace(/[.\s]+$/, "");
  }
}
