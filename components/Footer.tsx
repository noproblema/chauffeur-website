// Created by Qwen 3.7 November 14, 2026
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = '2026';

  const footerLinks = {
    quick: [
      { name: 'Book a Ride', href: '/book' },
      { name: 'Our Fleet', href: '/fleet' },
      { name: 'Corporate Accounts', href: '/corporate' },
      { name: 'FAQs', href: '/faq' },
    ],
    services: [
      { name: 'Airport Transfers', href: '/services/transfers' },
      { name: 'Tourist Tours', href: '/services/tours' },
      { name: 'Event Shuttles', href: '/services/shuttles' },
      { name: 'Hourly Charter', href: '/services/hourly' },
    ]
  };

  return (
    <footer className="bg-brand-navy text-white py-16 border-t border-brand-teal/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1">
            <h4 className="font-serif text-2xl text-brand-gold mb-6">MOZAMBIQUE ELITE</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Setting the standard in luxury ground transportation across Mozambique. 
              From Maputo to the Bazaruto Archipelago, we provide punctual and premium travel experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-bold text-brand-gold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {footerLinks.quick.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-brand-teal transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="font-bold text-brand-gold mb-6 uppercase tracking-wider text-sm">Our Services</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-brand-teal transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="font-bold text-brand-gold mb-6 uppercase tracking-wider text-sm">Contact Dispatch</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center">
                <span className="mr-3 text-brand-teal">📞</span> +258 84 123 4567
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-brand-teal">✉️</span> info@mozambiqueelite.co.mz
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-brand-teal">📍</span> 
                <span>Av. Julius Nyerere, Maputo<br />Mozambique</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Mozambique Elite Chauffeur. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-brand-gold">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-gold">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
