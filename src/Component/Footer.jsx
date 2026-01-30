import React from "react";

export default function Footer() {
  return (
    <footer className="w-full mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        {/* Top Border */}
        <div className="border-t-2 border-black"></div>

        {/* Footer Content */}
        <div className="py-10 md:py-14">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left - Brand & Tagline */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <h3 className="Signature font-bold text-xl md:text-2xl">
                Pradhunya Gawande
              </h3>
              <p className="Subtitle text-sm text-neutral-600">
                Building things that matter.
              </p>
            </div>

            {/* Center - Quote/Message */}
            <div className="hidden md:block text-center">
              <p className="Subtitle text-sm text-neutral-500 italic">
                "Code is poetry, design is art."
              </p>
            </div>

            {/* Right - Copyright */}
            <div className="flex flex-col items-center md:items-end gap-1">
              <p className="Subtitle text-sm text-neutral-600">
                © {new Date().getFullYear()} All rights reserved.
              </p>
              <p className="text-xs text-neutral-400">
                Made with ❤️ in India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}