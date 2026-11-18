// Components/navbar.tsx

// Created by Qwen 3.7 November 14, 2026
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Centralized navigation links for easy maintenance
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Fleet', href: '/fleet' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <nav 
      className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-brand-teal/10 shadow-sm transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link 
            href="/" 
            className="flex-shrink-0 flex items-center gap-2"
          >
            <span className="font-serif text-2xl text-brand-teal tracking-wide font-bold">
              MOZAMBIQUE
            </span>
            <span className="font-serif text-2xl text-brand-gold tracking-wide font-bold">
              ELITE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-brand-navy hover:text-brand-teal font-medium transition-colors duration-200 px-1 py-2 text-sm"
                >
                  {link.name}
                </Link>
              ))}
              
              <button 
                className="bg-brand-teal text-white px-6 py-2.5 rounded-full font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-500/20 text-sm"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-navy hover:text-brand-teal hover:bg-brand-sand focus:outline-none transition-colors"
              aria-label="Main menu"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-brand-navy hover:text-brand-teal hover:bg-brand-sand transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-4 mt-4 border-t border-gray-100">
              <button 
                className="w-full bg-brand-teal text-white px-4 py-3 rounded-lg font-bold hover:bg-teal-700 transition-colors shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Book Your Ride
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
