import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Monitor, Cpu, HardDrive, Wifi, ShieldCheck, Zap, RefreshCw, Lock, Terminal, Activity } from 'lucide-react';

export default function RemoteDashboard() {
  const [targetIp, setTargetIp] = useState('http://localhost:8765');
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');
  const [statusMsg, setStatusMsg] = useState('');
  const [systemInfo, setSystemInfo] = useState(null);
  const [telemetry, setTelemetry] = useState({
    cpuTemp: 42,
    gpuTemp: 45,
    diskHealth: 'GOOD',
    osVersion: 'Detecting...',
    wizardState: 'IDLE'
  });

  const handleAuthenticate = async () => {
    try {
      setStatusMsg('Authenticating with OptimaFix Pro Agent...');
      const res = await fetch(`${targetIp}/api/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin })
      });
      const data = await res.json();
      if (data.success) {
        setToken(data.token);
        setIsAuthenticated(true);
        setStatusMsg('Connected successfully!');
        fetchSystemInfo();
      } else {
        alert(data.error || 'Authentication Failed! Check PIN.');
        setStatusMsg('Authentication Failed.');
      }
    } catch (e) {
      alert(`Could not connect to OptimaFix Pro at ${targetIp}. Ensure desktop app is running and port 8765 is reachable.`);
      setStatusMsg('Connection Error.');
    }
  };

  const fetchSystemInfo = async () => {
    try {
      const res = await fetch(`${targetIp}/api/info`);
      const data = await res.json();
      setSystemInfo(data);
    } catch (e) {}
  };

  const triggerRemoteAction = async (actionName) => {
    try {
      setStatusMsg(`Sending command '${actionName}' to remote PC...`);
      const res = await fetch(`${targetIp}/api/action`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: actionName, token })
      });
      const data = await res.json();
      if (data.success) {
        setStatusMsg(`Command '${actionName}' executed successfully on target PC!`);
      } else {
        setStatusMsg(`Command failed: ${data.error}`);
      }
    } catch (e) {
      setStatusMsg(`Network error executing command.`);
    }
  };

  useEffect(() => {
    let interval = null;
    if (isAuthenticated) {
      interval = setInterval(async () => {
        try {
          const res = await fetch(`${targetIp}/api/telemetry`);
          const data = await res.json();
          setTelemetry(data);
        } catch (e) {}
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAuthenticated, targetIp]);

  return (
    <>
      <Helmet>
        <title>Web Remote Repair Portal - OptimaFix Pro | De Vibe Studio</title>
        <meta name="description" content="Connect to OptimaFix Pro desktop app remotely over web browser to trigger diagnostics, repair wizards, and network tweaks." />
      </Helmet>

      <section className="bg-alt" style={{ minHeight: '85vh', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.8rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <Monitor size={36} color="var(--accent)" /> Web Remote Repair Portal
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem' }}>
              Test, diagnose, and repair target Windows PCs remotely over local network or web connection.
            </p>
          </div>

          {!isAuthenticated ? (
            /* PIN AUTHENTICATION CARD */
            <div style={{ 
              backgroundColor: 'var(--bg-primary)', 
              padding: '3rem', 
              borderRadius: '16px', 
              border: '1px solid var(--border)', 
              maxWidth: '500px', 
              margin: '0 auto',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
                <Lock size={24} color="var(--accent)" />
                <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Pair Target PC Agent</h3>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: '600' }}>Target PC IP Address & Port:</label>
                <input 
                  type="text" 
                  value={targetIp} 
                  onChange={(e) => setTargetIp(e.target.value)} 
                  placeholder="http://localhost:8765 or http://192.168.1.50:8765"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: '600' }}>6-Digit Session PIN (From App Screen):</label>
                <input 
                  type="text" 
                  value={pin} 
                  onChange={(e) => setPin(e.target.value)} 
                  placeholder="e.g. OPT-849201"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--accent)',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    textAlign: 'center',
                    boxSizing: 'border-box',
                    letterSpacing: '2px'
                  }}
                />
              </div>

              <button 
                onClick={handleAuthenticate}
                className="btn" 
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.85rem' }}
              >
                <Wifi size={20} /> Establish Web Remote Session
              </button>

              {statusMsg && (
                <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem', color: 'var(--accent)', fontWeight: '600' }}>{statusMsg}</p>
              )}
            </div>
          ) : (
            /* ACTIVE REMOTE CONTROL DASHBOARD */
            <div>
              {/* Target Computer Overview Bar */}
              <div style={{
                backgroundColor: 'var(--bg-primary)',
                padding: '1.5rem 2rem',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: '700', textTransform: 'uppercase' }}>● ACTIVE SESSION CONNECTED</span>
                  <h3 style={{ margin: '0.25rem 0 0 0', fontSize: '1.5rem' }}>{systemInfo?.hostname || 'Remote PC'}</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    OS: {systemInfo?.platform} {systemInfo?.release} {systemInfo?.isLegacyXP ? '(Legacy XP Fallback Active)' : ''}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button onClick={fetchSystemInfo} className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                    <RefreshCw size={16} /> Sync Telemetry
                  </button>
                  <button onClick={() => setIsAuthenticated(false)} className="btn" style={{ backgroundColor: '#dc2626', color: '#fff', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                    Disconnect
                  </button>
                </div>
              </div>

              {/* Telemetry Dials */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ backgroundColor: 'var(--surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)', textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    <Cpu size={20} color="var(--accent)" /> CPU Thermal
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#10b981' }}>{telemetry.cpuTemp || 42}°C</div>
                </div>

                <div style={{ backgroundColor: 'var(--surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)', textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    <HardDrive size={20} color="var(--accent)" /> SMART Disk Status
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#10b981' }}>{telemetry.diskHealth || 'GOOD'}</div>
                </div>

                <div style={{ backgroundColor: 'var(--surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)', textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    <Activity size={20} color="var(--accent)" /> Repair Queue State
                  </div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--accent)', marginTop: '0.5rem' }}>{telemetry.wizardState || 'IDLE'}</div>
                </div>
              </div>

              {/* Remote Repair Control Actions */}
              <div style={{ backgroundColor: 'var(--bg-primary)', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--border)' }}>
                <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.6rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Zap size={24} color="var(--accent)" /> Execute Remote Repair & Tweaks Commands
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                  <div style={{ backgroundColor: 'var(--surface)', padding: '1.5rem', borderRadius: '10px', border: '1px solid var(--border)' }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>5-Stage Sequential Repair Wizard</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                      Triggers full automated sfc/dism file repair, shortcut purge, DNS flush, and telemetry tweaks on target PC.
                    </p>
                    <button 
                      onClick={() => triggerRemoteAction('start_wizard')} 
                      className="btn" 
                      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                    >
                      <Zap size={18} /> Trigger Remote 5-Stage Repair
                    </button>
                  </div>

                  <div style={{ backgroundColor: 'var(--surface)', padding: '1.5rem', borderRadius: '10px', border: '1px solid var(--border)' }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>Flush DNS & Network Reset</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                      Clears local DNS cache, resets Winsock catalog, and optimizes target PC network adapter routing.
                    </p>
                    <button 
                      onClick={() => triggerRemoteAction('flush_dns')} 
                      className="btn btn-outline" 
                      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                    >
                      <Wifi size={18} /> Execute Remote DNS Flush
                    </button>
                  </div>

                  <div style={{ backgroundColor: 'var(--surface)', padding: '1.5rem', borderRadius: '10px', border: '1px solid var(--border)' }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>Purge Temp Junk Files</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                      Deeply scans and purges Windows temp caches, log dumps, and orphaned uninstaller data remotely.
                    </p>
                    <button 
                      onClick={() => triggerRemoteAction('clean_junk')} 
                      className="btn btn-outline" 
                      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                    >
                      <Terminal size={18} /> Purge Junk Storage
                    </button>
                  </div>
                </div>

                {statusMsg && (
                  <div style={{ marginTop: '2rem', padding: '1rem', borderRadius: '8px', backgroundColor: 'rgba(59, 130, 246, 0.08)', border: '1px solid var(--accent)', color: 'var(--accent)', fontWeight: '600', textAlign: 'center' }}>
                    {statusMsg}
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
