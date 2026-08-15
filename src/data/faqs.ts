export interface FAQItem {
  question: string;
  answer: string;
  lawSection: string;
  category: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "Can a police officer check my mobile phone or WhatsApp chats on the road?",
    answer: "NO. Police officers cannot randomly demand to inspect your personal smartphone, unlock your screen, or read your private WhatsApp messages unless your phone is legally seized with a Seizure Memo under reasonable suspicion or court warrant related to a specific crime.",
    lawSection: "Article 21 (Right to Privacy - Puttaswamy ruling) & Sec 107 BNSS / 102 CrPC",
    category: "Phone & Privacy"
  },
  {
    question: "Is a Zero FIR valid anywhere in India?",
    answer: "YES. A Zero FIR can be filed at ANY police station in India regardless of where the crime occurred. The station where it is filed cannot refuse it on jurisdictional grounds; they must record it, assign a serial '0' number, and transfer it to the concerned station.",
    lawSection: "Lalita Kumari SC Judgment & Sec 173 BNSS / 154 CrPC Guidelines",
    category: "FIR & Complaints"
  },
  {
    question: "Can women be arrested by police at night?",
    answer: "NO. Under Section 43(5) BNSS 2023 (Section 46(4) CrPC), no female person can be arrested after sunset and before sunrise except under exceptional circumstances with the prior written permission of a Judicial Magistrate.",
    lawSection: "Section 43(5) BNSS 2023 / Section 46(4) CrPC 1973",
    category: "Women Rights"
  },
  {
    question: "What is the maximum time police can hold a person without court permission?",
    answer: "24 Hours (excluding reasonable travel time). Police MUST produce any arrested person before the nearest Judicial Magistrate within 24 hours. Detention beyond 24 hours without a Magistrate remand order is illegal detention.",
    lawSection: "Article 22(2) Constitution & Section 57 BNSS 2023 / 57 CrPC",
    category: "Arrest & Custody"
  },
  {
    question: "What should I do if a police officer demands cash or bribe?",
    answer: "Refuse politely, note officer badge number/name, call the Anti-Corruption Bureau (ACB) Helpline 1064 immediately, or file a trap complaint with the State Vigilance Department.",
    lawSection: "Section 7 Prevention of Corruption Act 1988",
    category: "Bribe & Misconduct"
  },
  {
    question: "Do traffic police have the right to take away my car keys?",
    answer: "NO. Traffic police officers are NOT authorized by law to snatch keys out of the ignition of your vehicle or physically pull you out of the car. Report key snatching to the Senior Officer or PCA.",
    lawSection: "Motor Vehicles Act 1988 & High Court directives",
    category: "Traffic Rules"
  }
];
