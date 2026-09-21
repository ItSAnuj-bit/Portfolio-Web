import HeroPanel from "./HeroPanel";
export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hero-label">
          FULL-STACK DEVELOPER
        </p>

        <h1>
          Building digital
          <br />
          <span>things that work.</span>
        </h1>

        <p className="hero-description">
          I’m Anuj Singh, a Computer Science student focused on
          building modern web applications with React, Next.js
          and .NET.
        </p>

        <div className="hero-actions">
          <button className="primary-btn">
            View Projects →
          </button>

          <button className="secondary-btn">
            About Me
          </button>
        </div>

        <div className="hero-stack">
          <span>React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>C#</span>
          <span>.NET</span>
          <span>SQL</span>
        </div>

      </div>

      <HeroPanel />

    </section>
  );
}