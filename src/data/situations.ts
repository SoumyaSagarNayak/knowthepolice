export interface LegalSection {
  newLaw: string; // BNSS / BNS / BSA 2023
  oldLaw: string; // CrPC / IPC / Evidence Act
  description: string;
  landmarkCase?: string;
  sourceUrl?: string;
}

export interface Situation {
  id: string;
  title: string;
  category: 'street' | 'arrest' | 'fir' | 'search' | 'misconduct' | 'women' | 'property';
  icon: string;
  shortSummary: string; // 1-sentence 5-second read
  emergencyBullets: string[]; // Top 3 rules for SOS 30-sec mode
  rights: LegalSection[];
  whatToDo: string[];
  whatToAvoid: string[];
  whereToComplain: {
    authority: string;
    action: string;
    contact?: string;
  }[];
  evidenceToKeep: string[];
  nextSteps: string;
}

export const SITUATIONS: Situation[] = [
  {
    id: 'police-stop-question',
    title: 'Police Stop or Question You on the Street / Traffic',
    category: 'street',
    icon: 'ShieldAlert',
    shortSummary: 'Police can ask for your identity and vehicle documents, but cannot physically abuse, detain without cause, or inspect your private phone.',
    emergencyBullets: [
      'Stay calm, polite, and firm. Ask the officer for their name, badge number, and police station.',
      'For traffic stops, only a Sub-Inspector (SI) or higher rank can issue fines over statutory limits. Demand an official e-Challan.',
      'Police CANNOT force you to unlock your phone or search your pockets without valid reasonable suspicion or warrant.'
    ],
    rights: [
      {
        newLaw: 'Section 35 BNSS 2023 / Motor Vehicles Act Sec 130',
        oldLaw: 'Section 41 CrPC 1973',
        description: 'Police officer must clearly display visible name tag and badge. Right to ask identity of inquiring officer.',
        landmarkCase: 'Nandini Satpathy v. P.L. Dani (1978 AIR 1025) - Right to remain silent against self-incrimination (Art 20(3)).'
      },
      {
        newLaw: 'Section 176 BNSS 2023',
        oldLaw: 'Section 157 CrPC 1973',
        description: 'Police cannot detain you arbitrarily on the street unless there is reasonable suspicion of a cognizable offense.'
      }
    ],
    whatToDo: [
      'Remain calm and speak respectfully without provoking the officer.',
      'Ask: "Am I free to go, or am I being detained?"',
      'Provide your valid ID (Aadhaar/DL) or Driving License/RC/Insurance for traffic checks (DigiLocker copies are legally valid under Rule 9A IT Rules).',
      'Note down officer\'s name, badge number, vehicle number, and location.'
    ],
    whatToAvoid: [
      'DO NOT physically resist, run away, or engage in verbal abuse.',
      'DO NOT hand over cash without a printed or official digital receipt (e-Challan).',
      'DO NOT unlock your smartphone or hand over personal messaging apps.'
    ],
    whereToComplain: [
      { authority: 'Superintendent of Police (SP) / DCP', action: 'Submit written complaint regarding harassment.' },
      { authority: 'State Police Complaints Authority (PCA)', action: 'File complaint for officer misconduct.' },
      { authority: 'National / State Human Rights Commission', action: 'Online portal filing if rights were violated.' }
    ],
    evidenceToKeep: [
      'e-Challan receipt or SMS text',
      'Audio/Video recording (Recording police in a public place performing public duties is legal)',
      'Badge number and police vehicle registration number'
    ],
    nextSteps: 'If illegal fine or harassment occurred, file an online grievance on the State Police Citizen Portal or approach the Traffic Lok Adalat.'
  },
  {
    id: 'arrest-detention',
    title: 'You Are Arrested or Detained by Police',
    category: 'arrest',
    icon: 'Lock',
    shortSummary: 'You have absolute rights under Art 22 of the Constitution: know grounds of arrest, inform family immediately, meet a lawyer, and be presented to a magistrate within 24 hours.',
    emergencyBullets: [
      'RIGHT TO REMAIN SILENT & LAWYER: You do NOT have to answer incriminating questions. Demand to speak to a lawyer or family immediately.',
      'ARREST MEMO & MEDICAL EXAM: Demand a formal Arrest Memo with time & date, and a mandatory medical examination under Sec 53 BNSS.',
      '24-HOUR RULE: Police MUST present you before a Judicial Magistrate within 24 hours of arrest. Detention beyond 24 hours without magistrate order is ILLEGAL.'
    ],
    rights: [
      {
        newLaw: 'Section 36, 37, 47, 48 & 53 BNSS 2023',
        oldLaw: 'Section 41B, 41D, 50, 54 & 57 CrPC 1973',
        description: 'Mandatory Arrest Memo, Right to consult Advocate of choice, Right to inform family/friend, Mandatory medical examination, 24-Hour Magistrate presentation.',
        landmarkCase: 'D.K. Basu v. State of West Bengal (1997 1 SCC 416) - Landmark 11 Mandatory Arrest Guidelines.'
      },
      {
        newLaw: 'Article 22(1) & 22(2) Constitution of India',
        oldLaw: 'Article 20(3) & 21 Constitution',
        description: 'Fundamental rights against illegal detention and protection against self-incrimination.'
      }
    ],
    whatToDo: [
      'Ask clearly: "What are the grounds of my arrest?"',
      'Ensure the police fill out an Arrest Memo (signed by you and at least one independent witness or family member).',
      'Exercise your right to make 1 phone call to a relative, friend, or advocate immediately.',
      'Insist on a complete medical examination (Section 53 BNSS / 54 CrPC) before entering custody to document existing bodily condition.'
    ],
    whatToAvoid: [
      'DO NOT sign blank papers, confession statements, or unread documents.',
      'DO NOT physically assault officers or attempt to escape.',
      'DO NOT believe verbal promises of quick release in exchange for a confession.'
    ],
    whereToComplain: [
      { authority: 'Judicial Magistrate / Sessions Court', action: 'Inform Magistrate directly during 24-hr presentation about any mistreatment or illegal detention.' },
      { authority: 'District Legal Services Authority (DLSA / NALSA)', action: 'Call 15100 for free legal representation.' },
      { authority: 'State Human Rights Commission (SHRC)', action: 'File petition for illegal arrest.' }
    ],
    evidenceToKeep: [
      'Copy of Arrest Memo',
      'Medical Examination Report (Sec 53 BNSS / 54 CrPC)',
      'Time log of when you were picked up vs presented before Magistrate'
    ],
    nextSteps: 'Your lawyer will file a Bail Application under Sec 479/480 BNSS (437/439 CrPC) or approach the High Court for Habeas Corpus if missing.'
  },
  {
    id: 'fir-refusal',
    title: 'Police Refuse to Register an FIR or Complaint',
    category: 'fir',
    icon: 'FileX',
    shortSummary: 'If police refuse your FIR for a cognizable offense, they violate Supreme Court orders (Lalita Kumari). You can file Zero FIR, send registered post to SP, or apply to Magistrate.',
    emergencyBullets: [
      'LALITA KUMARI RULE: Registration of FIR is MANDATORY for cognizable offenses (theft, assault, robbery, fraud, harassment). Police cannot refuse.',
      'ZERO FIR: You can file an FIR at ANY police station in India regardless of jurisdiction; it will be transferred later.',
      'RECOURSE: If SHO refuses, send complaint via Registered Post to Superintendent of Police (SP) or file under Sec 175(3) BNSS before Magistrate.'
    ],
    rights: [
      {
        newLaw: 'Section 173(1) & 173(4) BNSS 2023',
        oldLaw: 'Section 154(1) & 154(3) CrPC 1973',
        description: 'Mandatory registration of FIR upon information of cognizable crime. Allows electronic FIR (e-FIR) and written complaint to SP.',
        landmarkCase: 'Lalita Kumari v. Govt of UP (2014) 2 SCC 1 - SC ruled registration of FIR is mandatory if info discloses cognizable offense.'
      },
      {
        newLaw: 'Section 175(3) BNSS 2023',
        oldLaw: 'Section 156(3) CrPC 1973',
        description: 'Power of Judicial Magistrate to order registration of FIR and investigation.'
      }
    ],
    whatToDo: [
      'Request to speak with the Station House Officer (SHO) or Senior Inspector.',
      'Submit your complaint in writing, dated, signed, and request an official acknowledgment / Diary Number (GD Entry / NCR).',
      'If refused, send the written complaint via Registered Post with AD (Acknowledgment Due) to the Superintendent of Police (SP) / DCP.',
      'Use our interactive Complaint Letter Generator to draft a formal SP complaint instantly.'
    ],
    whatToAvoid: [
      'DO NOT leave the station without asking for a written receipt or General Diary (GD) entry number.',
      'DO NOT pay any fee — FIR copy is 100% FREE by law.'
    ],
    whereToComplain: [
      { authority: 'Superintendent of Police (SP) / Police Commissioner', action: 'Send written complaint by post under Sec 173(4) BNSS.' },
      { authority: 'Judicial Magistrate Court', action: 'File petition under Sec 175(3) BNSS through an advocate.' },
      { authority: 'State Police Complaints Authority (PCA)', action: 'File complaint against duty refusal.' }
    ],
    evidenceToKeep: [
      'Copy of written complaint submitted',
      'Postal receipt & Speed Post tracking receipt of letter sent to SP',
      'GD Entry / Acknowledgment receipt if issued'
    ],
    nextSteps: 'File a Magistrate application under Sec 175(3) BNSS / 156(3) CrPC asking the Court to direct the police to register the FIR.'
  },
  {
    id: 'search-seizure',
    title: 'Police Want to Search You, Your Vehicle, or Home',
    category: 'search',
    icon: 'Search',
    shortSummary: 'Police must show a valid Search Warrant or follow strict legal search procedures (independent witnesses, search memo, female search rules).',
    emergencyBullets: [
      'DEMAND SEARCH WARRANT / GROUNDS: Unless in fresh pursuit of a criminal or hot emergency, home search requires a valid Warrant under Sec 96 BNSS.',
      'INDEPENDENT WITNESSES (PANCHAS): Police MUST call at least 2 independent local neighborhood witnesses to attend the search.',
      'SEARCH OF WOMEN: A woman can ONLY be searched by a female officer with strict regard to decency (Sec 43(5) BNSS / 51 CrPC).'
    ],
    rights: [
      {
        newLaw: 'Section 96, 103, 105 & 185 BNSS 2023',
        oldLaw: 'Section 93, 100 & 165 CrPC 1973',
        description: 'Procedure for search with/without warrant, requirement of independent witnesses (Panchnama), audio-video recording requirement under BNSS.',
        landmarkCase: 'State of Punjab v. Baldev Singh (1999 6 SCC 172) - Search procedures and right to be searched before Magistrate/Gazetted Officer.'
      }
    ],
    whatToDo: [
      'Ask the officer: "Do you have a Search Warrant issued by a Court?" If yes, read it carefully.',
      'If search is conducted without warrant (Sec 185 BNSS / 165 CrPC), police must record written reasons for urgency.',
      'Insist that 2 independent respectable neighbors act as witnesses (Panchas) during the entire search.',
      'Demand a copy of the Seizure Memo (Panchnama) listing every item seized, signed by witnesses.'
    ],
    whatToAvoid: [
      'DO NOT allow officers to search private areas without witnesses present.',
      'DO NOT sign an incomplete Panchnama / Seizure list.',
      'DO NOT physically block officers, but explicitly state your objection if no warrant is shown.'
    ],
    whereToComplain: [
      { authority: 'Superintendent of Police (SP)', action: 'Report illegal search without warrant or witnesses.' },
      { authority: 'Judicial Magistrate Court', action: 'Challenge illegal search under criminal procedure rules.' },
      { authority: 'Police Complaints Authority (PCA)', action: 'File officer misconduct complaint.' }
    ],
    evidenceToKeep: [
      'Copy of Search Warrant or written grounds of search',
      'Copy of Seizure Memo / Panchnama',
      'Contact details of independent witnesses present'
    ],
    nextSteps: 'File a legal application before the Magistrate court challenging the search and requesting return of seized items (Seapurdari).'
  },
  {
    id: 'phone-property-seizure',
    title: 'Police Seize Your Smartphone, Laptop, or Property',
    category: 'property',
    icon: 'Smartphone',
    shortSummary: 'Police cannot randomly demand your phone password or seize digital devices without a Seizure Memo, proper nexus to an offense, and court oversight.',
    emergencyBullets: [
      'NO UNLIMITED FISHING EXPEDITIONS: Supreme Court has ruled police cannot arbitrarily seize personal digital devices without specific relevance to a crime.',
      'SEIZURE MEMO IS MANDATORY: Police must issue a detailed property seizure memo with hash values / IMEI numbers immediately.',
      'RIGHT AGAINST SELF-INCRIMINATION: You cannot be forced to provide passwords that self-incriminate (Art 20(3)). Demand lawyer presence.'
    ],
    rights: [
      {
        newLaw: 'Section 107 BNSS 2023',
        oldLaw: 'Section 102 CrPC 1973',
        description: 'Power of police officer to seize certain property alleged or suspected to have been stolen, or found under suspicious circumstances. Mandatory reporting to Magistrate.',
        landmarkCase: 'Virendra Khanna v. State of Karnataka (2021) & SC Guidelines on Digital Device Seizure (2023).'
      }
    ],
    whatToDo: [
      'Ask the officer for the specific written order or FIR connection authorizing the device seizure.',
      'Ensure the officer records the phone make, model, color, serial number, and IMEI number on an official Seizure Memo.',
      'Request that the device be placed in a sealed envelope in front of witnesses with signatures across the seal.',
      'Demand an official copy of the Seizure Memo.'
    ],
    whatToAvoid: [
      'DO NOT hand over your phone unlocked without a written seizure order.',
      'DO NOT allow phone contents to be browsed without witness presence.',
      'DO NOT leave the police station without obtaining a signed Seizure Memo copy.'
    ],
    whereToComplain: [
      { authority: 'Judicial Magistrate Court', action: 'File application under Sec 497 BNSS / 457 CrPC for release of phone/property (Supardari).' },
      { authority: 'High Court', action: 'Writ petition under Art 226 for violation of Fundamental Right to Privacy (Puttaswamy ruling).' }
    ],
    evidenceToKeep: [
      'Seizure Memo with IMEI and serial numbers',
      'Purchase invoice or IMEI proof of ownership',
      'Names of independent witnesses present during seizure'
    ],
    nextSteps: 'File an urgent application under Sec 497 BNSS / 457 CrPC before the Magistrate court seeking immediate custody release of your phone.'
  },
  {
    id: 'misconduct-assault',
    title: 'Police Threaten, Abuse, or Physically Assault You',
    category: 'misconduct',
    icon: 'AlertTriangle',
    shortSummary: 'Custodial violence, verbal abuse, or physical assault by police is a serious crime under BNS/IPC. Get an immediate medical exam and report to PCA & Human Rights Commission.',
    emergencyBullets: [
      'ZERO TOLERANCE: Custodial violence & torture violates Article 21 (Right to Life). Police officers face prosecution under BNS and dismissal.',
      'IMMEDIATE MEDICAL EXAM: Go straight to a Govt Hospital for a Medico-Legal Certificate (MLC). Medical exam is mandatory under Sec 53 BNSS.',
      'FILE COMPLAINT TO PCA & SHRC: State Police Complaints Authority (PCA) & Human Rights Commission handle officer abuse directly.'
    ],
    rights: [
      {
        newLaw: 'Sections 115, 118, 198 BNS 2023 & Sec 53 BNSS 2023',
        oldLaw: 'Sections 323, 330, 348 IPC 1860 & Sec 54 CrPC 1973',
        description: 'Voluntarily causing hurt to extort confession, wrongful confinement, and mandatory medical examination.',
        landmarkCase: 'Paramvir Singh Saini v. Baljit Singh (2021) 1 SCC 184 - SC mandate for CCTV cameras in all police stations, corridors, and lockups.'
      }
    ],
    whatToDo: [
      'Prioritize your safety — avoid escalating physical conflict.',
      'Go immediately to the nearest Government Hospital Casualty / Emergency department and ask for a Medico-Legal Case (MLC) report.',
      'Document all visible injuries, bruises, timestamps, and doctor notes.',
      'File a complaint with the District / State Police Complaints Authority (PCA) and State Human Rights Commission (SHRC).'
    ],
    whatToAvoid: [
      'DO NOT delay medical examination — bruises and injuries must be officially recorded within 24-48 hours.',
      'DO NOT delete CCTV footage requests — immediately submit a written application to preserve police station CCTV footage under *Paramvir Singh Saini* SC judgment.'
    ],
    whereToComplain: [
      { authority: 'State Police Complaints Authority (PCA)', action: 'File petition for police brutality & suspension.' },
      { authority: 'National / State Human Rights Commission (NHRC / SHRC)', action: 'Submit online complaint on hrcnet.nic.in.' },
      { authority: 'Judicial Magistrate Court', action: 'File private criminal complaint under Sec 223 BNSS / 200 CrPC against guilty officers.' }
    ],
    evidenceToKeep: [
      'Govt Hospital MLC (Medico-Legal Certificate) report',
      'Photographs/Videos of injuries with date stamp',
      'Names, badge numbers, police vehicle numbers, and witness testimonies'
    ],
    nextSteps: 'File a private criminal complaint before the Judicial Magistrate under Sec 223 BNSS against the specific police officers.'
  },
  {
    id: 'bribe-demand',
    title: 'A Police Officer Asks for a Bribe',
    category: 'misconduct',
    icon: 'DollarSign',
    shortSummary: 'Demanding or taking a bribe is a severe punishable offense under Prevention of Corruption Act. Report directly to Anti-Corruption Bureau (ACB) Helpline 1064.',
    emergencyBullets: [
      'DO NOT PAY BRIBE: Demanding a bribe is illegal under Section 7 Prevention of Corruption Act (7 years imprisonment for officer).',
      'CALL ACB HELPLINE 1064: Every State has an active Anti-Corruption Bureau (ACB) / Vigilance Department helpline.',
      'TRAP PROCEDURE: ACB can set up a legal trap to catch the corrupt officer red-handed with marked currency.'
    ],
    rights: [
      {
        newLaw: 'Prevention of Corruption Act 1988 (Sec 7, 7A & 13) & BNS 2023',
        oldLaw: 'Prevention of Corruption Act 1988 / IPC Sec 161',
        description: 'Offense relating to public servant being bribed, demanding undue advantage, and criminal misconduct.',
        landmarkCase: 'CBI v. Ashok Kumar Aggarwal (2014) - Strict enforcement against corrupt public servants.'
      }
    ],
    whatToDo: [
      'Refuse the bribe demand firmly and politely.',
      'Note down officer name, designation, badge number, police station, and exact amount demanded.',
      'Record audio/video evidence secretly if safe to do so.',
      'Contact the State Anti-Corruption Bureau (ACB) / Vigilance Hotline `1064` or submit complaint on state ACB portal.'
    ],
    whatToAvoid: [
      'DO NOT offer or volunteer bribe money — paying a bribe voluntarily without reporting is also an offense under Sec 8 PC Act.',
      'DO NOT post unverified accusations on social media without filing an official ACB report first.'
    ],
    whereToComplain: [
      { authority: 'Anti-Corruption Bureau (ACB) / Vigilance Department', action: 'Call toll-free helpline 1064 or lodge online complaint.' },
      { authority: 'Superintendent of Police (Vigilance)', action: 'Submit written complaint with audio proof.' },
      { authority: 'Central Vigilance Commission (CVC)', action: 'File online report on cvc.gov.in.' }
    ],
    evidenceToKeep: [
      'Audio recording of bribe demand',
      'WhatsApp messages, call records, or UPI/payment handle requests',
      'Date, time, location, and badge details of officer'
    ],
    nextSteps: 'File a formal trap application with ACB; ACB officers will organize a raid and arrest the officer under PC Act.'
  },
  {
    id: 'women-police-rights',
    title: 'A Woman Dealing With the Police',
    category: 'women',
    icon: 'UserCheck',
    shortSummary: 'Women have special legal safeguards: No arrest after sunset/before sunrise without magistrate permission, search by female officers only, and home interrogation.',
    emergencyBullets: [
      'NO NIGHT ARREST: Women CANNOT be arrested between Sunset and Sunrise except under extraordinary circumstances with prior written permission of Judicial Magistrate (Sec 43(5) BNSS / 46(4) CrPC).',
      'FEMALE OFFICER SEARCH & DETENTION: Search or body check can ONLY be done by a female officer. Women must be kept in separate women lockups.',
      'HOME INTERROGATION & 181 HELPLINE: Women and children under 15 cannot be called to police station for questioning; questioning must take place at home.'
    ],
    rights: [
      {
        newLaw: 'Section 43(5), 173(1), 179(1) BNSS 2023',
        oldLaw: 'Section 46(4), 154(1), 160(1) CrPC 1973',
        description: 'Special provisions for arrest of females, recording female victim statements by female officers, home questioning immunity.',
        landmarkCase: 'Sheela Barse v. State of Maharashtra (1983 2 SCC 96) - SC guidelines on treatment of women prisoners and police lockups.'
      }
    ],
    whatToDo: [
      'If questioned as a witness or victim, insist that questioning occur at your residence in presence of family (Sec 179 BNSS / 160 CrPC).',
      'If arrested after sunset, demand to see the Judicial Magistrate\'s written order granting night arrest exemption.',
      'Insist that a woman police officer perform any body search or frisking.',
      'Call Women Helpline `181` or National Commission for Women (NCW) helpline `7827170170` immediately.'
    ],
    whatToAvoid: [
      'DO NOT accompany male officers alone without a female police constable present.',
      'DO NOT go to the police station for casual questioning if you are a female witness/complainant — insist on home statement.'
    ],
    whereToComplain: [
      { authority: 'National Commission for Women (NCW)', action: 'Lodge complaint on ncw.nic.in or call 7827170170.' },
      { authority: 'State Commission for Women', action: 'Submit written petition for women rights violation.' },
      { authority: 'Judicial Magistrate Court', action: 'Report illegal night detention or absence of female officer.' }
    ],
    evidenceToKeep: [
      'Timestamps showing detention beyond sunset',
      'Names/Badges of male officers involved',
      'Call logs to 181 / 112 emergency'
    ],
    nextSteps: 'File a complaint with National Commission for Women (NCW) and approach Magistrate court for strict disciplinary action against offending officers.'
  },
  {
    id: 'extended-detention',
    title: 'Detained for an Extended Period (Beyond 24 Hours)',
    category: 'arrest',
    icon: 'Clock',
    shortSummary: 'Detention beyond 24 hours without a Judicial Magistrate remand order is illegal detention (unlawful confinement). Family or advocate can file Habeas Corpus petition.',
    emergencyBullets: [
      'CONSTITUTIONAL 24-HOUR LIMIT: Police MUST produce an arrested person before the nearest Judicial Magistrate within 24 hours (excluding transit time).',
      'HABEAS CORPUS PETITION: If a person disappears in police custody or is held over 24 hours, file Habeas Corpus in High Court / Supreme Court.',
      'NALSA FREE LEGAL AID: Call 15100 for emergency free legal aid advocate appointment.'
    ],
    rights: [
      {
        newLaw: 'Section 57 BNSS 2023 & Article 22(2) Constitution',
        oldLaw: 'Section 57 CrPC 1973',
        description: 'Person arrested not to be detained more than twenty-four hours without special permission of Magistrate.',
        landmarkCase: 'Khatri v. State of Bihar (1981) - SC held 24-hr rule is sacred constitutional guarantee.'
      }
    ],
    whatToDo: [
      'Family members should immediately visit the police station and demand entry into the Station General Diary (GD).',
      'Call NALSA Free Legal Services Helpline `15100` or contact a criminal lawyer.',
      'Submit a urgent representation to the District Magistrate (DM) or Superintendent of Police (SP).'
    ],
    whatToAvoid: [
      'DO NOT wait quietly — if 24 hours pass without magistrate presentation, illegal custody is occurring.'
    ],
    whereToComplain: [
      { authority: 'High Court / Supreme Court', action: 'File Writ of Habeas Corpus under Article 226 / Article 32.' },
      { authority: 'District Magistrate / Chief Judicial Magistrate (CJM)', action: 'File urgent application for production of detainee.' },
      { authority: 'National Human Rights Commission (NHRC)', action: 'Report illegal custodial detention.' }
    ],
    evidenceToKeep: [
      'CCTV footage of police picking up person',
      'Phone call records/timestamps when person was detained',
      'Station GD entry receipt'
    ],
    nextSteps: 'Advocate will file an urgent Habeas Corpus petition in High Court directing police to produce the person in court immediately.'
  },
  {
    id: 'police-refuse-help',
    title: 'Police Refuse to Help or Record Your Complaint',
    category: 'fir',
    icon: 'HelpCircle',
    shortSummary: 'Police officers have a legal duty to assist citizens in distress. Refusal to perform public duty can be challenged via SP complaint, PCA, or Magistrate.',
    emergencyBullets: [
      'PUBLIC DUTY MANDATE: Police officers are public servants bound by law to record complaints and protect life & property.',
      'FILE ONLINE COMPLAINT: Most State Police portals allow direct e-complaint and e-FIR registration online.',
      'APPROACH HIGHER AUTHORITIES: Submit written complaint directly to DCP / SP or file a complaint with Police Complaints Authority.'
    ],
    rights: [
      {
        newLaw: 'Section 198 & 217 BNS 2023',
        oldLaw: 'Section 166A & 217 IPC 1860',
        description: 'Punishment for public servant disobeying direction under law or refusing to record victim complaint.'
      }
    ],
    whatToDo: [
      'Politely request officer name and employee ID code.',
      'Use official State Police Mobile App or CCTNS Web Portal to register complaint online.',
      'Send complaint by Registered Speed Post to Superintendent of Police (SP).',
      'Call Emergency Helpline `112` and report inaction.'
    ],
    whatToAvoid: [
      'DO NOT leave without filing online or postal record.',
      'DO NOT engage in heated argument inside police station.'
    ],
    whereToComplain: [
      { authority: 'Superintendent of Police (SP) / Police Commissioner', action: 'Submit written complaint by post.' },
      { authority: 'State Police Complaints Authority (PCA)', action: 'Lodge complaint for dereliction of duty.' }
    ],
    evidenceToKeep: [
      'Speed post postal receipt',
      'Online e-complaint reference ID',
      'Name & station details of officer who refused assistance'
    ],
    nextSteps: 'File petition before Magistrate under Sec 175(3) BNSS seeking direction for investigation.'
  },
  {
    id: 'police-notice-received',
    title: 'You Receive a Police Notice (Sec 35 BNSS / 41A CrPC)',
    category: 'street',
    icon: 'FileText',
    shortSummary: 'A notice under Sec 35 BNSS / 41A CrPC means your presence is required for investigation. As long as you comply, police CANNOT arrest you without court permission.',
    emergencyBullets: [
      'ARNESH KUMAR PROTECTION: Police cannot arrest automatically for offenses punishable under 7 years if you comply with Notice (Sec 35 BNSS / 41A CrPC).',
      'RIGHT TO ADVOCATE: You have full right to consult your criminal defense lawyer before responding to police notice.',
      'WRITTEN COMPLIANCE: Always submit a written response acknowledging notice and confirming cooperation.'
    ],
    rights: [
      {
        newLaw: 'Section 35(3) & 35(4) BNSS 2023',
        oldLaw: 'Section 41A(3) & 41A(4) CrPC 1973',
        description: 'Notice of appearance before police officer. No arrest if person complies with notice conditions.',
        landmarkCase: 'Arnesh Kumar v. State of Bihar (2014) 8 SCC 273 - SC mandate prohibiting routine arrests in offenses carrying up to 7 years imprisonment.'
      }
    ],
    whatToDo: [
      'Check notice details: Must specify Police Station, Officer Name, FIR/Case Number, Date & Time of appearance.',
      'Consult a criminal defense lawyer immediately to draft your reply statement.',
      'Appear on the designated date along with your advocate and submit written reply with acknowledgment receipt.'
    ],
    whatToAvoid: [
      'DO NOT ignore or dodge a Sec 35 BNSS / 41A CrPC notice — failure to appear gives police legal grounds to arrest you under Sec 35(6) BNSS!',
      'DO NOT go to the station without informing family or lawyer.'
    ],
    whereToComplain: [
      { authority: 'High Court', action: 'File petition under Sec 528 BNSS / 482 CrPC for quashing malicious notice or seeking Anticipatory Bail.' },
      { authority: 'Sessions Court', action: 'Apply for Anticipatory Bail under Sec 482 BNSS / 438 CrPC if arrest is feared.' }
    ],
    evidenceToKeep: [
      'Copy of original Police Notice received',
      'Written acknowledgment receipt of your appearance at police station',
      'Lawyer notice response copy'
    ],
    nextSteps: 'File Anticipatory Bail application in Sessions Court under Sec 482 BNSS / 438 CrPC if police threaten arrest during appearance.'
  },
  {
    id: 'police-home-visit',
    title: 'Police Come to Your Home for Investigation or Search',
    category: 'search',
    icon: 'Home',
    shortSummary: 'When police visit your home, verify identity badges, check for valid Search/Arrest Warrant, ensure female officer presence for women, and demand independent neighborhood witnesses.',
    emergencyBullets: [
      'VERIFY IDENTITY & WARRANT: Ask officers to show official ID cards and Court Search/Arrest Warrant before entering.',
      'WOMEN PROTECTION: Male officers cannot enter private quarters of women without female constables present.',
      'NEIGHBORHOOD WITNESSES: Demand that 2 respectable local neighbors act as Panchas for any inspection.'
    ],
    rights: [
      {
        newLaw: 'Section 96 & 103 BNSS 2023',
        oldLaw: 'Section 93 & 100 CrPC 1973',
        description: 'Search procedure at private premises, presence of independent witnesses (Panchnama), and right of occupant to attend search.',
        landmarkCase: 'Puttaswamy v. Union of India (2017) 10 SCC 1 - Fundamental Right to Privacy under Article 21.'
      }
    ],
    whatToDo: [
      'Remain calm and speak through the door initially to check officer IDs.',
      'Ask: "Do you have a Court Warrant or written Search Order?"',
      'Call a trusted neighbor or family lawyer to be present during the search.',
      'Insist on an official Panchnama / Seizure Memo copy signed by independent witnesses before officers leave.'
    ],
    whatToAvoid: [
      'DO NOT allow officers to search without independent local witnesses present.',
      'DO NOT sign any unread document or blank Panchnama paper.'
    ],
    whereToComplain: [
      { authority: 'Superintendent of Police (SP)', action: 'File complaint if officers entered without warrant or harassed family.' },
      { authority: 'State Human Rights Commission (SHRC)', action: 'Lodge complaint for violation of domestic privacy.' }
    ],
    evidenceToKeep: [
      'Home CCTV footage / Doorbell video',
      'Copy of Search Warrant shown',
      'Copy of Seizure Memo / Panchnama signed by neighbors'
    ],
    nextSteps: 'Consult your criminal advocate to inspect legality of search warrant and file petition before Magistrate court.'
  }
];
