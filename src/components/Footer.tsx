import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <p className="text-xl tracking-[0.25em] text-white uppercase font-light"
             style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Luxe<span className="font-semibold">Salon</span>
          </p>
          <p className="text-sm text-stone-400 leading-relaxed max-w-xs">
            Where beauty meets artistry. We craft personalized experiences that
            leave you feeling confident and radiant.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <p className="text-xs tracking-[0.2em] uppercase text-white font-semibold">
            Navigate
          </p>
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/about", label: "About Us" },
            { href: "/booking", label: "Book an Appointment" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-stone-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <p className="text-xs tracking-[0.2em] uppercase text-white font-semibold">
            Visit Us
          </p>
          <address className="not-italic flex flex-col gap-2 text-sm text-stone-400">
            <span>123 Elegance Boulevard</span>
            <span>New York, NY 10001</span>
            <a
              href="tel:+12125550199"
              className="hover:text-white transition-colors mt-2"
            >
              (212) 555-0199
            </a>
            <a
              href="mailto:hello@lumieresalon.com"
              className="hover:text-white transition-colors"
            >
              hello@luxesalon.com
            </a>
          </address>
          <div className="mt-2">
            <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">
              Hours
            </p>
            <p className="text-sm text-stone-400">Mon – Sat: 9am – 7pm</p>
            <p className="text-sm text-stone-400">Sunday: 10am – 5pm</p>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-600">
            © {new Date().getFullYear()} LuxeSalon. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Instagram", "Facebook", "Pinterest"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-stone-600 hover:text-stone-300 transition-colors tracking-wider"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
