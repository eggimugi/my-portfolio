import { useEffect, useState, useRef } from "react";

interface ExperienceItem {
  title: string;
  certificate: string;
  image: string;
  details: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Junior BackEnd Programmer | Telkom DigiUp",
    certificate: "Certificate of Junior BackEnd Programmer",
    image: "/images/experience1.jpg",
    details: "Details",
  },
  {
    title: "Junior BackEnd Programmer | Telkom DigiUp",
    certificate: "Certificate of Junior BackEnd Programmer",
    image: "/images/experience2.jpg",
    details: "Details",
  },
  {
    title: "Junior BackEnd Programmer | Telkom DigiUp",
    certificate: "Certificate of Junior BackEnd Programmer",
    image: "/images/experience3.jpg",
    details: "Details",
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardWidth = 320; // width of each card (px), kamu bisa sesuaikan
  const gap = 24; // gap antar card (px)

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % experiences.length);
  };

  const prev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + experiences.length) % experiences.length
    );
  };

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center md:px-24 sm:px-10 px-8 py-16 overflow-hidden">
      {/* Background Experience Text */}
      <div className="absolute top-15 -right-90 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[16vw] font-extrabold text-white/5 leading-none z-0">
          Experience
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center md:items-start">
        {/* "Things I'm Proud Of" */}
        <div className="flex items-center mb-4">
          <div className="border border-white/60 rounded-md px-6 py-2 text-xl font-light relative">
            Things I’m Proud Of
            <span className="absolute -top-2 -left-1.5 w-3 h-3 rounded-full bg-white"></span>
            <span className="absolute -top-2 -right-1.5 w-3 h-3 rounded-full bg-white"></span>
            <span className="absolute -bottom-2 -left-1.5 w-3 h-3 rounded-full bg-white"></span>
            <span className="absolute -bottom-2 -right-1.5 w-3 h-3 rounded-full bg-white"></span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-center md:text-left">
          Whoa, you’re still scrolling?{" "}
          <span className="text-white">I like that.</span>
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-white/90 mb-10 text-center md:text-left max-w-4xl">
          This part’s all about where I’ve been and what I’ve done — the
          hands-on stuff that helped me grow as a developer and a person.
          Nothing too fancy, just real experiences that shaped the way I build
          today.
        </p>

        {/* Carousel Navigation */}
        <div className="relative w-full flex flex-col items-center overflow-hidden">
          {/* Carousel Area */}
          <div className="w-full overflow-hidden">
            <div
              ref={containerRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${activeIndex} * (${cardWidth}px + ${gap}px)))`,
              }}
            >
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 text-white rounded-xl shadow-lg overflow-hidden mx-3"
                  style={{
                    minWidth: `${cardWidth}px`,
                    maxWidth: `${cardWidth}px`,
                  }}
                >
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-60 object-cover object-center"
                  />
                  <div className="p-4">
                    <div className="font-semibold text-sm mb-1">
                      {exp.title}
                    </div>
                    <div className="text-xs text-white/70 mb-2">
                      {exp.certificate}
                    </div>
                    <button className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded hover:bg-white/20 transition">
                      {exp.details}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-4">
            {experiences.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  idx === activeIndex ? "bg-white" : "bg-white/40"
                }`}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button
              onClick={prev}
              className="text-white px-3 py-2 bg-white/10 hover:bg-white/20 rounded-full"
            >
              ◀
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button
              onClick={next}
              className="text-white px-3 py-2 bg-white/10 hover:bg-white/20 rounded-full"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
