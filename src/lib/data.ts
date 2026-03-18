import { Service, TeamMember, Testimonial } from "./types";

export const services: Service[] = [
  {
    id: "haircut-style",
    name: "Haircut & Styling",
    category: "Hair",
    description:
      "A precision cut tailored to your face shape and lifestyle, finished with a luxurious blowout and style.",
    duration: 60,
    price: 85,
    image: "✂️",
  },
  {
    id: "hair-color",
    name: "Full Hair Color",
    category: "Hair",
    description:
      "Transform your look with a full, rich color application using our premium, damage-free formula.",
    duration: 120,
    price: 140,
    image: "🎨",
  },
  {
    id: "highlights-balayage",
    name: "Highlights & Balayage",
    category: "Hair",
    description:
      "Hand-painted balayage or foil highlights for dimension, depth, and that sought-after sun-kissed glow.",
    duration: 150,
    price: 185,
    image: "🌟",
  },
  {
    id: "keratin-treatment",
    name: "Keratin Treatment",
    category: "Hair",
    description:
      "Smooth frizz, add shine, and restore manageability with our professional keratin smoothing treatment.",
    duration: 180,
    price: 250,
    image: "💫",
  },
  {
    id: "blowout",
    name: "Blowout & Styling",
    category: "Hair",
    description:
      "A professional blowout with the finish of your choice — sleek, wavy, voluminous, or curled.",
    duration: 45,
    price: 55,
    image: "💨",
  },
  {
    id: "bridal-hair",
    name: "Bridal Hair",
    category: "Hair",
    description:
      "Your most important day deserves the most beautiful hair. Consultation, trial, and day-of styling included.",
    duration: 120,
    price: 220,
    image: "👰",
  },
  {
    id: "manicure",
    name: "Luxury Manicure",
    category: "Nails",
    description:
      "A relaxing hand soak, cuticle care, nail shaping, and your choice of polish in our premium nail lounge.",
    duration: 45,
    price: 42,
    image: "💅",
  },
  {
    id: "pedicure",
    name: "Spa Pedicure",
    category: "Nails",
    description:
      "Indulge with a warm foot soak, exfoliation, massage, and polish for perfectly pampered feet.",
    duration: 60,
    price: 58,
    image: "🦶",
  },
  {
    id: "facial",
    name: "Signature Facial",
    category: "Skincare",
    description:
      "A tailored facial that deep cleanses, exfoliates, and hydrates, leaving your skin luminous and refreshed.",
    duration: 75,
    price: 110,
    image: "✨",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "sophie",
    name: "Sophie Laurent",
    role: "Senior Stylist & Creative Director",
    bio: "With 12 years of experience at top salons in Paris and New York, Sophie brings an unmatched eye for modern cuts and transformative color.",
    specialties: ["Precision Cuts", "Balayage", "Bridal Hair"],
    avatar: "SL",
    rating: 4.9,
  },
  {
    id: "emma",
    name: "Emma Chen",
    role: "Color Specialist",
    bio: "Emma is a certified color expert trained by Redken and Schwarzkopf. Her work has been featured in Vogue and Harper's Bazaar.",
    specialties: ["Hair Coloring", "Balayage", "Keratin Treatments"],
    avatar: "EC",
    rating: 4.8,
  },
  {
    id: "mia",
    name: "Mia Rodriguez",
    role: "Nail Technician",
    bio: "Mia creates nail art that's truly wearable. From classic to avant-garde, her precision and creativity will leave you speechless.",
    specialties: ["Manicure", "Pedicure", "Nail Art"],
    avatar: "MR",
    rating: 5.0,
  },
  {
    id: "aria",
    name: "Aria Kim",
    role: "Skincare Specialist",
    bio: "Aria holds advanced certifications in esthetics and uses only the best clinical-grade products for visible, lasting results.",
    specialties: ["Facials", "Skin Analysis", "Anti-Aging Treatments"],
    avatar: "AK",
    rating: 4.9,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Isabella M.",
    service: "Highlights & Balayage",
    comment:
      "I walked in nervous about going lighter and walked out absolutely glowing. Sophie is a true artist — she listened to every concern and delivered something even better than I imagined.",
    rating: 5,
    date: "February 2026",
  },
  {
    id: "t2",
    name: "Charlotte W.",
    service: "Bridal Hair",
    comment:
      "My wedding day hair was flawless. Sophie understood my vision immediately during the trial and every guest kept asking who did my hair. Worth every penny.",
    rating: 5,
    date: "January 2026",
  },
  {
    id: "t3",
    name: "Natalie P.",
    service: "Signature Facial",
    comment:
      "Aria's facial was the most relaxing 75 minutes of my life. My skin felt like silk for a week afterward. I've already booked my next appointment.",
    rating: 5,
    date: "February 2026",
  },
  {
    id: "t4",
    name: "Rachel K.",
    service: "Luxury Manicure",
    comment:
      "Mia is phenomenal. Her attention to detail is unlike anything I've experienced. The salon itself is so beautiful and calm — a true escape from the city.",
    rating: 5,
    date: "March 2026",
  },
];

export const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
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
];
