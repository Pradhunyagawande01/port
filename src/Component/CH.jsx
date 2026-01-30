import React from "react";
import {
  Trophy,
  Users,
  Sparkles,
  Code2,
  CalendarDays,
  MapPin,
} from "lucide-react";

const CodeHuntPage = () => {
  // Hero/banner image for CodeHunt
  const heroImage = "/CH.png"; // ← replace with your real banner path

  // Gallery images (no captions rendered, only alt for accessibility)
  const gallery = [
    { src: "/ch1.jpg", alt: "CodeHunt photo 1" },
    { src: "/ch2.jpg", alt: "CodeHunt photo 2" },
    { src: "/ch3.jpg", alt: "CodeHunt photo 3" },
    { src: "/ch4.jpg", alt: "CodeHunt photo 4" },
    { src: "/ch5.jpg", alt: "CodeHunt photo 5" },
    { src: "/ch6.jpg", alt: "CodeHunt photo 6" },
    // { src: "/ch7.jpg", alt: "CodeHunt photo 7" },
    // { src: "/ch8.jpg", alt: "CodeHunt photo 8" },
  ];

 

  const coreTeam = [
    "Kritika Rukhiyana",
    "Kaustubh Saraf",
    "Akshay Gangasagar",
    "Pranav Tekade",
    "Ayush Thakre",
    "Harsh Kumar",
    "Mrunali Dhopte",
    "Vaibhavi Mangrulkar",
    "Navinya Yede",
    "Kalash Thakare",
    
  ];

  const sponsors = [
    "GitHub",
    "Riot Games",
    "Microsoft Azure",
    "Inovact Private Limited",
    "HackQuest",
    "GitHub Education",
    "Hyperlane India",
    "SILDO",
    "ThunderCipher",
    "Give My Certificate",
    "Wolfram",
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
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-center">
            {/* Text */}
            <div className="space-y-5 md:space-y-6">
              <h1 className="title text-3xl md:text-4xl lg:text-5xl">
                CodeHunt 24‑hour Hackathon
              </h1>

              <p className="Subtitle text-base md:text-lg text-neutral-700">
                Super excited to share my experience of organizing a{" "}
                <span className="font-semibold">24‑hour hackathon – CodeHunt</span>.
                We kicked things off at{" "}
                <span className="font-semibold">Fireblaze AI School</span>,
                making sure everything was well managed. As soon as it began,
                participants jumped straight into coding mode.
              </p>

              <p className="Subtitle text-sm md:text-base text-neutral-700">
                To keep the energy high, we planned a{" "}
                <span className="font-semibold">VALORANT</span> gaming session
                powered by Riot Games, followed by a midnight jamming session
                with <span className="font-semibold">Aniruddha Kalbande</span>{" "}
                sir and the CodeHunt team. After a long but thrilling 24 hours,
                we announced the winners and wrapped up the event by
                distributing prizes.
              </p>
            </div>

            {/* Hero image + quick facts */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border-2 border-black bg-neutral-900">
                <img
                  src={heroImage}
                  alt="CodeHunt hackathon banner / stage"
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
                    <span>24‑hour on‑site hackathon</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>Fireblaze AI School</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} />
                    <span>Dozens of teams &amp; builders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code2 size={14} />
                    <span>Web · AI · Open Innovation</span>
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
              <p className="title2 text-base md:text-lg">
                Core Organizing Team
              </p>
              <p className="Subtitle text-xs text-neutral-600">
                Helping plan, coordinate, and execute the entire 24‑hour
                experience.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-black bg-white p-4 md:p-5 flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                Format
              </span>
              <p className="title2 text-base md:text-lg">
                Code, Games &amp; Jam Session
              </p>
              <p className="Subtitle text-xs text-neutral-600">
                Intense hacking mixed with gaming and music to keep spirits up.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-black bg-white p-4 md:p-5 flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                Outcome
              </span>
              <p className="title2 text-base md:text-lg">
                A Memorable 24 Hours
              </p>
              <p className="Subtitle text-xs text-neutral-600">
                Projects shipped, winners crowned, and a stronger local dev
                community.
              </p>
            </div>
          </div>

          {/* JOURNEY + TEAM / LESSONS */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Journey */}
            <div className="space-y-4 md:space-y-5">
              <h2 className="title2 text-2xl md:text-3xl">The experience</h2>

              <p className="Subtitle text-sm md:text-base text-neutral-700">
                CodeHunt was designed as a full 24‑hour experience: teams
                arrived, got into coding mode, and stayed engaged through
                carefully planned activities from VALORANT matches to a
                midnight jam session. This balance of focus and fun kept the
                atmosphere electric all night.
              </p>

              <p className="Subtitle text-sm md:text-base text-neutral-700">
                As part of the organizing team, I worked across logistics,
                coordination with mentors, handling participants, and making
                sure every transition from kickoff, to games, to demos and
                prize distribution felt smooth.
              </p>

              <p className="Subtitle text-sm md:text-base text-neutral-700">
                By the end, watching teams present what they had built in just
                one night was incredibly rewarding. This hackathon was an
                amazing experience, both as an organizer and as a community
                builder.
              </p>
            </div>

            {/* Team + what it taught */}
            <div className="space-y-5 md:space-y-6">
              <div className="rounded-2xl border-2 border-black bg-white p-4 md:p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-blue-600" />
                  <span className="text-xs font-semibold uppercase tracking-wide">
                    Organizing Team
                  </span>
                </div>
                <p className="Subtitle text-sm text-neutral-700">
                  Huge shoutout to the team that made everything happen:
                </p>

                <div className="space-y-2">
                  <div>
                    <div className="mt-1 flex flex-wrap gap-2">
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
                  <li>Running a time‑boxed 24‑hour hackathon end‑to‑end</li>
                  <li>Keeping participants engaged with games and social breaks</li>
                  <li>Coordinating with a large organizing team effectively</li>
                  <li>Balancing structure with fun to create a memorable event</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SPONSORS & HIGHLIGHTS */}
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
                Big thanks to our sponsors for supporting us and making
                CodeHunt possible:
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
            </div>

            {/* Highlights */}
            <div className="rounded-2xl border-2 border-black bg-white p-4 md:p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-purple-600" />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  Highlights
                </span>
              </div>
              <ul className="list-disc pl-4 space-y-1 text-xs md:text-sm text-neutral-700 Subtitle">
                <li>Kickoff and hacking at Fireblaze AI School</li>
                <li>VALORANT gaming session powered by Riot Games</li>
                <li>Midnight jamming session with Aniruddha Kalbande sir</li>
                <li>24 hours of non‑stop coding, collaboration, and fun</li>
                <li>Closing ceremony with winner announcements and prizes</li>
              </ul>
            </div>
          </section>

          {/* ===================== GALLERY SECTION (NO TEXT ON IMAGES) ===================== */}
          <section className="pt-4 md:pt-8 pb-8 md:pb-12">
            <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-purple-600" />
                <h2 className="title2 text-2xl md:text-3xl">CodeHunt Gallery</h2>
              </div>
              <p className="Subtitle text-sm md:text-base text-neutral-600">
                A few glimpses from the 24‑hour CodeHunt journey — hacking,
                gaming, and celebrating together.
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
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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

export default CodeHuntPage;