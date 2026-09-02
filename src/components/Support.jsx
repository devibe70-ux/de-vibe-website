import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';

const supportDocs = {
  'optispace-pc': {
    title: 'OptiSpace PC (OptiSpec PC) - Support & Documentation',
    ecosystem: '/microsoft',
    content: (
      <>
        <h3>Introduction to OptiSpace PC</h3>
        <p>OptiSpace PC (OptiSpec PC Suite) is a native Windows desktop disk space analyzer and high-performance storage manager. Designed specifically for desktop power users and repair technicians, it visualizes drive usage, purges orphaned installers, and optimizes file allocation tables locally without cloud upload.</p>
        
        <h3>How the Disk Analysis Engine Works</h3>
        <p>OptiSpace PC scans system volume partitions, analyzing directory trees and identifying large orphaned files, dead shortcut structures, and duplicate media files locally on your computer.</p>
        
        <h3>Frequently Asked Questions</h3>
        <p><strong>Q: Does OptiSpace PC require internet connection?</strong><br/>A: No. OptiSpace PC runs 100% locally on your Windows machine, keeping your files completely private.</p>
      </>
    )
  },
  'sniper-kill': {
    title: 'Sniper Kill - Game Support & FAQs',
    ecosystem: '/android',
    content: (
      <>
        <h3>System Requirements and Performance Optimization</h3>
        <p>Sniper Kill is a highly demanding 3D application that relies heavily on advanced physics calculations for realistic ballistics (wind drag, gravity drop, Coriolis effect). To run the game at a stable 60 FPS, we strongly recommend a device equipped with a Snapdragon 8 Gen 1 processor (or equivalent) and at least 6GB of LPDDR5 RAM. If you are experiencing frame drops, navigate to the Settings menu and reduce the 'Volumetric Fog' and 'Shadow Resolution' parameters.</p>
        
        <h3>Understanding the Ballistics Engine</h3>
        <p>Unlike arcade shooters, Sniper Kill utilizes a deterministic physics engine. When taking a shot over 1,000 meters, you must account for environmental variables. The wind indicator at the top of your scope shows both direction and velocity. Use the mil-dots on your reticle to adjust your aim. Note that higher caliber rifles (like the .50 BMG) are less affected by wind drift but have a significantly higher recoil penalty, requiring longer target re-acquisition times.</p>
        
        <h3>Troubleshooting: "Connection to Matchmaking Server Lost"</h3>
        <p>This error typically occurs when transitioning between WiFi and cellular data while the game is attempting to negotiate a UDP handshake with our matchmaking servers. <strong>Solution:</strong> Force-close the application, ensure you are on a stable connection (preferably 5GHz WiFi), and restart the game. If the issue persists, check our official Twitter feed for scheduled server maintenance announcements.</p>
      </>
    )
  },
  'optispace-pc': {
    title: 'OptiSpace PC - Technical Documentation',
    ecosystem: '/microsoft',
    content: (
      <>
        <h3>Core Architecture and NTFS Scanning</h3>
        <p>OptiSpace PC is engineered to deeply integrate with the Windows operating system. It bypasses standard, high-level API calls and interacts directly with the Master File Table (MFT) on NTFS formatted drives. This allows OptiSpace to scan a 2TB hard drive in a fraction of the time it takes traditional software. Furthermore, it analyzes the Windows Registry and the deeply hidden AppData directories to identify orphaned uninstaller packages and massive, forgotten cache files.</p>
        
        <h3>Safe Mode vs. Aggressive Cleaning</h3>
        <p>By default, OptiSpace PC operates in 'Safe Mode'. This means it will only flag files that are absolutely safe to delete (e.g., temporary system files, standard browser caches, and exact cryptographic duplicate user files). If you toggle 'Aggressive Mode' in the settings, the engine will also target deeply nested application logs, old Windows Update rollback files, and hibernation data. <strong>Warning:</strong> Deleting rollback files means you cannot uninstall recent Windows updates. Use Aggressive Mode only if you are critically low on storage.</p>
        
        <h3>Resolving False Positives in Duplicate Detection</h3>
        <p>In rare instances, OptiSpace might flag two necessary program files as duplicates because they share the exact same hash (e.g., two identical DLL files required by two separate, isolated software installations). Deleting one can break the associated software. To prevent this, OptiSpace PC automatically excludes the `C:\Windows` and `C:\Program Files` directories from duplicate scanning. If you have installed software in a custom directory (e.g., `D:\Games`), you must manually add that path to the Exclusion List in the settings menu.</p>
      </>
    )
  },
  'de-vibe-oms': {
    title: 'De-Vibe OMS - Enterprise Integration Guide',
    ecosystem: '/microsoft',
    content: (
      <>
        <h3>Introduction to De-Vibe OMS Architecture</h3>
        <p>The De-Vibe Order Management System (OMS) is a monolithic-hybrid application designed for large-scale enterprise deployments. It acts as the central hub between your consumer-facing frontend (Shopify, Magento, or custom React apps) and your backend enterprise systems (SAP, Oracle ERP, and 3PL warehouse providers). The system is built on a high-concurrency Node.js micro-core, interfacing with a highly clustered PostgreSQL database to guarantee ACID compliance on all financial and inventory transactions.</p>
        
        <h3>Webhooks and Real-Time Event Driven Routing</h3>
        <p>De-Vibe OMS relies heavily on an event-driven architecture. Rather than relying on inefficient polling mechanisms, the system utilizes Webhooks. When an order is placed on your frontend, a JSON payload is immediately POSTed to the OMS ingestion endpoint. The OMS validates the payload, reserves the inventory in the database, and immediately fires a subsequent Webhook to your warehouse management system to begin the fulfillment process. You can configure endpoint URLs and authentication headers in the Developer Dashboard.</p>
        
        <h3>Handling API Rate Limiting</h3>
        <p>To ensure system stability, the standard De-Vibe OMS API limits incoming requests to 5,000 requests per minute per IP address. If this limit is exceeded, the API will return an HTTP 429 Too Many Requests status code. Enterprise clients expecting massive flash-sale traffic should implement exponential backoff algorithms in their frontend clients, or contact their technical account manager to discuss provisioning dedicated, isolated API gateways.</p>
      </>
    )
  },
  'bahamut-oms': {
    title: 'Bahamut OMS - High Frequency Trading Documentation',
    ecosystem: '/microsoft',
    content: (
      <>
        <h3>The Bahamut Difference: In-Memory Processing</h3>
        <p>Bahamut OMS is not a standard order management system; it is a highly specialized fork of the De-Vibe core designed explicitly for extreme-volume, high-frequency environments (such as financial tech, ticket scalping defense, and flash-sale inventory locking). To achieve sub-millisecond latency, Bahamut bypasses standard relational database writes on the critical path. Instead, it relies on a massive Redis cluster for in-memory, synchronous transaction locking, eventually flushing the confirmed data to a cold-storage SQL database asynchronously.</p>
        
        <h3>Deploying the Distributed Consensus Model</h3>
        <p>Because Bahamut OMS operates in highly volatile environments, it utilizes the Raft consensus algorithm to maintain state across its distributed nodes. If the primary master node goes offline due to a hardware failure or network partition, the remaining nodes will immediately hold an election to promote a new master, ensuring zero downtime and zero data loss. System administrators must ensure that an odd number of nodes (minimum 3, recommended 5) are deployed across physically separate availability zones to prevent split-brain scenarios.</p>
        
        <h3>Security and Payload Encryption</h3>
        <p>Due to the sensitive nature of the data processed by Bahamut OMS, standard HTTPS/TLS encryption is considered the baseline, not the ceiling. All internal communication between the microservices within the Bahamut cluster is authenticated using mutual TLS (mTLS). Furthermore, all payloads containing Personally Identifiable Information (PII) or financial data are encrypted at the application layer using AES-256-GCM before being stored in memory or on disk.</p>
      </>
    )
  }
};

export default function Support() {
  const { appId } = useParams();
  const doc = supportDocs[appId];

  if (!doc) {
    return (
      <section className="bg-alt" style={{ minHeight: '60vh', padding: '6rem 0', textAlign: 'center' }}>
        <h2>Documentation Not Found</h2>
        <p>The support page you are looking for does not exist.</p>
      </section>
    );
  }

  const canonicalUrl = `https://www.devibestudio.com/support/${appId}`;
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": doc.title,
    "description": `Official technical documentation and support for ${doc.title}.`,
    "mainEntityOfPage": canonicalUrl,
    "author": { "@type": "Organization", "name": "De Vibe Enterprise Engineering" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.devibestudio.com/" },
      { "@type": "ListItem", "position": 2, "name": "Ecosystem", "item": `https://www.devibestudio.com${doc.ecosystem}` },
      { "@type": "ListItem", "position": 3, "name": doc.title, "item": canonicalUrl }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{doc.title} - De Vibe Documentation</title>
        <meta name="description" content={`Official technical documentation and support for ${doc.title}.`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${doc.title} - De Vibe`} />
        <meta property="og:description" content={`Official technical documentation for ${doc.title}.`} />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(techArticleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      
      <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link> &nbsp;&gt;&nbsp; 
            <Link to={doc.ecosystem} style={{ color: 'var(--text-secondary)' }}>Ecosystem</Link> &nbsp;&gt;&nbsp; 
            <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{doc.title}</span>
          </div>
          
          <h1 style={{ fontSize: '2.5rem', marginBottom: '3rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
            {doc.title}
          </h1>
          
          <div className="support-doc-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-primary)' }}>
            {doc.content}
          </div>
          
          <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'var(--surface)', borderRadius: '8px', border: '1px solid var(--border)', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem' }}>Still need help?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Our enterprise engineering team is available 24/7.</p>
            <Link to="/contact-us" className="btn">Contact Support</Link>
          </div>
        </div>
      </section>
    </>
  );
}
