import { createFileRoute, Link } from "@tanstack/react-router";
import { Ruler, Scissors, Sparkles } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import curtaining from "@/assets/curtaining.jpg";
import fabrics from "@/assets/fabrics.jpg";
import haberdashery from "@/assets/haberdashery.jpg";
import rugs from "@/assets/rugs.jpg";
import showroom from "@/assets/showroom.jpg";

const title = "Products & Services | Curtaining, Fabrics & Upholstery — Home & Decor";
const description =
  "Explore curtaining, premium fabrics, upholstery, haberdashery and luxury rugs at Home & Decor Tzaneen, plus custom orders and in-store consultation.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Products,
});

const sections = [
  {
    name: "Curtaining",
    image: curtaining,
    intro:
      "Windows set the tone of a room. We design and make up custom draping to your exact drop and width, finished with the header style that suits your interior.",
    materials: [
      "Sheer voiles, linen blends and textured weaves for soft, diffused daylight",
      "Blockout and dim-out linings for bedrooms, nurseries and media rooms",
      "Tracks, rods, finials, tiebacks and full hardware fitting solutions",
    ],
    usage: "Ideal for full-height lounge windows, layered bedroom treatments and office fit-outs.",
  },
  {
    name: "Fabrics & Upholstery",
    image: fabrics,
    intro:
      "Our textile wall carries rolls chosen for both beauty and longevity — from decorative dress fabrics to heavy-duty upholstery cloth rated for daily family use.",
    materials: [
      "Velvets, chenilles, jacquards, linens, cottons and performance weaves",
      "Rub-tested upholstery grades for sofas, dining chairs and headboards",
      "Custom cuts by the metre, with foam, batting and trim to match",
    ],
    usage: "Perfect for furniture restoration, scatter cushions, ottomans and bespoke headboards.",
  },
  {
    name: "Haberdashery",
    image: haberdashery,
    intro:
      "A full sewing counter for makers, seamstresses and hobbyists — the small details that make a finished piece look professional.",
    materials: [
      "Threads, bobbins, needles, zips, elastics and interfacing",
      "Buttons, beading, braids, piping cord, ribbons and decorative trims",
      "Scissors, measuring tapes, pins and essential haberdashery tools",
    ],
    usage: "Everything you need to finish curtains, garments and soft furnishings at home.",
  },
  {
    name: "Rugs & Home Accessories",
    image: rugs,
    intro:
      "The finishing layer. Our rugs and accent pieces bring warmth, texture and definition to open-plan living areas.",
    materials: [
      "Hand-woven wool, jute and flat-weave rugs in a range of sizes",
      "Scatter cushions, throws and table linen in coordinating palettes",
      "Decor accents styled to complement your fabric and curtain selection",
    ],
    usage: "Use to zone lounges, soften bedrooms and tie a colour scheme together.",
  },
];

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products & Services"
        title="Materials chosen with intent, finished with craft."
        subtitle="A detailed look at everything we make, stock and fit — with expert guidance at every step."
        image={showroom}
      />

      {sections.map((section, idx) => (
        <section
          key={section.name}
          className={idx % 2 === 1 ? "bg-secondary py-16 sm:py-24" : "py-16 sm:py-24"}
        >
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
              <img
                src={section.image}
                alt={section.name}
                loading="lazy"
                className="h-[22rem] w-full object-cover shadow-[var(--shadow-elegant)] sm:h-[32rem]"
              />
            </div>
            <div>
              <p className="eyebrow">0{idx + 1}</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                {section.name}
              </h2>
              <div className="rule-line mt-6" />
              <p className="mt-6 leading-relaxed text-muted-foreground">{section.intro}</p>
              <ul className="mt-8 space-y-4">
                {section.materials.map((m) => (
                  <li key={m} className="flex gap-4 text-sm leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-l-2 border-sage pl-5 font-serif text-lg italic">
                {section.usage}
              </p>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-primary py-16 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] tracking-[0.3em] text-sage uppercase">
              Custom Orders &amp; Consultation
            </p>
            <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Made to your measurements.
            </h2>
            <p className="mt-6 leading-relaxed text-silver/80">
              Bring your window measurements or furniture dimensions into the store and our team
              will advise on fabric quantities, lining choices and finishes. We quote clearly before
              any work begins.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Ruler,
                title: "Bring Your Measurements",
                copy: "Share drop, width and rail type — or ask us how to measure correctly before you buy.",
              },
              {
                icon: Scissors,
                title: "Custom Make-Up",
                copy: "Curtains, pelmets, cushions and re-upholstery cut and sewn to your specification.",
              },
              {
                icon: Sparkles,
                title: "Styling Advice",
                copy: "Colour, texture and layering guidance so the whole room reads as one scheme.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-silver/20 p-6 sm:p-8">
                <item.icon className="h-6 w-6 text-sage" aria-hidden="true" />
                <h3 className="mt-6 font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-silver/75">{item.copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Link to="/contact" className="btn-base btn-navy">
              Request A Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
