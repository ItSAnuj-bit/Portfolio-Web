import Link from "next/link";

const projects = [
  {
    slug: "digikissan",
    number: "01",
    title: "DigiKissan",
    type: "Agriculture Platform",
    description:
      "A web platform for drone-based agricultural services.",
    stack: "Next.js · TypeScript · .NET",
  },
  {
    slug: "portfolio",
    number: "02",
    title: "Developer Portfolio",
    type: "Personal Website",
    description:
      "A minimal portfolio built with Next.js and React.",
    stack: "Next.js · React · CSS",
  },
];

export default function Projects() {
  return (
    <main className="projects-page">

      <header className="projects-header">
        <span>02 / WORK</span>

        <h1>
          Selected
          <br />
          <span>Projects.</span>
        </h1>
      </header>

      <section className="projects-list">

        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            className="project"
            key={project.number}
          >
            <div className="project-number">
              {project.number}
            </div>

            <div className="project-main">
              <p>{project.type}</p>

              <h2>{project.title}</h2>

              <span>{project.description}</span>

              <small>{project.stack}</small>
            </div>

            <div className="project-arrow">
              ↗
            </div>
          </Link>
        ))}

      </section>

    </main>
  );
}   