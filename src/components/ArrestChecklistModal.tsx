import React, { useState } from 'react';
import { X, CheckSquare, Square, AlertTriangle, ShieldCheck, Scale, RefreshCw } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface ArrestChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

interface ChecklistItem {
  id: string;
  titleEn: string;
  titleHi: string;
  section: string;
  critical: boolean;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'badge',
    titleEn: "Officer has clear, visible Name Tag & Rank Badge",
    titleHi: "पुलिस अधिकारी के वर्दी पर साफ नाम और पद (Name Tag) बैज है",
    section: "D.K. Basu Rule 1 / BNSS Sec 35",
    critical: true
  },
  {
    id: 'memo',
    titleEn: "Arrest Memo prepared with exact date, time, location & witness signature",
    titleHi: "गिरफ्तारी मेमो (Arrest Memo) समय, तारीख और गवाह के दस्तखत के साथ बना है",
    section: "D.K. Basu Rule 2 / BNSS Sec 36",
    critical: true
  },
  {
    id: 'inform_family',
    titleEn: "Relative / Friend informed of arrest location within 8-12 hours",
    titleHi: "रिश्तेदार या दोस्त को 8-12 घंटे के भीतर गिरफ्तारी की जानकारी दी गई",
    section: "D.K. Basu Rule 3 / BNSS Sec 47",
    critical: true
  },
  {
    id: 'inform_grounds',
    titleEn: "Informed clearly of exact grounds of arrest & right to bail",
    titleHi: "गिरफ्तारी के कारण और ज़मानत के अधिकार की स्पष्ट जानकारी दी गई",
    section: "Constitution Art 22(1) / BNSS Sec 47(1)",
    critical: true
  },
  {
    id: 'lawyer_right',
    titleEn: "Right to meet & consult an Advocate during interrogation",
    titleHi: "पूछताछ के दौरान अपने वकील से मिलने की अनुमति दी गई",
    section: "D.K. Basu Rule 10 / BNSS Sec 48",
    critical: false
  },
  {
    id: 'medical_exam',
    titleEn: "Medical Examination conducted at time of arrest & recorded in memo",
    titleHi: "गिरफ्तारी के समय डॉक्टर द्वारा मेडिकल जांच की गई और चोटों का रिकॉर्ड बना",
    section: "D.K. Basu Rule 7 & 8 / BNSS Sec 53",
    critical: true
  },
  {
    id: 'magistrate_24h',
    titleEn: "Produced before Judicial Magistrate within 24 hours (excluding travel)",
    titleHi: "24 घंटे के भीतर मजिस्ट्रेट के सामने पेश किया जा रहा है",
    section: "Constitution Art 22(2) / BNSS Sec 58",
    critical: true
  }
];

export const ArrestChecklistModal: React.FC<ArrestChecklistModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const toggleCheck = (id: string) => {
    setCheckedState(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const resetAll = () => setCheckedState({});

  const totalItems = CHECKLIST_ITEMS.length;
  const completedItems = Object.values(checkedState).filter(Boolean).length;
  const scorePercent = Math.round((completedItems / totalItems) * 100);

  const isHindi = lang === 'hi';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-6">
        
        {/* Modal Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-saffron-500/20 text-saffron-400 rounded-xl border border-saffron-500/30">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                {isHindi ? 'D.K. बासु गिरफ्तारी अनुपालन चेकलिस्ट' : 'D.K. Basu Arrest Rights Checklist'}
              </h2>
              <p className="text-xs text-slate-400">
                {isHindi ? 'सुप्रीम कोर्ट निर्देश व BNSS 2023 धाराएं' : 'Mandatory Police Compliance Guidelines (BNSS 2023)'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Progress / Score Meter */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {isHindi ? 'कानूनी अनुपालन स्कोर' : 'Legal Compliance Score'}
              </span>
              <span className={`text-sm font-extrabold px-3 py-1 rounded-full ${
                scorePercent === 100 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                scorePercent >= 50 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                {scorePercent}% {scorePercent === 100 ? 'Fully Compliant' : scorePercent >= 50 ? 'Partial Protection' : 'High Violation Risk'}
              </span>
            </div>

            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  scorePercent === 100 ? 'bg-emerald-500' : scorePercent >= 50 ? 'bg-amber-500' : 'bg-red-500'
                }`}
                style={{ width: `${scorePercent}%` }}
              />
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              {scorePercent < 100
                ? (isHindi ? 'यदि कोई भी अनिवार्य नियम तोड़ता है, तो आप 15100 NALSA कानूनी सहायता या मजिस्ट्रेट से शिकायत कर सकते हैं।' : 'If mandatory procedures are skipped, you can cite D.K. Basu guidelines to senior officers or Judicial Magistrate.')
                : (isHindi ? 'सभी 7 अनिवार्य प्रक्रियाएं पूरी हो गई हैं।' : 'All mandatory procedural safeguards verified.')
              }
            </p>
          </div>

          {/* Interactive Checklist Items */}
          <div className="space-y-3">
            {CHECKLIST_ITEMS.map((item) => {
              const isChecked = !!checkedState[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-4 rounded-2xl border transition cursor-pointer flex items-start space-x-3 ${
                    isChecked
                      ? 'bg-slate-800/80 border-emerald-500/50'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button className="mt-0.5 text-slate-400 flex-shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-500" />
                    )}
                  </button>
                  <div className="flex-1 space-y-1">
                    <p className={`text-sm font-semibold ${isChecked ? 'text-emerald-300 line-through' : 'text-slate-100'}`}>
                      {isHindi ? item.titleHi : item.titleEn}
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-800 text-saffron-400 border border-saffron-500/20 rounded-md">
                        {item.section}
                      </span>
                      {item.critical && (
                        <span className="text-[10px] font-bold text-red-400 flex items-center space-x-1">
                          <AlertTriangle className="w-3 h-3 inline" />
                          <span>Mandatory</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={resetAll}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl transition flex items-center space-x-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{isHindi ? 'रीसेट करें' : 'Reset Checklist'}</span>
          </button>
          
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-saffron-500 hover:bg-saffron-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition"
          >
            {isHindi ? 'ठीक है' : 'Done'}
          </button>
        </div>

      </div>
    </div>
  );
};
