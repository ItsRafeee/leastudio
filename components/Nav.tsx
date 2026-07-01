"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const leftLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const rightLinks = [
  { href: "/meet-lea", label: "Meet Léa" },
  { href: "/contact", label: "Contact" },
];

function NavLink({
  href,
  label,
  transparent,
}: {
  href: string;
  label: string;
  transparent: boolean;
}) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
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
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    setScrolled(window.scrollY > 60);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? "bg-transparent border-none" : "bg-sage border-b border-sage-dark"
      }`}
    >
      <div className="px-8 md:px-16 py-3 flex items-center justify-between gap-8">
        <nav className="hidden md:flex items-center gap-8 flex-1">
          {leftLinks.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} transparent={transparent} />
          ))}
        </nav>

        <Link href="/" className="flex-shrink-0 mx-auto md:mx-0">
          <Image
            src="/LogoBar.png"
            alt="Wellness Studio"
            width={132}
            height={88}
            className={`object-contain transition-all duration-300 ${
              transparent ? "brightness-0 invert drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]" : ""
            }`}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 flex-1 justify-end">
          {rightLinks.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} transparent={transparent} />
          ))}
        </nav>

        <div
          className={`md:hidden text-xs tracking-widest uppercase ${
            transparent
              ? "text-white/85 [text-shadow:0_1px_4px_rgba(0,0,0,0.7)]"
              : "text-warm-grey"
          }`}
        >
          Menu
        </div>
      </div>
    </header>
  );
}
