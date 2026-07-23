import { Brand } from "@/components/Brand";
import { SITE_CONFIG } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Brand compact />
      <p>Feito para proteger o momento em que o trabalho começa a fluir.</p>
      <div>
        <a href="/#inicio">Início</a>
        <a href="/atualizacoes">Atualizações</a>
        <a href="/#download">Download</a>
        <a href={SITE_CONFIG.repositoryUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}
