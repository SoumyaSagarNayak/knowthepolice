import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { SituationCard } from './components/SituationCard';
import { SituationDetailModal } from './components/SituationDetailModal';
import { EmergencySOSModal } from './components/EmergencySOSModal';
import { ComplaintGeneratorModal } from './components/ComplaintGeneratorModal';
import { StateDirectoryModal } from './components/StateDirectoryModal';
import { AILegalAssistantModal } from './components/AILegalAssistantModal';
import { RightsCardModal } from './components/RightsCardModal';
import { DecisionWizardModal } from './components/DecisionWizardModal';
import { ArrestChecklistModal } from './components/ArrestChecklistModal';
import { EscalationFlowchartModal } from './components/EscalationFlowchartModal';
import { LegalReferencesModal } from './components/LegalReferencesModal';
import { MobileEmergencyBar } from './components/MobileEmergencyBar';
import { AIChatBotWidget } from './components/AIChatBotWidget';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

import { SITUATIONS, Situation } from './data/situations';
import { Language, TRANSLATIONS } from './data/translations';
import { 
  Search, ShieldAlert, PhoneCall, Scale, FileText, MapPin, 
  Sparkles, ShieldCheck, Bot, Download, HelpCircle, CheckSquare, GitMerge
} from 'lucide-react';
import { motion } from 'framer-motion';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [selectedSituation, setSelectedSituation] = useState<Situation | null>(null);
  
  const [isSOSOpen, setIsSOSOpen] = useState(false);
  const [isComplaintGenOpen, setIsComplaintGenOpen] = useState(false);
  const [complaintInitialSitId, setComplaintInitialSitId] = useState('fir-refusal');
  const [isStateDirOpen, setIsStateDirOpen] = useState(false);
  const [isAIGuideOpen, setIsAIGuideOpen] = useState(false);
  const [isRightsCardOpen, setIsRightsCardOpen] = useState(false);
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [isFlowchartOpen, setIsFlowchartOpen] = useState(false);
  const [isLegalRefsOpen, setIsLegalRefsOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  // Filter situations based on category pill & search term
  const filteredSituations = useMemo(() => {
    return SITUATIONS.filter((sit) => {
      const matchesCategory = categoryFilter === 'all' || sit.category === categoryFilter;
      const matchesSearch =
        sit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sit.shortSummary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sit.emergencyBullets.some(b => b.toLowerCase().includes(searchTerm.toLowerCase())) ||
        sit.rights.some(r => r.newLaw.toLowerCase().includes(searchTerm.toLowerCase()) || r.oldLaw.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [categoryFilter, searchTerm]);

  const handleOpenComplaintForSituation = (sitId?: string) => {
    if (sitId) setComplaintInitialSitId(sitId);
    setIsComplaintGenOpen(true);
  };

  return (
    <div className="dark bg-mesh-pattern text-slate-100 min-h-screen font-['Plus_Jakarta_Sans',sans-serif] antialiased">
      
      {/* Header Bar */}
      <Header
        currentLang={lang}
        onSelectLang={setLang}
        onOpenSOS={() => setIsSOSOpen(true)}
        onOpenComplaintGen={() => setIsComplaintGenOpen(true)}
        onOpenStateDir={() => setIsStateDirOpen(true)}
        onOpenAIGuide={() => setIsAIGuideOpen(true)}
        onOpenRightsCard={() => setIsRightsCardOpen(true)}
        onOpenWizard={() => setIsWizardOpen(true)}
        onOpenChecklist={() => setIsChecklistOpen(true)}
        onOpenFlowchart={() => setIsFlowchartOpen(true)}
        onOpenLegalRefs={() => setIsLegalRefsOpen(true)}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-10 sm:pt-14 sm:pb-16 border-b border-slate-800/80">
        
        {/* Glow backdrop decorative blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-saffron-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 sm:space-y-6">
          
          {/* Logo Badge in Hero */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2.5 px-4 py-2 bg-slate-900/90 border border-saffron-500/30 rounded-2xl shadow-xl backdrop-blur-md"
          >
            <img
              src="/police-logo.png"
              alt="Police Rights Badge"
              className="w-6 h-6 sm:w-7 sm:h-7 object-contain animate-subtle-float"
            />
            <span className="text-xs font-extrabold text-saffron-400">
              Independence Day Citizens Rights Portal • BNSS 2023 & CrPC
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight"
          >
            Know Your <span className="text-gradient-saffron font-black">Police Rights</span> in 30 Seconds
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed px-2"
          >
            {t.tagline}
          </motion.p>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto relative space-y-3"
          >
            <div className="relative flex items-center bg-slate-900/95 border-2 border-slate-700/80 focus-within:border-saffron-500 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 glow-saffron">
              <Search className="w-5 h-5 text-slate-400 ml-4 flex-shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full py-3.5 sm:py-4 px-3 bg-transparent text-xs sm:text-base text-white focus:outline-none placeholder-slate-400"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="px-4 text-xs font-bold text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* AI Assistant & Tool Quick Triggers */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              <button
                onClick={() => setIsAIGuideOpen(true)}
                className="px-3.5 py-1.5 bg-saffron-500/10 hover:bg-saffron-500/20 border border-saffron-500/30 text-saffron-300 text-xs font-bold rounded-xl transition flex items-center space-x-1.5 shadow-sm"
              >
                <Bot className="w-3.5 h-3.5 text-saffron-400" />
                <span>AI Situation Guide →</span>
              </button>

              <button
                onClick={() => setIsRightsCardOpen(true)}
                className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 text-xs font-bold rounded-xl transition flex items-center space-x-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-saffron-400" />
                <span>Download Offline Wallet Card</span>
              </button>

              <button
                onClick={() => setIsWizardOpen(true)}
                className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 border border-emerald-500/30 text-emerald-300 text-xs font-bold rounded-xl transition flex items-center space-x-1.5 shadow-sm"
              >
                <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>"Am I Detained?" Wizard</span>
              </button>

              <button
                onClick={() => setIsChecklistOpen(true)}
                className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 text-xs font-bold rounded-xl transition flex items-center space-x-1.5 shadow-sm"
              >
                <CheckSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>D.K. Basu Checklist</span>
              </button>

              <button
                onClick={() => setIsFlowchartOpen(true)}
                className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 text-xs font-bold rounded-xl transition flex items-center space-x-1.5 shadow-sm"
              >
                <GitMerge className="w-3.5 h-3.5 text-saffron-400" />
                <span>FIR Refusal Steps</span>
              </button>

              <button
                onClick={() => setIsLegalRefsOpen(true)}
                className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 text-xs font-bold rounded-xl transition flex items-center space-x-1.5 shadow-sm"
              >
                <Scale className="w-3.5 h-3.5 text-amber-400" />
                <span>Supreme Court Case Laws</span>
              </button>
            </div>
          </motion.div>

          {/* Live Statistics Counter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto pt-3 grid grid-cols-2 md:grid-cols-4 gap-2.5 text-center"
          >
            <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
              <div className="text-lg sm:text-xl font-extrabold text-saffron-400">12 Scenarios</div>
              <div className="text-[11px] text-slate-400">Situation Database</div>
            </div>
            <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
              <div className="text-lg sm:text-xl font-extrabold text-emerald-400">28 States & UTs</div>
              <div className="text-[11px] text-slate-400">Police Complaints Authority</div>
            </div>
            <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
              <div className="text-lg sm:text-xl font-extrabold text-amber-400">BNSS 2023 & CrPC</div>
              <div className="text-[11px] text-slate-400">Dual Legal Codes</div>
            </div>
            <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl col-span-2 md:col-span-1">
              <div className="text-lg sm:text-xl font-extrabold text-blue-400">7 Languages</div>
              <div className="text-[11px] text-slate-400">Multilingual & Voice Reader</div>
            </div>
          </motion.div>

          {/* 24x7 Emergency Helplines Strip */}
          <div className="max-w-4xl mx-auto pt-1 grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
            <a href="tel:112" className="p-2.5 bg-red-950/60 border border-red-800/80 hover:bg-red-900/80 rounded-xl text-center font-bold text-red-300 transition flex items-center justify-center space-x-1.5 shadow">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>112 Emergency</span>
            </a>
            <a href="tel:181" className="p-2.5 bg-rose-950/60 border border-rose-800/80 hover:bg-rose-900/80 rounded-xl text-center font-bold text-rose-300 transition flex items-center justify-center space-x-1.5 shadow">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>181 Women</span>
            </a>
            <a href="tel:1064" className="p-2.5 bg-amber-950/60 border border-amber-800/80 hover:bg-amber-900/80 rounded-xl text-center font-bold text-amber-300 transition flex items-center justify-center space-x-1.5 shadow">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>1064 Anti-Bribe</span>
            </a>
            <a href="tel:15100" className="p-2.5 bg-blue-950/60 border border-blue-800/80 hover:bg-blue-900/80 rounded-xl text-center font-bold text-blue-300 transition flex items-center justify-center space-x-1.5 shadow">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>15100 Legal Aid</span>
            </a>
            <a href="tel:14449" className="p-2.5 bg-emerald-950/60 border border-emerald-800/80 hover:bg-emerald-900/80 rounded-xl text-center font-bold text-emerald-300 transition flex items-center justify-center space-x-1.5 col-span-2 sm:col-span-1 shadow">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>14449 Cyber</span>
            </a>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Category Pill Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: t.allCategories },
            { id: 'street', label: t.streetCategory },
            { id: 'arrest', label: t.arrestCategory },
            { id: 'fir', label: t.firCategory },
            { id: 'search', label: t.searchCategory },
            { id: 'misconduct', label: t.misconductCategory },
            { id: 'women', label: t.womenCategory },
            { id: 'property', label: t.propertyCategory },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition border ${
                categoryFilter === cat.id
                  ? 'bg-saffron-500 text-navy-950 border-saffron-400 shadow-lg shadow-saffron-500/20 font-black'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Quick Toolbar for Generator & Directory on Mobile */}
        <div className="grid grid-cols-4 md:hidden gap-1.5 text-[11px]">
          <button
            onClick={() => setIsAIGuideOpen(true)}
            className="p-2 bg-slate-900 border border-slate-800 rounded-xl font-bold text-saffron-400 flex flex-col items-center justify-center"
          >
            <Bot className="w-4 h-4 mb-0.5" />
            <span>AI Guide</span>
          </button>

          <button
            onClick={() => setIsRightsCardOpen(true)}
            className="p-2 bg-slate-900 border border-slate-800 rounded-xl font-bold text-slate-200 flex flex-col items-center justify-center"
          >
            <Download className="w-4 h-4 mb-0.5 text-saffron-400" />
            <span>Pass</span>
          </button>

          <button
            onClick={() => setIsWizardOpen(true)}
            className="p-2 bg-slate-900 border border-slate-800 rounded-xl font-bold text-emerald-400 flex flex-col items-center justify-center"
          >
            <HelpCircle className="w-4 h-4 mb-0.5" />
            <span>Wizard</span>
          </button>

          <button
            onClick={() => setIsStateDirOpen(true)}
            className="p-2 bg-slate-900 border border-slate-800 rounded-xl font-bold text-slate-200 flex flex-col items-center justify-center"
          >
            <MapPin className="w-4 h-4 mb-0.5 text-emerald-400" />
            <span>Directory</span>
          </button>
        </div>

        {/* Situations Grid */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
              <ShieldCheck className="w-6 h-6 text-saffron-400" />
              <span>Select Your Police Situation</span>
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono text-slate-300 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 shadow-inner">
                Showing <strong className="text-saffron-400">{filteredSituations.length}</strong> of {SITUATIONS.length} scenarios {searchTerm ? `for "${searchTerm}"` : ''}
              </span>
            </div>
          </div>

          {filteredSituations.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-2xl space-y-3">
              <ShieldAlert className="w-10 h-10 text-saffron-400 mx-auto" />
              <h3 className="text-lg font-bold text-white">No situations match your search</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Try searching for terms like "bribe", "arrest", "night", "phone", "traffic", or "search".
              </p>
              <button
                onClick={() => { setSearchTerm(''); setCategoryFilter('all'); }}
                className="px-4 py-2 bg-saffron-500 text-navy-950 font-extrabold text-xs rounded-xl"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSituations.map((sit) => (
                <SituationCard
                  key={sit.id}
                  situation={sit}
                  lang={lang}
                  onSelect={setSelectedSituation}
                />
              ))}
            </div>
          )}
        </div>

        {/* Legal FAQ Section */}
        <FAQSection />

      </main>

      {/* Interactive AI Chatbot Widget (Floating Launcher) */}
      <AIChatBotWidget
        lang={lang}
        onOpenSOS={() => setIsSOSOpen(true)}
        onOpenComplaintGen={handleOpenComplaintForSituation}
        onOpenStateDir={() => setIsStateDirOpen(true)}
        onSelectSituation={setSelectedSituation}
      />

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenSOS={() => setIsSOSOpen(true)}
        onOpenComplaintGen={() => setIsComplaintGenOpen(true)}
        onOpenStateDir={() => setIsStateDirOpen(true)}
      />

      {/* Modals */}
      <SituationDetailModal
        situation={selectedSituation}
        onClose={() => setSelectedSituation(null)}
        lang={lang}
        onOpenComplaintGenWithSit={handleOpenComplaintForSituation}
      />

      <EmergencySOSModal
        isOpen={isSOSOpen}
        onClose={() => setIsSOSOpen(false)}
        lang={lang}
      />

      <ComplaintGeneratorModal
        isOpen={isComplaintGenOpen}
        onClose={() => setIsComplaintGenOpen(false)}
        lang={lang}
        initialSitId={complaintInitialSitId}
      />

      <StateDirectoryModal
        isOpen={isStateDirOpen}
        onClose={() => setIsStateDirOpen(false)}
        lang={lang}
      />

      <AILegalAssistantModal
        isOpen={isAIGuideOpen}
        onClose={() => setIsAIGuideOpen(false)}
        lang={lang}
        onSelectSituation={setSelectedSituation}
      />

      <RightsCardModal
        isOpen={isRightsCardOpen}
        onClose={() => setIsRightsCardOpen(false)}
        lang={lang}
      />

      <DecisionWizardModal
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
        lang={lang}
        onSelectSituation={setSelectedSituation}
        onOpenComplaintGen={handleOpenComplaintForSituation}
      />

      <ArrestChecklistModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
        lang={lang}
      />

      <EscalationFlowchartModal
        isOpen={isFlowchartOpen}
        onClose={() => setIsFlowchartOpen(false)}
        onOpenComplaintGen={() => handleOpenComplaintForSituation('fir-refusal')}
        lang={lang}
      />

      <LegalReferencesModal
        isOpen={isLegalRefsOpen}
        onClose={() => setIsLegalRefsOpen(false)}
        lang={lang}
      />

      {/* Mobile Emergency Dial Bar */}
      <MobileEmergencyBar />

    </div>
  );
};
