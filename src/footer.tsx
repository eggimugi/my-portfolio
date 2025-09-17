import React from "react";
import logo from "./assets/logoWhite.svg";

const socialLinks = [
  {
    href: "https://www.instagram.com/e.eggi_/",
    label: "Instagram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/eggimugi",
    label: "GitHub",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.87-1.39-3.87-1.39-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.08.79 2.18v3.24c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/eggimugi/",
    label: "LinkedIn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.37h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.61z" />
      </svg>
    ),
  },
  {
    href: "mailto:eggimugi03@gmail.com",
    label: "Email",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M12 13.065L2.4 6.6V18h19.2V6.6l-9.6 6.465zm9.6-9.6H2.4C1.08 3.465 0 4.545 0 5.865v12.27c0 1.32 1.08 2.4 2.4 2.4h19.2c1.32 0 2.4-1.08 2.4-2.4V5.865c0-1.32-1.08-2.4-2.4-2.4zm-9.6 8.535L2.4 6.6h19.2l-9.6 6.4z" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Me", href: "#about" },
  { label: "Skills & Tools", href: "#skillsTools" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact Me", href: "#contactMe" },
];

const toolsLinks = [
  { label: "Vite", href: "https://vite.dev/" },
  { label: "React", href: "https://react.dev/" },
  { label: "TypeScript", href: "https://www.typescriptlang.org/" },
  { label: "TailwindCSS", href: "https://tailwindcss.com/" },
];

const Footer: React.FC = () => (
  <footer className="bg-black text-white pt-12 pb-4 px-14 sm:px-24">
    <div className="max-w-7xl grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16">
      {/* Left */}
      <div className="flex flex-col items-start">
        <a href="#">
          <img src={logo} alt="MyLogo" className="h-10" />
        </a>
        <div className="text-sm mb-6">Malang, Indonesia</div>
        <div className="text-sm mb-1">+62 897 4925 7423</div>
        <div className="text-sm mb-3">eggimugi03@gmail.com</div>
        <div className="flex gap-3 mt-2 justify-center md:justify-start">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <span className="sr-only">{s.label}</span>
              <span className="border border-white rounded-full p-2 flex items-center justify-center hover:bg-white hover:text-black transition">
                {s.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
      {/* Center */}
      <div className="col-start-1 sm:col-auto flex sm:flex-row items-start sm:justify-center md:gap-32 gap-16">
        <div>
          <div className="font-bold mb-2 text-lg text-left">Explore</div>
          <ul className="space-y-1 text-sm text-left">
            {navLinks.map((nav) => (
              <li key={nav.label}>
                <a href={nav.href} className="hover:underline">
                  {nav.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-bold mb-2 text-lg text-left">Tools</div>
          <ul className="space-y-1 text-sm text-left">
            {toolsLinks.map((tools) => (
              <li key={tools.label}>
                <a href={tools.href} className="hover:underline">
                  {tools.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-col sm:items-center sm:col-start-2 lg:col-auto md:items-end justify-center mt-4 md:mt-0">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold sm:text-right leading-tight">
          Crafted with clarity
          <br />
          and purpose.
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-8 border-t border-gray-600 pt-2 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 gap-2">
      <span>&copy; 2025 eggi. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
