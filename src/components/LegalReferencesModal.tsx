import React from 'react';
import { X, Scale, ExternalLink, BookOpen, ShieldCheck } from 'lucide-react';
import { Language } from '../data/translations';

interface LegalReferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

const CASE_LAWS = [
  {
    title: "D.K. Basu v. State of West Bengal (1997) 1 SCC 416",
    tag: "Landmark Arrest Safeguards",
    descEn: "Laid down 11 mandatory guidelines for police officers during arrest, detention, and interrogation, including mandatory name tags, arrest memo, informing family, medical exam, and 24-hour magistrate production.",
    descHi: "गिरफ्तारी, हिरासत और पूछताछ के दौरान पुलिस के लिए 11 अनिवार्य दिशानिर्देश तय किए, जिसमें नाम टैग, मेमो, परिवार को सूचना और मेडिकल जांच शामिल है।"
  },
  {
    title: "Arnesh Kumar v. State of Bihar (2014) 8 SCC 273",
    tag: "No Unnecessary Arrest",
    descEn: "Strictly directed police not to automatically arrest accused in cases punishable up to 7 years. Mandatory notice under BNSS 35(3) / CrPC 41A must be served first.",
    descHi: "7 साल तक की सजा वाले मामलों में स्वतः गिरफ्तारी पर रोक लगाई। पहले BNSS 35(3) नोटिस देना अनिवार्य है।"
  },
  {
    title: "Lalita Kumari v. Govt. of UP (2014) 2 SCC 1",
    tag: "Mandatory FIR Registration",
    descEn: "Ruled that registration of FIR is MANDATORY under Section 173 BNSS / 154 CrPC if information discloses commission of a cognizable offence.",
    descHi: "फैसला दिया कि यदि संज्ञेय अपराध की सूचना मिलती है, तो पुलिस के लिए एफआईआर दर्ज करना अनिवार्य (Mandatory) है।"
  },
  {
    title: "Prakash Singh v. Union of India (2006) 8 SCC 1",
    tag: "Police Accountability & PCA",
    descEn: "Directed setting up of independent Police Complaints Authorities (PCA) at State and District levels to investigate police misconduct, custodial violence, and extortion.",
    descHi: "पुलिस दुर्व्यवहार, कस्टोडियल हिंसा और जबरन वसूली की जांच के लिए स्वतंत्र पुलिस शिकायत प्राधिकरण (PCA) की स्थापना का आदेश दिया।"
  }
];

const STATUTES = [
  { name: "Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023", url: "https://www.indiacode.nic.in" },
  { name: "National Human Rights Commission (NHRC)", url: "https://nhrc.nic.in" },
  { name: "Central Vigilance Commission (CVC 1064)", url: "https://cvc.gov.in" },
  { name: "Bureau of Police Research & Development (BPR&D)", url: "https://bprd.nic.in" }
];

export const LegalReferencesModal: React.FC<LegalReferencesModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  if (!isOpen) return null;

  const isHindi = lang === 'hi';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-6">
        
        {/* Modal Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-saffron-500/20 text-saffron-400 rounded-xl border border-saffron-500/30">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                {isHindi ? 'सुप्रीम कोर्ट के ऐतिहासिक फैसले और कानून' : 'Supreme Court Case Laws & Legal References'}
              </h2>
              <p className="text-xs text-slate-400">
                {isHindi ? 'संवैधानिक प्रावधान एवं आधिकारिक सरकारी स्रोत' : 'Landmark Supreme Court rulings & official legal sources'}
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

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Judgments Section */}
          <div className="space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-saffron-400 flex items-center space-x-1.5">
              <Scale className="w-4 h-4" />
              <span>{isHindi ? 'सर्वोच्च न्यायालय के मुख्य निर्णय' : 'Landmark Supreme Court Directives'}</span>
            </h3>

            <div className="space-y-3">
              {CASE_LAWS.map((c, i) => (
                <div key={i} className="bg-slate-950/70 border border-slate-800 hover:border-saffron-500/40 rounded-2xl p-4 space-y-2 transition shadow-md">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-xs font-bold text-white leading-snug">
                      {c.title}
                    </h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-saffron-500/10 text-saffron-300 border border-saffron-500/20 rounded-md whitespace-nowrap">
                      {c.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isHindi ? c.descHi : c.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Official Portals & Statutes */}
          <div className="space-y-3 pt-2 border-t border-slate-800">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
              {isHindi ? 'आधिकारिक सरकारी स्रोत और कानून पोर्टल' : 'Official Government Portals & Statutory Laws'}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {STATUTES.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl text-xs text-slate-300 hover:text-white transition flex items-center justify-between"
                >
                  <span className="truncate pr-2 font-medium">{s.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-saffron-500 hover:bg-saffron-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition"
          >
            {isHindi ? 'समझ गया' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
