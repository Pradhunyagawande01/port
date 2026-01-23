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
    <div className="wrapper">
      {/* Hero / Intro */}
      <div className="relative px-4 md:px-8 lg:px-0 pt-20 md:pt-24 overflow-hidden">
        {/* soft background accents */}
        <div className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 rounded-full bg-red-500/10 blur-3xl" />
        <div className="pointer-events-none absolute top-10 right-0 w-52 h-52 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 relative">
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

          {/* Animated card */}
          <div className="flex items-center justify-center">
            <div className="w-full md:w-[420px] lg:w-[460px] rounded-2xl border-2 border-black bg-white text-black p-6 md:p-8 space-y-5 relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-black/5" />
              <div className="absolute -left-10 bottom-0 w-32 h-32 rounded-full bg-black/5" />

              <h2 className="title text-xl md:text-2xl mb-1 relative z-10">
                Quick response, honest feedback
              </h2>
              <p className="Subtitle text-sm md:text-base relative z-10">
                I try to reply within 24–48 hours. Tell me a bit about what
                you’re building and how you think I can help.
              </p>
              <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-700 relative z-10">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Currently accepting freelance & collaboration requests</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="px-4 md:px-8 lg:px-0 py-12 md:py-16">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
          <div>
            <h2 className="title2 underline text-2xl md:text-3xl">
              Links & Socials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* GitHub */}
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border-2 border-black bg-white text-black p-5 md:p-6 flex items-center justify-between gap-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <Github size={18} />
                </div>
                <div>
                  <p className="title text-base">GitHub</p>
                  <p className="Subtitle text-xs text-neutral-600">
                    Code, experiments & projects
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
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border-2 border-black bg-white text-black p-5 md:p-6 flex items-center justify-between gap-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="title text-base">LinkedIn</p>
                  <p className="Subtitle text-xs text-neutral-600">
                    Work, updates & networking
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
              href="https://instagram.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border-2 border-black bg-white text-black p-5 md:p-6 flex items-center justify-between gap-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <Instagram size={18} />
                </div>
                <div>
                  <p className="title text-base">Instagram</p>
                  <p className="Subtitle text-xs text-neutral-600">
                    Behind the scenes & dev life
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
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border-2 border-black bg-white text-black p-5 md:p-6 flex items-center justify-between gap-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <Twitter size={18} />
                </div>
                <div>
                  <p className="title text-base">Twitter / X</p>
                  <p className="Subtitle text-xs text-neutral-600">
                    Thoughts, threads & updates
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
              href="mailto:your@email.com"
              className="group rounded-2xl border-2 border-black bg-white text-black p-5 md:p-6 flex items-center justify-between gap-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
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
      </div>

      {/* Contact Section */}
      <div className="px-4 md:px-8 lg:px-0 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Form */}
          <div className="rounded-2xl border-2 border-black bg-white text-black p-6 md:p-8">
            <h2 className="title text-xl md:text-2xl mb-2">Contact</h2>
            <p className="Subtitle text-sm md:text-base mb-6">
              Share a bit about your project or idea &mdash; I’ll get back to
              you with thoughts, questions, or next steps.
            </p>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // you can wire this to a backend or email service later
                alert("Thanks for reaching out! I’ll reply soon.");
              }}
            >
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full border-b border-black/40 bg-transparent px-0 py-2 text-sm outline-none focus:border-black"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full border-b border-black/40 bg-transparent px-0 py-2 text-sm outline-none focus:border-black"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  What are you looking to build?
                </label>
                <input
                  type="text"
                  className="w-full border-b border-black/40 bg-transparent px-0 py-2 text-sm outline-none focus:border-black"
                  placeholder="e.g. Landing page, hackathon site, dashboard..."
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-black/40 rounded-xl bg-transparent px-3 py-2 text-sm outline-none focus:border-black resize-none"
                  placeholder="Tell me more about your idea, timeline, and anything else that matters."
                />
              </div>

              <button
                type="submit"
                className="Signature group mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-black px-6 py-2.5 text-sm font-medium bg-black text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Send Message
                <Send
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                />
              </button>
            </form>
          </div>

          {/* Info / availability */}
          <div className="space-y-8">
            <div>
              <h3 className="title2 text-xl md:text-2xl mb-2">
                How I prefer to work
              </h3>
              <p className="Subtitle text-sm md:text-base text-neutral-800">
                Clear communication is key. I like to define scope, timelines,
                and expectations before writing any code. After that, I share
                progress in small, reviewable chunks.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-black bg-white text-black p-5 md:p-6 space-y-3">
              <p className="Subtitle text-sm md:text-base">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-semibold">
                    Currently open to:
                  </span>
                </span>
              </p>
              <ul className="Subtitle text-sm space-y-1.5 list-disc list-inside">
                <li>Freelance frontend projects</li>
                <li>Hackathon / event platforms</li>
                <li>Collabs on open‑source or dev tools</li>
              </ul>
            </div>

            <div className="Subtitle text-xs md:text-sm text-neutral-700">
              Prefer writing your own email? Reach me at{" "}
              <a
                href="mailto:your@email.com"
                className="underline underline-offset-2 hover:text-black"
              >
                pradhunyagawande@email.com
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksContact;