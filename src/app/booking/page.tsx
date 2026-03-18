"use client";

import { useState } from "react";
import Link from "next/link";

/* ─── Data ─── */
const serviceOptions = [
  {
    category: "Cut & Style",
    items: [
      { name: "Women's Cut & Blow-dry", duration: "60 min", price: "$85" },
      { name: "Men's Cut & Style", duration: "45 min", price: "$55" },
      { name: "Children's Cut", duration: "30 min", price: "$40" },
      { name: "Blow-dry & Style", duration: "45 min", price: "$60" },
      { name: "Special Occasion Up-do", duration: "75 min", price: "$120+" },
    ],
  },
  {
    category: "Colour & Highlights",
    items: [
      { name: "Root Touch-up", duration: "60 min", price: "$80" },
      { name: "Full Colour", duration: "90 min", price: "$120" },
      { name: "Partial Highlights", duration: "90 min", price: "$130" },
      { name: "Full Highlights / Balayage", duration: "2.5 hrs", price: "$180+" },
      { name: "Toner & Gloss", duration: "30 min", price: "$45" },
    ],
  },
  {
    category: "Treatments",
    items: [
      { name: "Deep Conditioning", duration: "30 min", price: "$50" },
      { name: "Keratin Treatment", duration: "2.5 hrs", price: "$180" },
      { name: "Brazilian Blowout", duration: "2 hrs", price: "$200" },
      { name: "Olaplex Repair", duration: "60 min", price: "$75" },
    ],
  },
  {
    category: "Bridal & Events",
    items: [
      { name: "Bridal Hair Trial", duration: "90 min", price: "$150" },
      { name: "Wedding Day Hair", duration: "2 hrs", price: "$220" },
      { name: "Bridesmaid Styling", duration: "60 min", price: "$95" },
      { name: "Event Up-do / Waves", duration: "60 min", price: "$120" },
    ],
  },
];

const stylists = [
  {
    name: "Isabelle Fontaine",
    role: "Creative Director",
    speciality: "Colour, Precision Cuts",
  },
  {
    name: "Marcus Reid",
    role: "Senior Colourist",
    speciality: "Balayage, Colour Correction",
  },
  {
    name: "Aria Chen",
    role: "Treatment Expert",
    speciality: "Keratin, Olaplex",
  },
  {
    name: "Lucas Delacroix",
    role: "Bridal Stylist",
    speciality: "Bridal, Up-dos",
  },
  {
    name: "Sofia Okafor",
    role: "Texture Specialist",
    speciality: "Natural Textures, Curls",
  },
  {
    name: "James Whitmore",
    role: "Men's Specialist",
    speciality: "Men's Cuts, Grooming",
  },
];

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
];

/* ─── Types ─── */
interface Booking {
  service: string;
  serviceCategory: string;
  serviceDuration: string;
  servicePrice: string;
  stylist: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
}

const emptyBooking: Booking = {
  service: "",
  serviceCategory: "",
  serviceDuration: "",
  servicePrice: "",
  stylist: "",
  date: "",
  time: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  notes: "",
};

/* ─── Step indicator ─── */
function StepIndicator({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const labels = ["Service", "Schedule", "Your Info", "Confirm"];
  return (
    <div className="flex items-center justify-center gap-0 mb-12">
      {labels.map((label, i) => {
        const step = i + 1;
        const done = step < current;
        const active = step === current;
        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`w-8 h-8 flex items-center justify-center text-xs font-medium transition-colors ${
                  done
                    ? "bg-[#b8895a] text-white"
                    : active
                    ? "bg-stone-900 text-white"
                    : "bg-stone-100 text-stone-400"
                }`}
              >
                {done ? "✓" : step}
              </div>
              <span
                className={`text-[10px] tracking-widest uppercase ${
                  active ? "text-stone-900" : "text-stone-400"
                }`}
              >
                {label}
              </span>
            </div>
            {i < total - 1 && (
              <div
                className={`w-16 md:w-24 h-px mb-5 transition-colors ${
                  done ? "bg-[#b8895a]" : "bg-stone-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─── Step 1: Service ─── */
function Step1({
  booking,
  setBooking,
  onNext,
}: {
  booking: Booking;
  setBooking: (b: Booking) => void;
  onNext: () => void;
}) {
  const canProceed = !!booking.service;

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h2
          className="text-3xl font-light text-stone-900 mb-2"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Choose a Service
        </h2>
        <p className="text-sm text-stone-500">
          Select the service you would like to book.
        </p>
      </div>
      {serviceOptions.map((cat) => (
        <div key={cat.category} className="flex flex-col gap-3">
          <p className="text-xs tracking-[0.2em] uppercase text-[#b8895a] font-medium">
            {cat.category}
          </p>
          <div className="flex flex-col divide-y divide-stone-100 border border-stone-100">
            {cat.items.map((item) => {
              const selected = booking.service === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() =>
                    setBooking({
                      ...booking,
                      service: item.name,
                      serviceCategory: cat.category,
                      serviceDuration: item.duration,
                      servicePrice: item.price,
                    })
                  }
                  className={`flex items-center justify-between px-5 py-4 text-left transition-colors ${
                    selected
                      ? "bg-stone-900 text-white"
                      : "bg-white hover:bg-stone-50"
                  }`}
                >
                  <span className="font-medium text-sm">{item.name}</span>
                  <div className="flex items-center gap-6 shrink-0 text-xs">
                    <span className={selected ? "text-stone-300" : "text-stone-400"}>
                      {item.duration}
                    </span>
                    <span className={selected ? "text-[#c9a870]" : "text-stone-900"}>
                      {item.price}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div className="flex justify-end pt-4">
        <button
          onClick={onNext}
          disabled={!canProceed}
          className={`text-xs tracking-[0.2em] uppercase px-10 py-4 transition-colors ${
            canProceed
              ? "bg-stone-900 text-white hover:bg-stone-700"
              : "bg-stone-100 text-stone-300 cursor-not-allowed"
          }`}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

/* ─── Step 2: Schedule ─── */
function Step2({
  booking,
  setBooking,
  onNext,
  onBack,
}: {
  booking: Booking;
  setBooking: (b: Booking) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  // Generate next 30 days excluding Sunday (make Sunday available per salon hours)
  const today = new Date();
  const days: { label: string; value: string }[] = [];
  for (let i = 1; i <= 30; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const value = d.toISOString().split("T")[0];
    const label = d.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
    days.push({ label, value });
  }

  const canProceed = !!booking.stylist && !!booking.date && !!booking.time;

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h2
          className="text-3xl font-light text-stone-900 mb-2"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Select a Stylist & Time
        </h2>
        <p className="text-sm text-stone-500">
          Booking:{" "}
          <span className="text-stone-800 font-medium">{booking.service}</span>{" "}
          &mdash; {booking.serviceDuration} / {booking.servicePrice}
        </p>
      </div>

      {/* Stylist */}
      <div className="flex flex-col gap-3">
        <p className="text-xs tracking-[0.2em] uppercase text-[#b8895a] font-medium">
          Choose Stylist
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[{ name: "No Preference", role: "Any available stylist", speciality: "" }, ...stylists].map(
            (s) => {
              const selected = booking.stylist === s.name;
              return (
                <button
                  key={s.name}
                  onClick={() => setBooking({ ...booking, stylist: s.name })}
                  className={`flex flex-col gap-0.5 p-4 border text-left transition-colors ${
                    selected
                      ? "border-stone-900 bg-stone-900 text-white"
                      : "border-stone-200 bg-white hover:border-stone-400"
                  }`}
                >
                  <span className="font-medium text-sm">{s.name}</span>
                  <span
                    className={`text-xs ${
                      selected ? "text-stone-300" : "text-stone-500"
                    }`}
                  >
                    {s.role}
                  </span>
                  {s.speciality && (
                    <span
                      className={`text-xs mt-0.5 ${
                        selected ? "text-[#c9a870]" : "text-[#b8895a]"
                      }`}
                    >
                      {s.speciality}
                    </span>
                  )}
                </button>
              );
            }
          )}
        </div>
      </div>

      {/* Date */}
      <div className="flex flex-col gap-3">
        <p className="text-xs tracking-[0.2em] uppercase text-[#b8895a] font-medium">
          Choose Date
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {days.slice(0, 20).map((d) => {
            const selected = booking.date === d.value;
            return (
              <button
                key={d.value}
                onClick={() => setBooking({ ...booking, date: d.value, time: "" })}
                className={`py-3 text-xs leading-tight transition-colors border ${
                  selected
                    ? "bg-stone-900 text-white border-stone-900"
                    : "bg-white border-stone-200 hover:border-stone-400 text-stone-700"
                }`}
              >
                {d.label.split(", ").map((p, i) => (
                  <span key={i} className="block">
                    {p}
                  </span>
                ))}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time */}
      {booking.date && (
        <div className="flex flex-col gap-3">
          <p className="text-xs tracking-[0.2em] uppercase text-[#b8895a] font-medium">
            Choose Time
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
            {timeSlots.map((t) => {
              const selected = booking.time === t;
              return (
                <button
                  key={t}
                  onClick={() => setBooking({ ...booking, time: t })}
                  className={`py-2.5 text-xs transition-colors border ${
                    selected
                      ? "bg-stone-900 text-white border-stone-900"
                      : "bg-white border-stone-200 hover:border-stone-400 text-stone-700"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex justify-between pt-4">
        <button
          onClick={onBack}
          className="text-xs tracking-[0.2em] uppercase px-6 py-4 border border-stone-200 text-stone-600 hover:bg-stone-50 transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          disabled={!canProceed}
          className={`text-xs tracking-[0.2em] uppercase px-10 py-4 transition-colors ${
            canProceed
              ? "bg-stone-900 text-white hover:bg-stone-700"
              : "bg-stone-100 text-stone-300 cursor-not-allowed"
          }`}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

/* ─── Step 3: Personal Info ─── */
function Step3({
  booking,
  setBooking,
  onNext,
  onBack,
}: {
  booking: Booking;
  setBooking: (b: Booking) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const canProceed =
    !!booking.firstName &&
    !!booking.lastName &&
    !!booking.email &&
    !!booking.phone;

  const field =
    "w-full border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder-stone-300 focus:outline-none focus:border-stone-600 transition-colors";

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2
          className="text-3xl font-light text-stone-900 mb-2"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Your Details
        </h2>
        <p className="text-sm text-stone-500">
          We need a few details to confirm your booking.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs tracking-wider uppercase text-stone-500">
            First Name *
          </label>
          <input
            className={field}
            placeholder="Jane"
            value={booking.firstName}
            onChange={(e) =>
              setBooking({ ...booking, firstName: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs tracking-wider uppercase text-stone-500">
            Last Name *
          </label>
          <input
            className={field}
            placeholder="Smith"
            value={booking.lastName}
            onChange={(e) =>
              setBooking({ ...booking, lastName: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs tracking-wider uppercase text-stone-500">
            Email Address *
          </label>
          <input
            className={field}
            type="email"
            placeholder="jane@example.com"
            value={booking.email}
            onChange={(e) =>
              setBooking({ ...booking, email: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs tracking-wider uppercase text-stone-500">
            Phone Number *
          </label>
          <input
            className={field}
            type="tel"
            placeholder="(212) 555-0100"
            value={booking.phone}
            onChange={(e) =>
              setBooking({ ...booking, phone: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className="text-xs tracking-wider uppercase text-stone-500">
            Additional Notes
          </label>
          <textarea
            className={`${field} resize-none`}
            rows={4}
            placeholder="Any allergies, special requests, or information for your stylist..."
            value={booking.notes}
            onChange={(e) =>
              setBooking({ ...booking, notes: e.target.value })
            }
          />
        </div>
      </div>

      <p className="text-xs text-stone-400 leading-relaxed">
        By proceeding, you agree to our cancellation policy: 24 hours&apos; notice
        required. Late cancellations may incur a 50% fee.
      </p>

      <div className="flex justify-between pt-2">
        <button
          onClick={onBack}
          className="text-xs tracking-[0.2em] uppercase px-6 py-4 border border-stone-200 text-stone-600 hover:bg-stone-50 transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          disabled={!canProceed}
          className={`text-xs tracking-[0.2em] uppercase px-10 py-4 transition-colors ${
            canProceed
              ? "bg-stone-900 text-white hover:bg-stone-700"
              : "bg-stone-100 text-stone-300 cursor-not-allowed"
          }`}
        >
          Review Booking →
        </button>
      </div>
    </div>
  );
}

/* ─── Step 4: Review & Confirm ─── */
function Step4({
  booking,
  onConfirm,
  onBack,
}: {
  booking: Booking;
  onConfirm: () => void;
  onBack: () => void;
}) {
  const dateObj = new Date(booking.date + "T12:00:00");
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const rows = [
    { label: "Service", value: booking.service },
    { label: "Duration", value: booking.serviceDuration },
    { label: "Price", value: booking.servicePrice },
    { label: "Stylist", value: booking.stylist },
    { label: "Date", value: formattedDate },
    { label: "Time", value: booking.time },
    {
      label: "Client",
      value: `${booking.firstName} ${booking.lastName}`,
    },
    { label: "Email", value: booking.email },
    { label: "Phone", value: booking.phone },
    ...(booking.notes
      ? [{ label: "Notes", value: booking.notes }]
      : []),
  ];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2
          className="text-3xl font-light text-stone-900 mb-2"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Review Your Booking
        </h2>
        <p className="text-sm text-stone-500">
          Please check your details before confirming.
        </p>
      </div>

      <div className="border border-stone-200 divide-y divide-stone-100">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex items-start gap-4 px-5 py-3.5"
          >
            <span className="text-xs tracking-wider uppercase text-stone-400 w-24 shrink-0 pt-0.5">
              {r.label}
            </span>
            <span className="text-sm text-stone-800">{r.value}</span>
          </div>
        ))}
      </div>

      <div className="bg-stone-50 border border-stone-200 px-5 py-4 text-xs text-stone-500 leading-relaxed">
        A confirmation email will be sent to{" "}
        <span className="text-stone-800 font-medium">{booking.email}</span>.
        Please arrive 5 minutes early. For rescheduling or cancellations, call
        us at (212) 555-0199 at least 24 hours before your appointment.
      </div>

      <div className="flex justify-between pt-2">
        <button
          onClick={onBack}
          className="text-xs tracking-[0.2em] uppercase px-6 py-4 border border-stone-200 text-stone-600 hover:bg-stone-50 transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onConfirm}
          className="bg-[#b8895a] text-white text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#a07848] transition-colors"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

/* ─── Success Screen ─── */
function SuccessScreen({ booking }: { booking: Booking }) {
  const dateObj = new Date(booking.date + "T12:00:00");
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col items-center text-center gap-8 py-10">
      <div className="w-16 h-16 bg-stone-900 flex items-center justify-center text-white text-2xl">
        ✓
      </div>
      <div className="flex flex-col gap-3">
        <h2
          className="text-4xl font-light text-stone-900"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Booking Confirmed!
        </h2>
        <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
          Thank you, {booking.firstName}. We have received your booking and a
          confirmation has been sent to{" "}
          <span className="text-stone-800">{booking.email}</span>.
        </p>
      </div>
      <div className="bg-stone-50 border border-stone-200 px-8 py-6 flex flex-col gap-2 text-sm min-w-64">
        <p className="text-stone-900 font-medium text-base">{booking.service}</p>
        <p className="text-stone-500">
          {formattedDate} at {booking.time}
        </p>
        <p className="text-[#b8895a] text-xs tracking-wider">
          with {booking.stylist}
        </p>
      </div>
      <p className="text-xs text-stone-400 max-w-xs leading-relaxed">
        Need to change your appointment? Call us at{" "}
        <a href="tel:+12125550199" className="text-stone-600 hover:underline">
          (212) 555-0199
        </a>{" "}
        at least 24 hours beforehand.
      </p>
      <Link
        href="/"
        className="bg-stone-900 text-white text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-stone-700 transition-colors mt-2"
      >
        Return Home
      </Link>
    </div>
  );
}

/* ─── Main Page ─── */
export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState<Booking>(emptyBooking);
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);
  };

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section
        className="pt-32 pb-16 px-6 text-center"
        style={{
          background:
            "linear-gradient(160deg, #1a1008 0%, #2c1f0e 60%, #1a1008 100%)",
        }}
      >
        <p className="text-xs tracking-[0.35em] uppercase text-[#c9a870] mb-4">
          Reservations
        </p>
        <h1
          className="text-5xl md:text-6xl font-light text-white"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Book an Appointment
        </h1>
        <div className="w-16 h-px bg-[#b8895a] mx-auto mt-6" />
        <p className="text-stone-400 max-w-md mx-auto mt-5 text-sm leading-relaxed">
          Complete the form below in four easy steps. We look forward to
          welcoming you.
        </p>
      </section>

      {/* ── FORM BODY ── */}
      <section
        className="py-16 px-6"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-3xl mx-auto">
          {confirmed ? (
            <SuccessScreen booking={booking} />
          ) : (
            <>
              <StepIndicator current={step} total={4} />
              {step === 1 && (
                <Step1
                  booking={booking}
                  setBooking={setBooking}
                  onNext={() => setStep(2)}
                />
              )}
              {step === 2 && (
                <Step2
                  booking={booking}
                  setBooking={setBooking}
                  onNext={() => setStep(3)}
                  onBack={() => setStep(1)}
                />
              )}
              {step === 3 && (
                <Step3
                  booking={booking}
                  setBooking={setBooking}
                  onNext={() => setStep(4)}
                  onBack={() => setStep(2)}
                />
              )}
              {step === 4 && (
                <Step4
                  booking={booking}
                  onConfirm={handleConfirm}
                  onBack={() => setStep(3)}
                />
              )}
            </>
          )}
        </div>
      </section>

      {/* ── REASSURANCE ── */}
      {!confirmed && (
        <section className="pb-20 px-6">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "✓",
                title: "Free Cancellation",
                desc: "Cancel or reschedule up to 24 hours before at no charge.",
              },
              {
                icon: "◎",
                title: "Expert Stylists",
                desc: "All our stylists are internationally trained and certified.",
              },
              {
                icon: "✦",
                title: "Premium Products",
                desc: "We use only professional-grade colour and care products.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 border border-stone-100 bg-white"
              >
                <span className="text-[#b8895a] text-xl mt-0.5">
                  {item.icon}
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-stone-900">
                    {item.title}
                  </p>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
