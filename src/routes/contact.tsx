import { createFileRoute } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import curtaining from "@/assets/curtaining.jpg";

const title = "Contact Us | Home & Decor, 101 Agatha Street, Tzaneen";
const description =
  "Visit Home & Decor at 101 Agatha Street, Tzaneen. Call 082 978 6720, email homedecor@tzaneen.co.za, or view our trading hours and map directions.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Find us on Agatha Street."
        subtitle="Pop in for swatches and advice, or reach the team by phone and email."
        image={curtaining}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="card-elegant p-6 sm:p-10 lg:col-span-2">
            <p className="eyebrow">Get In Touch</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Contact Details</h2>
            <div className="rule-line mt-6" />

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
                <div>
                  <h3 className="text-[0.7rem] tracking-[0.24em] text-muted-foreground uppercase">
                    Address
                  </h3>
                  <p className="mt-2 leading-relaxed">
                    101 Agatha Street
                    <br />
                    Central Business District
                    <br />
                    Tzaneen, 0850
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
                <div>
                  <h3 className="text-[0.7rem] tracking-[0.24em] text-muted-foreground uppercase">
                    Phone / Cell
                  </h3>
                  <a
                    href="tel:0829786720"
                    className="mt-2 block text-lg transition-colors hover:text-navy"
                  >
                    082 978 6720
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
                <div>
                  <h3 className="text-[0.7rem] tracking-[0.24em] text-muted-foreground uppercase">
                    Email
                  </h3>
                  <a
                    href="mailto:homedecor@tzaneen.co.za"
                    className="mt-2 block break-all transition-colors hover:text-navy"
                  >
                    homedecor@tzaneen.co.za
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex shrink-0 gap-2 text-navy" aria-hidden="true">
                  <Facebook className="h-5 w-5" />
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[0.7rem] tracking-[0.24em] text-muted-foreground uppercase">
                    Social Media
                  </h3>
                  <a
                    href="https://www.facebook.com/homeanddecorfabricshop/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-base btn-navy mt-3"
                  >
                    <Facebook className="h-3.5 w-3.5" /> Visit Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/homedecortzaneen"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-base btn-instagram mt-3"
                  >
                    <Instagram className="h-3.5 w-3.5" /> Visit Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary p-6 text-primary-foreground sm:p-10">
            <Clock className="h-5 w-5 text-sage" aria-hidden="true" />
            <h2 className="mt-6 font-serif text-3xl">Trading Hours</h2>
            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-silver/20 pb-4">
                <span className="text-silver/75">Monday – Friday</span>
                <span>8:30 AM – 5:00 PM</span>
              </li>
              <li className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-silver/20 pb-4">
                <span className="text-silver/75">Saturday</span>
                <span>8:00 AM – 1:00 PM</span>
              </li>
              <li className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="text-silver/75">Sunday &amp; Public Holidays</span>
                <span className="text-sage">Closed</span>
              </li>
            </ul>
            <p className="mt-10 text-sm leading-relaxed text-silver/70">
              Nationwide delivery available on fabrics, rugs and haberdashery orders.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="eyebrow">Find Us</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              101 Agatha Street, Tzaneen
            </h2>
          </div>
          <div className="overflow-hidden border border-border shadow-[var(--shadow-elegant)]">
            <iframe
              title="Map to Home & Decor, 101 Agatha Street, Tzaneen"
              src="https://www.google.com/maps?q=101%20Agatha%20Street%2C%20Tzaneen%2C%200850%2C%20South%20Africa&output=embed"
              width="100%"
              height="480"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
