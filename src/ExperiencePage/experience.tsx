import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import problemSolving from "../assets/Certificate/problemSolving.jpg"
import bisnis from "../assets/Certificate/bisnis.jpg"
import desain from "../assets/Certificate/desain.jpg"
import lks from "../assets/Certificate/lks.jpg"
import bnsp from "../assets/Certificate/bnsp.jpg"

interface ExperienceItem {
  title: string;
  certificate: string;
  image: string;
  details: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Basic Problem Solving | Hackerrank",
    certificate: "Certificate of Basic Problem Solving",
    image: problemSolving,
    details: "https://drive.google.com/file/d/1ha1u8feQ6Idzunm7Y9TaOtwQJNR9Z9sV/view?usp=sharing",
  },
  {
    title: "Business Plan | Machung University",
    certificate: "1st Place Business Plan Competition",
    image: bisnis,
    details: "https://drive.google.com/file/d/10YGlcfTJ_QMb1_wpGzxjR9jksxHoLOkC/view?usp=sharing",
  },
  {
    title: "UI & UX Design | STIKI Malang",
    certificate: "Finalist of the UI & UX Design",
    image: desain,
    details: "https://drive.google.com/file/d/1ceFIlxvGVpCPOZNL4qEvk9yOIo9VKY5j/view?usp=sharing",
  },
  {
    title: "Mobile Robotics | LKS Kota Malang",
    certificate: "1st Place Mobile Robotics LKS Kota Malang",
    image: lks,
    details: "https://drive.google.com/file/d/1LdTAK6wiRmsWjQe_biK0F1F1cLhbjial/view?usp=sharing",
  },
  {
    title: "Junior Web Programmer | Badan Nasional Sertifikasi Profesi",
    certificate: "Certificate of Competence as a Junior Web Programmer",
    image: bnsp,
    details: "https://drive.google.com/file/d/1NSqXvnrYsVOEVXvrRNdPA2xZm9kvMib_/view?usp=sharing",
  },
];

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activePosition, setActivePosition] = useState(0); // 0: left, 1: center, 2: right

  // Responsive: determine how many cards to show based on screen size
  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1; // mobile: 1 card
      if (window.innerWidth < 1500) return 2; // tablet: 2 cards
      return 3; // desktop: 3 cards
    }
    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(3);

  // Initialize cards per view after component mounts
  useEffect(() => {
    setCardsPerView(getCardsPerView());
  }, []);

  // Update cards per view on resize
  useEffect(() => {
    const handleResize = () => {
      const newCardsPerView = getCardsPerView();
      if (newCardsPerView !== cardsPerView) {
        setCardsPerView(newCardsPerView);
        // Reset to safe position when changing view
        setCurrentIndex(0);
        setActivePosition(0);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [cardsPerView]);

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < cardsPerView; i++) {
      const index = currentIndex + i;
      if (index < experiences.length) {
        items.push({ ...experiences[index], originalIndex: index });
      }
    }
    return items;
  };

  const canGoNext = () => {
    const maxActivePosition = cardsPerView - 1;
    // Can go next if we haven't reached the end or if active is not at the rightmost position of the last set
    if (currentIndex + cardsPerView - 1 < experiences.length - 1) return true;
    if (
      currentIndex + cardsPerView - 1 === experiences.length - 1 &&
      activePosition < maxActivePosition
    )
      return true;
    return false;
  };

  const canGoPrev = () => {
    // Can go prev if we're not at the very beginning
    return currentIndex > 0 || activePosition > 0;
  };

  const handleNext = () => {
    if (!canGoNext()) return;

    const maxActivePosition = cardsPerView - 1;

    // For mobile (1 card): just shift cards
    if (cardsPerView === 1) {
      setCurrentIndex(currentIndex + 1);
      return;
    }

    // For 2+ cards: use the original logic
    if (activePosition < Math.floor(cardsPerView / 2)) {
      // Move active towards center
      setActivePosition(activePosition + 1);
    } else if (activePosition === Math.floor(cardsPerView / 2)) {
      // Active is at center position
      if (currentIndex + cardsPerView < experiences.length) {
        // Can shift cards, keep active at center
        setCurrentIndex(currentIndex + 1);
      } else {
        // Can't shift, move active to right
        setActivePosition(maxActivePosition);
      }
    } else if (activePosition < maxActivePosition) {
      // Move active towards right edge
      setActivePosition(activePosition + 1);
    }
  };

  const handlePrev = () => {
    if (!canGoPrev()) return;

    // For mobile (1 card): just shift cards
    if (cardsPerView === 1) {
      setCurrentIndex(currentIndex - 1);
      return;
    }

    const centerPosition = Math.floor(cardsPerView / 2);

    if (activePosition > centerPosition) {
      // Active is on the right side, move towards center
      setActivePosition(activePosition - 1);
    } else if (activePosition === centerPosition) {
      // Active is at center
      if (currentIndex > 0) {
        // Can shift cards back, keep active at center
        setCurrentIndex(currentIndex - 1);
      } else {
        // Can't shift, move active to left
        setActivePosition(0);
      }
    } else if (activePosition > 0) {
      // Move active towards left edge
      setActivePosition(activePosition - 1);
    } else if (currentIndex > 0) {
      // Active at left edge, shift cards back and move active to center
      setCurrentIndex(currentIndex - 1);
      setActivePosition(centerPosition);
    }
  };

  const visibleItems = getVisibleItems();

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center md:px-24 sm:px-10 px-8 py-16 overflow-hidden">
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
        <div className="relative flex flex-col justify-center w-full">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={!canGoPrev()}
            className={`absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 p-1 sm:p-2 rounded transition-all duration-300 ${
              canGoPrev() ? "bg-white hover:bg-gray-300 text-black" : "hidden"
            }`}
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={handleNext}
            disabled={!canGoNext()}
            className={`absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 p-1 sm:p-2 rounded transition-all duration-300 ${
              canGoNext() ? "bg-white hover:bg-gray-300 text-black" : "hidden"
            }`}
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>

          {/* Experience Cards */}
          <div
            className={`flex justify-center transition-all duration-500 ease-in-out ${
              cardsPerView === 1
                ? "gap-4"
                : cardsPerView === 2
                ? "gap-4 sm:gap-6"
                : "gap-4 sm:gap-6"
            }`}
          >
            {visibleItems.map((exp, idx) => {
              const isActive = idx === activePosition;
              return (
                <div
                  key={`${exp.originalIndex}-${currentIndex}`}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 ${
                    cardsPerView === 1
                      ? "w-full max-w-sm mx-auto"
                      : cardsPerView === 2
                      ? "min-w-0 flex-1 max-w-sm"
                      : "min-w-[280px] sm:min-w-[320px] flex-shrink-0"
                  } ${
                    isActive
                      ? "scale-100 sm:scale-105 z-10 shadow-2xl ring-2 ring-white/20"
                      : "scale-95 sm:scale-95 opacity-70 hover:opacity-85"
                  }`}
                >
                  <div className="relative">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-36 sm:h-44 lg:h-48 object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="font-bold text-white text-base sm:text-lg mb-2 line-clamp-2">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-white/70 mb-3 sm:mb-4">
                      {exp.certificate}
                    </p>
                    <a href={exp.details} target="_blank" rel="noopener noreferrer" className=" flex justify-center w-full text-xs sm:text-sm bg-gradient-to-r bg-transparent border border-white text-white hover:bg-white hover:text-black cursor-pointer px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 font-medium">
                      See the File
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-1 sm:gap-2">
            {experiences.map((_, idx) => {
              const isCurrentlyVisible =
                idx >= currentIndex && idx < currentIndex + cardsPerView;
              const isActive =
                isCurrentlyVisible && idx - currentIndex === activePosition;

              return (
                <div
                  key={idx}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-white to-gray-100 w-6 sm:w-8"
                      : isCurrentlyVisible
                      ? "bg-white/40 w-4 sm:w-6"
                      : "bg-white/20 w-1.5 sm:w-2"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
