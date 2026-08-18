export interface Speaker {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  topic?: string;
  image: string;
  bio: string;
  /** Extended CV paragraph — to be populated when full CVs are provided. */
  fullBio?: string;
  link?: string;
  category: "plenary" | "keynote" | "invited";
}

export const plenarySpeakers: Speaker[] = [
  {
    id: "erol-ozvar",
    name: "Prof. Dr. Erol Özvar",
    role: "President, Council of Higher Education (YÖK)",
    affiliation: "Council of Higher Education (YÖK), Türkiye",
    image: "/images/speakers/erol-ozvar.jpg",
    bio: "Prof. Dr. Erol Özvar is the President of the Council of Higher Education (YÖK) of Türkiye, appointed in 2021 and reappointed in 2025. A distinguished economic historian, he previously served as Rector of Marmara University (2018–2021) and held visiting research positions at Harvard University. He is the recipient of the International Halil İnalcık History Award (2013) for his foundational scholarship on Ottoman fiscal history.",
    fullBio: undefined,
    link: "https://www.yok.gov.tr/Sayfalar/Kurumsal/baskan.aspx",
    category: "plenary",
  },

  {
    id: "narayanaswamy-balakrishnan",
    name: "Prof. Dr. Narayanaswamy Balakrishnan",
    role: "Distinguished University Professor of Mathematics & Statistics",
    affiliation: "McMaster University, Hamilton, Ontario, Canada",
    image: "/images/speakers/narayanaswamy-balakrishnan.jpg",
    bio: "Prof. Dr. Narayanaswamy Balakrishnan is a world-leading mathematical statistician at McMaster University and an authority in distribution theory, order statistics, reliability engineering, and censoring methodology. An elected Fellow of the Royal Society of Canada, the American Statistical Association, and the Institute of Mathematical Statistics, he has authored dozens of landmark textbooks and serves as Editor-in-Chief of Communications in Statistics.",
    fullBio: undefined,
    link: "https://www.math.mcmaster.ca/bala/",
    category: "plenary",
  },
  {
    id: "fei-fei-li",
    name: "Prof. Dr. Fei-Fei Li",
    role: "Sequoia Professor of Computer Science · Co-Director, Stanford HAI",
    affiliation: "Stanford University, Stanford, CA, USA",
    image: "/images/speakers/fei-fei-li.jpg",
    bio: "Prof. Dr. Fei-Fei Li is the Sequoia Professor of Computer Science at Stanford University, Founding Co-Director of the Stanford Institute for Human-Centered AI (HAI), and Co-Founder & CEO of World Labs. She created ImageNet, the large-scale visual dataset that ignited the deep learning revolution in computer vision. An elected member of the National Academies of Engineering and Medicine, she also co-founded AI4ALL to broaden access and diversity in AI education.",
    fullBio: undefined,
    link: "https://profiles.stanford.edu/fei-fei-li",
    category: "plenary",
  },
];

export const keynoteSpeakers: Speaker[] = [
  {
    id: "masashi-sugiyama",
    name: "Prof. Dr. Masashi Sugiyama",
    role: "Director, RIKEN Center for Advanced Intelligence Project (AIP)",
    affiliation: "RIKEN AIP / The University of Tokyo, Japan",
    image: "/images/speakers/masashi-sugiyama.jpg",
    bio: "Prof. Dr. Masashi Sugiyama is Director of the RIKEN Center for Advanced Intelligence Project (RIKEN AIP) and Professor at The University of Tokyo. He has made seminal contributions to statistical machine learning, particularly in weakly supervised learning, covariate shift adaptation, and density ratio estimation. A recipient of the Japan Academy Medal and JSPS Prize, he has served as Program Co-Chair of NeurIPS and AISTATS.",
    fullBio: undefined,
    link: "https://aip.riken.jp/",
    category: "keynote",
  },
];

export const invitedSpeakers: Speaker[] = [
  {
    id: "huseyin-arslan",
    name: "Prof. Dr. Hüseyin Arslan",
    role: "Dean, School of Engineering & Natural Sciences · Director, CoSiNC",
    affiliation: "Istanbul Medipol University, Istanbul, Türkiye",
    image: "/images/speakers/huseyin-arslan.jpg",
    bio: "Prof. Dr. Hüseyin Arslan is an IEEE Fellow and National Academy of Inventors Fellow, currently serving as Dean of Engineering at Istanbul Medipol University and founding director of the CoSiNC research center. A pioneer in 5G/6G radio access technologies, waveform design, cognitive radio, and physical layer security, he previously led the WCSP research group at the University of South Florida for two decades.",
    fullBio: undefined,
    link: "https://cosinc.medipol.edu.tr/",
    category: "invited",
  },
  {
    id: "sahin-albayrak",
    name: "Prof. Dr. Şahin Albayrak",
    role: "Head, Distributed AI Laboratory (DAI-Labor) · Chair, AOT",
    affiliation: "Technical University of Berlin (TU Berlin), Berlin, Germany",
    image: "/images/speakers/sahin-albayrak.jpg",
    bio: "Prof. Dr. Şahin Albayrak is the founder and head of the Distributed Artificial Intelligence Laboratory (DAI-Labor) and the German-Turkish Advanced Research Centre for ICT (GT-ARC) at TU Berlin. With over 1,000 scientific publications and dozens of patents, he is a leading pioneer in distributed AI, smart city infrastructure, and autonomous mobility. He was awarded the Order of Merit of the Federal Republic of Germany (Bundesverdienstkreuz) for his contributions to international scientific collaboration.",
    fullBio: undefined,
    link: "https://www.dai-labor.de",
    category: "invited",
  },
  {
    id: "erol-balevi",
    name: "Erol Balevi",
    role: "Senior Software Engineer & Agile Technical Coach",
    affiliation: "JPMorgan Chase & Co., United States",
    image: "/images/speakers/erol-balevi.jpg",
    bio: "Erol Balevi is a veteran software engineer and Agile Technical Coach at JPMorgan Chase & Co. with over 25 years of experience across major US technology corporations including Microsoft and AT&T. An early pioneer of internet technology guidance in Turkey, he frequently delivers keynote sessions at Turkish universities on scalable agile engineering, cloud systems, and cybersecurity.",
    fullBio: undefined,
    link: "https://www.linkedin.com/in/erolbalevi",
    category: "invited",
  },
  {
    id: "erdem-erdemir",
    name: "Assoc. Prof. Dr. Erdem Erdemir",
    role: "Associate Professor of Computer Science · Director, TIGER Institute",
    affiliation: "Tennessee State University, Nashville, TN, USA",
    image: "/images/speakers/erdem-erdemir.jpg",
    bio: "Assoc. Prof. Dr. Erdem Erdemir is an Associate Professor of Computer Science at Tennessee State University and Director of the TIGER Institute for Renewable Energy and Mechatronics. He received his Ph.D. from Vanderbilt University and his B.Sc./M.Sc. from Boğaziçi University. His research focuses on intelligent micro-scale medical robotics, active capsule endoscopy locomotion, and machine learning-driven image analysis.",
    fullBio: undefined,
    link: "https://sites.google.com/site/erdemerdemir/",
    category: "invited",
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
  {
    id: "invited",
    title: "Invited Speakers",
    eyebrow: "Invited Talks",
    description: "Distinguished talks delivered across specialized disciplinary tracks and panel sessions.",
    speakers: invitedSpeakers,
  },
];

export const allSpeakers: Speaker[] = [
  ...plenarySpeakers,
  ...keynoteSpeakers,
  ...invitedSpeakers,
];
