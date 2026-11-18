// components/BookingWidget.tsx
//
// Created by Qwen 3.7 November 14, 2026
'use client';

import React, { useState } from 'react';

type ServiceType = 'transfer' | 'hourly' | 'tour' | 'shuttle';

const BookingWidget: React.FC = () => {
  const [serviceType, setServiceType] = useState<ServiceType>('transfer');

  return (
    // Changed to dark background with gold border
    <div className="bg-slate-900 rounded-lg shadow-2xl p-6 max-w-5xl mx-auto -mt-20 relative z-10 border border-slate-700">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1">
          <label className="block text-xs font-bold text-brand-gold uppercase tracking-wide mb-1">Service Type</label>
          <select 
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value as ServiceType)}
            className="w-full bg-slate-800 border border-slate-600 text-white py-3 px-4 rounded focus:outline-none focus:border-brand-gold transition-colors"
          >
            <option value="transfer">Fixed Route Transfer</option>
            <option value="hourly">Car with Driver (Hourly)</option>
            <option value="tour">Complete Tourist Tour</option>
            <option value="shuttle">Group Shuttle</option>
          </select>
        </div>

        <div className="col-span-1">
          <label className="block text-xs font-bold text-brand-gold uppercase tracking-wide mb-1">Pickup Location</label>
          <input type="text" placeholder="Airport or Address" className="w-full bg-slate-800 border border-slate-600 text-white py-3 px-4 rounded focus:outline-none focus:border-brand-gold transition-colors placeholder-gray-500" />
        </div>

        <div className="col-span-1">
          <label className="block text-xs font-bold text-brand-gold uppercase tracking-wide mb-1">Date & Time</label>
          <input type="datetime-local" className="w-full bg-slate-800 border border-slate-600 text-white py-3 px-4 rounded focus:outline-none focus:border-brand-gold transition-colors [color-scheme:dark]" />
        </div>

        <div className="col-span-1">
          <label className="block text-xs font-bold text-brand-gold uppercase tracking-wide mb-1">Passengers</label>
          <select className="w-full bg-slate-800 border border-slate-600 text-white py-3 px-4 rounded focus:outline-none focus:border-brand-gold transition-colors">
            <option>1-3 (Sedan)</option>
            <option>4-6 (SUV)</option>
            <option>7-14 (Van)</option>
            <option>15+ (Coach)</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button className="bg-brand-coral text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors w-full md:w-auto shadow-lg shadow-orange-500/30">
          Get Instant Quote
        </button>
      </div>
    </div>
  );
};

export default BookingWidget;
