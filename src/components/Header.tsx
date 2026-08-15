import React from 'react';
import { AlertCircle, FileText, MapPin, Globe, Bot, Download, HelpCircle } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenSOS: () => void;
  onOpenComplaintGen: () => void;
  onOpenStateDir: () => void;
  onOpenAIGuide: () => void;
  onOpenRightsCard: () => void;
  onOpenWizard: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onSelectLang,
  onOpenSOS,
  onOpenComplaintGen,
  onOpenStateDir,
  onOpenAIGuide,
  onOpenRightsCard,
  onOpenWizard
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <header className="sticky top-0 z-40 bg-navy-950/95 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 min-h-[64px] gap-2">
          
          {/* Logo & Brand Title */}
          <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0 flex-1 pr-2">
            {/* Custom Police Badge Logo */}
            <div className="relative group shrink-0">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-saffron-500 via-amber-400 to-emerald-400 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <img
                src="/police-logo.png"
                alt="Police Rights Logo"
                className="relative w-9 h-9 sm:w-11 sm:h-11 object-contain bg-navy-900 rounded-xl p-1 shadow-lg border border-saffron-500/40"
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center space-x-2">
                <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold text-white tracking-tight truncate max-w-[160px] xs:max-w-[200px] sm:max-w-xs md:max-w-sm lg:max-w-none">
                  {t.appName}
                </h1>
                <span className="hidden xl:inline-block px-2 py-0.5 text-[10px] font-extrabold bg-saffron-500/20 text-saffron-400 border border-saffron-500/30 rounded-full whitespace-nowrap">
                  BNSS 2023 & CrPC
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden lg:block truncate max-w-sm xl:max-w-md">
                {t.tagline}
              </p>
            </div>
          </div>

          {/* Action Buttons & Language Selector */}
          <div className="flex items-center space-x-1.5 sm:space-x-2.5 shrink-0">
            
            {/* SOS Emergency Button */}
            <button
              onClick={onOpenSOS}
              className="px-2.5 py-1.5 sm:px-3.5 sm:py-2 bg-gradient-to-r from-red-600 via-red-500 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-red-600/30 border border-red-400/40 transition-all flex items-center space-x-1.5 animate-pulse-slow cursor-pointer shrink-0"
            >
              <AlertCircle className="w-4 h-4 text-yellow-300 shrink-0" />
              <span className="hidden xs:inline">SOS PANIC</span>
              <span className="xs:hidden">SOS</span>
            </button>

            {/* Offline Wallet Rights Card Button */}
            <button
              onClick={onOpenRightsCard}
              className="hidden lg:flex items-center space-x-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-saffron-400 border border-saffron-500/30 text-xs font-bold rounded-xl transition shrink-0"
              title="Download Offline Rights Card"
            >
              <Download className="w-4 h-4 text-saffron-400 shrink-0" />
              <span>Offline Pass</span>
            </button>

            {/* Decision Wizard Button */}
            <button
              onClick={onOpenWizard}
              className="hidden xl:flex items-center space-x-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-xl transition shrink-0"
              title="Am I Being Detained? Wizard"
            >
              <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Am I Detained?</span>
            </button>

            {/* AI Guide Button */}
            <button
              onClick={onOpenAIGuide}
              className="hidden lg:flex items-center space-x-1.5 px-3 py-2 bg-saffron-500/10 hover:bg-saffron-500/20 text-saffron-300 text-xs font-extrabold rounded-xl border border-saffron-500/30 transition shrink-0"
              title="AI Legal Assistant"
            >
              <Bot className="w-4 h-4 text-saffron-400 shrink-0" />
              <span>AI Guide</span>
            </button>

            {/* Complaint Generator Button */}
            <button
              onClick={onOpenComplaintGen}
              className="hidden 2xl:flex items-center space-x-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700/80 transition shrink-0"
              title="Draft Official Complaint Letter"
            >
              <FileText className="w-4 h-4 text-saffron-400 shrink-0" />
              <span>Draft SP Complaint</span>
            </button>

            {/* State Directory Button */}
            <button
              onClick={onOpenStateDir}
              className="hidden md:flex items-center space-x-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700/80 transition shrink-0"
              title="State Police Complaints Directory"
            >
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Directory</span>
            </button>

            {/* Language Switcher */}
            <div className="relative flex items-center bg-slate-900 border border-slate-700/80 rounded-xl px-2 py-1.5 shrink-0">
              <Globe className="w-3.5 h-3.5 text-saffron-400 mr-1 shrink-0" />
              <select
                value={currentLang}
                onChange={(e) => onSelectLang(e.target.value as Language)}
                className="bg-transparent text-xs font-bold text-slate-200 focus:outline-none cursor-pointer pr-1"
              >
                <option value="en" className="bg-slate-900 text-slate-200">English</option>
                <option value="hi" className="bg-slate-900 text-slate-200">हिंदी (Hindi)</option>
                <option value="mr" className="bg-slate-900 text-slate-200">मराठी (Marathi)</option>
                <option value="ta" className="bg-slate-900 text-slate-200">தமிழ் (Tamil)</option>
                <option value="bn" className="bg-slate-900 text-slate-200">বাংলা (Bengali)</option>
                <option value="te" className="bg-slate-900 text-slate-200">తెలుగు (Telugu)</option>
                <option value="kn" className="bg-slate-900 text-slate-200">ಕನ್ನಡ (Kannada)</option>
              </select>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};
