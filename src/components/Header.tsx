import React, { useState, useRef, useEffect } from 'react';
import { 
  AlertCircle, FileText, MapPin, Globe, Bot, Download, 
  HelpCircle, CheckSquare, GitMerge, Scale, ChevronDown, Sparkles, ShieldCheck 
} from 'lucide-react';
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
  onOpenChecklist: () => void;
  onOpenFlowchart: () => void;
  onOpenLegalRefs: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onSelectLang,
  onOpenSOS,
  onOpenComplaintGen,
  onOpenStateDir,
  onOpenAIGuide,
  onOpenRightsCard,
  onOpenWizard,
  onOpenChecklist,
  onOpenFlowchart,
  onOpenLegalRefs
}) => {
  const t = TRANSLATIONS[currentLang];
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsToolsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toolMenuItems = [
    {
      icon: Bot,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10 border-amber-500/30',
      title: 'AI Rights Assistant',
      desc: 'Ask any situation for legal advice',
      action: () => { onOpenAIGuide(); setIsToolsOpen(false); }
    },
    {
      icon: CheckSquare,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/30',
      title: 'D.K. Basu Arrest Checklist',
      desc: '11 mandatory rules police must follow',
      action: () => { onOpenChecklist(); setIsToolsOpen(false); }
    },
    {
      icon: HelpCircle,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/30',
      title: '"Am I Detained?" Wizard',
      desc: 'Interactive detention decision helper',
      action: () => { onOpenWizard(); setIsToolsOpen(false); }
    },
    {
      icon: FileText,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10 border-purple-500/30',
      title: 'Official Complaint Generator',
      desc: 'Draft legal letters to SP / SHRC',
      action: () => { onOpenComplaintGen(); setIsToolsOpen(false); }
    },
    {
      icon: GitMerge,
      color: 'text-saffron-400',
      bgColor: 'bg-saffron-500/10 border-saffron-500/30',
      title: 'FIR Refusal Flowchart',
      desc: 'Step-by-step escalation hierarchy',
      action: () => { onOpenFlowchart(); setIsToolsOpen(false); }
    },
    {
      icon: Scale,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10 border-amber-500/30',
      title: 'Supreme Court Case Laws',
      desc: 'Key legal precedents & citations',
      action: () => { onOpenLegalRefs(); setIsToolsOpen(false); }
    },
    {
      icon: MapPin,
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10 border-teal-500/30',
      title: 'State Complaints Directory',
      desc: 'Contact numbers for 28 States & UTs',
      action: () => { onOpenStateDir(); setIsToolsOpen(false); }
    },
    {
      icon: Download,
      color: 'text-rose-400',
      bgColor: 'bg-rose-500/10 border-rose-500/30',
      title: 'Offline Wallet Pass Card',
      desc: 'Download pocket rights card',
      action: () => { onOpenRightsCard(); setIsToolsOpen(false); }
    }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#080d19]/95 backdrop-blur-xl border-b border-slate-800/80 shadow-lg">
      {/* Top Tricolor Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#FF671F] via-[#FFFFFF] to-[#046A38]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5 sm:py-3 min-h-[60px] gap-1.5 sm:gap-3">
          
          {/* Logo & Brand Title */}
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 shrink">
            <div className="relative shrink-0">
              <img
                src="/police-logo.png"
                alt="Police Rights Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain bg-slate-900 rounded-xl p-1 border border-slate-700/80 shadow-md"
              />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 rounded-full border-2 border-slate-950 animate-pulse" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center space-x-1.5">
                <h1 className="text-xs sm:text-lg md:text-xl font-black text-white tracking-tight truncate">
                  {t.appName}
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-extrabold bg-saffron-500/10 text-saffron-400 border border-saffron-500/30 rounded-full">
                  BNSS 2023 & CrPC
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden md:block">
                {t.tagline}
              </p>
            </div>
          </div>

          {/* Clean Right Actions Suite */}
          <div className="flex items-center space-x-1 sm:space-x-3 shrink-0">
            
            {/* Quick Tools Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition flex items-center space-x-1 sm:space-x-1.5 border shadow-sm ${
                  isToolsOpen 
                    ? 'bg-saffron-500 text-navy-950 border-saffron-400' 
                    : 'bg-slate-900/90 text-slate-200 border-slate-700/80 hover:bg-slate-800 hover:border-slate-600'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-saffron-400 shrink-0" />
                <span className="hidden sm:inline">Legal Tools Hub</span>
                <span className="sm:hidden">Tools</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isToolsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isToolsOpen && (
                <div className="absolute right-0 mt-2 w-[90vw] max-w-sm sm:w-96 bg-slate-900/95 border border-slate-700/90 rounded-2xl shadow-2xl backdrop-blur-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-saffron-400 flex items-center space-x-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Citizen Legal Tools Suite</span>
                    </span>
                    <span className="text-[10px] text-slate-400">8 Utilities</span>
                  </div>

                  <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
                    {toolMenuItems.map((item, idx) => {
                      const IconComp = item.icon;
                      return (
                        <button
                          key={idx}
                          onClick={item.action}
                          className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800/80 transition flex items-start space-x-3 group"
                        >
                          <div className={`p-2 rounded-lg border ${item.bgColor} shrink-0 group-hover:scale-105 transition-transform`}>
                            <IconComp className={`w-4 h-4 ${item.color}`} />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-100 group-hover:text-saffron-400 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-slate-400 line-clamp-1">
                              {item.desc}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Language Selector */}
            <div className="relative flex items-center bg-slate-900/90 border border-slate-700/80 rounded-xl px-1.5 sm:px-2.5 py-1 sm:py-1.5 shrink-0 shadow-sm">
              <Globe className="w-3.5 h-3.5 text-slate-400 mr-1 sm:mr-1.5 shrink-0" />
              <select
                value={currentLang}
                onChange={(e) => onSelectLang(e.target.value as Language)}
                className="bg-transparent text-[11px] sm:text-xs font-semibold text-slate-200 focus:outline-none cursor-pointer pr-0.5 sm:pr-1 max-w-[65px] sm:max-w-none truncate"
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

            {/* Red SOS Button */}
            <button
              onClick={onOpenSOS}
              className="px-2 sm:px-3 py-1.5 sm:py-2 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-extrabold text-[11px] sm:text-xs rounded-xl shadow-lg shadow-red-900/40 border border-red-400/40 transition-all transform hover:scale-105 active:scale-95 flex items-center space-x-1 sm:space-x-1.5 shrink-0"
            >
              <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white animate-pulse shrink-0" />
              <span className="font-extrabold tracking-wide">{t.emergencyBtn}</span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};
