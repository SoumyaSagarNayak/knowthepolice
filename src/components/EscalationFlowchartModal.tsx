import React from 'react';
import { X, GitMerge, FileText, ArrowRight, ShieldCheck, AlertCircle, PhoneCall, Scale } from 'lucide-react';
import { Language } from '../data/translations';

interface EscalationFlowchartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenComplaintGen: () => void;
  lang: Language;
}

export const EscalationFlowchartModal: React.FC<EscalationFlowchartModalProps> = ({
  isOpen,
  onClose,
  onOpenComplaintGen,
  lang
}) => {
  if (!isOpen) return null;

  const isHindi = lang === 'hi';

  const steps = [
    {
      level: 1,
      titleEn: "1. Station House Officer (SHO)",
      titleHi: "1. थाना प्रभारी (SHO) / ड्यूटी ऑफिसर",
      law: "BNSS Sec 173(1) / CrPC 154",
      time: "Immediate",
      descEn: "Visit police station and request FIR registration. If oral, officer must write it down and read it back to you.",
      descHi: "थाने में एफआईआर दर्ज करने का अनुरोध करें। मौखिक होने पर अधिकारी इसे लिखकर आपको पढ़कर सुनाएगा।",
      badge: "Step 1",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30"
    },
    {
      level: 2,
      titleEn: "2. Superintendent of Police (SP / DCP)",
      titleHi: "2. पुलिस अधीक्षक (SP / DCP)",
      law: "BNSS Sec 173(4) / CrPC 154(3)",
      time: "24-48 Hours",
      descEn: "If SHO refuses, send written complaint copy via Speed Post or registered email directly to SP / Commissioner of Police.",
      descHi: "यदि थाना प्रभारी मना करे, तो स्पीड पोस्ट या पंजीकृत ईमेल द्वारा एसपी को लिखित शिकायत भेजें।",
      badge: "Step 2",
      badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30"
    },
    {
      level: 3,
      titleEn: "3. Judicial Magistrate Court",
      titleHi: "3. न्यायिक मजिस्ट्रेट कोर्ट (175(3))",
      law: "BNSS Sec 175(3) / CrPC 156(3)",
      time: "Immediate Application",
      descEn: "File a application before Judicial Magistrate. Court can order police to register FIR & investigate immediately.",
      descHi: "मजिस्ट्रेट के समक्ष आवेदन दायर करें। कोर्ट पुलिस को तुरंत एफआईआर दर्ज करने का आदेश दे सकती है।",
      badge: "Step 3",
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30"
    },
    {
      level: 4,
      titleEn: "4. Police Complaints Authority (PCA) & NHRC",
      titleHi: "4. राज्य पुलिस शिकायत प्राधिकरण (PCA) व NHRC",
      law: "Prakash Singh SC Directive & NHRC Sec 12",
      time: "Parallel Remedy",
      descEn: "File formal petition with State PCA for police abuse or call NHRC Toll-Free 14433.",
      descHi: "दुर्व्यवहार या अधिकार हनन के लिए राज्य PCA में शिकायत दर्ज करें या NHRC 14433 पर कॉल करें।",
      badge: "Step 4",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-6">
        
        {/* Modal Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-saffron-500/20 text-saffron-400 rounded-xl border border-saffron-500/30">
              <GitMerge className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                {isHindi ? 'FIR मना या दुर्व्यवहार पर शिकायत का पदानुक्रम (Flowchart)' : 'FIR Refusal & Misconduct Escalation Hierarchy'}
              </h2>
              <p className="text-xs text-slate-400">
                {isHindi ? 'कानूनी शिकायत के चरणबद्ध कदम (BNSS 2023)' : 'Step-by-step statutory remedies under Indian Law'}
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

        {/* Modal Body / Flowchart Timeline */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center space-x-3">
            <AlertCircle className="w-5 h-5 text-saffron-400 flex-shrink-0" />
            <p className="text-xs text-slate-300 leading-relaxed">
              {isHindi
                ? 'यदि पुलिस एफआईआर लिखने से इंकार करती है या रिश्वत मांगती है, तो आपको डरने की जरूरत नहीं है। नीचे दिए गए 4 चरणों का पालन करें।'
                : 'Under BNSS Section 173(4), refusal by SHO allows you to submit your complaint directly to the SP by registered post or email.'
              }
            </p>
          </div>

          {/* Vertical Flowchart Nodes */}
          <div className="relative border-l-2 border-slate-800 ml-4 pl-6 space-y-6">
            {steps.map((s, idx) => (
              <div key={s.level} className="relative group">
                
                {/* Node Bullet */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-saffron-500 border-4 border-slate-900 group-hover:scale-125 transition-transform" />

                <div className="bg-slate-950/70 border border-slate-800 group-hover:border-saffron-500/50 rounded-2xl p-4 space-y-2 transition-all shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${s.badgeColor}`}>
                      {s.badge}
                    </span>
                    <span className="text-[11px] font-bold text-saffron-400 bg-saffron-500/10 px-2 py-0.5 rounded-md border border-saffron-500/20">
                      {s.law}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white">
                    {isHindi ? s.titleHi : s.titleEn}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isHindi ? s.descHi : s.descEn}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-900">
                    <span>Timeframe: <strong className="text-slate-200">{s.time}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              onOpenComplaintGen();
            }}
            className="px-4 py-2.5 bg-saffron-500/20 hover:bg-saffron-500/30 border border-saffron-500/30 text-saffron-300 text-xs font-bold rounded-xl transition flex items-center space-x-2"
          >
            <FileText className="w-4 h-4 text-saffron-400" />
            <span>{isHindi ? 'एसपी शिकायत ड्राफ्ट बनाएं →' : 'Draft Written Complaint Now →'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition"
          >
            {isHindi ? 'बंद करें' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
