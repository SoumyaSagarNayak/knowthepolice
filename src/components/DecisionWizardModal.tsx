import React, { useState } from 'react';
import { X, HelpCircle, ArrowRight, ArrowLeft, ShieldAlert, CheckCircle2, AlertTriangle, Scale, FileText } from 'lucide-react';
import { SITUATIONS, Situation } from '../data/situations';
import { Language, TRANSLATIONS } from '../data/translations';

interface DecisionWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSelectSituation: (sit: Situation) => void;
  onOpenComplaintGen: (sitId?: string) => void;
}

export const DecisionWizardModal: React.FC<DecisionWizardModalProps> = ({
  isOpen,
  onClose,
  lang,
  onSelectSituation,
  onOpenComplaintGen
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<{
    location: string;
    action: string;
    detained: string;
  }>({
    location: '',
    action: '',
    detained: ''
  });

  const [diagnosis, setDiagnosis] = useState<{
    statusTitle: string;
    riskLevel: 'green' | 'yellow' | 'red';
    matchedSitId: string;
    adviceBullets: string[];
    governingLaw: string;
  } | null>(null);

  const resetWizard = () => {
    setStep(1);
    setAnswers({ location: '', action: '', detained: '' });
    setDiagnosis(null);
  };

  const handleDiagnose = (finalAnswers: typeof answers) => {
    const { location, action, detained } = finalAnswers;
    
    let matchedSitId = 'police-stop-question';
    let statusTitle = "Routine Police Inquiry";
    let riskLevel: 'green' | 'yellow' | 'red' = 'green';
    let adviceBullets: string[] = [];
    let governingLaw = "Section 35 BNSS 2023 / Section 41 CrPC";

    if (action === 'bribe') {
      matchedSitId = 'bribe-demand';
      statusTitle = "ILLEGAL BRIBE DEMAND / EXTORTION";
      riskLevel = 'red';
      governingLaw = "Sec 7 Prevention of Corruption Act 1988";
      adviceBullets = [
        "DO NOT pay cash or offer money.",
        "Note officer badge number and police station.",
        "Call Anti-Corruption Bureau (ACB) Helpline 1064 immediately."
      ];
    } else if (action === 'fir_refused') {
      matchedSitId = 'fir-refusal';
      statusTitle = "DUTY REFUSAL / UNLAWFUL FIR DENIAL";
      riskLevel = 'yellow';
      governingLaw = "Sec 173(1) & 173(4) BNSS 2023 (Lalita Kumari SC Ruling)";
      adviceBullets = [
        "Police CANNOT refuse FIR for theft, assault, or cognizable crimes.",
        "Send written complaint to SP/DCP via Registered Speed Post.",
        "Use our Complaint Generator tool to draft legal representation."
      ];
    } else if (action === 'detained_over_24') {
      matchedSitId = 'extended-detention';
      statusTitle = "ILLEGAL DETENTION BEYOND 24 HOURS";
      riskLevel = 'red';
      governingLaw = "Article 22(2) Constitution & Sec 57 BNSS 2023";
      adviceBullets = [
        "Police MUST produce an arrested person before Magistrate within 24 hours.",
        "Call NALSA Free Legal Aid 15100 immediately.",
        "Advocate can file Habeas Corpus petition in High Court."
      ];
    } else if (action === 'search_phone') {
      matchedSitId = 'phone-property-seizure';
      statusTitle = "DIGITAL DEVICE INSPECTION / SEIZURE";
      riskLevel = 'yellow';
      governingLaw = "Article 21 Privacy Rights & Sec 107 BNSS 2023";
      adviceBullets = [
        "Police cannot randomly demand phone passwords without reasonable grounds.",
        "Demand Seizure Memo (Panchnama) with IMEI numbers if phone is confiscated.",
        "Consult criminal lawyer before giving unlocked access."
      ];
    } else if (detained === 'no' || detained === 'free') {
      matchedSitId = 'police-stop-question';
      statusTitle = "YOU ARE FREE TO LEAVE";
      riskLevel = 'green';
      governingLaw = "Section 35 BNSS 2023";
      adviceBullets = [
        "Politely ask: 'Am I free to go, Officer?'",
        "If officer has no reasonable suspicion of an offense, you may leave peacefully.",
        "Provide valid ID if requested, but do not provoke."
      ];
    } else {
      matchedSitId = 'arrest-detention';
      statusTitle = "CUSTODIAL DETENTION / ARREST IN PROGRESS";
      riskLevel = 'red';
      governingLaw = "Sec 36, 37, 53 BNSS 2023 (DK Basu SC Guidelines)";
      adviceBullets = [
        "Right to know grounds of arrest & consult lawyer.",
        "Insist on Arrest Memo signed by independent witness.",
        "Mandatory medical examination under Sec 53 BNSS."
      ];
    }

    setDiagnosis({
      statusTitle,
      riskLevel,
      matchedSitId,
      adviceBullets,
      governingLaw
    });
  };

  const matchedSitObj = diagnosis ? SITUATIONS.find(s => s.id === diagnosis.matchedSitId) || SITUATIONS[0] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-navy-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-auto text-slate-100">
        
        {/* Header */}
        <div className="bg-slate-950 p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-saffron-500 text-navy-950 rounded-xl font-bold">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white">
                "Am I Being Detained?" Rapid Diagnostic Wizard
              </h2>
              <p className="text-xs text-slate-400">
                Answer 3 quick questions to diagnose your exact legal situation & rights
              </p>
            </div>
          </div>

          <button
            onClick={() => { resetWizard(); onClose(); }}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-xl transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wizard Content Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {!diagnosis ? (
            <div className="space-y-6">
              
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                <span>Step {step} of 3</span>
                <span className="text-saffron-400">Rapid Diagnosis</span>
              </div>

              {/* Step 1: Location */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-base font-extrabold text-white">
                    Question 1: Where are you currently located?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'street', label: 'On the Street / Traffic Stop' },
                      { id: 'station', label: 'Inside Police Station' },
                      { id: 'home', label: 'At Home (Police Home Visit)' },
                      { id: 'custody', label: 'In Police Vehicle / Custody' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => {
                          setAnswers(prev => ({ ...prev, location: opt.id }));
                          setStep(2);
                        }}
                        className="p-4 bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-saffron-500/50 rounded-2xl text-left text-xs font-bold text-slate-200 hover:text-white transition flex items-center justify-between group"
                      >
                        <span>{opt.label}</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-saffron-400 transition" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: What is Police Demanding? */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-base font-extrabold text-white">
                    Question 2: What is the police officer demanding or doing?
                  </h3>

                  <div className="grid grid-cols-1 gap-2.5">
                    {[
                      { id: 'id_papers', label: 'Asking for identity / driving license / vehicle papers' },
                      { id: 'fir_refused', label: 'Refusing to accept or register my FIR / Complaint' },
                      { id: 'bribe', label: 'Demanding cash bribe or money to let me go' },
                      { id: 'search_phone', label: 'Demand to unlock smartphone / search personal belongings' },
                      { id: 'detained_over_24', label: 'Holding me / relative over 24 hours without magistrate court visit' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => {
                          const newAns = { ...answers, action: opt.id };
                          setAnswers(newAns);
                          setStep(3);
                        }}
                        className="p-3.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-saffron-500/50 rounded-2xl text-left text-xs font-bold text-slate-200 hover:text-white transition flex items-center justify-between group"
                      >
                        <span>{opt.label}</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-saffron-400 transition" />
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setStep(1)}
                    className="text-xs text-slate-400 hover:text-white flex items-center space-x-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Question 1</span>
                  </button>
                </div>
              )}

              {/* Step 3: Are you free to leave? */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-base font-extrabold text-white">
                    Question 3: Has the officer stated you are arrested, or are you free to leave?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'free', label: 'Free to Leave (No Arrest Order)' },
                      { id: 'detained', label: 'Detained / Not Allowed to Leave' },
                      { id: 'unsure', label: 'Unsure / Officer Unclear' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => {
                          const finalAns = { ...answers, detained: opt.id };
                          setAnswers(finalAns);
                          handleDiagnose(finalAns);
                        }}
                        className="p-4 bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-saffron-500/50 rounded-2xl text-left text-xs font-bold text-slate-200 hover:text-white transition flex flex-col justify-between group h-24"
                      >
                        <span>{opt.label}</span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-saffron-400 transition self-end" />
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="text-xs text-slate-400 hover:text-white flex items-center space-x-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Question 2</span>
                  </button>
                </div>
              )}

            </div>
          ) : (
            /* Diagnosis Result */
            <div className="space-y-5">
              
              <div className={`p-4 rounded-2xl border ${
                diagnosis.riskLevel === 'red' ? 'bg-red-950/60 border-red-800/80 text-red-100' :
                diagnosis.riskLevel === 'yellow' ? 'bg-amber-950/60 border-amber-800/80 text-amber-100' :
                'bg-emerald-950/60 border-emerald-800/80 text-emerald-100'
              }`}>
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider mb-1">
                  <ShieldAlert className="w-4 h-4" />
                  <span>DIAGNOSED LEGAL STATUS</span>
                </div>
                <h3 className="text-xl font-black">{diagnosis.statusTitle}</h3>
              </div>

              {/* Governing Section */}
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-slate-300 flex items-center justify-between">
                <span>Governing Section: <strong className="text-saffron-400">{diagnosis.governingLaw}</strong></span>
              </div>

              {/* Immediate Action Advice */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Recommended Immediate Steps:
                </span>
                {diagnosis.adviceBullets.map((bullet, idx) => (
                  <div key={idx} className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                {matchedSitObj && (
                  <button
                    onClick={() => {
                      onClose();
                      onSelectSituation(matchedSitObj);
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 bg-saffron-500 hover:bg-saffron-400 text-navy-950 font-extrabold text-xs rounded-xl flex items-center justify-center space-x-1.5 shadow"
                  >
                    <Scale className="w-4 h-4" />
                    <span>Open Full 7-Step Action Guide</span>
                  </button>
                )}

                <button
                  onClick={() => {
                    onClose();
                    onOpenComplaintGen(diagnosis.matchedSitId);
                  }}
                  className="w-full sm:w-auto px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl flex items-center justify-center space-x-1.5"
                >
                  <FileText className="w-4 h-4" />
                  <span>Draft SP Complaint Letter</span>
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-slate-950 p-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
          <button
            onClick={resetWizard}
            className="text-xs text-saffron-400 hover:underline font-semibold"
          >
            Reset Wizard
          </button>

          <button
            onClick={() => { resetWizard(); onClose(); }}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg"
          >
            Close Wizard
          </button>
        </div>

      </div>
    </div>
  );
};
