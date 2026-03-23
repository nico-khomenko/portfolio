import { useLanguage } from '../i18n';

export function HeroSection() {
  const { content } = useLanguage();

  return (
    <section className="hero">
      <div className="hero__tag">{content.hero.tag}</div>
      <h1>{content.hero.title}</h1>
      <p>{content.hero.description}</p>
      <div className="hero__actions">
        <a className="button button--primary" href="#about">
          {content.hero.primaryAction}
        </a>
        <a className="button button--ghost" href="#contact">
          {content.hero.secondaryAction}
        </a>
      </div>
    </section>
  );
}
