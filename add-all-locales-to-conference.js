const fs = require('fs');

const conferencePath = 'src/data/conference.ts';
let content = fs.readFileSync(conferencePath, 'utf8');

// Update Track Interface
content = content.replace(
  `export interface Track {
  id: string;
  title: string;
  titleTr: string;
  description: string;
  descriptionTr?: string;
  topics: { name: string; nameTr: string }[];
}`,
  `export interface Track {
  id: string;
  title: string;
  titleTr: string;
  titleDe?: string;
  titleRu?: string;
  titleAr?: string;
  description: string;
  descriptionTr?: string;
  descriptionDe?: string;
  descriptionRu?: string;
  descriptionAr?: string;
  topics: {
    name: string;
    nameTr: string;
    nameDe?: string;
    nameRu?: string;
    nameAr?: string;
  }[];
}`
);

// Update top level properties in conferenceData object
content = content.replace(
  'organizerTr: "Selçuk Üniversitesi",',
  'organizerTr: "Selçuk Üniversitesi",\n  organizerDe: "Selçuk-Universität",\n  organizerRu: "Университет Сельчук",\n  organizerAr: "جامعة سلجوق",'
);

content = content.replace(
  'dateTr: "23–25 Ekim 2026",',
  'dateTr: "23–25 Ekim 2026",\n  dateDe: "23.–25. Oktober 2026",\n  dateRu: "23–25 октября 2026 г.",\n  dateAr: "23–25 أكتوبر 2026",'
);

// Update hostInstitution
content = content.replace(
  'roleTr: "Ev Sahibi & Ana Düzenleyici",',
  'roleTr: "Ev Sahibi & Ana Düzenleyici",\n    roleDe: "Gastgeber & Hauptorganisator",\n    roleRu: "Организатор и принимающая сторона",\n    roleAr: "المؤسسة المستضيفة والمنظم الرئيسي",'
);

content = content.replace(
  'descriptionTr: "1975 yılında Konya\'da kurulan Selçuk Üniversitesi, Türkiye\'nin en büyük kapsamlı araştırma kurumlarından biri olup, ICAAD 2026\'ya modern akademik tesislerinde ev sahipliği yapmaktadır.",',
  `descriptionTr: "1975 yılında Konya'da kurulan Selçuk Üniversitesi, Türkiye'nin en büyük kapsamlı araştırma kurumlarından biri olup, ICAAD 2026'ya modern akademik tesislerinde ev sahipliği yapmaktadır.",
    descriptionDe: "Die 1975 in Konya gegründete Selçuk-Universität ist eine der größten Forschungsuniversitäten der Türkei und veranstaltet die ICAAD 2026 in ihren modernen akademischen Einrichtungen.",
    descriptionRu: "Университет Сельчук, основанный в 1975 году в Конье, является одним из крупнейших исследовательских университетов Турции и проводит ICAAD 2026 в своих современных кампусах.",
    descriptionAr: "تأسست جامعة سلجوق عام 1975 في قونية، وتعد واحدة من أكبر المؤسسات الأكاديمية والبحثية الشاملة في تركيا، وتستضيف ICAAD 2026 في مرافقها الحديثة.",`
);

// Update collaborators
content = content.replace(
  'roleTr: "İşbirliği Yapan Ortak",',
  'roleTr: "İşbirliği Yapan Ortak",\n      roleDe: "Kooperationspartner",\n      roleRu: "Партнёр по сотрудничеству",\n      roleAr: "الشركاء والداعمون",'
);

content = content.replace(
  'descriptionTr: "Disiplinlerarası kültür, medeniyet, teknoloji politikaları, akademik araştırma ve sosyal kalkınmaya adanmış önde gelen bir Türk vakfı.",',
  `descriptionTr: "Disiplinlerarası kültür, medeniyet, teknoloji politikaları, akademik araştırma ve sosyal kalkınmaya adanmış önde gelen bir Türk vakfı.",
      descriptionDe: "Eine führende türkische Stiftung, die sich der interdisziplinären Kultur, Zivilisation, Technologiepolitik und Forschung widmet.",
      descriptionRu: "Ведущий турецкий фонд, посвященный междисциплинарной культуре, цивилизации, технологической политике и социальному развитию.",
      descriptionAr: "مؤسسة تركية رائدة كرّست جهودها للثقافة والحضارة وسياسات التكنولوجيا والبحوث الأكاديمية والتنمية الاجتماعية.",`
);

content = content.replace(
  'descriptionTr: "Uluslararası akademik ortaklıkları, kapasite geliştirmeyi ve sınırlar ötesi bilimsel değişimi teşvik eden küresel bir kalkınma ve teknik işbirliği ajansı.",',
  `descriptionTr: "Uluslararası akademik ortaklıkları, kapasite geliştirmeyi ve sınırlar ötesi bilimsel değişimi teşvik eden küresel bir kalkınma ve teknik işbirliği ajansı.",
      descriptionDe: "Eine globale Agentur für technische Zusammenarbeit, die internationale akademische Partnerschaften und wissenschaftlichen Austausch fördert.",
      descriptionRu: "Глобальное агентство технического сотрудничества, содействующее международным академическим партнерствам и научному обмену.",
      descriptionAr: "وكالة دولية للتنمية والتنسيق التقني تعزز الشراكات الأكاديمية الدولية وتبادل المعرفة العلمية عبر الحدود.",`
);

content = content.replace(
  'descriptionTr: "1974 yılında kurulan Konya Sanayi Odası, bölgesel sanayi gelişimini, akıllı üretimi ve üniversite-sanayi yapay zeka işbirliğini yönlendirmektedir.",',
  `descriptionTr: "1974 yılında kurulan Konya Sanayi Odası, bölgesel sanayi gelişimini, akıllı üretimi ve üniversite-sanayi yapay zeka işbirliğini yönlendirmektedir.",
      descriptionDe: "Die 1974 gegründete Industrie- und Handelskammer Konya fördert die regionale Industrieentwicklung und KI-Kooperationen.",
      descriptionRu: "Промышленная палата Коньи, основанная в 1974 году, способствует региональному промышленному развитию и сотрудничеству в сфере ИИ.",
      descriptionAr: "تأسست غرفة صناعة قونية عام 1974، وتدعم التنمية الصناعية الإقليمية والتصنيع الذكي والشراكة بين الجامعة والصناعة في مجال الذكاء الاصطناعي.",`
);

// Map of track translations for title and description and topic names
const trackDataMap = [
  {
    id: "engineering",
    titleDe: "Naturwissenschaften & Ingenieurwesen",
    titleRu: "Естественные науки и инженерия",
    titleAr: "العلوم والهندسة",
    descriptionDe: "Intelligente Systeme, autonome Technologien, Informatik, Datenwissenschaft und KI-Anwendungen in den naturwissenschaftlichen Disziplinen.",
    descriptionRu: "Интеллектуальные системы, автономные технологии, информатика, наука о данных и применение ИИ в естественных науках.",
    descriptionAr: "الأنظمة الذكية، التقنيات المستقلة، علوم الحساب، علوم البيانات، وتطبيقات الذكاء الاصطناعي في العلوم الأساسية والهندسية.",
    topics: [
      { nameDe: "Intelligente Systeme & Autonome Technologien", nameRu: "Интеллектуальные системы и автономные технологии", nameAr: "الأنظمة الذكية والتقنيات المستقلة" },
      { nameDe: "Verarbeitung natürlicher Sprache & LLMs", nameRu: "Обработка естественного языка и LLM", nameAr: "معالجة اللغة الطبيعية والنماذج اللغوية الكبيرة" },
      { nameDe: "KI in den Physik- & Chemie-Wissenschaften", nameRu: "ИИ в физических и химических науках", nameAr: "الذكاء الاصطناعي في العلوم الفيزيائية والكيميائية" },
      { nameDe: "Mathematische Modellierung & Bioinformatik", nameRu: "Математическое моделирование и биоинформатика", nameAr: "النمذجة الرياضية والبيولوجيا المحوسبة" },
      { nameDe: "Data Science & Big Data Analytik", nameRu: "Наука о данных и аналитика больших данных", nameAr: "علوم البيانات وتحليل البيانات الضخمة" },
      { nameDe: "Computer Vision & Bildverarbeitung", nameRu: "Компьютерное зрение и обработка изображений", nameAr: "الرؤية الحاسوبية ومعالجة الصور" },
    ]
  },
  {
    id: "health",
    titleDe: "Gesundheitswissenschaften",
    titleRu: "Науки о здоровье",
    titleAr: "العلوم الصحية",
    descriptionDe: "Klinische Entscheidungsunterstützung, Wirkstoffentwicklung, medizinische Bildgebung, medizinisches NLP und Bioethik.",
    descriptionRu: "Поддержка клинических решений, разработка лекарств, медицинская визуализация, медицинский NLP и биоэтика.",
    descriptionAr: "دعم القرارات السريرية، اكتشاف الأدوية، التصوير الطبي، المعالجة الطبيعية للغة في الطب، والأخلاقيات الحيوية.",
    topics: [
      { nameDe: "KI in klinischen Entscheidungssystemen", nameRu: "ИИ в системах поддержки клинических решений", nameAr: "الذكاء الاصطناعي في أنظمة دعم القرارات السريرية" },
      { nameDe: "KI in der Wirkstoffforschung", nameRu: "ИИ в разработке лекарств", nameAr: "الذكاء الاصطناعي في اكتشاف الأدوية وتطويرها" },
      { nameDe: "KI in der medizinischen Bildanalyse", nameRu: "ИИ в анализе медицинских изображений", nameAr: "الذكاء الاصطناعي في تحليل الصور الطبية" },
      { nameDe: "Verarbeitung natürlicher Sprache in der Medizin", nameRu: "Обработка естественного языка в медицине", nameAr: "معالجة اللغة الطبيعية في الطب" },
      { nameDe: "Ethische & rechtliche Fragen der medizinischen KI", nameRu: "Этическое и правовое регулирование ИИ в медицине", nameAr: "القضايا الأخلاقية والقانونية في الذكاء الاصطناعي الطبي" },
    ]
  },
  {
    id: "agriculture",
    titleDe: "Landwirtschaft & Nachhaltigkeit",
    titleRu: "Сельское хозяйство и устойчивость",
    titleAr: "الزراعة والاستدامة",
    descriptionDe: "Präzisionslandwirtschaft, Ertragsvorhersage, Klimaresilienz, Lieferketten-Rückverfolgbarkeit und Prognosemodellierung.",
    descriptionRu: "Точное земледелие, прогнозирование урожайности, климатическая устойчивость, прослеживаемость цепочек поставок.",
    descriptionAr: "الزراعة الدقيقة، التنبؤ بإنتاجية المحاصيل، التكيف مع المناخ، تتبع سلاسل الإمداد، والنمذجة التنبؤية.",
    topics: [
      { nameDe: "Smarte Landwirtschaft & Präzisionsanbau", nameRu: "Умное и точное земледелие", nameAr: "الزراعة الذكية والدقيقة" },
      { nameDe: "KI für Pflanzenüberwachung & Ertragsprognosen", nameRu: "ИИ для мониторинга культур и урожайности", nameAr: "الذكاء الاصطناعي لمراقبة المحاصيل والتنبؤ بالإنتاج" },
      { nameDe: "Klimaschonende Landwirtschaft & Nachhaltigkeit", nameRu: "Устойчивое и климатическое земледелие", nameAr: "الزراعة المستدامة والمقاومة للتغير المناخي" },
      { nameDe: "KI für Lebensmittel-Lieferketten & Rückverfolgbarkeit", nameRu: "ИИ в цепочках поставок продовольствия", nameAr: "الذكاء الاصطناعي في سلاسل إمداد الأغذية وتتبعها" },
      { nameDe: "Vorhersagemodelle für Agrarsysteme", nameRu: "Прогностическое моделирование в агросистемах", nameAr: "النمذجة التنبؤية للأنظمة الزراعية" },
    ]
  },
  {
    id: "law",
    titleDe: "Recht & Politik",
    titleRu: "Право и политика",
    titleAr: "القانون والسياسات",
    descriptionDe: "Datenschutz, DSGVO/KVKK, Menschenrechte im KI-Zeitalter, verantwortungsvolle KI, gerichtliche Entscheidungsunterstützung und IP-Rechte.",
    descriptionRu: "Защита данных, GDPR/KVKK, права человека и ИИ, ответственный ИИ, судебные решения и интеллектуальная собственность.",
    descriptionAr: "خصوصية البيانات، GDPR/KVKK، حقوق الإنسان والذكاء الاصطناعي، الذكاء الاصطناعي المسؤول، دعم القرارات القضائية، وحقوق الملكية الفكرية.",
    topics: [
      { nameDe: "Datenschutz & Regulierung (KVKK & DSGVO)", nameRu: "Конфиденциальность и защита данных (GDPR)", nameAr: "الخصوصية وحماية البيانات و GDPR" },
      { nameDe: "KI & Menschenrechte", nameRu: "ИИ и права человека", nameAr: "الذكاء الاصطناعي وحقوق الإنسان" },
      { nameDe: "Ethik & Verantwortungsvolle KI", nameRu: "Этика и ответственный ИИ", nameAr: "الأخلاقيات والذكاء الاصطناعي المسؤول" },
      { nameDe: "KI in gerichtlichen & rechtlichen Entscheidungen", nameRu: "ИИ в принятии судебных и юридических решений", nameAr: "الذكاء الاصطناعي في اتخاذ القرارات القضائية والقانونية" },
      { nameDe: "Geistiges Eigentum im KI-Zeitalter", nameRu: "Интеллектуальная собственность в эпоху ИИ", nameAr: "الملكية الفكرية في عصر الذكاء الاصطناعي" },
    ]
  },
  {
    id: "economics",
    titleDe: "Wirtschaft & Finanzen",
    titleRu: "Экономика и финансы",
    titleAr: "الاقتصاد والمالية",
    descriptionDe: "FinTech, Business Intelligence, digitale Unternehmens-Transformation, Finanzmodellierung und nachhaltige Wirtschaft.",
    descriptionRu: "FinTech, бизнес-аналитика, цифровая трансформация предприятий, финансовое моделирование и устойчивая экономика.",
    descriptionAr: "التقنيات المالية (FinTech)، ذكاء الأعمال، التحول الرقمي للمؤسسات، النمذجة المالية، والاقتصاد المستدام.",
    topics: [
      { nameDe: "KI in Wirtschaft & Finanzwesen", nameRu: "ИИ в экономике и финансах", nameAr: "الذكاء الاصطناعي في الاقتصاد والمالية" },
      { nameDe: "Finanztechnologien (FinTech)", nameRu: "Финансовые технологии (FinTech)", nameAr: "التقنيات المالية الذكية (FinTech)" },
      { nameDe: "Digitale Transformation & Smarte Unternehmen", nameRu: "Цифровая трансформация и умные предприятия", nameAr: "التحول الرقمي والمؤسسات الذكية" },
      { nameDe: "Business Intelligence & Big Data Analytik", nameRu: "Бизнес-аналитика и большие данные", nameAr: "ذكاء الأعمال وتحليل البيانات الضخمة" },
      { nameDe: "KI für nachhaltige wirtschaftliche Entwicklung", nameRu: "ИИ в устойчивом экономическом развитии", nameAr: "الذكاء الاصطناعي في التنمية الاقتصادية المستدامة" },
    ]
  },
  {
    id: "social-sciences",
    titleDe: "Sozialwissenschaften & Bildung",
    titleRu: "Общественные науки и образование",
    titleAr: "العلوم الاجتماعية والتعليم",
    descriptionDe: "Gesellschaftliche Auswirkungen von KI, Governance & öffentliche Ordnung, Wandel im Bildungssystem, digitale Ethik und Verhaltensanalyse.",
    descriptionRu: "Социальные последствия ИИ, государственное управление, трансформация систем образования, цифровая этика.",
    descriptionAr: "الآثار المجتمعية للذكاء الاصطناعي، الحوكمة والسياسات العامة، تحول المناهج والأنظمة التعليمية، الأخلاقيات الرقمية، وتحليل السلوك الاجتماعي.",
    topics: [
      { nameDe: "Gesellschaftliche Auswirkungen der KI", nameRu: "Социальные последствия искусственного интеллекта", nameAr: "الآثار المجتمعية للذكاء الاصطناعي" },
      { nameDe: "KI-Governance & Öffentliche Politik", nameRu: "Управление ИИ и государственная политика", nameAr: "حوكمة الذكاء الاصطناعي والسياسة العامة" },
      { nameDe: "KI & Transformation der Bildungssysteme", nameRu: "ИИ и трансформация образовательных систем", nameAr: "الذكاء الاصطناعي وتحول الأنظمة التعليمية" },
      { nameDe: "Digitale Ethik", nameRu: "Цифровая этика", nameAr: "الأخلاقيات الرقمية" },
      { nameDe: "KI & Soziale Verhaltensanalyse", nameRu: "ИИ и анализ социального поведения", nameAr: "الذكاء الاصطناعي وتحليل السلوك الاجتماعي" },
    ]
  },
  {
    id: "philosophy-sociology",
    titleDe: "Philosophie & Soziologie",
    titleRu: "Философия и социология",
    titleAr: "الفلسفة وعلم الاجتماع",
    descriptionDe: "Epistemologie der KI, digitale Soziologie, Mensch-Maschine-Koexistenz und philosophische Konsequenzen künstlicher Intelligenz.",
    descriptionRu: "Эпистемология ИИ, цифровая социология, сосуществование человека и машины, философские аспекты интеллекта.",
    descriptionAr: "إبستيمولوجيا وفلسفة الذكاء الاصطناعي، علم الاجتماع الرقمي، التعايش بين الإنسان والآلة، والتداعيات الفلسفية للذكاء الاصطناعي.",
    topics: [
      { nameDe: "Epistemologie & Philosophie der KI", nameRu: "Эпистемология и философия ИИ", nameAr: "إبستيمولوجيا وفلسفة الذكاء الاصطناعي" },
      { nameDe: "Digitale Soziologie & KI-Sozialstrukturen", nameRu: "Цифровая социология и социальные структуры ИИ", nameAr: "علم الاجتماع الرقمي والهياكل الاجتماعية للذكاء الاصطناعي" },
      { nameDe: "KI-Ethik & Werte-Ausrichtung", nameRu: "Этика ИИ и выравнивание ценностей", nameAr: "أخلاقيات الذكاء الاصطناعي وتوافق القيم" },
      { nameDe: "Mensch-Maschine-Koexistenz & Posthumanismus", nameRu: "Сосуществование человека и машины", nameAr: "التعايش بين الإنسان والآلة ومابعد الإنسانية" },
      { nameDe: "Sozialer Wandel & Algorithmen-Governance", nameRu: "Социальные изменения и алгоритмическое управление", nameAr: "التغير الاجتماعي والحوكمة الخوارزمية" },
    ]
  },
  {
    id: "art-design",
    titleDe: "Kunst & Design",
    titleRu: "Искусство и дизайн",
    titleAr: "الفن والتصميم",
    descriptionDe: "Generative KI in kreativen Künsten, digitales Design, generatives Musizieren, Architektur und computergestützte Ästhetik.",
    descriptionRu: "Генеративный ИИ в искусстве, цифровой дизайн, генеративная музыка, архитектура и вычислительная эстетика.",
    descriptionAr: "الذكاء الاصطناعي التوليدي في الفنون الإبداعية، التصميم الرقمي، الموسيقى التوليدية، الهندسة المعمارية، والجماليات الحاسوبية.",
    topics: [
      { nameDe: "Generative KI in visueller & darstellender Kunst", nameRu: "Генеративный ИИ в изобразительном и исполнительском искусстве", nameAr: "الذكاء الاصطناعي التوليدي في الفنون البصرية والمسرحية" },
      { nameDe: "KI-gestütztes Design & Architektur", nameRu: "Дизайн и архитектура на базе ИИ", nameAr: "التصميم والمعمار المدعوم بالذكاء الاصطناعي" },
      { nameDe: "Computergestützte Ästhetik & Kunsttheorie", nameRu: "Вычислительная эстетика и теория искусства", nameAr: "الجماليات المحوسبة ونظرية الفن" },
      { nameDe: "Interaktive digitale Medien & Gaming", nameRu: "Интерактивные цифровые медиа и игры", nameAr: "الوسائط الرقمية التفاعلية والألعاب" },
      { nameDe: "KI in Musikkomposition & Sounddesign", nameRu: "ИИ в сочинении музыки и звуковом дизайне", nameAr: "الذكاء الاصطناعي في التأليف الموسيقي والتصميم الصوتي" },
    ]
  },
  {
    id: "theology",
    titleDe: "Theologie & Religionswissenschaft",
    titleRu: "Теология и религиоведение",
    titleAr: "العلوم الإلهية والدينية",
    descriptionDe: "Theologische Reflexionen über KI, Digital Humanities in religiösen Texten, ethische Perspektiven auf Maschinenbewusstsein.",
    descriptionRu: "Теологические аспекты ИИ, цифровые гуманитарные науки в религиозных текстах, этика сознания машин.",
    descriptionAr: "الرؤى الإلهية والدينية للذكاء الاصطناعي، الإنسانيات الرقمية في النصوص الدينية، الأخلاقيات والدين تجاه وعي الآلة ومقاصدها.",
    topics: [
      { nameDe: "KI in der religiösen Textanalyse & Digital Humanities", nameRu: "ИИ в анализе религиозных текстов", nameAr: "الذكاء الاصطناعي في تحليل النصوص الدينية والإنسانيات الرقمية" },
      { nameDe: "Theologische Perspektiven auf künstliches Bewusstsein", nameRu: "Теологические взгляды на искусственное сознание", nameAr: "الرؤى الدينية والإلهية حول الوعي الاصطناعي" },
      { nameDe: "Maschinenmoral & Religiöse Ethik", nameRu: "Машинная мораль и религиозная этика", nameAr: "أخلاقيات الآلة والأخلاق الدينية" },
      { nameDe: "KI, Transhumanismus und Eschatologie", nameRu: "ИИ, трансгуманизм и эсхатология", nameAr: "الذكاء الاصطناعي، الترانسهومانيزم، والعلم الأخروي" },
      { nameDe: "Religiöse Praktiken & Digitale Rituale", nameRu: "Религиозные практики и цифровые ритуалы", nameAr: "الممارسات الدينية والطقوس الرقمية في عصر الذكاء الاصطناعي" },
    ]
  }
];

// Apply track translations
trackDataMap.forEach(item => {
  // Title replacement
  const titleSearch = `id: "${item.id}",\n      title:`;
  content = content.replace(
    titleSearch,
    `id: "${item.id}",\n      titleDe: "${item.titleDe}",\n      titleRu: "${item.titleRu}",\n      titleAr: "${item.titleAr}",\n      title:`
  );

  // Description replacement
  const descSearch = `descriptionTr:`;
  const descTarget = `id: "${item.id}"`;
  const pos = content.indexOf(descTarget);
  if (pos !== -1) {
    const nextDescTrPos = content.indexOf(`descriptionTr:`, pos);
    if (nextDescTrPos !== -1) {
      const lineEndPos = content.indexOf('\n', nextDescTrPos);
      const beforeLine = content.slice(0, lineEndPos);
      const afterLine = content.slice(lineEndPos);
      content = beforeLine + `\n      descriptionDe: "${item.descriptionDe}",\n      descriptionRu: "${item.descriptionRu}",\n      descriptionAr: "${item.descriptionAr}",` + afterLine;
    }
  }
});

fs.writeFileSync(conferencePath, content);
console.log('Enriched conference.ts with multilingual fields for tracks and institutions');
