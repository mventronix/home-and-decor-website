import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Truck } from "lucide-react";
import newLogo from "@/assets/Home_Decor_LogoHD-trnsp.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-3 py-2 text-center text-[0.58rem] tracking-[0.18em] uppercase sm:px-4 sm:text-[0.65rem] sm:tracking-[0.28em]">
          <Truck className="h-3.5 w-3.5 text-sage" aria-hidden="true" />
          Nationwide Delivery Available
        </div>
      </div>

      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <Link to="/" aria-label="Home & Decor home" className="flex-shrink-0">
              <img src={newLogo} alt="" className="h-16 w-28 object-contain sm:h-24 sm:w-40" />
            </Link>
            <Link to="/" className="flex min-w-0 flex-col leading-none">
              <span className="font-serif text-lg tracking-tight sm:text-2xl">
                Home &amp; Decor
              </span>
              <span className="mt-1 whitespace-nowrap text-[0.42rem] tracking-[0.2em] text-muted-foreground uppercase sm:text-[0.6rem] sm:tracking-[0.32em]">
                Fabrics · Interiors · Upholstery
              </span>
            </Link>
          </div>

          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="text-[0.72rem] tracking-[0.2em] text-slate uppercase transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground border-b border-navy pb-1" }}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:0829786720" className="btn-base btn-navy">
              082 978 6720
            </a>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-sm p-2 md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-border bg-background px-4 pb-6 md:hidden">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-4 text-sm tracking-[0.18em] uppercase"
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:0829786720" className="btn-base btn-navy mt-5 w-full">
              Call 082 978 6720
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
