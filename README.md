# Nagendra Sriram — Personal Portfolio Website

> **World-class, SEO-first, futuristic portfolio** built with React + Tailwind CSS + Framer Motion.
>
> Designed to be a recruiter-magnet — clean, performant, accessible, and ready for production.

---

## 🚀 Project Overview

This repository contains the source for **Nagendra Sriram**’s personal portfolio website. It showcases About Me, Skills, Projects (with GitHub & demo/video links), Experience, Certifications, and Contact — all optimized for SEO, performance, and accessibility.

**Goal:** A modern, responsive portfolio that converts recruiters into interviewers.

---

## ✨ Highlights / Features

* Futuristic, minimal design with glassmorphism and subtle 3D accents
* Dark / Light mode toggle
* Hero with typing animation and clear CTAs (Download Resume, Contact)
* Project cards with **GitHub** and **Video/Demo** buttons (open in new tab)
* SEO-ready: meta tags, Open Graph, JSON-LD schema
* Accessibility-minded HTML (semantic tags, keyboard navigation, ARIA where needed)
* Optimized for Lighthouse score (performance, accessibility, best practices, SEO)
* Contact form with backend-ready placeholder (instructions included)
* Smooth scrolling, sticky header, and Framer Motion micro-interactions

---

## 🧰 Tech Stack

* **React** (Vite or Create React App recommended)
* **Tailwind CSS** for utility-first styling
* **Framer Motion** for animations
* Optional: **React Router** (if multi-page), **Axios / fetch** for API calls

---

## ⚡ Quick Start

> This assumes Node.js (v16+) and npm/yarn installed.

```bash
# 1. Clone the repo
git clone https://github.com/Nagendrasriram/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install
# or
# yarn

# 3. Start dev server
npm run dev
# or
# npm start
```

Open `http://localhost:3000` (or Vite default port) to preview.

---

## 🗂 Project Structure (suggested)

```
/src
  /assets        # images, icons, resume.pdf
  /components    # Button, Navbar, ProjectCard, Footer, ContactForm
  /data          # projects.js, socialLinks.js, skills.js
  /pages         # Home / About / Projects if using router
  /styles        # tailwind.css + global.css
  main.jsx
  App.jsx
```

---

## 🔧 How to Add / Update a Project

Each project is represented by an object in `/src/data/projects.js`. Use this template:

```js
{
  id: 'electricity-billing',
  title: 'Electricity Billing System',
  description: 'Desktop app for managing customer billing using Java, JDBC, and MySQL',
  tech: ['Java', 'JDBC', 'MySQL', 'Swing'],
  github: 'https://github.com/yourusername/electricity-billing',
  demo: 'https://youtu.be/your-demo-link-or-live-demo',
  image: '/assets/projects/electricity.png'
}
```

* `github` (required): repo URL
* `demo` (optional): live demo or YouTube video
* `image`: keep optimized (webp preferred) and include `alt` text

---

## 🧭 SEO Checklist & Examples

**Place these in `index.html` (public) or the head component:**

```html
<!-- Basic meta -->
<title>Nagendra Sriram — Java Full Stack Developer</title>
<meta name="description" content="Nagendra Sriram — Java Full Stack Developer. Building scalable apps, open-source projects, and clean UI experiences.">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Open Graph -->
<meta property="og:title" content="Nagendra Sriram — Java Full Stack Developer">
<meta property="og:description" content="Portfolio of Nagendra Sriram: projects, experience, and contact.">
<meta property="og:image" content="/assets/og-image.png">
<meta property="og:type" content="website">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Nagendra Sriram — Java Full Stack Developer">
<meta name="twitter:description" content="Portfolio of Nagendra Sriram: projects, experience, and contact.">
```

**JSON-LD (schema.org Person + Website) — add inside a `<script type="application/ld+json">`**

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nagendra Sriram",
  "url": "https://your-domain.com",
  "sameAs": [
    "https://github.com/Nagendrasriram",
    "https://www.linkedin.com/in/nagendrasriram103"
  ],
  "jobTitle": "Java Full Stack Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Atoms Digital Solutions"
  }
}
```

**SEO Tips:**

* Use meaningful page titles and meta descriptions unique to each page
* Use `rel="canonical"` for duplicate content avoidance
* Lazy-load images and compress them (use modern formats: WebP/AVIF)
* Add `alt` attributes describing images clearly
* Keep H1 unique per page; use H2/H3 logically
* Serve assets with caching headers when deploying

---

## 📬 Contact Form (Backend placeholder)

**Frontend:** use a fetch/axios POST to `/api/contact` with `{name, email, message}`.

**Example request:**

```js
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
})
```

**Simple Node/Express placeholder:**

```js
// server.js (example)
const express = require('express');
const app = express();
app.use(express.json());
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  // TODO: integrate with email service like SendGrid / Nodemailer
  console.log('Contact form submission', { name, email, message });
  res.json({ ok: true });
});
app.listen(5000);
```

> Replace with your preferred serverless function (Vercel/Netlify) or API gateway when deploying.

---

## 🎯 Performance & Accessibility Notes

* Use `prefetch` and `preconnect` for critical third-party resources
* Avoid heavy client-side libraries where possible; code-split and lazy-load components
* Add keyboard focus states and `aria-label`s for interactive elements
* Run Lighthouse audits and iterate until you reach your target scores

---

## 🎨 Customize (colors, hero text, resume)

* Replace `/src/data/profile.js` values: `name`, `headline`, `bio`, social links, resume path
* Update tailwind config (`tailwind.config.js`) for brand colors and fonts
* Replace hero background / OG image in `/public/assets`

---

## 📦 Deployment (recommended)

**Vercel (fast, React-friendly)**

* Connect your GitHub repo in Vercel, set build command `npm run build`, output `build`/`dist` depending on your setup, and deploy.

**Netlify**

* Add site, set build command `npm run build`, publish directory `build` or `dist`.

**GitHub Pages** (for static builds)

* Use `gh-pages` package or GitHub Actions to deploy `build` folder to `gh-pages` branch.

---

## 🤝 Contributing

Want to help improve the portfolio? Fork, make changes, and open a PR. Keep changes scoped and documented. For new project additions, add the project object in `/src/data/projects.js` and the optimized image in `/src/assets/projects/`.

---

## 📜 License

This project is released under the MIT License. See `LICENSE` for details.

---

## ✉️ Contact

* **Name:** Nagendra Sriram
* **LinkedIn:** `www.linkedin.com/in/nagendrasriram103`
* **GitHub:** `https://github.com/Nagendrasriram`
* **Email:** `your-email@example.com` (replace in project)

---

## Final Notes

This README is designed to be copy-paste ready and serves as a developer handbook for the portfolio repository. Replace placeholders (domain, email, resume link, demo links) with your real values. Ship it, showcase it, and let your portfolio do the recruiting for you.
