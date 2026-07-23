import { Github } from "lucide-react";
import { DownloadLink } from "@/components/DownloadLink";
import { SITE_CONFIG } from "@/config/site";

export function SiteHeader({ solid = false }) {
  return (
    <header className={solid ? "site-header site-header--solid" : "site-header"}>
      <nav aria-label="Navegação principal">
        <a href="/#produto">Produto</a>
        <a href="/#recursos">Recursos</a>
        <a href="/atualizacoes">Atualizações</a>
        <a
          href={SITE_CONFIG.repositoryUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Código do Firekeep no GitHub"
        >
          <Github />
          <span>Código</span>
        </a>
      </nav>

      <DownloadLink compact inverse />
    </header>
  );
}
