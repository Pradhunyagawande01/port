import React from "react";
import {
  Briefcase,
  GraduationCap,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";

const experiences = [
  {
    type: "Internship",
    role: "Frontend Developer Intern",
    company: "Example Tech Co.",
    period: "Jan 2024 – Apr 2024",
    location: "Remote",
    description:
      "Worked on building reusable components, fixing UI bugs, and integrating REST APIs into a production React application.",
    bullets: [
      "Implemented responsive views for dashboard modules using React & Tailwind.",
      "Improved page load performance by refactoring heavy components.",
      "Collaborated with designers to match Figma designs pixel‑perfectly.",
    ],
  },
  {
    type: "Freelance",
    role: "Web Developer",
    company: "Personal & Community Projects",
    period: "2023 – Present",
    location: "Remote",
    description:
      "Delivered end‑to‑end web experiences for student communities, hackathons, and personal brands.",
    bullets: [
      "Built landing pages and portfolios optimized for mobile.",
      "Developed small dashboards and admin panels with React.",
      "Handled deployment, DNS, and basic uptime monitoring.",
    ],
  },
  {
    type: "Campus",
    role: "Tech Club / Hackathon Organizer",
    company: "College & Local Communities",
    period: "2022 – Present",
    location: "On‑site & Remote",
    description:
      "Organized and contributed to events like Hack4Brahma and CodeHunt, focusing on developer experience and event tooling.",
    bullets: [
      "Built registration sites and event pages for hackathons.",
      "Managed judging dashboards and participant tracking tools.",
      "Mentored juniors on Git, React, and project structure.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="wrapper">
      {/* Hero / Intro */}
      <div className="px-4 md:px-8 lg:px-0 pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Text */}
          <div className="flex flex-col justify-center space-y-5">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-neutral-200/70 text-sm font-medium text-neutral-800 w-fit">
              <span className="font-mono">&lt;experience /&gt;</span>
              <span>How I’ve grown as a developer</span>
            </div>

            <h1 className="title text-3xl md:text-4xl lg:text-5xl">
              A journey through code, community, and real projects
            </h1>

            <div className="Subtitle text-base md:text-lg space-y-4">
              <p>
                My experience comes from a mix of internships, freelance work,
                campus initiatives, and personal projects. I like learning by
                building and shipping real things.
              </p>
              <p>
                Below is a snapshot of where I’ve applied my skills so far, and
                how those experiences shaped the way I build products today.
              </p>
            </div>
          </div>

          {/* Side card */}
          <div className="flex items-center justify-center">
            <div className="w-full md:w-[420px] lg:w-[460px] rounded-2xl border-2 border-black bg-white text-black p-6 md:p-8 space-y-5">
              <h2 className="title text-xl md:text-2xl mb-1">
                What I care about at work
              </h2>
              <ul className="Subtitle text-sm md:text-base space-y-2.5 list-disc list-inside">
                <li>Clear communication and ownership of tasks.</li>
                <li>Clean, readable code over “clever” hacks.</li>
                <li>Feedback loops: code reviews and quick iterations.</li>
                <li>Learning something new on every project.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline section */}
      <div className="px-4 md:px-8 lg:px-0 py-12 md:py-20">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-14">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2">
            <h2 className="title2 underline text-2xl md:text-3xl">
              Experience
            </h2>
            <p className="Subtitle text-sm md:text-base text-neutral-700 max-w-lg">
              Roles and projects where I’ve applied React, modern frontend
              tooling, and my interest in security.
            </p>
          </div>

          {/* Timeline layout */}
          <div className="">
            {/* Vertical line on desktop */}
            <div className="hidden md:block left-1/2 top-0 bottom-0 w-px bg-black/20" />

            <div className="space-y-8 md:space-y-10">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={exp.role + exp.company}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch"
                  >
                    {/* Spacer column to alternate sides */}
                    <div
                      className={`hidden md:block ${
                        isLeft ? "" : "order-2"
                      }`}
                    />

                    {/* Card */}
                    <div
                      className={` rounded-2xl border-2 border-black bg-white text-black p-6 md:p-7 flex flex-col gap-3 md:gap-4 ${
                        isLeft ? "" : "md:order-1"
                      }`}
                    >
                      {/* Dot on timeline (desktop) */}
                      <div className="hidden md:block absolute -left-4 top-8 w-3 h-3 rounded-full bg-black" />

                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                            {index === 0 ? (
                              <Briefcase size={16} />
                            ) : index === 1 ? (
                              <Briefcase size={16} />
                            ) : (
                              <GraduationCap size={16} />
                            )}
                          </div>
                          <div>
                            <p className="title text-base md:text-lg">
                              {exp.role}
                            </p>
                            <p className="Subtitle text-xs md:text-sm text-neutral-700">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <div className="text-right text-[11px] md:text-xs text-neutral-600 space-y-1">
                          <p className="flex items-center justify-end gap-1">
                            <Clock size={14} />
                            <span>{exp.period}</span>
                          </p>
                          <p className="flex items-center justify-end gap-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </p>
                        </div>
                      </div>

                      <p className="Subtitle text-sm md:text-base">
                        {exp.description}
                      </p>

                      <ul className="Subtitle text-xs md:text-sm space-y-1.5 list-disc list-inside">
                        {exp.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border-2 border-black bg-white text-black p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2 md:max-w-xl">
              <h3 className="title text-lg md:text-xl">
                Want to know more about my work?
              </h3>
              <p className="Subtitle text-sm md:text-base">
                I’m happy to walk you through specific projects, code samples,
                and decisions I made while building them.
              </p>
            </div>
            <a
              href="#contact" // or your actual contact route / section
              className="Signature group inline-flex items-center justify-center gap-2 rounded-full border border-black/40 px-6 py-2.5 text-sm font-medium bg-black text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;