import React from "react";
import {
  Link2,
  Mail,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";

const LinksContact = () => {
  return (
    <div className="wrapper pt-24 md:pt-28">
      {/* Hero / Intro */}
      <div className="px-4 md:px-8 lg:px-0 pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Text */}
          <div className="flex flex-col justify-center space-y-5">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-neutral-200/70 text-sm font-medium text-neutral-800 w-fit">
              <span className="font-mono">&lt;contact /&gt;</span>
              <span>Let’s build something together</span>
            </div>

            <h1 className="title text-3xl md:text-4xl lg:text-5xl">
              Links, socials, and a way to reach me.
            </h1>

            <div className="Subtitle text-base md:text-lg space-y-4">
              <p>
                Whether you have a project idea, want to collaborate on a
                hackathon, or just want to say hi, I’m always happy to connect.
              </p>
              <p>
                You can find me on these platforms, or drop a message directly
                through the form below.
              </p>
            </div>
          </div>

          {/* Highlight card */}
          <div className="flex items-center justify-center">
            <div className=" w-full md:w-[420px] lg:w-[460px] rounded-2xl border-2 border-black bg-white text-black p-6 md:p-8 space-y-5 overflow-hidden">
              {/* Soft background circles */}
            

              <h2 className="title text-xl md:text-2xl mb-1  z-10">
                Quick response, honest feedback
              </h2>
              <p className="Subtitle text-sm md:text-base  z-10">
                I try to reply within 24–48 hours. Tell me a bit about what
                you’re building and how you think I can help.
              </p>
              <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-700  z-10">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>
                  Currently accepting freelance & collaboration requests
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <section className="px-4 md:px-8 lg:px-0 py-12 md:py-16">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
          <div>
            <h2 className="title2 underline text-2xl md:text-3xl">
              Links &amp; Socials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* GitHub */}
            <a
              href="https://github.com/Pradhunyagawande01"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border-2 border-black bg-white text-black p-5 md:p-6 flex items-center justify-between gap-4  hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <Github size={18} />
                </div>
                <div>
                  <p className="title text-base">GitHub</p>
                  <p className="Subtitle text-xs text-neutral-600">
                    Code, experiments &amp; projects
                  </p>
                </div>
              </div>
              <Link2
                size={18}
                className="text-neutral-500 group-hover:text-black transition-colors"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/pradhunya-gawande-9a61a3304/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border-2 border-black bg-white text-black p-5 md:p-6 flex items-center justify-between gap-4  hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="title text-base">LinkedIn</p>
                  <p className="Subtitle text-xs text-neutral-600">
                    Work, updates &amp; networking
                  </p>
                </div>
              </div>
              <Link2
                size={18}
                className="text-neutral-500 group-hover:text-black transition-colors"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/pradhyumnya_patil/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border-2 border-black bg-white text-black p-5 md:p-6 flex items-center justify-between gap-4  hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <Instagram size={18} />
                </div>
                <div>
                  <p className="title text-base">Instagram</p>
                  <p className="Subtitle text-xs text-neutral-600">
                    Behind the scenes &amp; dev life
                  </p>
                </div>
              </div>
              <Link2
                size={18}
                className="text-neutral-500 group-hover:text-black transition-colors"
              />
            </a>

            {/* Twitter / X */}
            <a
              href="https://x.com/pradhunya_patil"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border-2 border-black bg-white text-black p-5 md:p-6 flex items-center justify-between gap-4  hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <Twitter size={18} />
                </div>
                <div>
                  <p className="title text-base">Twitter / X</p>
                  <p className="Subtitle text-xs text-neutral-600">
                    Thoughts, threads &amp; updates
                  </p>
                </div>
              </div>
              <Link2
                size={18}
                className="text-neutral-500 group-hover:text-black transition-colors"
              />
            </a>

            {/* Email */}
            <a
              href="mailto:pradhunyagawande@gmail.com"
              className="group rounded-2xl border-2 border-black bg-white text-black p-5 md:p-6 flex items-center justify-between gap-4  hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="title text-base">Email</p>
                  <p className="Subtitle text-xs text-neutral-600">
                    Best for detailed project requests
                  </p>
                </div>
              </div>
              <Link2
                size={18}
                className="text-neutral-500 group-hover:text-black transition-colors"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 md:px-8 lg:px-0 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
            {/* How I work */}
            <div>
              <h3 className="title2 text-xl md:text-2xl mb-2 text-left md:text-left">
                How I prefer to work
              </h3>
              <p className="Subtitle text-sm md:text-base text-neutral-800">
                Clear communication is key. I like to define scope, timelines,
                and expectations before writing any code. After that, I share
                progress in small, reviewable chunks.
              </p>

              {/* Direct email line */}
              <p className="Subtitle text-xs md:text-sm text-neutral-700">
                Prefer writing your own email? Reach me at{" "}
                <a
                  href="mailto:pradhunyagawande@gmail.com"
                  className="underline underline-offset-2 hover:text-black"
                >
                  pradhunyagawande@gmail.com
                </a>
                .
              </p>
            </div>

            {/* Availability card */}
            <div className="rounded-2xl border-2 border-black bg-white text-black p-5 md:p-6 space-y-3">
              <p className="Subtitle text-sm md:text-base">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-semibold">Currently open to:</span>
                </span>
              </p>
              <ul className="Subtitle text-sm space-y-1.5 list-disc list-inside">
                <li>Freelance frontend projects</li>
                <li>Hackathon / event platforms</li>
                <li>Collabs on open‑source or dev tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinksContact;
