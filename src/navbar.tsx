import { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import logo from "./assets/logo-eggi.svg";

export default function Navbar() {
  const menuItems = [
    { label: "Home", href: "#" },
    { label: "About Me", href: "https://www.youtube.com" },
    { label: "Skills & Tools", href: "#skillsTools" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact Me", href: "#contactMe" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <nav
        className={`w-full z-50 transition-colors duration-300 ${
          isOpen || isScrolled ? "bg-white shadow-md" : "bg-transparent"
        } py-5 md:px-24 sm:px-10 px-8 font-montserrat sticky top-0`}
      >
        {/* Top bar: Logo & Hamburger */}
        <div className="flex justify-between items-center">
          <a href="#home">
            <img src={logo} alt="MyLogo" className="h-10" />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-10">
            {menuItems.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger only on mobile */}
          <div className="lg:hidden">
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              size={24}
              color="#000"
            />
          </div>
        </div>

        {/* Menu: Slide down only in mobile */}
        <div
          className={`
            transition-all duration-500 ease-in-out
            overflow-hidden
            lg:flex lg:items-center lg:justify-end
            ${isOpen ? "max-h-screen mt-4" : "max-h-0 mt-0"}
            lg:mt-0 lg:max-h-none lg:hidden
          `}
        >
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 md:space-x-10 text-white md:text-black">
            {menuItems.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
