export interface ImportantDate {
  event: string;
  eventTr?: string;
  eventDe?: string;
  eventRu?: string;
  eventAr?: string;
  date: string;
  dateTr?: string;
  dateDe?: string;
  dateRu?: string;
  dateAr?: string;
  passed: boolean;
  note?: string;
  noteTr?: string;
  noteDe?: string;
  noteRu?: string;
  noteAr?: string;
}

export const importantDates: ImportantDate[] = [
  {
    event: "Abstract Submission Deadline",
    eventTr: "Özet Gönderim Son Tarihi",
    eventDe: "Frist für die Einreichung von Abstracts",
    eventRu: "Крайний срок подачи тезисов",
    eventAr: "الموعد النهائي لتقديم الملخصات",
    date: "September 15, 2026",
    dateTr: "15 Eylül 2026",
    dateDe: "15. September 2026",
    dateRu: "15 сентября 2026 г.",
    dateAr: "15 سبتمبر 2026",
    passed: false,
    note: "Submit a 300–500 word abstract or a 1–2 page extended abstract via Microsoft CMT for evaluation and presentation approval.",
    noteTr: "Değerlendirme ve sunum onayı için Microsoft CMT üzerinden 300–500 kelimelik bir özet veya 1–2 sayfalık genişletilmiş özet gönderin.",
    noteDe: "Reichen Sie ein Abstract von 300–500 Wörtern oder ein erweitertes Abstract von 1–2 Seiten über Microsoft CMT zur Bewertung und Präsentationsgenehmigung ein.",
    noteRu: "Отправьте аннотацию объемом 300–500 слов или расширенную аннотацию на 1–2 страницы через Microsoft CMT для оценки и одобрения презентации.",
    noteAr: "قدّم ملخصاً (300–500 كلمة) أو ملخصاً موسعاً (1–2 صفحة) عبر نظام Microsoft CMT للتقييم واعتماد العرض."
  },
  {
    event: "Notification of Acceptance",
    eventTr: "Kabul Bildirimi",
    eventDe: "Benachrichtigung über die Annahme",
    eventRu: "Уведомление о принятии",
    eventAr: "الإشعار بالقبول",
    date: "September 30, 2026",
    dateTr: "30 Eylül 2026",
    dateDe: "30. September 2026",
    dateRu: "30 сентября 2026 г.",
    dateAr: "30 سبتمبر 2026",
    passed: false,
    note: "Authors will receive acceptance decision notifications for their abstract submissions.",
    noteTr: "Yazarlar, özet gönderileri için kabul kararı bildirimlerini alacaklardır.",
    noteDe: "Die Autoren erhalten Benachrichtigungen über die Annahmeentscheidung für ihre eingereichten Abstracts.",
    noteRu: "Авторы получат уведомления о решении о принятии тезисов.",
    noteAr: "سيتلقى المؤلفون إشعارات قرار القبول للملخصات المقدمة."
  },
  {
    event: "Registration Deadline",
    eventTr: "Son Kayıt Tarihi",
    eventDe: "Anmeldefrist",
    eventRu: "Крайний срок регистрации",
    eventAr: "الموعد النهائي للتسجيل",
    date: "October 18, 2026",
    dateTr: "18 Ekim 2026",
    dateDe: "18. Oktober 2026",
    dateRu: "18 октября 2026 г.",
    dateAr: "18 أكتوبر 2026",
    passed: false,
    note: "Free registration deadline for all presenters and general attendees to confirm participation.",
    noteTr: "Tüm sunucular ve genel katılımcılar için katılımı onaylamak üzere ücretsiz son kayıt tarihi.",
    noteDe: "Kostenlose Anmeldefrist für alle Referenten und allgemeinen Teilnehmer zur Bestätigung der Teilnahme.",
    noteRu: "Крайний срок бесплатной регистрации для всех докладчиков и участников для подтверждения участия.",
    noteAr: "الموعد النهائي للتسجيل المجاني لتأكيد المشاركة لجميع المحاضرين والحضور."
  },
  {
    event: "Conference Dates",
    eventTr: "Konferans Tarihleri",
    eventDe: "Konferenztage",
    eventRu: "Даты проведения конференции",
    eventAr: "مواعيد المؤتمر",
    date: "October 23–25, 2026",
    dateTr: "23–25 Ekim 2026",
    dateDe: "23.–25. Oktober 2026",
    dateRu: "23–25 октября 2026 г.",
    dateAr: "23–25 أكتوبر 2026",
    passed: false,
    note: "Hybrid conference presentations (in-person in Konya, Turkey & online), keynotes, panels, and networking events.",
    noteTr: "Hibrit konferans sunumları (Konya'da yüz yüze ve çevrim içi), anahtar konuşmalar, paneller ve ağ kurma etkinlikleri.",
    noteDe: "Hybride Konferenzpräsentationen (persönlich in Konya, Türkei & online), Keynotes, Podiumsdiskussionen und Networking-Events.",
    noteRu: "Гибридные презентации конференции (очно в Конье, Турция, и онлайн), пленарные доклады, панели и нетворкинг.",
    noteAr: "عروض المؤتمر المدمجة (حضوري في قونية، تركيا وعبر الإنترنت)، المحاضرات الرئيسية، الجلسات الحوارية، والفعاليات."
  },
  {
    event: "Full-Text Submission Deadline (Post-Conference Proceedings)",
    eventTr: "Tam Metin Gönderim Son Tarihi (Konferans Sonrası Bildiriler Kitabı)",
    eventDe: "Frist für die Einreichung von Volltexten (Konferenzband)",
    eventRu: "Крайний срок подачи полного текста (Сборник после конференции)",
    eventAr: "الموعد النهائي لتقديم النص الكامل",
    date: "November 30, 2026",
    dateTr: "30 Kasım 2026",
    dateDe: "30. November 2026",
    dateRu: "30 ноября 2026 г.",
    dateAr: "30 نوفمبر 2026",
    passed: false,
    note: "Optional deadline for authors of accepted and presented abstracts to submit full-text papers (6–8 pages) for the post-conference proceedings.",
    noteTr: "Kabul edilen ve sunulan özetlerin yazarları için konferans sonrası bildiriler kitabına tam metin bildirileri (6–8 sayfa) göndermek için isteğe bağlı son tarih.",
    noteDe: "Optionale Frist für Autoren akzeptierter und präsentierter Abstracts zur Einreichung von Volltextbeiträgen (6–8 Seiten) für den Konferenzband.",
    noteRu: "Необязательный крайний срок для авторов принятых и представленных тезисов для подачи полных текстов статей (6–8 страниц) для сборника трудов.",
    noteAr: "موعد اختياري لمؤلفي الملخصات المقبولة والمعروضة لتقديم أوراق كاملة (6–8 صفحات) لنشرها بعد المؤتمر."
  },
];
