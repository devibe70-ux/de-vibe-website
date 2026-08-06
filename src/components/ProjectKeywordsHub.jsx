import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Database, Cpu, HardDrive, ShieldCheck, Zap, Terminal, Layers, FileCode, CheckCircle, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectKeywordsHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const keywordsData = [
    {
      project: 'OptimaFix Pro',
      category: 'Windows Diagnostics & Repair Suite',
      icon: Cpu,
      badge: 'PC Repair Engine',
      link: '/products',
      keywords: [
        { term: '5-Stage Automated Repair Wizard', desc: 'Sequential system file verification, SFC/DISM execution, and junk purging in under 30 seconds.' },
        { term: 'Apple AST-2 Style Stress Test', desc: 'Deep component stress testing for CPU, GPU, RAM bus integrity, and NVMe read/write wear levels.' },
        { term: 'Bare-Metal WinPE Boot Rescue Console', desc: 'Zero-click offline Windows PE recovery environment for unbootable PCs and Blue Screen (BSOD) crashes.' },
        { term: 'Offline Registry Hive Injector', desc: 'Injects system configuration patches and repairs BCD boot sector corruption without booting OS.' },
        { term: 'S.M.A.R.T. NVMe & SSD Wear Analysis', desc: 'Reads low-level SMART telemetry to predict drive failure and monitor bad sector reallocation.' },
        { term: 'DNS & TCP Latency Optimizer', desc: 'Flushes DNS cache, resets Winsock catalog, and tunes TCP window size for gaming and network latency.' },
        { term: 'Branded Client PDF Invoicing', desc: 'Generates professional diagnostic reports with custom shop logo and line-item repairs.' },
        { term: 'Windows 11 24H2 Kernel Compatibility', desc: 'Fully verified for modern x64 and ARM64 Windows architectures.' }
      ]
    },
    {
      project: 'OptiSpace PC & Mobile',
      category: 'On-Device NPU & Disk Analyzer',
      icon: HardDrive,
      badge: 'Edge ML Utility',
      link: '/products',
      keywords: [
        { term: 'TensorFlow Lite On-Device Edge NPU', desc: 'Local neural network execution for instant photo similarity analysis without cloud data upload.' },
        { term: 'SSIM Structural Similarity Duplicate Finder', desc: 'Perceptual hashing algorithm that identifies duplicate photos, burst shots, and blurred images.' },
        { term: 'Color-Coded Disk Volume Treemap', desc: 'Interactive visual breakdown of disk space utilization across C: and D: partitions.' },
        { term: 'Zero-Cloud Data Privacy Guarantee', desc: '100% offline file processing — zero telemetry or media file uploads to external servers.' },
        { term: 'Automated Orphaned File Purger', desc: 'Safely removes residual installation temp files, cache stores, and dead application shortcuts.' }
      ]
    },
    {
      project: 'De-Vibe OMS & Bahamut OMS',
      category: 'Enterprise Order & Inventory Engine',
      icon: Database,
      badge: 'High-Frequency ERP',
      link: '/support/de-vibe-oms',
      keywords: [
        { term: 'Omni-Channel Real-time Inventory Sync', desc: 'Centralized inventory matrix connecting web stores, marketplaces, and physical retail POS.' },
        { term: 'PostgreSQL ACID Transactional Engine', desc: 'Strict transactional locking guarantees zero overselling during flash sales and peak volume.' },
        { term: 'Redis In-Memory High-Frequency Lock', desc: 'Sub-millisecond inventory execution for high-demand enterprise e-commerce portals.' },
        { term: 'Raft Consensus Synchronization Model', desc: 'Distributed cluster consensus ensuring high availability and fault-tolerant node failover.' },
        { term: 'Automated 18% GST Tax Invoicing', desc: 'SAC Code 997331 compliant tax invoices generated automatically upon purchase (GSTIN: 24ASHPS97771ZE).' }
      ]
    },
    {
      project: 'De Vibe Digital Agency',
      category: 'Web Engineering & Branding',
      icon: Layers,
      badge: 'Agency Ecosystem',
      link: '/services',
      keywords: [
        { term: 'React 19 & Vite 8 High-Speed Architecture', desc: 'Modern SPA framework delivering sub-second page loads and zero Cumulative Layout Shift (CLS).' },
        { term: 'Full-Stack AEO (Answer Engine Optimization)', desc: 'Schema.org rich snippet markup tailored for AI search bots (ChatGPT, Perplexity, Gemini, Claude).' },
        { term: 'Logo Design & Brand Psychology Framework', desc: 'Data-driven visual identity design leveraging shape, color, and typography psychology.' },
        { term: 'Static 200 OK Pre-rendering Engine', desc: 'Node.js postbuild route generator ensuring 100% crawlability for Google AdSense and Search Bots.' }
      ]
    }
  ];

  const filteredData = keywordsData.map(group => {
    const matchingKeywords = group.keywords.filter(item => 
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.project.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...group, keywords: matchingKeywords };
  }).filter(group => group.keywords.length > 0 && (activeCategory === 'all' || group.project.toLowerCase().includes(activeCategory)));

  return (
    <>
      <Helmet>
        <title>Software Ecosystem & Technical Keyword Hub - De Vibe Studio</title>
        <meta name="description" content="Explore the comprehensive technical keyword and feature index for OptimaFix Pro, OptiSpace PC, De-Vibe OMS, and Bahamut OMS." />
        <link rel="canonical" href="https://www.devibestudio.com/keywords-hub" />
      </Helmet>

      <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent)', padding: '0.4rem 1.25rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid var(--glass-border)' }}>
              <Sparkles size={16} /> Complete Product & Tech Index
            </div>
            <h1 className="gradient-text" style={{ fontSize: '3.2rem', marginBottom: '1rem' }}>
              Software Ecosystem & Technical Keyword Hub
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              Search and explore every feature, algorithm, hardware diagnostic spec, and architecture component across all De Vibe Studio projects.
            </p>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '3.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ position: 'relative', width: '100%' }}>
              <Search size={20} color="var(--accent)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search keywords, diagnostic algorithms, hardware specs (e.g. S.M.A.R.T., WinPE, AST-2, NPU, OMS)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1rem 1rem 1rem 3rem',
                  backgroundColor: 'rgba(6, 9, 17, 0.7)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '10px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            {/* Category Filter Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600', marginRight: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Filter size={14} /> Filter Project:
              </span>
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'optimafix', label: 'OptimaFix Pro' },
                { id: 'optispace', label: 'OptiSpace PC' },
                { id: 'oms', label: 'De-Vibe OMS' },
                { id: 'agency', label: 'Agency Services' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    backgroundColor: activeCategory === cat.id ? 'var(--accent)' : 'rgba(255, 255, 255, 0.05)',
                    color: activeCategory === cat.id ? '#fff' : 'var(--text-secondary)',
                    border: '1px solid var(--border)',
                    padding: '0.45rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Keywords Display Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {filteredData.map((group, idx) => {
              const GroupIcon = group.icon;
              return (
                <div key={idx} className="glass-card" style={{ padding: '2.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(56, 189, 248, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                        <GroupIcon size={26} />
                      </div>
                      <div>
                        <h2 style={{ fontSize: '1.8rem', margin: 0 }}>{group.project}</h2>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{group.category}</span>
                      </div>
                    </div>

                    <Link to={group.link} className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '0.5rem 1.25rem' }}>
                      Explore Project <ExternalLink size={14} />
                    </Link>
                  </div>

                  {/* Keywords Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {group.keywords.map((kw, kIdx) => (
                      <div 
                        key={kIdx} 
                        style={{ 
                          backgroundColor: 'rgba(6, 9, 17, 0.5)', 
                          padding: '1.25rem', 
                          borderRadius: '12px', 
                          border: '1px solid var(--border)',
                          display: 'flex',
                          flexDirection: 'column'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <CheckCircle size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <h3 style={{ fontSize: '1.05rem', margin: 0, color: 'var(--accent)' }}>{kw.term}</h3>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, lineHeight: '1.5', flex: 1 }}>
                          {kw.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
