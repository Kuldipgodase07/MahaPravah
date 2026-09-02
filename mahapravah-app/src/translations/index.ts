export type Language = 'mr' | 'en';

export interface Translations {
  common: {
    language: string;
    marathi: string;
    english: string;
    loginRegister: string;
    citizenLogin: string;
    govtLogin: string;
    explorePlatform: string;
    getStarted: string;
    watchVideo: string;
    subscribe: string;
    enterEmail: string;
    followUs: string;
    allRightsReserved: string;
    govtInitiative: string;
    privacyPolicy: string;
    termsOfService: string;
    viewAll: string;
    readMore: string;
    tagline: string;
    subTagline: string;
  };
  nav: {
    home: string;
    aboutUs: string;
    forStudents: string;
    forInstitutions: string;
    forEmployers: string;
    resources: string;
    dashboard: string;
    brandSlogan: string;
  };
  hero: {
    marathiHeadlineLine1: string;
    marathiHeadlineLine2: string;
    englishSubtitle: string;
    description: string;
    descriptionHighlight: string;
    getStarted: string;
    watchVideo: string;
    tagline: string;
    cards: {
      title: string;
      desc: string;
    }[];
    stats: {
      value: string;
      label: string;
    }[];
  };
  metrics: {
    title: string;
    subtitle: string;
    students: string;
    studentsSub: string;
    institutions: string;
    institutionsSub: string;
    opportunities: string;
    opportunitiesSub: string;
    courses: string;
    coursesSub: string;
    unifiedPlatform: string;
    unifiedPlatformSub: string;
  };
  journey: {
    sectionLabel: string;
    title: string;
    subtitlePart1: string;
    subtitlePart2: string;
    steps: {
      number: string;
      title: string;
      desc: string;
    }[];
  };
  ecosystem: {
    sectionLabel: string;
    headline: string;
    titlePart1: string;
    titlePart2: string;
    desc: string;
    pills: {
      title: string;
      desc: string;
    }[];
  };
  features: {
    sectionLabel: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    items: {
      tag: string;
      title: string;
      desc: string;
    }[];
  };
  maharashtra: {
    sectionLabel: string;
    titleLine1: string;
    titleLine2: string;
    desc: string;
    districtsLabel: string;
    districtsCount: string;
    districtsSub: string;
    storiesLabel: string;
    storiesTitle: string;
  };
  intelligence: {
    sectionLabel: string;
    titleLine1: string;
    titleLine2: string;
    desc: string;
    tag1: string;
    tag2: string;
    tag3: string;
  };
  cta: {
    newsletterTitle1: string;
    newsletterTitle2: string;
    newsletterSub: string;
    readyTitle: string;
    readySub: string;
    buttonText: string;
  };
  footer: {
    brandDesc: string;
    platformTitle: string;
    govtTitle: string;
    resourcesTitle: string;
    supportTitle: string;
    helpline: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  mr: {
    common: {
      language: 'भाषा',
      marathi: 'मराठी',
      english: 'English',
      loginRegister: 'लॉगिन / नोंदणी',
      citizenLogin: 'नागरिक लॉगिन',
      govtLogin: 'शासकीय लॉगिन',
      explorePlatform: 'प्लॅटफॉर्म एक्सप्लोर करा',
      getStarted: 'सुरू करा',
      watchVideo: 'व्हिडिओ पहा',
      subscribe: 'सबस्क्राईब करा',
      enterEmail: 'तुमचा ईमेल पत्ता प्रविष्ट करा',
      followUs: 'आम्हाला फॉलो करा',
      allRightsReserved: 'सर्व हक्क राखीव.',
      govtInitiative: 'महाराष्ट्र शासन उपक्रम',
      privacyPolicy: 'गोपनीयता धोरण',
      termsOfService: 'सेवा अटी',
      viewAll: 'सर्व पहा',
      readMore: 'अधिक वाचा',
      tagline: 'कौशल्याचा प्रवाह, समृद्ध महाराष्ट्राचा विकास.',
      subTagline: 'एकच मंच, अनेक संधी – तुमच्या यशाची नवी दिशा.',
    },
    nav: {
      home: 'मुख्यपृष्ठ',
      aboutUs: 'आमच्याबद्दल',
      forStudents: 'विद्यार्थ्यांसाठी',
      forInstitutions: 'संस्थांसाठी',
      forEmployers: 'नियोक्त्यांसाठी',
      resources: 'संसाधने',
      dashboard: 'डॅशबोर्ड',
      brandSlogan: 'कौशल्याचा प्रवाह, समृद्ध महाराष्ट्राचा विकास.',
    },
    hero: {
      marathiHeadlineLine1: 'कौशल्याचा प्रवाह,',
      marathiHeadlineLine2: 'समृद्ध महाराष्ट्राचा विकास.',
      englishSubtitle: 'कौशल्ये जी संधींमध्ये रूपांतरित होतात.',
      description: 'महाप्रवाह हे कौशल्य, प्रशिक्षण, रोजगारक्षमता आणि करिअरच्या वाढीसाठी महाराष्ट्राचे एकात्मिक व्यासपीठ आहे.',
      descriptionHighlight: 'तरुणांचे सक्षमीकरण. महाराष्ट्राचे बळकटीकरण.',
      getStarted: 'सुरू करा',
      watchVideo: 'व्हिडिओ पहा',
      tagline: '✦ एकच मंच, अनेक संधी – तुमच्या यशाची नवी दिशा. ✦',
      cards: [
        {
          title: 'कौशल्य विकास',
          desc: 'रोजगारक्षम कौशल्यांसाठी दर्जेदार अभ्यासक्रम आणि प्रमाणपत्रे मिळवा.',
        },
        {
          title: 'रोजगारक्षमता',
          desc: 'मूल्यांकन, प्रशिक्षण आणि करिअर सहाय्यासह रोजगारक्षमता वाढवा.',
        },
        {
          title: 'करिअर संधी',
          desc: 'संपूर्ण महाराष्ट्रात इंटर्नशिप, नोकऱ्या आणि करिअरच्या संधी शोधा.',
        },
        {
          title: 'संस्थांची जोडणी',
          desc: 'कुशल भविष्यासाठी विद्यापीठे, महाविद्यालये आणि प्रशिक्षण भागीदार एकत्र.',
        },
        {
          title: 'प्रगती आणि वाढ',
          desc: 'प्रगतीचा मागोवा घ्या आणि तुमची करिअरची ध्येये सहज साध्य करा.',
        },
      ],
      stats: [
        { value: '१० लाख+', label: 'विद्यार्थी' },
        { value: '१०००+', label: 'शैक्षणिक संस्था' },
        { value: '५०००+', label: 'अभ्यासक्रम' },
        { value: '५०,०००+', label: 'नोकरीच्या संधी' },
        { value: '१ व्यासपीठ', label: 'अनंत शक्यता' },
      ],
    },
    metrics: {
      title: 'महाराष्ट्राचा कौशल्य प्रभाव',
      subtitle: 'राज्यातील तरुणांना भविष्यातील संधींशी जोडणारे आकडे',
      students: 'विद्यार्थी',
      studentsSub: 'महाराष्ट्रभरातील शिकणाऱ्यांचे सक्षमीकरण',
      institutions: 'संस्था',
      institutionsSub: 'महाविद्यालये आणि प्रशिक्षण भागीदार',
      opportunities: 'नोकरी आणि इंटर्नशिप संधी',
      opportunitiesSub: 'प्रतिभेला योग्य संधींशी जोडणे',
      courses: 'अभ्यासक्रम आणि कार्यक्रम',
      coursesSub: 'उद्योगाभिमुख आधुनिक अभ्यासक्रम',
      unifiedPlatform: 'एकात्मिक व्यासपीठ',
      unifiedPlatformSub: 'तुमच्या सर्वांगीण विकासासाठी अनंत शक्यता',
    },
    journey: {
      sectionLabel: 'महाप्रवाह कार्यपद्धती',
      title: 'तुमच्या यशाच्या प्रवासाची ५ सोपी पावले',
      subtitlePart1: 'एक अखंड प्रवास.',
      subtitlePart2: 'अनंत संधींची दालने.',
      steps: [
        { number: '०१', title: 'नोंदणी करा', desc: 'काही मिनिटांत तुमचे मोफत डिजिटल प्रोफाइल तयार करा.' },
        { number: '०२', title: 'शोधा', desc: 'तुमच्या आवडीनुसार कौशल्य अभ्यासक्रम आणि प्रशिक्षण निवडा.' },
        { number: '०३', title: 'शिका आणि कुशल व्हा', desc: 'दर्जेदार प्रशिक्षण घेऊन प्रमाणित कौशल्ये आत्मसात करा.' },
        { number: '०४', title: 'संधी मिळवा', desc: 'उद्योग जगतातील नामांकित कंपन्यांमध्ये नोकऱ्या मिळवा.' },
        { number: '०५', title: 'प्रगती करा', desc: 'सतत नवीन कौशल्ये आत्मसात करून करिअरमध्ये पुढे जा.' },
      ],
    },
    ecosystem: {
      sectionLabel: 'आमची परिसंस्था',
      headline: 'एकत्र येऊन घडवूया सक्षम महाराष्ट्र.',
      titlePart1: 'एक व्यासपीठ.',
      titlePart2: 'जोडलेला समृद्ध महाराष्ट्र.',
      desc: 'विद्यार्थी, शैक्षणिक संस्था, उद्योग आणि शासन यांना एका छताखाली आणून महाराष्ट्राच्या युवा शक्तीला सक्षम करणारे डिजिटल नेटवर्क.',
      pills: [
        { title: 'विद्यार्थी व तरुण', desc: 'योग्य कौशल्ये, मार्गदर्शन आणि थेट नोकरीची हमी.' },
        { title: 'प्रशिक्षण संस्था', desc: 'उद्योगाभिमुख अभ्यासक्रम आणि राज्यस्तरीय पोहोच.' },
        { title: 'उद्योग व नियोक्ते', desc: 'कुशल, प्रमाणित आणि तत्पर मनुष्यबळ.' },
        { title: 'शासकीय विभाग', desc: 'पारदर्शक अंमलबजावणी व प्रगतीचा रिअल-टाइम डेटा.' },
      ],
    },
    features: {
      sectionLabel: 'प्लॅटफॉर्म वैशिष्ट्ये',
      titleLine1: 'कुशल महाराष्ट्रासाठी',
      titleLine2: 'सर्वसमावेशक डिजिटल सुविधा.',
      subtitle: 'महाराष्ट्राच्या तरुणांना जागतिक दर्जाची कौशल्ये मिळवून देणारे सहा मुख्य आधारस्तंभ.',
      items: [
        { tag: 'प्रोफाइल', title: 'एकीकृत नागरिक ओळख', desc: 'प्रत्येक विद्यार्थ्याचे एकच डिजिटल करिअर ओळखपत्र जे सर्व संधींमध्ये वैध राहील.' },
        { tag: 'शोध', title: 'कौशल्य व प्रशिक्षण शोध', desc: 'उद्योग जगताच्या गरजेनुसार आवश्यक असणारे सर्व आधुनिक अभ्यासक्रम एकाच ठिकाणी.' },
        { tag: 'AI-आधारित', title: 'स्मार्ट रोजगार जुळवणी', desc: 'तुमच्या कौशल्यांनुसार योग्य नोकऱ्या आणि इंटर्नशिप्स शोधणारी प्रगत बुद्धिमत्ता.' },
        { tag: 'प्रगती ट्रॅकिंग', title: 'करिअर जीवनप्रवास', desc: 'पहिल्या प्रशिक्षण सत्रापासून ते नोकरी मिळेपर्यंत प्रत्येक टप्प्याची स्पष्ट नोंद.' },
        { tag: 'विश्लेषण', title: 'शासकीय अंतर्दृष्टी', desc: 'भविष्यातील रोजगार धोरणांसाठी डेटा-आधारित अचूक विश्लेषण आणि नियोजन.' },
        { tag: 'सर्वसमावेशक', title: 'दुर्गम भागांपर्यंत पोहोच', desc: 'ग्रामीण भागापासून महानगरांपर्यंत प्रत्येक नागरिकासाठी सुलभ व विनामूल्य प्रवेश.' },
      ],
    },
    maharashtra: {
      sectionLabel: 'महाराष्ट्र विस्तार',
      titleLine1: '३६ जिल्ह्यांत',
      titleLine2: 'कौशल्याची क्रांती.',
      desc: 'कोकण, पश्चिम महाराष्ट्र, मराठवाडा, विदर्भ आणि खान्देश — प्रत्येक कानाकोपऱ्यातील तरुणांना प्रगतीची समान संधी.',
      districtsLabel: 'जिल्हे जोडले',
      districtsCount: '३६ / ३६',
      districtsSub: 'संपूर्ण महाराष्ट्र व्यापलेले',
      storiesLabel: 'यशस्वी कथा',
      storiesTitle: 'महाप्रवाह यशोगाथा',
    },
    intelligence: {
      sectionLabel: 'स्मार्ट तंत्रज्ञान',
      titleLine1: 'भविष्यातील कौशल्ये,',
      titleLine2: 'आधुनिक तंत्रज्ञानाची साथ.',
      desc: 'आर्टिफिशिअल इंटेलिजन्स आणि डेटा सायन्सच्या सहाय्याने महाराष्ट्रातील तरुणांना जागतिक पातळीवरील कौशल्यांसाठी तयार करत आहोत.',
      tag1: 'एआय करिअर असिस्टंट',
      tag2: 'कौशल्य तफावत विश्लेषण',
      tag3: 'उद्योग-आधारित शिफारसी',
    },
    cta: {
      newsletterTitle1: 'महाप्रवाह सोबत जोडा,',
      newsletterTitle2: 'तुमच्या उज्ज्वल भविष्याची सुरुवात करा!',
      newsletterSub: 'नवीन अभ्यासक्रम, शिष्यवृत्ती आणि नोकरीच्या संधींचे अपडेट मिळवण्यासाठी ईमेल नोंदवा.',
      readyTitle: 'तुम्ही तुमचे भविष्य घडवायला तयार आहात का?',
      readySub: 'आजच मोफत नोंदणी करा आणि महाराष्ट्राच्या कुशल क्रांतीचा भाग व्हा.',
      buttonText: 'मोफत नोंदणी करा',
    },
    footer: {
      brandDesc: 'कौशल्य, प्रशिक्षण, रोजगारक्षमता आणि करिअरच्या विकासासाठी महाराष्ट्र शासनाचे अधिकृत डिजिटल व्यासपीठ.',
      platformTitle: 'प्लॅटफॉर्म',
      govtTitle: 'शासकीय विभाग',
      resourcesTitle: 'संसाधने',
      supportTitle: 'मदत व सहाय्य',
      helpline: 'टोल-फ्री हेल्पलाइन: १८००-१२३-७७२८',
      copyright: '© २०२६ महाप्रवाह, कौशल्य विकास, रोजगार व उद्योजकता विभाग, महाराष्ट्र शासन.',
    },
  },
  en: {
    common: {
      language: 'Language',
      marathi: 'मराठी',
      english: 'English',
      loginRegister: 'Login / Register',
      citizenLogin: 'Citizen Login',
      govtLogin: 'Government Login',
      explorePlatform: 'Explore Platform',
      getStarted: 'Get Started',
      watchVideo: 'Watch Video',
      subscribe: 'Subscribe',
      enterEmail: 'Enter your email address',
      followUs: 'Follow Us',
      allRightsReserved: 'All rights reserved.',
      govtInitiative: 'Government of Maharashtra Initiative',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      viewAll: 'View All',
      readMore: 'Read More',
      tagline: 'Flow of Skills, Progress of Prosperous Maharashtra.',
      subTagline: 'One Platform, Infinite Opportunities – The New Direction to Your Success.',
    },
    nav: {
      home: 'Home',
      aboutUs: 'About Us',
      forStudents: 'For Students',
      forInstitutions: 'For Institutions',
      forEmployers: 'For Employers',
      resources: 'Resources',
      dashboard: 'Dashboard',
      brandSlogan: 'Flow of Skills, Powering Maharashtra.',
    },
    hero: {
      marathiHeadlineLine1: 'The Flow of Skills,',
      marathiHeadlineLine2: 'Powering Maharashtra.',
      englishSubtitle: 'Skills That Flow Into Opportunities.',
      description: "MahaPravah is Maharashtra's unified platform for skills, training, employability and career growth.",
      descriptionHighlight: 'Empowering youth. Strengthening Maharashtra.',
      getStarted: 'Get Started',
      watchVideo: 'Watch Video',
      tagline: '✦ एकच मंच, अनेक संधी – तुमच्या यशाची नवी दिशा. ✦',
      cards: [
        {
          title: 'Skill Development',
          desc: 'Access quality courses and certifications to build job-ready skills.',
        },
        {
          title: 'Employability',
          desc: 'Enhance your employability with assessments, training and career support.',
        },
        {
          title: 'Career Opportunities',
          desc: 'Discover internships, jobs and career opportunities across Maharashtra.',
        },
        {
          title: 'Connect Institutions',
          desc: 'Universities, colleges and training partners working together for a skilled future.',
        },
        {
          title: 'Track & Grow',
          desc: 'Track your progress and achieve your career goals with ease.',
        },
      ],
      stats: [
        { value: '10 L+', label: 'Students' },
        { value: '1000+', label: 'Institutions' },
        { value: '5000+', label: 'Courses' },
        { value: '50K+', label: 'Job Opportunities' },
        { value: '1 Platform', label: 'Endless Possibilities' },
      ],
    },
    metrics: {
      title: "Maharashtra's Skill Impact",
      subtitle: 'Numbers that demonstrate the transformation of youth across Maharashtra',
      students: 'Students',
      studentsSub: 'Empowering learners across Maharashtra',
      institutions: 'Institutions',
      institutionsSub: 'Colleges & training partners onboard',
      opportunities: 'Job & Internship Opportunities',
      opportunitiesSub: 'Connecting talent with opportunities',
      courses: 'Courses & Programs',
      coursesSub: 'Industry-aligned courses & programs',
      unifiedPlatform: 'Unified Platform',
      unifiedPlatformSub: 'Endless possibilities for your growth',
    },
    journey: {
      sectionLabel: 'HOW MAHAPRAVAH WORKS',
      title: '5 Simple Steps to Launch Your Career Journey',
      subtitlePart1: 'One Continuous Journey.',
      subtitlePart2: 'Infinite Possibilities.',
      steps: [
        { number: '01', title: 'Register', desc: 'Create your verified digital career identity in minutes.' },
        { number: '02', title: 'Explore', desc: 'Discover industry-aligned courses, certifications, and pathways.' },
        { number: '03', title: 'Learn & Upskill', desc: 'Master in-demand skills through world-class trainers and labs.' },
        { number: '04', title: 'Get Hired', desc: 'Apply directly for high-growth internships and corporate jobs.' },
        { number: '05', title: 'Grow & Excel', desc: 'Continuous career progression with verified skill credentials.' },
      ],
    },
    ecosystem: {
      sectionLabel: 'OUR PARTNERS & ECOSYSTEM',
      headline: 'Coming Together to Build a Resilient Maharashtra.',
      titlePart1: 'One Platform.',
      titlePart2: 'Connected Maharashtra.',
      desc: 'A unified digital network bringing together students, universities, leading employers, and government departments to fuel the state’s economic ambition.',
      pills: [
        { title: 'Youth & Job Seekers', desc: 'Direct pathway to high-paying jobs and verified credentials.' },
        { title: 'Academic Institutions', desc: 'Modernized curriculum alignment with corporate recruitment needs.' },
        { title: 'Employers & Industry', desc: 'Pre-assessed, job-ready talent pool across every sector.' },
        { title: 'State Government', desc: 'Transparent policy execution with real-time workforce analytics.' },
      ],
    },
    features: {
      sectionLabel: 'PLATFORM FEATURES',
      titleLine1: 'Everything Needed For',
      titleLine2: 'A Skilled Maharashtra.',
      subtitle: "Six core pillars powering Maharashtra's unified skill and employability ecosystem.",
      items: [
        { tag: 'Profile', title: 'Unified Citizen Profile', desc: 'Create one connected skill and career identity that travels with every citizen across all platforms.' },
        { tag: 'Discovery', title: 'Skill & Training Discovery', desc: 'Discover relevant training programs and courses aligned to career goals and market demand.' },
        { tag: 'AI-Powered', title: 'Employability Intelligence', desc: 'Connect citizens with opportunities through smart AI matching based on competencies.' },
        { tag: 'Tracking', title: 'Career Journey', desc: 'Track your complete roadmap from learning to placement with transparent milestones.' },
        { tag: 'Analytics', title: 'Government Intelligence', desc: 'Provide data-driven insights and workforce analytics to support state policymaking.' },
        { tag: 'Inclusive', title: 'Inclusive Access', desc: 'Free, multilingual digital services designed for citizens from tribal areas to smart cities.' },
      ],
    },
    maharashtra: {
      sectionLabel: 'MAHARASHTRA IMPACT',
      titleLine1: 'Across All 36 Districts,',
      titleLine2: 'The Skill Revolution.',
      desc: 'Connecting rural hinterlands to industrial hubs — ensuring every young person has equal access to prosperous careers.',
      districtsLabel: 'Districts Connected',
      districtsCount: '36 / 36',
      districtsSub: 'Complete Statewide Coverage',
      storiesLabel: 'SUCCESS STORIES',
      storiesTitle: 'Real People. Real Transformations.',
    },
    intelligence: {
      sectionLabel: 'SMART INTELLIGENCE',
      titleLine1: 'Future Skills Guided by',
      titleLine2: 'Next-Gen Technology.',
      desc: 'Harnessing Artificial Intelligence and predictive analytics to match students with the industries of tomorrow.',
      tag1: 'AI Career Assistant',
      tag2: 'Skill Gap Diagnostics',
      tag3: 'Smart Employer Matching',
    },
    cta: {
      newsletterTitle1: 'Connect with MahaPravah,',
      newsletterTitle2: 'Begin Your Journey Towards a Brighter Future!',
      newsletterSub: 'Subscribe to receive verified notifications on new courses, scholarships, and job fairs.',
      readyTitle: 'Ready to Transform Your Future?',
      readySub: 'Register today and become part of Maharashtra’s greatest skill movement.',
      buttonText: 'Register Free Today',
    },
    footer: {
      brandDesc: "Maharashtra's official unified digital platform for skill development, training, employability, and lifelong career growth.",
      platformTitle: 'Platform',
      govtTitle: 'Government',
      resourcesTitle: 'Resources',
      supportTitle: 'Support & Help',
      helpline: 'Toll-Free Helpline: 1800-123-7728',
      copyright: '© 2026 MahaPravah, Department of Skills, Employment, Entrepreneurship & Innovation, Govt. of Maharashtra.',
    },
  },
};
