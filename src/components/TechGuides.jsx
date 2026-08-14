import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Terminal, HardDrive, Cpu, ShieldCheck, CheckCircle2, ChevronRight, Download, Search, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdSenseSlot from './AdSenseSlot';

export default function TechGuides() {
  const [selectedGuideId, setSelectedGuideId] = useState('bsod-repair');
  const [searchQuery, setSearchQuery] = useState('');

  const guides = [
    {
      id: 'bsod-repair',
      category: 'Windows Diagnostics',
      title: 'How to Fix Windows 11 BSOD Crashes & Corrupted Boot Files',
      readingTime: '5 min read',
      updated: 'August 2026',
      summary: 'Complete technician guide to diagnosing Blue Screen (BSOD) errors, running offline SFC/DISM repairs, and injecting offline registry patches.',
      steps: [
        {
          heading: '1. Boot into Windows RE or WinPE Recovery Environment',
          text: 'If your PC is stuck in an infinite boot loop, insert an OptimaFix Pro WinPE Rescue Boot USB drive or hold Shift + Restart to open Advanced Startup Options.'
        },
        {
          heading: '2. Execute System File Checker (SFC) & DISM Repair Commands',
          text: 'Open the Command Prompt console and run the offline system file scan:\n\nsfc /scannow /offbootdir=C:\\ /offwindir=C:\\Windows\n\ndism /image:C:\\ /cleanup-image /restorehealth'
        },
        {
          heading: '3. Repair Master Boot Record (MBR) & BCD Sector Corruption',
          text: 'Rebuild the Boot Configuration Data (BCD) store to restore missing EFI boot entries:\n\nbootrec /fixmbr\nbootrec /fixboot\nbootrec /rebuildbcd'
        },
        {
          heading: '4. Automated Diagnostics via OptimaFix Pro',
          text: 'To avoid manual command prompt entry, launch OptimaFix Pro for 1-click automated 5-Stage System File & Registry Repair.'
        }
      ]
    },
    {
      id: 'ssd-smart-health',
      category: 'Hardware & Storage',
      title: 'NVMe SSD S.M.A.R.T. Health Telemetry & Bad Sector Guide',
      readingTime: '6 min read',
      updated: 'August 2026',
      summary: 'Learn how to read S.M.A.R.T. attributes, monitor NVMe NAND flash wear percentages, and prevent sudden SSD failure.',
      steps: [
        {
          heading: '1. Understanding Critical S.M.A.R.T. Attributes',
          text: 'Key SSD telemetry metrics to monitor include Media & Data Integrity Errors, Percentage Used (TBW wear level), and Available Spare Capacity.'
        },
        {
          heading: '2. Identifying Reallocated Bad Sectors',
          text: 'When an SSD detects bad blocks, it remaps them to spare NAND flash memory. If your Available Spare drops below 10%, drive failure is imminent.'
        },
        {
          heading: '3. Running Automated Drive Stress Tests',
          text: 'Use OptimaFix Pro hardware diagnostic suite to execute Apple AST-2 style sequential read/write pattern stress tests.'
        }
      ]
    },
    {
      id: 'ram-latency-tuning',
      category: 'Performance Tuning',
      title: 'Tuning Windows 11 RAM Latency & TCP Window Size for Gaming',
      readingTime: '4 min read',
      updated: 'August 2026',
      summary: 'Reduce micro-stuttering, lower memory latency, and optimize Winsock TCP stack settings for maximum FPS.',
      steps: [
        {
          heading: '1. Resetting Winsock & TCP/IP Stack',
          text: 'Clear cached network sockets and reset TCP window scaling via Command Prompt:\n\nnetsh winsock reset\nnetsh int ip reset'
        },
        {
          heading: '2. Disabling Memory Compression Friction',
          text: 'For high-end 32GB/64GB gaming rigs, optimize memory pool allocation to prevent background page compression stuttering.'
        },
        {
          heading: '3. 1-Click Latency Reset in OptimaFix Pro',
          text: 'OptimaFix Pro automatically tunes registry memory thresholds and network packet buffers in a single click.'
        }
      ]
    }
  ];

  const activeGuide = guides.find(g => g.id === selectedGuideId) || guides[0];

  const filteredGuides = guides.filter(g => 
    g.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    g.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>PC Repair & Windows Troubleshooting Guides - De Vibe Studio</title>
        <meta name="description" content="Free technician troubleshooting guides for fixing Windows 11 BSOD crashes, NVMe SSD S.M.A.R.T. diagnostics, and system latency optimization." />
        <link rel="canonical" href="https://www.devibestudio.com/guides" />
      </Helmet>

      <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent)', padding: '0.4rem 1.25rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid var(--glass-border)' }}>
              <BookOpen size={16} /> Knowledge & Diagnostics Hub
            </div>
            <h1 className="gradient-text" style={{ fontSize: '3.2rem', marginBottom: '1rem' }}>
              Windows PC Repair & Optimization Knowledge Hub
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              Step-by-step technician guides for resolving Blue Screen crashes, checking NVMe SSD health, and optimizing Windows 11 performance.
            </p>
          </div>

          {/* Search Bar */}
          <div className="glass-card" style={{ padding: '1.25rem 1.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Search size={20} color="var(--accent)" />
            <input
              type="text"
              placeholder="Search troubleshooting guides (e.g. BSOD, SFC, DISM, SSD SMART, RAM latency)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ flex: 1, backgroundColor: 'transparent', border: 'none', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none', fontFamily: 'inherit' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '2.5rem' }} className="guides-grid">
            
            {/* Sidebar Guide Selector */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Select Troubleshooting Guide:
              </span>

              {filteredGuides.map((guide) => (
                <div
                  key={guide.id}
                  onClick={() => setSelectedGuideId(guide.id)}
                  style={{
                    backgroundColor: guide.id === selectedGuideId ? 'rgba(56, 189, 248, 0.12)' : 'var(--glass-bg)',
                    border: guide.id === selectedGuideId ? '1px solid var(--accent)' : '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase' }}>
                    {guide.category}
                  </span>
                  <h3 style={{ fontSize: '1rem', margin: '0.3rem 0 0.4rem 0', lineHeight: '1.4' }}>
                    {guide.title}
                  </h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {guide.readingTime}
                  </span>
                </div>
              ))}
            </div>

            {/* Main Guide Content Display */}
            <div>
              <div className="glass-card" style={{ padding: '3rem', marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '0.3rem 0.75rem', borderRadius: '12px' }}>
                  {activeGuide.category}
                </span>

                <h2 style={{ fontSize: '2.2rem', margin: '1rem 0 0.5rem 0' }}>{activeGuide.title}</h2>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  Last Updated: {activeGuide.updated} • {activeGuide.readingTime}
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem' }}>
                  {activeGuide.summary}
                </p>

                {/* Steps Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
                  {activeGuide.steps.map((step, idx) => (
                    <div key={idx} style={{ backgroundColor: 'rgba(6, 9, 17, 0.6)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
                      <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.75rem 0', color: 'var(--accent)' }}>
                        {step.heading}
                      </h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0, whiteSpace: 'pre-wrap', fontFamily: step.text.includes('sfc') || step.text.includes('bootrec') ? 'JetBrains Mono, monospace' : 'inherit' }}>
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Automated Software CTA */}
                <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.08)', borderRadius: '14px', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.3rem 0', fontSize: '1.2rem', color: '#10b981' }}>
                      Automate This Process in 1-Click with OptimaFix Pro
                    </h4>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      Includes 5-Stage Automated Repair, S.M.A.R.T. NVMe Diagnostics, and WinPE Bare-Metal Rescue Boot USB.
                    </p>
                  </div>
                  <Link to="/products" className="btn" style={{ padding: '0.8rem 1.75rem', fontSize: '0.95rem' }}>
                    <Download size={16} /> Get OptimaFix Pro (₹999 + GST)
                  </Link>
                </div>

              </div>

              {/* In-Content Google AdSense Slot */}
              <AdSenseSlot style={{ marginTop: '2rem' }} />

            </div>

          </div>

        </div>
      </section>
    </>
  );
}
