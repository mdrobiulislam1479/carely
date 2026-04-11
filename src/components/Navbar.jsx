'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/bookings', label: 'My Bookings' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'glass shadow-sm py-2.5'
          : 'bg-transparent py-4'}`}
    >
      <div className="max-w-[1280px] mx-auto px-8 flex items-center gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0 no-underline">
          <span className="w-9 h-9 bg-brand-gradient rounded-[10px] flex items-center justify-center
                           font-jakarta font-extrabold text-lg text-white">
            C
          </span>
          <span className="font-jakarta font-extrabold text-xl tracking-brand text-[#1a1b24]">
            Carely
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 mx-auto">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3.5 py-2 rounded-xl font-inter text-[0.9rem] font-medium no-underline
                          transition-all duration-200
                          ${pathname === l.href
                            ? 'text-[#224bdd] bg-[#dde1ff] font-semibold'
                            : 'text-[#444655] hover:text-[#224bdd] hover:bg-[#f3f2ff]'}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <Link
            href="/login"
            className="px-4 py-2.5 rounded-xl font-inter text-sm font-semibold text-[#224bdd]
                       hover:bg-[#f3f2ff] transition-all duration-200 no-underline"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="px-5 py-2.5 bg-brand-gradient text-white rounded-xl font-inter text-sm
                       font-semibold no-underline shadow-btn transition-all duration-200
                       hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(34,75,221,0.4)]"
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden ml-auto flex flex-col gap-[5px] bg-transparent border-none
                     cursor-pointer p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-[#1a1b24] rounded transition-all duration-300
                            ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1a1b24] rounded transition-all duration-300
                            ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1a1b24] rounded transition-all duration-300
                            ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col gap-1 px-5 pb-5 pt-2 bg-white
                        border-t border-[rgba(196,197,216,0.25)]">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 rounded-xl font-inter text-base font-medium
                         text-[#444655] hover:text-[#224bdd] hover:bg-[#f3f2ff]
                         no-underline transition-all duration-200"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-3 pt-3 border-t border-[rgba(196,197,216,0.3)]">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="flex-1 text-center px-4 py-2.5 rounded-xl font-inter text-sm
                         font-semibold text-[#224bdd] hover:bg-[#f3f2ff] no-underline
                         transition-all duration-200"
            >
              Log in
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileOpen(false)}
              className="flex-1 text-center px-4 py-2.5 bg-brand-gradient text-white
                         rounded-xl font-inter text-sm font-semibold no-underline
                         transition-all duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
