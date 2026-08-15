import React, { useRef } from 'react';
import { X, Download, ShieldCheck, PhoneCall, Scale, Printer, Check } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface RightsCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const RightsCardModal: React.FC<RightsCardModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[lang];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-navy-900 border-2 border-saffron-500/80 rounded-3xl shadow-2xl overflow-hidden my-auto text-slate-100">
        
        {/* Modal Header */}
        <div className="bg-slate-950 p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/police-logo.png"
              alt="Police Badge"
              className="w-9 h-9 object-contain bg-navy-900 rounded-xl p-1 border border-saffron-500/40"
            />
            <div>
              <h2 className="text-xl font-extrabold text-white">
                Offline Citizen Rights Wallet Pass
              </h2>
              <p className="text-xs text-slate-400">
                Save or print this card to keep on your phone for internet-offline emergencies
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-saffron-500 hover:bg-saffron-400 text-navy-950 font-extrabold text-xs rounded-xl flex items-center space-x-1 shadow"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save Pass</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-xl transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Pass Content */}
        <div id="printable-complaint" className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          
          {/* Pocket Card Frame */}
          <div className="bg-gradient-to-br from-navy-950 via-slate-900 to-navy-950 border-2 border-saffron-500/60 rounded-2xl p-5 shadow-2xl space-y-4 relative overflow-hidden">
            
            {/* Watermark Logo */}
            <div className="absolute right-3 bottom-3 opacity-5 pointer-events-none">
              <img src="/police-logo.png" alt="watermark" className="w-48 h-48" />
            </div>

            {/* Header Badge */}
            <div className="flex items-center justify-between border-b border-saffron-500/30 pb-3">
              <div className="flex items-center space-x-2.5">
                <img src="/police-logo.png" alt="Badge" className="w-8 h-8 object-contain" />
                <div>
                  <div className="font-extrabold text-sm text-saffron-400 uppercase tracking-wider">
                    INDIAN CITIZEN EMERGENCY RIGHTS PASS
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    BNSS 2023 • CrPC 1973 • Art 20, 21, 22 Constitution
                  </div>
                </div>
              </div>
              <span className="px-2 py-0.5 bg-saffron-500/20 text-saffron-300 text-[10px] font-bold rounded border border-saffron-500/40">
                OFFLINE VERIFIED
              </span>
            </div>

            {/* 5 Golden Rules */}
            <div className="space-y-2 text-xs">
              <div className="font-bold text-white uppercase tracking-wider text-[11px]">
                5 MANDATORY RIGHTS EVERY CITIZEN MUST KNOW:
              </div>

              <div className="p-2 bg-slate-950/80 rounded-lg border border-slate-800 space-y-1">
                <div className="font-bold text-saffron-400">1. Right to Officer Identity & Station</div>
                <div className="text-slate-300 text-[11px]">
                  Police must wear visible name tags and badge numbers. Ask: "What is your name, badge number, and station?"
                </div>
              </div>

              <div className="p-2 bg-slate-950/80 rounded-lg border border-slate-800 space-y-1">
                <div className="font-bold text-saffron-400">2. Right to Remain Silent & Advocate (Art 20(3) & Sec 37 BNSS)</div>
                <div className="text-slate-300 text-[11px]">
                  You cannot be forced to self-incriminate or unlock your smartphone without warrant/grounds. Demand to speak to a lawyer.
                </div>
              </div>

              <div className="p-2 bg-slate-950/80 rounded-lg border border-slate-800 space-y-1">
                <div className="font-bold text-saffron-400">3. 24-Hour Magistrate Limit (Sec 57 BNSS / Art 22(2))</div>
                <div className="text-slate-300 text-[11px]">
                  Police MUST produce an arrested person before a Judicial Magistrate within 24 hours. Detention beyond 24 hours is ILLEGAL.
                </div>
              </div>

              <div className="p-2 bg-slate-950/80 rounded-lg border border-slate-800 space-y-1">
                <div className="font-bold text-saffron-400">4. Women Safeguards (Sec 43(5) BNSS / 46(4) CrPC)</div>
                <div className="text-slate-300 text-[11px]">
                  No arrest of females between sunset and sunrise without Magistrate written order. Search by female officers only.
                </div>
              </div>

              <div className="p-2 bg-slate-950/80 rounded-lg border border-slate-800 space-y-1">
                <div className="font-bold text-saffron-400">5. Mandatory FIR & Seizure Memo (Lalita Kumari SC Ruling)</div>
                <div className="text-slate-300 text-[11px]">
                  FIR registration is mandatory for cognizable crimes. Demand signed Panchnama/Seizure Memo for any confiscated property.
                </div>
              </div>
            </div>

            {/* Emergency Numbers Strip */}
            <div className="bg-slate-950 p-3 rounded-xl border border-saffron-500/30 flex justify-between items-center text-xs font-mono">
              <div>
                <span className="text-red-400 font-bold">112</span> Emergency | <span className="text-rose-400 font-bold">181</span> Women
              </div>
              <div>
                <span className="text-amber-400 font-bold">1064</span> Bribe ACB | <span className="text-blue-400 font-bold">15100</span> NALSA Legal Aid
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 p-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
          <span>Take a screenshot or print this card to keep in your phone gallery</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg"
          >
            Close Pass
          </button>
        </div>

      </div>
    </div>
  );
};
