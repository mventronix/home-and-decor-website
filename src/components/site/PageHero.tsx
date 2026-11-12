export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="veil absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <p className="text-[0.65rem] tracking-[0.24em] text-sage uppercase sm:text-[0.7rem] sm:tracking-[0.32em]">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-white sm:mt-5 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-silver/90 sm:mt-5 sm:text-base">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
