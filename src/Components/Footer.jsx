import { FaLinkedin, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Finax from "../assets/StudioVisualFX.png";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "film-gallery", label: "Our Films" },
    { id: "testimonials", label: "Testimonials" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id) => {
    if (id === "film-gallery") {
      navigate("/film-gallery");
      return;
    }

    if (id === "about") {
      navigate("/about");
      return;
    }

    // If not on Home page, navigate first then scroll
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="text-white font-[Alata]">
      <div className="max-w-7xl mx-auto py-4">
        {/* Top Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mt-10">
          {/* Left Section - Logo & Social */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src={Finax}
              alt="Finax Logo"
              className="w-28 mb-4 mx-auto md:mx-0"
            />
            <p className="text-sm leading-relaxed max-w-full md:max-w-sm">
              We are at the intersection of finance and technology. We empower the
              Fintech community through high-impact events and authoritative content.
            </p>

            <div className="flex gap-3 mt-5 justify-center md:justify-start">
              {[
                { icon: FaLinkedin, link: "https://linkedin.com" },
                { icon: FaFacebookF, link: "https://facebook.com" },
                { icon: FaInstagram, link: "https://instagram.com" },
                { icon: FaXTwitter, link: "https://x.com" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md border border-white hover:bg-white hover:text-black transition duration-200"
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Award Categories */}
          <div className="text-center md:text-left">
            <h3 className="font-alatsi text-white text-lg mb-3">
              Award Categories
            </h3>
            <ul className="space-y-1 text-sm text-white/70">
              {["Traders Award", "Brokers Award", "Support Services"].map(
                (award, idx) => (
                  <li key={idx}>{award}</li>
                )
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-alatsi text-white text-lg mb-3">
              Quick Links
            </h3>
            <ul className="space-y-1 text-sm text-white/70">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="cursor-pointer hover:text-white"
                  onClick={() => handleScroll(item.id)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="font-alatsi text-white text-lg mb-3">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaPhone className="text-white/70" />
                <a
                  href="tel:+971569169750"
                  className="text-white/70 hover:text-white"
                >
                  +971 56 916 9750
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 mt-2">
                <FaEnvelope className="text-white/70" />
                <a
                  href="mailto:finxawards@gmail.com"
                  className="text-white/70 hover:text-white"
                >
                  finxawards@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4">
          <div className="flex justify-center items-center text-sm text-white/70">
            <p className="text-center">
              © {new Date().getFullYear()} Studio VisualFx (Pvt) Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
