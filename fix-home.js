const fs = require('fs');

const file = 'src/app/[lang]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace standard strings
const replacements = {
  'Organized by': '{t.homeNew.organizedBy}',
  'The Philosophy of the Logo': '{t.homeNew.logoPhilosophyTitle}',
  [`{"In this design, humanity's journey from the past into the future is symbolized by the Tree of Life. The half of the tree composed of traditional motifs represents cultural heritage, human roots, and traces carried from the past. The other half, formed of technological networks, signifies artificial intelligence, innovative advancements, and the transforming world of the future. Circuit-like lines and abstract shapes reflect the interconnected and evolving nature of AI. Merging at the center of the tree, these two aspects emphasize that tradition and technology are not opposing forces, but complementary elements. The design conveys how humanity builds the future shaped by artificial intelligence together with the accumulated wisdom of its past."}`]: '{t.homeNew.logoPhilosophyDesc}',
  '{ dt: "Format", dd: t.common.hybrid }': '{ dt: t.homeNew.format, dd: t.common.hybrid }',
  '{ dt: "Venue", dd: "Sultan Alparslan Cultural Center (SAKM), Konya & Virtual" }': '{ dt: t.homeNew.venueLabel, dd: t.homeNew.venueText }',
  '{ dt: "Sessions", dd: "Oral, poster & undergraduate sessions" }': '{ dt: t.homeNew.sessions, dd: t.homeNew.sessionsText }',
  '{ dt: "Abstract Book", dd: "Published post-conference" }': '{ dt: t.homeNew.abstractBook, dd: t.homeNew.abstractBookText }',
  '{ dt: "Fee", dd: "Free of charge for all participants" }': '{ dt: t.homeNew.fee, dd: t.homeNew.feeText }',
  'label === "Conference Days" && "Conference Days"': 'label === "Conference Days" && t.homeNew.statsDays',
  'label === "Subtopic Domains" && "Subtopic Domains"': 'label === "Subtopic Domains" && t.homeNew.statsDomains',
  'label === "Paper Sessions" && "Paper Sessions"': 'label === "Paper Sessions" && t.homeNew.statsSessions',
  'title="An interdisciplinary dialogue"': 'title={t.homeNew.overviewTitle}',
  '{conferenceData.organizer} hosts the International Conference on AI Across Disciplines ({conferenceData.shortName}): a forum where researchers, practitioners, and policymakers present original work and examine it across disciplinary lines.': '{conferenceData.organizer} {t.homeNew.overviewP1} ({conferenceData.shortName}): {t.homeNew.overviewP1b}',
  'Our aim is to connect theoretical advances with real-world applications — the technological frontiers of AI alongside its societal implications.': '{t.homeNew.overviewP2}',
  'About our vision': '{t.homeNew.overviewLink}',
  'eyebrow="Distinguished lectures"': 'eyebrow={t.homeNew.speakersEyebrow}',
  'title="Plenary & Keynote Speakers"': 'title={t.homeNew.speakersTitle}',
  'description="Leading researchers and industry pioneers presenting at ICAAD 2026."': 'description={t.homeNew.speakersDesc}',
  '<Button variant="outline">All speakers</Button>': '<Button variant="outline">{t.homeNew.speakersAll}</Button>',
  'Speakers Will Be Announced Soon': '{t.homeNew.speakersSoonTitle}',
  'Distinguished plenary and keynote scholars from international academia and industry leaders are currently being finalized.': '{t.homeNew.speakersSoonDesc}',
  'View Speaker Information': '{t.homeNew.speakersViewInfo}',
  'eyebrow="Deadlines"': 'eyebrow={t.homeNew.datesEyebrow}',
  'title="Important dates"': 'title={t.homeNew.datesTitle}',
  'description="All deadlines are 11:59 PM Anywhere on Earth."': 'description={t.homeNew.datesDesc}',
  'text-brand-blackLight no-underline">closed</span>': 'text-brand-blackLight no-underline">{t.homeNew.datesClosed}</span>',
  'eyebrow="Partnership & Support"': 'eyebrow={t.homeNew.collabEyebrow}',
  'title="Organizing & Collaborating Institutions"': 'title={t.homeNew.collabTitle}',
  'ICAAD 2026 is organized by ${conferenceData.organizer} in academic and technological partnership with leading Turkish research and development institutions.': '{t.homeNew.collabDesc} ${conferenceData.organizer} {t.homeNew.collabDesc2}',
  'Host Institution': '{t.homeNew.hostInst}',
  'Official Website': '{t.homeNew.officialWebsite}',
  'ICAAD 2026 Partner': '{t.homeNew.partnerLabel}',
  'eyebrow="Join the conversation"': 'eyebrow={t.homeNew.ctaEyebrow}',
  'title="Ready to contribute?"': 'title={t.homeNew.ctaTitle}',
  'description="Submit your research to ICAAD 2026 and engage with a global community at the intersection of AI and humanity."': 'description={t.homeNew.ctaDesc}'
};

for (const [key, value] of Object.entries(replacements)) {
  content = content.replace(key, value);
}

fs.writeFileSync(file, content);
console.log('Fixed page.tsx');
