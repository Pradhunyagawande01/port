import React from "react";
import { Award, ExternalLink } from "lucide-react";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="">
        <div className="grid justify-center items-center grid-cols-2 gap-12 pt-">
          <div className="">
            <div className="inline-flex items-center justify-centergap-2 px-4 py-1.5 rounded-full bg-neutral-200/70 text-sm font-medium text-neutral-800 text-center mb-4">
              <span className="font-mono">&lt;/&gt;</span>
              <span>Frontend Developer & Cybersecurity Enthusiast</span>
            </div>

            <h1 className="title">
              I build fast, modern, and scalable web apps
            </h1>
            <span className="Subtitle">
              Hi, I’m Pradhunya, a frontend developer focused on building
              responsive and user-friendly web applications. I specialize in
              creating modern interfaces
              <p />
              <span>
                I enjoy turning ideas into polished digital experiences, writing
                clean, scalable code, and building projects like portfolios,
                hackathon platforms, and community websites.
              </span>
            </span>
          </div>
          <div className="">
            <img src="/About.png" alt="Description" className="h-[500px]" />
          </div>
        </div>
        <div className="section 2">
          <div className="">
            <div>
              <h1 className="title2 underline">My Work!</h1>
            </div>
            <div className="grid grid-cols-6 grid-rows-6 gap-[6px] h-screen mt-6">
              <div className="rounded-4xl col-start-4 row-start-1 col-span-3 row-span-3 border-2 border-black text-black flex items-center justify-center overflow-hidden">
                <img src="/h4b.jpg" alt="Hack4Brahma" className="h-[550px]" />
              </div>

              <div className=" Subtitle col-start-1 row-start-2 col-span-3 row-span-2 text-black align-middle flex flex-col gap-8 items-center justify-center">
                <p className="text-center">
                  Hack4Brahma is a student-led hackathon that promotes
                  innovation and hands-on problem solving. It brings together
                  developers and designers to build real-world solutions using
                  modern technologies. The event focuses on learning,
                  collaboration, and community building.
                </p>
                <a
                  href="/events"
                  className="Signature group flex items-center gap-2 rounded-full border border-black/30 px-6 py-2 text-sm font-medium black backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Know More
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>

              <div className="col-start-1 row-start-1 col-span-3 text-black flex items-center justify-center">
                <h1 className="title">Hack4Brahma</h1>
              </div>

              <div className="col-start-4 row-start-4 col-span-3  text-black flex items-center justify-center">
                <h1 className="title">CodeHunt</h1>
              </div>

              <div className="Subtitle col-start-4 row-start-5 col-span-3 row-span-2  text-black gap-8 flex-col flex items-center justify-center">
                <p className="text-center">
                  CodeHunt is a community driven hackathon that brings together
                  developers, designers, and innovators to build impactful,
                  real-world solutions. It emphasizes creativity, collaboration,
                  hands-on learning, and growth through mentorship and teamwork.
                </p>
                <a
                  href="/events"
                  className="Signature group flex items-center gap-2 rounded-full border border-black/30 px-6 py-2 text-sm font-medium black backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Know More
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>

              <div className="rounded-4xl col-start-1 row-start-4 col-span-3 row-span-3 border-2 border-black overflow-hidden text-black flex items-center justify-center">
                <img src="/CH.jpg" alt="CodeHunt" className="h-[670px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="section 3">
          <div className="">
            <div className="pt-20 flex items-center justify-end text-left">
              <h1 className="title2 underline">My Achivments!</h1>
            </div>
            <div className=" flex items-center justify-center pt-10 ">
              <div className="grid grid-cols-2 gap-12 border-2 border-black p-6">
                <div className="">
                  <img
                    src="/Winner.jpg"
                    alt="Achievements"
                    className="object-cover"
                  />
                </div>
                <div className="">
                  <h1 className="title2 underline ">
                    <Award size={32} className="inline-block mr-2" /> Hackathon
                    Winner
                  </h1>
                  <div className="Subtitle">
                   
                  
                  
                  </div>
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
