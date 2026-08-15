import React from 'react';
import { ExternalLink, Scale, Github, Code, Shield } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface FooterProps {
  lang: Language;
  onOpenSOS: () => void;
  onOpenComplaintGen: () => void;
  onOpenStateDir: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenSOS,
  onOpenComplaintGen,
  onOpenStateDir
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="bg-navy-950 border-t border-slate-800/80 text-slate-400 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-3">
              <img
                src="/police-logo.png"
                alt="Police Logo"
                className="w-10 h-10 object-contain bg-navy-900 rounded-xl p-1 border border-saffron-500/40"
              />
              <span className="text-lg font-bold text-white tracking-tight">
                Know Your Police Rights India
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              A public educational legal initiative designed for Indian citizens to understand their constitutional rights and immediate action steps during any police interaction within 30 seconds.
            </p>
            <div className="flex items-center space-x-2 text-xs font-semibold text-saffron-400">
              <span>🇮🇳 Built for Independence Day Let's Code Challenge 2026</span>
            </div>
          </div>

          {/* Quick Tools (3 cols) */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Emergency Tools
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenSOS} className="hover:text-red-400 transition flex items-center space-x-1">
                  <span>🚨 30-Sec SOS Panic Mode</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenComplaintGen} className="hover:text-saffron-400 transition flex items-center space-x-1">
                  <span>✍️ Draft Formal Complaint to SP</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenStateDir} className="hover:text-emerald-400 transition flex items-center space-x-1">
                  <span>🏛️ State Police Directory</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Official Portals & Citations (4 cols) */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] flex items-center space-x-1">
              <Scale className="w-3.5 h-3.5 text-saffron-400" />
              <span>Official Government & Legal Sources</span>
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-saffron-400 transition flex items-center space-x-1"
                >
                  <span>India Code (BNSS 2023 & CrPC Acts)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-saffron-400 transition flex items-center space-x-1"
                >
                  <span>National Legal Services Authority (NALSA)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-saffron-400 transition flex items-center space-x-1"
                >
                  <span>Supreme Court of India (Landmark Rulings)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://hrcnet.nic.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-saffron-400 transition flex items-center space-x-1"
                >
                  <span>National Human Rights Commission (NHRC Portal)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 text-xs space-y-1 text-slate-300">
          <div className="font-bold text-saffron-400">{t.disclaimerTitle}</div>
          <p className="leading-relaxed text-[11px] text-slate-400">
            {t.disclaimerText}
          </p>
        </div>

        {/* Bottom Bar with User's Requested Copyright & GitHub Link */}
        <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div className="font-medium text-slate-300">
            © 2026 Know Your Police Rights India. Public Educational Project.
          </div>
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/SoumyaSagarNayak"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-saffron-500/50 rounded-xl text-xs font-semibold text-slate-200 hover:text-white transition flex items-center space-x-2 shadow-sm"
            >
              <Github className="w-4 h-4 text-saffron-400" />
              <span>https://github.com/SoumyaSagarNayak</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
