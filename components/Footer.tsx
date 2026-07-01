"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-sage-dark px-8 md:px-16 pt-2 pb-1">
      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-20">
        <div className="flex flex-col gap-1 shrink-0">
          <Image
            src="/Logo.png"
            alt="Lea Studio"
            width={200}
            height={200}
            className="object-contain object-left"
          />
          <p className="text-xs text-warm-grey leading-relaxed">{t("tagline")}</p>
        </div>

        <div className="flex gap-16 md:gap-20 md:ml-auto">
          <div>
            <p className="text-xs tracking-widest uppercase text-warm-grey mb-3">{t("explore")}</p>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: tNav("home") },
                { href: "/about", label: tNav("about") },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="text-sm text-charcoal hover:text-warm-grey transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-warm-grey mb-3">{t("studio")}</p>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/meet-lea", label: tNav("meetLea") },
                { href: "/contact", label: tNav("contact") },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="text-sm text-charcoal hover:text-warm-grey transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="mt-2 pt-2 border-t border-sage">
        <p className="text-xs text-warm-grey">{t("copyright", { year })}</p>
      </div>
    </footer>
  );
}
