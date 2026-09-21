import Link from "next/link";

const projects = {
  digikissan: {
    number: "01",
    title: "DigiKissan",
    type: "Agriculture Platform",
    description:
      "A digital platform focused on presenting and managing drone-based agricultural services.",
    stack: ["Next.js", "TypeScript", ".NET", "SQL"],
  },

  portfolio: {
    number: "02",
    title: "Developer Portfolio",
    type: "Personal Website",
    description:
      "A minimal developer portfolio designed to showcase projects, skills and experiments.",
    stack: ["Next.js", "React", "CSS"],
  },
};

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects[slug];

  if (!project) {
    return (
      <main className="not-found">
        <h1>Project not found.</h1>
        <Link href="/projects">← Back to projects</Link>
      </main>
    );
  }

  return (
    <main className="project-page">

      <Link href="/projects" className="back-link">
        ← Back to projects
      </Link>

      <div className="project-detail-header">
        <span>
          {project.number} / {project.type}
        </span>

        <h1>
          {project.title}
        </h1>

        <p>
          {project.description}
        </p>
      </div>

      <div className="project-detail-content">

        <div className="project-placeholder">
          PROJECT PREVIEW
        </div>

        <div className="project-details">

          <div>
            <span>TECHNOLOGY</span>

            <div className="project-tags">
              {project.stack.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span>ABOUT</span>

            <p>
              This section will contain the actual project
              story, what problem it solves, how it was built,
              and what I learned while developing it.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}