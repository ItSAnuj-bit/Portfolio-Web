"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <Link
        href="/"
        className="logo"
        onClick={() => setMenuOpen(false)}
      >
        ANUJ<span>.SINGH</span>
      </Link>

      {/* Desktop */}
      <div className="nav-right">

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          
        </div>
        <Link href="/build" className="nav-button">
            Let's Build →
          </Link>

        

      </div>

      {/* Mobile */}
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "×" : "☰"}
      </button>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <Link href="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link href="/projects" onClick={() => setMenuOpen(false)}>
          Projects
        </Link>

        <Link href="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>

        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
        <Link
          href="/build"
          className="mobile-build"
          onClick={() => setMenuOpen(false)}
        >
          Let's Build →
         </Link>

      </div>

    </nav>
  );
}