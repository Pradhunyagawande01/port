import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo / Image */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png" // place your image in public folder
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-white font-bold text-lg">MyPortfolio</span>
        </div>

        {/* Right: Nav Links */}
        <div className="hidden md:flex gap-8 text-white font-medium">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/links">Links</NavLink>
        </div>
      </div>
    </nav>
  );
}
