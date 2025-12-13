import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="text-black">
      {/* Section 1: compact content hero */}
      <section
        id="home"
        className="min-h-[60vh] flex items-center justify-center px-6 sm:px-12 lg:px-20 py-12"
      >
        <div className="max-w-4xl w-full text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-sm ">
            <Sparkles size={18} className="text-green-300" />
            <span>Front-end Engineer</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Crafting fast, accessible, and delightful web experiences.
          </h1>

          <p className="text-base sm:text-lg max-w-3xl mx-auto">
            I design and build digital products with clean code, thoughtful UX, and
            smooth interactions. Currently available for freelance and remote roles.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-green-500 text-black px-5 py-3 rounded-md font-medium shadow-lg shadow-green-500/20 hover:bg-green-400 transition"
            >
              Let&apos;s talk
              <ArrowRight size={18} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/10 text-white/80 hover:text-white hover:border-white/30 transition"
            >
              View work
            </a>
          </div>

          <div className="flex items-center justify-center gap-5 text-white/70">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="hover:text-white transition"
            >
              <Twitter size={22} />
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: animations showcase */}
      <section
        id="animations"
        className="py-16 px-6 sm:px-12 lg:px-20 "
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-green-300/80">Animations</p>
              <h2 className="text-2xl sm:text-3xl font-semibold">A playground of motion</h2>
            </div>
            <p className="text-sm text-white/60 max-w-md">
              Light, continuous motion to keep things lively without stealing focus from your content.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-2xl p-6 bg-white/5 border border-white/10">
              <div className="w-full h-36 rounded-xl bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-pink-500/20 animate-float" />
              <h3 className="mt-4 text-lg font-semibold">Floating gradient</h3>
              <p className="text-sm text-white/60 mt-1">A gentle vertical float for soft visual depth.</p>
            </div>

            <div className="relative overflow-hidden rounded-2xl p-6 bg-white/5 border border-white/10">
              <div
                className="w-full h-36 rounded-xl bg-gradient-to-r from-green-400/25 to-emerald-500/15 animate-float"
                style={{ animationDuration: '14s', animationDelay: '1s' }}
              />
              <h3 className="mt-4 text-lg font-semibold">Slow drift</h3>
              <p className="text-sm text-white/60 mt-1">Longer timing for calm background motion.</p>
            </div>

            <div className="relative overflow-hidden rounded-2xl p-6 bg-white/5 border border-white/10">
              <div
                className="w-full h-36 rounded-xl bg-gradient-to-r from-cyan-400/25 via-blue-500/20 to-indigo-500/15 animate-float"
                style={{ animationDuration: '9s', animationDirection: 'alternate' }}
              />
              <h3 className="mt-4 text-lg font-semibold">Alternate flow</h3>
              <p className="text-sm text-white/60 mt-1">Alternate direction for a subtle parallax feel.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
