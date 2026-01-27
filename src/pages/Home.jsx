import React from "react";
import { Award, ExternalLink, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="wrapper">
      {/* Hero Section */}
      <div className="px-4 md:px-8 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-20 md:pt-24 max-w-7xl mx-auto min-h-[60vh] md:min-h-[70vh]">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-neutral-200/70 text-sm font-medium text-neutral-800 mb-4 w-fit">
              <span className="font-mono">&lt;/&gt;</span>
              <span>Frontend Developer &amp; Cybersecurity Enthusiast</span>
            </div>

            <h1 className="title !text-4xl md:!text-6xl lg:!text-7xl mb-4 leading-tight">
              I build fast, modern, and scalable web apps
            </h1>

            <div className="Subtitle !text-base md:!text-2xl space-y-4 max-w-xl">
              <p>
                Hi, I'm Pradhunya, a frontend developer focused on building
                responsive and user-friendly web applications. I specialize in
                creating modern interfaces.
              </p>
              <p>
                I enjoy turning ideas into polished digital experiences, writing
                clean, scalable code, and building projects like portfolios,
                hackathon platforms, and community websites.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex items-center justify-center">
            <img
              src="/About.png"
              alt="Pradhunya frontend developer"
              className="w-full max-w-[420px] sm:max-w-[480px] h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* My Work Section */}
      <section className="px-4 md:px-8 lg:px-0 py-10 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-10">
            <h2 className="title2 !text-2xl md:!text-3xl underline">
              My Work!
            </h2>
          </div>

          {/* Mobile Grid - Single Column */}
          <div className="grid grid-cols-1 md:hidden gap-6">
            {/* Hack4Brahma Card */}
            <div className="rounded-2xl border-2 border-black overflow-hidden bg-white">
              <div className="w-full h-64">
                <img
                  src="/h4b.jpg"
                  alt="Hack4Brahma hackathon"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col gap-4 text-black">
                <h3 className="title !text-5xl">Hack4Brahma</h3>
                <p className="Subtitle !text-sm">
                  Hack4Brahma is a student-led hackathon that promotes
                  innovation and hands-on problem solving. It brings together
                  developers and designers to build real-world solutions using
                  modern technologies.
                </p>
                <a
                  href="/events"
                  className="Signature group flex items-center gap-2 rounded-full border border-black/30 px-6 py-2 text-sm font-medium bg-white hover:bg-black hover:text-white transition-all duration-300 w-fit"
                >
                  Know More
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* CodeHunt Card */}
            <div className="rounded-2xl border-2 border-black overflow-hidden bg-white">
              <div className="w-full h-64">
                <img
                  src="/CH.jpg"
                  alt="CodeHunt hackathon"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col gap-4 text-black">
                <h3 className="title !text-5xl">CodeHunt</h3>
                <p className="Subtitle !text-sm">
                  CodeHunt is a community driven hackathon that brings together
                  developers, designers, and innovators to build impactful,
                  real-world solutions.
                </p>
                <a
                  href="/events"
                  className="Signature group flex items-center gap-2 rounded-full border border-black/30 px-6 py-2 text-sm font-medium bg-white hover:bg-black hover:text-white transition-all duration-300 w-fit"
                >
                  Know More
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Grid - 6 Column Layout */}
          <div className="hidden md:grid grid-cols-6 grid-rows-6 gap-1.5 h-[520px] lg:h-[640px] xl:h-[720px]">
            {/* Hack4Brahma Image */}
            <div className="rounded-4xl col-start-4 row-start-1 col-span-3 row-span-3 overflow-hidden bg-white border-2 border-black">
              <img
                src="/h4b.jpg"
                alt="Hack4Brahma hackathon"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Hack4Brahma Text */}
            <div className="Subtitle col-start-1 row-start-2 col-span-3 row-span-2 text-black flex flex-col gap-4 items-center justify-center p-4">
              <p className="!text-sm lg:!text-2xl text-center max-w-md">
                Hack4Brahma is a student-led hackathon that promotes innovation
                and hands-on problem solving. It brings together developers and
                designers to build real-world solutions using modern
                technologies.
              </p>
              <a
                href="/events"
                className="Signature group flex items-center gap-2 rounded-full border border-black/30 px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
              >
                Know More
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Hack4Brahma Title */}
            <div className="col-start-1 row-start-1 col-span-3 text-black flex items-center justify-center">
              <h3 className="title !text-2xl lg:!text-7xl">Hack4Brahma</h3>
            </div>

            {/* CodeHunt Title */}
            <div className="col-start-4 row-start-4 col-span-3 text-black flex items-center justify-center">
              <h3 className="title !text-2xl lg:!text-7xl">CodeHunt</h3>
            </div>

            {/* CodeHunt Text */}
            <div className="Subtitle col-start-4 row-start-5 col-span-3 row-span-2 text-black flex flex-col gap-4 items-center justify-center p-4">
              <p className="!text-sm lg:!text-2xl text-center max-w-md">
                CodeHunt is a community driven hackathon that brings together
                developers, designers, and innovators to build impactful,
                real-world solutions.
              </p>
              <a
                href="/events"
                className="Signature group flex items-center gap-2 rounded-full border border-black/30 px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
              >
                Know More
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* CodeHunt Image */}
            <div className="rounded-4xl col-start-1 row-start-4 col-span-3 row-span-3 overflow-hidden bg-white border-2 border-black">
              <img
                src="/CH.jpg"
                alt="CodeHunt hackathon"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="px-4 md:px-8 lg:px-0 ">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="flex flex-col items-center mb-8 md:mb-10">
            <h2 className="title2 !text-2xl md:!text-3xl underline text-center">
              My Achievements!
            </h2>
            <p className="Subtitle !text-xs md:!text-lg text-black mt-2 text-center max-w-xl">
              A glimpse into events where my work and teams performed at the
              top.
            </p>
          </div>

          {/* Achievement Card */}
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-black bg-white text-black w-full md:w-auto rounded-2xl overflow-hidden">
              {/* Image side */}
              <div className="border-b-2 md:border-b-0 md:border-r-2 border-black">
                <div className="w-full h-64 md:h-80 lg:h-[360px]">
                  <img
                    src="/Winner.jpg"
                    alt="Hackathon winner"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text side */}
              <div className="p-6 md:p-8 flex flex-col justify-center gap-4">
                <div>
                  <h3 className="title2 !text-xl md:!text-4xl underline mb-1">
                    Hackathon Winner
                  </h3>
                  <p className="title !text-xs md:!text-xl text-neutral-700">
                    AIOdyssey 2025
                  </p>
                </div>

                <div className="Subtitle !text-sm md:!text-xl space-y-3">
                  <p>
                    Led a team to build a complete solution within strict
                    hackathon deadlines, focusing on real‑world usability and
                    practical impact.
                  </p>
                  <p>
                    This experience sharpened my skills in rapid prototyping,
                    teamwork, and shipping under pressure.
                  </p>
                </div>

                {/* View details button */}
                <div className="mt-2">
                  <a
                    href="/events" // change to specific event route if you have one
                    className="Signature group inline-flex items-center gap-2 rounded-full border border-black/30 px-5 py-2 text-sm font-medium bg-black text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    View event details
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;