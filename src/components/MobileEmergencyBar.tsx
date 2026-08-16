import React from 'react';
import { PhoneCall, Scale, ShieldAlert, HeartHandshake, AlertOctagon } from 'lucide-react';

export const MobileEmergencyBar: React.FC = () => {
  return (
    <aside aria-label="Mobile Emergency Helpline Dial Bar" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 border-t border-slate-800/90 backdrop-blur-md px-2 py-1.5 shadow-2xl">
      <div className="flex items-center justify-around gap-1 text-[11px] font-bold">
        <a
          href="tel:112"
          className="flex-1 flex flex-col items-center justify-center py-1 px-1 bg-red-600/90 text-white rounded-xl active:scale-95 transition-transform"
        >
          <PhoneCall className="w-3.5 h-3.5 mb-0.5 animate-pulse" />
          <span>112 SOS</span>
        </a>
        <a
          href="tel:15100"
          className="flex-1 flex flex-col items-center justify-center py-1 px-1 bg-emerald-600/90 text-white rounded-xl active:scale-95 transition-transform"
        >
          <Scale className="w-3.5 h-3.5 mb-0.5" />
          <span>15100 Legal</span>
        </a>
        <a
          href="tel:181"
          className="flex-1 flex flex-col items-center justify-center py-1 px-1 bg-purple-600/90 text-white rounded-xl active:scale-95 transition-transform"
        >
          <HeartHandshake className="w-3.5 h-3.5 mb-0.5" />
          <span>181 Women</span>
        </a>
        <a
          href="tel:1098"
          className="flex-1 flex flex-col items-center justify-center py-1 px-1 bg-amber-600/90 text-white rounded-xl active:scale-95 transition-transform"
        >
          <ShieldAlert className="w-3.5 h-3.5 mb-0.5" />
          <span>1098 Child</span>
        </a>
        <a
          href="tel:1064"
          className="flex-1 flex flex-col items-center justify-center py-1 px-1 bg-blue-600/90 text-white rounded-xl active:scale-95 transition-transform"
        >
          <AlertOctagon className="w-3.5 h-3.5 mb-0.5" />
          <span>1064 Vigilance</span>
        </a>
      </div>
    </aside>
  );
};
