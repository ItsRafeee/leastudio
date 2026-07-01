import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
    <div className="flex flex-col flex-1">
      <Nav />

      {/* Page header — starts below fixed nav (pt-28 ≈ nav height) */}
      <div className="w-full bg-white pt-36 pb-10 px-8 md:px-16 border-b border-sage">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">About</h1>
          <p className="text-warm-grey text-sm tracking-widest uppercase mt-2 font-light">
            Online 1-to-1 Pilates coaching with Léa
          </p>
        </div>
      </div>

      {/* The approach — text left, portrait image right */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-warm-grey mb-4">The approach</p>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8 leading-snug">
                Private sessions,<br />on your terms
              </h2>
              <div className="space-y-5 text-warm-grey leading-relaxed">
                <p>
                  Lea Studio offers personal online Pilates coaching in a completely
                  private, one-to-one format. Every session takes place via video call,
                  which means you can work with Léa from the comfort of your own home —
                  no commute, no shared class, no compromise.
                </p>
                <p>
                  Sessions are scheduled on a weekly basis. You and Léa agree on a rhythm
                  that works for your life — one session per week, two, or more — and that
                  rhythm becomes your practice. Pricing reflects your level of commitment:
                  the more sessions per week and the longer each session, the more
                  personalised your rate. There are no rigid packages; everything is
                  discussed and agreed between you.
                </p>
                <p>
                  Each programme is built around your individual goals, movement history,
                  and current physical needs. Whether you are looking to build strength,
                  recover from injury, improve posture, or simply develop a movement
                  practice that feels right for your body — Lea Studio works around you.
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

      {/* Session approaches */}
      <section className="w-full bg-sage py-20">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="mb-14">
            <p className="text-xs tracking-widest uppercase text-warm-grey mb-3">Session types</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              Three approaches to movement
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {approaches.map((a) => (
              <div key={a.name} className="bg-white flex flex-col">
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
                  <p className="text-xs text-warm-grey italic border-t border-sage pt-4">{a.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full bg-white py-20">
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

      <Footer />
    </div>
  );
}
