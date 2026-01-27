import React from "react";
import {
  CalendarDays,
  MapPin,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const events = [
  {
    slug: "hack4brahma",
    name: "Hack4Brahma",
    type: "Hackathon",
    status: "upcoming",
    date: "October 2024",
    location: "Campus / Hybrid",
    participants: "100+ expected",
    short:
      "Student‑led hackathon focused on solving real problems with modern tech.",
    description:
      "A 24–36 hour hackathon where students build and ship prototypes around themes like education, sustainability, and developer tools.",
    link: "/events/hack4brahma",
  },
  {
    slug: "codehunt",
    name: "CodeHunt",
    type: "Hackathon",
    status: "upcoming",
    date: "December 2024",
    location: "Online",
    participants: "Open",
    short:
      "Community‑driven hackathon for builders, designers, and innovators.",
    description:
      "CodeHunt brings together developers from different campuses to collaborate remotely, with tracks for web, AI, and security.",
    link: "/events/codehunt",
  },
  {
    slug: "campus-meetup",
    name: "Campus Dev Meetup",
    type: "Meetup",
    status: "past",
    date: "March 2024",
    location: "On‑campus",
    participants: "60+",
    short:
      "A casual meetup to talk about React, careers, and open source.",
    description:
      "Organized talks, live coding sessions, and Q&A around frontend development, internships, and how to get started with open‑source.",
    link: "/events/campus-meetup",
  },
];

const Events = () => {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <div className="wrapper">
      {/* Hero / Intro */}
      <div className="px-4 md:px-8 lg:px-0 pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Text */}
          <div className="flex flex-col justify-center space-y-5">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-neutral-200/70 text-sm font-medium text-neutral-800 w-fit">
              <span className="font-mono">&lt;events /&gt;</span>
              <span>Hackathons & meetups I run or join</span>
            </div>

            <h1 className="title text-3xl md:text-4xl lg:text-5xl">
              Events that bring devs, ideas, and code together
            </h1>

            <div className="Subtitle text-base md:text-lg space-y-4">
              <p>
                I love hackathons and developer events &mdash; they’re the best
                places to learn quickly, meet people, and ship something
                real under pressure.
              </p>
              <p>
                Here are some events I’ve organized or actively been part of.
                If you’re interested in collaborating on future ones, feel free
                to reach out.
              </p>
            </div>
          </div>

          {/* Highlight card */}
          <div className="flex items-center justify-center">
            <div className="w-full md:w-[420px] lg:w-[460px] rounded-2xl border-2 border-black bg-white text-black p-6 md:p-8 space-y-5  overflow-hidden">
              

              <h2 className="title text-xl md:text-2xl mb-1  z-10">
                Why I enjoy organizing events
              </h2>
              <p className="Subtitle text-sm md:text-base  z-10">
                Events force you to think about the full experience &mdash;
                from landing pages and registrations to schedules, judging, and
                follow‑ups. It’s product thinking in a compressed timeline.
              </p>
              <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-700  z-10">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Always open to help design or build event platforms</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="px-4 md:px-8 lg:px-0 py-12 md:py-16">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2">
            <h2 className="title2 underline text-2xl md:text-3xl">
              Upcoming Events
            </h2>
            <p className="Subtitle text-sm md:text-base text-neutral-700 max-w-lg">
              Events that are in planning or happening soon. Some are fully
              public, some are campus‑only.
            </p>
          </div>

          {upcoming.length === 0 ? (
            <p className="Subtitle text-sm md:text-base text-neutral-700">
              No upcoming events right now &mdash; check back soon!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {upcoming.map((event) => (
                <a
                  key={event.slug}
                  href={event.link}
                  className="group rounded-2xl border-2 border-black bg-white text-black p-6 md:p-7 flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                        <CalendarDays size={18} />
                      </div>
                      <div>
                        <p className="title text-lg">{event.name}</p>
                        <p className="Subtitle text-xs text-neutral-600">
                          {event.type}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end text-[11px] md:text-xs text-neutral-600 gap-1">
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays size={14} />
                        <span>{event.date}</span>
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{event.location}</span>
                      </span>
                    </div>
                  </div>

                  <p className="Subtitle text-sm">{event.short}</p>

                  <div className="flex justify-between items-center text-xs md:text-sm text-neutral-700">
                    <span className="inline-flex items-center gap-1">
                      <Users size={14} />
                      <span>{event.participants}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-red-600 font-medium">
                      Learn more
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Past Events */}
      <div className="px-4 md:px-8 lg:px-0 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2">
            <h2 className="title2 underline text-2xl md:text-3xl">
              Past Events
            </h2>
            <p className="Subtitle text-sm md:text-base text-neutral-700 max-w-lg">
              Events I’ve already been involved with. Some as an organizer,
              some as a participant, and some as both.
            </p>
          </div>

          {past.length === 0 ? (
            <p className="Subtitle text-sm md:text-base text-neutral-700">
              Past events will appear here.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {past.map((event) => (
                <div
                  key={event.slug}
                  className="rounded-2xl border-2 border-black bg-white text-black p-6 md:p-7 flex flex-col gap-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                        <Sparkles size={18} />
                      </div>
                      <div>
                        <p className="title text-lg">{event.name}</p>
                        <p className="Subtitle text-xs text-neutral-600">
                          {event.type}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end text-[11px] md:text-xs text-neutral-600 gap-1">
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays size={14} />
                        <span>{event.date}</span>
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{event.location}</span>
                      </span>
                    </div>
                  </div>

                  <p className="Subtitle text-sm">{event.description}</p>

                  <div className="flex justify-between items-center text-xs md:text-sm text-neutral-700">
                    <span className="inline-flex items-center gap-1">
                      <Users size={14} />
                      <span>{event.participants}</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-neutral-400" />
                      <span>Completed</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;