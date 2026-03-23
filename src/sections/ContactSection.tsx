import { useLanguage } from '../i18n';

export function ContactSection() {
  const { content } = useLanguage();

  return (
    <section className="section section--center" id="contact">
      <h2>{content.contact.heading}</h2>
      <p className="section__lead">{content.contact.lead}</p>
      <div className="grid grid--two contact-grid">
        <a className="contact-card" href="mailto:nicolas.khomenko@gmail.com">
          <span>{content.contact.emailLabel}</span>
          <strong>nicolas.khomenko@gmail.com</strong>
        </a>
        <a className="contact-card" href="https://github.com/nico-khomenko" target="_blank" rel="noreferrer">
          <span>{content.contact.githubLabel}</span>
          <strong>@nico-khomenko</strong>
        </a>
      </div>
    </section>
  );
}
