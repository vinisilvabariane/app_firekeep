export const SITE_CONFIG = {
  repositoryUrl: "https://github.com/vinisilvabariane/desktop_fk",
  downloadUrl:
    "https://github.com/vinisilvabariane/desktop_fk/releases/download/v1.0.2/Firekeep-Setup-1.0.2.exe",
  version: "1.0.2",
  installerSize: "155 MB",
  platform: "Windows 10 e 11",
};

export const BRAND_ASSETS = {
  logo: "/logo-sem-fundo.png",
  appIcon: "/logo-com-fundo.png",
};

export const PRODUCT_SCENES = [
  { src: "/firekeep-scene-hearth.gif", label: "Fortaleza" },
  { src: "/firekeep-scene-orbit.gif", label: "Orbita" },
  { src: "/firekeep-scene-city.gif", label: "Cidade" },
];

export const RELEASE_LOGS = [
  {
    version: "1.0.2",
    date: "18 ago 2026",
    title: "Terminal integrado corrigido para Claude Code e Codex",
    summary:
      "Ajustes no terminal integrado do Firekeep para funcionar corretamente com apps de tela cheia como o Claude Code e o Codex, alem de copiar e colar.",
    items: [
      "Corrigido texto embaralhado ao rodar o Claude Code: removida uma conversao automatica de quebra de linha que desalinhava o cursor em apps de tela cheia.",
      "Tecla Tab agora e sempre encaminhada ao processo em execucao no terminal, em vez de ser interceptada pelo autocomplete proprio do Firekeep.",
      "Terminal ganhou copiar com Ctrl+C quando ha texto selecionado e colar com o botao direito do mouse.",
    ],
  },
  {
    version: "1.0.0",
    date: "12 ago 2026",
    title: "Primeiro lancamento estavel: Git, atualizacoes e YouTube",
    summary:
      "O Firekeep chega a versao estavel com painel Git local, atualizacoes automaticas e um workspace desktop mais direto e seguro.",
    items: [
      "Novo painel Git para abrir repositorios locais, acompanhar branch e remoto, listar alteracoes e revisar diffs.",
      "Stage, unstage, commit, atualizacao, pull --ff-only e push disponiveis diretamente no workspace.",
      "Conflitos ganham acoes por arquivo; alteracoes locais nao preparadas podem ser desfeitas com confirmacao.",
      "Deteccao do Git instalado com orientacao e atalho para o instalador oficial quando necessario.",
      "Atualizacoes automaticas verificam GitHub Releases, baixam em segundo plano e pedem reinicio apenas quando prontas.",
      "Musica passa a usar somente YouTube; Spotify, autenticacao e dependencias relacionadas foram removidos.",
      "Terminal ganhou zoom por Ctrl + roda do mouse e o layout removeu redimensionadores verticais instaveis.",
    ],
  },
  {
    version: "beta.1.9",
    date: "26 jul 2026",
    title: "Instalador redesenhado e musica simplificada",
    summary:
      "Beta focada na distribuicao Windows e em uma experiencia de musica mais simples, baseada em links do YouTube.",
    items: [
      "Instalador NSIS em portugues, com nome de artefato padronizado e identidade visual do Firekeep.",
      "Painel de musica simplificado para YouTube, com controles de reproducao, faixa, volume, repeticao e biblioteca de links.",
      "Pacote Electron passou a usar ASAR, preservando o modulo nativo do terminal fora do arquivo compactado.",
      "Fluxo antigo de streaming, autenticacao, configuracoes e dependencias associadas foi removido.",
    ],
  },
  {
    version: "beta.1.8",
    date: "23 jul 2026",
    title: "Navegador persistente e mais desempenho",
    summary:
      "Beta de estabilidade e desempenho para o navegador, terminal e superficies de trabalho do desktop.",
    items: [
      "Cada aba do navegador mantem seu webview vivo, evitando recarregamentos ao alternar guias.",
      "Fechamento de abas persiste imediatamente; o webview se realinha ao painel depois de redimensionamentos.",
      "Modo web usa iframe como fallback, enquanto o desktop preserva a navegacao completa.",
      "Monaco, terminais e fundos receberam ajustes para reduzir renderizacao continua e consumo de recursos.",
      "Seeds versionados restauram nomes de fundos e pares de nome/link do YouTube no primeiro inicio.",
    ],
  },
  {
    version: "beta.1.7",
    date: "22 jul 2026",
    title: "Monaco, explorador operacional e navegador redesenhado",
    summary:
      "Beta de amadurecimento do workspace desktop, com editor Monaco, explorador funcional e reforcos de estabilidade no Electron.",
    items: [
      "Editor de codigo migrou para Monaco, com workers locais, linguagens, Ctrl+S e recuperacao visual.",
      "Explorador passou a criar, mover e excluir arquivos e pastas, incluindo menu de contexto e arrastar e soltar.",
      "Navegador ganhou tela de pesquisa, faixa horizontal de favoritos e carregamento mais resiliente.",
      "Dock central reune Explorador, Navegador, Terminal, Grid e tela cheia, com paineis pesados sob demanda.",
      "Novos logotipos e icones foram aplicados no aplicativo e no instalador Windows.",
    ],
  },
  {
    version: "beta.1.6",
    date: "20 jul 2026",
    title: "Navegador interno mais estavel",
    summary: "Beta com ajustes no navegador interno e organizacao do historico de versoes.",
    items: [
      "Fechar a ultima aba fecha o navegador interno e deixa o proximo inicio preparado no Hub.",
      "Um unico webview ativo reduz tela preta, travamentos e crashes do Chromium.",
      "Pesquisas usam uma pagina leve do DuckDuckGo dentro do webview.",
      "Falhas de carregamento e crashes exibem um painel de recuperacao em vez de uma area preta.",
      "GPU fica desativada por padrao no Electron; FIREKEEP_USE_GPU=1 permite reativa-la manualmente.",
    ],
  },
  {
    version: "beta.1.5",
    date: "20 jul 2026",
    title: "Interface, musica e Worker local",
    summary: "Beta de consolidacao de interface, musica, Worker do backend e estabilidade grafica.",
    items: [
      "Menu central do workspace agrupa Explorador, Navegador, Terminal, Grid e tela cheia.",
      "Backend local foi movido para um Worker Node separado do processo principal do Electron.",
      "Modo YouTube passou a usar o player oficial oculto para audio em segundo plano.",
      "Rotas, arquivos locais, logs, preferencias, seeds e gateway de terminal rodam fora do processo principal.",
    ],
  },
  {
    version: "beta.1.4",
    date: "20 jul 2026",
    title: "Abas, favoritos e recuperacao grafica",
    summary: "Beta focada no navegador interno, persistencia de abas e favoritos e recuperacao da janela Electron.",
    items: [
      "Estado do navegador passou a persistir localmente em arquivo dedicado.",
      "Links target=_blank dentro do webview agora abrem como abas internas.",
      "Abas e favoritos ganharam limites, normalizacao e fallback automatico para o Hub.",
      "A janela principal tenta se recuperar automaticamente quando renderer ou GPU falha.",
      "Testes automatizados cobrem leitura, gravacao, normalizacao e concorrencia do estado do navegador.",
    ],
  },
  {
    version: "beta.1.3",
    date: "18 jul 2026",
    title: "Backend modular e instalador Windows",
    summary: "Beta que separa o backend em modulos, adiciona persistencia local e prepara o instalador.",
    items: [
      "Backend separado em routes, stores, fs-service, terminal-gateway, config e utils.",
      "API local consolidada para workspace, projetos, musicas, fundos, preferencias, arquivos e terminal.",
      "Painel de fundos, musica, explorador, editor e terminal com multiplas sessoes foram incorporados.",
      "Electron Builder foi configurado para gerar instalador Windows NSIS x64.",
    ],
  },
  {
    version: "beta.1.2",
    date: "18 jul 2026",
    title: "Empacotamento",
    summary: "Beta pequena de ajustes no fluxo de release.",
    items: [
      "Saida do instalador configurada no package.json.",
      ".gitignore atualizado para ignorar artefatos locais de release.",
    ],
  },
  {
    version: "beta.1.1",
    date: "18 jul 2026",
    title: "Workspace desktop expandido",
    summary: "Beta que transforma a base inicial em um workspace desktop mais completo.",
    items: [
      "Interface expandida com paineis de musica, fundos, navegador, terminal, editor e explorador.",
      "Navegador interno, editor de codigo, explorador de arquivos e player YouTube foram adicionados.",
      "Tema visual, icones do app e assets Windows foram incorporados.",
    ],
  },
  {
    version: "beta.1.0",
    date: "18 jul 2026",
    title: "Prototipo inicial",
    summary: "Prototipo inicial do Firekeep como app Node + React/Electron.",
    items: [
      "Projeto inicial com Vite, React, Electron, Express, xterm, node-pty e WebSocket.",
      "Janela Electron com barra customizada e controles via preload.",
      "Workspace inicial com Pomodoro, terminal, musica YouTube, upload de fundo e persistencia local.",
    ],
  },
];
