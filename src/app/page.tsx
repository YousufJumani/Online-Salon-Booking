import Link from "next/link";

const featuredServices = [
  {
    title: "Cut & Style",
    description:
      "Precision cuts tailored to your face shape and lifestyle, finished with a professional blow-dry.",
    price: "From $85",
    icon: "✂",
  },
  {
    title: "Colour & Highlights",
    description:
      "Full colour, balayage, ombré, and bespoke highlight packages to refresh and elevate your look.",
    price: "From $120",
    icon: "✦",
  },
  {
    title: "Keratin Treatment",
    description:
      "Long-lasting smoothing treatment that eliminates frizz and transforms hair for up to 4 months.",
    price: "From $180",
    icon: "◈",
  },
  {
    title: "Bridal & Events",
    description:
      "Stunning up-dos, waves, and editorial styles for your most important occasions.",
    price: "From $150",
    icon: "♛",
  },
];

const testimonials = [
  {
    name: "Sophia L.",
    text: "The best balayage I have ever had. The team really listens and understands exactly what you want. I leave feeling transformed every time.",
    service: "Colour & Highlights",
  },
  {
    name: "Mia R.",
    text: "Such a luxurious atmosphere and incredibly talented stylists. My keratin treatment was flawless — my hair has never felt this silky.",
    service: "Keratin Treatment",
  },
  {
    name: "Ava T.",
    text: "I came in for my wedding hair trial and was blown away. They nailed the look on the first try. Highly recommend for brides!",
    service: "Bridal & Events",
  },
];

const highlights = [
  { label: "10+", desc: "Years in Business" },
  { label: "15", desc: "Expert Stylists" },
  { label: "8,000+", desc: "Happy Clients" },
  { label: "100%", desc: "Satisfaction Promise" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative flex items-center justify-center min-h-screen text-white"
        style={{
          background:
            "linear-gradient(135deg, #1a1008 0%, #2c1f0e 40%, #1a1008 100%)",
        }}
      >
        {/* decorative overlay lines */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(184,137,90,0.4) 40px)",
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-8">
          <p className="text-xs tracking-[0.35em] uppercase text-[#b8895a] font-light">
            New York City &bull; Est. 2014
          </p>
          <h1
            className="font-display text-6xl md:text-8xl font-light leading-tight text-white"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Elevate Your
            <span className="block italic text-[#c9a870]">Beauty</span>
          </h1>
          <p className="text-stone-300 text-lg max-w-md leading-relaxed font-light tracking-wide">
            Bespoke hair and beauty experiences crafted by award-winning
            stylists in the heart of Manhattan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/booking"
              className="bg-[#b8895a] text-white text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#a07848] transition-colors"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="border border-white/40 text-white text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-white/10 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
        {/* scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] tracking-[0.25em] uppercase text-stone-400">
            Scroll
          </span>
          <div className="w-px h-8 bg-stone-500" />
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-stone-900 py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {highlights.map((h) => (
            <div key={h.label} className="flex flex-col gap-1">
              <span
                className="text-4xl font-light text-[#c9a870]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {h.label}
              </span>
              <span className="text-xs text-stone-400 tracking-[0.15em] uppercase">
                {h.desc}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED SERVICES ── */}
      <section
        className="py-24 px-6"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* heading */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#b8895a] mb-4">
              What We Offer
            </p>
            <h2
              className="text-5xl font-light text-stone-900"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Our Signature Services
            </h2>
            <div className="w-16 h-px bg-[#b8895a] mx-auto mt-6" />
          </div>

          {/* cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((svc) => (
              <div
                key={svc.title}
                className="group bg-white border border-stone-100 p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-3xl text-[#b8895a]">{svc.icon}</span>
                <h3 className="text-xl font-medium text-stone-900 tracking-wide">
                  {svc.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed flex-1">
                  {svc.description}
                </p>
                <p className="text-sm font-medium text-stone-900 tracking-wide">
                  {svc.price}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block border border-stone-900 text-stone-900 text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-stone-900 hover:text-white transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section
        className="py-24 px-6"
        style={{ background: "var(--accent-light, #f0e4d5)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* visual placeholder */}
          <div
            className="relative w-full aspect-[4/5]"
            style={{
              background:
                "linear-gradient(160deg, #2c1f0e 0%, #b8895a 60%, #e0c9a8 100%)",
            }}
          >
            <div className="absolute inset-6 border border-white/20" />
            <p
              className="absolute bottom-10 left-10 text-white text-5xl font-light italic"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Est. 2014
            </p>
          </div>
          {/* text */}
          <div className="flex flex-col gap-6">
            <p className="text-xs tracking-[0.3em] uppercase text-[#b8895a]">
              Our Story
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-stone-900 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Crafting Beauty,
              <span className="block italic">One Client at a Time</span>
            </h2>
            <div className="w-12 h-px bg-[#b8895a]" />
            <p className="text-stone-600 leading-relaxed">
              Founded in 2014, LuxeSalon was born from a passion for
              transformative beauty. Our team of master stylists brings
              international training and a deep commitment to personalised care
              to every appointment.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Whether you are seeking a subtle refresh or a dramatic
              transformation, we create a tailored experience that honours your
              individuality and enhances your natural beauty.
            </p>
            <Link
              href="/about"
              className="self-start border border-stone-900 text-stone-900 text-xs tracking-[0.2em] uppercase px-8 py-3 hover:bg-stone-900 hover:text-white transition-colors mt-2"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      {/* ── GALLERY TEASER ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[#b8895a] mb-4">
              Portfolio
            </p>
            <h2
              className="text-5xl font-light text-stone-900"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Our Work
            </h2>
            <div className="w-16 h-px bg-[#b8895a] mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              ["#2c1f0e", "#b8895a"],
              ["#1a1008", "#c9a870"],
              ["#b8895a", "#e0c9a8"],
              ["#e0c9a8", "#b8895a"],
              ["#c9a870", "#2c1f0e"],
              ["#3a2a18", "#d4b080"],
            ].map(([from, to], i) => (
              <div
                key={i}
                className="aspect-square"
                style={{
                  background: `linear-gradient(135deg, ${from}, ${to})`,
                }}
              />
            ))}
          </div>
          <p className="text-center text-xs text-stone-400 tracking-wider mt-6">
            Follow us on Instagram{" "}
            <a href="#" className="text-[#b8895a] hover:underline">
              @luxesalon
            </a>{" "}
            for more inspiration
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        className="py-24 px-6"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#b8895a] mb-4">
              Kind Words
            </p>
            <h2
              className="text-5xl font-light text-stone-900"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              What Our Clients Say
            </h2>
            <div className="w-16 h-px bg-[#b8895a] mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white border border-stone-100 p-8 flex flex-col gap-5"
              >
                <div className="flex gap-1 text-[#c9a870]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p
                  className="text-stone-700 leading-relaxed text-lg italic font-light"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-auto pt-4 border-t border-stone-100">
                  <p className="font-medium text-stone-900 text-sm">{t.name}</p>
                  <p className="text-xs text-stone-400 tracking-wider mt-0.5">
                    {t.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="py-24 px-6 text-white text-center"
        style={{
          background:
            "linear-gradient(135deg, #1a1008 0%, #2c1f0e 50%, #1a1008 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <p className="text-xs tracking-[0.35em] uppercase text-[#c9a870]">
            Ready for a Change?
          </p>
          <h2
            className="text-5xl md:text-6xl font-light leading-tight"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Book Your Appointment Today
          </h2>
          <p className="text-stone-400 max-w-sm leading-relaxed">
            Secure your spot with one of our expert stylists. Easy online
            booking, no waiting on hold.
          </p>
          <Link
            href="/booking"
            className="bg-[#b8895a] text-white text-xs tracking-[0.2em] uppercase px-12 py-4 hover:bg-[#a07848] transition-colors mt-2"
          >
            Reserve a Seat
          </Link>
        </div>
      </section>
    </>
  );
}
