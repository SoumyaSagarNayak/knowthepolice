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
    <header className="sticky top-0 z-40 bg-[#080d19]/95 backdrop-blur-md border-b border-slate-800/80 shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 min-h-[64px] gap-2">
          
          {/* Logo & Brand Title */}
          <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0 flex-1 pr-2">
            <div className="relative shrink-0">
              <img
                src="/police-logo.png"
                alt="Police Rights Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain bg-slate-900 rounded-lg p-1 border border-slate-700/80"
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center space-x-2">
                <h1 className="text-sm sm:text-base md:text-lg font-bold text-white tracking-tight truncate max-w-[160px] xs:max-w-[200px] sm:max-w-xs md:max-w-sm lg:max-w-none">
                  {t.appName}
                </h1>
                <span className="hidden xl:inline-block px-2 py-0.5 text-[10px] font-semibold bg-slate-800 text-amber-400 border border-slate-700 rounded whitespace-nowrap">
                  BNSS 2023 & CrPC
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden lg:block truncate max-w-sm xl:max-w-md">
                {t.tagline}
              </p>
            </div>
          </div>

          {/* Action Buttons & Language Selector */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
            
            {/* SOS Emergency Button */}
            <button
              onClick={onOpenSOS}
              className="px-2.5 py-1.5 sm:px-3 sm:py-2 bg-red-700 hover:bg-red-600 text-white font-bold text-xs rounded-lg shadow border border-red-500/40 transition-colors flex items-center space-x-1.5 shrink-0"
            >
              <AlertCircle className="w-4 h-4 text-white shrink-0" />
              <span className="hidden xs:inline">{t.emergencyBtn}</span>
              <span className="xs:hidden">SOS</span>
            </button>

            {/* Offline Wallet Rights Card Button */}
            <button
              onClick={onOpenRightsCard}
              className="hidden lg:flex items-center space-x-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-xs font-medium rounded-lg transition shrink-0"
              title="Download Offline Rights Card"
            >
              <Download className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Offline Pass</span>
            </button>

            {/* Decision Wizard Button */}
            <button
              onClick={onOpenWizard}
              className="hidden xl:flex items-center space-x-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-xs font-medium rounded-lg transition shrink-0"
              title="Am I Being Detained? Wizard"
            >
              <HelpCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Am I Detained?</span>
            </button>

            {/* AI Guide Button */}
            <button
              onClick={onOpenAIGuide}
              className="hidden lg:flex items-center space-x-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30 text-xs font-semibold rounded-lg transition shrink-0"
              title="AI Legal Assistant"
            >
              <Bot className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>AI Guide</span>
            </button>

            {/* Complaint Generator Button */}
            <button
              onClick={onOpenComplaintGen}
              className="hidden 2xl:flex items-center space-x-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-medium rounded-lg border border-slate-700/80 transition shrink-0"
              title="Draft Official Complaint Letter"
            >
              <FileText className="w-3.5 h-3.5 text-slate-300 shrink-0" />
              <span>{t.complaintGeneratorBtn}</span>
            </button>

            {/* State Directory Button */}
            <button
              onClick={onOpenStateDir}
              className="hidden md:flex items-center space-x-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-medium rounded-lg border border-slate-700/80 transition shrink-0"
              title="State Police Complaints Directory"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Directory</span>
            </button>

            {/* Language Switcher */}
            <div className="relative flex items-center bg-slate-900 border border-slate-700/80 rounded-lg px-2 py-1.5 shrink-0">
              <Globe className="w-3.5 h-3.5 text-slate-400 mr-1 shrink-0" />
              <select
                value={currentLang}
                onChange={(e) => onSelectLang(e.target.value as Language)}
                className="bg-transparent text-xs font-medium text-slate-200 focus:outline-none cursor-pointer pr-1"
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
