import { Faculty, PageContent, User, ResearchCentre, Publication, Testimonial } from './types';

export const INITIAL_USERS: User[] = [
  { id: 'u1', name: 'Dr. Priya Venkatesh', email: 'admin@dli.edu', role: 'SUPER_ADMIN', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop' },
];

export const RESEARCH_CENTRES: ResearchCentre[] = [
  {
    id: "COE001",
    name: "Computational Linguistics Research Centre",
    shortName: "CLRC",
    head: "Dr. Lakshmi Narayanan",
    description: "Developing linguistic resources, corpora, and tools for Indian languages, including treebanks and morphological analyzers.",
    color: "text-orange",
    icon: "BookOpen",
    focusAreas: ["Corpus Development", "Morphological Analysis", "Syntactic Parsing", "Universal Dependencies"],
    keyProjects: [
      { name: "Tamil Universal Dependencies Treebank", funding: "UGC Major Project", amount: "₹45 Lakhs", status: "Ongoing" },
      { name: "DravidNLP Toolkit", funding: "DST SERB", amount: "₹1.2 Cr", status: "Ongoing" }
    ],
    facilities: ["Annotation Lab", "Language Corpus Server (50TB)"],
    publicationsCount: 45,
    patentsCount: 8
  },
  {
    id: "COE002",
    name: "Cognitive Computing Lab",
    shortName: "CCL",
    head: "Dr. Nandini Rao",
    description: "Investigating the intersection of human cognition and AI to build human-like systems.",
    color: "text-teal",
    icon: "Brain",
    focusAreas: ["Psycholinguistics", "Eye-tracking Studies", "EEG Analysis", "Cognitive Architectures"],
    keyProjects: [
      { name: "Bilingual Brain", funding: "DST Cognitive Science", amount: "₹1.5 Cr", status: "Ongoing" }
    ],
    facilities: ["EEG Lab (64-channel)", "Eye-tracking Suite"],
    publicationsCount: 38,
    patentsCount: 4
  },
  {
    id: "COE003",
    name: "Speech & Audio Processing Unit",
    shortName: "SAPU",
    head: "Dr. Rajesh Kumar",
    description: "Advancing speech technology for Indian languages, including ASR and TTS for diverse accents.",
    color: "text-vermilion",
    icon: "Mic",
    focusAreas: ["ASR", "Text-to-Speech", "Speaker Verification", "Speech Enhancement"],
    keyProjects: [
      { name: "VoiceID Banking", funding: "SBI Innovation", amount: "₹75 Lakhs", status: "Completed" }
    ],
    facilities: ["Anechoic Chamber", "Recording Studio"],
    publicationsCount: 42,
    patentsCount: 15
  },
  {
    id: "COE004",
    name: "AI & Machine Translation Centre",
    shortName: "AMTC",
    head: "Dr. Priya Venkatesh",
    description: "Leading research in neural machine translation for low-resource Indian languages.",
    color: "text-purple-600",
    icon: "Languages",
    focusAreas: ["Neural Machine Translation", "Low-Resource NLP", "Multilingual Models"],
    keyProjects: [
      { name: "BharatTrans", funding: "MeitY", amount: "₹5 Cr", status: "Ongoing" }
    ],
    facilities: ["GPU Cluster", "Parallel Corpus Repo"],
    publicationsCount: 55,
    patentsCount: 18
  },
  {
    id: "COE005",
    name: "Conversational AI & Chatbot Lab",
    shortName: "CACL",
    head: "Dr. Arun Prakash",
    description: "Developing intelligent agents that understand context, emotion, and cultural nuances.",
    color: "text-blue-500",
    icon: "MessageSquare",
    focusAreas: ["Dialogue Systems", "Emotion-Aware AI", "Chatbots"],
    keyProjects: [
      { name: "HealthMate", funding: "BIRAC", amount: "₹60 Lakhs", status: "Ongoing" }
    ],
    facilities: ["Dialogue Annotation Platform"],
    publicationsCount: 28,
    patentsCount: 10
  }
];

export const INITIAL_FACULTY: Faculty[] = [
  {
    id: "FAC001",
    name: "Dr. Priya Venkatesh",
    designation: "Professor & Head",
    qualification: "Ph.D. (Stanford)",
    bio: "Globally recognized expert in Neural Machine Translation. spent 5 years at Google Research before joining SIMATS.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    specialization: ["Neural Machine Translation", "Low-Resource NLP"],
    email: "priya.v@simats.edu.in",
    publicationsCount: 82,
    patentsCount: 12,
    hIndex: 28,
    achievements: ["Best Paper ACL 2022", "Google Faculty Award"],
    publications: []
  },
  {
    id: "FAC002",
    name: "Dr. Rajesh Kumar",
    designation: "Associate Professor",
    qualification: "Ph.D. (IIT Bombay)",
    bio: "Leads the Speech Processing Lab. Work on accent-invariant speech recognition adopted by telecom providers.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    specialization: ["Speech Recognition", "Phonetics Computing"],
    email: "rajesh.k@simats.edu.in",
    publicationsCount: 56,
    patentsCount: 8,
    hIndex: 19,
    achievements: ["ISCA Best Paper 2021"],
    publications: []
  },
  {
    id: "FAC003",
    name: "Dr. Meera Sundaram",
    designation: "Associate Professor",
    qualification: "Ph.D. (NUS Singapore)",
    bio: "Specializes in sentiment analysis and opinion mining. Leads the Social NLP Research Group.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    specialization: ["Sentiment Analysis", "Social Media Mining"],
    email: "meera.s@simats.edu.in",
    publicationsCount: 48,
    patentsCount: 5,
    hIndex: 17,
    achievements: ["IBM Faculty Award 2021"],
    publications: []
  },
  {
    id: "FAC004",
    name: "Dr. Arun Prakash",
    designation: "Assistant Professor",
    qualification: "Ph.D. (CMU)",
    bio: "Ex-Amazon Alexa. Research focuses on building chatbots that understand cultural nuances.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    specialization: ["Conversational AI", "Dialogue Systems"],
    email: "arun.p@simats.edu.in",
    publicationsCount: 34,
    patentsCount: 6,
    hIndex: 14,
    achievements: ["Amazon Research Award 2022"],
    publications: []
  },
  {
    id: "FAC005",
    name: "Dr. Lakshmi Narayanan",
    designation: "Professor",
    qualification: "Ph.D. (Edinburgh)",
    bio: "Brings deep theoretical linguistics expertise. Authored 3 textbooks widely used across India.",
    photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
    specialization: ["Theoretical Linguistics", "Dravidian Languages"],
    email: "lakshmi.n@simats.edu.in",
    publicationsCount: 95,
    patentsCount: 2,
    hIndex: 32,
    achievements: ["Lifetime Achievement Award 2023"],
    publications: []
  },
  {
    id: "FAC006",
    name: "Mr. Karthik Subramanian",
    designation: "Industry Expert",
    qualification: "M.Tech (IIT Madras)",
    bio: "Senior Staff Engineer at Google. Teaches MLOps and production NLP systems.",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    specialization: ["NLP Engineering", "MLOps"],
    email: "karthik.s@simats.edu.in",
    publicationsCount: 18,
    patentsCount: 15,
    hIndex: 11,
    achievements: ["Google Spot Bonus"],
    publications: []
  },
  {
    id: "FAC007",
    name: "Dr. Anitha Raghavan",
    designation: "Assistant Professor",
    qualification: "Ph.D. (IIT Kharagpur)",
    bio: "Focuses on building knowledge graphs from unstructured text for biomedical applications.",
    photo: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=400&auto=format&fit=crop",
    specialization: ["Knowledge Graphs", "Information Extraction"],
    email: "anitha.r@simats.edu.in",
    publicationsCount: 28,
    patentsCount: 3,
    hIndex: 10,
    achievements: ["Microsoft Research Fellowship"],
    publications: []
  },
  {
    id: "FAC008",
    name: "Dr. Vijay Krishnamurthy",
    designation: "Associate Professor",
    qualification: "Ph.D. (Univ Washington)",
    bio: "Deep learning expert. His tutorials on Transformers have 500k+ views.",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    specialization: ["Deep Learning", "Transformers"],
    email: "vijay.k@simats.edu.in",
    publicationsCount: 42,
    patentsCount: 7,
    hIndex: 18,
    achievements: ["NVIDIA Hardware Grant 2022"],
    publications: []
  },
  {
    id: "FAC011",
    name: "Dr. Nandini Rao",
    designation: "Professor",
    qualification: "Ph.D. (UCLA)",
    bio: "Foremost psycholinguist studying bilingual language processing in children.",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    specialization: ["Psycholinguistics", "Cognitive Science"],
    email: "nandini.r@simats.edu.in",
    publicationsCount: 78,
    patentsCount: 1,
    hIndex: 29,
    achievements: ["Infosys Prize 2022"],
    publications: []
  }
];

export const FEATURED_PUBLICATIONS: Publication[] = [
  {
    id: "PUB001",
    title: "Cross-lingual Transfer Learning for Low-Resource Dravidian Languages",
    authors: ["Priya Venkatesh", "Vijay Krishnamurthy"],
    venue: "ACL 2024",
    year: 2024,
    type: "Conference Paper",
    tags: ["Transfer Learning", "Dravidian"],
    doi: "10.18653/v1/2024.acl-main.123"
  },
  {
    id: "PUB002",
    title: "Context-Aware Code-Switching Detection in Social Media",
    authors: ["Meera Sundaram", "Divya Sharma"],
    venue: "EMNLP 2024",
    year: 2024,
    type: "Conference Paper",
    tags: ["Code-Switching", "Social Media"],
    doi: "10.18653/v1/2024.emnlp-main.456"
  },
  {
    id: "PUB003",
    title: "Accent-Robust Speech Recognition for Indian English Varieties",
    authors: ["Rajesh Kumar", "Samuel Thomas"],
    venue: "INTERSPEECH 2024",
    year: 2024,
    type: "Conference Paper",
    tags: ["ASR", "Indian English"],
    doi: "10.21437/Interspeech.2024-1234"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. Priya Venkatesh",
    designation: "Head of Department",
    quote: "We don't just teach languages or programming—we teach students to think at the intersection of human cognition and machine intelligence.",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Aditya R.",
    designation: "Alumni, Google AI",
    quote: "The industry-integrated curriculum at DLD gave me an edge. Working on real-world NLP problems during my B.Tech was a game changer.",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Sarah Jenkins",
    designation: "Exchange Student, MIT",
    quote: "The facilities here are world-class. The Cognitive Computing Lab rivals what we have back home. Truly an inspiring environment.",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop"
  }
];

export const INITIAL_PAGES: PageContent[] = [
  {
    pageId: 'pg_about',
    slug: 'about',
    title: 'About Us',
    lastUpdated: '2024-05-20',
    sections: []
  }
];