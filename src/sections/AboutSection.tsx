import { useLanguage } from '../i18n';

export function AboutSection() {
  const { content } = useLanguage();

  return (
    <section className="section" id="about">
      <h2>{content.about.heading}</h2>
      <div className="section__underline" />
      <div className="grid grid--three">
        {content.about.highlights.map((item) => (
          <article className="panel-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.lineOne}</p>
            <p>{item.lineTwo}</p>
          </article>
        ))}
      </div>
      <article className="panel-card panel-card--large">
        {content.about.paragraphs.map((paragraph, index) => (
          <p key={`${content.about.heading}-paragraph-${index + 1}`}>{paragraph}</p>
        ))}
      </article>
    </section>
  );
}
