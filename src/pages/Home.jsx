import React from "react";
import { Award, ExternalLink } from "lucide-react";

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
        <div className="">
          <div className="">
            <div>
              <h1 className="title2 underline">My Achievements !</h1>
            </div>
            <div className="">
              {/* Content */}
              <div className="flex gap-4 border-t-2 border-black w-full height-full
               mt-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className=" ">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                    alt="CodeHunt Winner"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Section */}
                <div className=" p-8 flex flex-col justify-between">
                  {/* Badge and Title */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Award size={24} className="text-yellow-600" />
                      <h2 className="text-2xl font-bold text-black">
                        CodeHunt Winner
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                      Won the CodeHunt Hackathon by building an innovative
                      project within 24 hours, standing out among 200+
                      participants for its creativity, execution, and impact.
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-black flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm">
                          Secured 1st place out of 200+ participants
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-black flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm">
                          Developed a complete and functional project in just 24
                          hours
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-black flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm">
                          Recognized for technical excellence and
                          problem-solving approach
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-black flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm">
                          Delivered a compelling pitch that impressed the
                          judging panel
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="mt-6 bg-yellow-200 border-2 border-black px-6 py-3 font-semibold text-black hover:bg-yellow-300 transition flex items-center justify-center gap-2 w-full">
                    View Achievement
                    <ExternalLink size={18} />
                  </button>
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
