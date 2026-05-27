# Suman H P — Personal Portfolio

A modern, dark-themed personal portfolio built with **Next.js 14**, **TailwindCSS**, and **Framer Motion**.

## ✨ Features

- Dark minimal design with glassmorphism cards
- Smooth scroll-based animations (Framer Motion)
- Typewriter effect in Hero section
- Sections: Hero, About, Education, Projects, Skills, Certifications, Contact
- Fully responsive (mobile-first)
- SEO metadata + Open Graph tags
- Deploy-ready for Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css       # Tailwind base + custom utilities
│   ├── layout.jsx        # Root layout with SEO metadata
│   └── page.jsx          # Main page (assembles all sections)
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Education.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── SectionHeader.jsx
├── lib/
│   └── data.js           # All portfolio content — edit this file
├── public/               # Static assets (add profile.jpg, og-image.png here)
├── tailwind.config.js
├── next.config.js
└── package.json
```

## ✏️ Customization

All content lives in **`lib/data.js`**. Edit that file to update:
- Personal info, bio, links
- Education records
- Projects (title, description, tech, GitHub link)
- Skills
- Certifications

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — click Deploy

## 📸 Adding Profile Photo

Place your photo at `public/profile.jpg` and update the Hero component to display it.

## 📄 License

MIT
