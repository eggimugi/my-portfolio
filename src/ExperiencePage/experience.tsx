import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import profile from "../assets/profile_bg.jpg"; 

interface ExperienceItem {
  title: string;
  certificate: string;
  image: string;
  details: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Aunior BackEnd Programmer | Telkom DigiUp",
    certificate: "Certificate of Junior BackEnd Programmer",
    image: profile,
    details: "Details",
  },
  {
    title: "Bunior BackEnd Programmer | Telkom DigiUp",
    certificate: "Certificate of Junior BackEnd Programmer",
    image: "/images/experience2.jpg",
    details: "Details",
  },
  {
    title: "Cunior BackEnd Programmer | Telkom DigiUp",
    certificate: "Certificate of Junior BackEnd Programmer",
    image: "/images/experience3.jpg",
    details: "Details",
  },
  {
    title: "Dunior BackEnd Programmer | Telkom DigiUp",
    certificate: "Certificate of Junior BackEnd Programmer",
    image: "/images/experience3.jpg",
    details: "Details",
  },
  {
    title: "Eunior BackEnd Programmer | Telkom DigiUp",
    certificate: "Certificate of Junior BackEnd Programmer",
    image: "/images/experience3.jpg",
    details: "Details",
  },
  {
    title: "Funior BackEnd Programmer | Telkom DigiUp",
    certificate: "Certificate of Junior BackEnd Programmer",
    image: "/images/experience3.jpg",
    details: "Details",
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = containerRef.current?.offsetWidth || 0;
      const cardMinWidth = 320;
      const fit = Math.floor(width / cardMinWidth);
      setCardsPerView(Math.min(3, Math.max(1, fit)));
    };

    updateCardsPerView();
    const observer = new ResizeObserver(updateCardsPerView);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const total = experiences.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Get visible items with wrap-around logic
  const getVisibleItems = () => {
    const visible: ExperienceItem[] = [];
    for (let i = cardsPerView - 1; i >= 0; i--) {
      const idx = (activeIndex - i + total) % total;
      visible.push(experiences[idx]);
    }
    return visible;
  };

  const visibleItems = getVisibleItems();

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
        {/* Heading */}
        <div className="flex items-center mb-4">
          <div className="border border-white/60 rounded-md px-6 py-2 text-xl font-light relative">
            Things I’m Proud Of
            <span className="absolute -top-2 -left-1.5 w-3 h-3 rounded-full bg-white"></span>
            <span className="absolute -top-2 -right-1.5 w-3 h-3 rounded-full bg-white"></span>
            <span className="absolute -bottom-2 -left-1.5 w-3 h-3 rounded-full bg-white"></span>
            <span className="absolute -bottom-2 -right-1.5 w-3 h-3 rounded-full bg-white"></span>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-center md:text-left">
          Whoa, you’re still scrolling?{" "}
          <span className="text-white">I like that.</span>
        </h2>

        <p className="text-base md:text-lg text-white/90 mb-10 text-center md:text-left max-w-4xl">
          This part’s all about where I’ve been and what I’ve done — the
          hands-on stuff that helped me grow as a developer and a person.
          Nothing too fancy, just real experiences that shaped the way I build
          today.
        </p>

        {/* Carousel Navigation */}
        <div className="relative w-full flex justify-center items-center">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-20 px-3 py-2 text-white bg-white/10 hover:bg-white/20 rounded-full"
          >
            ◀
          </button>

          {/* Experience Cards */}
          <div ref={containerRef} className="overflow-hidden">
            <div className="flex gap-6 transition-all duration-300 ease-in-out">
              {visibleItems.map((exp, idx) => {
                const isActive = idx === visibleItems.length - 1;
                return (
                  <div
                    key={`${exp.title}-${idx}`}
                    className={clsx(
                      "bg-white/5 rounded-xl overflow-hidden min-w-[420px] max-w-xs w-full transition-all duration-300",
                      isActive ? "scale-105 z-10" : "scale-95 opacity-70"
                    )}
                  >
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold">{exp.title}</h3>
                      <p className="text-sm text-white/60">{exp.certificate}</p>
                      <button className="mt-2 text-xs bg-white/10 px-3 py-1 rounded hover:bg-white/20">
                        {exp.details}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-20 px-3 py-2 text-white bg-white/10 hover:bg-white/20 rounded-full"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
