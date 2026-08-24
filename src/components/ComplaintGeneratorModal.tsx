import React, { useState } from 'react';
import { X, FileText, Printer, Copy, Check, ShieldAlert } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface ComplaintGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialSitId?: string;
}

export const ComplaintGeneratorModal: React.FC<ComplaintGeneratorModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialSitId = 'fir-refusal'
}) => {
  if (!isOpen) return null;

  const [complainantName, setComplainantName] = useState('');
  const [complainantPhone, setComplainantPhone] = useState('');
  const [complainantAddress, setComplainantAddress] = useState('');
  const [targetPoliceStation, setTargetPoliceStation] = useState('');
  const [officerDetails, setOfficerDetails] = useState('');
  const [incidentDate, setIncidentDate] = useState(new Date().toISOString().split('T')[0]);
  const [incidentCategory, setIncidentCategory] = useState(
    initialSitId === 'bribe-demand' ? 'Bribe Demand' :
    initialSitId === 'misconduct-assault' ? 'Physical Assault / Abuse' :
    initialSitId === 'phone-property-seizure' ? 'Illegal Property/Phone Seizure' :
    'Refusal to Register FIR'
  );
  const [incidentDetails, setIncidentDetails] = useState('');
  const [copied, setCopied] = useState(false);

  const t = TRANSLATIONS[lang];

  const generatedLetter = `FORMAL COMPLAINT UNDER SECTION 173(4) BHARATIYA NAGARIK SURAKSHA SANHITA (BNSS 2023)
[HISTORICAL CORRESPONDING PROVISION: SECTION 154(3) CrPC 1973]

TO:
The Superintendent of Police / Deputy Commissioner of Police,
District / Zone: ___________________________
State / Union Territory: ___________________

FROM:
Complainant Name: ${complainantName || '[Your Full Name]'}
Contact Phone: ${complainantPhone || '[Your Contact Number]'}
Address: ${complainantAddress || '[Your Residential Address]'}

DATE OF SUBMISSION: ${new Date().toLocaleDateString('en-IN')}

SUBJECT: Written representation against police inaction / misconduct / refusal to record FIR under Section 173(4) BNSS 2023 at Police Station ${targetPoliceStation || '[Police Station Name]'}.

RESPECTED SIR / MADAM,

1. I am a law-abiding citizen of India residing at the aforementioned address.

2. INCIDENT DETAILS:
   - Date & Time of Incident: ${incidentDate || '[Date of Incident]'}
   - Concerned Police Station: ${targetPoliceStation || '[Name of Police Station]'}
   - Officer(s) Involved / Badge No.: ${officerDetails || '[Officer Name / Badge No. / Physical Description]'}
   - Nature of Grievance: ${incidentCategory}

3. STATEMENT OF FACTS:
   ${incidentDetails || '[Provide a concise step-by-step description of what happened. Mention if FIR was refused, bribe was demanded, physical force was used, or phone/property was illegally taken.]'}

4. VIOLATION OF LEGAL MANDATES & SUPREME COURT DIRECTIVES:
   - Mandatory FIR Registration: Under the landmark Supreme Court ruling in Lalita Kumari v. Govt of U.P. (2014) 2 SCC 1 and Section 173(1) BNSS 2023, police officers are legally bound to register an FIR upon receipt of information disclosing a cognizable offense.
   - Guidelines in D.K. Basu v. State of W.B.: Every police officer must wear clear identification badges and adhere strictly to fundamental rights under Articles 20, 21, and 22 of the Constitution of India.

5. PRAYER / RELIEF SOUGHT:
   In light of the above facts, I respectfully request your good office to:
   a) Direct the registration of an official First Information Report (FIR) / Complaint at ${targetPoliceStation || 'the concerned station'}.
   b) Initiate an impartial inquiry / departmental investigation against the concerned officer(s) under Police Rules and Section 198/217 BNS 2023.
   c) Provide an official written acknowledgment / FIR copy to the undersigned complainant.

Thanking You.

Yours Sincerely,


______________________________________
Signature of Complainant
(${complainantName || 'Complainant Name'})
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLetter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-navy-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-100">
        
        {/* Header */}
        <div className="bg-slate-950 p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-saffron-500 text-navy-950 rounded-xl font-bold">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white">
                Official SP / PCA Complaint Letter Generator
              </h2>
              <p className="text-xs text-slate-400">
                Drafts formal legal representation under Sec 173(4) BNSS 2023 / Sec 154(3) CrPC
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

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          
          {/* Left Form Inputs (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold text-saffron-400 uppercase tracking-wider">
              Fill Complaint Details
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name</label>
              <input
                type="text"
                value={complainantName}
                onChange={(e) => setComplainantName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:border-saffron-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                <input
                  type="text"
                  value={complainantPhone}
                  onChange={(e) => setComplainantPhone(e.target.value)}
                  placeholder="9876543210"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:border-saffron-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Incident Date</label>
                <input
                  type="date"
                  value={incidentDate}
                  onChange={(e) => setIncidentDate(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:border-saffron-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Police Station Name</label>
              <input
                type="text"
                value={targetPoliceStation}
                onChange={(e) => setTargetPoliceStation(e.target.value)}
                placeholder="e.g. Connaught Place Police Station"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:border-saffron-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Officer Name / Badge / Vehicle No.</label>
              <input
                type="text"
                value={officerDetails}
                onChange={(e) => setOfficerDetails(e.target.value)}
                placeholder="e.g. Sub-Inspector A. Kumar (Badge #402)"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:border-saffron-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Type of Infringement</label>
              <select
                value={incidentCategory}
                onChange={(e) => setIncidentCategory(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:border-saffron-500 focus:outline-none"
              >
                <option value="Refusal to Register FIR">Refusal to Register FIR</option>
                <option value="Bribe Demand">Bribe Demand / Extortion</option>
                <option value="Physical Assault / Abuse">Physical Assault / Abuse / Custodial Violence</option>
                <option value="Illegal Property/Phone Seizure">Illegal Phone or Property Seizure</option>
                <option value="Harassment / Arbitrary Detention">Harassment / Arbitrary Detention</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Factual Description of Incident</label>
              <textarea
                rows={4}
                value={incidentDetails}
                onChange={(e) => setIncidentDetails(e.target.value)}
                placeholder="Describe what happened chronologically. E.g.: On 15th Aug at 4 PM, I visited the station to report theft. The officer refused to accept the written complaint..."
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:border-saffron-500 focus:outline-none resize-none"
              />
            </div>
          </div>

          {/* Right Live Preview (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Generated Legal Document Preview
              </h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCopy}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg flex items-center space-x-1"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Text'}</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="px-3 py-1 bg-saffron-600 hover:bg-saffron-500 text-white text-xs font-bold rounded-lg flex items-center space-x-1 shadow"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
              </div>
            </div>

            {/* Printable Document Box */}
            <div id="printable-complaint" className="bg-slate-950 border border-slate-800 rounded-xl p-5 font-mono text-[11px] text-slate-200 leading-relaxed overflow-x-auto whitespace-pre-wrap select-all max-h-[460px] overflow-y-auto">
              {generatedLetter}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-950 p-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
          <span>Send this letter via Registered Post AD or Speed Post to SP / DCP Office</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
