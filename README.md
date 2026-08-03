# ICAID 2026 — Konferans Web Sitesi

Selçuk Üniversitesi tarafından düzenlenen **International Conference on AI Across Disciplines (ICAID 2026)** web sitesi.
Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion ile geliştirilmiştir.

## Tasarım Sistemi

- **Renkler:** Birincil renk Selçuklu çinisinden esinlenen koyu turkuaz-yeşil (`#0E6E66`),
  koyu bölümler derin çini yeşili (`#0E2A26`). Kurumsal sarı, mat altına (`#C9A227`)
  dönüştürülüp yalnızca ince çizgi ve vurgu olarak kullanılır — hiçbir yerde sarı zemin
  üzerine/altına metin yoktur (WCAG AA kontrast).
- **Tipografi:** Başlıklar **STIX Two Text** (bilimsel yayıncılık serif'i),
  metin **IBM Plex Sans**, tarih/etiket/saatler **IBM Plex Mono**.
- **İmza motifi:** Selçuklu sekiz kollu yıldız (girih) deseni — `globals.css` içindeki
  `.bg-girih` / `.bg-girih-gold` yardımcı sınıfları ve ana sayfadaki `SeljukStar` bileşeni.
- Tüm renk token'ları `tailwind.config.ts` → `brand` altındadır; tek yerden değiştirilebilir.

## Kurulum ve Çalıştırma

```bash
npm install
npm run dev      # geliştirme sunucusu → http://localhost:3000
npm run build    # üretim derlemesi
npm start        # üretim sunucusu
```

## İçeriği Güncelleme (tek yerden)

Sitedeki tüm içerik `src/data/` klasöründen yönetilir — sayfa dosyalarına dokunmanıza gerek yok:

| Dosya | İçerik |
|---|---|
| `src/data/conference.ts` | Konferans adı, tarih, adres, e-posta, telefon, menüler, istatistikler |
| `src/data/dates.ts` | Önemli tarihler (geçen tarihler için `passed: true` yapın) |
| `src/data/schedule.ts` | 3 günlük program |
| `src/data/speakers.ts` | Davetli konuşmacılar |
| `src/data/committee.ts` | Kurullar |

> **Not:** `conference.ts` içindeki e-posta adresini ve telefon numarasını kendi resmî
> iletişim bilgilerinizle güncellemeyi unutmayın.

## Değiştirmeniz Gereken Placeholder Görseller

Aşağıdaki dosyaları **aynı dosya adıyla** kendi görsellerinizle değiştirmeniz yeterlidir:

| Dosya | Önerilen boyut | Açıklama |
|---|---|---|
| `public/images/speakers/speaker-1.jpg` | 600×800 (3:4) | Dr. Elena Rostova fotoğrafı |
| `public/images/speakers/speaker-2.jpg` | 600×800 (3:4) | Prof. Marcus Chen fotoğrafı |
| `public/images/speakers/speaker-3.jpg` | 600×800 (3:4) | Dr. Ayşe Yılmaz fotoğrafı |
| `public/images/venue/congress-center.jpg` | 1280×720 | Kongre merkezi fotoğrafı |
| `src/app/icon.png` | 64×64 | Favicon (logodan otomatik üretildi, isterseniz değiştirin) |

Farklı dosya adları kullanmak isterseniz `src/data/speakers.ts` içindeki yolları güncelleyin.

## Tamamlanması Gereken İşler (TODO)

- [ ] `src/data/conference.ts` içindeki **e-posta** ve **telefon** bilgilerini doğrulayın
- [ ] CFP sayfasındaki **"Submit via CMT"** butonuna gerçek gönderim bağlantısını ekleyin (`src/app/cfp/page.tsx`)
- [ ] CFP sayfasındaki **LaTeX / Word şablon** indirme bağlantılarını ekleyin
- [ ] Kayıt sayfasındaki **"Proceed to Registration Portal"** butonuna kayıt sistemi bağlantısını ekleyin
- [ ] İletişim formu şu an ziyaretçinin e-posta istemcisini açar (mailto). Bir backend/form servisi bağlamak isterseniz `src/components/ContactForm.tsx` içindeki `handleSubmit` fonksiyonunu güncelleyin
- [ ] `privacy` ve `terms` sayfalarındaki placeholder metinleri kurumunuzun onaylı metinleriyle değiştirin
- [ ] Otel listesi hazır olduğunda Venue sayfasına ekleyin

## Yapı

```
src/
  app/          → sayfalar (about, cfp, committee, contact, dates,
                  keynotes, program, registration, venue, privacy, terms)
  components/   → Navbar, Footer, ContactForm + ui/ (Button, Section,
                  PageHeader, Countdown, MotionDiv)
  data/         → tüm içerik (tek doğruluk kaynağı)
public/images/  → logo, kampüs fotoğrafı ve placeholder görseller
```
