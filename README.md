# Firekeep Site

Site comercial e página oficial de download do Firekeep, um ambiente desktop
para foco com Pomodoro, música, cenários animados, navegador e terminais
integrados.

Construído com React 19, Vite e Tailwind CSS v4.

## Desenvolvimento

```bash
npm install
npm run dev
```

O servidor local abre em `http://localhost:3000`.

## Build

```bash
npm run build
npm run preview
```

O build de produção é gerado em `dist/`.

## Configuração

Os links do repositório, instalador, versão e plataforma ficam em
[`src/config/site.js`](src/config/site.js).

O instalador fica em `release/firekeep-setup-1.0.1.exe`, versionado com Git
LFS por ultrapassar o limite convencional de arquivos do GitHub. O botão do
site aponta diretamente para esse arquivo.

## Estrutura

```text
src/
  components/       # Componentes reutilizáveis e demonstração do produto
  config/            # Configuração central do site
  sections/          # Seções da landing page
  App.jsx            # Composição principal
  index.css          # Sistema visual e responsividade
public/
  logo.png                    # Marca sem fundo
  firekeep-scene-*.gif        # Cenários usados na demonstração
  og.png                      # Imagem para compartilhamento
release/
  firekeep-setup-1.0.1.exe    # Instalador Windows via Git LFS
```
