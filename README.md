# RWan – Portfolio de Rodrigo Martínez ✨

A clean, modern, and responsive portfolio website showcasing the creative work and aesthetic vision of graphic designer Rodrigo Martínez. Built with performance and user experience in mind.

![Project Screenshot](./public/screenshot.png)

*Clean design meets smooth interactions*

## 🎯 About

RWan is a minimalist portfolio designed to highlight Rodrigo's design work through a carefully crafted digital experience. The site combines colorful aesthetics with smooth animations and intuitive navigation, creating an engaging showcase of creativity and professionalism.

**Design Philosophy**: Less is more, but make it memorable.

## ✨ Features

- 🌓 **Light/Dark Mode Toggle** - Seamless theme switching
- 📱 **Mobile-First Design** - Optimized for all screen sizes
- 🎭 **Smooth Animations** - Delightful scroll and page transitions
- 🎨 **Dynamic Sections** - Content that comes alive as you scroll
- ⚡ **Lightning Fast** - Built with Astro for optimal performance
- 🎯 **Clean Architecture** - Structured components and layouts

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **[Astro](https://astro.build/)** | Static site generator for blazing-fast performance |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first CSS framework |
| **[DaisyUI](https://daisyui.com/)** | Beautiful Tailwind component library |
| **[Lenis](https://lenis.studiofreight.com/)** | Smooth scroll experience |
| **[AOS](https://michalsnik.github.io/aos/)** | Animate on scroll library |
| **[Animate.css](https://animate.style/)** | CSS animation utilities |
| **[Astro Icon](https://github.com/natemoo-re/astro-icon)** | Seamless icon integration |
| **[Iconify](https://iconify.design/)** | Material Design Icons |

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/LeivurGargiulo/rwan.git
cd rwan
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

## 📁 Project Structure

```
rwan/
├── public/
│   ├── images/
│   │   ├── projects/           # Project showcase images
│   │   ├── rodrigo.jpg         # Profile photo
│   │   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── About.astro         # About section with profile
│   │   ├── Contact.astro       # Contact form and social links
│   │   ├── Footer.astro        # Site footer
│   │   ├── Header.astro        # Navigation and theme toggle
│   │   ├── Hero.astro          # Landing hero section
│   │   ├── Projects.astro      # Portfolio showcase grid
│   │   └── ThemeIcon.astro     # Theme switcher component
│   ├── layouts/
│   │   └── Layout.astro        # Main page layout
│   ├── pages/
│   │   └── index.astro         # Single-page application
│   └── styles/
│       └── global.css          # Global styles and animations
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md

```

## 🎨 Design System

The portfolio implements a sophisticated single-page design that tells Rodrigo's story through distinct, interconnected sections:

### Layout Architecture
- Single-Page Application: Seamless scroll experience through Hero → About → Projects → Contact
- Component-Based Structure: Modular Astro components for maintainability
- Responsive Grid System: Tailwind-powered layouts that adapt beautifully across devices

### Visual Design Elements
- Hero Section: Bold introduction with animated typography and call-to-action
- About Section: Personal storytelling with profile imagery and skill highlights
- Projects Gallery: Grid-based portfolio showcase with hover interactions
- Contact Integration: Direct communication channels with social media links

### Design Philosophy
- Typography: Hierarchical text system with smooth font scaling
- Color Palette: Carefully balanced themes supporting light/dark mode transitions
- Spacing & Rhythm: Consistent vertical spacing creating natural reading flow
- Interactive Elements: Subtle hover states and scroll-triggered animations
- Performance-First: Optimized images and efficient component loading

## 👥 Credits

**Design**: [Rodrigo Martínez](https://github.com/rodrigo-martinez) - The creative vision and aesthetic direction  
**Development**: [Leivur Gargiulo](https://github.com/leivur-gargiulo) - Technical implementation and optimization

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)


## 🤝 Contributing

While this is a personal portfolio project, feedback and suggestions are always welcome! Feel free to open an issue or reach out directly.

---

**Built with ❤️ using Astro**

[Live Demo](https://rwan-design.netlify.app/) • [Design Process]() • [Developer Portfolio]()
