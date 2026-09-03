const fs = require('fs');

const updateDict = (file, translations) => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace the closing `};` of the default export
  content = content.replace(/};\n*(export type Dictionary = typeof en;)?/s, (match, p1) => {
    let result = ",\n  registration: {\n";
    result += `    isOpen: "${translations.isOpen}",\n`;
    result += `    submitDesc: "${translations.submitDesc}"\n`;
    result += "  },\n  venue: {\n";
    result += `    title: "${translations.venueTitle}",\n`;
    result += `    desc: "${translations.venueDesc}",\n`;
    result += `    culturalTitle: "${translations.culturalTitle}",\n`;
    result += `    culturalDesc: "${translations.culturalDesc}"\n`;
    result += "  }\n};";
    if (p1) result += "\n\n" + p1;
    return result;
  });

  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
}

updateDict('src/i18n/locales/en.ts', {
  isOpen: "is Open",
  submitDesc: "Submit your paper for ICAAD 2026 via Microsoft CMT",
  venueTitle: "Venue & Travel",
  venueDesc: "Join us at the Sultan Alparslan Cultural Center for an unforgettable hybrid experience.",
  culturalTitle: "Cultural Heritage",
  culturalDesc: "Explore the historic city of Konya, the heart of the Seljuk Empire."
});

updateDict('src/i18n/locales/tr.ts', {
  isOpen: "Açıldı",
  submitDesc: "ICAAD 2026 için bildirinizi Microsoft CMT üzerinden gönderin",
  venueTitle: "Mekan & Seyahat",
  venueDesc: "Sultan Alparslan Kültür Merkezi'nde unutulmaz bir hibrit deneyim için bize katılın.",
  culturalTitle: "Kültürel Miras",
  culturalDesc: "Selçuklu İmparatorluğu'nun kalbi, tarihi Konya şehrini keşfedin."
});

updateDict('src/i18n/locales/de.ts', {
  isOpen: "ist Eröffnet",
  submitDesc: "Reichen Sie Ihren Beitrag für die ICAAD 2026 über Microsoft CMT ein",
  venueTitle: "Veranstaltungsort & Reise",
  venueDesc: "Begleiten Sie uns im Sultan Alparslan Kulturzentrum für ein unvergessliches Hybrid-Erlebnis.",
  culturalTitle: "Kulturelles Erbe",
  culturalDesc: "Erkunden Sie die historische Stadt Konya, das Herz des Seldschuken-Reiches."
});

updateDict('src/i18n/locales/ru.ts', {
  isOpen: "Открыто",
  submitDesc: "Отправьте свою статью для ICAAD 2026 через Microsoft CMT",
  venueTitle: "Место проведения и поездка",
  venueDesc: "Присоединяйтесь к нам в Культурном центре Султана Алпарслана для незабываемого гибридного опыта.",
  culturalTitle: "Культурное наследие",
  culturalDesc: "Исследуйте исторический город Конья, сердце Империи Сельджуков."
});
