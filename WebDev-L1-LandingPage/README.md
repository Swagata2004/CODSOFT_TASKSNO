# Apexora Landing Page

## 1. Project Overview

**Apexora** is a premium business landing page built with **HTML5** and **CSS3 only**.  
It is designed for modern brands that want a clean, elegant, corporate, and luxury-style web presence without relying on JavaScript.

The layout uses:
- A sticky navigation bar
- A full-screen hero section
- Multiple content sections
- A polished footer with contact and social placeholders
- A reusable design system based on CSS variables

## 2. Key Highlights

- Modern premium visual style
- Glassmorphism-inspired cards with soft shadows
- Responsive layout for desktop, tablet, and mobile
- Accessible semantic structure
- SEO-friendly meta tags and heading hierarchy
- Smooth hover and entrance animations using CSS only
- No JavaScript dependency
- Easy to reuse for other pages and future sections

## 3. Design System

This project follows a consistent visual system across the page:

- **Primary color:** `#2563EB`
- **Secondary color:** `#3B82F6`
- **Accent color:** `#06B6D4`
- **Background:** `#F8FAFC`
- **Dark color:** `#0F172A`
- **Card style:** glass-like surfaces with blur and soft borders
- **Radius:** rounded corners between `16px` and `24px`
- **Typography:** `Poppins` for headings and `Inter` for body text

The styling is controlled through CSS variables in `styles.css`, making the design easy to update and scale.

## 4. Page Sections

The landing page is organized in this order:

1. Sticky Navigation
2. Hero Section
3. Trusted By / Logo Strip
4. Features
5. About
6. Services
7. Process
8. Portfolio
9. Testimonials
10. Pricing
11. Blog
12. FAQ
13. Careers / CTA Section
14. Footer

## 5. Features Implemented

The project already includes the following checklist items:

- Fixed or sticky navigation bar with multiple links
- Hero section with headline, subheadline, and CTA buttons
- Multiple content sections
- Footer with placeholder contact and social links
- Consistent color palette across all sections
- Responsive layout using CSS Grid and Flexbox
- Intentional spacing and box sizing to prevent overlap
- Readable typography with clear heading/body contrast

## 6. File Structure

```text
Landing page/
├── index.html
├── styles.css
└── README.md
```

## 7. How to Run Locally

Because this project is static, you can open it in any browser directly.

### Option 1: Open the file
1. Open the project folder
2. Double-click `index.html`
3. The page will load in your browser

### Option 2: Use a local server
If you want a more reliable preview, run a simple local server:

- **VS Code Live Server**
- **Python HTTP server**
- **Any static hosting preview**

Example using Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## 8. Customization Guide

You can safely edit the following areas:

- **Brand name:** update `Apexora` in `index.html`
- **Colors:** change CSS variables in `:root` inside `styles.css`
- **Fonts:** replace the Google Fonts link in the `<head>`
- **Navigation links:** add, remove, or rename section anchors
- **Hero content:** edit the headline, subtitle, and buttons
- **Footer links:** replace placeholder contact/social URLs with real ones

## 9. Responsive Behavior

The layout is optimized for:

- Desktop
- Laptop
- Tablet
- Mobile
- Small mobile screens

The design uses responsive grids, flexible containers, and media queries to prevent horizontal scrolling and preserve spacing.

## 10. Accessibility

The page includes:

- Semantic HTML5 sections
- Skip link for keyboard users
- Strong contrast and readable text
- Focus-visible states
- ARIA labels where appropriate
- Accessible details/summary components for FAQ and mobile navigation

## 11. Performance Notes

This landing page is lightweight and performance-friendly:

- No JavaScript files
- No framework dependency
- CSS-only interactions
- Minimal external resources
- Responsive and reusable layout rules

## 12. Deployment

You can deploy this project to any static hosting platform, such as:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any standard web host

Upload `index.html` and `styles.css`, then set `index.html` as the main entry file.

## 13. Browser Support

This project is designed to work well in modern browsers, including:

- Chrome
- Edge
- Firefox
- Safari

## 14. Notes

- The page is intentionally built without JavaScript.
- The design system is reusable for future pages like About, Services, Portfolio, Blog, Pricing, Contact, and Careers.
- The visual direction is modern, professional, and premium while staying clean and accessible.

## 15. License

You can add your own license here depending on how you plan to distribute the project.

## 16. Author

Created for a premium business landing page workflow with a reusable and scalable design system.

