import { useMemo, useState } from "react";
import { CheckCircle2, Flame, GitBranch, PackageOpen } from "lucide-react";
import { RELEASE_LOGS } from "@/config/site";

function isBeta(release) {
  return release.version.startsWith("beta.");
}

export function UpdatesSection({ standalone = false }) {
  const [selectedVersion, setSelectedVersion] = useState(RELEASE_LOGS[0].version);

  const stableReleases = useMemo(() => RELEASE_LOGS.filter((release) => !isBeta(release)), []);
  const betaReleases = useMemo(() => RELEASE_LOGS.filter(isBeta), []);

  const selectedRelease = useMemo(
    () =>
      RELEASE_LOGS.find((release) => release.version === selectedVersion) ??
      RELEASE_LOGS[0],
    [selectedVersion],
  );

  return (
    <section
      id="atualizacoes"
      className={standalone ? "updates-section updates-section--page" : "updates-section"}
    >
      <div className="updates-heading">
        <p className="eyebrow">Historico de lancamentos</p>
        <h2>Do primeiro beta ao Firekeep estavel.</h2>
        <p>
          Este historico acompanha o release log oficial do aplicativo. A versao
          1.0.0 marca o primeiro lancamento estavel; as versoes anteriores fazem
          parte do ciclo beta.
        </p>
      </div>

      <div className="updates-console" aria-live="polite">
        <aside className="version-rail" aria-label="Versoes lancadas">
          <div className="version-group">
            <p className="version-group-label">Versao oficial</p>
            {stableReleases.map((release) => (
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
          </div>
          <div className="version-group">
            <p className="version-group-label">Betas</p>
            {betaReleases.map((release) => (
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
          </div>
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
                  {index === 0 ? <Flame aria-hidden="true" /> : <CheckCircle2 aria-hidden="true" />}
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
