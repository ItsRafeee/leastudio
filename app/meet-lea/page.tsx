import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function MeetLeaPage() {
  return (
    <div className="flex flex-col flex-1">
      <Nav />

      {/* Hero — image left, intro text right, starts below fixed nav */}
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
              <p className="text-xs tracking-widest uppercase text-warm-grey mb-4">Your coach</p>
              <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                Meet Léa
              </h1>
              <div className="w-10 h-px bg-blush mb-8" />
              <p className="text-warm-grey leading-relaxed mb-5">
                Léa teaches Pilates with a focus on precision, adaptability, and the individual —
                working with clients of all ages, backgrounds, and movement histories. Her approach
                is rooted in the belief that good movement should feel as natural and accessible
                as possible — and that the most powerful sessions are the ones built entirely
                around the person in front of her.
              </p>
              <p className="text-warm-grey leading-relaxed">
                Having trained and worked in both studio and clinical environments, Léa
                brings a genuine understanding of how the body moves, adapts, and recovers.
                She is particularly drawn to working with clients who are starting out,
                returning after injury, or looking to develop a sustainable practice they
                can carry with them long-term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy — dark pull quote */}
      <section className="w-full bg-charcoal py-20 px-8 md:px-16 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-serif italic text-sage text-2xl md:text-3xl leading-relaxed mb-6">
            &ldquo;Movement is not a performance. It is a conversation between you
            and your body — and I am here to help you listen.&rdquo;
          </p>
          <p className="text-xs tracking-widest uppercase text-sage/50">— Léa</p>
        </div>
      </section>

      {/* Extended bio — text left, image right */}
      <section className="w-full bg-sage py-20">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
            <div className="space-y-5 text-warm-grey leading-relaxed">
              <p className="text-xs tracking-widest uppercase text-warm-grey mb-4">Approach</p>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">
                Teaching from the inside out
              </h2>
              <p>
                What makes Lea Studio different is the depth of attention each client
                receives. There are no class templates here — every session is drawn
                from scratch, informed by how you are feeling that day, what your body
                is telling you, and where you want to go.
              </p>
              <p>
                Léa teaches with patience, precision, and a good deal of warmth. She
                believes deeply that movement should be a source of pleasure, not
                punishment — and that the right practice, done consistently, changes
                everything.
              </p>
              <p>
                When she is not teaching, you will likely find her exploring new movement
                practices, spending time in nature, or experimenting in the kitchen.
              </p>
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

      {/* CTA */}
      <section className="w-full bg-white py-20 px-8 md:px-16 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-warm-grey mb-8 leading-relaxed">
            Ready to start your practice? Léa would love to hear from you.
          </p>
          <Link
            href="/contact"
            className="bg-blush hover:bg-blush-dark text-charcoal text-xs tracking-widest uppercase px-12 py-4 transition-colors duration-200 inline-block"
          >
            Work with Léa
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
