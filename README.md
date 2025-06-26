# Alpago Properties Homepage – Frontend Developer Test Assignment

This is a **minimum viable clone** of the homepage of [Alpago Properties](https://www.alpagoproperties.com/) built as part of a Frontend Developer Test Assignment. The goal was to recreate the homepage using **Next.js**, **TailwindCSS**, **GSAP**, and **Framer Motion** within a strict **48-hour deadline**.

🌐 **Live Preview**:  
👉 [https://alpago-properties-clone.netlify.app/](https://alpago-properties-clone.netlify.app/)

📂 **GitHub Repository**:  
👉 [https://github.com/engromerbaig/alpago-properties-clone](https://github.com/engromerbaig/alpago-properties-clone)

👤 **My GitHub Profile**:  
👉 [https://github.com/engromerbaig](https://github.com/engromerbaig)

---

## 🚀 Objective

Rebuild the homepage of Alpago Properties with:

- ✨ Pixel-perfect layout
- 📱 Fully responsive design
- 🎞️ Smooth scroll-based animations
- 🧑‍💻 Clean, modular code in Next.js
- ⚙️ Live deployment on Netlify

---

## 🔧 Tech Stack

| Category       | Technology Used |
|----------------|------------------|
| **Framework**  | [Next.js](https://nextjs.org/) v15.3.4 (App Router) |
| **Styling**    | [TailwindCSS](https://tailwindcss.com/) |
| **Icons**      | [React Icons](https://react-icons.github.io/react-icons/) |
| **Animations** | [GSAP](https://greensock.com/gsap/) (scroll-based), [Framer Motion](https://www.framer.com/motion/) |
| **Font**       | [Poppins](https://fonts.google.com/specimen/Poppins) – used instead of Basel Classic (which is a paid font) |
| **Deployment** | [Netlify](https://netlify.com/) |

---

## 📁 Project Structure

```
/components → Reusable UI components
/pages → (Legacy fallback, mostly unused)
/app → App Router directory (Next.js 13+)
/public → Static assets
/constants → Centralized local data (mocked)
/styles → Global styles (Tailwind base)
```

> 💡 **Note**: All content is powered by local JavaScript files under `constants/` (mock data). These will be replaced by real APIs or headless CMS integrations in future versions.

---

## ✅ Features Implemented

- ✅ Fully responsive layout for Desktop, Tablet, and Mobile
- ✅ Pixel-accurate layout and visual structure
- ✅ Scroll and entry animations using GSAP and Framer Motion
- ✅ Modular architecture using reusable components
- ✅ Image optimization with Next.js `<Image />`
- ✅ Netlify-hosted live version

---

## ⚠️ Known Limitations (MVP)

This build was completed in **under 48 hours**, and represents a minimum working version. Known issues include:

- ⚠️ **Responsiveness**: Horizontal scroll section requires refinement on smaller screens
- ⚠️ **Flash of Unstyled Content (FOUC)**: Occurs due to animation and style loading
- ⚠️ **Loader**: Very basic; lacks branding or animation
- ⚠️ **SEO**: Only root-level metadata is provided; no OG tags or full optimization
- ⚠️ **Accessibility**: ARIA roles and focus handling not yet implemented
- ⚠️ **Critical content preloading**: Not yet implemented due to 48-hour constraint; will be added soon for improved LCP and performance

---

## 📤 Deliverables

- ✅ **Live Demo**: [alpago-properties-clone.netlify.app](https://alpago-properties-clone.netlify.app/)
- ✅ **GitHub Codebase**: [github.com/engromerbaig/alpago-properties-clone](https://github.com/engromerbaig/alpago-properties-clone)

---

## 🛠 Local Development Setup

To run this project locally:

### 1. Clone the repository

```bash
git clone https://github.com/engromerbaig/alpago-properties-clone.git
cd alpago-properties-clone
```

### 2. Install dependencies

```bash
npm install
# or
yarn
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

### 4. Open in browser

Visit [http://localhost:3000](http://localhost:3000) to view it locally.

---

## 📆 Timeline

This project was completed within a 48-hour challenge window, focusing on layout accuracy, animation fidelity, and responsive design.

---

## 🔮 Future Improvements

- 🔄 Add dynamic data fetching with real APIs or CMS (Sanity, Contentful, etc.)
- 🧪 Introduce tests using Playwright or React Testing Library
- ⚙️ Enhance SEO with OG tags, structured data, sitemap
- ♿ Improve accessibility and semantic markup
- 🚀 Add critical content preloading, route-level loading indicators, and improved LCP

---

## 🙌 Author

**Muhammad Omer Baig**  
🔗 [omerbaig.dev](https://omerbaig.dev)  
📧 [omerbaigde@gmail.com](mailto:omerbaigde@gmail.com)  
🐙 GitHub: [engromerbaig](https://github.com/engromerbaig)