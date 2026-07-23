export const SITE_CONFIG = {
  repositoryUrl: "https://github.com/vinisilvabariane/app_firekeep",
  downloadUrl:
    "https://github.com/vinisilvabariane/app_firekeep/raw/refs/heads/main/release/firekeep-setup-beta.1.8.exe",
  version: "beta.1.8",
  installerSize: "160 MB",
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
    version: "beta.1.8",
    date: "23 jul 2026",
    title: "Navegação persistente e desempenho aprimorado",
    summary:
      "Beta focada em preservar o estado do navegador, eliminar artefatos visuais e reduzir o custo de editor, terminais e superfícies animadas.",
    items: [
      "Cada aba do navegador agora mantém seu próprio webview ativo, sem recarregar a página ao alternar entre guias.",
      "Abas fechadas são persistidas imediatamente e não reaparecem quando o navegador ou o app é aberto novamente.",
      "Redimensionamentos do painel e da janela realinham o conteúdo do navegador, corrigindo faixas pretas.",
      "O navegador aguarda o webview ficar pronto antes de usar sua API e oferece iframe como fallback no modo web.",
      "A GPU voltou a ser habilitada por padrão, com FIREKEEP_DISABLE_GPU=1 disponível para drivers problemáticos.",
      "Monaco, terminais ocultos e superfícies com fundos GIF receberam otimizações para reduzir renderizações e processamento contínuo.",
      "Cards ficaram mais transparentes, e o controle de fundo agora chega a 0% com escurecimento adicional em níveis baixos.",
      "Pesquisas usam o Google em português e a sessão isolada preserva a preferência de tema escuro.",
      "Sessões de terminal ganharam numeração estável; fechar a última aba encerra o PTY, enquanto minimizar preserva a sessão.",
      "Nomes de fundos e pares nome/link do YouTube agora são restaurados pelos seeds em clones e instalações novas.",
    ],
  },
  {
    version: "beta.1.7",
    date: "22 jul 2026",
    title: "Monaco, explorador operacional e navegador redesenhado",
    summary:
      "Beta de amadurecimento do workspace desktop, com novo editor Monaco, explorador de arquivos operacional, navegador redesenhado e reforços de estabilidade no Electron.",
    items: [
      "Editor de código migrado para Monaco, com workers locais, linguagens, salvamento por Ctrl+S, tratamento de erros e recuperação visual.",
      "Explorador agora cria arquivos e pastas, abre menu de contexto, confirma exclusões e move itens por arrastar e soltar.",
      "Navegação do explorador ganhou ação global para subir um nível ao lado do controle de recolher o painel.",
      "Navegador interno ganhou uma tela inicial de pesquisa e uma faixa horizontal de favoritos, substituindo a grade de favoritos.",
      "Workspace ganhou dock central para Explorador, Navegador, Terminal, Grid e tela cheia, com carregamento sob demanda dos painéis pesados.",
      "Novos logotipos e ícones do Firekeep aplicados na janela, no app e no instalador Windows.",
      "API local ganhou operações para criar, mover e excluir arquivos e pastas.",
      "Navegador reutiliza um único webview entre as guias e reduziu o limite da sessão para oito guias para conter memória.",
      "Recuperação de página travada recria o webview; crash do processo GPU não recarrega mais a janela inteira e suas guias.",
    ],
  },
  {
    version: "beta.1.6",
    date: "20 jul 2026",
    title: "Navegador interno mais estável",
    summary: "Beta com ajustes no navegador interno e organização do histórico de versões.",
    items: [
      "Fechar a última aba agora fecha o navegador interno e deixa o próximo início preparado no Hub.",
      "O navegador voltou a usar apenas um webview ativo por vez para reduzir tela preta, travamentos e crashes do Chromium.",
      "Pesquisas digitadas agora usam uma página leve do DuckDuckGo em vez da busca do Google dentro do webview.",
      "Falhas de carregamento e crashes de página agora exibem o painel de recuperação em vez de deixar a área preta.",
      "GPU fica desativada por padrão no Electron, inclusive em desenvolvimento; FIREKEEP_USE_GPU=1 reativa manualmente.",
    ],
  },
  {
    version: "beta.1.5",
    date: "20 jul 2026",
    title: "Interface, Spotify e Worker local",
    summary: "Beta de consolidação de interface, música, Spotify, Worker do backend e estabilidade gráfica.",
    items: [
      "Menu central do workspace agrupa Explorador, Navegador, Terminal, Grid e Tela cheia.",
      "Versão atual exibida no canto inferior direito do app.",
      "Backend local movido para um Worker Node separado do processo principal do Electron.",
      "Modo de música alterna entre YouTube e Spotify, com OAuth PKCE e Web Playback SDK.",
      "Rotas, arquivos locais, logs JSONL, preferências, seeds e gateway de terminal rodam fora do processo principal.",
    ],
  },
  {
    version: "beta.1.4",
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
    version: "beta.1.3",
    date: "18 jul 2026",
    title: "Backend modular e instalador Windows",
    summary: "Beta grande que separa o backend em módulos, adiciona persistência local e prepara o instalador.",
    items: [
      "Backend separado em routes, stores, fs-service, terminal-gateway, config e utils.",
      "API local consolidada para saúde, workspace, projetos, músicas, fundos, preferências, arquivos e terminal via WebSocket.",
      "Painel de fundos, player de música, explorador, editor e terminal com múltiplas sessões.",
      "Upload de fundos passou a usar corpo binário puro, evitando JSON/base64 grande.",
      "Electron Builder configurado para gerar instalador Windows NSIS x64.",
    ],
  },
  {
    version: "beta.1.2",
    date: "18 jul 2026",
    title: "Empacotamento",
    summary: "Beta pequeno de ajustes no fluxo de release.",
    items: [
      "Saída do instalador configurada no package.json.",
      ".gitignore atualizado para ignorar artefatos locais de release.",
    ],
  },
  {
    version: "beta.1.1",
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
    version: "beta.1.0",
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
