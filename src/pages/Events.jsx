import React from "react";
import {
  CalendarDays,
  MapPin,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const events = [
  // Organized Hackathons (Main events)
  {
    slug: "hack4brahma",
    name: "Hack4Brahma",
    type: "Hackathon",
    status: "upcoming",
    date: "October 2025",
    location: "Guwahati, Assam",
    participants: "150+ participants",
    short:
      "Student-led hackathon focused on solving real problems with modern tech.",
    description:
      "A 24 hour hackathon where students build and ship prototypes around themes like education, sustainability, and developer tools.",
    link: "/Hack4Brahma",
  },
  {
    slug: "codehunt",
    name: "CodeHunt",
    type: "Hackathon",
    status: "upcoming",
    date: "February 2025",
    location: "Nagpur, Maharashtra",
    participants: "120+ participants",
    short:
      "Community-driven hackathon for builders, designers, and innovators.",
    description:
      "CodeHunt brought together developers from different campuses to collaborate remotely, with tracks for web, AI, and security. Successfully organized with 120+ participants and 25+ project submissions.",
    link: "/CodeHunt",
  },
];

const Events = () => {
  const hackathons = events.filter((e) => e.status === "upcoming");

  // Get event type badge color
  const getTypeBadgeColor = (type) => {
    switch (type.toLowerCase()) {
      case "hackathon":
        return "bg-red-100 text-red-700";
      case "workshop":
        return "bg-blue-100 text-blue-700";
      case "meetup":
        return "bg-green-100 text-green-700";
      case "conference":
        return "bg-purple-100 text-purple-700";
      case "bootcamp":
        return "bg-orange-100 text-orange-700";
      case "competition":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-neutral-100 text-neutral-700";
    }
  };

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
                I love hackathons and developer events &mdash; they're the best
                places to learn quickly, meet people, and ship something real
                under pressure.
              </p>
              <p>
                Here are some events I've organized or actively been part of. If
                you're interested in collaborating on future ones, feel free to
                reach out.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex flex-col">
                <span className="title text-2xl md:text-3xl">9+</span>
                <span className="Subtitle text-sm text-neutral-600">
                  Events Organized
                </span>
              </div>
              <div className="flex flex-col">
                <span className="title text-2xl md:text-3xl">750+</span>
                <span className="Subtitle text-sm text-neutral-600">
                  Total Participants
                </span>
              </div>
              <div className="flex flex-col">
                <span className="title text-2xl md:text-3xl">2</span>
                <span className="Subtitle text-sm text-neutral-600">
                  Major Hackathons
                </span>
              </div>
            </div>
          </div>

          {/* Highlight card */}
          <div className="flex items-center justify-center">
            <div className="w-full md:w-[420px] lg:w-[460px] rounded-2xl border-2 border-black bg-white text-black p-6 md:p-8 space-y-5 overflow-hidden">
              <h2 className="title text-xl md:text-2xl mb-1 z-10">
                Why I enjoy organizing events
              </h2>
              <p className="Subtitle text-sm md:text-base z-10">
                Events force you to think about the full experience &mdash; from
                landing pages and registrations to schedules, judging, and
                follow-ups. It's product thinking in a compressed timeline.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Organized Hackathons */}
      <div className="px-4 md:px-8 lg:px-0 py-12 md:py-16">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2">
            <h2 className="title2 underline text-2xl md:text-3xl">
              Organized Hackathons
            </h2>
          </div>

          {hackathons.length === 0 ? (
            <p className="Subtitle text-sm md:text-base text-neutral-700">
              No upcoming events right now &mdash; check back soon!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {hackathons.map((event) => (
                <a
                  key={event.slug}
                  href={event.link}
                  className="group rounded-2xl border-2 border-black bg-white text-black p-6 md:p-7 flex flex-col gap-4 hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
                >
                  {/* Top section: title + meta */}
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    {/* Left: icon + name + type */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                        <CalendarDays size={18} />
                      </div>
                      <div>
                        <p className="title text-lg">{event.name}</p>
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wide ${getTypeBadgeColor(
                            event.type,
                          )}`}
                        >
                          {event.type}
                        </span>
                      </div>
                    </div>

                    {/* Right: date + location */}
                    <div className="flex flex-col items-start md:items-end text-[11px] md:text-xs text-neutral-600 gap-1">
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

                  {/* Description */}
                  <p className="Subtitle text-sm">{event.short}</p>

                  {/* Bottom row: participants + CTA */}
                  <div className="flex flex-col gap-2 xs:flex-row xs:items-center xs:justify-between text-xs md:text-sm text-neutral-700">
                    <span className="inline-flex items-center gap-1">
                      <Users size={14} />
                      <span>{event.participants}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-red-600 font-medium self-start xs:self-auto">
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

          {/* Simple mention of other events */}
          <div className="flex items-center gap-3 pt-4">
            <Sparkles size={18} className="text-neutral-500" />
            <p className="Subtitle text-sm md:text-base text-neutral-600">
              Along with these hackathons, I've also organized{" "}
              <strong className="text-neutral-900">7+ other events</strong>{" "}
              including workshops, meetups, bootcamps, and coding competitions.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 md:px-8 lg:px-0 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl border-2 border-black bg-white text-black p-8 md:p-12 text-center">
            <h3 className="title text-2xl md:text-3xl mb-4">
              Want to collaborate on an event?
            </h3>
            <p className="Subtitle text-sm md:text-base text-black max-w-2xl mx-auto mb-6">
              I'm always excited to help organize hackathons, workshops, and
              developer meetups. Whether you need help with planning, building
              the platform, or just brainstorming ideas — let's connect!
            </p>
            <a
              href="/links"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-200 text-black font-medium text-sm hover:bg-neutral-200 transition-colors"
            >
              Get in touch
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
