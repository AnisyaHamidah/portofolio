"use client";
import { useState, useEffect } from "react";

export const Header = () => {
  const [active, setActive] = useState("#hero-section");

  // Auto update active saat scroll
  useEffect(() => {
    const sections = [
      "#hero-section",
      "#project-section",
      "#about-section",
      "#contact-section",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((id) => {
      const el = document.querySelector(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (section: string) =>
    `nav-item ${
      active === section
        ? "bg-white text-gray-900"
        : "text-white hover:bg-white/10"
    }`;

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-pink-300/40 rounded-full bg-pink-700/30 backdrop-blur">

        <a
          href="#hero-section"
          onClick={() => setActive("#hero-section")}
          className={linkClass("#hero-section")}
        >
          Home
        </a>

        <a
          href="#project-section"
          onClick={() => setActive("#project-section")}
          className={linkClass("#project-section")}
        >
          Projects
        </a>

        <a
          href="#about-section"
          onClick={() => setActive("#about-section")}
          className={linkClass("#about-section")}
        >
          About
        </a>

        <a
          href="#contact-section"
          onClick={() => setActive("#contact-section")}
          className={linkClass("#contact-section")}
        >
          Contact
        </a>

      </nav>
    </div>
  );
};
