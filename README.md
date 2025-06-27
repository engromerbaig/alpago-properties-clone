# Alpago Properties Homepage – Frontend Developer Test Assignment

This is a **minimum viable clone** of the homepage of [Alpago Properties](https://www.alpagoproperties.com/), built as part of a Frontend Developer Test Assignment. The goal was to recreate the homepage using **Next.js**, **TailwindCSS**, **GSAP**, and **Framer Motion** within a strict **48-hour deadline**, with additional enhancements implemented post-MVP to improve performance and user experience.

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
- 🎞️ Smooth scroll-based and entry animations
- 🧑‍💻 Clean, modular, and maintainable code in Next.js
- ⚙️ Live deployment on Netlify
- 🚀 Optimized performance with preloading and skeleton loading

---

## 🔧 Tech Stack

| Category       | Technology Used |
|----------------|------------------|
| **Framework**  | [Next.js](https://nextjs.org/) v15.3.4 (App Router) |
| **Styling**    | [TailwindCSS](https://tailwindcss.com/) |
| **Icons**      | [React Icons](https://react-icons.github.io/react-icons/) |
| **Animations** | [GSAP](https://greensock.com/gsap/) (scroll-based), [Framer Motion](https://www.framer.com/motion/) |
| **Font**       | [Poppins](https://fonts.google.com/specimen/Poppins) – used instead of Basel Classic (paid font) |
| **Deployment** | [Netlify](https://netlify.com/) |

---

## 📁 Project Structure

```
/components → Reusable UI components (e.g., Heading, Container, OffcanvasMenu)
/app → App Router directory for Next.js routes and API
/public → Static assets (images, fonts)
/constants → Mock data for initial MVP (replaced with API in post-MVP)
/hooks → Custom hooks (e.g., useFetch for API calls)
/data → API data files (e.g., experienceData.js)
/styles → Global styles (Tailwind base)
```

> 💡 **Note**: Initial MVP used local mock data in `constants/`. Post-MVP, data is fetched dynamically via a Next.js API route (`/api/experience`) for the Experience section, with skeleton loading for improved UX.

---

## ✅ Features Implemented

- ✅ **Responsive Layout**: Fully responsive for Desktop, Tablet, and Mobile
- ✅ **Pixel-Perfect Design**: Accurate replication of the Alpago Properties homepage
- ✅ **Animations**: Scroll-based animations with GSAP and entry animations with Framer Motion
- ✅ **Modular Architecture**: Reusable components for maintainability
- ✅ **Image Optimization**: Next.js `<Image />` component with lazy loading and responsive sizes
- ✅ **API Fetching**: Dynamic data fetching for the Experience section using a custom `useFetch` hook
- ✅ **Skeleton Loading**: Added skeleton UI for the Experience section during data fetching
- ✅ **Hero Loader**: Implemented a branded loader for the hero section to improve perceived performance
- ✅ **FOUC Mitigation**: Improved Flash of Unstyled Content by optimizing style and animation loading
- ✅ **Critical Content Preloading**: Preloaded critical assets (e.g., hero images, fonts) to improve Largest Contentful Paint (LCP)
- ✅ **Netlify Deployment**: Live version hosted on Netlify

---

## 🛠 Post-MVP Enhancements

Since the initial 48-hour MVP, the following improvements were added:

- **Hero Loader**: Added a branded loading animation for the hero section to enhance UX during initial load.
- **API Fetching Mechanism**: Replaced static mock data with a Next.js API route (`/api/experience`) and a custom `useFetch` hook for dynamic data fetching in the Experience section.
- **Skeleton Loading**: Implemented skeleton UI in the Experience section to provide visual feedback during API calls.
- **Improved FOUC**: Optimized style and animation loading to reduce Flash of Unstyled Content, ensuring a smoother initial render.
- **Critical Content Preloading**: Added preloading for critical assets (e.g., hero images, fonts) to improve LCP and overall performance.

---

## ⚠️ Known Limitations

While significant improvements have been made, some areas still require refinement:

- ⚠️ **Horizontal Scroll Section**: Responsiveness for horizontal scroll sections (e.g., Partners) on smaller screens needs further optimization.
- ⚠️ **Accessibility**: ARIA roles, focus management, and keyboard navigation are not fully implemented.
- ⚠️ **SEO**: Limited to root-level metadata; lacks Open Graph (OG) tags and structured data.
- ⚠️ **Animation Polish**: Some animations (e.g., off-canvas menu) may show minor visual glitches on certain browsers due to rendering complexities.

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

Visit [http://localhost:3000](http://localhost:3000) to view the project locally.

---

## 📆 Timeline

- **Initial MVP**: Completed within a 48-hour challenge window, focusing on layout accuracy, animation fidelity, and responsive design.
- **Post-MVP Enhancements**: Added hero loader, API fetching for the Experience section, skeleton loading, FOUC mitigation, and critical content preloading to improve performance and UX.

---

## 🔮 Future Improvements

- 🔄 **Dynamic Data**: Integrate with a headless CMS (e.g., Sanity, Contentful) for all sections.
- 🧪 **Testing**: Add end-to-end tests using Playwright or unit tests with React Testing Library.
- ⚙️ **SEO**: Implement OG tags, structured data, and a sitemap for better search visibility.
- ♿ **Accessibility**: Add ARIA roles, improve focus management, and ensure keyboard navigation.
- 🚀 **Performance**: Further optimize animations and add route-level loading indicators.

---

## 🙌 Author

**Muhammad Omer Baig**  
🔗 [omerbaig.dev](https://omerbaig.dev)  
📧 [omerbaigde@gmail.com](mailto:omerbaigde@gmail.com)  
🐙 GitHub: [engromerbaig](https://github.com/engromerbaig)