export default function About() {
  return (
    <main className="about-page">

      <section className="about-hero">

        <div className="about-label">
          <span>03</span>
          <span>ABOUT ME</span>
        </div>

        <div className="about-title">
          <h1>
            I like
            <br />
            <span>building things.</span>
          </h1>
        </div>

      </section>


      <section className="about-introduction">

        <div className="about-number">
          01
        </div>

        <div className="about-text">
          <p className="about-large">
            I'm Anuj — a Computer Science student who enjoys
            turning ideas into working software.
          </p>

          <p>
            My focus is full-stack web development. I work
            mainly with React, Next.js, TypeScript, C#,
            ASP.NET Core and SQL.
          </p>

          <p>
            I learn by building. Instead of only following
            tutorials, I try to turn what I learn into
            projects and real applications.
          </p>
        </div>

      </section>


      <section className="about-grid">

        <div className="about-card">
          <span>01 / CURRENTLY</span>

          <h2>
            Learning
            <br />
            & building.
          </h2>

          <p>
            Exploring full-stack development, backend
            architecture and better ways to build software.
          </p>
        </div>


        <div className="about-card">
          <span>02 / STACK</span>

          <div className="stack-list">
            <div>
              <span>01</span>
              <strong>React / Next.js</strong>
            </div>

            <div>
              <span>02</span>
              <strong>TypeScript</strong>
            </div>

            <div>
              <span>03</span>
              <strong>C# / ASP.NET Core</strong>
            </div>

            <div>
              <span>04</span>
              <strong>SQL</strong>
            </div>
          </div>
        </div>


        <div className="about-card wide">
          <span>03 / HOW I WORK</span>

          <h2>
            Learn → Build → Break → Understand
          </h2>

          <p>
            I prefer understanding why something works rather
            than simply making it work. When something breaks,
            I use it as an opportunity to understand the system
            better.
          </p>
        </div>

      </section>

    </main>
  );
}