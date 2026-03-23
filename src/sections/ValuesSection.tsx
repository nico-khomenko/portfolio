import { useLanguage } from '../i18n';

export function ValuesSection() {
  const { content } = useLanguage();

  return (
    <section className="section section--center" id="values">
      <h2>{content.values.heading}</h2>
      <p className="section__lead">{content.values.lead}</p>
      <div className="grid grid--three">
        {content.values.items.map((value) => (
          <article className="panel-card" key={value.title}>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
