export type Language = 'en' | 'hi' | 'mr' | 'ta' | 'bn' | 'te' | 'kn';

export interface Translation {
  appName: string;
  tagline: string;
  emergencyBtn: string;
  searchPlaceholder: string;
  allCategories: string;
  streetCategory: string;
  arrestCategory: string;
  firCategory: string;
  searchCategory: string;
  misconductCategory: string;
  womenCategory: string;
  propertyCategory: string;
  readRights: string;
  yourRights: string;
  whatToDo: string;
  whatToAvoid: string;
  whereToComplain: string;
  evidenceToKeep: string;
  nextSteps: string;
  complaintGeneratorBtn: string;
  stateDirectoryBtn: string;
  arrestChecklistBtn: string;
  escalationFlowchartBtn: string;
  legalReferencesBtn: string;
  listenAudio: string;
  stopAudio: string;
  downloadRightsCard: string;
  showingResultsFor: string;
  emergencyContactsTitle: string;
  disclaimerTitle: string;
  disclaimerText: string;
}

export const TRANSLATIONS: Record<Language, Translation> = {
  en: {
    appName: "Know Your Police Rights",
    tagline: "Understand your legal rights, immediate actions & complaint steps in 30 seconds",
    emergencyBtn: "CRISIS SOS MODE",
    searchPlaceholder: "Search any situation (e.g., bribe, phone search, FIR refusal, night arrest)...",
    allCategories: "All Scenarios",
    streetCategory: "Street & Traffic",
    arrestCategory: "Arrest & Custody",
    firCategory: "FIR & Complaints",
    searchCategory: "Search & Seizure",
    misconductCategory: "Abuse & Bribes",
    womenCategory: "Women Safeguards",
    propertyCategory: "Phone & Property",
    readRights: "View Rights & Steps",
    yourRights: "Legal Rights & Sections (BNSS 2023 / CrPC)",
    whatToDo: "Recommended Action Right Now",
    whatToAvoid: "Actions You Must Avoid",
    whereToComplain: "Official Complaint Channels",
    evidenceToKeep: "Evidence & Documents to Retain",
    nextSteps: "Next Legal Remedy",
    complaintGeneratorBtn: "Draft Official SP Complaint",
    stateDirectoryBtn: "State PCA Directory",
    arrestChecklistBtn: "D.K. Basu Arrest Checklist",
    escalationFlowchartBtn: "FIR Refusal Hierarchy",
    legalReferencesBtn: "Supreme Court Case Laws",
    listenAudio: "Listen Audio",
    stopAudio: "Stop Audio",
    downloadRightsCard: "Download Rights Card (PNG)",
    showingResultsFor: "Showing situations for",
    emergencyContactsTitle: "National Helplines (24x7 Direct Toll-Free)",
    disclaimerTitle: "Public Educational Legal Notice",
    disclaimerText: "This portal provides public educational awareness based on Bharatiya Nagarik Suraksha Sanhita (BNSS 2023), Code of Criminal Procedure (CrPC 1973), BNS 2023, Indian Constitution & Supreme Court directives. It is not a substitute for formal legal representation. For legal aid, contact NALSA Helpline 15100."
  },
  hi: {
    appName: "जानिए अपने पुलिस अधिकार",
    tagline: "30 सेकंड में समझें अपने कानूनी अधिकार, तुरंत क्या करें और शिकायत कहां दर्ज करें",
    emergencyBtn: "आपतकालीन SOS मोड",
    searchPlaceholder: "कोई भी स्थिति खोजें (जैसे: रिश्वत, फोन जांच, एफआईआर मना, रात में गिरफ्तारी)...",
    allCategories: "सभी स्थितियां",
    streetCategory: "सड़क और ट्रैफिक",
    arrestCategory: "गिरफ्तारी और हिरासत",
    firCategory: "एफआईआर और शिकायत",
    searchCategory: "तलाशी और जब्ती",
    misconductCategory: "दुर्व्यवहार और रिश्वत",
    womenCategory: "महिलाओं की सुरक्षा",
    propertyCategory: "फोन और संपत्ति",
    readRights: "अधिकार और कदम देखें",
    yourRights: "आपके अधिकार और कानूनी धाराएं (BNSS / CrPC)",
    whatToDo: "अभी तुरंत क्या करें",
    whatToAvoid: "क्या करने से बचें",
    whereToComplain: "शिकायत कहां और कैसे करें",
    evidenceToKeep: "क्या सबूत / दस्तावेज संभाल कर रखें",
    nextSteps: "आगे का अगला कानूनी कदम",
    complaintGeneratorBtn: "एसपी शिकायत पत्र तैयार करें",
    stateDirectoryBtn: "राज्य पुलिस शिकायत निर्देशिका",
    arrestChecklistBtn: "डी.के. बासु गिरफ्तारी चेकलिस्ट",
    escalationFlowchartBtn: "एफआईआर मना पर कदम (फ्लोचार्ट)",
    legalReferencesBtn: "सुप्रीम कोर्ट के प्रमुख फैसले",
    listenAudio: "सुनें (ऑडियो)",
    stopAudio: "ऑडियो रोकें",
    downloadRightsCard: "अधिकार कार्ड डाउनलोड करें (PNG)",
    showingResultsFor: "परिणाम स्थिति",
    emergencyContactsTitle: "आपातकालीन हेल्पलाइन नंबर (24x7 टोल-फ्री)",
    disclaimerTitle: "जन जागरूकता कानूनी सूचना",
    disclaimerText: "यह वेबसाइट भारतीय नागरिक सुरक्षा संहिता (BNSS 2023), CrPC, BNS और सर्वोच्च न्यायालय के फैसलों के आधार पर जन जागरूकता के लिए बनाई गई है। यह कानूनी सलाह का विकल्प नहीं है। मुफ्त कानूनी सहायता के लिए NALSA 15100 पर संपर्क करें।"
  },
  mr: {
    appName: "आपले पोलीस अधिकार जाणून घ्या",
    tagline: "३० सेकंदात आपले कायदेशीर अधिकार आणि तातडीच्या उपाययोजना शोधा",
    emergencyBtn: "आणीबाणी SOS मोड",
    searchPlaceholder: "कोणतीही परिस्थिती शोधा (लाच, फोन तपासणी, एफआयआर नकार)...",
    allCategories: "सर्व प्रसंग",
    streetCategory: "रस्ता व वाहतूक",
    arrestCategory: "अटक व ताबा",
    firCategory: "तक्रार व एफआयआर",
    searchCategory: "झाडाझडती व जप्ती",
    misconductCategory: "गैरवर्तन व लाच",
    womenCategory: "महिला संरक्षण",
    propertyCategory: "फोन व मालमत्ता",
    readRights: "अधिकार व उपाय पहा",
    yourRights: "आपले अधिकार (BNSS / CrPC)",
    whatToDo: "आत्ताच काय करावे",
    whatToAvoid: "काय टाळावे",
    whereToComplain: "तक्रार कुठे करावी",
    evidenceToKeep: "कागदपत्रे व पुरावे",
    nextSteps: "पुढील कायदेशीर पाऊल",
    complaintGeneratorBtn: "SP कडे अर्ज तयार करा",
    stateDirectoryBtn: "राज्य पोलीस निर्देशिका",
    arrestChecklistBtn: "D.K. Basu अटक चेकलिस्ट",
    escalationFlowchartBtn: "तक्रार प्रवाह (Flowchart)",
    legalReferencesBtn: "सर्वोच्च न्यायालयाचे निकाल",
    listenAudio: "ऐका (Audio)",
    stopAudio: "ऑडिओ थांबवा",
    downloadRightsCard: "कार्ड डाउनलोड करा",
    showingResultsFor: "दाखवत असलेले निकाल",
    emergencyContactsTitle: "आणीबाणी हेल्पलाइन",
    disclaimerTitle: "कायदेशीर माहिती सूचना",
    disclaimerText: "ही वेबसाईट जनजागृतीसाठी आहे. तातडीच्या कायदेशीर मदतीसाठी NALSA १५१०० वर संपर्क साधा."
  },
  ta: {
    appName: "உங்கள் காவல் உரிமைகளை அறியுங்கள்",
    tagline: "30 வினாடிகளில் உங்கள் சட்டபூர்வ உரிமைகளையும் அவசர நடவடிக்கைகளையும் தெரிந்துகொள்ளுங்கள்",
    emergencyBtn: "அவசர SOS நிலை",
    searchPlaceholder: "சூழ்நிலையைத் தேடுங்கள் (லஞ்சம், போன் பரிசோதனை, எப்.ஐ.ஆர் மறுப்பு)...",
    allCategories: "அனைத்து சூழ்நிலைகளும்",
    streetCategory: "சாலை & போக்குவரத்து",
    arrestCategory: "கைது & காவல்",
    firCategory: "எப்.ஐ.ஆர் & புகார்",
    searchCategory: "சோதனை & பறிமுதல்",
    misconductCategory: "அத்துமீறல் & லஞ்சம்",
    womenCategory: "பெண்கள் பாதுகாப்பு",
    propertyCategory: "போன் & சொத்து",
    readRights: "உரிமைகளைக் காண்க",
    yourRights: "உங்கள் உரிமைகள் (BNSS / CrPC)",
    whatToDo: "உடனடியாக செய்ய வேண்டியவை",
    whatToAvoid: "தவிர்க்க வேண்டியவை",
    whereToComplain: "புகார் அளிக்கும் இடம்",
    evidenceToKeep: "வைத்துக் கொள்ள வேண்டிய சான்றுகள்",
    nextSteps: "அடுத்த சட்ட நடவடிக்கை",
    complaintGeneratorBtn: "எஸ்பி புகார் கடிதம் தயாரிக்க",
    stateDirectoryBtn: "மாநில காவல்துறை முகவரி",
    arrestChecklistBtn: "கைது சரிபார்ப்புப் பட்டியல்",
    escalationFlowchartBtn: "புகார் படிநிலைகள்",
    legalReferencesBtn: "உச்சநீதிமன்ற தீர்ப்புகள்",
    listenAudio: "ஒலியைக் கேட்க",
    stopAudio: "ஒலியை நிறுத்த",
    downloadRightsCard: "கார்டைப் பதிவிறக்க",
    showingResultsFor: "காட்டப்படும் முடிவுகள்",
    emergencyContactsTitle: "அவசர உதவி எண்கள்",
    disclaimerTitle: "சட்ட விழிப்புணர்வு அறிவிப்பு",
    disclaimerText: "இந்த இணையதளம் பொது விழிப்புணர்வுக்கானது. உடனடி சட்ட உதவிக்கு NALSA 15100ஐ தொடர்பு கொள்ளவும்."
  },
  bn: {
    appName: "আপনার পুলিশি অধিকার জানুন",
    tagline: "৩০ সেকেন্ডে আপনার আইনি অধিকার ও জরুরি পদক্ষেপ সম্পর্কে জানুন",
    emergencyBtn: "জরুরি SOS মোড",
    searchPlaceholder: "পরিস্থিতি অনুসন্ধান করুন (ঘুষ, ফোন সার্চ, এফআইআর প্রত্যাখ্যান)...",
    allCategories: "সকল পরিস্থিতি",
    streetCategory: "রাস্তা ও ট্রাফিক",
    arrestCategory: "গ্রেফতার ও আটক",
    firCategory: "এফআইআর ও অভিযোগ",
    searchCategory: "তল্লাশি ও বাজেয়াপ্ত",
    misconductCategory: "অপব্যবহার ও ঘুষ",
    womenCategory: "নারী সুরক্ষা",
    propertyCategory: "ফোন ও সম্পত্তি",
    readRights: "অধিকার দেখুন",
    yourRights: "আপনার আইনি অধিকার (BNSS / CrPC)",
    whatToDo: "এখনই আপনার করণীয়",
    whatToAvoid: "যা এড়িয়ে চলবেন",
    whereToComplain: "অভিযোগ কোথায় করবেন",
    evidenceToKeep: "প্রমাণ বা নথি যা রাখবেন",
    nextSteps: "পরবর্তী আইনি পদক্ষেপ",
    complaintGeneratorBtn: "এসপি অভিযোগ পত্র তৈরি করুন",
    stateDirectoryBtn: "রাজ্য পুলিশ ডিরেক্টরি",
    arrestChecklistBtn: "ডি.কে. বসু গ্রেফতার চেকলিস্ট",
    escalationFlowchartBtn: "অভিযোগের ধাপসমূহ (Flowchart)",
    legalReferencesBtn: "সুপ্রিম কোর্টের গুরুত্বপূর্ণ রায়",
    listenAudio: "অডিও শুনুন",
    stopAudio: "অডিও থামান",
    downloadRightsCard: "কার্ড ডাউনলোড করুন",
    showingResultsFor: "প্রদর্শিত ফলাফল",
    emergencyContactsTitle: "জরুরি হেল্পলাইন নম্বর",
    disclaimerTitle: "জনসচেতনতামূলক আইনি বিজ্ঞপ্তি",
    disclaimerText: "এটি জনসচেতনতার জন্য তৈরি। সরাসরি আইনি সাহায্যের জন্য NALSA ১৫১০০ এ যোগাযোগ করুন।"
  },
  te: {
    appName: "మీ పోలీసు హక్కులను తెలుసుకోండి",
    tagline: "30 సెకన్లలో మీ చట్టపరమైన హక్కులు మరియు అత్యవసర చర్యలను తెలుసుకోండి",
    emergencyBtn: "ఎమర్జెన్సీ SOS మోడ్",
    searchPlaceholder: "పరిస్థితిని వెతకండి (లంచం, ఫోన్ తనిఖీ, ఎఫ్ఐఆర్ నిరాకరణ)...",
    allCategories: "అన్ని పరిస్థితులు",
    streetCategory: "రోడ్డు & ట్రాఫిక్",
    arrestCategory: "అరెస్ట్ & కస్టడీ",
    firCategory: "ఎఫ్ఐఆర్ & ఫిర్యాదు",
    searchCategory: "తనిఖీ & జప్తు",
    misconductCategory: "దుర్వినియోగం & లంచం",
    womenCategory: "మహిళల రక్షణ",
    propertyCategory: "ఫోన్ & ఆస్తి",
    readRights: "హక్కులను చూడండి",
    yourRights: "మీ చట్టపరమైన హక్కులు (BNSS / CrPC)",
    whatToDo: "వెంటనే మీరు చేయవలసినవి",
    whatToAvoid: "చేయకూడనివి",
    whereToComplain: "ఎక్కడ ఫిర్యాదు చేయాలి",
    evidenceToKeep: "భద్రపరచవలసిన ఆధారాలు",
    nextSteps: "తదుపరి చట్టపరమైన అడుగు",
    complaintGeneratorBtn: "SP ఫిర్యాదు పత్రం తయారు చేయండి",
    stateDirectoryBtn: "రాష్ట్ర పోలీసు డైరెక్టరీ",
    arrestChecklistBtn: "అరెస్ట్ చెక్‌లిస్ట్ (D.K. Basu)",
    escalationFlowchartBtn: "ఫిర్యాదుల క్రమం (Flowchart)",
    legalReferencesBtn: "సుప్రీం కోర్టు తీర్పులు",
    listenAudio: "వినండి (Audio)",
    stopAudio: "ఆపండి",
    downloadRightsCard: "కార్డ్ డౌన్‌లోడ్ చేయండి",
    showingResultsFor: "ఫలితాలు",
    emergencyContactsTitle: "అత్యవసర హెల్ప్‌లైన్ నంబర్లు",
    disclaimerTitle: "సమాచార నోటీసు",
    disclaimerText: "ఇది అవగాహన కోసం మాత్రమే. ఉచిత చట్టపరమైన సహాయం కోసం NALSA 15100కి కాల్ చేయండి."
  },
  kn: {
    appName: "ನಿಮ್ಮ ಪೊಲೀಸ್ ಹಕ್ಕುಗಳನ್ನು ತಿಳಿಯಿರಿ",
    tagline: "30 ಸೆಕೆಂಡುಗಳಲ್ಲಿ ನಿಮ್ಮ ಕಾನೂನು ಹಕ್ಕುಗಳು ಮತ್ತು ತಕ್ಷಣದ ಕ್ರಮಗಳನ್ನು ತಿಳಿಯಿರಿ",
    emergencyBtn: "ತುರ್ತು SOS ಮೋಡ್",
    searchPlaceholder: "ಸನ್ನಿವೇಶವನ್ನು ಹುಡುಕಿ (ಲಂಚ, ಫೋನ್ ತಪಾಸಣೆ, ಎಫ್‌ಐಆರ್ ನಿರಾಕರಣೆ)...",
    allCategories: "ಎಲ್ಲಾ ಸನ್ನಿವೇಶಗಳು",
    streetCategory: "ರಸ್ತೆ ಮತ್ತು ಸಂಚಾರ",
    arrestCategory: "ಬಂಧನ ಮತ್ತು ವಶ",
    firCategory: "ಎಫ್‌ಐಆರ್ ಮತ್ತು ದೂರು",
    searchCategory: "ಶೋಧನೆ ಮತ್ತು ಜಪ್ತಿ",
    misconductCategory: "ದುರ್ವರ್ತನೆ ಮತ್ತು ಲಂಚ",
    womenCategory: "ಮಹಿಳಾ ರಕ್ಷಣೆ",
    propertyCategory: "ಫೋನ್ ಮತ್ತು ಆಸ್ತಿ",
    readRights: "ಹಕ್ಕುಗಳನ್ನು ನೋಡಿ",
    yourRights: "ನಿಮ್ಮ ಕಾನೂನು ಹಕ್ಕುಗಳು (BNSS / CrPC)",
    whatToDo: "ತಕ್ಷಣ ನೀವು ಮಾಡಬೇಕಾದದ್ದು",
    whatToAvoid: "ಮಾಡಬಾರದ ಕಾರ್ಯಗಳು",
    whereToComplain: "ದೂರು ಎಲ್ಲಿ ನೀಡಬೇಕು",
    evidenceToKeep: "ಇಟ್ಟುಕೊಳ್ಳಬೇಕಾದ ದಾಖಲೆಗಳು",
    nextSteps: "ಮುಂದಿನ ಕಾನೂನು ಹೆಜ್ಜೆ",
    complaintGeneratorBtn: "SP ದೂರು ಪತ್ರ ಸಿದ್ಧಪಡಿಸಿ",
    stateDirectoryBtn: "ರಾಜ್ಯ ಪೊಲೀಸ್ ನಿರ್ದೇಶನಾಲಯ",
    arrestChecklistBtn: "ಬಂಧನ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ",
    escalationFlowchartBtn: "ದೂರು ಕ್ರಮಗಳ ಫ್ಲೋಚಾರ್ಟ್",
    legalReferencesBtn: "ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ತೀರ್ಪುಗಳು",
    listenAudio: "ಆಡಿಯೋ ಆಲಿಸಿ",
    stopAudio: "ಆಡಿಯೋ ನಿಲ್ಲಿಸಿ",
    downloadRightsCard: "ಹಕ್ಕುಗಳ ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
    showingResultsFor: "ಫಲಿತಾಂಶಗಳು",
    emergencyContactsTitle: "ತುರ್ತು ಸಹಾಯವಾಣಿ",
    disclaimerTitle: "ಕಾನೂನು ಅರಿವು ಸೂಚನೆ",
    disclaimerText: "ಇದು ಸಾರ್ವಜನಿಕ ಅರಿವಿಗಾಗಿ ಮಾತ್ರ. ಉಚಿತ ಕಾನೂನು ನೆರವಿಗೆ NALSA 15100 ಗೆ ಕರೆ ಮಾಡಿ."
  }
};
