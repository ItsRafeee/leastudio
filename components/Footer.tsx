import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-sage-dark px-8 md:px-16 pt-2 pb-1">
      {/* Main row: logo+tagline left, nav columns right */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-20">
        {/* Logo + tagline */}
        <div className="flex flex-col gap-1 shrink-0">
          <Image
            src="/Logo.png"
            alt="Lea Studio"
            width={200}
            height={200}
            className="object-contain object-left"
          />
          <p className="text-xs text-warm-grey leading-relaxed">
            Private Pilates & fitness coaching. Saint-Tropez & Courchevel.
          </p>
        </div>

        {/* Nav columns */}
        <div className="flex gap-16 md:gap-20 md:ml-auto">
          <div>
            <p className="text-xs tracking-widest uppercase text-warm-grey mb-3">Explore</p>
            <nav className="flex flex-col gap-2">
              {[{ href: "/", label: "Home" }, { href: "/about", label: "About" }].map(({ href, label }) => (
                <Link key={href} href={href} className="text-sm text-charcoal hover:text-warm-grey transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-warm-grey mb-3">Studio</p>
            <nav className="flex flex-col gap-2">
              {[{ href: "/meet-lea", label: "Meet Léa" }, { href: "/contact", label: "Contact" }].map(({ href, label }) => (
                <Link key={href} href={href} className="text-sm text-charcoal hover:text-warm-grey transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-2 pt-2 border-t border-sage">
        <p className="text-xs text-warm-grey">
          © {new Date().getFullYear()} Lea Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
