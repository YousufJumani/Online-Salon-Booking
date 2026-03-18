import Link from "next/link";

const serviceCategories = [
  {
    category: "Hair Cuts & Styling",
    description:
      "From precision bobs to layered cuts and avant-garde styles, our master cutters deliver results tailored to your face shape, texture, and lifestyle.",
    services: [
      {
        name: "Women's Cut & Blow-dry",
        duration: "60 min",
        price: "$85",
        desc: "Consultation, shampoo, precision cut, and professional blow-dry finish.",
      },
      {
        name: "Men's Cut & Style",
        duration: "45 min",
        price: "$55",
        desc: "Classic or contemporary cuts with a shampoo and styled finish.",
      },
      {
        name: "Children's Cut (under 12)",
        duration: "30 min",
        price: "$40",
        desc: "Gentle, patient service for our youngest guests.",
      },
      {
        name: "Blow-dry & Style",
        duration: "45 min",
        price: "$60",
        desc: "Shampoo and professional blow-dry — straight, wavy, or curly.",
      },
      {
        name: "Special Occasion Up-do",
        duration: "60–90 min",
        price: "$120+",
        desc: "Elegant up-dos, chignons, and editorial styles for events.",
      },
    ],
  },
  {
    category: "Colour & Highlights",
    description:
      "Our colour specialists use the finest professional products to deliver vivid, dimensional colour that respects the health and integrity of your hair.",
    services: [
      {
        name: "Root Touch-up",
        duration: "60 min",
        price: "$80",
        desc: "Precise root colour to seamlessly blend with your existing shade.",
      },
      {
        name: "Full Colour",
        duration: "90 min",
        price: "$120",
        desc: "All-over colour application for a complete transformation.",
      },
      {
        name: "Partial Highlights",
        duration: "90 min",
        price: "$130",
        desc: "Hand-painted or foil highlights for natural-looking dimension.",
      },
      {
        name: "Full Highlights / Balayage",
        duration: "2–3 hrs",
        price: "$180+",
        desc: "Freehand balayage or full-head highlights for sun-kissed radiance.",
      },
      {
        name: "Toner & Gloss",
        duration: "30 min",
        price: "$45",
        desc: "Refresh and neutralise unwanted tones for a salon-fresh finish.",
      },
      {
        name: "Colour Correction",
        duration: "3–5 hrs",
        price: "POQ",
        desc: "Complex correction work. Consultation required before booking.",
      },
    ],
  },
  {
    category: "Treatments & Texture",
    description:
      "Restore, smooth, and transform your hair with our premium in-salon treatment services.",
    services: [
      {
        name: "Deep Conditioning Treatment",
        duration: "30 min",
        price: "$50",
        desc: "Intensive hydration mask infused with heat for lasting softness.",
      },
      {
        name: "Keratin Smoothing Treatment",
        duration: "2–3 hrs",
        price: "$180",
        desc: "Eliminates frizz and adds shine for up to 4 months.",
      },
      {
        name: "Brazilian Blowout",
        duration: "2 hrs",
        price: "$200",
        desc: "Customisable smoothing service that works with your natural texture.",
      },
      {
        name: "Olaplex Repair Treatment",
        duration: "60 min",
        price: "$75",
        desc: "Bond-rebuilding treatment that restores strength and reduces breakage.",
      },
    ],
  },
  {
    category: "Bridal & Special Events",
    description:
      "We partner with you for your most unforgettable moments — from bridal parties to galas, editorial shoots, and beyond.",
    services: [
      {
        name: "Bridal Hair Trial",
        duration: "90 min",
        price: "$150",
        desc: "Trial run of your wedding-day look, including a full style consultation.",
      },
      {
        name: "Wedding Day Hair",
        duration: "2 hrs",
        price: "$220",
        desc: "Dedicated stylist for your big day, includes prep and finish.",
      },
      {
        name: "Bridesmaid / Guest Styling",
        duration: "60 min each",
        price: "$95 per person",
        desc: "Coordinated styles for your wedding party.",
      },
      {
        name: "Event Up-do / Waves",
        duration: "60 min",
        price: "$120",
        desc: "Elegant styles for galas, proms, and special occasions.",
      },
    ],
  },
];

export default function ServicesPage() {
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
          What We Do
        </p>
        <h1
          className="text-6xl md:text-7xl font-light text-white"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Our Services
        </h1>
        <div className="w-16 h-px bg-[#b8895a] mx-auto mt-6" />
        <p className="text-stone-400 max-w-xl mx-auto mt-6 leading-relaxed">
          Every service is tailored to you. Browse our offerings below and book
          the experience that suits your vision.
        </p>
      </section>

      {/* ── SERVICE CATEGORIES ── */}
      <section
        className="py-24 px-6"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col gap-20">
          {serviceCategories.map((cat) => (
            <div key={cat.category} className="flex flex-col gap-8">
              {/* Category header */}
              <div className="flex flex-col gap-3 pb-6 border-b border-stone-200">
                <h2
                  className="text-4xl font-light text-stone-900"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                  }}
                >
                  {cat.category}
                </h2>
                <p className="text-sm text-stone-500 max-w-2xl leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Service rows */}
              <div className="flex flex-col divide-y divide-stone-100">
                {cat.services.map((svc) => (
                  <div
                    key={svc.name}
                    className="flex flex-col sm:flex-row sm:items-center justify-between py-5 gap-3"
                  >
                    <div className="flex flex-col gap-1 flex-1">
                      <span className="font-medium text-stone-900 tracking-wide">
                        {svc.name}
                      </span>
                      <span className="text-sm text-stone-500 max-w-md">
                        {svc.desc}
                      </span>
                    </div>
                    <div className="flex items-center gap-8 shrink-0">
                      <span className="text-xs text-stone-400 tracking-wider">
                        {svc.duration}
                      </span>
                      <span className="font-medium text-stone-900 min-w-[60px] text-right">
                        {svc.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── POLICIES ── */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Consultations",
              body: "All new clients receive a complimentary consultation before their first appointment.",
            },
            {
              title: "Cancellations",
              body: "We ask for 24 hours' notice for cancellations. Late cancellations may incur a 50% service fee.",
            },
            {
              title: "Children & Groups",
              body: "We welcome children and bridal parties — please call us to arrange group bookings.",
            },
          ].map((p) => (
            <div key={p.title} className="flex flex-col gap-3">
              <h3 className="font-medium text-stone-900 tracking-wide">
                {p.title}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 px-6 text-white text-center"
        style={{ background: "#1a1008" }}
      >
        <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
          <h2
            className="text-4xl font-light"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Ready to Book?
          </h2>
          <p className="text-stone-400 text-sm leading-relaxed">
            Choose a service and secure your slot with one of our expert
            stylists in minutes.
          </p>
          <Link
            href="/booking"
            className="bg-[#b8895a] text-white text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#a07848] transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
