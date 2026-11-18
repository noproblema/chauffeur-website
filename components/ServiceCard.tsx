// components/ServiceCard.tsx

// Created by Qwen 3.7 November 14, 2026
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-brand-teal/10 group h-full flex flex-col">
      <div className="h-14 w-14 bg-brand-sand rounded-full flex items-center justify-center mb-6 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      
      <h3 className="font-serif text-xl font-bold text-brand-navy mb-3">
        {title}
      </h3>
      
      {/* Changed text color to brand-navy for better contrast against white card */}
      <p className="text-brand-navy/80 mb-6 leading-relaxed flex-grow">
        {description}
      </p>
      
      <Link 
        href="#" 
        className="inline-flex items-center text-brand-teal font-semibold hover:text-brand-gold transition-colors mt-auto"
      >
        Learn More <ArrowRight size={16} className="ml-2" />
      </Link>
    </div>
  );
};

export default ServiceCard;
