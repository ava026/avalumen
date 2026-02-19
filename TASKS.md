# avalumen.me — Task List

> Goal: Ship a clean, fast, well-SEO'd personal website for Ava Lumen.
> Built with Next.js App Router. Deployed at avalumen.me.

---

## ✅ Done
- [x] Scaffold Next.js 14 + Tailwind + Geist font
- [x] Dark theme: near-black (#080808), amber accent (#F0A500)
- [x] Components: Nav, Hero, Projects, About, Footer
- [x] Basic metadata in layout.tsx
- [x] Mobile responsive layout
- [x] Pushed to github.com/ava026/avalumen

---

## 🔨 TODO

### 1. SEO Foundation
- [x] `sitemap.xml` — auto-generated via Next.js `app/sitemap.ts`
- [x] `robots.txt` — via `app/robots.ts` (allow all, point to sitemap)
- [x] Canonical URLs on all pages
- [x] `<title>` and `<meta description>` for every route
- [x] Proper `metadataBase` pointing to `https://avalumen.me`

### 2. Open Graph + Social
- [x] OG image: `app/opengraph-image.tsx` (1200×630) — auto-generated via Next.js ImageResponse
  - Design: dark bg, amber "Ava Lumen" wordmark, tagline "I build products that matter."
- [x] Twitter card meta tags (already partially in layout, verify completeness)
- [ ] Test OG preview with opengraph.xyz

### 3. Structured Data (JSON-LD)
- [x] `Person` schema on homepage — name, url, sameAs (Twitter, GitHub)
- [x] `WebSite` schema — name, url
- [x] `SoftwareApplication` schema for each project (Substract AI, Plugin0)

### 4. Performance
- [x] Add `next/font` — already using Geist, verified it's loaded optimally
- [ ] Check `next build` output — ensure pages are statically generated (SSG)
- [ ] Add `<link rel="preconnect">` for external domains in layout
- [ ] Verify no layout shift (CLS) from fonts

### 5. Accessibility
- [x] All images have `alt` text
- [ ] Color contrast passes WCAG AA (amber on black is borderline — check)
- [x] Focus styles visible on interactive elements
- [x] Semantic HTML: `<main>`, `<header>`, `<nav>`, `<section>`, `<footer>` used correctly
- [x] `aria-label` on icon-only links

### 6. Content & Copy
- [x] Hero: punchy 1-liner that explains Ava in 5 words max above the fold
- [x] Projects: each card has a clear value prop (already improved, review once more)
- [x] About: scannable — headers, short paragraphs, no walls of text
- [ ] Add a "Writing" or "Updates" section placeholder (even if empty, shows intent)

### 7. Analytics (lightweight)
- [x] Add Vercel Analytics (`@vercel/analytics`) — 1 line, zero config

### 8. Misc
- [x] `favicon.ico` + `apple-touch-icon.png` — dynamic via `app/icon.tsx` + `app/apple-icon.tsx`
- [ ] `manifest.json` for PWA basics
- [x] 404 page (`app/not-found.tsx`) — on-brand, links back home
- [x] Smooth scroll behavior (already in globals.css, verified)
- [x] Remove unused boilerplate from create-next-app

---

## 🚀 Deploy Checklist (after code tasks)
- [ ] Create Vercel project linked to github.com/ava026/avalumen
- [ ] Add custom domain: avalumen.me
- [ ] Set DNS: CNAME → cname.vercel-dns.com (or A record)
- [ ] Verify HTTPS + www redirect
- [ ] Test Lighthouse score (target: 90+ all categories)
- [ ] Submit sitemap to Google Search Console

---

## Notes
- Keep it fast. No heavy dependencies.
- No analytics that require cookie banners.
- The site should feel like a builder's home — sparse, confident, intentional.
