import React from "react";
import {
  Code2,
  Layout,
  ShieldCheck,
  TerminalSquare,
  Server,
  Figma,
  GitBranch,
} from "lucide-react";

const Skills = () => {
  return (
    <div className="wrapper">
      {/* Hero / Intro */}
      <div className="px-4 md:px-8 lg:px-0 pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Text */}
          <div className="flex flex-col justify-center space-y-5">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-neutral-200/70 text-sm font-medium text-neutral-800 w-fit">
              <span className="font-mono">&lt;skills /&gt;</span>
              <span>What I work with every day</span>
            </div>

            <h1 className="title text-3xl md:text-4xl lg:text-5xl">
              A modern frontend stack with a security‑first mindset
            </h1>

            <div className="Subtitle text-base md:text-lg space-y-4">
              <p>
                I focus on building responsive, accessible, and performant web
                interfaces using React and modern tooling. I care about clean
                architecture, re‑usable components, and developer experience.
              </p>
              <p>
                Alongside frontend work, I explore cybersecurity and secure
                coding practices to ship experiences that are not only
                beautiful, but also safe.
              </p>
            </div>
          </div>

          {/* Highlight card */}
          <div className="flex items-center justify-center">
            <div className="w-full md:w-[420px] lg:w-[460px] rounded-2xl border-2 border-black bg-white text-black p-6 md:p-8 space-y-5">
              <h2 className="title text-xl md:text-2xl mb-1">
                Snapshot of my stack
              </h2>
              <ul className="Subtitle text-sm md:text-base space-y-2.5 list-disc list-inside">
                <li>React + TypeScript for scalable UI development</li>
                <li>Tailwind CSS for fast, design‑system driven styling</li>
                <li>REST APIs, JSON handling, and client‑side state</li>
                <li>Basic security practices: input validation, auth flows</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="px-4 md:px-8 lg:px-0 py-12 md:py-20">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-14">
          {/* Section heading */}
          <div>
            <h2 className="title2 underline text-2xl md:text-3xl">
              Skills & Tools
            </h2>
          </div>

          {/* Core Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Core Frontend */}
            <div className="rounded-2xl border-2 border-black bg-white text-black p-6 md:p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <Code2 size={18} />
                </div>
                <h3 className="title text-lg">Core Frontend</h3>
              </div>
              <ul className="Subtitle text-sm space-y-1.5 pl-4 list-disc">
                <li>HTML5, CSS3, Modern JavaScript (ES6+)</li>
                <li>React (hooks, context, reusable components)</li>
                <li>TypeScript for safer, scalable codebases</li>
                <li>Next.js basics (routing, data‑fetching)</li>
              </ul>
            </div>

            {/* UI / UX & Styling */}
            <div className="rounded-2xl border-2 border-black bg-white text-black p-6 md:p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <Layout size={18} />
                </div>
                <h3 className="title text-lg">UI Engineering</h3>
              </div>
              <ul className="Subtitle text-sm space-y-1.5 pl-4 list-disc">
                <li>Tailwind CSS & responsive layout systems</li>
                <li>Design systems, reusable component libraries</li>
                <li>Accessibility‑minded UI (semantics, focus states)</li>
                <li>Animation & micro‑interactions (basic Framer Motion)</li>
              </ul>
            </div>

            {/* Security / Reliability */}
            <div className="rounded-2xl border-2 border-black bg-white text-black p-6 md:p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="title text-lg">Security Mindset</h3>
              </div>
              <ul className="Subtitle text-sm space-y-1.5 pl-4 list-disc">
                <li>Understanding of OWASP Top 10 basics</li>
                <li>Secure handling of forms & user input</li>
                <li>Auth flows, tokens, and protected routes (frontend)</li>
                <li>Basic tooling: Burp Suite / browser devtools</li>
              </ul>
            </div>
          </div>

          {/* Tools & Workflow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Dev Tools */}
            <div className="rounded-2xl border-2 border-black bg-white text-black p-6 md:p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <TerminalSquare size={18} />
                </div>
                <h3 className="title text-lg">Developer Tools</h3>
              </div>
              <ul className="Subtitle text-sm space-y-1.5 pl-4 list-disc">
                <li>Git & GitHub for version control</li>
                <li>VS Code with a custom productivity setup</li>
                <li>npm / pnpm / yarn for package management</li>
                <li>ESLint & Prettier for consistent code quality</li>
              </ul>
            </div>

            {/* Backend & Infra basics */}
            <div className="rounded-2xl border-2 border-black bg-white text-black p-6 md:p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <Server size={18} />
                </div>
                <h3 className="title text-lg">Web Basics</h3>
              </div>
              <ul className="Subtitle text-sm space-y-1.5 pl-4 list-disc">
                <li>REST APIs (fetch/axios, error handling)</li>
                <li>JSON, localStorage, and client‑side caching</li>
                <li>Simple Node.js + Express usage (APIs, scripts)</li>
                <li>Deploying SPAs to services like Vercel / Netlify</li>
              </ul>
            </div>

            {/* Design & Collaboration */}
            <div className="rounded-2xl border-2 border-black bg-white text-black p-6 md:p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                  <GitBranch size={18} />
                </div>
                <h3 className="title text-lg">Design & Collaboration</h3>
              </div>
              <ul className="Subtitle text-sm space-y-1.5 pl-4 list-disc">
                <li>Figma for wireframes & UI mockups</li>
                <li>Working with designers & reading design specs</li>
                <li>Agile practices: tasks, issues, and sprints</li>
                <li>Writing clear documentation & project READMEs</li>
              </ul>
            </div>
          </div>

          {/* Currently Learning */}
          <div className="rounded-2xl border-2 border-black bg-white text-black p-6 md:p-7">
            <h3 className="title text-lg mb-3">Currently Learning</h3>
            <p className="Subtitle text-sm md:text-base">
              I’m actively exploring{" "}
              <span className="font-semibold">
                advanced React patterns, performance optimization,
              </span>{" "}
              and deeper{" "}
              <span className="font-semibold">web security concepts</span> to
              build more reliable and scalable applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;