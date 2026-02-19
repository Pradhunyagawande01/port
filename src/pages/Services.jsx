import React from "react";
import {
  MonitorSmartphone,
  LayoutTemplate,
  ShieldCheck,
  Rocket,
  Wrench,
  Users,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  return (
    <div className="wrapper">
      {/* Hero / Intro */}
      <div className="px-4 md:px-8 lg:px-0 pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Text */}
          <div className="flex flex-col justify-center space-y-5">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-neutral-200/70 text-sm font-medium text-neutral-800 w-fit">
              <span className="font-mono">&lt;services /&gt;</span>
              <span>What I can build and ship for you</span>
            </div>

            <h1 className="title text-3xl md:text-4xl lg:text-5xl">
              From idea to polished, secure web experience
            </h1>

            <div className="Subtitle text-base md:text-lg space-y-4">
              <p>
                I help individuals, communities, and startups turn product ideas
                into real, usable web apps. Clean UI, good UX, and solid
                engineering are at the core of everything I ship.
              </p>
              <p>
                Whether you need a portfolio, landing page, hackathon platform,
                or custom dashboard &mdash; I can design, build, and deploy it
                end‑to‑end.
              </p>
            </div>
          </div>

          {/* Highlight / Summary card */}
          <div className="flex items-center justify-center">
            <div className="w-full md:w-[420px] lg:w-[460px] rounded-2xl border-2 border-black bg-white text-black p-6 md:p-8 space-y-5">
              <h2 className="title text-xl md:text-2xl mb-1">
                What working together looks like
              </h2>
              <ul className="Subtitle text-sm md:text-base space-y-2.5 list-disc list-inside">
                <li>Understand your goals, audience, and content.</li>
                <li>Design clean, responsive layouts for all devices.</li>
                <li>Build fast React / Tailwind powered frontends.</li>
                <li>Ship secure, maintainable, and documented code.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-4 md:px-8 lg:px-0 py-12 md:py-20">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-14">
          <div>
            <h2 className="title2 underline text-2xl md:text-3xl">
              Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Service 1 */}
            <div className="rounded-2xl border-2 border-black bg-white text-black p-6 md:p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <LayoutTemplate size={18} />
                </div>
                <h3 className="title text-lg">UI & Frontend Development</h3>
              </div>
              <p className="Subtitle text-sm">
                Pixel perfect, responsive interfaces built with React and
                Tailwind CSS. I turn static designs into fast, interactive
                experiences.
              </p>
              <ul className="Subtitle text-sm space-y-1.5 list-disc list-inside">
                <li>Single page apps (SPA)</li>
                <li>Landing pages & marketing sites</li>
                <li>Dashboard / admin UIs</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="rounded-2xl border-2 border-black bg-white text-black p-6 md:p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <MonitorSmartphone size={18} />
                </div>
                <h3 className="title text-lg">Responsive Web Apps</h3>
              </div>
              <p className="Subtitle text-sm">
                Fully responsive layouts that feel natural on desktop,
                tablet, and mobile. Carefully tuned for readability and
                usability.
              </p>
              <ul className="Subtitle text-sm space-y-1.5 list-disc list-inside">
                <li>Mobile first design thinking</li>
                <li>Adaptive components & grid systems</li>
                <li>Accessibility aware interactions</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="rounded-2xl border-2 border-black bg-white text-black p-6 md:p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="title text-lg">Security Minded Builds</h3>
              </div>
              <p className="Subtitle text-sm">
                Basic cybersecurity practices integrated into frontend
                development so you don’t ship obvious vulnerabilities.
              </p>
              <ul className="Subtitle text-sm space-y-1.5 list-disc list-inside">
                <li>Input validation & safe forms</li>
                <li>Auth flows & protected routes (client‑side)</li>
                <li>Awareness of common OWASP risks</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="rounded-2xl border-2 border-black bg-white text-black p-6 md:p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <Rocket size={18} />
                </div>
                <h3 className="title text-lg">Performance & Optimization</h3>
              </div>
              <p className="Subtitle text-sm">
                Make existing sites feel snappier: reduce bundle size,
                improve loading, and clean up UI code.
              </p>
              <ul className="Subtitle text-sm space-y-1.5 list-disc list-inside">
                <li>Core Web Vitals     oriented improvements</li>
                <li>Code splitting & lazy loading</li>
                <li>Refactoring old components</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="rounded-2xl border-2 border-black bg-white text-black p-6 md:p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <Wrench size={18} />
                </div>
                <h3 className="title text-lg">Integration & Support</h3>
              </div>
              <p className="Subtitle text-sm">
                Need to hook your frontend into an existing API or backend?
                I can integrate and support what you already have.
              </p>
              <ul className="Subtitle text-sm space-y-1.5 list-disc list-inside">
                <li>REST API integration (fetch / axios)</li>
                <li>State management & error handling</li>
                <li>Ongoing maintenance & small fixes</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="rounded-2xl border-2 border-black bg-white text-black p-6 md:p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <Users size={18} />
                </div>
                <h3 className="title text-lg">Consultation & Code Review</h3>
              </div>
              <p className="Subtitle text-sm">
                Have a project in progress? I can review code, suggest
                improvements, and help you define a clear technical roadmap.
              </p>
              <ul className="Subtitle text-sm space-y-1.5 list-disc list-inside">
                <li>Architecture & component breakdown</li>
                <li>Refactoring suggestions</li>
                <li>UI/UX feedback with actionable steps</li>
              </ul>
            </div>
          </div>

          {/* Process / CTA */}
          <div className="rounded-2xl border-2 border-black bg-white text-black p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2 md:max-w-xl">
              <h3 className="title text-lg md:text-xl">How we can work together</h3>
              <p className="Subtitle text-sm md:text-base">
                Share your idea or project brief, and I’ll help you turn it into
                a clear scope with timelines and deliverables. From there, we
                move to wireframes, design, and implementation.
              </p>
            </div>
            <a
              href="/links" // or your actual contact route/section
              className="Signature group inline-flex items-center justify-center gap-2 rounded-full border border-black/40 px-6 py-2.5 text-sm font-medium bg-black text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Let’s Build Something
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;