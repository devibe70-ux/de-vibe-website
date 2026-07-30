import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AdSenseSlot from './AdSenseSlot';

const blogPosts = [
  {
    id: 'why-custom-website-2026',
    title: 'Why Your Business Needs a Custom Website in 2026',
    date: 'February 15, 2026',
    excerpt: 'In an era of generic templates, a custom-built website is the key to standing out, improving SEO, and driving actual conversions.',
  },
  {
    id: 'psychology-logo-design',
    title: 'The Psychology Behind Memorable Logo Design',
    date: 'March 02, 2026',
    excerpt: 'Your logo is the face of your brand. Discover how shapes, colors, and typography influence consumer perception and trust.',
  },
  {
    id: 'custom-software-scaling',
    title: 'How Custom Software Scales Your Corporate Operations',
    date: 'April 10, 2026',
    excerpt: 'Off-the-shelf software often forces you to change your workflow. Learn how bespoke enterprise software adapts to your business needs.',
  },
  {
    id: 'roi-responsive-ecommerce',
    title: 'The ROI of Responsive Web Design in E-Commerce',
    date: 'May 12, 2026',
    excerpt: 'Discover why mobile-first and responsive design is no longer just a luxury, but the primary driver of conversion rates and revenue.',
  },
  {
    id: 'monolithic-vs-microservices',
    title: 'Why Monolithic Architectures Are Failing Modern Startups',
    date: 'June 05, 2026',
    excerpt: 'A deep dive into why agile startups are migrating from rigid monoliths to scalable, modern microservice and serverless architectures.',
  },
  {
    id: 'ultimate-rebranding-guide',
    title: 'The Ultimate Guide to Rebranding Your Legacy Business',
    date: 'June 22, 2026',
    excerpt: 'Rebranding is risky. Learn the data-driven framework for modernizing your corporate identity without alienating your existing customer base.',
  },
  {
    id: 'headless-cms-revolution',
    title: 'Headless CMS vs Traditional CMS: What You Need to Know',
    date: 'July 01, 2026',
    excerpt: 'WordPress is showing its age. Discover how headless content management systems deliver unparalleled speed and omnichannel flexibility.',
  },
  {
    id: 'securing-enterprise-web',
    title: 'Securing Your Enterprise Web Application Against 2026 Threats',
    date: 'July 08, 2026',
    excerpt: 'From sophisticated AI-driven phishing to zero-day exploits, learn the modern security protocols necessary to protect your digital assets.',
  },
  {
    id: 'power-of-ui-ux-design',
    title: 'The Impact of UI/UX Design on Customer Retention',
    date: 'July 15, 2026',
    excerpt: 'Great design is more than aesthetics. Learn how intuitive UI/UX directly correlates with higher customer retention and lifetime value.',
  },
  {
    id: 'seo-best-practices-2026',
    title: 'SEO Best Practices for Modern Web Applications',
    date: 'July 22, 2026',
    excerpt: 'SEO has evolved significantly. Discover the technical and content strategies required to rank high on Google in 2026.',
  },
  {
    id: 'cloud-hosting-vs-on-premise',
    title: 'Cloud Hosting vs On-Premise: Making the Right Choice',
    date: 'August 05, 2026',
    excerpt: 'Deciding between cloud infrastructure and on-premise servers is a critical business decision. We break down the pros and cons of each approach.',
  },
  {
    id: 'ai-in-web-development',
    title: 'The Role of AI in Modern Web Development',
    date: 'August 12, 2026',
    excerpt: 'Artificial Intelligence is revolutionizing how we build and interact with the web. Explore the future of AI-driven digital experiences.',
  }
];

// Seeded random number generator
const getSeededRandom = (seed) => {
  let value = seed;
  return function() {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  }
};

// Shuffles an array based on a seed
const shuffleArray = (array, seed) => {
  const rng = getSeededRandom(seed);
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export default function Blog() {
  const shuffledPosts = useMemo(() => {
    const date = new Date();
    // Create a seed based on Year and Month (e.g., 202607 for July 2026)
    const seed = date.getFullYear() * 100 + date.getMonth();
    return shuffleArray(blogPosts, seed);
  }, []);

  return (
    <>
      <Helmet>
        <title>Insights & Articles - De Vibe Agency</title>
        <meta name="description" content="Read the latest insights on web development, enterprise software, and branding from the experts at De Vibe." />
        <link rel="canonical" href="https://www.devibestudio.com/blog" />
        <meta property="og:title" content="Insights & Articles - De Vibe Agency" />
        <meta property="og:url" content="https://www.devibestudio.com/blog" />
      </Helmet>
      <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>De Vibe Insights</h2>
        <AdSenseSlot style={{ marginBottom: '2.5rem' }} />
        <div className="grid grid-2 grid-3">
          {shuffledPosts.map(post => (
            <Link to={`/blog/${post.id}`} key={post.id} className="project-card" style={{ display: 'block', textDecoration: 'none' }}>
              <div className="project-header" style={{ marginBottom: '0.5rem' }}>
                <span className="project-title" style={{ fontSize: '1.25rem' }}>{post.title}</span>
              </div>
              <p className="project-desc" style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                {post.date}
              </p>
              <p className="project-desc" style={{ flex: 1, marginBottom: '1.5rem', lineHeight: '1.5' }}>
                {post.excerpt}
              </p>
              <div style={{ color: 'var(--accent)', fontWeight: '500' }}>
                Read Article &rarr;
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
