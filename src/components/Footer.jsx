import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <Link href="/" className="footer-logo">
          ANUJ<span>.SINGH</span>
        </Link>

        <p>
          Building, learning and improving.
        </p>

      </div>

      <div className="footer-bottom">

        <span>© 2026 Anuj Singh</span>

        <div className="footer-links">
          <a
            href="https://github.com/ItSAnuj-bit"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/anuj-singh-4048793b9/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=anujsinghwork.in@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
        </div>

        <span>INDIA</span>

      </div>

    </footer>
  );
}