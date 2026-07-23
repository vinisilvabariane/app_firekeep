import { useMemo, useState } from "react";
import { CheckCircle2, Flame, GitBranch, PackageOpen } from "lucide-react";
import { RELEASE_LOGS } from "@/config/site";

export function UpdatesSection({ standalone = false }) {
  const [selectedVersion, setSelectedVersion] = useState(RELEASE_LOGS[0].version);

  const selectedRelease = useMemo(
    () =>
      RELEASE_LOGS.find((release) => release.version === selectedVersion) ??
      RELEASE_LOGS[0],
    [selectedVersion]
  );

  return (
    <section
      id="atualizacoes"
      className={standalone ? "updates-section updates-section--page" : "updates-section"}
    >
      <div className="updates-heading">
        <p className="eyebrow">Logs de atualização</p>
        <h2>Veja exatamente o que mudou em cada versão.</h2>
        <p>
          As notas abaixo seguem o log real do app e mostram a evolução das betas
          até a versão atual do Firekeep.
        </p>
      </div>

      <div className="updates-console" aria-live="polite">
        <aside className="version-rail" aria-label="Versões lançadas">
          {RELEASE_LOGS.map((release) => (
            <button
              key={release.version}
              type="button"
              className={release.version === selectedVersion ? "is-active" : ""}
              onClick={() => setSelectedVersion(release.version)}
            >
              <span>v{release.version}</span>
              <small>{release.date}</small>
            </button>
          ))}
        </aside>

        <article className="release-panel">
          <div className="release-kicker">
            <span>
              <PackageOpen aria-hidden="true" />
              Release v{selectedRelease.version}
            </span>
            <span>
              <GitBranch aria-hidden="true" />
              {selectedRelease.date}
            </span>
          </div>

          <h3>{selectedRelease.title}</h3>
          <p>{selectedRelease.summary}</p>

          <ol className="release-timeline">
            {selectedRelease.items.map((item, index) => (
              <li key={item}>
                <span className="timeline-marker">
                  {index === 0 ? (
                    <Flame aria-hidden="true" />
                  ) : (
                    <CheckCircle2 aria-hidden="true" />
                  )}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </article>
      </div>
    </section>
  );
}
