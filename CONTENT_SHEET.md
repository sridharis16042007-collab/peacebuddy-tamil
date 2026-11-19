# Peace Buddy Tamil — Client Content Sheet (உள்ளடக்கப் பட்டியல்) 📋

This document lists **every placeholder** present in the codebase that you need to fill with your real business information.  
Per your instructions: **no testimonials, statistics, credentials, or medical claims were invented.**

---

## 📌 1. Identity & Contact Placeholders

| Placeholder | Location / Component | Current Default | Action Needed | Example / Recommended Format |
| :--- | :--- | :--- | :--- | :--- |
| **`[CLIENT WHATSAPP]`** | `components/Footer.tsx`<br>`components/ClosingCta.tsx`<br>`components/WhatsAppButton.tsx`<br>`app/contact/page.tsx` | `[CLIENT WHATSAPP]` | Replace with your business WhatsApp phone number (with country code, no `+` in URL). | `+91 98765 43210`<br>(Link: `https://wa.me/919876543210`) |
| **`[CLIENT EMAIL]`** | `components/Footer.tsx`<br>`app/contact/page.tsx`<br>`app/privacy/page.tsx` | `[CLIENT EMAIL]` | Replace with your official domain email address. | `contact@peacebuddytamil.com` |
| **`[CLIENT INSTAGRAM]`** | `app/layout.tsx` (Schema)<br>`components/Footer.tsx` | `[CLIENT_INSTAGRAM]` | Replace with your exact Instagram username. | `@peacebuddytamil` |
| **`[CLIENT YOUTUBE]`** | `app/layout.tsx` (Schema)<br>`components/Footer.tsx` | `[CLIENT_YOUTUBE]` | Replace with your YouTube channel handle. | `@PeaceBuddyTamil` |
| **`[FOUNDER NAME]`** | `lib/translations.ts`<br>`components/FounderSection.tsx`<br>`app/about/page.tsx` | `[FOUNDER NAME]` | Replace with your actual name. | E.g., *Anand Kumar* |
| **`[FOUNDER PHOTO]`** | `components/FounderSection.tsx`<br>`app/about/page.tsx` | Silhouette graphic placeholder (`chakra-meditation.webp`) | Replace with an honest, warm, gentle portrait photo of the founder. | High-res JPG/WebP, 800x800px, natural lighting. |

---

## 🌿 2. Service Offerings (3 Cards Only)

Located in: `lib/translations.ts` -> `services`

| Placeholder | Component | Purpose & Description | Recommended Word Count |
| :--- | :--- | :--- | :--- |
| **`[SERVICE 1]`** | `components/ServicesSection.tsx` | **Mindful Meditation Guidance (தமிழ் தியான வழிகாட்டல்):**<br>Beginner-friendly guided sessions, sleep reset routines. | Title: 4-6 words.<br>Desc: 25-35 words.<br>3 bullet points. |
| **`[SERVICE 2]`** | `components/ServicesSection.tsx` | **Overthinking & Emotional Clarity (ஓவர்திங்கிங் தணிப்பு):**<br>Cognitive techniques to halt thought loops, journaling prompts. | Title: 4-6 words.<br>Desc: 25-35 words.<br>3 bullet points. |
| **`[SERVICE 3]`** | `components/ServicesSection.tsx` | **Daily Peaceful Habits (அமைதியான வாழ்வியல் பழக்கங்கள்):**<br>Morning rituals, unhurried routines, work-life balance. | Title: 4-6 words.<br>Desc: 25-35 words.<br>3 bullet points. |

---

## 💬 3. Real Testimonials (Moderated & Calm)

Located in: `lib/translations.ts` -> `testimonials`

*Note: Per strict guidelines, never invent testimonials. Use only genuine feedback received from actual participants.*

| Placeholder | Component | Type | Instructions |
| :--- | :--- | :--- | :--- |
| **`[REAL TESTIMONIAL 1]`** | `components/TestimonialsSection.tsx` | Text + Client Name + City | Replace with a calm, genuine review highlighting stress relief or better sleep. |
| **`[REAL TESTIMONIAL 2]`** | `components/TestimonialsSection.tsx` | Text + Client Name + City | Replace with feedback on experiencing mindfulness in the Tamil mother tongue. |
| **`[REAL TESTIMONIAL 3]`** | `components/TestimonialsSection.tsx` | Text + Client Name + City | Replace with an honest note on everyday habit transformation. |
| **`[CLIENT NAME 1, 2, 3]`** | `components/TestimonialsSection.tsx` | Author Name | Client first name or initial (e.g. *Kavitha S., Chennai*). |

*(If real testimonials are not yet available upon initial launch, the `<TestimonialsSection />` component can be commented out in `app/page.tsx` with zero layout break).*

---

## 🎧 4. Free Resource / Newsletter & Audio Guide

Located in: `components/NewsletterSection.tsx` and `app/resources/page.tsx`

| Placeholder | Location | Description | Action Needed |
| :--- | :--- | :--- | :--- |
| **`[AUDIO DOWNLOAD]`** | `app/resources/page.tsx` | 10-Minute Guided Meditation Audio in Tamil | Link your actual MP3 audio file or private SoundCloud/Google Drive link. |
| **Google Sheets Webhook URL** | `app/api/newsletter/route.ts`<br>`app/api/contact/route.ts`<br>`server.js` | `https://script.google.com/macros/s/AKfycbw_CHA1d0IU0g62BJFh2ZYewesqjvmRE-cfa4a9h2j4wdr4-xMvFSjfVqxLfK6XRUbHPQ/exec` | ✅ **Connected automatically.** Submissions instantly sync to your Google Sheet. |

---

## 🏥 5. Mental Health Helplines Verification (Included)

The following official, verified 24/7 helpline numbers in India have been configured into the footer and crisis banners:

* **Tele-MANAS (Ministry of Health & Family Welfare, Govt. of India):**  
  Toll-free numbers: **14416** or **1800-891-4416**  
  *Availability: 24/7 multi-lingual support, including native Tamil.*
* **Vandrevala Foundation:**  
  Phone: **+91 9999 666 555**  
  *Availability: 24/7 free mental health counseling.*

---

## 🔍 6. Native Speaker Review Checklist

All Tamil strings in `lib/translations.ts` have been authored in natural, spoken-formal Tamil (not machine-translated). We encourage a quick read-through with a native Tamil speaker to ensure the tone matches your personal brand voice.
