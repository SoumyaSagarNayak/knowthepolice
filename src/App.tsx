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
  Sparkles, ShieldCheck, Bot, Download, HelpCircle, CheckSquare, GitMerge,
  ArrowRight, Shield
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

  // Quick search pill suggestions
  const searchPills = [
    { label: 'Vehicle Search', query: 'vehicle' },
    { label: 'FIR Refusal', query: 'fir' },
    { label: 'Women Rights', query: 'women' },
    { label: 'Bribe Request', query: 'bribe' },
    { label: 'Phone Inspection', query: 'phone' },
    { label: 'Night Arrest', query: 'arrest' }
  ];

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
    <div className="dark bg-mesh-pattern text-slate-100 min-h-screen font-['Plus_Jakarta_Sans',sans-serif] antialiased selection:bg-saffron-500 selection:text-slate-950">
      
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

      {/* Spacious, De-congested Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-14 sm:pt-16 sm:pb-20 border-b border-slate-800/60">
        
        {/* Glow backdrop decorative blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-saffron-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 sm:space-y-8">
          
          {/* Logo Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-900/90 border border-saffron-500/30 rounded-full shadow-lg backdrop-blur-md"
          >
            <img
              src="/police-logo.png"
              alt="Police Rights Badge"
              className="w-5 h-5 object-contain"
            />
            <span className="text-xs font-extrabold text-saffron-400">
              Citizens Legal Defense Portal • Bharatiya Nagarik Suraksha Sanhita (BNSS 2023)
            </span>
          </motion.div>

          {/* Clean Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.15]"
          >
            Know Your <span className="text-gradient-saffron font-black">Police Rights</span> in 30 Seconds
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            {t.tagline}
          </motion.p>

          {/* Spacious Search Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto space-y-3"
          >
            <div className="relative flex items-center bg-slate-900/95 border-2 border-slate-700/80 focus-within:border-saffron-500 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 glow-saffron p-1">
              <Search className="w-5 h-5 text-saffron-400 ml-4 flex-shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full py-3 sm:py-4 px-3 bg-transparent text-sm sm:text-base text-white focus:outline-none placeholder-slate-400"
              />
              {searchTerm ? (
                <button
                  onClick={() => setSearchTerm('')}
                  className="px-4 text-xs font-bold text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              ) : (
                <span className="hidden sm:block text-[11px] font-mono text-slate-400 px-3 py-1 bg-slate-800 rounded-lg mr-2 border border-slate-700">
                  Search 12+ Scenarios
                </span>
              )}
            </div>

            {/* Suggested Pill Tags */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
              <span className="text-xs font-semibold text-slate-400 mr-1 hidden sm:inline">Popular:</span>
              {searchPills.map((pill) => (
                <button
                  key={pill.query}
                  onClick={() => setSearchTerm(pill.query)}
                  className={`px-3 py-1 text-xs rounded-full border transition-all ${
                    searchTerm === pill.query
                      ? 'bg-saffron-500 text-navy-950 border-saffron-400 font-bold'
                      : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-600 hover:text-white'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Interactive Tool Suite (De-congested, Organized Showcase Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-saffron-400" />
              <span>Instant Legal Tools</span>
            </h2>
            <p className="text-xs text-slate-400">Citizen rights calculators, checklists & generators</p>
          </div>
          <button
            onClick={() => setIsRightsCardOpen(true)}
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold rounded-xl transition"
          >
            <Download className="w-3.5 h-3.5 text-saffron-400" />
            <span>Download Offline Card</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: AI Assistant */}
          <div 
            onClick={() => setIsAIGuideOpen(true)}
            className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/90 border border-amber-500/30 hover:border-amber-500/60 transition-all cursor-pointer group shadow-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors mb-1">
              AI Legal Assistant
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Ask any police interaction scenario and get instant BNSS & CrPC legal advice.
            </p>
            <span className="text-xs font-bold text-amber-400 flex items-center space-x-1">
              <span>Launch AI Assistant</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>

          {/* Card 2: D.K. Basu Checklist */}
          <div 
            onClick={() => setIsChecklistOpen(true)}
            className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/90 border border-emerald-500/30 hover:border-emerald-500/60 transition-all cursor-pointer group shadow-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <CheckSquare className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors mb-1">
              D.K. Basu Arrest Rules
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              11 mandatory Supreme Court guidelines police MUST follow during arrest.
            </p>
            <span className="text-xs font-bold text-emerald-400 flex items-center space-x-1">
              <span>View 11 Guidelines</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>

          {/* Card 3: Complaint Generator */}
          <div 
            onClick={() => handleOpenComplaintForSituation('fir-refusal')}
            className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/90 border border-purple-500/30 hover:border-purple-500/60 transition-all cursor-pointer group shadow-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors mb-1">
              Complaint Generator
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Draft formal legal complaints against police misconduct ready for print.
            </p>
            <span className="text-xs font-bold text-purple-400 flex items-center space-x-1">
              <span>Draft Legal Letter</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>

          {/* Card 4: State Directory */}
          <div 
            onClick={() => setIsStateDirOpen(true)}
            className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/90 border border-teal-500/30 hover:border-teal-500/60 transition-all cursor-pointer group shadow-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-teal-400 transition-colors mb-1">
              State Police Complaints Authority
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Direct contacts & address directory for 28 Indian States & UTs.
            </p>
            <span className="text-xs font-bold text-teal-400 flex items-center space-x-1">
              <span>Browse Directory</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </section>

      {/* Emergency Helplines Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="p-2.5 bg-red-950/60 border border-red-800/80 rounded-xl text-red-400 shrink-0 hidden sm:block">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
                24x7 Government Helpline Directory
              </h4>
              <p className="text-[11px] text-slate-400">Direct one-tap emergency numbers for instant protection</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs w-full md:w-auto">
            <a href="tel:112" className="px-3 py-2 bg-red-950/80 hover:bg-red-900 border border-red-800/80 rounded-xl font-bold text-red-300 transition flex items-center space-x-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-red-400" />
              <span>112 Emergency</span>
            </a>
            <a href="tel:181" className="px-3 py-2 bg-rose-950/80 hover:bg-rose-900 border border-rose-800/80 rounded-xl font-bold text-rose-300 transition flex items-center space-x-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-rose-400" />
              <span>181 Women</span>
            </a>
            <a href="tel:1064" className="px-3 py-2 bg-amber-950/80 hover:bg-amber-900 border border-amber-800/80 rounded-xl font-bold text-amber-300 transition flex items-center space-x-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>1064 Anti-Bribe</span>
            </a>
            <a href="tel:15100" className="px-3 py-2 bg-blue-950/80 hover:bg-blue-900 border border-blue-800/80 rounded-xl font-bold text-blue-300 transition flex items-center space-x-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
              <span>15100 Legal Aid</span>
            </a>
            <a href="tel:14449" className="px-3 py-2 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-800/80 rounded-xl font-bold text-emerald-300 transition flex items-center space-x-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>14449 Cyber</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        
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
                  : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Situations Grid */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
              <ShieldCheck className="w-6 h-6 text-saffron-400" />
              <span>Select Your Police Situation</span>
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono text-slate-300 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-800 shadow-inner">
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
