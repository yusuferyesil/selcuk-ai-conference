const fs = require('fs');

let content = fs.readFileSync('src/data/dates.ts', 'utf8');

// Update Interface
content = content.replace('  eventRu?: string;', '  eventRu?: string;\n  eventAr?: string;');
content = content.replace('  dateRu?: string;', '  dateRu?: string;\n  dateAr?: string;');
content = content.replace('  noteRu?: string;', '  noteRu?: string;\n  noteAr?: string;');

// Add Arabic fields to date objects
content = content.replace('eventRu: "Крайний срок подачи тезисов",', 'eventRu: "Крайний срок подачи тезисов",\n    eventAr: "الموعد النهائي لتقديم الملخصات",');
content = content.replace('dateRu: "15 сентября 2026 г.",', 'dateRu: "15 сентября 2026 г.",\n    dateAr: "15 سبتمبر 2026",');
content = content.replace('noteRu: "Отправьте аннотацию объемом 300–500 слов или расширенную аннотацию на 1–2 страницы через Microsoft CMT для оценки и одобрения презентации."', 'noteRu: "Отправьте аннотацию объемом 300–500 слов или расширенную аннотацию на 1–2 страницы через Microsoft CMT для оценки и одобрения презентации.",\n    noteAr: "قدّم ملخصاً (300–500 كلمة) أو ملخصاً موسعاً (1–2 صفحة) عبر نظام Microsoft CMT للتقييم واعتماد العرض."');

content = content.replace('eventRu: "Уведомление о принятии",', 'eventRu: "Уведомление о принятии",\n    eventAr: "الإشعار بالقبول",');
content = content.replace('dateRu: "30 сентября 2026 г.",', 'dateRu: "30 сентября 2026 г.",\n    dateAr: "30 سبتمبر 2026",');
content = content.replace('noteRu: "Авторы получат уведомления о решении о принятии тезисов."', 'noteRu: "Авторы получат уведомления о решении о принятии тезисов.",\n    noteAr: "سيتلقى المؤلفون إشعارات قرار القبول للملخصات المقدمة."');

content = content.replace('eventRu: "Крайний срок регистрации",', 'eventRu: "Крайний срок регистрации",\n    eventAr: "الموعد النهائي للتسجيل",');
content = content.replace('dateRu: "18 октября 2026 г.",', 'dateRu: "18 октября 2026 г.",\n    dateAr: "18 أكتوبر 2026",');
content = content.replace('noteRu: "Крайний срок бесплатной регистрации для всех докладчиков и участников для подтверждения участия."', 'noteRu: "Крайний срок бесплатной регистрации для всех докладчиков и участников для подтверждения участия.",\n    noteAr: "الموعد النهائي للتسجيل المجاني لتأكيد المشاركة لجميع المحاضرين والحضور."');

content = content.replace('eventRu: "Даты проведения конференции",', 'eventRu: "Даты проведения конференции",\n    eventAr: "مواعيد المؤتمر",');
content = content.replace('dateRu: "23–25 октября 2026 г.",', 'dateRu: "23–25 октября 2026 г.",\n    dateAr: "23–25 أكتوبر 2026",');
content = content.replace('noteRu: "Гибридные презентации конференции (очно в Конье, Турция, и онлайн), пленарные доклады, панели и нетворкинг."', 'noteRu: "Гибридные презентации конференции (очно в Конье, Турция, и онлайн), пленарные доклады, панели и нетворкинг.",\n    noteAr: "عروض المؤتمر المدمجة (حضوري في قونية، تركيا وعبر الإنترنت)، المحاضرات الرئيسية، الجلسات الحوارية، والفعاليات."');

content = content.replace('eventRu: "Крайний срок подачи полного текста (Сборник после конференции)",', 'eventRu: "Крайний срок подачи полного текста (Сборник после конференции)",\n    eventAr: "الموعد النهائي لتقديم النص الكامل",');
content = content.replace('dateRu: "30 ноября 2026 г.",', 'dateRu: "30 ноября 2026 г.",\n    dateAr: "30 نوفمبر 2026",');
content = content.replace('noteRu: "Необязательный крайний срок для авторов принятых и представленных тезисов для подачи полных текстов статей (6–8 страниц) для сборника трудов."', 'noteRu: "Необязательный крайний срок для авторов принятых и представленных тезисов для подачи полных текстов статей (6–8 страниц) для сборника трудов.",\n    noteAr: "موعد اختياري لمؤلفي الملخصات المقبولة والمعروضة لتقديم أوراق كاملة (6–8 صفحات) لنشرها بعد المؤتمر."');

fs.writeFileSync('src/data/dates.ts', content);
console.log('Updated src/data/dates.ts with Arabic fields');
