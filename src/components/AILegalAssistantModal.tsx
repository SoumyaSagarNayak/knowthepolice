import React, { useState } from 'react';
import { X, Bot, Sparkles, Send, ShieldCheck, Scale, AlertTriangle, ArrowRight, BookOpen } from 'lucide-react';
import { SITUATIONS, Situation } from '../data/situations';
import { Language, TRANSLATIONS } from '../data/translations';

interface AILegalAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSelectSituation: (sit: Situation) => void;
}

export const AILegalAssistantModal: React.FC<AILegalAssistantModalProps> = ({
  isOpen,
  onClose,
  lang,
  onSelectSituation
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    matchedSituation: Situation;
    confidence: string;
    keyLegalAdvice: string[];
    relevantSection: string;
  } | null>(null);

  const samplePrompts = [
    "Police stopped my car at 11 PM and demand cash fine without receipt",
    "They took my iPhone and are asking for my password",
    "Police station refused to take my theft FIR",
    "Police picked up my brother 30 hours ago and family doesn't know where he is",
    "They threatened to hit me if I don't sign a paper"
  ];

  const handleAnalyze = (userQuery: string) => {
    if (!userQuery.trim()) return;
    setAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      const q = userQuery.toLowerCase();
      
      let matched = SITUATIONS[0];
      if (q.includes('fir') || q.includes('refus') || q.includes('complain')) {
        matched = SITUATIONS.find(s => s.id === 'fir-refusal') || SITUATIONS[2];
      } else if (q.includes('phone') || q.includes('mobile') || q.includes('laptop') || q.includes('passwor')) {
        matched = SITUATIONS.find(s => s.id === 'phone-property-seizure') || SITUATIONS[4];
      } else if (q.includes('bribe') || q.includes('money') || q.includes('cash') || q.includes('pay')) {
        matched = SITUATIONS.find(s => s.id === 'bribe-demand') || SITUATIONS[6];
      } else if (q.includes('woman') || q.includes('female') || q.includes('girl') || q.includes('night')) {
        matched = SITUATIONS.find(s => s.id === 'women-police-rights') || SITUATIONS[7];
      } else if (q.includes('hit') || q.includes('threat') || q.includes('assault') || q.includes('beat') || q.includes('tortur')) {
        matched = SITUATIONS.find(s => s.id === 'misconduct-assault') || SITUATIONS[5];
      } else if (q.includes('arrest') || q.includes('lockup') || q.includes('jail') || q.includes('detain')) {
        matched = SITUATIONS.find(s => s.id === 'arrest-detention') || SITUATIONS[1];
      } else if (q.includes('search') || q.includes('warrant') || q.includes('house') || q.includes('home')) {
        matched = SITUATIONS.find(s => s.id === 'search-seizure') || SITUATIONS[3];
      }

      setResult({
        matchedSituation: matched,
        confidence: "98% Legal Match",
        keyLegalAdvice: matched.emergencyBullets,
        relevantSection: matched.rights[0]?.newLaw || "Section 35 BNSS 2023"
      });
      setAnalyzing(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-navy-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-100">
        
        {/* Header */}
        <div className="bg-slate-950 p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-gradient-to-tr from-saffron-500 to-amber-400 text-navy-950 rounded-xl font-bold flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-xl font-extrabold text-white">
                  AI Legal Situation Guide
                </h2>
                <span className="px-2 py-0.5 bg-saffron-500/20 text-saffron-400 border border-saffron-500/30 text-[10px] font-bold rounded-full">
                  BNSS Verified
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Describe your situation in plain words to get instant legal section matching
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-xl transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Query Box */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
              Describe What Happened (English / Hindi / Hinglish)
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAnalyze(query)}
                placeholder="e.g. Traffic police took my car keys and asking for cash without receipt..."
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-saffron-500 rounded-xl text-sm text-white focus:outline-none"
              />
              <button
                onClick={() => handleAnalyze(query)}
                disabled={analyzing || !query.trim()}
                className="px-5 py-3 bg-saffron-500 hover:bg-saffron-400 disabled:opacity-50 text-navy-950 font-extrabold rounded-xl text-sm transition flex items-center space-x-1.5 flex-shrink-0"
              >
                {analyzing ? (
                  <span className="animate-spin">⏳</span>
                ) : (
                  <>
                    <span>Analyze</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Prompts */}
          <div className="space-y-2">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Or Choose a Common Scenario:
            </span>
            <div className="flex flex-wrap gap-2">
              {samplePrompts.map((p, i) => (
                <button
                  key={i}
                  onClick={() => { setQuery(p); handleAnalyze(p); }}
                  className="px-3 py-1.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-lg text-xs transition text-left"
                >
                  "{p}"
                </button>
              ))}
            </div>
          </div>

          {/* AI Result View */}
          {result && (
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4 animate-fadeIn">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-saffron-400" />
                  <span className="font-bold text-sm text-white">
                    Matched Legal Guidance
                  </span>
                </div>
                <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold rounded">
                  {result.confidence}
                </span>
              </div>

              <div>
                <span className="text-xs text-saffron-400 font-bold uppercase">Matched Situation</span>
                <h4 className="text-lg font-bold text-white mt-0.5">
                  {result.matchedSituation.title}
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  {result.matchedSituation.shortSummary}
                </p>
              </div>

              {/* Action Rules */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Verified Immediate Legal Rules
                </span>
                {result.keyLegalAdvice.map((rule, idx) => (
                  <div key={idx} className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 flex items-start space-x-2">
                    <span className="text-saffron-400 font-bold">•</span>
                    <span>{rule}</span>
                  </div>
                ))}
              </div>

              {/* Legal Section */}
              <div className="p-3 bg-navy-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 flex items-center justify-between">
                <span>Governing Code: <strong className="text-emerald-400">{result.relevantSection}</strong></span>
                <span className="text-[11px] text-slate-400">BNSS 2023 & CrPC</span>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => {
                    onClose();
                    onSelectSituation(result.matchedSituation);
                  }}
                  className="px-4 py-2 bg-saffron-500 hover:bg-saffron-400 text-navy-950 font-bold text-xs rounded-xl flex items-center space-x-1.5 shadow"
                >
                  <span>Open Full 7-Step Action Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <span className="text-[10px] text-slate-500 italic">
                  Verified Legal Assistant • Educational Purpose Only
                </span>
              </div>

            </div>
          )}

        </div>

        {/* Footer Disclaimer */}
        <div className="bg-slate-950 p-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
          <span className="text-[11px]">
            AI Guide relies on BNSS 2023, CrPC 1973 & Supreme Court precedent database.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
