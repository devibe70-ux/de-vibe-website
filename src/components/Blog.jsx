import { Link } from 'react-router-dom';

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
  }
];

export default function Blog() {
  return (
    <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>De Vibe Insights</h2>
        <div className="grid grid-2 grid-3">
          {blogPosts.map(post => (
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
  );
}
