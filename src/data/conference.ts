export interface Track {
  id: string;
  title: string;
  titleTr: string;
  description: string;
  topics: { name: string; nameTr: string }[];
}

export const conferenceData = {
  name: "International Conference on AI Across Disciplines",
  shortName: "ICAAD",
  edition: "ICAAD 2026",
  organizer: "Selçuk University",
  date: "October 23–25, 2026",
  dateTr: "23–25 Ekim 2026",
  startDateISO: "2026-10-23T09:00:00+03:00",
  location: "Selçuk University Congress Center, Konya, Turkey",
  address: {
    lines: [
      "Selçuk University Congress Center",
      "Alaeddin Keykubat Kampüsü",
      "42130 Selçuklu, Konya / Turkey",
    ],
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=32.4750%2C37.9950%2C32.5450%2C38.0500&layer=mapnik&marker=38.0230%2C32.5100",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Sel%C3%A7uk+%C3%9Cniversitesi+Kongre+Merkezi+Konya",
  },
  email: "icaad@selcuk.edu.tr",
  stats: [
    { value: "3", label: "Conference Days" },
    { value: "7", label: "Disciplinary Tracks" },
    { value: "35+", label: "Subtopic Domains" },
    { value: "40+", label: "Paper Sessions" },
  ],
  tracks: [
    {
      id: "engineering",
      title: "Engineering",
      titleTr: "Mühendislik",
      description: "Intelligent systems, autonomous tech, LLMs, computer vision, data science, and HCI.",
      topics: [
        { name: "Smart Systems & Autonomous Technologies", nameTr: "Akıllı Sistemler ve Otonom Teknolojiler" },
        { name: "Natural Language Processing & Large Language Models", nameTr: "Doğal Dil İşleme ve Büyük Dil Modelleri" },
        { name: "Human-Computer Interaction", nameTr: "İnsan-Bilgisayar Etkileşimi" },
        { name: "Data Science & Big Data Analytics", nameTr: "Veri Bilimi ve Büyük Veri Analitiği" },
        { name: "Computer Vision & Image Processing", nameTr: "Bilgisayarlı Görme ve Görüntü İşleme" },
      ],
    },
    {
      id: "health",
      title: "Health Sciences",
      titleTr: "Sağlık",
      description: "Clinical decision support, drug discovery, medical imaging, medical NLP, and bioethics.",
      topics: [
        { name: "AI in Clinical Decision Support Systems", nameTr: "Klinik Karar Destek Sistemlerinde YZ" },
        { name: "AI in Drug Discovery & Development", nameTr: "İlaç Keşfi ve Geliştirmede YZ" },
        { name: "AI in Medical Image Analysis", nameTr: "Tıbbi Görüntü Analizinde YZ" },
        { name: "Natural Language Processing in Medicine", nameTr: "Tıpta Doğal Dil İşleme" },
        { name: "Ethical & Legal Issues in Medical AI", nameTr: "Tıbbi Yapay Zekada Etik ve Yasal Sorunlar" },
      ],
    },
    {
      id: "agriculture",
      title: "Agriculture & Sustainability",
      titleTr: "Tarım",
      description: "Precision farming, crop yield prediction, climate resilience, supply chain traceability, and predictive modeling.",
      topics: [
        { name: "Smart Agriculture & Precision Farming", nameTr: "Akıllı Tarım ve Hassas Tarım" },
        { name: "AI for Crop Monitoring & Yield Prediction", nameTr: "Bitki İzleme ve Verim Tahmini için YZ" },
        { name: "Climate-Smart Agriculture & Sustainability", nameTr: "İklim Dostu Tarım ve Sürdürülebilirlik" },
        { name: "AI for Food Supply Chain & Traceability", nameTr: "Gıda Tedarik Zinciri ve İzlenebilirlik için YZ" },
        { name: "Predictive Modeling for Agricultural Systems", nameTr: "Tarım Sistemleri için Tahmin Modellemesi" },
      ],
    },
    {
      id: "law",
      title: "Law & Policy",
      titleTr: "Hukuk",
      description: "Data privacy, KVKK/GDPR, AI human rights, responsible AI, judicial decision support, and IP rights.",
      topics: [
        { name: "Privacy, Data Protection, KVKK & GDPR", nameTr: "Gizlilik, Veri Koruma ve KVKK, GDPR" },
        { name: "AI & Human Rights", nameTr: "Yapay Zeka ve İnsan Hakları" },
        { name: "Ethics & Responsible AI", nameTr: "Etik ve Sorumlu Yapay Zeka" },
        { name: "AI in Judicial & Legal Decision Making", nameTr: "Yargısal ve Hukuki Karar Almada YZ" },
        { name: "Intellectual Property in the AI Era", nameTr: "Yapay Zeka Çağında Fikri Mülkiyet" },
      ],
    },
    {
      id: "economics",
      title: "Economics & Finance",
      titleTr: "Ekonomi",
      description: "FinTech, business intelligence, digital enterprise transformation, financial modeling, and sustainable economy.",
      topics: [
        { name: "AI in Economics & Finance", nameTr: "Ekonomi ve Finansta Yapay Zeka" },
        { name: "Smart Financial Technologies (FinTech)", nameTr: "Akıllı Finans Teknolojileri (FinTech)" },
        { name: "Digital Transformation & Smart Enterprises", nameTr: "Dijital Dönüşüm ve Akıllı İşletmeler" },
        { name: "Business Intelligence & Big Data Analytics", nameTr: "İş Zekası ve Büyük Veri Analitiği" },
        { name: "AI in Sustainable Economic Development", nameTr: "Sürdürülebilir Ekonomik Kalkınmada YZ" },
      ],
    },
    {
      id: "social-sciences",
      title: "Social Sciences & Education",
      titleTr: "Sosyal Bilimler",
      description: "Societal AI impacts, governance & public policy, education system transformation, digital ethics, and social behavior analysis.",
      topics: [
        { name: "Societal Impacts of Artificial Intelligence", nameTr: "Yapay Zekanın Toplumsal Etkileri" },
        { name: "AI Governance & Public Policy", nameTr: "Yapay Zeka Yönetişimi ve Kamu Politikası" },
        { name: "AI & Transformation of Educational Systems", nameTr: "Yapay Zeka ve Eğitim Sistemleri Dönüşümü" },
        { name: "Digital Ethics", nameTr: "Dijital Etik" },
        { name: "AI & Social Behavior Analysis", nameTr: "Yapay Zeka ve Sosyal Davranış Analizi" },
      ],
    },
    {
      id: "philosophy-sociology",
      title: "Philosophy & Sociology",
      titleTr: "Felsefe & Sosyoloji",
      description: "Epistemology of AI, AI ethics, digital sociology, human-AI coexistence, and philosophical implications of machine intelligence.",
      topics: [
        { name: "Epistemology & Philosophy of Artificial Intelligence", nameTr: "Yapay Zekanın Epistemolojisi ve Felsefesi" },
        { name: "Digital Sociology & AI Social Structures", nameTr: "Dijital Sosyoloji ve YZ Sosyal Yapıları" },
        { name: "AI Ethics, Morality & Value Alignment", nameTr: "YZ Etiği, Ahlak ve Değer Uyumlaması" },
        { name: "Human-Machine Coexistence & Posthumanism", nameTr: "İnsan-Makine Birlikteliği ve Posthümanizm" },
        { name: "Social Change & Algorithmic Governance", nameTr: "Sosyal Değişim ve Algoritmik Yönetişim" },
      ],
    },
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Conference",
      children: [
        { label: "Important Dates", href: "/dates" },
        { label: "Program", href: "/program" },
        { label: "Speakers", href: "/keynotes" },
        { label: "Committees", href: "/committee" },
      ],
    },
    {
      label: "Participate",
      children: [
        { label: "Call for Papers", href: "/cfp" },
        { label: "Registration", href: "/registration" },
      ],
    },
    { label: "Venue & Travel", href: "/venue" },
    { label: "Contact", href: "/contact" },
  ],
  quickLinks: [
    { label: "Call for Papers", href: "/cfp" },
    { label: "Program", href: "/program" },
    { label: "Registration", href: "/registration" },
    { label: "Venue & Travel", href: "/venue" },
  ],
  hostInstitution: {
    id: "selcuk",
    name: "Selçuk University",
    fullName: "Selçuk University",
    role: "Host & Main Organizer",
    description: "Established in 1975 in Konya, Selçuk University is one of Turkey's largest comprehensive research institutions, hosting ICAAD 2026 across its state-of-the-art academic facilities.",
    logo: "/images/collaborators/selcuk.png",
    website: "https://www.selcuk.edu.tr",
  },
  collaborators: [
    {
      id: "kumevakfi",
      name: "Küme Vakfı",
      fullName: "Kültür ve Medeniyet Vakfı (KÜME)",
      type: "Collaborating Partner",
      role: "Collaborating Partner",
      description: "A leading Turkish foundation dedicated to interdisciplinary culture, civilization, technology policies, academic research, and social development.",
      logo: "/images/collaborators/kumevakfi.svg",
      website: "https://kumevakfi.org/",
    },
    {
      id: "tika",
      name: "TİKA",
      fullName: "Turkish Cooperation and Coordination Agency",
      type: "Collaborating Partner",
      role: "Collaborating Partner",
      description: "A leading global development and technical cooperation agency fostering international academic partnerships, capacity building, and cross-border scientific exchange.",
      logo: "/images/collaborators/tika.svg",
      website: "https://www.tika.gov.tr/en",
    },
  ],
};

export type NavLink = (typeof conferenceData.navLinks)[number];
