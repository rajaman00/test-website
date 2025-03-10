import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  //Navigation Menu
  en: {
    translation: {
      "about": "About Us", 
      "overview": "Company Overview",
      "directors":"Board of Directors",
      "org_strct": "Organization Structure",
      "award-achievement": "Awards & Achievements",
      "certificate":"Certificate",
      "reprots-accounts": "Reports & Accounts",
      // Transmission
      "transmission-n/w": "Transmission N/W",
      "current-infrastrucrure":"Current Infrastructure",
      "transmission-lines": "Transmission Lines",
      "grids": "Grids",
      "power-map": "Power Map",
      "system-parameters": "System Parameters",
      "tafm":"TAFM",
      "atc/ttc":"ATC/TTC",
      "peak-demand-met":"Peak Demand Met",
      "load-pattern":"Load Pattern",
      "arp":"ARP",
      "transmission-loss":"Transmission Loss",
      "upcoming-infrastructure":"Upcoming Infrastructure",

      //Media
      "media": "Media",
      "reports/compendium": "Reports/Compendium",
      "e-magazine": "e-Magazine",
      "photo-gallery": "Photo Gallery",
      "twitter": "Twitter",
      "newspaper-clippings": "Newspaper Clipping",

      //Procurement
      "procurement": "Procurement",
      "schedule-of-rate": "Schedule of Rate",
      "policy": "Policy",
      "tender": "Tenders",
      "e-procurement": "e-Procurement",
      "gem": "GeM",

      //STU
      "stu": "STU",
      "regulations": "Regulations", 
      "grid-code-of-bihar": "Grid Code of Bihar",
      "grid-code-of-india": "Grid Code of India",
      "electricity-act-2003": "Electricity Act 2003",
      "other-regulation 1": "Other Regulation 1",
      "other-regulation 2": "Other Regulation 2",
      "tariff-petitions": "Tariff Petitions",
      "open-access": "Open Access",

      //Employe
      "employee": "Employee",
      "office-order": "Office Order",
      "transfer-posting": "Transfer/Posting",
      "circulars": "Circulars",
      "pay-and-pension": "Pay & Pension",
      "apar": "APAR",
      "mediclaim": "Mediclaim",
      "ess/mss": "ESS/MSS",
      "form 16": "Form 16",
      "erp": "ERP",

      //others
      "career": "Career",
      "it-initiatives": "IT Initiatives",
      "photo-gallery": "Photo Gallery",
      "skip-to-main-content": "Skip to main content",


      //slider
      "control-room-at-mahnar": "Control Room at Mahnar",
      "switchyard-at-areraj": "Switchyard at Areraj",
      "switchyard-at-bhabhua": "Switchyard at Bhabhua",

      //about
      "about-us": "About Us",
      "about-section-text": "Bihar State Power Transmission Company Limited, a subsidiary company of Bihar State Power (Holding) Company Limited, is a Government of Bihar wholly owned corporate entity incorporated under the Companies Act 1956 on 1st Nov, 2012 after restructuring of erstwhile Bihar State Electricity Board. It carries out intra-state transmission and wheeling of electricity under license issued by the Bihar Electricity Regulatory Commission. It also discharges the functions of State Load Despatch Centre (SLDC) of Bihar.",
      "view-more": "View More",

      //what's new
      "whats-new": "What's New?",

      //VMV section
      "vision": "Vision",
      "mission": "Mission",
      "values": "Values",
      "vision-text": "To deliver excellence in service, innovation, efficiency, and sustainability for driving the growth and development of communities and industries, while ensuring environmental stewardship and maximizing value for the people of the state.",
      "mission-text 1:": "Striving to achieve the vision of the company by:",
      "mission-text 2": "Commitment to operational excellence, innovation and sustainability, ensuring uninterrupted and quality delivery of power.",
      "mission-text 3": "Adoption of world-class technology and practices to ensure the efficient and reliable delivery of electricity from power generation sources to distribution networks and directly to open-access consumers",
      "mission-text 4": "Adopting cost-effective power transmission services that support economic growth and improve the quality of life for the people of the state.",
      "values-text 1": "Transparency, Accountability and Integrity.",
      "values-text 2": "Quality service and social responsibility.",
      "values-text 3": "Responsive to change and new developments.",  

    }
  },
  hi: {
    translation: {
      "about": "हमारे बारे में",
      "overview": "कंपनी ओवरव्यू",
      "directors": "निदेशक मंडल",
      "org_strct": "संगठन संरचना",
      "award-achievement": "पुरस्कार और उपलब्धियाँ",
      "certificate": "प्रमाणपत्र",
      "reprots-accounts": "रिपोर्ट और खाता",
      "transmission-n/w": "ट्रांसमिशन नेटवर्क",
      "current-infrastrucrure": "वर्तमान बुनियादी संरचना",
      "transmission-lines": "ट्रांसमिशन लाइन्स",
      "grids": "ग्रिड्स",
      "power-map": "पावर मैप",
      "system-parameters": "सिस्टम पैरामीटर्स",
      "tafm": "टीएएफएम",
      "atc/ttc": "एटीसी / टीटीसी",
      "peak-demand-met": "पूर्ण की गई अधिकतम मांग",
      "load-pattern": "भार पैटर्न",
      "arp": "एरपी",
      "transmission-loss": "ट्रांसमिशन हानि",
      "upcoming-infrastructure": "आगामी बुनियादी संरचना",

      //Media
      "media": "मीडिया",
      "reports/compendium": "रिपोर्ट / संग्रह", 
      "e-magazine": "ई-मैगज़ीन",
      "photo-gallery": "फोटो गैलरी",
      "twitter": "ट्विटर",
      "newspaper-clippings": "अखबार क्लिपिंग",

      //Procurement
      "procurement": "खरीद",
      "schedule-of-rate": "मूल्य सूची",
      "policy": "नीति", 
      "tender": "निविदा",
      "e-procurement": "ई-प्रोक्योरमेंट",
      "gem": "जेम",

      //STU
      "stu": "एसटीयू",  
      "regulations": "नियम",
      "grid-code-of-bihar": "बिहार का ग्रिड कोड",
      "grid-code-of-india": "भारत का ग्रिड कोड",
      "electricity-act-2003": "विद्युत अधिनियम 2003",
      "other-regulation 1": "अन्य नियम 1",
      "other-regulation 2": "अन्य नियम 2",
      "tariff-petitions": "टैरिफ याचिकाएं",
      "open-access": "ओपन एक्सेस",

      //Employe
      "employee": "कर्मचारी",
      "office-order": "कार्यालय आदेश",
      "transfer-posting": "स्थानांतरण / पोस्टिंग",
      "circulars": "सर्कुलर",
      "pay-and-pension": "वेतन और पेंशन",
      "apar": "एपीएआर",
      "mediclaim": "मेडिक्लेम",
      "ess/mss": "ईएसएस / एमएसएस",
      "form 16": "फॉर्म 16",
      "erp": "ईआरपी",

      //others
      "career": "करियर",
      "it-initiatives": "आईटी पहल",
      "photo-gallery": "फोटो गैलरी",
      "skip-to-main-content": "मुख्य सामग्री पर जाएं",


      //slider
      "control-room-at-mahnar": "महनार में नियंत्रण कक्ष",
      "switchyard-at-areraj": "अरेराज में स्विचयार्ड",
      "switchyard-at-bhabhua": "भभुआ में स्विचयार्ड",

      //about
      "about-us": "हमारे बारे में",
      "about-section-text":"बिहार स्टेट पावर ट्रांसमिशन कंपनी लिमिटेड, बिहार स्टेट पावर (होल्डिंग) कंपनी लिमिटेड की एक सहायक कंपनी है, जो बिहार सरकार की पूर्ण स्वामित्व वाली निगमित इकाई है। इसे कंपनियों अधिनियम 1956 के तहत 1 नवंबर, 2012 को पूर्ववर्ती बिहार स्टेट इलेक्ट्रिसिटी बोर्ड के पुनर्गठन के बाद शामिल किया गया था। यह बिहार विद्युत नियामक आयोग द्वारा जारी लाइसेंस के तहत राज्य के भीतर विद्युत संचरण और वहन (विलिंग) का कार्य करती है। इसके अलावा, यह बिहार के राज्य भार प्रेषण केंद्र (State Load Despatch Centre - SLDC) के कार्यों का भी निर्वहन करती है।",
      "view-more": "अधिक देखें",

      //what's new
      "whats-new": "क्या नया है?",

      //VMV section
      "vision": "दृष्टि",
      "mission": "मिशन",
      "values": "मूल्य",  
      "vision-text": "सेवा, नवाचार, कुशलता और टिकाऊता में उत्कृष्टता प्रदान करना, समुदायों और उद्योगों के विकास और वृद्धि को बढ़ावा देने के लिए, जबकि प्रदेश के लोगों के लिए पर्यावरण संरक्षण और मूल्य को अधिकतम करना।",
      "mission-text 1:": "कंपनी की दृष्टि को प्राप्त करने के लिए प्रयास करना:",
      "mission-text 2": "संचालन उत्कृष्टता, नवाचार और टिकाऊता, विद्युत का अविरल और गुणवत्ता पूर्ण वितरण सुनिश्चित करना।",
      "mission-text 3": "विश्वस्तरीय प्रौद्योगिकी और अभ्यासों को अपनाना ताकि विद्युत उत्पादन स्रोतों से वितरण नेटवर्क और सीधे ओपन-एक्सेस उपभोक्ताओं तक विद्युत का कुशल और विश्वसनीय वितरण सुनिश्चित हो।",
      "mission-text 4": "आर्थिक विकास का समर्थन करने वाली लागत-कुशल विद्युत प्रेषण सेवाएं अपनाना जो प्रदेश के लोगों के लिए जीवन की गुणवत्ता में सुधार करती है।",
      "values-text 1": "पारदर्शिता, जवाबदेही और अखंडता।",
      "values-text 2": "गुणवत्ता सेवा और सामाजिक जिम्मेदारी।",
      "values-text 3": "परिवर्तन और नई विकासों के प्रति प्रतिस्पर्धी।",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
