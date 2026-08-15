import React from 'react';
import { Situation } from '../data/situations';
import { Language, TRANSLATIONS } from '../data/translations';
import { 
  ShieldAlert, Lock, FileX, Search, Smartphone, 
  AlertTriangle, DollarSign, UserCheck, Clock, HelpCircle, FileText, Home, ArrowRight, Scale, Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

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
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => onSelect(situation)}
      className="glass-card-interactive group relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between cursor-pointer border border-slate-800/90 overflow-hidden"
    >
      {/* Top subtle highlight gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-500/80 via-amber-400/80 to-emerald-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Category Badge & Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-slate-900/90 text-saffron-400 group-hover:bg-gradient-to-tr group-hover:from-saffron-500 group-hover:to-amber-400 group-hover:text-navy-950 rounded-2xl transition-all duration-300 shadow-lg border border-slate-800 group-hover:border-saffron-400">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider bg-slate-900/80 text-slate-300 border border-slate-700/80 rounded-full group-hover:border-saffron-500/40 group-hover:text-saffron-300 group-hover:bg-saffron-500/10 transition">
            {situation.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-saffron-400 transition-colors leading-snug mb-2">
          {situation.title}
        </h3>

        {/* Short 1-Sentence Summary */}
        <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-5 font-normal">
          {situation.shortSummary}
        </p>

        {/* Golden Rule Highlight Pill */}
        <div className="p-2.5 bg-slate-900/80 border border-slate-800/90 rounded-xl mb-4 text-xs text-slate-300 flex items-start space-x-2">
          <Sparkles className="w-3.5 h-3.5 text-saffron-400 flex-shrink-0 mt-0.5" />
          <span className="line-clamp-2 text-[11px] font-medium text-slate-200">
            Rule 1: {situation.emergencyBullets[0]}
          </span>
        </div>
      </div>

      {/* Footer Info & Action */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-1.5 text-emerald-400 font-mono text-[11px] font-semibold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
          <Scale className="w-3.5 h-3.5" />
          <span>{situation.rights[0]?.newLaw.split(' ')[0]} {situation.rights[0]?.newLaw.split(' ')[1]}</span>
        </div>

        <span className="font-extrabold text-saffron-400 group-hover:translate-x-1 transition-transform flex items-center space-x-1">
          <span>{t.readRights}</span>
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </motion.div>
  );
};
