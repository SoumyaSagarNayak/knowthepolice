import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, X, Send, Sparkles, Volume2, VolumeX, ShieldAlert, FileText, MapPin, 
  ChevronRight, RefreshCw, MessageSquare, ArrowUpRight, Scale
} from 'lucide-react';
import { SITUATIONS, Situation } from '../data/situations';
import { Language, TRANSLATIONS } from '../data/translations';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  actionType?: 'sos' | 'complaint' | 'directory' | 'situation';
  actionPayload?: any;
}

interface AIChatBotWidgetProps {
  lang: Language;
  onOpenSOS: () => void;
  onOpenComplaintGen: (sitId?: string) => void;
  onOpenStateDir: () => void;
  onSelectSituation: (sit: Situation) => void;
}

export const AIChatBotWidget: React.FC<AIChatBotWidgetProps> = ({
  lang,
  onOpenSOS,
  onOpenComplaintGen,
  onOpenStateDir,
  onSelectSituation
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeakingId, setIsSpeakingId] = useState<string | null>(null);

  const t = TRANSLATIONS[lang];
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      sender: 'ai',
      text: "Namaste! I am Nyaya AI ⚖️ — your intelligent Legal Rights Assistant and Website Guide. How can I help you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const quickPrompts = [
    "🚨 I'm stopped by police on street right now",
    "📝 How do I draft an SP complaint letter?",
    "🏛️ Where is my State Complaints Authority (PCA)?",
    "👩 What are women rights for night detention?",
    "📱 Can police search my phone without warrant?",
    "❓ What is Zero FIR and can police refuse it?"
  ];

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputMsg).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputMsg('');
    setIsTyping(true);

    setTimeout(() => {
      const q = query.toLowerCase();
      let replyText = "";
      let actionType: Message['actionType'] = undefined;
      let actionPayload: any = undefined;

      if (q.includes('stop') || q.includes('street') || q.includes('traffic') || q.includes('sos') || q.includes('now') || q.includes('emergenc')) {
        replyText = "In a street or traffic stop, stay calm! Demand officer name/badge. Only an SI or higher rank can issue fines. Police CANNOT force you to unlock your phone or search you without grounds. Tap below to launch full 30-Sec SOS Mode!";
        actionType = 'sos';
      } else if (q.includes('fir') || q.includes('refus') || q.includes('complaint letter') || q.includes('draft') || q.includes('sp')) {
        replyText = "Under Lalita Kumari Supreme Court judgment & Sec 173(1) BNSS 2023, FIR is MANDATORY for cognizable crimes. If police refuse, send a written representation to the SP/DCP. Tap below to launch our interactive SP Complaint Letter Generator!";
        actionType = 'complaint';
        actionPayload = 'fir-refusal';
      } else if (q.includes('pca') || q.includes('directory') || q.includes('state') || q.includes('number') || q.includes('helpline')) {
        replyText = "Every state in India has a Police Complaints Authority (PCA) & Anti-Corruption Bureau (ACB). Tap below to open our filterable State Directory for official contacts & online portals!";
        actionType = 'directory';
      } else if (q.includes('woman') || q.includes('female') || q.includes('night') || q.includes('sunset')) {
        const sit = SITUATIONS.find(s => s.id === 'women-police-rights');
        replyText = "Under Sec 43(5) BNSS 2023 (Sec 46(4) CrPC), women CANNOT be arrested between sunset and sunrise without prior written permission of Judicial Magistrate. Female search must be by female officer only. Women & minors under 15 cannot be called to police station for questioning.";
        actionType = 'situation';
        actionPayload = sit;
      } else if (q.includes('phone') || q.includes('mobile') || q.includes('whatsapp') || q.includes('passwor')) {
        const sit = SITUATIONS.find(s => s.id === 'phone-property-seizure');
        replyText = "Police CANNOT randomly demand phone passwords or browse private WhatsApp messages without reasonable suspicion or court warrant. Mandatory Seizure Memo with IMEI numbers must be issued under Sec 107 BNSS 2023.";
        actionType = 'situation';
        actionPayload = sit;
      } else if (q.includes('bribe') || q.includes('money') || q.includes('cash') || q.includes('extort')) {
        const sit = SITUATIONS.find(s => s.id === 'bribe-demand');
        replyText = "Demanding a bribe is punishable under Sec 7 Prevention of Corruption Act (up to 7 yrs jail for officer). Never pay cash. Call ACB Helpline 1064 immediately or file a trap complaint.";
        actionType = 'situation';
        actionPayload = sit;
      } else {
        replyText = `Based on Indian Criminal Law (BNSS 2023 / CrPC 1973): You have fundamental rights under Articles 20, 21 & 22 of the Constitution. You have the right to remain silent, consult an advocate, and be presented to a Magistrate within 24 hours. Explore our 12 situation guides or ask me to draft a complaint letter!`;
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionType,
        actionPayload
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleSpeakText = (msgId: string, text: string) => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeakingId === msgId) {
      window.speechSynthesis.cancel();
      setIsSpeakingId(null);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.onend = () => setIsSpeakingId(null);
    utterance.onerror = () => setIsSpeakingId(null);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsSpeakingId(msgId);
  };

  return (
    <>
      {/* Floating Widget Launcher Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-4 bg-gradient-to-r from-saffron-500 via-amber-500 to-emerald-500 text-navy-950 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2.5 glow-saffron cursor-pointer"
        >
          <div className="relative">
            <Bot className="w-7 h-7 text-navy-950 animate-bounce" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-navy-950 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-navy-950 rounded-full" />
          </div>
          <span className="hidden sm:inline font-extrabold text-sm tracking-wide uppercase">
            {isOpen ? 'Close Nyaya AI' : 'Chat with Nyaya AI'}
          </span>
        </button>
      </div>

      {/* Chat Window Drawer */}
      {isOpen && (
        <div className="fixed bottom-20 right-3 sm:right-6 z-50 w-[94vw] sm:w-[420px] max-h-[600px] h-[80vh] bg-navy-950 border-2 border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-fadeIn">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-navy-900 via-slate-900 to-navy-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-tr from-saffron-500 to-amber-400 text-navy-950 rounded-xl font-black shadow-md">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <h3 className="font-extrabold text-sm text-white">Nyaya AI Legal Guide</h3>
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                </div>
                <p className="text-[11px] text-slate-400">
                  Online • BNSS 2023 & CrPC Legal Assistant
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800/60 rounded-xl transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-mesh-pattern text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl space-y-2 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-saffron-500 text-navy-950 font-semibold rounded-tr-none shadow-lg shadow-saffron-500/20'
                      : 'bg-slate-900/90 text-slate-100 border border-slate-800 rounded-tl-none shadow-md'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>

                  {/* AI Action Trigger Button inside chat */}
                  {msg.sender === 'ai' && msg.actionType && (
                    <div className="pt-2 border-t border-slate-800/80">
                      {msg.actionType === 'sos' && (
                        <button
                          onClick={() => { setIsOpen(false); onOpenSOS(); }}
                          className="w-full px-3 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow"
                        >
                          <ShieldAlert className="w-4 h-4 text-yellow-300" />
                          <span>Launch 30-Sec SOS Emergency Mode</span>
                        </button>
                      )}

                      {msg.actionType === 'complaint' && (
                        <button
                          onClick={() => { setIsOpen(false); onOpenComplaintGen(msg.actionPayload); }}
                          className="w-full px-3 py-2 bg-saffron-600 hover:bg-saffron-500 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow"
                        >
                          <FileText className="w-4 h-4" />
                          <span>Draft Official SP Complaint Letter</span>
                        </button>
                      )}

                      {msg.actionType === 'directory' && (
                        <button
                          onClick={() => { setIsOpen(false); onOpenStateDir(); }}
                          className="w-full px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow"
                        >
                          <MapPin className="w-4 h-4" />
                          <span>Open State PCA Directory</span>
                        </button>
                      )}

                      {msg.actionType === 'situation' && msg.actionPayload && (
                        <button
                          onClick={() => { setIsOpen(false); onSelectSituation(msg.actionPayload); }}
                          className="w-full px-3 py-2 bg-slate-800 hover:bg-slate-700 text-saffron-400 border border-saffron-500/30 font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow"
                        >
                          <Scale className="w-4 h-4" />
                          <span>View Full 7-Step Action Guide</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-2 mt-1 px-1 text-[10px] text-slate-500">
                  <span>{msg.timestamp}</span>
                  {msg.sender === 'ai' && (
                    <button
                      onClick={() => handleSpeakText(msg.id, msg.text)}
                      className="text-slate-400 hover:text-saffron-400 flex items-center space-x-0.5"
                    >
                      {isSpeakingId === msg.id ? <VolumeX className="w-3 h-3 text-saffron-400" /> : <Volume2 className="w-3 h-3" />}
                    </button>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2 text-slate-400 text-xs italic bg-slate-900 p-2.5 rounded-xl border border-slate-800 w-28">
                <span className="animate-pulse">Nyaya AI typing...</span>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick Prompts Strip */}
          <div className="bg-slate-950 p-2 border-t border-slate-800 flex space-x-1.5 overflow-x-auto scrollbar-none">
            {quickPrompts.map((qp, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(qp)}
                className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-lg text-[11px] whitespace-nowrap flex-shrink-0 transition"
              >
                {qp}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-navy-900 border-t border-slate-800 flex items-center space-x-2">
            <input
              type="text"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask anything or get website guidance..."
              className="flex-1 px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:border-saffron-500 focus:outline-none"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputMsg.trim()}
              className="p-2.5 bg-saffron-500 hover:bg-saffron-400 disabled:opacity-50 text-navy-950 font-bold rounded-xl transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </>
  );
};
