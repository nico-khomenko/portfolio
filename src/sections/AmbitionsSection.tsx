const ambitions = [
  {
    title: 'Learn & Explore',
    description:
      'Deep dive into how businesses are built, understanding the fundamentals of entrepreneurship, leadership, and innovation.'
  },
  {
    title: 'Solve Community Problems',
    description:
      'Identify and address real challenges in my local community, creating solutions that make a tangible difference.'
  },
  {
    title: 'Build Real Ventures',
    description:
      'Transform ideas into reality by launching ventures that provide value, starting small and scaling strategically.'
  },
  {
    title: 'Lead with Purpose',
    description:
      'Develop leadership skills and build ventures that create lasting impact, going beyond just business success.'
  }
];

export function AmbitionsSection() {
  return (
    <section className="section section--center" id="ambitions">
      <h2>Ambitions & Goals</h2>
      <p className="section__lead">Where I'm headed and what I'm working towards.</p>
      <div className="grid grid--two">
        {ambitions.map((ambition) => (
          <article className="panel-card" key={ambition.title}>
            <h3>{ambition.title}</h3>
            <p>{ambition.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
