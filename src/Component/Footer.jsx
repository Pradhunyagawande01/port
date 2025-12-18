import { Github, Linkedin, Globe, Twitter } from "lucide-react";

export default function Footer() {
  // const navLinks = [
  //   { label: "Home", href: "/" },
  //   { label: "Services", href: "/services" },
  //   { label: "Skills", href: "/skills" },
  //   { label: "Experience", href: "/experience" },
  //   { label: "Events", href: "/events" },
  //   { label: "Links", href: "/links" },
  // ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Pradhunyagawande01", color: "hover:text-white" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/pradhunya-gawande/", color: "hover:text-blue-700" },
    { icon: Globe, label: "Website", href: "https://example.com", color: "hover:text-blue-500" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/pradhunya_patil", color: "hover:text-blue-400" },
  ];

  return (
    <footer className="w-full  mt-20">
      <div className="p-6">
        <div className=" ">
          <div className="flex flex-col gap-8">
            {/* Footer Top - Brand & Description */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="Signature font-bold text-lg">Pradhunya Gawande</h3>
                <p className=" Subtitle text-sm text-gray-700 max-w-xs">
                  Crafting digital experiences with creativity and innovation.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`p-3 border-2 border-black rounded-full hover:bg-black transition-all duration-200 ${social.color}`}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t-2 border-black"></div>

            {/* Footer Bottom - Links & Copyright */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              

              <p className="Subtitle">
                © 2026 Pradhunya Gawande. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}