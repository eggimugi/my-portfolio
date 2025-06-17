import profile from "../assets/profile.svg";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col justify-between mt-4">
        <div className="flex flex-col items-center pt-8 pb-[1vw] px-2 sm:px-4 relative">
          {/* Teks Atas */}
          <p className="text-center text-sm sm:text-base md:text-lg z-20">
            Hi there! I’m Eggi,
          </p>

          {/* Kontainer Teks + Gambar */}
          <div className="relative flex flex-col items-center z-10">
            <h1 className="text-[9vw] font-extrabold text-black text-center tracking-tight">
              WebDeveloper
            </h1>

            <h2 className="text-[8.9vw] font-extrabold text-black text-center mt-[-3vw]">
              <span
                className="text-transparent stroke-black stroke-2"
                style={{ WebkitTextStroke: "2px #000", color: "transparent" }}
              >
                & UI/UX Designer
              </span>
            </h2>

            {/* Teks Bawah */}
            <p className="self-start mt-4 mb-2 text-sm sm:text-base md:text-lg z-20">
              based in Malang, Indonesia.
            </p>

            {/* Gambar numpuk di tengah */}
            <img
              src={profile}
              alt="Profile"
              className="sm:absolute top-[26vw] sm:-translate-y-1/2 w-[60vw] grayscale z-10"
            />
          </div>

          {/* Tombol */}
          <div className="flex flex-col sm:flex-row gap-4 sm:mb-12 sm:w-auto w-full z-20">
            <a
              href="#work"
              className="bg-black text-white px-6 sm:px-8 py-3 rounded-md text-sm font-medium shadow hover:bg-gray-900 transition text-center"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="border border-black sm:border-none text-black px-6 sm:px-8 py-3 rounded-md font-medium shadow transition bg-transparent sm:bg-white xs:hover:bg-black xs:hover:text-white text-center"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      </section>

      {/* Gradient bawah untuk transisi mulus */}
      <div className="absolute bottom-0 left-0 w-full h-[5vw] bg-gradient-to-t from-white to-transparent z-20" />
    </div>
  );
}
