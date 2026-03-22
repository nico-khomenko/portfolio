export function ContactSection() {
  return (
    <section className="section section--center" id="contact">
      <h2>Let's Connect</h2>
      <p className="section__lead">
        Interested in collaboration, discussing ideas, or just saying hello?
      </p>
      <div className="grid grid--two contact-grid">
        <a className="contact-card" href="mailto:nicolas.khomenko@gmail.com">
          <span>Email</span>
          <strong>nicolas.khomenko@gmail.com</strong>
        </a>
        <a className="contact-card" href="https://github.com/nico-khomenko" target="_blank" rel="noreferrer">
          <span>GitHub</span>
          <strong>@nico-khomenko</strong>
        </a>
      </div>
    </section>
  );
}
