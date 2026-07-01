import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("home");

  return (
    <>
      <section className="w-full relative h-[60vh] md:h-screen">
        <Image
          src="/Home.jpeg"
          alt="Léa practising Pilates"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <Image
            src="/Logo.png"
            alt="Lea Studio"
            width={700}
            height={467}
            className="object-contain brightness-0 invert mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
          />
          <p className="text-white/90 text-xs md:text-sm tracking-[0.25em] uppercase font-light">
            {t("tagline")}
          </p>
        </div>
      </section>

      <section className="w-full bg-sage py-14 px-8 md:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-warm-grey text-base md:text-lg font-light leading-relaxed mb-8">
            {t("intro")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/about"
              className="bg-blush hover:bg-blush-dark text-charcoal text-xs tracking-widest uppercase px-8 py-4 transition-colors duration-200"
            >
              {t("ctaDiscover")}
            </Link>
            <Link
              href="/contact"
              className="border border-charcoal text-charcoal hover:bg-charcoal hover:text-sage text-xs tracking-widest uppercase px-8 py-4 transition-colors duration-200"
            >
              {t("ctaContact")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
