import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Mokgale Kevin Matlou",
    text: "Excellent customer service and the staff work as a team,loved it🤩🤩🤩",
  },
  {
    name: "Anthony Lunt",
    text: "A great variety of material and buttons etc. Very knowlegdable and friendlg owner and staff!",
  },
  {
    name: "Juanita Kayser",
    text: "Friendly staff always ready to help. Going the extra mile for customers",
  },
  {
    name: "Rosemary Steynberg",
    text: "Conveniently situated outside the hustle and bustle of mid town. Ample parking.",
  },
  {
    name: "Farhanaz Joulay",
    text: "A very nice store with lots of variety (towels, wool, carpets, material etc) anything you need you will get here. Danielle was very friendly and helpful :)",
    stars: 4,
  },
];

export function ReviewsCarousel() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 6500);
    return () => clearInterval(t);
  }, []);

  const r = reviews[i] ?? reviews[0]!;

  return (
    <section className="bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="card-elegant mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-3 rounded-full px-4 py-3 sm:gap-4 sm:px-6">
          <span className="font-serif text-2xl leading-none">4.4</span>
          <span className="flex items-center gap-0.5" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((s) => (
              <Star
                key={s}
                className={
                  s < 4 ? "h-4 w-4 fill-navy text-navy" : "h-4 w-4 fill-silver text-silver"
                }
              />
            ))}
          </span>
          <span className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
            Google Rating · 4.4 / 5 Stars
          </span>
        </div>

        <h2 className="mt-8 font-serif text-3xl sm:mt-10 sm:text-4xl">What Our Customers Say</h2>
        <div className="rule-line mx-auto mt-6" />

        <figure className="mt-10 min-h-52">
          <div className="flex justify-center gap-1" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((s) => (
              <Star
                key={s}
                className={
                  s < (r.stars ?? 5)
                    ? "h-4 w-4 fill-navy text-navy"
                    : "h-4 w-4 fill-silver text-silver"
                }
              />
            ))}
          </div>
          <blockquote className="mx-auto mt-6 max-w-2xl font-serif text-xl leading-relaxed text-foreground italic sm:text-2xl">
            “{r.text}”
          </blockquote>
          <figcaption className="mt-6 text-[0.7rem] tracking-[0.24em] text-muted-foreground uppercase">
            {r.name}
          </figcaption>
        </figure>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => setI((v) => (v - 1 + reviews.length) % reviews.length)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {reviews.map((rev, idx) => (
              <button
                key={rev.name}
                type="button"
                aria-label={`Go to review ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-navy" : "w-1.5 bg-silver"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => setI((v) => (v + 1) % reviews.length)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
