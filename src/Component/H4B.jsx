import React from "react";
import {
  Trophy,
  Users,
  Sparkles,
  Code2,
  CalendarDays,
  MapPin,
} from "lucide-react";

const Hack4BrahmaPage = () => {
  // Hero/banner image for the top section
  const heroImage = "/hbh.png"; // ← replace with your banner path

  // Gallery images (no captions shown, only alt for accessibility)
  const gallery = [
    { src: "/hb1.jpg", alt: "Hack4Brahma photo 1" },
    { src: "/hb2.jpg", alt: "Hack4Brahma photo 2" },
    { src: "/hb3.jpg", alt: "Hack4Brahma photo 3" },
    { src: "/hb4.jpg", alt: "Hack4Brahma photo 4" },
    { src: "/hb5.jpg", alt: "Hack4Brahma photo 5" },
    { src: "/hb6.jpg", alt: "Hack4Brahma photo 6" },
    { src: "/hb7.jpg", alt: "Hack4Brahma photo 7" },
    { src: "/hb8.jpg", alt: "Hack4Brahma photo 8" },
  ];

  const coreTeam = [
    "Rishu Kumar Singh",
    "Kritika Rukhiyana",
    "Akshay Gangasagar",
    "Mohd Sahal",
  ];

  const sponsors = [
    "Orkes",
    "GitHub",
    "VALORANT (Riot Games)",
    "Garena (Free Fire)",
    "Red Bull",
  ];

  const communities = [
    "GFG Campus Body – Gauhati University",
    "Google Developer Group on Campus – Gauhati University",
  ];

  const mentors = [
    "Shubhangi Gupta",
    "Rohan Verma",
    "Vipul Gupta",
    "Amrit Raj",
    "Swati Awasthi",
    "Siddharth Shivkumar",
  ];

  return (
    <div className="wrapper">
      <div className="px-4 md:px-8 lg:px-0 pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-14">
          {/* TAG */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-200/70 text-sm font-medium text-neutral-800 w-fit">
            <Trophy size={16} />
            <span className="font-mono">Organizer Story</span>
          </div>

          {/* HERO: title + intro + hero image / quick facts */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-8  items-center">
            {/* Text */}
            <div className="space-y-5 md:space-y-6">
              <h1 className="title text-3xl md:text-4xl lg:text-5xl">
                Organizing Hack4Brahma – Northeast India&apos;s Biggest
                Hackathon
              </h1>

              <p className="Subtitle text-base md:text-lg text-neutral-700">
                Looking back, every moment of this journey was unforgettable.
                After months of sleepless nights, countless planning sessions,
                and unstoppable dedication,{" "}
                <span className="font-semibold">Hack4Brahma</span> successfully
                came to life at{" "}
                <span className="font-semibold">
                  Guwahati University Institute of Science &amp; Technology
                </span>
                .
              </p>

              <p className="Subtitle text-sm md:text-base text-neutral-700">
                From long travels and late‑night discussions to last‑minute
                fixes, every ounce of effort was worth it when we saw hundreds
                of participants innovating, collaborating, and creating
                something extraordinary.
              </p>
            </div>

            {/* Hero image + quick facts */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border-2 border-black bg-neutral-900">
                <img
                  src={heroImage}
                  alt="Hack4Brahma stage / banner"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="rounded-2xl border-2 border-black bg-white p-4 md:p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles size={18} className="text-purple-600" />
                  <span className="text-xs font-semibold uppercase tracking-wide">
                    Event Snapshot
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs md:text-sm Subtitle text-neutral-700">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={14} />
                    <span>October 2025 · On‑site Hackathon</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>Guwahati, Assam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} />
                    <span>Hundreds of participants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code2 size={14} />
                    <span>Hackathon · Gaming · AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STATS ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-2xl border-2 border-black bg-white p-4 md:p-5 flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                Role
              </span>
              <p className="title2 text-base md:text-lg">Lead Organizer</p>
              <p className="Subtitle text-xs text-neutral-600">
                End‑to‑end ownership of planning, execution, and experience.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-black bg-white p-4 md:p-5 flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                Scale
              </span>
              <p className="title2 text-base md:text-lg">
                Northeast India&apos;s Biggest
              </p>
              <p className="Subtitle text-xs text-neutral-600">
                Massive turnout with teams across universities and domains.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-black bg-white p-4 md:p-5 flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                Focus
              </span>
              <p className="title2 text-base md:text-lg">
                Innovation &amp; Community
              </p>
              <p className="Subtitle text-xs text-neutral-600">
                Creating a space to build, learn, and connect around tech.
              </p>
            </div>
          </div>

          {/* JOURNEY + CORE TEAM / LESSONS */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Journey */}
            <div className="space-y-4 md:space-y-5">
              <h2 className="title2 text-2xl md:text-3xl">The journey</h2>

              <p className="Subtitle text-sm md:text-base text-neutral-700">
                Every long travel, every late‑night discussion, and every bit
                of effort was worth it when the venue was filled with the energy
                of participants building, experimenting, and shipping ideas.
                Seeing Hack4Brahma come alive on campus turned a bold idea into
                a defining experience.
              </p>

              <p className="Subtitle text-sm md:text-base text-neutral-700">
                As an organizer, this meant working across logistics, outreach,
                sponsorships, judging, tech infrastructure, and on‑ground
                experience. It taught real product thinking: how everything from
                registrations and communication to food and schedule impacts the
                overall vibe.
              </p>

              <p className="Subtitle text-sm md:text-base text-neutral-700">
                This event was not just about a single weekend—it was months of
                planning compressed into a few unforgettable days, and a
                community that continues to grow beyond it.
              </p>
            </div>

            {/* Core team + lessons */}
            <div className="space-y-5 md:space-y-6">
              <div className="rounded-2xl border-2 border-black bg-white p-4 md:p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-blue-600" />
                  <span className="text-xs font-semibold uppercase tracking-wide">
                    Core Team
                  </span>
                </div>
                <p className="Subtitle text-sm text-neutral-700">
                  Incredibly proud of the core team that stood strong from day
                  one and turned this dream into reality:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {coreTeam.map((member) => (
                    <span
                      key={member}
                      className="px-3 py-1 rounded-full border border-neutral-300 bg-neutral-50 text-[11px] md:text-xs Subtitle"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-4 md:p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Code2 size={16} className="text-neutral-700" />
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-700">
                    What this taught me
                  </span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-xs md:text-sm text-neutral-700 Subtitle">
                  <li>End‑to‑end event ownership at a large scale</li>
                  <li>Working with sponsors, communities, and partners</li>
                  <li>Leading teams under pressure while keeping morale high</li>
                  <li>Designing experiences that participants remember</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SPONSORS & COMMUNITIES */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Sponsors */}
            <div className="rounded-2xl border-2 border-black bg-white p-4 md:p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-amber-500" />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  Sponsors
                </span>
              </div>
              <p className="Subtitle text-sm text-neutral-700">
                Huge gratitude to our sponsors for believing in the vision and
                keeping the energy high throughout the event:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {sponsors.map((name) => (
                  <span
                    key={name}
                    className="px-3 py-1 rounded-full border border-neutral-300 bg-neutral-50 text-[11px] md:text-xs Subtitle"
                  >
                    {name}
                  </span>
                ))}
              </div>
              <p className="Subtitle text-xs text-neutral-600 pt-1">
                Red Bull powered our nights, and the gaming breaks added the
                perfect dose of excitement.
              </p>
            </div>

            {/* Communities & volunteers */}
            <div className="rounded-2xl border-2 border-black bg-white p-4 md:p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Users size={18} className="text-green-600" />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  Volunteers &amp; Communities
                </span>
              </div>
              <p className="Subtitle text-sm text-neutral-700">
                A big thanks to the volunteers and campus communities who were
                the backbone of Hack4Brahma:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-xs md:text-sm text-neutral-700 Subtitle">
                {communities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className="Subtitle text-xs text-neutral-600">
                Their passion and commitment made sure everything ran smoothly.
              </p>
            </div>
          </section>

          {/* MENTORS & SPECIAL THANKS */}
          <section className="rounded-2xl border-2 border-black bg-white p-4 md:p-6 lg:p-7 space-y-4 md:space-y-5">
            <div className="flex items-center gap-2">
              <Trophy size={18} className="text-red-500" />
              <span className="text-xs font-semibold uppercase tracking-wide">
                Mentors &amp; Special Thanks
              </span>
            </div>

            <p className="Subtitle text-sm md:text-base text-neutral-700">
              Special gratitude to the mentors and guides whose support,
              feedback, and encouragement shaped the event:
            </p>

            <div className="flex flex-wrap gap-2">
              {mentors.map((name) => (
                <span
                  key={name}
                  className="px-3 py-1 rounded-full border border-neutral-300 bg-neutral-50 text-[11px] md:text-xs Subtitle"
                >
                  {name}
                </span>
              ))}
            </div>

            <p className="Subtitle text-sm md:text-base text-neutral-700">
              A heartfelt thanks to{" "}
              <span className="font-semibold">Rohan Verma</span> for ensuring
              every moment ran seamlessly. Meeting so many passionate,
              hardworking individuals through this journey made it even more
              special.
            </p>

            <p className="Subtitle text-sm md:text-base text-neutral-800 font-medium">
              This isn&apos;t the end – it&apos;s just the beginning.
            </p>
          </section>

          {/* ===================== GALLERY SECTION (NO TEXT ON IMAGES) ===================== */}
          <section className="pt-4 md:pt-8 pb-8 md:pb-12">
            <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-purple-600" />
                <h2 className="title2 text-2xl md:text-3xl">
                  Hack4Brahma Gallery
                </h2>
              </div>
              <p className="Subtitle text-sm md:text-base text-neutral-600">
                A few snapshots from the event — setting up, hacking, and
                celebrating.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[120px] sm:auto-rows-[150px] md:auto-rows-[180px] lg:auto-rows-[200px]">
              {gallery.map((photo, index) => {
                const isHero = index === 0; // first image larger for focal point
                return (
                  <div
                    key={photo.src}
                    className={
                      "overflow-hidden rounded-2xl border-2 border-black bg-neutral-900 " +
                      (isHero
                        ? "col-span-2 sm:col-span-2 lg:col-span-2 row-span-2"
                        : "")
                    }
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hack4BrahmaPage;