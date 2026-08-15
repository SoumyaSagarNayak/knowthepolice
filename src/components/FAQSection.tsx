import React, { useState } from 'react';
import { FAQS } from '../data/faqs';
import { ChevronDown, HelpCircle, Scale } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-12 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center mb-8">
          <span className="px-3 py-1 bg-saffron-500/20 text-saffron-400 border border-saffron-500/30 text-xs font-bold uppercase rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
            Common Legal Myths & Citizen Answers
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Verified answers backed by BNSS 2023, CrPC 1973, and Supreme Court rulings
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 text-left font-bold text-sm sm:text-base text-slate-100 flex items-center justify-between hover:text-saffron-400 transition"
                >
                  <span className="flex items-center space-x-2">
                    <HelpCircle className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-saffron-400' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-800/60 text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
                    <p>{faq.answer}</p>
                    <div className="flex items-center space-x-1.5 text-xs text-emerald-400 font-mono bg-emerald-950/40 border border-emerald-800/40 p-2 rounded-lg">
                      <Scale className="w-3.5 h-3.5" />
                      <span>Cited Law: {faq.lawSection}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
