import { Headphones, Image, Search, TerminalSquare, TimerReset } from "lucide-react";

const FEATURES = [
  {
    icon: TimerReset,
    label: "Pomodoro",
    text: "Blocos de foco e pausas já dentro do ambiente.",
  },
  {
    icon: Headphones,
    label: "Som",
    text: "Áudio do YouTube sem uma aba disputando sua atenção.",
  },
  {
    icon: Image,
    label: "Visual",
    text: "Cenários animados que transformam o clima da sessão.",
  },
  {
    icon: TerminalSquare,
    label: "Terminais",
    text: "Sessões reais de terminal ao lado do seu trabalho.",
  },
  {
    icon: Search,
    label: "Navegador",
    text: "Pesquisa rápida sem quebrar o contexto da tarefa.",
  },
];

export function ValueSection() {
  return (
    <section id="produto" className="value-section">
      <div className="value-intro">
        <p className="eyebrow">Menos preparação. Mais trabalho feito.</p>
        <h2>A sessão começa antes da primeira linha de código.</h2>
        <p>
          O Firekeep organiza tudo que ajuda você a entrar no fluxo,
          para que começar deixe de ser a parte mais difícil.
        </p>
      </div>

      <div className="feature-list" id="recursos">
        {FEATURES.map((feature) => (
          <article key={feature.label}>
            <feature.icon aria-hidden="true" />
            <div>
              <h3>{feature.label}</h3>
              <p>{feature.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
