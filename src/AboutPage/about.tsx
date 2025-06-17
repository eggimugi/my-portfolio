import profile_bg from "../assets/profile_bg.jpg";

export default function About() {
  return (
    <>
      <section className="min-h-screen flex justify-center items-center md:px-24 sm:px-10 px-8 py-16">
        <div className="flex flex-col 2xl:flex-row justify-between xl:items-start">
          {/* Call to Action */}
          <div className="w-full 2xl:w-1/3 mt-12 lg:mt-0 2xl:order-3">
            <div className="mb-4 border-b-2 border-black inline-block pb-1 text-xl font-medium">
              All About Me
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-gray-900 mb-6 mt-4">
              Smart move my guy, look who’s curious.
              <br />
              You’ve officially scrolled into my story!
            </h1>
            <button className="px-6 py-2 bg-black text-white rounded shadow hover:bg-gray-800 transition">
              Contact Me
            </button>
          </div>

          <div className="2xl:w-2/3 flex flex-col lg:flex-row justify-between lg:justify-start items-center lg:items-start lg:gap-18 gap-10 mt-12 2xl:mt-0">
            {/* Gambar */}
            <div className="w-1/2 flex lg:order-1 lg:justify-between lg:w-auto justify-center items-center">
              <img
                src={profile_bg} // Ganti dengan path gambarmu
                alt="Profile"
                className="2xl:w-[20vw] w-[30vw] h-auto object-cover grayscale"
              />
            </div>

            {/* Deskripsi */}
            <div className="w-full lg:w-1/2 text-center lg:text-left lg:order-2">
              <h2 className="text-3xl font-semibold mb-4">
                Hey there! I'm Eggi
              </h2>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                A software engineering student passionate about building clean,
                fast, and user-friendly web experiences. I'm currently focused
                on React, Next.js, and TypeScript through real projects. I also
                explore UI/UX design and robotics — blending code and hardware
                to solve real problems. Learning never stops, and I'm just
                getting started.
              </p>
              <div className="mt-16">
                <hr className="mb-6 border-gray-400" />
                <p className="font-medium text-gray-800 text-base">
                  You don’t have to be great to start — but you have to start to
                  be great.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  A fellow dream chaser — eggi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
