import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("metaTitle") };
}

const approachImages = ["/image00007.jpeg", "/image00008.jpeg", "/image000010.jpeg"];

export default function AboutPage() {
  const t = useTranslations("about");
  const services = t.raw("services") as Array<{
    location: string;
    title: string;
    description: string;
    pricing: string;
  }>;
  const approaches = t.raw("approaches") as Array<{
    name: string;
    tagline: string;
    description: string;
    note: string;
  }>;
  const benefits = t.raw("benefits") as string[];

  return (
    <>
      <div className="w-full bg-white pt-36 pb-10 px-8 md:px-16 border-b border-sage">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">{t("pageTitle")}</h1>
          <p className="text-warm-grey text-sm tracking-widest uppercase mt-2 font-light">
            {t("pageSubtitle")}
          </p>
        </div>
      </div>

      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-warm-grey mb-4">{t("approachLabel")}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8 leading-snug">
                {t("approachHeading")}
              </h2>
              <div className="space-y-5 text-warm-grey leading-relaxed">
                <p>{t("intro1")}</p>
                <p>{t("intro2")}</p>
                <p>{t("intro3")}</p>
              </div>
            </div>
            <div>
              <Image
                src="/image00005.jpeg"
                alt="Léa practising Pilates"
                width={480}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-sage py-20">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="mb-14">
            <p className="text-xs tracking-widest uppercase text-warm-grey mb-3">{t("servicesLabel")}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">{t("servicesHeading")}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.location} className="bg-white p-8 flex flex-col gap-4">
                <p className="text-xs tracking-widest uppercase text-warm-grey">{s.location}</p>
                <h3 className="font-serif text-xl text-charcoal leading-snug">{s.title}</h3>
                <p className="text-warm-grey text-sm leading-relaxed flex-1">{s.description}</p>
                <div className="border-t border-sage pt-4">
                  <p className="text-xs text-charcoal font-medium">{s.pricing}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="mb-14">
            <p className="text-xs tracking-widest uppercase text-warm-grey mb-3">{t("approachesLabel")}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">{t("approachesHeading")}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {approaches.map((a, i) => (
              <div key={a.name} className="bg-sage flex flex-col">
                <Image
                  src={approachImages[i]}
                  alt={`Léa — ${a.name}`}
                  width={360}
                  height={450}
                  className="w-full h-auto"
                />
                <div className="p-8 flex flex-col gap-3 flex-1">
                  <p className="text-xs tracking-widest uppercase text-warm-grey">{a.tagline}</p>
                  <h3 className="font-serif text-xl text-charcoal">{a.name}</h3>
                  <p className="text-warm-grey text-sm leading-relaxed flex-1">{a.description}</p>
                  <p className="text-xs text-warm-grey italic border-t border-sage-dark pt-4">{a.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-sage py-20">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-warm-grey mb-4">{t("benefitsLabel")}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-10 leading-snug">
                {t("benefitsHeading")}
              </h2>
              <ol className="space-y-6">
                {benefits.map((b, i) => (
                  <li key={i} className="flex gap-5 items-start">
                    <span className="font-serif text-2xl text-blush leading-none mt-0.5 shrink-0 w-8">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-warm-grey leading-relaxed text-sm">{b}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <Image
                src="/image00003.jpeg"
                alt="Léa practising Pilates"
                width={480}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
