import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Layers, Truck } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import craft from "@/assets/craft.jpg";
import showroom from "@/assets/showroom.jpg";
import upholstery from "@/assets/upholstery.jpg";

const title = "About Us | Home & Decor — Trusted Fabric House in Tzaneen";
const description =
  "The story behind Home & Decor: a Tzaneen fabric, curtaining and upholstery house built on craftsmanship, expert advice and a deep love of beautiful textiles.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A Tzaneen fabric house, built on detail."
        subtitle="Three decades of interiors experience, distilled into one showroom on Agatha Street."
        image={upholstery}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="eyebrow">The Beginning</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Born from a love of beautiful cloth.
            </h2>
            <div className="rule-line mt-6" />
            <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Home &amp; Decor began the way most good things in Limpopo do — with a small shop, a
                big roll of linen, and a community that wanted their homes to feel considered. What
                started as a modest fabric counter grew steadily into the region's trusted
                destination for curtaining, upholstery and interior styling.
              </p>
              <p>
                Every roll on our wall has been chosen by hand. We travel to source, we test how a
                fabric drapes and wears, and we only stock what we would put in our own homes. That
                discipline is why local decorators, guesthouses and families keep coming back to
                Agatha Street.
              </p>
              <p>
                Today we serve customers far beyond Tzaneen, dispatching fabric, rugs and
                haberdashery nationwide — but the counter conversation, the swatch in the hand and
                the honest advice have never changed.
              </p>
            </div>
          </div>
          <img
            src={showroom}
            alt="Home & Decor showroom with fabric swatches and cushions"
            loading="lazy"
            className="h-[24rem] w-full object-cover shadow-[var(--shadow-elegant)] sm:h-[34rem]"
          />
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <img
            src={craft}
            alt="Hands comparing sage and navy fabric swatches"
            loading="lazy"
            className="h-[22rem] w-full object-cover shadow-[var(--shadow-elegant)] sm:h-[30rem]"
          />
          <div>
            <p className="eyebrow">Craftsmanship &amp; Quality</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              The difference is in the finishing.
            </h2>
            <div className="rule-line mt-6" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Our team reads a room before it recommends a fabric: the light, the traffic, the
              existing timber and stone. Then comes the technical work — correct fullness, weighted
              hems, matched patterns, straight seams and upholstery pulled taut so it holds its
              shape for years.
            </p>
            <dl className="mt-10 grid gap-8 sm:grid-cols-2">
              {[
                ["Textile Selection", "Weight, weave and rub-count matched to real-world use."],
                ["Interior Styling", "Palettes layered for depth rather than trend."],
                ["Precision Make-Up", "Measured twice, cut once, finished by hand."],
                ["Aftercare Advice", "Cleaning and care guidance for every material."],
              ].map(([term, def]) => (
                <div key={term}>
                  <dt className="font-serif text-xl">{term}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{def}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Three reasons clients stay.
          </h2>
          <div className="rule-line mx-auto mt-6" />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Award,
                title: "Expert Advice",
                copy: "Decades of hands-on interior and textile knowledge, offered freely across the counter — no guesswork, no upselling.",
              },
              {
                icon: Layers,
                title: "Extensive Selection",
                copy: "One of Limpopo's widest ranges of curtaining, upholstery fabric, rugs and haberdashery, all under one roof.",
              },
              {
                icon: Truck,
                title: "Reliable Nationwide Delivery",
                copy: "Carefully packed and tracked dispatch to every province in South Africa, with clear timelines up front.",
              },
            ].map((item) => (
              <div key={item.title} className="card-elegant p-6 text-left sm:p-10">
                <item.icon className="h-6 w-6 text-navy" aria-hidden="true" />
                <h3 className="mt-6 font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Link to="/contact" className="btn-base btn-outline-dark">
              Come Say Hello
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
