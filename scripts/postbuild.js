import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, '../dist');
const PUBLIC_DIR = path.join(__dirname, '../public');

// List of all static routes in the application
const routes = [
  '/',
  '/services',
  '/projects',
  '/reviews',
  '/blog',
  '/android',
  '/microsoft',
  '/contact',
  '/quote',
  '/privacy',
  '/terms',
  '/products',
  '/remote',
  '/keywords-hub',
  
  // Blog posts
  '/blog/why-custom-website-2026',
  '/blog/psychology-logo-design',
  '/blog/custom-software-scaling',
  '/blog/roi-responsive-ecommerce',
  '/blog/monolithic-vs-microservices',
  '/blog/ultimate-rebranding-guide',
  '/blog/headless-cms-revolution',
  '/blog/securing-enterprise-web',
  '/blog/power-of-ui-ux-design',
  '/blog/seo-best-practices-2026',
  '/blog/cloud-hosting-vs-on-premise',
  '/blog/ai-in-web-development',

  // Support docs
  '/support/optispace-pc',
  '/support/sniper-kill',
  '/support/de-vibe-oms',
  '/support/bahamut-oms',
];

function prerenderRoutes() {
  console.log('Generating static routing directories...');
  const indexHtmlPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.error(`Error: ${indexHtmlPath} does not exist. Run build first.`);
    process.exit(1);
  }

  // 1. Create individual route index.html files (for 200 OK status on static hosts)
  routes.forEach((route) => {
    if (route === '/') return; // index.html is already at root
    const routeDir = path.join(DIST_DIR, route);
    fs.mkdirSync(routeDir, { recursive: true });
    fs.copyFileSync(indexHtmlPath, path.join(routeDir, 'index.html'));
  });

  // 2. Create 404.html fallback
  fs.copyFileSync(indexHtmlPath, path.join(DIST_DIR, '404.html'));
  console.log('Static routing directories generated successfully.');
}

function generateSitemap() {
  console.log('Generating sitemap.xml...');
  const baseUrl = 'https://www.devibestudio.com';
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  routes.forEach((route) => {
    let priority = '0.5';
    let changefreq = 'monthly';

    if (route === '/') {
      priority = '1.0';
      changefreq = 'weekly';
    } else if (route === '/quote') {
      priority = '0.9';
      changefreq = 'yearly';
    } else if (route === '/contact') {
      priority = '0.8';
      changefreq = 'yearly';
    } else if (['/services', '/projects', '/reviews', '/blog'].includes(route)) {
      priority = '0.8';
      changefreq = 'weekly';
    } else if (['/android', '/microsoft'].includes(route)) {
      priority = '0.7';
      changefreq = 'monthly';
    } else if (route.startsWith('/blog/')) {
      priority = '0.6';
      changefreq = 'monthly';
    } else if (route.startsWith('/support/')) {
      priority = '0.5';
      changefreq = 'monthly';
    } else if (['/privacy', '/terms'].includes(route)) {
      priority = '0.5';
      changefreq = 'yearly';
    }

    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${route === '/' ? '' : route}</loc>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>\n';

  // Write to public folder (so it is checked into git) and dist folder (for immediate deployment)
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml, 'utf8');
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), xml, 'utf8');
  console.log('sitemap.xml generated successfully in public/ and dist/.');
}

// Run tasks
prerenderRoutes();
generateSitemap();
