# DE VIBE STUDIO — PROJECT BRAIN & ARCHITECTURE SPECIFICATION

> **Living Architecture, Product Knowledge Base, and System Documentation for De Vibe Agency & Software Ecosystem.**

---

## 1. Executive Summary & Brand Identity

**De Vibe** ([https://www.devibestudio.com/](https://www.devibestudio.com/)) is a modern digital agency and software engineering firm specializing in:
- High-performance custom web development (React / Vite).
- Enterprise software architectures (OMS, microservices, Zero-Trust portals).
- On-device AI/ML utilities (OptiSpace Mobile, OptimaFix Pro).
- Strategic corporate branding and identity.

---

## 2. Technology Stack

| Layer | Technology / Library | Version / Details |
| :--- | :--- | :--- |
| **Core Framework** | React + Vite | React v19.2.6, Vite v8.0.12 |
| **Routing** | React Router DOM | v7.18.0 (Client-side + Pre-rendered 200 OK routes) |
| **SEO & Head Meta** | React Helmet Async | v3.0.0 |
| **Icons** | Lucide React | v1.21.0 |
| **Form Inputs** | React Phone Number Input | v3.4.17 |
| **Payment Gateway** | Razorpay Checkout SDK | Official JS SDK (`checkout.js` via custom `useRazorpay` hook) |
| **Form Handling** | Web3Forms API | Serverless POST endpoint for Quote & Contact submissions |
| **Analytics & Ads** | Google Analytics 4, GTM, AdSense | GA4 (`G-YXN6F4J067`), GTM (`GT-PBG28VR4`), AdSense (`ca-pub-7107715238624071`) |
| **Build & Deployment** | Node.js Postbuild + GitHub Actions | Static folder generator (`scripts/postbuild.js`), deployed to GitHub Pages |

---

## 3. Product Catalog & Commercial Formats

### 3.1. OptimaFix Pro (Windows Diagnostic & Repair Suite)
- **Repository**: `pc-repair-tool`
- **Installer URL**: `https://github.com/devibe70-ux/pc-repair-tool/releases/latest/download/OptimaFix.msix`
- **GST Compliance**: 18% GST (SAC 997331 - IT Software Product License) | **Seller GSTIN**: `24ASHPS97771ZE`
- **Pricing & Variants (Incl. 18% GST)**:
  1. **Digital Home License** — **₹999.00 INR** (Base: ₹846.61 + 18% GST: ₹152.39)
  2. **Tech Pro License** — **₹3,999.00 INR / year** (Base: ₹3,388.98 + 18% GST: ₹610.02)
  3. **Technician Rescue USB** — **₹5,999.00 INR** (Base: ₹5,083.90 + 18% GST: ₹915.10)


### 3.2. OptiSpace Mobile (Android AI Storage Cleaner)
- **Repository**: `optispace-mobile`
- **Architecture**: Edge Machine Learning (TensorFlow Lite running on device NPU). Scans photo/video libraries for fuzzy duplicates and structural similarity (SSIM) without cloud data upload.
- **Format**: Free / Freemium download.

### 3.3. De-Vibe OMS (Enterprise Order Management System)
- **Repository**: `De-vibe-OMS`
- **Installer URL**: `https://github.com/devibe70-ux/De-vibe-OMS/releases/latest/download/DeVibe-OMS-Installer.msix`
- **Architecture**: Monolithic-hybrid Node.js micro-core with PostgreSQL ACID transaction engine, handling omni-channel inventory flow and ERP webhooks.

### 3.4. Bahamut OMS (High-Frequency Trading Engine)
- **Architecture**: High-frequency fork of De-Vibe OMS using in-memory Redis transactional locking and Raft consensus model for sub-millisecond execution.

---

## 4. Key Integrations & Technical Implementation

### 4.1. Razorpay Payment Gateway
- **Hook**: `src/hooks/useRazorpay.js`
- **UI Modal**: `src/components/PaymentModal.jsx`
- **Flow**:
  1. User selects product format on `/products` or `/microsoft`.
  2. Clicking "Pay via Razorpay" opens the official Razorpay Checkout popup.
  3. On successful payment (`razorpay_payment_id`), the `PaymentModal` opens displaying the transaction ID and automatically initiates the browser software download.
- **Config Key**: `VITE_RAZORPAY_KEY_ID` (env variable with safe test-mode fallback).

### 4.2. Static Route Pre-Rendering (200 OK Statuses for GitHub Pages)
- **Script**: `scripts/postbuild.js`
- **Problem Solved**: GitHub Pages returns a `404` status code for client-side SPA subpages (like `/privacy` or `/blog/xxx`). Google AdSense and Search Crawlers reject sites with 404 responses.
- **Solution**: After Vite compiles `dist/index.html`, `postbuild.js` creates matching directories for all 28 routes and copies `index.html` into them (e.g. `dist/privacy/index.html`). GitHub Pages serves these with a `200 OK` HTTP status code.

### 4.3. Automated Sitemap & SEO Schema
- **Sitemap**: `scripts/postbuild.js` automatically generates a 28-page XML sitemap on every build, saved to `public/sitemap.xml` and `dist/sitemap.xml`.
- **JSON-LD Rich Snippets**:
  - `BlogPosting` on all blog pages (`BlogPost.jsx`).
  - `SoftwareApplication` on Windows (`MicrosoftApps.jsx`) and Android (`AndroidApps.jsx`) pages.
  - `Service` on `Services.jsx`.
  - `TechArticle` & `BreadcrumbList` on `Support.jsx` and `BlogPost.jsx`.

### 4.4. GDPR & AdSense Cookie Consent
- **Component**: `src/components/CookieBanner.jsx`
- **Styling**: `src/App.css` (Glassmorphic dark/light banner).
- **Consent Storage**: `localStorage` (`cookie-consent` key).
- **CLS Prevention**: CSS rules added for `ins.adsbygoogle` elements to reserve layout height and eliminate Cumulative Layout Shift (CLS).

---

## 5. Directory & File Sitemap

```
de-vibe-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment to GitHub Pages
├── public/
│   ├── ads.txt                 # AdSense Publisher verification (pub-7107715238624071)
│   ├── banner.jpg              # High-resolution agency hero banner
│   ├── robots.txt              # Search crawler instructions
│   └── sitemap.xml             # Auto-generated XML sitemap
├── scripts/
│   └── postbuild.js            # Node script for 200 OK route folders & sitemap compilation
├── src/
│   ├── assets/                 # SVGs and images
│   ├── components/
│   │   ├── About.jsx           # Agency about section
│   │   ├── AndroidApps.jsx     # Android ecosystem page
│   │   ├── Blog.jsx            # Insights blog list with monthly auto-shuffling
│   │   ├── BlogPost.jsx        # Individual blog article renderer with JSON-LD
│   │   ├── Contact.jsx         # Contact form (Web3Forms API)
│   │   ├── CookieBanner.jsx    # GDPR cookie consent banner
│   │   ├── Footer.jsx          # 4-column crawler footer links
│   │   ├── GetQuote.jsx        # Multi-step project quote form
│   │   ├── Header.jsx          # Sticky header navigation
│   │   ├── Hero.jsx            # Hero banner section
│   │   ├── Home.jsx            # Main homepage
│   │   ├── MicrosoftApps.jsx   # Windows apps page with Razorpay payment checkout
│   │   ├── PaymentModal.jsx    # Razorpay payment success & download trigger modal
│   │   ├── PrivacyPolicy.jsx   # Legal privacy policy page
│   │   ├── Products.jsx        # Product catalog & 3-format OptimaFix Pro Razorpay selector
│   │   ├── Projects.jsx        # GitHub repos portfolio grid
│   │   ├── Reviews.jsx         # Client testimonials & reviews
│   │   ├── Services.jsx        # Agency service offerings
│   │   ├── Support.jsx         # Product documentation & technical support docs
│   │   └── TermsOfService.jsx  # Legal terms of service page
│   ├── hooks/
│   │   ├── useGitHubRepos.js   # Fetches GitHub user repositories
│   │   └── useRazorpay.js      # Dynamically loads & executes Razorpay Checkout SDK
│   ├── App.css                 # Global component styling & CLS layout rules
│   ├── App.jsx                 # Main React Router switch configuration
│   ├── index.css               # Core CSS variables & dark/light theme tokens
│   └── main.jsx                # Entry point with HelmetProvider
├── .env.example                # Documented env keys (VITE_RAZORPAY_KEY_ID, VITE_WEB3FORMS_KEY)
├── package.json                # Project dependencies & build scripts
├── PROJECT_BRAIN.md            # Living architecture & knowledge base specification
└── vite.config.js              # Vite bundler configuration
```

---

## 6. Development & Build Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle & execute postbuild static folder/sitemap generation
npm run build

# Preview production build locally
npm run preview
```

---

## 7. Future Roadmap & Extensibility Notes

1. **Additional Paid Software**: To add Razorpay checkout to **De-Vibe OMS** or **OptiSpace Mobile Pro**, call `openPaymentModal()` from `useRazorpay.js` with the target price and product description.
2. **Backend Webhook Verification**: For enterprise client deployments requiring server-side cryptographic signature validation (`razorpay_signature`), connect an Express / AWS Lambda endpoint to verify payment webhook payloads against your Razorpay Key Secret.

---
*Maintained by De Vibe Engineering Team ([@DavinciShah](https://github.com/DavinciShah) & [@devibe70-ux](https://github.com/devibe70-ux))*
