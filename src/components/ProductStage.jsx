import { useState } from "react";
import {
  ChevronRight,
  Clock3,
  Headphones,
  Maximize2,
  Pause,
  Play,
  Search,
  SkipForward,
  Terminal,
} from "lucide-react";
import { BRAND_ASSETS, PRODUCT_SCENES } from "@/config/site";

export function ProductStage() {
  const [activeScene, setActiveScene] = useState(0);
  const [timerRunning, setTimerRunning] = useState(true);

  return (
    <div className="product-stage" aria-label="Demonstração interativa do Firekeep">
      {PRODUCT_SCENES.map((scene, index) => (
        <img
          key={scene.src}
          className={`stage-background ${index === activeScene ? "is-active" : ""}`}
          src={scene.src}
          alt=""
        />
      ))}
      <div className="stage-shade" />

      <div className="stage-chrome" aria-hidden="true">
        <span className="stage-wordmark">
          <img src={BRAND_ASSETS.logo} alt="" />
          Firekeep
        </span>
        <span className="window-actions">—　□　×</span>
      </div>

      <div className="stage-widgets">
        <section className="app-widget pomodoro-widget" aria-label="Pomodoro">
          <div className="widget-heading">
            <span className="widget-icon">
              <Clock3 />
            </span>
            <span>
              <small>Foco</small>
              <strong>rodada 1/4</strong>
            </span>
            <Maximize2 />
          </div>
          <strong className="timer-value">24:36</strong>
          <span className="timer-track">
            <i />
          </span>
          <div className="timer-controls">
            <button type="button" onClick={() => setTimerRunning((current) => !current)}>
              {timerRunning ? <Pause /> : <Play />}
              {timerRunning ? "Pausar" : "Iniciar"}
            </button>
            <button type="button" className="icon-control" aria-label="Pular etapa">
              <SkipForward />
            </button>
          </div>
        </section>

        <section className="app-widget clock-widget" aria-label="Horário">
          <span>13:24</span>
          <small>domingo, 19 de julho</small>
        </section>

        <section className="app-widget music-widget" aria-label="Música">
          <div className="widget-heading">
            <span className="widget-icon">
              <Headphones />
            </span>
            <span>
              <small>Tocando agora</small>
              <strong>Calm focus</strong>
            </span>
          </div>
          <span className="music-track">
            <i />
          </span>
          <span className="music-meta">08:12 / 42:18</span>
        </section>
      </div>

      <div className="stage-terminal" aria-label="Terminal integrado">
        <span className="terminal-tab">
          <i />
          PowerShell
        </span>
        <code>
          <b>PS C:\Projetos\firekeep&gt;</b> npm run dev
        </code>
        <code className="terminal-success">ready in 331ms</code>
      </div>

      <div className="stage-search" aria-hidden="true">
        <Search />
        <span>Pesquisar sem sair do seu fluxo</span>
        <ChevronRight />
      </div>

      <div className="scene-switcher" aria-label="Trocar cenário da demonstração">
        <span>Troque o clima</span>
        <div>
          {PRODUCT_SCENES.map((scene, index) => (
            <button
              key={scene.src}
              type="button"
              className={index === activeScene ? "is-active" : ""}
              onClick={() => setActiveScene(index)}
              aria-label={`Usar cenário ${scene.label}`}
              aria-pressed={index === activeScene}
              title={scene.label}
            >
              <img src={scene.src} alt="" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
