import React from 'react';

export default function Work() {
  return (
    <section id="work" className="min-h-[50vh] bg-[#0b0b0f] text-white px-6 sm:px-12 lg:px-20 py-16">
      <div className="max-w-5xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold">Work</h2>
        <p className="text-lg text-white/70">Showcase your highlighted projects here.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-white/10 rounded-xl bg-white/5">Project card</div>
          <div className="p-4 border border-white/10 rounded-xl bg-white/5">Project card</div>
        </div>
      </div>
    </section>
  );
}
