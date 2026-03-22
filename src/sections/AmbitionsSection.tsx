import { useLanguage } from '../i18n';

export function AmbitionsSection() {
  const { content } = useLanguage();

  return (
    <section className="section section--center" id="ambitions">
      <h2>{content.ambitions.heading}</h2>
      <p className="section__lead">{content.ambitions.lead}</p>
      <div className="grid grid--two">
        {content.ambitions.items.map((ambition) => (
          <article className="panel-card" key={ambition.title}>
            <h3>{ambition.title}</h3>
            <p>{ambition.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
