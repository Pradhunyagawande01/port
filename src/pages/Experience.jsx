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
    type: "Hackathon",
    role: "Web Team Lead @Hack4Brahma",
    company: "Hack4Brahma Hackathon",
    period: "2025",
    location: "Hybrid",
    description:
      "Led the web team for Hack4Brahma, owning everything from design and implementation to deployment and updates.",
    bullets: [
      "Architected and built the entire hackathon website, including registration, schedule, and information pages.",
      "Handled deployments, DNS, and monitoring to keep the site stable during traffic spikes.",
      "Coordinated with design, sponsorship, and operations teams to keep content up‑to‑date.",
    ],
  },
  {
    type: "Hackathon",
    role: "Web Team Lead @CodeHunt",
    company: "CodeHunt Hackathon",
    period: "2024",
    location: "Online",
    description:
      "Took end‑to‑end ownership of the CodeHunt hackathon website and mentored a small web team.",
    bullets: [
      "Developed a responsive event site with clear flows for participants, mentors, and judges.",
      "Implemented features like FAQs, timelines, and result announcements with reusable components.",
      "Guided teammates on best practices in React, version control, and deployment workflows.",
    ],
  },
  {
    type: "Meetup",
    role: "Core Team Member @The Hackers Meetup Nagpur",
    company: "Hackers Meetup Nagpur",
    period: "2024",
    location: "Nagpur, India",
    description:
      "Part of the core team behind Hackers Meetup Nagpur, helping shape sessions and community experience.",
    bullets: [
      "Helped plan and execute meetups around security, development, and open source.",
      "Managed announcements and online presence for upcoming sessions.",
      "Assisted speakers and attendees with demos, logistics, and follow‑ups.",
    ],
  },
  {
    type: "Community",
    role: "Community Collaborator",
    company: "Various Tech Communities",
    period: "Ongoing",
    location: "Remote & On‑site",
    description:
      "Worked with multiple student and developer communities to support events, websites, and technical content.",
    bullets: [
      "Collaborated on web platforms for clubs, communities, and hackathons.",
      "Shared knowledge through informal sessions, code reviews, and helping juniors.",
      "Continuously learning from diverse teams, tech stacks, and problem spaces.",
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
              Leading web teams, building events, and growing communities
            </h1>

            <div className="Subtitle text-base md:text-lg space-y-4">
              <p>
                My experience comes from leading web teams at hackathons,
                running event platforms, and being deeply involved in local and
                online tech communities.
              </p>
              <p>
                Below is a snapshot of where I’ve applied those skills and how
                these roles shaped the way I build products and work with
                teams.
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
                <li>End‑to‑end ownership of frontend and deployment.</li>
                <li>Clear communication and shared responsibility within the team.</li>
                <li>Clean, readable code over “clever” hacks.</li>
                <li>Learning something new on every project and event.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Experience cards */}
      <div className="px-4 md:px-8 lg:px-0 py-12 md:py-20">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-14">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2">
            <h2 className="title2 underline text-2xl md:text-3xl">
              Experience
            </h2>
            <p className="Subtitle text-sm md:text-base text-neutral-700 max-w-lg">
              Web‑team leadership, hackathon platforms, meetups, and community
              collaborations.
            </p>
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {experiences.map((exp) => (
              <div
                key={exp.role + exp.company}
                className="group rounded-2xl border-2 border-black bg-white text-black p-6 md:p-7 flex flex-col gap-4 hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
              >
                {/* Header: type + period/location */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                      {exp.type === "Meetup" || exp.type === "Community" ? (
                        <GraduationCap size={18} />
                      ) : (
                        <Briefcase size={18} />
                      )}
                    </div>
                    <div>
                      <p className="Subtitle text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                        {exp.type}
                      </p>
                      <p className="title text-base md:text-lg">
                        {exp.role}
                      </p>
                      <p className="Subtitle text-xs md:text-sm text-neutral-700">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  {/* <div className="text-right text-[10px] md:text-xs text-neutral-600 space-y-1">
                    <p className="flex justify-end gap-1">
                      <span>{exp.period}</span>
                    </p>
                    <p className="flex justify-end gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </p>
                  </div> */}
                </div>

                {/* Description */}
                <p className="Subtitle text-sm md:text-base">
                  {exp.description}
                </p>

                {/* Bullets */}
                <ul className="Subtitle text-xs md:text-sm space-y-1.5 list-disc list-inside">
                  {exp.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-2xl border-2 border-black bg-white text-black p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2 md:max-w-xl">
              <h3 className="title text-lg md:text-xl">
                Want to know more about my work?
              </h3>
              <p className="Subtitle text-sm md:text-base">
                I’d be happy to walk you through the Hack4Brahma and CodeHunt
                websites, or community collaborations.
              </p>
            </div>
            <a
              href="/events" // or your actual contact / projects route
              className="Signature group inline-flex items-center justify-center gap-2 rounded-full border border-black/40 px-6 py-2.5 text-sm font-medium bg-black text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              
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