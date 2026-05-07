import { Phone } from 'lucide-react';

export default function ProfilePage() {

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      {/* Profile Header */}
      <header className="profile-header" style={{ padding: '20px 20px 0', paddingTop: 'calc(20px + env(safe-area-inset-top, 0px))', overflow: 'hidden' }}>
        <div className="avatar-ring" style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <div className="avatar-illustration" style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(68,124,137,.05)', border: '2px solid #447c89', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              {/* Hat */}
              <ellipse cx="26" cy="14" rx="16" ry="4" fill="rgba(195,168,91,.3)" stroke="#c3a85b" strokeWidth="1"/>
              <path d="M16 14 C16 6, 36 6, 36 14" fill="rgba(195,168,91,.2)" stroke="#c3a85b" strokeWidth="1"/>
              {/* Head */}
              <circle cx="26" cy="22" r="8" fill="rgba(68,124,137,.08)" stroke="#447c89" strokeWidth="1.5"/>
              {/* Eyes */}
              <circle cx="23" cy="21" r="1.2" fill="#447c89"/>
              <circle cx="29" cy="21" r="1.2" fill="#447c89"/>
              {/* Smile */}
              <path d="M23 25 Q26 28 29 25" stroke="#447c89" strokeWidth="1" fill="none" strokeLinecap="round"/>
              {/* Body */}
              <path d="M14 46 C14 36, 20 31, 26 31 C32 31, 38 36, 38 46" fill="rgba(68,124,137,.06)" stroke="#447c89" strokeWidth="1.5"/>
              {/* Backpack straps */}
              <line x1="22" y1="31" x2="20" y2="40" stroke="#c3a85b" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="30" y1="31" x2="32" y2="40" stroke="#c3a85b" strokeWidth="1.2" strokeLinecap="round"/>
              {/* Camera */}
              <rect x="23" y="34" width="6" height="4" rx="1" fill="rgba(195,168,91,.2)" stroke="#c3a85b" strokeWidth=".8"/>
              <circle cx="26" cy="36" r="1" fill="#c3a85b"/>
            </svg>
          </div>
        </div>
        <h1 className="profile-name" style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '28px', letterSpacing: '.04em', color: 'var(--text)', textAlign: 'center', marginBottom: '4px' }}>Traveler</h1>
        <p className="profile-sub" style={{ color: 'var(--text-sec)', fontSize: '14px', textAlign: 'center', marginBottom: '16px' }}>Sustainable Explorer · Since 2026</p>
        <div className="profile-progress" style={{ marginBottom: '20px' }}>
          <div className="progress-label" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-sec)', marginBottom: '8px' }}>
            <span>Profile Completion</span>
            <span className="progress-pct">65%</span>
          </div>
          <div className="progress-bar" style={{ width: '100%', height: '6px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
            <div className="progress-fill" style={{ width: '65%', height: '100%', background: 'var(--accent)', borderRadius: '3px' }}></div>
          </div>
        </div>
      </header>

      {/* Profile Stats */}
      <div className="profile-stats" style={{ display: 'flex', justifyContent: 'space-around', padding: '16px 20px', background: 'var(--surface)', margin: '0 20px', borderRadius: '16px', marginBottom: '20px' }}>
        <div className="stat-item" style={{ textAlign: 'center' }}>
          <span className="stat-value" style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--text)', display: 'block' }}>3</span>
          <span className="stat-label" style={{ fontSize: '12px', color: 'var(--text-sec)' }}>Routes</span>
        </div>
        <div className="stat-item" style={{ textAlign: 'center' }}>
          <span className="stat-value" style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--text)', display: 'block' }}>12</span>
          <span className="stat-label" style={{ fontSize: '12px', color: 'var(--text-sec)' }}>Days</span>
        </div>
        <div className="stat-item" style={{ textAlign: 'center' }}>
          <span className="stat-value" style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--text)', display: 'block' }}>2</span>
          <span className="stat-label" style={{ fontSize: '12px', color: 'var(--text-sec)' }}>Guides</span>
        </div>
      </div>

      {/* SOS Section */}
      <section className="profile-section sos-section" style={{ padding: '0 20px 20px' }}>
        <button className="sos-button" style={{ width: '100%', background: 'var(--red)', color: 'white', border: 'none', borderRadius: '16px', padding: '16px', fontSize: '16px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}>
          <Phone size={22} />
          505 SOS Assistance
        </button>
        <p className="sos-desc" style={{ fontSize: '14px', color: 'var(--text-sec)', textAlign: 'center', marginTop: '8px' }}>Emergency help for tourists — connects you to local authorities and your embassy.</p>
      </section>

      {/* Settings Section */}
      <section className="profile-section settings-section" style={{ padding: '0 20px 40px' }}>
        <div className="exp-section-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div className="exp-section-icon" style={{ fontSize: '20px' }}>⚙️</div>
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text)', margin: 0 }}>Settings</h2>
            <p style={{ fontSize: '14px', color: 'var(--text-sec)', margin: 0 }}>App preferences & sustainability options</p>
          </div>
        </div>
        <div className="settings-list" style={{ background: 'var(--surface)', borderRadius: '16px', overflow: 'hidden' }}>
          <div className="settings-item" style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
            <span style={{ color: 'var(--text-body)' }}>Language</span>
            <span className="settings-value" style={{ color: 'var(--text-sec)' }}>English</span>
          </div>
          <div className="settings-item" style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
            <span style={{ color: 'var(--text-body)' }}>Notifications</span>
            <span className="settings-value" style={{ color: 'var(--text-sec)' }}>On</span>
          </div>
          <div className="settings-item" style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 20px' }}>
            <span style={{ color: 'var(--text-body)' }}>Carbon Offset</span>
            <span className="settings-value eco-badge" style={{ color: 'var(--green)', fontWeight: 'bold' }}>Active ♻️</span>
          </div>
        </div>
      </section>
    </div>
  );
}