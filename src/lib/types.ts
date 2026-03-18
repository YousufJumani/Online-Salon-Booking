export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: number; // minutes
  price: number;
  image: string; // emoji stand-in for portfolio
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  avatar: string;
  rating: number;
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  comment: string;
  rating: number;
  date: string;
}

export interface BookingData {
  serviceId: string;
  stylistId: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
}
