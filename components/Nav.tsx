"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/meet-lea", label: "Meet Léa" },
  { href: "/contact", label: "Contact" },
];

const leftLinks = links.slice(0, 2);
const rightLinks = links.slice(2);

function NavLink({
  href,
  label,
  transparent,
  onClick,
}: {
  href: string;
  label: string;
  transparent: boolean;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-xs tracking-widest uppercase font-sans transition-colors duration-200 whitespace-nowrap ${
        active
          ? transparent
            ? "text-white border-b border-white pb-0.5 [text-shadow:0_1px_4px_rgba(0,0,0,0.7)]"
            : "text-charcoal border-b border-charcoal pb-0.5"
          : transparent
          ? "text-white/85 hover:text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.7)]"
          : "text-warm-grey hover:text-charcoal"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    setScrolled(window.scrollY > 60);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          transparent ? "bg-transparent border-none" : "bg-sage border-b border-sage-dark"
        }`}
      >
        <div className="px-8 md:px-16 py-3 flex items-center justify-between gap-8 relative">
          {/* Left nav — desktop */}
          <nav className="hidden md:flex items-center gap-8 flex-1">
            {leftLinks.map((l) => (
              <NavLink key={l.href} href={l.href} label={l.label} transparent={transparent} />
            ))}
          </nav>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0">
            <Image
              src="/LogoBar.png"
              alt="Lea Studio"
              width={132}
              height={88}
              className={`object-contain transition-all duration-300 ${
                transparent ? "brightness-0 invert drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]" : ""
              }`}
              priority
            />
          </Link>

          {/* Right nav — desktop */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-end">
            {rightLinks.map((l) => (
              <NavLink key={l.href} href={l.href} label={l.label} transparent={transparent} />
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className={`md:hidden text-xs tracking-widest uppercase ${
              transparent ? "text-white/85 [text-shadow:0_1px_4px_rgba(0,0,0,0.7)]" : "text-warm-grey"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-sage flex flex-col items-center justify-center gap-10"
          onClick={() => setMenuOpen(false)}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-3xl text-charcoal hover:text-warm-grey transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
