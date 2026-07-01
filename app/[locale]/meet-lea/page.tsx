import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meetLea" });
  return { title: t("metaTitle") };
}

export default function MeetLeaPage() {
  const t = useTranslations("meetLea");

  return (
    <>
      <section className="w-full bg-white pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
            <div>
              <Image
                src="/image00006.jpeg"
                alt="Léa practising Pilates"
                width={480}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-warm-grey mb-4">{t("coachLabel")}</p>
              <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                {t("heading")}
              </h1>
              <div className="w-10 h-px bg-blush mb-8" />
              <p className="text-warm-grey leading-relaxed mb-5">{t("bio1")}</p>
              <p className="text-warm-grey leading-relaxed">{t("bio2")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-charcoal py-20 px-8 md:px-16 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-serif italic text-sage text-2xl md:text-3xl leading-relaxed mb-6">
            &ldquo;{t("quote")}&rdquo;
          </p>
          <p className="text-xs tracking-widest uppercase text-sage/50">— Léa</p>
        </div>
      </section>

      <section className="w-full bg-sage py-20">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
            <div className="space-y-5 text-warm-grey leading-relaxed">
              <p className="text-xs tracking-widest uppercase text-warm-grey mb-4">{t("approachLabel")}</p>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">
                {t("approachHeading")}
              </h2>
              <p>{t("approach1")}</p>
              <p>{t("approach2")}</p>
              <p>{t("approach3")}</p>
            </div>
            <div>
              <Image
                src="/image00009.jpeg"
                alt="Léa practising Pilates"
                width={480}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 px-8 md:px-16 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-warm-grey mb-8 leading-relaxed">{t("ctaText")}</p>
          <Link
            href="/contact"
            className="bg-blush hover:bg-blush-dark text-charcoal text-xs tracking-widest uppercase px-12 py-4 transition-colors duration-200 inline-block"
          >
            {t("ctaButton")}
          </Link>
        </div>
      </section>
    </>
  );
}
