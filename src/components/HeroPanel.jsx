export default function HeroPanel() {
  return (
    <div className="hero-panel">

      <div className="panel-top">
        <span>01</span>
        <span>ANUJ.DEV</span>
        <span>●</span>
      </div>

      <div className="panel-content">

        <p className="panel-comment">
          // currently building
        </p>

        <h3>
          Full-stack
          <br />
          applications.
        </h3>

        <div className="panel-line"></div>

        <div className="panel-info">
          <span>FRONTEND</span>
          <strong>React / Next.js</strong>
        </div>

        <div className="panel-info">
          <span>BACKEND</span>
          <strong>C# / .NET</strong>
        </div>

        <div className="panel-info">
          <span>DATABASE</span>
          <strong>SQL</strong>
        </div>

      </div>

      <div className="panel-bottom">
        <span>STATUS</span>
        <span className="online">● ONLINE</span>
      </div>

    </div>
  );
}