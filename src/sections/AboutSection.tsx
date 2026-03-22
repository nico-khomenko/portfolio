const aboutHighlights = [
  {
    title: 'Education',
    lineOne: '9th Grade Student',
    lineTwo: 'Collège Héritage'
  },
  {
    title: 'Location',
    lineOne: 'Quebec, Canada',
    lineTwo: 'Open to remote collaboration'
  },
  {
    title: 'Focus',
    lineOne: 'Entrepreneurship',
    lineTwo: 'Business & Leadership'
  }
];

export function AboutSection() {
  return (
    <section className="section" id="about">
      <h2>About Me</h2>
      <div className="section__underline" />
      <div className="grid grid--three">
        {aboutHighlights.map((item) => (
          <article className="panel-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.lineOne}</p>
            <p>{item.lineTwo}</p>
          </article>
        ))}
      </div>
      <article className="panel-card panel-card--large">
        <p>
          I'm driven by a simple but powerful belief: that ideas, when pursued with intention, can
          become something real. At 9th grade, I'm not waiting to start. I'm already thinking like an
          entrepreneur, exploring how businesses are built and what it takes to lead them.
        </p>
        <p>
          I bring a curious and analytical mindset to everything I do, always asking why things work
          the way they do and how they could work better. At the same time, I stay grounded and
          focused on steady progress over shortcuts.
        </p>
        <p>
          My ambition is to create ventures that matter. Whether that's solving a problem in my
          community or scaling something bigger down the road, I'm here to learn fast, think boldly,
          and build with purpose.
        </p>
      </article>
    </section>
  );
}
