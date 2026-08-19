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

O instalador não fica versionado neste repositório: o botão do site aponta
direto para o asset publicado em GitHub Releases do repositório
[`desktop_fk`](https://github.com/vinisilvabariane/desktop_fk/releases). Isso
evita o limite de tamanho de arquivo do GitHub/Vercel e o problema de a Vercel
não buscar o conteúdo real de arquivos versionados via Git LFS.

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
```
