const projects = [
  {
    title: "MobileApp Design",
    icons: ["🖌️", "📱", "🛒", "💡"],
    description: "An e-commerce design made by Figma.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    title: "MobileApp Design",
    icons: ["🖌️", "📱", "🛒", "💡"],
    description: "An e-commerce design made by Figma.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    title: "MobileApp Design",
    icons: ["🖌️", "📱", "🛒", "💡"],
    description: "An e-commerce design made by Figma.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    title: "MobileApp Design",
    icons: ["🖌️", "📱", "🛒", "💡"],
    description: "An e-commerce design made by Figma.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
];

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] flex flex-col items-center md:px-24 sm:px-10 px-8 py-30">
      {/* Header */}
      <div className="relative flex flex-col items-center w-full max-w-6xl">
        {/* Selected Works line and dots */}
        <div className="flex items-center mb-4">
          <div className="border border-black/60 rounded-md px-6 py-2 text-xl font-normal relative">
            Selected Works
            <span className="absolute -top-2 -left-1.5 w-3 h-3 rounded-full bg-black"></span>
            <span className="absolute -top-2 -right-1.5 w-3 h-3 rounded-full bg-black"></span>
            <span className="absolute -bottom-2 -left-1.5 w-3 h-3 rounded-full bg-black"></span>
            <span className="absolute -bottom-2 -right-1.5 w-3 h-3 rounded-full bg-black"></span>
          </div>
        </div>
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-2">
          <span className="text-black">WebDev</span>{" "}
          <span
            className="text-black"
            style={{ WebkitTextStroke: "1.5px #000", color: "transparent" }}
          >
            | Design
          </span>
        </h1>
        {/* Subtitle */}
        <p className="mt-4 text-center text-2xl text-gray-700 w-full">
          Welcome to my project showcase — a collection of what I’ve built,
          explored, and experimented with.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative rounded-lg overflow-hidden shadow-lg group bg-black"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent flex flex-col justify-end p-6">
              <div>
                <span className="font-semibold text-white text-sm">
                  {project.title} |{" "}
                  <span className="inline-block">
                    {project.icons.map((icon, i) => (
                      <span key={i} className="mr-1">
                        {icon}
                      </span>
                    ))}
                  </span>
                </span>
              </div>
              <div className="text-gray-200 text-sm mt-1">
                {project.description}
              </div>
              <div className="mt-2">
                <a
                  href={project.link}
                  className="text-white font-semibold underline hover:text-gray-300 text-sm"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
