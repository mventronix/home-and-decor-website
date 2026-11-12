import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Truck } from "lucide-react";

import { ReviewsCarousel } from "@/components/site/ReviewsCarousel";
import heroImage from "@/assets/hero-interior.jpg";
import curtaining from "@/assets/curtaining.jpg";
import haberdashery from "@/assets/haberdashery.jpg";
import fabrics from "@/assets/fabrics.jpg";
import rugs from "@/assets/rugs.jpg";
import upholstery from "@/assets/upholstery.jpg";

const title = "Home & Decor Tzaneen | Premium Fabrics, Curtaining & Upholstery";
const description =
  "Luxury curtaining, fabrics, rugs, upholstery and haberdashery from Home & Decor in Tzaneen. Expert interior advice with nationwide delivery across South Africa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

const specialties = [
  {
    name: "Curtaining",
    image: curtaining,
    copy: "Custom draping, sheers, blockout linings and elegant hardware.",
  },
  {
    name: "Fabrics",
    image: fabrics,
    copy: "Premium textile rolls in linens, velvets, weaves and cottons.",
  },
  {
    name: "Upholstery",
    image: upholstery,
    copy: "Hard-wearing covers and full furniture restoration finishes.",
  },
  {
    name: "Rugs",
    image: rugs,
    copy: "Luxury floor coverings that anchor and warm any space.",
  },
  {
    name: "Haberdashery",
    image: haberdashery,
    copy: "Threads, trims, buttons, ribbons and sewing essentials.",
  },
];

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Luxury lounge interior with floor-to-ceiling sheer curtains"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="veil absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-48">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-sage/60 bg-sage/15 px-3 py-2 text-[0.56rem] tracking-[0.16em] text-sage uppercase backdrop-blur sm:px-4 sm:text-[0.62rem] sm:tracking-[0.26em]">
            <Truck className="h-3.5 w-3.5" aria-hidden="true" />
            Nationwide Delivery Across South Africa
          </div>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] text-white sm:mt-8 sm:text-6xl lg:text-7xl">
            Transforming Spaces with Premium Fabrics &amp; Decor.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-silver/90 sm:mt-6 sm:text-lg">
            Specialists in Curtaining, Fabrics, Rugs, Upholstery &amp; Haberdashery.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link to="/products" className="btn-base btn-navy w-full sm:w-auto">
              Explore Our Range <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link to="/contact" className="btn-base btn-outline-light w-full sm:w-auto">
              Visit Our Tzaneen Store
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Our Core Specialities</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              A complete house of textiles and interior finishes.
            </h2>
            <div className="rule-line mt-6" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              From the first swatch to the final hem, we curate materials and craftsmanship that
              elevate every room — sourced with care, finished with precision.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {specialties.map((item, idx) => (
              <article
                key={item.name}
                className={`group relative isolate overflow-hidden ${
                  idx === 0 ? "lg:row-span-2" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    idx === 0 ? "h-80 sm:h-96 lg:h-full lg:min-h-[34rem]" : "h-72 sm:h-80"
                  }`}
                />
                <div className="veil absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <h3 className="font-serif text-2xl text-white">{item.name}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-silver/85">
                    {item.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ReviewsCarousel />

      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-[0.7rem] tracking-[0.3em] text-sage uppercase">Visit Us In Tzaneen</p>
          <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Touch the fabric. Feel the difference.
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-silver/80">
            Browse our showroom at 101 Agatha Street, or let our team guide you through samples,
            measurements and custom orders — wherever you are in South Africa.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link to="/products" className="btn-base btn-outline-light w-full sm:w-auto">
              Explore Products
            </Link>
            <Link to="/contact" className="btn-base btn-navy w-full sm:w-auto">
              <MapPin className="h-3.5 w-3.5" /> Find The Store
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
