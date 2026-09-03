export interface Speaker {
  id: string;
  name: string;
  role: string;
  roleTr?: string;
  roleDe?: string;
  roleRu?: string;
  roleAr?: string;
  affiliation: string;
  affiliationTr?: string;
  affiliationDe?: string;
  affiliationRu?: string;
  affiliationAr?: string;
  topic?: string;
  image: string;
  bio: string;
  /** Extended CV paragraph — to be populated when full CVs are provided. */
  fullBio?: string;
  link?: string;
  category: "plenary" | "keynote";
}

export const plenarySpeakers: Speaker[] = [

  {
    id: "narayanaswamy-balakrishnan",
    roleAr: "أستاذ كرسي متميز في الرياضيات والإحصاء",
    affiliationAr: "جامعة ماكماستر، هاميلتون، أونتاريو، كندا",
    roleRu: "Заслуженный профессор математики и статистики",
    affiliationRu: "Университет Макмастера, Гамильтон, Онтарио, Канада",
    name: "Prof. Dr. Narayanaswamy Balakrishnan",
    role: "Distinguished University Professor of Mathematics & Statistics",
    affiliation: "McMaster University, Hamilton, Ontario, Canada",
    image: "/images/speakers/narayanaswamy-balakrishnan.jpg",
    bio: "Prof. Dr. Narayanaswamy Balakrishnan is a world-leading mathematical statistician at McMaster University and an authority in distribution theory, order statistics, reliability engineering, and censoring methodology. An elected Fellow of the Royal Society of Canada, the American Statistical Association, and the Institute of Mathematical Statistics, he has authored dozens of landmark textbooks and serves as Editor-in-Chief of Communications in Statistics.",
    fullBio: undefined,
    link: "https://www.math.mcmaster.ca/bala/",
    category: "plenary",
  },
];

export const keynoteSpeakers: Speaker[] = [
  {
    id: "masashi-sugiyama",
    roleAr: "مدير مركز RIKEN لمشروع الذكاء الاصطناعي المتقدم (AIP)",
    affiliationAr: "مركز RIKEN AIP / جامعة طوكيو، اليابان",
    roleRu: "Директор Центра передового ИИ (RIKEN AIP)",
    affiliationRu: "RIKEN AIP / Токийский университет, Япония",
    name: "Prof. Dr. Masashi Sugiyama",
    role: "Director, RIKEN Center for Advanced Intelligence Project (AIP)",
    affiliation: "RIKEN AIP / The University of Tokyo, Japan",
    image: "/images/speakers/masashi-sugiyama.jpg",
    bio: "Prof. Dr. Masashi Sugiyama is Director of the RIKEN Center for Advanced Intelligence Project (RIKEN AIP) and Professor at The University of Tokyo. He has made seminal contributions to statistical machine learning, particularly in weakly supervised learning, covariate shift adaptation, and density ratio estimation. A recipient of the Japan Academy Medal and JSPS Prize, he has served as Program Co-Chair of NeurIPS and AISTATS.",
    fullBio: undefined,
    link: "https://aip.riken.jp/",
    category: "keynote",
  },
  {
    id: "gian-marco-rignanese",
    roleAr: "أستاذ ومدير أبحاث (F.R.S.-FNRS) · زميل APS",
    affiliationAr: "جامعة لوفان الكاثوليكية (UCLouvain)، بلجيكا",
    roleRu: "Профессор и директор по исследованиям (F.R.S.-FNRS) · Член APS",
    affiliationRu: "Католический университет Лувена (UCLouvain), Бельгия",
    name: "Prof. Dr. Gian-Marco Rignanese",
    role: "Professor & Research Director (F.R.S.-FNRS) · APS Fellow",
    affiliation: "Université catholique de Louvain (UCLouvain), Belgium",
    image: "/images/speakers/gian-marco-rignanese.jpg",
    bio: "Prof. Dr. Gian-Marco Rignanese is a Professor at Ecole Polytechnique de Louvain (UCLouvain) and Research Director at F.R.S.-FNRS. An APS Fellow, he is a pioneer in materials informatics, integrating high-throughput first-principles calculations with machine learning to accelerate materials discovery. He is a lead developer of ABINIT and key contributor to the OPTIMADE consortium and Materials Project.",
    fullBio: undefined,
    link: "https://uclouvain.be/en/directories/gian-marco.rignanese",
    category: "keynote",
  },
  {
    id: "huseyin-arslan",
    roleAr: "عميد كلية الهندسة والعلوم الطبيعية · مدير CoSiNC",
    affiliationAr: "جامعة إسطنبول ميديبول، إسطنبول، تركيا",
    roleRu: "Декан инженерного факультета · Директор CoSiNC",
    affiliationRu: "Стамбульский университет Медиполь, Стамбул, Турция",
    name: "Prof. Dr. Hüseyin Arslan",
    role: "Dean, School of Engineering & Natural Sciences · Director, CoSiNC",
    affiliation: "Istanbul Medipol University, Istanbul, Türkiye",
    image: "/images/speakers/huseyin-arslan.jpg",
    bio: "Prof. Dr. Hüseyin Arslan is an IEEE Fellow and National Academy of Inventors Fellow, currently serving as Dean of Engineering at Istanbul Medipol University and founding director of the CoSiNC research center. A pioneer in 5G/6G radio access technologies, waveform design, cognitive radio, and physical layer security, he previously led the WCSP research group at the University of South Florida for two decades.",
    fullBio: undefined,
    link: "https://cosinc.medipol.edu.tr/",
    category: "keynote",
  },
  {
    id: "sahin-albayrak",
    roleAr: "رئيس مختبر الذكاء الاصطناعي الموزع (DAI-Labor)",
    affiliationAr: "جامعة برلين التقنية (TU Berlin)، برلين، ألمانيا",
    roleRu: "Руководитель лаборатории распределенного ИИ (DAI-Labor)",
    affiliationRu: "Берлинский технический университет (TU Berlin), Германия",
    name: "Prof. Dr. Şahin Albayrak",
    role: "Head, Distributed AI Laboratory (DAI-Labor) · Chair, AOT",
    affiliation: "Technical University of Berlin (TU Berlin), Berlin, Germany",
    topic: "The State of AI Research and the Next Evolution of Artificial Intelligence",
    image: "/images/speakers/sahin-albayrak.jpg",
    bio: "Prof. Dr. Şahin Albayrak is the founder and head of the Distributed Artificial Intelligence Laboratory (DAI-Labor) and the German-Turkish Advanced Research Centre for ICT (GT-ARC) at TU Berlin. With over 1,000 scientific publications and dozens of patents, he is a leading pioneer in distributed AI, smart city infrastructure, and autonomous mobility. He was awarded the Order of Merit of the Federal Republic of Germany (Bundesverdienstkreuz) for his contributions to international scientific collaboration.",
    fullBio: undefined,
    link: "https://www.dai-labor.de",
    category: "keynote",
  },
  {
    id: "erdem-erdemir",
    roleAr: "أستاذ مشارك في علوم الحاسوب · مدير معهد TIGER",
    affiliationAr: "جامعة ولاية تينيسي، ناشفيل، الولايات المتحدة الأمريكية",
    roleRu: "Доцент компьютерных наук · Директор института TIGER",
    affiliationRu: "Государственный университет Теннесси, Нэшвилл, США",
    name: "Assoc. Prof. Dr. Erdem Erdemir",
    role: "Associate Professor of Computer Science · Director, TIGER Institute",
    affiliation: "Tennessee State University, Nashville, TN, USA",
    image: "/images/speakers/erdem-erdemir.jpg",
    bio: "Assoc. Prof. Dr. Erdem Erdemir is an Associate Professor of Computer Science at Tennessee State University and Director of the TIGER Institute for Renewable Energy and Mechatronics. He received his Ph.D. from Vanderbilt University and his B.Sc./M.Sc. from Boğaziçi University. His research focuses on intelligent micro-scale medical robotics, active capsule endoscopy locomotion, and machine learning-driven image analysis.",
    fullBio: undefined,
    link: "https://www.tnstate.edu/computer_science/Dr_Erdemir.aspx",
    category: "keynote",
  },
  {
    id: "mustafa-ersoz",
    roleAr: "أستاذ الكيمياء الفيزيائية · عضو عامل بالأكاديمية التركية للعلوم (TÜBA)",
    affiliationAr: "جامعة سلجوق، قونية، تركيا",
    roleRu: "Профессор физической химии · Действительный член Турецкой академии наук (TÜBA)",
    affiliationRu: "Университет Сельчук, Конья, Турция",
    name: "Prof. Dr. Mustafa Ersöz",
    role: "Professor of Physical Chemistry · Full Member, Turkish Academy of Sciences (TÜBA)",
    affiliation: "Selçuk University, Konya, Türkiye",
    image: "/images/speakers/mustafa-ersoz.jpg",
    bio: "Prof. Dr. Mustafa Ersöz serves as a Professor of Physical Chemistry in the Department of Chemistry at the Faculty of Science, Selçuk University, in Konya, Turkey. After earning his Ph.D. in Chemistry from the University of Glasgow, he conducted postdoctoral research at the GKSS Research Center in Germany and at the University of Hull in the United Kingdom. His research areas include physical chemistry, membrane science and technology, nanochemistry, nanomaterial synthesis, surface and colloid chemistry, adsorption, environmental remediation, renewable energy, and advanced water treatment technologies. His work focuses particularly on the development of next-generation nanomaterial-enhanced membranes, functional nanostructures, separation technologies, and sustainable solutions for the removal of contaminants from water. Prof. Ersöz has coordinated and participated in numerous national and international research projects, including initiatives by TÜBİTAK, COST, and Horizon Europe; he is also a full member of the Turkish Academy of Sciences (TÜBA). Through his extensive scientific publications, international collaborations, and leadership in interdisciplinary research projects, he has made significant contributions to physical chemistry, nanotechnology, and membrane science. According to Web of Science data, Prof. Ersöz’s h-index is 43.",
    fullBio: undefined,
    link: "https://selcuk.edu.tr/birim/personeldetay/6269/mersoz",
    category: "keynote",
  },
  {
    id: "tony-ng",
    roleAr: "أستاذ العلوم الرياضية · زميل ASA وعضو منتخب في ISI",
    affiliationAr: "جامعة بنتلي، والثام، ماساتشوستس، الولايات المتحدة الأمريكية",
    roleRu: "Профессор математических наук · Член ASA и избранный член ISI",
    affiliationRu: "Университет Бентли, Уолтем, Массачусетс, США",
    name: "Prof. Dr. H. K. Tony Ng",
    role: "Professor of Mathematical Sciences · ASA Fellow & ISI Elected Member",
    affiliation: "Bentley University, Waltham, MA, USA",
    image: "/images/speakers/tony-ng.jpg",
    bio: "Prof. Dr. H. K. Tony Ng is a Professor of Mathematical Sciences at Bentley University and an Elected Fellow of the American Statistical Association (ASA) as well as an Elected Member of the International Statistical Institute (ISI). He has made seminal research contributions to reliability engineering, survival analysis, censoring methodology, order statistics, and nonparametric statistical inference. A prolific author and co-author of landmark books and hundreds of scholarly articles in applied statistics and reliability theory, he serves on the editorial boards of prominent international journals, including Communications in Statistics and IEEE Transactions on Reliability.",
    fullBio: undefined,
    link: "https://faculty.bentley.edu/profile/tng",
    category: "keynote",
  },
  {
    id: "carmine-clemente",
    roleAr: "أستاذ أنظمة الرادار ومعالجة الإشارات · مدير مركز CSIP",
    affiliationAr: "جامعة ستراثكلايد، غلاسكو، المملكة المتحدة",
    roleRu: "Профессор радиолокационных систем и обработки сигналов · Директор центра CSIP",
    affiliationRu: "Университет Стратклайда, Глазго, Великобритания",
    name: "Prof. Dr. Carmine Clemente",
    role: "Professor of Radar Systems and Signal Processing · Director, Centre for Signal and Image Processing, Chair of the EMSIG-The UK Radar Society",
    affiliation: "University of Strathclyde, Glasgow, United Kingdom",
    image: "/images/speakers/carmine-clemente.jpg",
    bio: "Prof. Dr. Carmine Clemente is a Professor of Radar Systems and Signal Processing in the Department of Electronic and Electrical Engineering at the University of Strathclyde, where he directs the Centre for Signal and Image Processing and the Sensor Signal Processing and Security Laboratory. He is also Chair of the Electromagnetic Systems Interest Group (EMSIG)-the UK Radar Society, Chair of the forthcoming IET International Conference on Radar Systems 2027 (RADAR 2027), and a Senior Member of the IEEE. He is an internationally recognised expert in radar systems and signal processing, including micro-Doppler analysis, Synthetic Aperture Radar, Automatic Target Recognition (ATR), and cognitive RF sensing. He has led major national and international research programmes funded by the European Space Agency, the UK Government, and industry, while pioneering the transfer of advanced radar algorithms to healthcare, infrastructure health monitoring, and environmental sensing.",
    fullBio: undefined,
    link: "https://pureportal.strath.ac.uk/en/persons/carmine-clemente/",
    category: "keynote",
  },
  {
    id: "danilo-orlando",
    roleAr: "أستاذ مشارك في معالجة الإشارات الإحصائية وأنظمة الرادار",
    affiliationAr: "قسم هندسة المعلومات، جامعة بيزا، إيطاليا",
    roleRu: "Доцент кафедры статистической обработки сигналов и радиолокационных систем",
    affiliationRu: "Департамент информационной инженерии, Пизанский университет, Италия",
    name: "Assoc. Prof. Dr. Danilo Orlando",
    role: "Associate Professor in Statistical Signal Processing and Radar Systems, Chair of the IEEE Italy Section Chapter of the Aerospace and Electronic Systems Society, Senior member of IEEE",
    affiliation: "Department of Information Engineering, University of Pisa",
    topic: "Learning Strategies for Radar Clutter Classification and/or Multiple Target Detection in Heterogeneous Environments",
    image: "/images/speakers/danilo-orlando.jpg",
    bio: "Danilo Orlando is an Italian academic and researcher internationally recognized for his work in radar systems and statistical signal processing. Holding a Ph.D. in electronic and telecommunications engineering, he serves as a faculty member at Università degli Studi Niccolò Cusano in Rome. His primary research interests include adaptive radar detection, covariance matrix estimation, multiple-input multiple-output (MIMO) systems, and statistical hypothesis testing. With over one hundred peer-reviewed publications—most notably in prominent IEEE journals such as IEEE Transactions on Signal Processing and IEEE Transactions on Aerospace and Electronic Systems—and thousands of academic citations, Orlando has made significant theoretical and algorithmic contributions to modern radar detection and signal processing frameworks.",
    fullBio: undefined,
    link: "https://ieee-aess.org/contact/danilo-orlando",
    category: "keynote",
  },
  {
    id: "asaf-varol",
    roleAr: "أستاذ كرسي Shaw Industries في علوم STEM",
    affiliationAr: "كلية دالتون ستيت، جورجيا، الولايات المتحدة الأمريكية",
    roleRu: "Заведующий кафедрой STEM имени Shaw Industries",
    affiliationRu: "Колледж Долтон Стейт, Джорджия, США",
    name: "Prof. Dr. Asaf Varol",
    role: "Shaw Industries Chair in STEM · AI, Cybersecurity & Engineering Education",
    affiliation: "Dalton State College, Georgia, USA",
    image: "/images/speakers/asaf-varol.jpg",
    bio: "Prof. Dr. Asaf Varol currently serves as the Shaw Industries Chair in STEM at Dalton State College in Georgia, USA. With over four decades of experience in engineering education, academic leadership, and international collaboration across the United States and Türkiye, he has contributed extensively to programs in software engineering, artificial intelligence, cybersecurity, digital forensics, and robotics. He is the Founder and General Chair of the International Symposium on Digital Forensics and Security (ISDFS).",
    fullBio: "Prof. Dr. Asaf Varol currently serves as the Shaw Industries Chair in STEM at Dalton State College in Georgia, USA, an endowed faculty position established through the College's longstanding partnership with Shaw Industries to advance STEM education, engineering innovation, workforce development, and university–industry collaboration.\n\nWith more than four decades of experience in engineering education, academic leadership, research, and international collaboration, Prof. Varol has held faculty and senior academic leadership positions in the United States and Türkiye. Before joining Dalton State College, he served in the faculty of the College of Engineering and Computer Science at the University of Tennessee at Chattanooga (UTC). Throughout his academic career, he has contributed to the development and leadership of programs spanning engineering, mechatronics, software engineering, artificial intelligence, cybersecurity, digital forensics, robotics, and engineering technology.\n\nHis research and professional interests include artificial intelligence and machine learning, cybersecurity and digital forensics, robotics and mechatronics, automation, engineering education, and the integration of emerging technologies into higher education and industrial applications. A major focus of his current work is strengthening university–industry collaboration and creating experiential engineering education environments in which students engage directly with real-world industrial problems, emerging technologies, and applied research.\n\nProf. Varol is also the Founder and General Chair of the International Symposium on Digital Forensics and Security (ISDFS), an international scientific conference that he has led since its establishment in 2013. Through this initiative and numerous other international academic activities, he has contributed extensively to global collaboration in digital forensics, cybersecurity, artificial intelligence, and engineering education.\n\nHe is also actively involved in engineering education, quality assurance and accreditation activities and has extensive experience in curriculum development, laboratory modernization, international higher education, and interdisciplinary academic cooperation.\n\nProf. Varol holds a Ph.D. in Mechanical Engineering, master's degrees in Nuclear Energy Engineering and Public Administration, and a bachelor's degree in mechanical engineering with honors. Through his research, teaching, academic leadership, and international initiatives, he continues to promote the responsible application of artificial intelligence and emerging technologies while building stronger connections among engineering education, research, industry, and society.",
    link: "https://asafvarol.com",
    category: "keynote",
  },
];

export const speakerCategories = [
  {
    id: "plenary",
    title: "Plenary Speakers",
    eyebrow: "Plenary Lectures",
    description: "Distinguished plenary addresses opening the conference themes and setting the global research vision.",
    speakers: plenarySpeakers,
  },
  {
    id: "keynote",
    title: "Keynote Speakers",
    eyebrow: "Keynote Addresses",
    description: "Keynote presentations by pioneering international researchers and leading technology visionaries.",
    speakers: keynoteSpeakers,
  },
];

export const allSpeakers: Speaker[] = [
  ...plenarySpeakers,
  ...keynoteSpeakers,
];
