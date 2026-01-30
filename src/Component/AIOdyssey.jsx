import React from "react";
import { Trophy, Users, Sparkles, Code2 } from "lucide-react";

const HackOdysseyWin = () => {
  const photos = [
    {
      src: "/w4.jpg",
      alt: "Team Syntax Error on stage with certificates",
    },
    {
      src: "/w1.jpg",
      alt: "Winners group photo at Hack Odyssey / AI Odyssey",
    },
    // {
    //   src: "/Winner.jpg",
    //   alt: "Close-up of the team celebrating the win",
    // },
    {
      src: "/w3.jpg",
      alt: "Trophy from Hack Odyssey / AI Odyssey",
    },
  ];

  return (
    <div className="wrapper">
      {/* Hero */}
      <div className="px-4 md:px-8 lg:px-0 pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-200/70 text-sm font-medium text-neutral-800 w-fit">
            <Trophy size={16} />
            <span className="font-mono">Hackathon Win</span>
          </div>

          {/* Title + Intro */}
          <div className="max-w-3xl space-y-4">
            <h1 className="title text-3xl md:text-4xl lg:text-5xl">
              Winners of AI Odyssey
            </h1>
            <p className="Subtitle text-base md:text-lg text-neutral-700">
              My team <span className="font-semibold">Syntax Error</span> came
              out as winners of{" "}
              <span className="font-semibold">Hack Odyssey</span>. We also
              topped the scoreboard of{" "}
              <span className="font-semibold">AI Odyssey</span>, finishing
              first there as well.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-2xl border-2 border-black bg-white p-4 md:p-5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Trophy size={18} className="text-yellow-500" />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  Hack Odyssey
                </span>
              </div>
              <p className="title2 text-base md:text-lg">Overall Winners</p>
              <p className="Subtitle text-xs text-neutral-600">
                Finished first in the hackathon with our project.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-black bg-white p-4 md:p-5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-purple-500" />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  AI Odyssey
                </span>
              </div>
              <p className="title2 text-base md:text-lg">Leaderboard #1</p>
              <p className="Subtitle text-xs text-neutral-600">
                Topped the AI Odyssey scoreboard across all participating teams.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-black bg-white p-4 md:p-5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Users size={18} className="text-blue-500" />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  Team
                </span>
              </div>
              <p className="title2 text-base md:text-lg">Syntax Error</p>
              <p className="Subtitle text-xs text-neutral-600">
                A team effort from start to finish – design, build, and pitch
                together.
              </p>
            </div>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Story */}
            <div className="space-y-4 md:space-y-5">
              <h2 className="title2 text-2xl md:text-3xl">The experience</h2>
              <p className="Subtitle text-sm md:text-base text-neutral-700">
                Huge thanks to{" "}
                <span className="font-semibold">Jarvis GHRCE</span> and the{" "}
                <span className="font-semibold">
                  IEEE CIS Student Chapter – GHRCE
                </span>{" "}
                for organizing such an incredible experience. The platform, the
                challenge, and the overall atmosphere made this hackathon
                truly special.
              </p>
              <p className="Subtitle text-sm md:text-base text-neutral-700">
                From brainstorming ideas to building the solution and finally
                presenting it on stage, every step was intense and rewarding.
                We focused on creating something meaningful, scalable, and
                technically solid.
              </p>
              <p className="Subtitle text-sm md:text-base text-neutral-700">
                I'm extremely grateful to my team for the{" "}
                <span className="font-semibold">
                  teamwork, late‑night debugging, and constant energy
                </span>{" "}
                throughout the event. This win is a collective milestone for
                all of us.
              </p>

              {/* Tech / contribution highlight */}
              <div className="mt-4 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Code2 size={16} className="text-neutral-700" />
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-700">
                    What this reflects
                  </span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-xs md:text-sm text-neutral-700 Subtitle">
                  <li>Ability to ship under strict time constraints</li>
                  <li>Hands‑on experience with AI / ML driven problem solving</li>
                  <li>Clear communication and collaborative execution as a team</li>
                </ul>
              </div>
            </div>

            {/* Photo collage */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {/* Big main photo */}
              <div className="col-span-2 rounded-2xl overflow-hidden border-2 border-black">
                <img
                  src={photos[0].src}
                  alt={photos[0].alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Smaller supporting photos */}
              {photos.slice(1).map((photo) => (
                <div
                  key={photo.alt}
                  className="rounded-2xl overflow-hidden border-2 border-black"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Hashtag / closing line */}
          <div className="pt-4">
            <p className="Subtitle text-sm md:text-base text-neutral-600">
              Tagged under{" "}
              <span className="font-semibold text-neutral-900">
                #AIOdyssey
              </span>{" "}
              &middot; A milestone that motivates me to keep building and
              competing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackOdysseyWin;