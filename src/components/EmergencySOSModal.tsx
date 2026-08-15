import React, { useState } from 'react';
import { X, Volume2, VolumeX, PhoneCall, ShieldAlert, CheckCircle2, AlertTriangle, Scale } from 'lucide-react';
import { SITUATIONS, Situation } from '../data/situations';
import { Language, TRANSLATIONS } from '../data/translations';

interface EmergencySOSModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const EmergencySOSModal: React.FC<EmergencySOSModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const [selectedSitId, setSelectedSitId] = useState<string>('police-stop-question');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const t = TRANSLATIONS[lang];

  const currentSituation = SITUATIONS.find((s) => s.id === selectedSitId) || SITUATIONS[0];

  const handleSpeakText = (text: string) => {
    if (!('speechSynthesis' in window)) {
      alert("Text-to-speech is not supported on this browser.");
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.rate = 0.95; // Slightly slower for clear understanding in stress

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.cancel(); // clear queue
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const textToRead = `${currentSituation.title}. Key Rules: ${currentSituation.emergencyBullets.join('. ')}. Your primary right under law: ${currentSituation.rights[0]?.description || ''}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-navy-900 border-2 border-red-500/80 rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-100">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-rose-700 p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-yellow-400 text-red-950 rounded-xl font-black animate-bounce">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-lg sm:text-2xl font-black text-white uppercase tracking-wide">
                30-SECOND EMERGENCY CRISIS MODE
              </h2>
              <p className="text-xs sm:text-sm text-red-100 font-medium">
                Immediate Action & Legal Rights in Active Police Interactions
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Audio Speech Button */}
            <button
              onClick={() => handleSpeakText(textToRead)}
              className={`p-2.5 rounded-xl font-bold text-xs flex items-center space-x-1.5 transition ${
                isSpeaking
                  ? 'bg-yellow-400 text-red-950 animate-pulse'
                  : 'bg-red-900/80 text-white border border-red-400/40 hover:bg-red-800'
              }`}
              title="Listen Audio Narration"
            >
              {isSpeaking ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              <span className="hidden sm:inline">{isSpeaking ? 'STOP AUDIO' : 'LISTEN'}</span>
            </button>

            <button
              onClick={() => {
                if (isSpeaking) window.speechSynthesis.cancel();
                onClose();
              }}
              className="p-2 text-red-200 hover:text-white bg-red-900/60 rounded-xl hover:bg-red-800 transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Quick Situation Selector */}
        <div className="bg-navy-950 p-3 border-b border-slate-800 flex space-x-2 overflow-x-auto scrollbar-none">
          {SITUATIONS.map((sit) => (
            <button
              key={sit.id}
              onClick={() => setSelectedSitId(sit.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition border ${
                selectedSitId === sit.id
                  ? 'bg-saffron-500 text-white border-saffron-400 shadow-md shadow-saffron-500/20'
                  : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              {sit.title.split(' ')[0]} {sit.title.split(' ')[1]} {sit.title.split(' ')[2]}
            </button>
          ))}
        </div>

        {/* SOS Main Body */}
        <div className="p-4 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Situation Title Badge */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs uppercase tracking-wider text-saffron-400 font-bold">
                Selected Situation
              </span>
              <h3 className="text-xl font-extrabold text-white mt-0.5">
                {currentSituation.title}
              </h3>
            </div>
            <div className="px-3 py-1.5 bg-red-500/20 text-red-300 border border-red-500/40 rounded-lg text-xs font-bold self-start sm:self-auto">
              Read in 30 Seconds
            </div>
          </div>

          {/* 3 Giant Actionable Rules */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>3 GOLDEN RULES TO FOLLOW RIGHT NOW</span>
            </h4>

            <div className="grid grid-cols-1 gap-3">
              {currentSituation.emergencyBullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-800/90 border-l-4 border-saffron-500 rounded-r-xl flex items-start space-x-3 shadow-md"
                >
                  <span className="flex-shrink-0 w-7 h-7 bg-saffron-500 text-navy-950 font-extrabold text-sm rounded-full flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-slate-100 leading-relaxed">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Legal Citations Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
            <h4 className="text-xs font-bold text-saffron-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Scale className="w-4 h-4" />
              <span>KEY LEGAL SECTIONS (BNSS 2023 & SC PRECEDENTS)</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentSituation.rights.map((r, i) => (
                <div key={i} className="p-3 bg-navy-950 rounded-lg border border-slate-800 text-xs space-y-1">
                  <div className="font-bold text-emerald-400">{r.newLaw}</div>
                  <div className="text-slate-400 font-mono text-[11px]">Old Law: {r.oldLaw}</div>
                  <div className="text-slate-200 mt-1">{r.description}</div>
                  {r.landmarkCase && (
                    <div className="text-[11px] text-amber-300 font-semibold italic mt-1">
                      Case Law: {r.landmarkCase}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Direct Emergency Call Bar */}
          <div className="bg-red-950/60 border border-red-800/80 rounded-xl p-4 space-y-3">
            <h4 className="text-xs font-bold text-red-300 uppercase tracking-wider flex items-center space-x-2">
              <PhoneCall className="w-4 h-4 text-red-400" />
              <span>DIRECT ONE-TAP HELPLINES</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <a
                href="tel:112"
                className="p-2.5 bg-red-600 hover:bg-red-500 text-white rounded-lg font-bold text-center text-xs sm:text-sm shadow flex flex-col items-center justify-center"
              >
                <span className="text-lg">112</span>
                <span className="text-[10px] font-medium text-red-100">National Emergency</span>
              </a>
              <a
                href="tel:181"
                className="p-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-bold text-center text-xs sm:text-sm shadow flex flex-col items-center justify-center"
              >
                <span className="text-lg">181</span>
                <span className="text-[10px] font-medium text-rose-100">Women Helpline</span>
              </a>
              <a
                href="tel:1064"
                className="p-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-bold text-center text-xs sm:text-sm shadow flex flex-col items-center justify-center"
              >
                <span className="text-lg">1064</span>
                <span className="text-[10px] font-medium text-amber-100">Anti-Corruption ACB</span>
              </a>
              <a
                href="tel:15100"
                className="p-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-center text-xs sm:text-sm shadow flex flex-col items-center justify-center"
              >
                <span className="text-lg">15100</span>
                <span className="text-[10px] font-medium text-blue-100">NALSA Legal Aid</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="bg-navy-950 px-5 py-3 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
          <span>Indian Citizen Emergency Rights Guide</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg"
          >
            Close SOS Mode
          </button>
        </div>

      </div>
    </div>
  );
};
