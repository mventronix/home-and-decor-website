import { Link } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:gap-12 sm:px-6 sm:py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="font-serif text-2xl">Home &amp; Decor</h3>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-silver/80">
            Specialists in curtaining, fabrics, rugs, upholstery and haberdashery — proudly based in
            Tzaneen, delivering nationwide across South Africa.
          </p>
          <a
            href="https://www.facebook.com/homeanddecorfabricshop/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Home & Decor on Facebook"
            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-silver/30 transition-colors hover:bg-sage hover:text-sage-foreground"
          >
            <Facebook className="h-4 w-4" />
          </a>
        </div>

        <div>
          <h4 className="text-[0.7rem] tracking-[0.28em] text-sage uppercase">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm text-silver/80">
            <li>
              <Link to="/" className="hover:text-primary-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-primary-foreground">
                Products &amp; Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary-foreground">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary-foreground">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[0.7rem] tracking-[0.28em] text-sage uppercase">Get In Touch</h4>
          <ul className="mt-5 space-y-4 text-sm text-silver/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
              <span>101 Agatha Street, Central Business District, Tzaneen, 0850</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
              <a href="tel:0829786720" className="hover:text-primary-foreground">
                082 978 6720
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
              <a href="mailto:homedecor@tzaneen.co.za" className="hover:text-primary-foreground">
                homedecor@tzaneen.co.za
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[0.7rem] tracking-[0.28em] text-sage uppercase">Trading Hours</h4>
          <ul className="mt-5 space-y-3 text-sm text-silver/80">
            <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
              <span>Mon – Fri</span>
              <span>8:30 – 17:00</span>
            </li>
            <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
              <span>Saturday</span>
              <span>8:00 – 13:00</span>
            </li>
            <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
              <span>Sun &amp; Public Holidays</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-silver/15">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-silver/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Home &amp; Decor, Tzaneen. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
