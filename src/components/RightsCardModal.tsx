import React, { useRef } from 'react';
import { X, Download, ShieldCheck, PhoneCall, Scale, Printer, Check } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface RightsCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const RightsCardModal: React.FC<RightsCardModalProps> = ({ isOpen, onClose, lang }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  if (!isOpen) return null;

  const t = TRANSLATIONS[lang];
  const isHindi = lang === 'hi';

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set dimensions for high-res PNG pass
    canvas.width = 1080;
    canvas.height = 1440;

    // Background gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 1080, 1440);
    bgGrad.addColorStop(0, '#020617');
    bgGrad.addColorStop(0.5, '#0f172a');
    bgGrad.addColorStop(1, '#020617');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1080, 1440);

    // Tricolor top border accent
    ctx.fillStyle = '#FF671F';
    ctx.fillRect(0, 0, 360, 12);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(360, 0, 360, 12);
    ctx.fillStyle = '#046A38';
    ctx.fillRect(720, 0, 360, 12);

    // Gold border frame
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 6;
    ctx.strokeRect(30, 40, 1020, 1360);

    // Header Title
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 44px sans-serif';
    ctx.fillText(isHindi ? 'भारतीय नागरिक पुलिस अधिकार कार्ड' : 'INDIAN CITIZEN LEGAL RIGHTS PASS', 70, 120);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '24px monospace';
    ctx.fillText('BNSS 2023 • Constitution Art 20, 21, 22 • NALSA 15100', 70, 160);

    // Divider
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(70, 185);
    ctx.lineTo(1010, 185);
    ctx.stroke();

    // 5 Rules Data
    const rules = [
      {
        t: isHindi ? '1. पुलिस पहचान एवं वर्दी बैज' : '1. Right to Officer Identity & Badge',
        d: isHindi ? 'अधिकारी का नाम एवं पद बैज देखें। बिना पद नाम बताएं हिरासत नहीं ले सकते।' : 'Police must wear clear visible name tag. You have right to ask name & station.'
      },
      {
        t: isHindi ? '2. चुप रहने व वकील से सलाह का अधिकार' : '2. Right to Silence & Advocate (Art 20(3))',
        d: isHindi ? 'बिना वारंट स्मार्टफोन अनलॉक करने की आवश्यकता नहीं है। वकील से मिलने का अधिकार है।' : 'Cannot be forced to self-incriminate or unlock phone without warrant.'
      },
      {
        t: isHindi ? '3. 24 घंटे में मजिस्ट्रेट पेशी' : '3. 24-Hour Magistrate Limit (Sec 58 BNSS)',
        d: isHindi ? 'गिरफ्तार व्यक्ति को 24 घंटे के भीतर न्यायिक मजिस्ट्रेट के सामने पेश करना अनिवार्य है।' : 'Must be produced before Judicial Magistrate within 24 hours of arrest.'
      },
      {
        t: isHindi ? '4. महिलाओं के लिए सुरक्षा नियम' : '4. Women Safeguards (Sec 43(5) BNSS)',
        d: isHindi ? 'सूरज ढलने के बाद व उगने से पहले महिलाओं की गिरफ्तारी नहीं। महिला अधिकारी ही तलाशी ले सकती है।' : 'No female arrest between sunset & sunrise. Search by female officers only.'
      },
      {
        t: isHindi ? '5. अनिवार्य एफआईआर एवं जब्ती मेमो' : '5. Mandatory FIR & Seizure Memo',
        d: isHindi ? 'संज्ञेय अपराध में एफआईआर दर्ज करना अनिवार्य है। जब्त सामान का मेमो मांगें।' : 'FIR is mandatory for cognizable crimes. Demand signed Panchnama/Memo.'
      }
    ];

    let currentY = 240;
    rules.forEach((r) => {
      // Card Box
      ctx.fillStyle = '#090d16';
      ctx.fillRect(70, currentY, 940, 165);
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 2;
      ctx.strokeRect(70, currentY, 940, 165);

      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 30px sans-serif';
      ctx.fillText(r.t, 95, currentY + 48);

      ctx.fillStyle = '#cbd5e1';
      ctx.font = '24px sans-serif';
      ctx.fillText(r.d, 95, currentY + 105);

      currentY += 195;
    });

    // Emergency Bar Box
    ctx.fillStyle = '#020617';
    ctx.fillRect(70, 1240, 940, 120);
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3;
    ctx.strokeRect(70, 1240, 940, 120);

    ctx.fillStyle = '#ef4444';
    ctx.font = 'bold 30px monospace';
    ctx.fillText('EMERGENCY 112', 95, 1310);

    ctx.fillStyle = '#10b981';
    ctx.fillText('LEGAL AID 15100', 380, 1310);

    ctx.fillStyle = '#3b82f6';
    ctx.fillText('VIGILANCE 1064', 700, 1310);

    // Download PNG
    const link = document.createElement('a');
    link.download = 'Citizen-Police-Rights-Card.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      
      {/* Hidden Canvas element for PNG rendering */}
      <canvas ref={canvasRef} className="hidden" />

      <div className="relative w-full max-w-2xl bg-slate-900 border-2 border-saffron-500/80 rounded-3xl shadow-2xl overflow-hidden my-auto text-slate-100">
        
        {/* Modal Header */}
        <div className="bg-slate-950 p-4 sm:p-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <img
              src="/police-logo.png"
              alt="Police Badge"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain bg-slate-900 rounded-xl p-1 border border-saffron-500/40 flex-shrink-0"
            />
            <div>
              <h2 className="text-base sm:text-xl font-extrabold text-white">
                {isHindi ? 'ऑफ़लाइन नागरिक अधिकार वॉलेट पास' : 'Offline Citizen Rights Wallet Pass'}
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-400">
                {isHindi ? 'गैलरी में सुरक्षित रखने या प्रिंट करने के लिए डाउनलोड करें' : 'Save as PNG image or print for internet-offline emergency situations'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 self-end sm:self-auto shrink-0">
            <button
              onClick={handleDownloadPNG}
              className="px-2.5 sm:px-3 py-1.5 bg-saffron-500 hover:bg-saffron-400 text-slate-950 font-extrabold text-[11px] sm:text-xs rounded-xl flex items-center space-x-1 shadow transition"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{isHindi ? 'कार्ड (PNG)' : 'Download (PNG)'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl border border-slate-700 transition"
              title="Print Pass"
            >
              <Printer className="w-4 h-4" />
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
          
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-2 border-saffron-500/60 rounded-2xl p-5 shadow-2xl space-y-4 relative overflow-hidden">
            
            {/* Header Badge */}
            <div className="flex items-center justify-between border-b border-saffron-500/30 pb-3">
              <div className="flex items-center space-x-2.5">
                <img src="/police-logo.png" alt="Badge" className="w-8 h-8 object-contain" />
                <div>
                  <div className="font-extrabold text-xs sm:text-sm text-saffron-400 uppercase tracking-wider">
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

              <div className="p-2.5 bg-slate-950/90 rounded-xl border border-slate-800 space-y-1">
                <div className="font-bold text-saffron-400">1. Right to Officer Identity & Station</div>
                <div className="text-slate-300 text-[11px]">
                  Police must wear visible name tags and badge numbers. Ask: "What is your name, badge number, and station?"
                </div>
              </div>

              <div className="p-2.5 bg-slate-950/90 rounded-xl border border-slate-800 space-y-1">
                <div className="font-bold text-saffron-400">2. Right to Remain Silent & Advocate (Art 20(3) & Sec 37 BNSS)</div>
                <div className="text-slate-300 text-[11px]">
                  You cannot be forced to self-incriminate or unlock your smartphone without warrant/grounds. Demand to speak to a lawyer.
                </div>
              </div>

              <div className="p-2.5 bg-slate-950/90 rounded-xl border border-slate-800 space-y-1">
                <div className="font-bold text-saffron-400">3. 24-Hour Magistrate Limit (Sec 58 BNSS / Art 22(2))</div>
                <div className="text-slate-300 text-[11px]">
                  Police MUST produce an arrested person before a Judicial Magistrate within 24 hours. Detention beyond 24 hours is ILLEGAL.
                </div>
              </div>

              <div className="p-2.5 bg-slate-950/90 rounded-xl border border-slate-800 space-y-1">
                <div className="font-bold text-saffron-400">4. Women Safeguards (Sec 43(5) BNSS / 46(4) CrPC)</div>
                <div className="text-slate-300 text-[11px]">
                  No arrest of females between sunset and sunrise without Magistrate written order. Search by female officers only.
                </div>
              </div>

              <div className="p-2.5 bg-slate-950/90 rounded-xl border border-slate-800 space-y-1">
                <div className="font-bold text-saffron-400">5. Mandatory FIR & Seizure Memo (Lalita Kumari SC Ruling)</div>
                <div className="text-slate-300 text-[11px]">
                  FIR registration is mandatory for cognizable crimes. Demand signed Panchnama/Seizure Memo for any confiscated property.
                </div>
              </div>
            </div>

            {/* Emergency Numbers Strip */}
            <div className="bg-slate-950 p-3 rounded-xl border border-saffron-500/30 flex flex-wrap justify-between items-center text-xs font-mono gap-2">
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
          <span>{isHindi ? 'अपनी फोन गैलरी में सेव करने के लिए PNG डाउनलोड करें' : 'Download PNG to save directly in your phone gallery'}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg"
          >
            {isHindi ? 'बंद करें' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
