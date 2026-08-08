export interface Speaker {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  topic?: string;
  image: string;
  bio: string;
  link?: string;
  category: "plenary" | "keynote" | "invited";
}

export const plenarySpeakers: Speaker[] = [];

export const keynoteSpeakers: Speaker[] = [];

export const invitedSpeakers: Speaker[] = [];

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
