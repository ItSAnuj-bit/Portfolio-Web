import Link from "next/link";

export default function Contact() {
  return (
    <main className="contact-page">

      <div className="contact-header">
        <span>04 / CONTACT</span>

        <h1>
          Let's build
          <br />
          <span>something.</span>
        </h1>
      </div>

      <section className="contact-content">

        <p>
          Have a project, opportunity, or just want to talk
          about development?
        </p>

        <div className="contact-links">

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=anujsinghwork.in@gmail.com"
            target="_blank"
            rel="noreferrer"
            >
            <span>EMAIL</span>
            <strong>anujsinghwork.in@gmail.com ↗</strong>
        </a>

          <a
            href="https://github.com/ItSAnuj-bit"
            target="_blank"
            rel="noreferrer"
          >
            <span>GITHUB</span>
            <strong>ItSAnuj-bit ↗</strong>
          </a>

          <a
            href="https://www.linkedin.com/in/anuj-singh-4048793b9/"
            target="_blank"
            rel="noreferrer"
          >
            <span>LINKEDIN</span>
            <strong>anuj-singh ↗</strong>
          </a>

        </div>

      </section>

    </main>
  );
}