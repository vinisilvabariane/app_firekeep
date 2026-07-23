import { ArrowRight, Layers3, MonitorCog, ShieldCheck } from "lucide-react";

const STEPS = [
  {
    icon: Layers3,
    title: "Escolha o clima",
    text: "Defina o cenário, a música e a duração da sessão.",
  },
  {
    icon: MonitorCog,
    title: "Trabalhe sem trocar de contexto",
    text: "Use terminal, arquivos e pesquisa dentro do mesmo espaço.",
  },
  {
    icon: ShieldCheck,
    title: "Continue no ritmo",
    text: "O Pomodoro conduz foco e pausa sem interromper sua linha de raciocínio.",
  },
];

export function ProductSection() {
  return (
    <section className="product-section">
      <div className="product-statement">
        <p className="eyebrow">Um fluxo completo</p>
        <h2>Seu ritmo inteiro, em uma única tela.</h2>
      </div>

      <div className="flow-list">
        {STEPS.map((step, index) => (
          <article key={step.title}>
            <span className="flow-index">0{index + 1}</span>
            <step.icon aria-hidden="true" />
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
            {index < STEPS.length - 1 ? <ArrowRight aria-hidden="true" /> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
