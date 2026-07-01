import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = { title: "Contact | Lea Studio" };

export default function ContactPage() {
  return (
    <>

      {/* Contact — image left, details right, starts below fixed nav */}
      <section className="w-full bg-white pt-36 pb-20 flex-1">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
            <div>
              <Image
                src="/Contact.jpeg"
                alt="Léa practising Pilates"
                width={480}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-warm-grey mb-4">Say hello</p>
              <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4 leading-tight">
                Get in Touch
              </h1>
              <div className="w-10 h-px bg-blush mb-8" />
              <p className="text-warm-grey leading-relaxed mb-12 max-w-sm">
                Have a question about Lea Studio? Ready to book your first session?
                Reach out directly — no forms, no waiting rooms.
              </p>

              <div className="flex flex-col gap-5">
                <a
                  href="mailto:lea.belatechepro@gmail.com"
                  className="group flex items-center gap-5 p-6 bg-sage hover:bg-blush/30 transition-colors duration-200"
                >
                  <Mail
                    size={20}
                    strokeWidth={1.5}
                    className="text-warm-grey group-hover:text-charcoal transition-colors shrink-0"
                  />
                  <div>
                    <p className="text-xs tracking-widest uppercase text-warm-grey mb-1">Email</p>
                    <p className="font-serif text-base text-charcoal">
                      lea.belatechepro@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+33766527773"
                  className="group flex items-center gap-5 p-6 bg-sage hover:bg-blush/30 transition-colors duration-200"
                >
                  <Phone
                    size={20}
                    strokeWidth={1.5}
                    className="text-warm-grey group-hover:text-charcoal transition-colors shrink-0"
                  />
                  <div>
                    <p className="text-xs tracking-widest uppercase text-warm-grey mb-1">
                      Phone / WhatsApp
                    </p>
                    <p className="font-serif text-base text-charcoal">
                      +33 7 66 52 77 73
                    </p>
                  </div>
                </a>
              </div>

              <p className="text-xs text-warm-grey mt-8 leading-relaxed">
                Léa typically responds within 24 hours. Sessions take place in Saint-Tropez and Courchevel — at your villa, chalet, yacht, or hotel.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
