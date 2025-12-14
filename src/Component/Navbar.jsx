import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("/");

  useEffect(() => {
    // Set active page based on current URL
    setActivePage(window.location.pathname);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Skills", href: "/skills" },
    { label: "Experience", href: "/experience" },
    { label: "Events", href: "/events" },
    { label: "Links", href: "/links" },
  ];

  return (
    <div className="pb-10">
      <nav className="fixed w-full bg-transparent backdrop-blur-3xl p-4">
        <div className="max-w-7xl mx-auto">
          <div className=" border-2 border-black p-3 shadow-lg hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)] transition-shadow duration-300">
            <div className="flex justify-between items-center">
              {/* Logo/Brand */}
              <div className="flex items-center gap-2 px-4 py-2 font-bold text-lg">
                <a href="/" className=" Subtitle transition-opacity">
                  Pradhunya Gawande
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setActivePage(link.href)}
                    className={`px-4 py-2 rounded-4xl font-semibold whitespace-nowrap transition-all duration-200 ${
                      activePage === link.href
                        ? "bg-black text-white"
                        : "hover:bg-black hover:text-white text-black"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover:bg-black hover:text-white rounded-full transition-all"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <div className="md:hidden mt-4 pt-4 pb-6 border-t-2 border-black">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => {
                        setActivePage(link.href);
                        setIsOpen(false);
                      }}
                      className={`px-4 py-3 rounded-full font-semibold text-center transition-all duration-200 ${
                        activePage === link.href
                          ? "bg-black text-white"
                          : "hover:bg-black hover:text-white text-black"
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
