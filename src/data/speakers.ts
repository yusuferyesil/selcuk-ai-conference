export interface Speaker {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  topic: string;
  image: string;
  bio: string;
  link?: string;
}

export const keynoteSpeakers: Speaker[] = [
  {
    id: "ks1",
    name: "Erol Balevi",
    role: "Vice President & Agile Technical Coach",
    affiliation: "JPMorgan Chase & Co.",
    topic: "Agile Engineering & Enterprise AI Transformation",
    image: "/images/speakers/erol-balevi.jpg",
    link: "https://www.linkedin.com/in/erolbalevi",
    bio: "Vice President and Agile Technical Coach at JPMorgan Chase & Co. Over 25 years of global engineering experience leading agile transformations, enterprise software architecture, and modern AI integration across complex platforms.",
  },
  {
    id: "ks2",
    name: "Assoc. Prof. Dr. Erdem Erdemir",
    role: "Associate Professor of Computer Science",
    affiliation: "Tennessee State University, USA",
    topic: "Machine Learning for Autonomous Robotics & Smart Mechatronics",
    image: "/images/speakers/erdem-erdemir.jpg",
    link: "https://www.tnstate.edu/computer_science/Dr_Erdemir.aspx",
    bio: "Associate Professor of Computer Science at Tennessee State University and Director of TIGER Institute. Ph.D. from Vanderbilt University. Pioneer in autonomous robotics, mechatronics, micro-scale systems, and embedded machine learning.",
  },
  {
    id: "ks3",
    name: "Prof. Dr. Şahin Albayrak",
    role: "Chair of Agent Technologies & Director of DAI-Labor",
    affiliation: "Technische Universität Berlin (TU Berlin), Germany",
    topic: "Distributed Artificial Intelligence & Autonomous Mobility Systems",
    image: "/images/speakers/sahin-albayrak.jpg",
    link: "https://www.linkedin.com/in/prof-dr-dr-h-c-sahin-albayrak-65452a1/",
    bio: "Founder and Director of the Distributed Artificial Intelligence Laboratory (DAI-Labor) and Chair of Agent Technologies at TU Berlin. Founder of GT-ARC and recipient of the Order of Merit of the Federal Republic of Germany for contributions to AI and autonomous driving.",
  },
];
