import cinemaDB from "../assets/cinemaDB.png";
import reogPonorogo from "../assets/reogPonorogo.png";
import jobseeker from "../assets/jobseeker.png";
import jobseekerWebsite from "../assets/jobseekerWebsite.png";
import asikIn from "../assets/asikIn.png";
import backend from "../assets/backend.jpg";
import html from "../assets/SkillsLogo/html-logo.svg";
import css from "../assets/SkillsLogo/css-logo.svg";
import js from "../assets/SkillsLogo/javascript-logo.svg";
import ts from "../assets/SkillsLogo/typescript-logo.svg";
import tailwindcss from "../assets/SkillsLogo/tailwindcss.svg";
import node from "../assets/SkillsLogo/nodejs-logo.svg";
import express from "../assets/SkillsLogo/expressjs-light-logo.svg";
import react from "../assets/SkillsLogo/react-logo.svg";
import next from "../assets/SkillsLogo/nextjs-logo.svg";
import mysql from "../assets/SkillsLogo/mysql-logo.svg";
import prisma from "../assets/SkillsLogo/prisma-logo.svg";
import figma from "../assets/SkillsLogo/figma-logo.svg";

interface Project {
  title: string;
  icons: string[];
  description: string;
  image: string;
  links: {
    demo?: string;
    github?: string;
    design?: string;
  };
}

const projects: Project[] = [
  {
    title: "CinemaDB",
    icons: [html, css, js],
    description:
      "CinemaDb is a movie search project built using the OMDb database.",
    image: cinemaDB,
    links: {
      demo: "https://cinema-omdb.vercel.app/",
      github: "https://github.com/eggimugi/cinemaOmdb",
    },
  },
  {
    title: "Reog Ponorogo Landing Page",
    icons: [html, tailwindcss],
    description:
      "I created a simple landing page website to showcase Reog Ponorogo culture.",
    image: reogPonorogo,
    links: {
      demo: "https://reog-ponorogo.vercel.app/",
      github: "https://github.com/eggimugi/hamba-Final-Techcomfest",
    },
  },
  {
    title: "Jobseeker Website Design",
    icons: [figma],
    description:
      "I designed a modern jobseeker website to help users explore career opportunities",
    image: jobseeker,
    links: {
      design:
        "https://www.figma.com/design/4x4hbvIDc6rUt9yYxv0BkN/Job-Seeker-UKK?node-id=0-1&t=4PDjHBVkUHYwP1Tm-1",
    },
  },
  {
    title: "AsikIn Mobile Design",
    icons: [figma],
    description:
      "Askin is a mobile app design concept for street musicians and dancers to connect with their audience.",
    image: asikIn,
    links: {
      design:
        "https://www.figma.com/design/x34mu0ITb9U5UdSXbKtPto/AsikIn?node-id=251-1327&t=MfY8vUnOREkMXPJl-1",
    },
  },
  {
    title: "Bakery Backend",
    icons: [node, express, prisma, mysql, ts],
    description:
      "I developed a backend system for a bakery store with database and CRUD functionality.",
    image: backend,
    links: { github: "https://github.com/eggimugi/bakery" },
  },
  {
    title: "Jobseeker Website (On Progress)",
    icons: [react, next, tailwindcss, node, express, prisma, mysql, ts],
    description:
      "I built another jobseeker website with improved features and user experience.",
    image: jobseekerWebsite,
    links: {
      github: "#",
    },
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
                      <img
                        key={i}
                        src={icon}
                        alt="tech stack"
                        className="w-4 h-4 mr-2 inline-block bg-[#ededed] rounded-full p-1 box-content"
                      />
                    ))}
                  </span>
                </span>
              </div>
              <div className="text-gray-200 text-sm mt-1">
                {project.description}
              </div>
              <div className="mt-3 flex gap-2">
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold border rounded py-1 px-2 hover:text-gray-300 text-sm"
                  >
                    Live Demo
                  </a>
                )}
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold border rounded py-1 px-2 hover:text-gray-300 text-sm"
                  >
                    GitHub
                  </a>
                )}
                {project.links?.design && (
                  <a
                    href={project.links.design}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold border rounded py-1 px-2 hover:text-gray-300 text-sm"
                  >
                    Figma
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
