export const SITE_CONFIG = {
  repositoryUrl: "https://github.com/vinisilvabariane/app_firekeep_react_site",
  downloadUrl:
    "https://github.com/vinisilvabariane/app_firekeep_react_site/raw/refs/heads/main/release/firekeep-setup-1.0.1.exe",
  version: "1.0.0-beta.6",
  installerSize: "141 MB",
  platform: "Windows 10 e 11",
};

export const BRAND_ASSETS = {
  logo: "/logo-sem-fundo.png",
  appIcon: "/logo-com-fundo.png",
};

export const PRODUCT_SCENES = [
  {
    src: "/firekeep-scene-hearth.gif",
    label: "Fortaleza",
  },
  {
    src: "/firekeep-scene-orbit.gif",
    label: "Órbita",
  },
  {
    src: "/firekeep-scene-city.gif",
    label: "Cidade",
  },
];

export const RELEASE_LOGS = [
  {
    version: "1.0.0-beta.6",
    date: "20 jul 2026",
    title: "Navegador interno mais estável",
    summary: "Beta atual com ajustes no navegador interno e organização do histórico de versões.",
    items: [
      "Fechar a última aba agora fecha o navegador interno e deixa o próximo início preparado no Hub.",
      "O navegador voltou a usar apenas um webview ativo por vez para reduzir tela preta, travamentos e crashes do Chromium.",
      "Pesquisas digitadas agora usam uma página leve do DuckDuckGo em vez da busca do Google dentro do webview.",
      "Falhas de carregamento e crashes de página agora exibem um painel de recuperação.",
      "GPU fica desativada por padrão no Electron; FIREKEEP_USE_GPU=1 reativa manualmente.",
    ],
  },
  {
    version: "1.0.0-beta.5",
    date: "20 jul 2026",
    title: "Interface, Spotify e Worker local",
    summary: "Beta de consolidação de interface, música, Spotify, Worker do backend e estabilidade gráfica.",
    items: [
      "Menu central do workspace agrupa Explorador, Navegador, Terminal, Grid e Tela cheia.",
      "Versão atual exibida no canto inferior direito do app.",
      "Backend local movido para um Worker Node separado do processo principal do Electron.",
      "Modo de música alterna entre YouTube e Spotify, com OAuth PKCE e Web Playback SDK.",
      "Build instalada no Windows desativa GPU por padrão para reduzir tela preta e crash ao usar webview.",
    ],
  },
  {
    version: "1.0.0-beta.4",
    date: "20 jul 2026",
    title: "Abas, favoritos e recuperação gráfica",
    summary: "Beta focado no navegador interno, persistência de abas/favoritos e recuperação da janela Electron.",
    items: [
      "Estado do navegador persistido localmente em logs/firekeep-browser-state.json.",
      "Links target=_blank dentro do webview agora abrem como abas internas.",
      "Abas e favoritos ganharam limites, normalização e fallback automático para o Hub.",
      "A janela principal tenta se recuperar automaticamente quando renderer ou GPU falha.",
      "Testes automatizados cobrem leitura, gravação, normalização e concorrência do estado do navegador.",
    ],
  },
  {
    version: "1.0.0-beta.3",
    date: "18 jul 2026",
    title: "Backend modular e instalador Windows",
    summary: "Beta grande que separa o backend em módulos, adiciona persistência local e prepara o instalador.",
    items: [
      "Backend separado em routes, stores, fs-service, terminal-gateway, config e utils.",
      "API local consolidada para saúde, workspace, projetos, músicas, fundos, preferências, arquivos e terminal.",
      "Painel de fundos, player de música, explorador, editor e terminal com múltiplas sessões.",
      "Upload de fundos passou a usar corpo binário puro, evitando JSON/base64 grande.",
      "Electron Builder configurado para gerar instalador Windows NSIS x64.",
    ],
  },
  {
    version: "1.0.0-beta.2",
    date: "18 jul 2026",
    title: "Empacotamento",
    summary: "Beta pequeno de ajustes no fluxo de release.",
    items: [
      "Saída do instalador configurada no package.json.",
      ".gitignore atualizado para ignorar artefatos locais de release.",
    ],
  },
  {
    version: "1.0.0-beta.1",
    date: "18 jul 2026",
    title: "Workspace desktop expandido",
    summary: "Beta que transforma a base inicial em um workspace desktop mais completo.",
    items: [
      "Interface principal expandida com painéis de música, fundos, navegador, terminal, editor e explorador.",
      "Navegador interno, editor de código, explorador de arquivos e player YouTube oculto adicionados.",
      "Tema visual, ícones do app e assets Windows adicionados.",
      "Terminal, Pomodoro, música e fundos ganharam painéis mais isolados.",
    ],
  },
  {
    version: "1.0.0-beta.0",
    date: "18 jul 2026",
    title: "Protótipo inicial",
    summary: "Protótipo inicial do Firekeep como app Node + React/Electron.",
    items: [
      "Projeto inicial com Vite, React, Electron, Express, Material UI, xterm, node-pty e WebSocket.",
      "Janela Electron com barra customizada e preload para controles da janela.",
      "Workspace inicial com Pomodoro, horário/data, terminal, painel de música do YouTube e upload de fundo.",
      "Persistência inicial via localStorage e API local para health, workspace, links de vídeo, fundo e terminal.",
    ],
  },
];
