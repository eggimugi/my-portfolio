import React from "react";

const socialLinks = [
  {
    href: "https://instagram.com/",
    label: "Instagram",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406 2.697 2.387 2.403 3.499 2.344 4.78 2.285 6.06 2.272 6.469 2.272 12c0 5.531.013 5.94.072 7.22.059 1.281.353 2.393 1.334 3.374.981.981 2.093 1.275 3.374 1.334 1.28.059 1.689.072 7.22.072s5.94-.013 7.22-.072c1.281-.059 2.393-.353 3.374-1.334.981-.981 1.275-2.093 1.334-3.374.059-1.28.072-1.689.072-7.22s-.013-5.94-.072-7.22c-.059-1.281-.353-2.393-1.334-3.374C19.393.425 18.281.131 17 .072 15.72.013 15.311 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/",
    label: "GitHub",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481C19.138 20.197 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/",
    label: "LinkedIn",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
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
  { label: "About Me", href: "#" },
  { label: "Skills", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Experience", href: "#" },
  { label: "Contact Me", href: "#" },
];

const toolsLinks = [
  { label: "Vite", href: "#" },
  { label: "React", href: "#" },
  { label: "TypeScript", href: "#" },
  { label: "TailwindCSS", href: "#" },
];

const Footer: React.FC = () => (
  <footer className="bg-black text-white pt-12 pb-4 px-4 sm:px-8 md:px-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
      {/* Left */}
      <div className="flex flex-col items-start">
        <div className="text-3xl font-bold mb-1">
          eggi<span className="text-xs">.</span>
        </div>
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
      <div className="flex sm:flex-row items-start justify-center md:gap-32 gap-16">
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
      <div className="flex flex-col items-center col-start-2 lg:col-auto md:items-end justify-center mt-4 md:mt-0">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-right leading-tight">
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
