import React, { useState } from 'react';
import { X, MapPin, Phone, Globe, ExternalLink, Search, ShieldCheck } from 'lucide-react';
import { STATES_DIRECTORY, StateAuthority } from '../data/statesDirectory';
import { Language, TRANSLATIONS } from '../data/translations';

interface StateDirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const StateDirectoryModal: React.FC<StateDirectoryModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  if (!isOpen) return null;

  const [searchTerm, setSearchTerm] = useState('');
  const t = TRANSLATIONS[lang];

  const filteredStates = STATES_DIRECTORY.filter(s =>
    s.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.pca.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-navy-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-100">
        
        {/* Header */}
        <div className="bg-slate-950 p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-500 text-navy-950 rounded-xl font-bold">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white">
                State-Wise Police Complaints & Helpline Directory
              </h2>
              <p className="text-xs text-slate-400">
                Official Police Complaints Authorities (PCA), Anti-Corruption Bureaus & SHRC contacts
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

        {/* Search Bar */}
        <div className="p-4 bg-navy-950 border-b border-slate-800 flex items-center space-x-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search your State (e.g. Maharashtra, Delhi, Karnataka, UP, Tamil Nadu)..."
            className="w-full bg-transparent text-sm text-white focus:outline-none placeholder-slate-500"
          />
        </div>

        {/* Directory Grid */}
        <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto">
          {filteredStates.map((st, idx) => (
            <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3 shadow">
              
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <h3 className="text-base font-bold text-saffron-400 flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-saffron-500" />
                  <span>{st.state}</span>
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  DLSA: {st.dlsaPhone}
                </span>
              </div>

              {/* PCA Info */}
              <div className="space-y-1 text-xs">
                <div className="font-bold text-white flex items-center justify-between">
                  <span>{st.pca.name}</span>
                  <a
                    href={st.pca.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-saffron-400 hover:underline flex items-center space-x-0.5 text-[11px]"
                  >
                    <span>Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="text-slate-300 flex items-center space-x-1 font-mono">
                  <Phone className="w-3 h-3 text-slate-400" />
                  <span>{st.pca.phone}</span>
                </div>
                <div className="text-slate-400 text-[11px]">{st.pca.address}</div>
              </div>

              {/* ACB & SHRC */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60 text-xs">
                <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                  <div className="font-semibold text-amber-300 text-[11px]">Anti-Corruption (ACB)</div>
                  <div className="font-mono text-[11px] text-slate-200 mt-0.5">{st.acb.phone}</div>
                </div>

                <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                  <div className="font-semibold text-blue-300 text-[11px]">Human Rights (SHRC)</div>
                  <div className="font-mono text-[11px] text-slate-200 mt-0.5">{st.shrc.phone}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-slate-950 p-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
          <span>All contacts sourced from State Police Portal & NALSA Legal Aid</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold"
          >
            Close Directory
          </button>
        </div>

      </div>
    </div>
  );
};
