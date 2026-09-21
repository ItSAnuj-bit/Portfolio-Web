"use client";

import { useState } from "react";

export default function BuildPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <main className="build-page">

      <section className="build-header">

        <div className="build-label">
          <span>05</span>
          <span>START A PROJECT</span>
        </div>

        <div>
          <h1>
            Let's build
            <br />
            <span>something.</span>
          </h1>

          <p>
            Have an idea, project, or opportunity?
            Tell me a little about it.
          </p>
        </div>

      </section>


      <form
        className="build-form"
        onSubmit={handleSubmit}
      >

        <div className="form-field">
          <label htmlFor="name">
            01 / YOUR NAME
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>


        <div className="form-field">
          <label htmlFor="email">
            02 / EMAIL
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>


        <div className="form-field">
          <label htmlFor="type">
            03 / WHAT ARE YOU BUILDING?
          </label>

          <select
            id="type"
            name="type"
            value={form.type}
            onChange={handleChange}
            required
          >
            <option value="">
              Select an option
            </option>

            <option value="website">
              Website
            </option>

            <option value="web-app">
              Web Application
            </option>

            <option value="full-stack">
              Full-Stack Application
            </option>

            <option value="other">
              Something else
            </option>
          </select>
        </div>


        <div className="form-field">
          <label htmlFor="message">
            04 / TELL ME ABOUT IT
          </label>

          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your idea..."
            rows="6"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>


        <button
          type="submit"
          className="submit-button"
        >
          SEND MESSAGE →
        </button>

      </form>

    </main>
  );
}