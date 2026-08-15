import React from 'react';
import { Situation } from '../data/situations';
import { Language, TRANSLATIONS } from '../data/translations';
import { 
  ShieldAlert, Lock, FileX, Search, Smartphone, 
  AlertTriangle, DollarSign, UserCheck, Clock, HelpCircle, FileText, Home, ArrowRight, Scale
} from 'lucide-react';

interface SituationCardProps {
  situation: Situation;
  lang: Language;
  onSelect: (situation: Situation) => void;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  ShieldAlert,
  Lock,
  FileX,
  Search,
  Smartphone,
  AlertTriangle,
  DollarSign,
  UserCheck,
  Clock,
  HelpCircle,
  FileText,
  Home
};

export const SituationCard: React.FC<SituationCardProps> = ({ situation, lang, onSelect }) => {
  const t = TRANSLATIONS[lang];
  const IconComponent = ICON_MAP[situation.icon] || ShieldAlert;

  return (
    <div
      onClick={() => onSelect(situation)}
      className="glass-card group relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between cursor-pointer border border-slate-800 hover:border-saffron-500/50 hover:shadow-2xl hover:shadow-saffron-500/10 transition-all duration-300"
    >
      <div>
        {/* Category & Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-slate-800/90 text-saffron-400 group-hover:bg-saffron-500 group-hover:text-navy-950 rounded-xl transition-all duration-300 shadow-md">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-slate-800/60 text-slate-400 border border-slate-700/60 rounded-full group-hover:border-saffron-500/30 group-hover:text-saffron-300 transition">
            {situation.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-saffron-400 transition-colors leading-snug mb-2">
          {situation.title}
        </h3>

        {/* Short 1-Sentence Summary */}
        <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">
          {situation.shortSummary}
        </p>
      </div>

      {/* Footer Info & Action */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-1 text-slate-400 font-mono text-[11px]">
          <Scale className="w-3.5 h-3.5 text-saffron-400" />
          <span>{situation.rights[0]?.newLaw.split(' ')[0]} {situation.rights[0]?.newLaw.split(' ')[1]}</span>
        </div>

        <span className="font-bold text-saffron-400 group-hover:translate-x-1 transition-transform flex items-center space-x-1">
          <span>{t.readRights}</span>
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </div>
  );
};
