import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "About | Lea Studio" };

const services = [
  {
    location: "Saint-Tropez",
    title: "Private Pilates & Reformer Coaching",
    description:
      "Léa travels directly to your villa, yacht, or hotel for a private 50-minute session in Pilates Mat or Reformer. Where no Reformer is available on site, sessions can take place at a premium partner studio nearby.",
    pricing: "€120 / session — or €95 / session on a daily weekly programme",
  },
  {
    location: "Courchevel",
    title: "Private Pilates & Reformer Coaching",
    description:
      "The same personalised format brought to your chalet, hotel, or private residence. 50-minute one-to-one sessions — Pilates Mat or Reformer — fully adapted to your level, your goals, and the pace of your stay.",
    pricing: "€120 / session — or €95 / session on a daily weekly programme",
  },
  {
    location: "Private & Online",
    title: "Private Fitness & Online Coaching",
    description:
      "Available at your home, hotel, or via video call — wherever you are in the world. Fully personalised 50-minute sessions covering strength, toning, mobility, posture correction, or fitness preparation, built around what your body needs.",
    pricing: "€120 / session — or €95 / session on a daily weekly programme",
  },
];

const approaches = [
  {
    name: "Sculpt & Define",
    tagline: "Strength through precision",
    description:
      "A focused full-body session centred on core stability, muscle endurance, and refined movement control. Each exercise is performed with intentionality — slower, deeper, more effective. For anyone ready to build genuine strength without impact or bulk.",
    note: "Suitable for all levels with appropriate modification.",
    image: "/image00007.jpeg",
  },
  {
    name: "Flow & Release",
    tagline: "Movement meets restoration",
    description:
      "A carefully sequenced blend of flowing Pilates movement and targeted stretching. This session addresses areas of tension, improves range of motion, and trains the body to move as an integrated whole. You will finish feeling both challenged and restored.",
    note: "Suitable for all levels with appropriate modification.",
    image: "/image00008.jpeg",
  },
  {
    name: "Foundation",
    tagline: "The perfect place to begin",
    description:
      "A step-by-step introduction to Pilates principles — breathing, spinal alignment, pelvic stability, and postural awareness. No prior experience required. An essential starting point for anyone new, returning after a break, or recovering from injury.",
    note: "Ideal for beginners and those returning to movement.",
    image: "/image000010.jpeg",
  },
];

const benefits = [
  "Improved posture and spinal alignment through consistent mindful movement",
  "Increased core strength — deep stabilising muscles rarely targeted in conventional exercise",
  "Greater body awareness, helping you move more efficiently in daily life",
  "Reduced muscle tension and relief from chronic tightness, particularly in the back and hips",
  "Better balance, coordination, and overall functional fitness",
  "Enhanced breathing capacity and nervous system regulation",
  "A consistent, sustainable movement practice — adapted to you, not the other way around",
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="w-full bg-white pt-36 pb-10 px-8 md:px-16 border-b border-sage">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">About</h1>
          <p className="text-warm-grey text-sm tracking-widest uppercase mt-2 font-light">
            Private Pilates &amp; fitness coaching with Léa
          </p>
        </div>
      </div>

      {/* Services — intro text left, image right */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-warm-grey mb-4">The approach</p>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8 leading-snug">
                Private sessions,<br />wherever you are
              </h2>
              <div className="space-y-5 text-warm-grey leading-relaxed">
                <p>
                  Lea Studio brings expert Pilates and fitness coaching directly to you —
                  at your villa, chalet, yacht, hotel, or home. Every session is 50 minutes,
                  entirely private, and built around your body and your goals.
                </p>
                <p>
                  Léa works in Saint-Tropez, Courchevel, and online, adapting seamlessly
                  to your location and lifestyle. Whether you prefer Pilates Mat, Reformer,
                  strength and toning, or mobility work, each session is designed from scratch
                  for you — never a template, never a compromise.
                </p>
                <p>
                  Sessions are available individually or as part of a daily weekly programme,
                  with preferential pricing for regular commitment. Everything is discussed
                  and agreed directly with Léa.
                </p>
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

      {/* Services — 3 blocks */}
      <section className="w-full bg-sage py-20">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="mb-14">
            <p className="text-xs tracking-widest uppercase text-warm-grey mb-3">Services</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              Three ways to work with Léa
            </h2>
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

      {/* Session approaches */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="mb-14">
            <p className="text-xs tracking-widest uppercase text-warm-grey mb-3">Session types</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              Three approaches to movement
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {approaches.map((a) => (
              <div key={a.name} className="bg-sage flex flex-col">
                <Image
                  src={a.image}
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

      {/* Benefits */}
      <section className="w-full bg-sage py-20">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-warm-grey mb-4">Why Pilates</p>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-10 leading-snug">
                The benefits
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
