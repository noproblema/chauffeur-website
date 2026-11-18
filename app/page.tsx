// app/page.tsx
// Created by Qwen 3.7 November 14, 2026
import BookingWidget from '@/components/BookingWidget';
import ServiceCard from '@/components/ServiceCard';
import { Plane, Map, Sun, Users } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section with Tropical Gradient */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-[url('/mozambique-coast.jpg')] bg-cover bg-center"
        ></div>
        
        {/* Vibrant Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/90 to-brand-navy/80"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 leading-tight drop-shadow-lg">
            Discover Mozambique in <span className="text-brand-gold">Style</span>
          </h1>
          <p className="text-xl text-brand-sand mb-10 font-light max-w-2xl mx-auto">
            From the streets of Maputo to the beaches of Bazaruto. Experience premium transfers, bespoke safaris, and luxury tours.
          </p>
        </div>
      </section>

      {/* Booking Widget - Now with a white background to pop against the sand page color */}
      <div className="px-4 pb-20">
        <BookingWidget />
      </div>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-brand-navy mb-4">Curated Experiences</h2>
          <p className="text-brand-teal/80 max-w-2xl mx-auto">Travel with the comfort and safety you deserve.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            title="Airport Transfers" 
            description="Seamless pickups from Maputo, Vilankulu, and Pemba airports."
            icon={<Plane size={24} className="text-brand-teal" />}
          />
          <ServiceCard 
            title="Luxury Tours" 
            description="Private guided tours to historical sites and natural wonders."
            icon={<Map size={24} className="text-brand-teal" />}
          />
          <ServiceCard 
            title="Safari & Adventure" 
            description="Comfortable 4x4 transport for your bush and beach adventures."
            icon={<Sun size={24} className="text-brand-teal" />}
          />
          <ServiceCard 
            title="Shuttle Services" 
            description="Reliable group logistics for corporate events, weddings, and large-scale conferences."
            icon={<Users size={24} className="text-brand-teal" />}
          />
        </div>
      </section>
    </>
  );
}
