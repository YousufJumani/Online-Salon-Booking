import Link from "next/link";

const team = [
  {
    name: "Isabelle Fontaine",
    role: "Creative Director & Master Stylist",
    bio: "Trained at the Vidal Sassoon Academy in London and the Toni & Guy International School, Isabelle brings over 16 years of experience crafting transformative looks for clients across three continents.",
    speciality: "Colour Architecture, Precision Cuts",
  },
  {
    name: "Marcus Reid",
    role: "Senior Colour Specialist",
    bio: "A graduate of the L'Oréal Professionnel Colour Academy, Marcus is renowned for his award-winning balayage technique and his intuitive ability to translate your vision into the perfect shade.",
    speciality: "Balayage, Colour Correction",
  },
  {
    name: "Aria Chen",
    role: "Texture & Treatment Expert",
    bio: "Specialising in texture services and bond-building treatments, Aria has helped thousands of clients restore health and vitality to damaged hair using the latest science-backed techniques.",
    speciality: "Keratin, Olaplex, Curl Care",
  },
  {
    name: "Lucas Delacroix",
    role: "Bridal & Events Stylist",
    bio: "With a background in editorial and fashion work for Vogue and Harper's Bazaar, Lucas brings a refined eye for elegance to every bridal and special occasion appointment.",
    speciality: "Bridal, Up-dos, Editorial",
  },
  {
    name: "Sofia Okafor",
    role: "Stylist & Texture Specialist",
    bio: "Sofia is passionate about celebrating natural textures and curls. She specialises in Afro-textured hair and is certified in multiple curl-care and protective styling systems.",
    speciality: "Natural Textures, Protective Styles",
  },
  {
    name: "James Whitmore",
    role: "Men's Grooming Specialist",
    bio: "A classically trained barber with a modern sensibility, James delivers everything from clean fades to polished executive cuts, keeping our male clientele looking their best.",
    speciality: "Men's Cuts, Beard Grooming",
  },
];

const values = [
  {
    title: "Expertise First",
    desc: "Every stylist at LuxeSalon undergoes continuous education to stay at the forefront of techniques, trends, and product science.",
    icon: "◈",
  },
  {
    title: "Personalised Care",
    desc: "No two clients are the same. We take the time to understand your hair, your lifestyle, and your goals before we reach for the scissors.",
    icon: "♡",
  },
  {
    title: "Premium Products",
    desc: "We work exclusively with professional-grade colour and care products — Wella, Goldwell, Olaplex, and K18 — that are gentle and effective.",
    icon: "✦",
  },
  {
    title: "Sustainable Practice",
    desc: "From eco-friendly packaging to water-saving backwash systems, we are committed to reducing our environmental footprint.",
    icon: "◎",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section
        className="pt-32 pb-20 px-6 text-center"
        style={{
          background:
            "linear-gradient(160deg, #1a1008 0%, #2c1f0e 60%, #1a1008 100%)",
        }}
      >
        <p className="text-xs tracking-[0.35em] uppercase text-[#c9a870] mb-4">
          Our Story
        </p>
        <h1
          className="text-6xl md:text-7xl font-light text-white"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          About LuxeSalon
        </h1>
        <div className="w-16 h-px bg-[#b8895a] mx-auto mt-6" />
        <p className="text-stone-400 max-w-xl mx-auto mt-6 leading-relaxed">
          A sanctuary for beauty and self-expression in the heart of Manhattan,
          founded on the belief that every client deserves an exceptional
          experience.
        </p>
      </section>

      {/* ── STORY SECTION ── */}
      <section
        className="py-24 px-6"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* text */}
          <div className="flex flex-col gap-6">
            <p className="text-xs tracking-[0.3em] uppercase text-[#b8895a]">
              Where It Began
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-stone-900 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Bringing World-Class
              <span className="block italic">Artistry to New York</span>
            </h2>
            <div className="w-12 h-px bg-[#b8895a]" />
            <p className="text-stone-600 leading-relaxed">
              LuxeSalon was founded in 2014 by Isabelle Fontaine after a decade
              working in the top salons of Paris, Milan, and London. Her vision
              was simple: to bring the personalised, artisan approach of
              European haute coiffure to New York City.
            </p>
            <p className="text-stone-600 leading-relaxed">
              What began as a boutique studio with three chairs has grown into a
              team of 15 world-class stylists, colourists, and treatment
              specialists — all united by an obsession with craft and an
              unwavering commitment to client satisfaction.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Today, LuxeSalon is home to some of the most decorated hair
              professionals in New York, and we have the satisfaction of
              building lasting relationships with over 8,000 clients who trust
              us with their most personal transformations.
            </p>
          </div>
          {/* visual */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { from: "#2c1f0e", to: "#b8895a", aspect: "aspect-[3/4]" },
              { from: "#b8895a", to: "#e0c9a8", aspect: "aspect-square" },
              { from: "#1a1008", to: "#c9a870", aspect: "aspect-square" },
              { from: "#e0c9a8", to: "#2c1f0e", aspect: "aspect-[3/4]" },
            ].map((b, i) => (
              <div
                key={i}
                className={b.aspect}
                style={{
                  background: `linear-gradient(135deg, ${b.from}, ${b.to})`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#b8895a] mb-4">
              What We Stand For
            </p>
            <h2
              className="text-5xl font-light text-stone-900"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Our Values
            </h2>
            <div className="w-16 h-px bg-[#b8895a] mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-stone-100 p-8 flex flex-col gap-4"
              >
                <span className="text-3xl text-[#b8895a]">{v.icon}</span>
                <h3 className="font-medium text-stone-900 tracking-wide">
                  {v.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section
        className="py-24 px-6"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#b8895a] mb-4">
              The Talent
            </p>
            <h2
              className="text-5xl font-light text-stone-900"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Meet Our Stylists
            </h2>
            <div className="w-16 h-px bg-[#b8895a] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-stone-100 overflow-hidden group"
              >
                {/* portrait placeholder */}
                <div
                  className="w-full aspect-[4/3]"
                  style={{
                    background: `linear-gradient(160deg, #2c1f0e, #b8895a)`,
                  }}
                >
                  <div className="w-full h-full flex items-end p-6">
                    <div
                      className="text-5xl font-light text-white/60 italic"
                      style={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                      }}
                    >
                      {member.name.charAt(0)}
                    </div>
                  </div>
                </div>
                {/* info */}
                <div className="p-6 flex flex-col gap-3">
                  <div>
                    <h3 className="font-medium text-stone-900">{member.name}</h3>
                    <p className="text-xs text-[#b8895a] tracking-wider mt-0.5">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    {member.bio}
                  </p>
                  <p className="text-xs text-stone-400 tracking-wide pt-2 border-t border-stone-100">
                    Speciality: {member.speciality}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section className="py-20 px-6 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-5">
            <h2
              className="text-4xl font-light"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Visit Us
            </h2>
            <div className="w-10 h-px bg-[#b8895a]" />
            <div className="text-stone-300 flex flex-col gap-2 text-sm leading-relaxed">
              <p>
                <span className="text-stone-500 tracking-wider text-xs uppercase">
                  Address
                </span>
                <br />
                123 Elegance Boulevard, New York, NY 10001
              </p>
              <p className="mt-3">
                <span className="text-stone-500 tracking-wider text-xs uppercase">
                  Phone
                </span>
                <br />
                <a href="tel:+12125550199" className="hover:text-white">
                  (212) 555-0199
                </a>
              </p>
              <p className="mt-3">
                <span className="text-stone-500 tracking-wider text-xs uppercase">
                  Email
                </span>
                <br />
                <a
                  href="mailto:hello@luxesalon.com"
                  className="hover:text-white"
                >
                  hello@luxesalon.com
                </a>
              </p>
            </div>
            <div className="mt-2">
              <p className="text-stone-500 tracking-wider text-xs uppercase mb-2">
                Hours
              </p>
              <p className="text-stone-300 text-sm">
                Mon – Sat: 9:00am – 8:00pm
              </p>
              <p className="text-stone-300 text-sm">Sun: 10:00am – 6:00pm</p>
            </div>
          </div>
          {/* map placeholder */}
          <div
            className="w-full aspect-video md:aspect-square"
            style={{ background: "linear-gradient(135deg, #2c1f0e, #44342a)" }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-stone-500 text-sm tracking-wider">
                Map Placeholder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
          <h2
            className="text-4xl font-light text-stone-900"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Ready to Experience LuxeSalon?
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed">
            Book online in minutes or give us a call. We look forward to
            welcoming you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/booking"
              className="bg-stone-900 text-white text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-stone-700 transition-colors"
            >
              Book Now
            </Link>
            <a
              href="tel:+12125550199"
              className="border border-stone-900 text-stone-900 text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-stone-900 hover:text-white transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
