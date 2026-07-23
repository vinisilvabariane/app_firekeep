import { Github, Monitor, PackageCheck } from "lucide-react";
import { Brand } from "@/components/Brand";
import { DownloadLink } from "@/components/DownloadLink";
import { BRAND_ASSETS, SITE_CONFIG } from "@/config/site";

export function DownloadSection() {
  return (
    <section id="download" className="download-section">
      <div className="download-mark" aria-hidden="true">
        <img src={BRAND_ASSETS.logo} alt="" />
      </div>

      <div className="download-content">
        <Brand />
        <h2>Seu próximo bloco de foco começa aqui.</h2>
        <p>
          Baixe o instalador, abra o Firekeep e monte uma sessão do seu jeito.
          Sem conta e sem configuração complicada.
        </p>

        <div className="installer-details">
          <span>
            <Monitor /> {SITE_CONFIG.platform}
          </span>
          <span>
            <PackageCheck /> v{SITE_CONFIG.version} · {SITE_CONFIG.installerSize}
          </span>
        </div>

        <div className="download-actions">
          <DownloadLink inverse />
          <a href={SITE_CONFIG.repositoryUrl} target="_blank" rel="noreferrer">
            <Github />
            Ver código no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
