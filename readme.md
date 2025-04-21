## Demonstração em Vídeo

Você pode ver o plugin em ação neste vídeo:

<iframe width="560" height="315" src="https://www.youtube.com/embed/H6mfIhTJe_c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Suporte e Contribuição

Se você tiver algum problema ou sugestão, sinta-se à vontade para abrir uma [Issue](https://github.com/SEU_NOME_DE_USUARIO/SEU_REPOSITORIO_DO_PLUGIN/issues) neste repositório.

Contribuições são bem-vindas! Se você quiser ajudar a melhorar este plugin, você pode:

* Reportar bugs e sugerir melhorias.
* Enviar pull requests com correções ou novas funcionalidades.

# Instalando um Plugin Obsidian a partir do GitHub (Não Listado no Repositório Oficial)

Se o plugin que você deseja instalar não está disponível no repositório oficial de plugins da comunidade do Obsidian, você precisará instalá-lo manualmente a partir do seu repositório no GitHub. Siga estas instruções:

**Pré-requisitos:**

* **Obsidian Instalado:** Certifique-se de que o Obsidian esteja instalado no seu computador.
* **Modo Restrito Desativado:** Para instalar plugins de terceiros, o "Modo restrito" do Obsidian precisa estar desativado. Você pode verificar e desativar isso em `Configurações > Plugins da comunidade`.
* **Conhecimento Básico de Gerenciamento de Arquivos:** Você precisará saber como navegar pelas pastas do seu sistema operacional.

**Passos para Instalação Manual:**

1.  **Acesse a Página do Plugin no GitHub:**
    * Abra seu navegador e vá para a página do repositório do plugin no GitHub (o URL que o desenvolvedor compartilhou).

2.  **Localize a Seção de Releases (Releases):**
    * Na página do repositório, procure por uma aba ou seção chamada "Releases". Geralmente, ela está localizada à direita das abas "Code", "Issues", "Pull requests", etc.
    * Clique em "Releases".

3.  **Baixe a Última Release:**
    * Na página de Releases, você verá uma lista de versões do plugin. Baixe a versão mais recente (geralmente a que está no topo).
    * Procure por arquivos `.zip` na seção de "Assets" (Ativos) da release. Baixe o arquivo `.zip` correspondente ao plugin. O nome do arquivo geralmente inclui o ID do plugin e a versão (por exemplo, `nome-do-plugin-v1.0.0.zip`).

    * **Se não houver Releases em `.zip`:**
        * Se o desenvolvedor não forneceu um arquivo `.zip` pré-compilado, você precisará baixar o código fonte do repositório. Clique no botão verde "Code" e selecione "Download ZIP".

4.  **Localize a Pasta de Plugins do Obsidian no seu Computador:**
    * Abra o Obsidian.
    * Vá para `Configurações` (ícone de engrenagem).
    * Na aba `Plugins da comunidade`, clique no ícone de pasta ao lado do texto "Plugins instalados". Isso abrirá a pasta onde os plugins da comunidade estão armazenados no seu sistema.
    * Dentro desta pasta, crie uma nova pasta com o nome **exato** do plugin (geralmente o mesmo nome usado no ID do plugin no arquivo `manifest.json` do repositório). É crucial que o nome da pasta seja correto.

5.  **Extraia os Arquivos do Plugin (se você baixou um `.zip`):**
    * Se você baixou um arquivo `.zip` na etapa 3, navegue até a pasta onde o arquivo foi salvo.
    * Extraia o conteúdo do arquivo `.zip` para a pasta que você criou na etapa 4 (dentro da pasta de plugins do Obsidian). Certifique-se de que os arquivos `main.js`, `manifest.json` (e possivelmente `styles.css` e outras pastas/arquivos) estejam diretamente dentro da pasta com o nome do plugin.

6.  **Mova os Arquivos (se você baixou o código fonte):**
    * Se você baixou o código fonte como um `.zip`, extraia-o para uma pasta temporária.
    * Dentro da pasta extraída, procure pelos arquivos essenciais do plugin: `main.js` e `manifest.json`. Pode haver outros arquivos e pastas também.
    * Copie **apenas** os arquivos e pastas relevantes do plugin para a pasta que você criou na etapa 4 (dentro da pasta de plugins do Obsidian).

7.  **Ative o Plugin no Obsidian:**
    * Volte para o Obsidian.
    * Vá para `Configurações > Plugins da comunidade`.
    * Na lista de plugins disponíveis, você deverá ver o nome do plugin que você acabou de adicionar manualmente.
    * Clique no botão para ativar o plugin.

## Passo 2: Inserindo a Chave da API no Plugin Obsidian

Agora que você tem sua chave da API do Gemini, siga estes passos para inseri-la nas configurações do plugin Gemini File Organizer no Obsidian:

1.  **Abra o Obsidian:** Inicie o seu aplicativo Obsidian.

2.  **Acesse as Configurações do Obsidian:** Clique no ícone de engrenagem ("Configurações") no canto inferior esquerdo da janela do Obsidian.

3.  **Vá para a Aba "Plugins da comunidade":** No menu lateral das configurações, clique em "Plugins da comunidade".

4.  **Procure pelo Plugin "Gemini File Organizer":** Na lista de plugins instalados, localize "Gemini File Organizer".

5.  **Acesse as Configurações do Plugin:** Ao lado do nome do plugin "Gemini File Organizer", você deverá ver um botão com o texto "Opções" ou um ícone de engrenagem. Clique neste botão para abrir as configurações do plugin.

6.  **Insira sua Chave da API:** Na página de configurações do plugin, você encontrará um campo de texto rotulado como "Chave da API do Gemini". Cole a chave da API que você copiou do Google Cloud Console neste campo.

7.  **Feche as Configurações:** Depois de colar a chave da API, você pode fechar a janela de configurações do Obsidian. O plugin deverá salvar a chave automaticamente.

## Passo 3: Usando o Plugin

Com a chave da API do Gemini configurada, você agora pode usar a funcionalidade de organização automática de arquivos do plugin. Siga as instruções fornecidas na documentação principal do plugin para ativar o processo de organização.

**Importante:**

* **Mantenha sua chave de API segura.** Não a compartilhe publicamente nem a inclua diretamente no código do seu vault.
* **Monitore o uso da sua API no Google Cloud Console** para evitar cobranças inesperadas.
* Certifique-se de que a API do Gemini esteja habilitada para o projeto que você está usando no Google Cloud.
* Se você tiver problemas com a autenticação ou com o funcionamento do plugin, verifique se a chave da API foi copiada corretamente e se a API está funcionando conforme esperado no Google Cloud.

Seguindo estes passos, você poderá configurar sua chave da API do Gemini e aproveitar a organização inteligente de arquivos no seu vault Obsidian!
