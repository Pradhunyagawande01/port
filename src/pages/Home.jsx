import React from "react";
import { Award, ExternalLink, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="wrapper">
      {/* Hero Section */}
      <div className="px-4 md:px-8 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-20 md:pt-0 max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-neutral-200/70 text-sm font-medium text-neutral-800 mb-4 w-fit">
              <span className="font-mono">&lt;/&gt;</span>
              <span className="hidden sm:inline">Frontend Developer & Cybersecurity Enthusiast</span>
              <span className="sm:hidden">Frontend Developer & Cybersecurity Enthusiast</span>
            </div>

            <h1 className="title text-3xl md:text-4xl lg:text-5xl mb-4">
              I build fast, modern, and scalable web apps
            </h1>
            <div className="Subtitle text-base md:text-lg space-y-4">
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

          {/* Image */}
          <div className="flex items-center justify-center">
            <img 
              src="/About.png" 
              alt="Description" 
              className="h-[300px] sm:h-[400px] md:h-[500px] object-contain" 
            />
          </div>
        </div>
      </div>

      {/* My Work Section */}
      <div className="px-4 md:px-8 lg:px-0 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h1 className="title2 underline text-2xl md:text-3xl">My Work!</h1>
          </div>

          {/* Mobile Grid - Single Column */}
          <div className="grid grid-cols-1 md:hidden gap-6">
            {/* Hack4Brahma Card */}
            <div className="rounded-2xl border-2 border-black overflow-hidden">
              <img src="/h4b.jpg" alt="Hack4Brahma" className="w-full h-64 object-cover" />
              <div className="p-6 flex flex-col gap-4">
                <h1 className="title text-xl">Hack4Brahma</h1>
                <p className="Subtitle text-sm">
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
            <div className="rounded-2xl border-2 border-black overflow-hidden">
              <img src="/CH.jpg" alt="CodeHunt" className="w-full h-64 object-cover" />
              <div className="p-6 flex flex-col gap-4">
                <h1 className="title text-xl">CodeHunt</h1>
                <p className="Subtitle text-sm">
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

          {/* Desktop Grid - 6 Column */}
          <div className="hidden md:grid grid-cols-6 grid-rows-6 gap-1.5 h-[600px] lg:h-screen">
            <div className="rounded-4xl col-start-4 row-start-1 col-span-3 row-span-3 border-2 border-black text-black flex items-center justify-center overflow-hidden">
              <img src="/h4b.jpg" alt="Hack4Brahma" className="h-full object-cover" />
            </div>

            <div className="Subtitle col-start-1 row-start-2 col-span-3 row-span-2 text-black flex flex-col gap-4 items-center justify-center p-4">
              <p className="text-center text-sm lg:text-base">
                Hack4Brahma is a student-led hackathon that promotes
                innovation and hands-on problem solving. It brings together
                developers and designers to build real-world solutions using
                modern technologies.
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

            <div className="col-start-1 row-start-1 col-span-3 text-black flex items-center justify-center">
              <h1 className="title text-2xl lg:text-3xl">Hack4Brahma</h1>
            </div>

            <div className="col-start-4 row-start-4 col-span-3 text-black flex items-center justify-center">
              <h1 className="title text-2xl lg:text-3xl">CodeHunt</h1>
            </div>

            <div className="Subtitle col-start-4 row-start-5 col-span-3 row-span-2 text-black gap-4 flex-col flex items-center justify-center p-4">
              <p className="text-center text-sm lg:text-base">
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

            <div className="rounded-4xl col-start-1 row-start-4 col-span-3 row-span-3 border-2 border-black overflow-hidden text-black flex items-center justify-center">
              <img src="/CH.jpg" alt="CodeHunt" className="h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="px-4 md:px-8 lg:px-0 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-end mb-8">
            <h1 className="title2 underline text-2xl md:text-3xl">My Achievements!</h1>
          </div>

          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-black w-full md:w-auto">
              <div className="border-b-2 md:border-b-0 md:border-r-2 border-black">
                <img
                  src="/Winner.jpg"
                  alt="Achievements"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h1 className="title2 underline text-xl md:text-2xl mb-4">
                  <Award size={28} className="inline-block mr-2" /> Hackathon Winner
                </h1>
                <div className="Subtitle text-sm md:text-base space-y-3">
                  {/* Add your achievement details here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;