import React, { useState } from 'react';
import { Situation } from '../data/situations';
import { Language, TRANSLATIONS } from '../data/translations';
import { 
  X, CheckCircle, AlertTriangle, ShieldCheck, Scale, 
  Share2, Copy, FileText, ExternalLink, Volume2, VolumeX, Check, Download
} from 'lucide-react';

interface SituationDetailModalProps {
  situation: Situation | null;
  onClose: () => void;
  lang: Language;
  onOpenComplaintGenWithSit?: (sitId: string) => void;
}

export const SituationDetailModal: React.FC<SituationDetailModalProps> = ({
  situation,
  onClose,
  lang,
  onOpenComplaintGenWithSit
}) => {
  if (!situation) return null;

  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleCopyCard = () => {
    const textToCopy = `Know Your Police Rights - ${situation.title}
Summary: ${situation.shortSummary}
Top Rights: ${situation.rights.map(r => r.newLaw + ': ' + r.description).join('\n')}
What To Do: ${situation.whatToDo.join(', ')}
Legal Helpline: NALSA 15100 / Emergency 112`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const speechText = `${situation.title}. ${situation.shortSummary}. Rights: ${situation.rights[0]?.description}. What to do: ${situation.whatToDo.slice(0, 2).join('. ')}`;
    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm flex justify-end">
      
      {/* Overlay backdrop */}
      <div 
        onClick={() => {
          if (isSpeaking) window.speechSynthesis.cancel();
          onClose();
        }}
        className="absolute inset-0" 
      />

      {/* Slide-over Drawer Panel */}
      <div className="relative w-full max-w-2xl bg-slate-900 border-l border-slate-700/80 shadow-2xl h-full flex flex-col z-10 text-slate-100 animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="bg-slate-950 p-5 border-b border-slate-800 flex items-start justify-between flex-shrink-0">
          <div className="space-y-1 pr-4">
            <span className="px-2.5 py-0.5 bg-saffron-500/20 text-saffron-400 border border-saffron-500/30 text-[11px] font-bold uppercase rounded-full">
              {situation.category}
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
              {situation.title}
            </h2>
          </div>

          <div className="flex items-center space-x-2 flex-shrink-0">
            <button
              onClick={handleSpeak}
              className={`p-2 rounded-xl text-xs font-semibold border flex items-center space-x-1 transition ${
                isSpeaking ? 'bg-amber-500 text-slate-950 border-amber-400 animate-pulse' : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
              }`}
              title="Listen Audio Reader"
            >
              {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <button
              onClick={handleCopyCard}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl border border-slate-700 transition"
              title="Copy Summary Rights Card"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                if (isSpeaking) window.speechSynthesis.cancel();
                onClose();
              }}
              className="p-2 text-slate-400 hover:text-white bg-slate-800/60 rounded-xl hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer Content */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto flex-1">
          
          {/* Section 1: Overview */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 sm:p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-saffron-400 mb-1">
              Situation Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {situation.shortSummary}
            </p>
          </div>

          {/* Section 2: Legal Rights & BNSS 2023 Codes */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold text-white uppercase tracking-wider flex items-center space-x-2">
              <Scale className="w-4 h-4 text-saffron-400" />
              <span>{t.yourRights}</span>
            </h3>

            <div className="space-y-3">
              {situation.rights.map((right, idx) => (
                <div key={idx} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-lg">
                      {right.newLaw}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Historical Code: {right.oldLaw}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {right.description}
                  </p>
                  {right.landmarkCase && (
                    <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-300 font-semibold italic">
                      Supreme Court Ruling: {right.landmarkCase}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Recommended Actions */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>{t.whatToDo}</span>
            </h3>

            <div className="space-y-2">
              {situation.whatToDo.map((todo, idx) => (
                <div key={idx} className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl flex items-start space-x-3 text-xs sm:text-sm text-slate-200">
                  <span className="flex-shrink-0 w-5 h-5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-full flex items-center justify-center mt-0.5">
                    ✓
                  </span>
                  <span>{todo}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: What to Avoid */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold text-rose-400 uppercase tracking-wider flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>{t.whatToAvoid}</span>
            </h3>

            <div className="space-y-2">
              {situation.whatToAvoid.map((avoid, idx) => (
                <div key={idx} className="p-3 bg-rose-950/30 border border-rose-800/40 rounded-xl flex items-start space-x-3 text-xs sm:text-sm text-slate-200">
                  <span className="flex-shrink-0 w-5 h-5 bg-rose-500 text-white font-bold text-xs rounded-full flex items-center justify-center mt-0.5">
                    ✕
                  </span>
                  <span>{avoid}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Where to Complain */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold text-blue-400 uppercase tracking-wider flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>{t.whereToComplain}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {situation.whereToComplain.map((comp, idx) => (
                <div key={idx} className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                  <div className="font-bold text-xs text-white">{comp.authority}</div>
                  <div className="text-xs text-slate-300">{comp.action}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Drawer Footer Actions */}
        <div className="bg-slate-950 p-4 border-t border-slate-800 flex items-center justify-between gap-3 flex-shrink-0">
          <button
            onClick={() => {
              if (isSpeaking) window.speechSynthesis.cancel();
              onClose();
              if (onOpenComplaintGenWithSit) {
                onOpenComplaintGenWithSit(situation.id);
              }
            }}
            className="px-4 py-2.5 bg-saffron-500 hover:bg-saffron-400 text-slate-950 text-xs font-extrabold rounded-xl shadow-lg flex items-center space-x-2 transition"
          >
            <FileText className="w-4 h-4" />
            <span>Draft SP Complaint →</span>
          </button>

          <button
            onClick={() => {
              if (isSpeaking) window.speechSynthesis.cancel();
              onClose();
            }}
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition"
          >
            Close Drawer
          </button>
        </div>

      </div>
    </div>
  );
};
