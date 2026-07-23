import { ArrowDown, Check } from "lucide-react";
import { DownloadLink } from "@/components/DownloadLink";
import { ProductStage } from "@/components/ProductStage";
import { SITE_CONFIG } from "@/config/site";

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section">
      <ProductStage />

      <div className="hero-content">
        <p className="eyebrow">Seu ambiente de foco no desktop</p>
        <h1>Firekeep</h1>
        <p className="hero-lead">
          Entre no ritmo sem montar um quebra-cabeça de abas.
          Timer, música, visual, navegador e terminais no mesmo lugar.
        </p>

        <div className="hero-actions">
          <DownloadLink />
          <a className="text-link" href="#produto">
            Conhecer o produto <ArrowDown />
          </a>
        </div>

        <div className="hero-meta">
          <span>
            <Check /> Sem cadastro
          </span>
          <span>{SITE_CONFIG.platform}</span>
          <span>v{SITE_CONFIG.version}</span>
        </div>
      </div>
    </section>
  );
}
