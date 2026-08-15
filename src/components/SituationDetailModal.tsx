import React, { useState } from 'react';
import { Situation } from '../data/situations';
import { Language, TRANSLATIONS } from '../data/translations';
import { 
  X, CheckCircle, AlertTriangle, ShieldCheck, Scale, 
  Share2, Copy, FileText, ExternalLink, Volume2, VolumeX, Check
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-navy-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-100">
        
        {/* Modal Header */}
        <div className="bg-slate-950 p-5 border-b border-slate-800 flex items-start justify-between">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 bg-saffron-500/20 text-saffron-400 border border-saffron-500/30 text-xs font-bold uppercase rounded-full">
              {situation.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
              {situation.title}
            </h2>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleSpeak}
              className={`p-2 rounded-xl text-xs font-semibold border flex items-center space-x-1 transition ${
                isSpeaking ? 'bg-amber-500 text-navy-950 border-amber-400' : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
              }`}
              title="Listen Speech Narration"
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

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Section 1: What is Happening? */}
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-xl p-4 sm:p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-saffron-400 mb-1.5">
              1. What is Happening? (Situation Overview)
            </h3>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
              {situation.shortSummary}
            </p>
          </div>

          {/* Section 2: Your Rights & Legal Sections (BNSS 2023 & CrPC) */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <Scale className="w-4 h-4 text-saffron-400" />
              <span>{t.yourRights}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {situation.rights.map((right, idx) => (
                <div key={idx} className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded">
                      {right.newLaw}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    Historical Code: {right.oldLaw}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {right.description}
                  </p>
                  {right.landmarkCase && (
                    <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded text-xs text-amber-300 font-semibold italic">
                      Supreme Court Ruling: {right.landmarkCase}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: What You Should Do Right Now */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>{t.whatToDo}</span>
            </h3>

            <div className="space-y-2">
              {situation.whatToDo.map((todo, idx) => (
                <div key={idx} className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl flex items-start space-x-3 text-xs sm:text-sm text-slate-200">
                  <span className="flex-shrink-0 w-5 h-5 bg-emerald-500 text-navy-950 font-bold text-xs rounded-full flex items-center justify-center mt-0.5">
                    ✓
                  </span>
                  <span>{todo}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: What You Should Avoid Doing */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-rose-400 uppercase tracking-wider flex items-center space-x-2">
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

          {/* Section 5: Where & How to Complain */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>{t.whereToComplain}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {situation.whereToComplain.map((comp, idx) => (
                <div key={idx} className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                  <div className="font-bold text-xs sm:text-sm text-white">{comp.authority}</div>
                  <div className="text-xs text-slate-300">{comp.action}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6 & 7: Evidence & Next Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
              <h4 className="text-xs font-bold text-saffron-400 uppercase tracking-wider">
                {t.evidenceToKeep}
              </h4>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                {situation.evidenceToKeep.map((ev, i) => (
                  <li key={i}>{ev}</li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                {t.nextSteps}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {situation.nextSteps}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="bg-slate-950 p-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              if (onOpenComplaintGenWithSit) {
                onOpenComplaintGenWithSit(situation.id);
              }
            }}
            className="w-full sm:w-auto px-4 py-2.5 bg-gradient-to-r from-saffron-600 to-amber-600 hover:from-saffron-500 hover:to-amber-500 text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg flex items-center justify-center space-x-2"
          >
            <FileText className="w-4 h-4" />
            <span>Draft Formal Complaint to SP / PCA</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold rounded-xl"
          >
            Close View
          </button>
        </div>

      </div>
    </div>
  );
};
