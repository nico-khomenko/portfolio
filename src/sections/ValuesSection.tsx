const values = [
  {
    title: 'Curious & Analytical',
    description:
      'Always asking why things work the way they do and how they could work better. I bring an analytical mindset to every challenge.'
  },
  {
    title: 'Grounded & Focused',
    description:
      'Staying focused on steady progress over shortcuts. Building things that actually last requires patience and dedication.'
  },
  {
    title: 'Ambitious & Purposeful',
    description:
      'Driven to create ventures that matter. Learning fast, thinking boldly, and building with clear purpose and intention.'
  }
];

export function ValuesSection() {
  return (
    <section className="section section--center" id="values">
      <h2>Core Values</h2>
      <p className="section__lead">
        The principles that guide my approach to entrepreneurship and life.
      </p>
      <div className="grid grid--three">
        {values.map((value) => (
          <article className="panel-card" key={value.title}>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
