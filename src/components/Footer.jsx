import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-[#1a1b24] text-white/70">
      <div className="max-w-[1280px] mx-auto px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.25fr] gap-12 pb-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 no-underline mb-4"
            >
              <span
                className="w-9 h-9 bg-brand-gradient rounded-[10px] flex items-center justify-center
                               font-jakarta font-extrabold text-lg text-white"
              >
                C
              </span>
              <span className="font-jakarta font-extrabold text-xl tracking-brand text-white">
                Carely
              </span>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs mb-6">
              High-end editorial caretaking. Redefining how we look after our
              loved ones through trust and technology.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <BsTwitterX />, label: "Twitter" },
                { icon: <IoLogoLinkedin />, label: "LinkedIn" },
                { icon: <FaInstagram />, label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center
                             text-white/60 no-underline transition-all duration-200
                             hover:bg-[#224bdd] hover:text-white"
                >
                  <span className="material-icons-round text-[1.1rem]">
                    {s.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-jakarta text-xs font-bold uppercase tracking-[0.05em] text-white mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2 list-none">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/#why-us", label: "Why Carely" },
                { href: "/contact", label: "Contact Us" },
                { href: "#", label: "Careers" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/55 text-sm no-underline hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-jakarta text-xs font-bold uppercase tracking-[0.05em] text-white mb-4">
              Support
            </h4>
            <ul className="flex flex-col gap-2 list-none">
              {[
                { href: "/bookings", label: "My Bookings" },
                { href: "#", label: "Help Center" },
                { href: "#", label: "Safety" },
                { href: "#", label: "Become a Caregiver" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/55 text-sm no-underline hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <h4 className="font-jakarta text-xs font-bold uppercase tracking-[0.05em] text-white mb-4">
              Legal
            </h4>
            <ul className="flex flex-col gap-2 list-none mb-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-white/55 text-sm no-underline hover:text-white transition-colors duration-200"
                    >
                      {l}
                    </a>
                  </li>
                ),
              )}
            </ul>
            <h4 className="font-jakarta text-xs font-bold uppercase tracking-[0.05em] text-white mb-3">
              Contact
            </h4>
            <div className="flex flex-col gap-1.5 text-white/55 text-sm">
              <p>hello@carely.com</p>
              <p>+1 (800) 1111-11-1</p>
              <p>123 Wellness Way, SF</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 text-white/35 text-sm">
          © 2026 Carely. High-end editorial caretaking.
        </div>
      </div>
    </footer>
  );
}
