# Know Your Police Rights (India) - Product & Design Architecture

## 1. Overview & Vision
**Know Your Police Rights** is a high-speed, mobile-first web application designed for Indian citizens to understand their legal rights, immediate recommended actions, things to avoid, and complaint procedures within **30 seconds** during any police interaction.

Designed for the **Independence Day Let's Code Development Challenge**, the application prioritizes extreme clarity, accurate legal references (citing both **Bharatiya Nagarik Suraksha Sanhita - BNSS 2023** and **Code of Criminal Procedure - CrPC 1973**, **BNS 2023 / IPC**, **BSA 2023 / Evidence Act**, plus landmark **Supreme Court judgments**), accessibility (multilingual support & speech synthesis), and practical emergency tools (Complaint Letter Generator & State Directory).

---

## 2. Core Features & Capabilities

### ⚡ 1. 30-Second Emergency Panic / SOS Mode
- One-tap prominent button for immediate crisis situations (e.g. "Stopped by Police Right Now", "Police at Door", "Under Threat/Detained").
- High-contrast, big-text card displaying **Top 3 Rules To Follow Immediately**.
- Integrated **Text-to-Speech (TTS)** voice read-aloud in English & Hindi so users can listen hands-free or play audio.

### 📚 2. Comprehensive Situation Database (12 Scenarios)
1. **Police Stop or Questioning** (Street & Traffic stops, demand for identity, vehicle search rules)
2. **Arrest & Detention** (Grounds of arrest, memo of arrest, right to inform family, 24-hr magistrate presentation, legal aid)
3. **Police Refusal to Register FIR** (Zero FIR, written complaint to SP under Sec 173(4) BNSS / 154(3) CrPC, Magistrate application under Sec 175(3) BNSS / 156(3) CrPC)
4. **Personal & Belongings Search** (Search memo, independent witnesses requirement, female search rules under Sec 43(5) BNSS / 51 CrPC)
5. **Seizure of Phone & Property** (Digital privacy rights, Supreme Court guidelines, seizure memo requirement, refusal to hand over passwords without court order)
6. **Police Misconduct, Abuse or Assault** (Custodial violence protection, medical exam under Sec 53 BNSS / 54 CrPC, Police Complaints Authority - PCA, SHRC/NHRC complaint)
7. **Bribe Demands / Corruption** (Anti-Corruption Bureau hotline 1064, trap procedures, vigilance complaint, statutory protections)
8. **Women & Police Interactions** (No night arrest between sunset and sunrise without special judicial permission under Sec 43(5) BNSS / 46(4) CrPC, examination at home only, 181 hotline)
9. **Extended Detention / Illegal Custody** (24-hour limit, Habeas Corpus petition under Art 32/226, NALSA legal aid 15100)
10. **Police Refusal to Accept Complaint** (Right to send registered post complaint, Zero FIR mandate *Lalita Kumari v. Govt of UP*)
11. **Police Notice Received (Sec 35 BNSS / 41A CrPC)** (When appearance is mandatory, right to lawyer, non-arrest compliance rules under *Arnesh Kumar v. State of Bihar*)
12. **Home Visit / Investigation by Police** (Warrant inspection, identity check of officers, female occupant rights, search witness rules)

### 📊 3. Core Situation Card Layout (The 7-Step Clarity Model)
For every single situation, the view provides:
1. **What is Happening?** (Clear context)
2. **Your Legal Rights** (Citing specific BNSS/CrPC sections & SC rulings)
3. **What You Should Do Right Now** (Immediate actionable advice)
4. **What You Should Avoid** (Dos and Don'ts to prevent escalation)
5. **Where & How to Complain** (Official complaint channels)
6. **Evidence / Documents to Keep** (Badge numbers, photos, memos, medical receipts)
7. **Next Legal Step** (Draft complaint, contact NALSA, approach court)

### ✍️ 4. Interactive Instant Complaint Letter Generator
- Allows users to generate an officially formatted complaint letter to the **Superintendent of Police (SP) / Police Commissioner** or **Police Complaints Authority (PCA)**.
- Fields: Complainant Name, Incident Date/Time, Police Station, Officer Name/Badge Number, Description of Infringement (FIR refusal / Bribe / Abuse / Illegal Seizure).
- Output: Instant formatted legal letter ready to **Copy, Print, or Download as PDF/TXT**.

### 🏛️ 5. State-Wise Police Help & Complaint Directory
- Database covering all major Indian States & UTs (Delhi, Maharashtra, Karnataka, Uttar Pradesh, Tamil Nadu, West Bengal, Gujarat, Telangana, Kerala, Rajasthan, etc.).
- Direct links, phone numbers, and web portals for:
  - **Police Complaints Authority (PCA)**
  - **Anti-Corruption Bureau (ACB)**
  - **State Human Rights Commission (SHRC)**
  - **District Legal Services Authority (DLSA / NALSA)**

### ☎️ 6. Emergency Contacts Bar
- One-click dialers:
  - `112` National Emergency
  - `181` Women Helpline
  - `1064` Anti-Corruption Helpline
  - `15100` NALSA Legal Aid
  - `14449` Cybercrime Helpline

### 🌐 7. Multilingual Support
- High quality language translation engine for:
  - **English**, **Hindi (हिंदी)**, **Marathi (मराठी)**, **Tamil (தமிழ்)**, **Bengali (বাংলা)**, **Telugu (తెలుగు)**, **Kannada (కన్నడ)**.

### 🔎 8. Smart Search & Filter System
- Fast client-side instant search across keywords ("bribe", "phone", "fir", "woman", "night", "search", "warrant").
- Filter pill tags: `All`, `Emergency/Arrest`, `Traffic & Street`, `FIR & Complaints`, `Women & Minorities`, `Corruption & Abuse`, `Property & Digital`.

---

## 3. Technology Stack & UI Architecture
- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables (Dark/Light themes, Glassmorphism cards, Saffron & Navy Blue accents).
- **Icons**: `lucide-react`
- **Speech**: Browser Web Speech API (`window.speechSynthesis`) for zero-dependency native audio read-aloud.

---

## 4. Legal Compliance & Disclaimer
- Prominent footer & modal disclaimer stating: *"Educational & Awareness Purpose Only. Cites Bharatiya Nagarik Suraksha Sanhita (BNSS 2023), CrPC 1973, Indian Constitution & Supreme Court Directives. Not a substitute for professional legal representation."*
- Direct links to India Code (indiacode.nic.in), eCourts, NALSA (nalsa.gov.in), and MHA.
