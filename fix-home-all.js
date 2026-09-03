const fs = require('fs');

const file = 'src/app/[lang]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Fix string literal bug in SectionHeading description around line 391
content = content.replace(
  'description={`{t.homeNew.collabDesc} ${conferenceData.organizer} {t.homeNew.collabDesc2}`}',
  'description={`${t.homeNew.collabDesc} ${lang === "tr" ? (conferenceData.organizerTr || conferenceData.organizer) : conferenceData.organizer} ${t.homeNew.collabDesc2}`}'
);

// Track description language check
content = content.replace(
  '{track.description}',
  '{lang === "tr" && track.descriptionTr ? track.descriptionTr : track.description}'
);

// Important dates language checks
content = content.replace(
  '{date.date}',
  '{lang === "tr" && date.dateTr ? date.dateTr : (lang === "de" && date.dateDe ? date.dateDe : (lang === "ru" && date.dateRu ? date.dateRu : date.date))}'
);

content = content.replace(
  '{date.event}',
  '{lang === "tr" && date.eventTr ? date.eventTr : (lang === "de" && date.eventDe ? date.eventDe : (lang === "ru" && date.eventRu ? date.eventRu : date.event))}'
);

// Host institution fields
content = content.replace(
  '{conferenceData.hostInstitution.role}',
  '{lang === "tr" && conferenceData.hostInstitution.roleTr ? conferenceData.hostInstitution.roleTr : conferenceData.hostInstitution.role}'
);

content = content.replace(
  '{conferenceData.hostInstitution.name}',
  '{lang === "tr" && conferenceData.hostInstitution.nameTr ? conferenceData.hostInstitution.nameTr : conferenceData.hostInstitution.name}'
);

content = content.replace(
  '{conferenceData.hostInstitution.fullName}',
  '{lang === "tr" && conferenceData.hostInstitution.fullNameTr ? conferenceData.hostInstitution.fullNameTr : conferenceData.hostInstitution.fullName}'
);

content = content.replace(
  '{conferenceData.hostInstitution.description}',
  '{lang === "tr" && conferenceData.hostInstitution.descriptionTr ? conferenceData.hostInstitution.descriptionTr : conferenceData.hostInstitution.description}'
);

content = content.replace(
  '<span className="text-brand-blackLight">Host Institution</span>',
  '<span className="text-brand-blackLight">{t.homeNew.hostInst}</span>'
);

// Collaborators fields
content = content.replace(
  '{partner.role}',
  '{lang === "tr" && partner.roleTr ? partner.roleTr : partner.role}'
);

content = content.replace(
  '{partner.fullName}',
  '{lang === "tr" && partner.fullNameTr ? partner.fullNameTr : partner.fullName}'
);

content = content.replace(
  '{partner.description}',
  '{lang === "tr" && partner.descriptionTr ? partner.descriptionTr : partner.description}'
);

content = content.replace(
  'Official Website <ArrowRight size={13} />',
  '{t.homeNew.officialWebsite} <ArrowRight size={13} />'
);

// CTA Section
content = content.replace(
  'eyebrow="Registration"',
  'eyebrow={t.nav.registration}'
);

content = content.replace(
  'title="Join us in Konya or Online this October"',
  'title={t.homeNew.ctaTitle}'
);

content = content.replace(
  'description="Registration and participation are completely free of charge. Secure your place to engage with cutting-edge AI research across disciplines."',
  'description={t.homeNew.ctaDesc}'
);

content = content.replace(
  'Submit your paper\n                </Button>',
  '{t.common.submitPaper}\n                </Button>'
);

content = content.replace(
  'Venue &amp; travel\n                </Button>',
  '{t.nav.venueTravel}\n                </Button>'
);

fs.writeFileSync(file, content);
console.log('Successfully updated page.tsx');
