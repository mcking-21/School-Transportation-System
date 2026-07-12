import { useState, useRef } from 'react';
import './AccountSettings.css';

/* ─── Icons ──────────────────────────────────────────────── */
const GridIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
  </svg>
);
const DashboardIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/>
    <rect x="3" y="16" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/>
  </svg>
);
const MapIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
    <line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/>
  </svg>
);
const BusIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="14" rx="2"/>
    <path d="M2 9h20"/><path d="M2 14h20"/>
    <path d="M6 18v2M18 18v2"/>
    <circle cx="6" cy="19" r="1" fill="currentColor" stroke="none"/>
    <circle cx="18" cy="19" r="1" fill="currentColor" stroke="none"/>
  </svg>
);
const DriverIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <circle cx="12" cy="10" r="3"/>
    <path d="M6.168 18.849A4 4 0 0 1 10 17h4a4 4 0 0 1 3.834 2.855"/>
  </svg>
);
const SettingsIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);
const LogoutIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);
const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);
const PersonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>
);
const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.4 2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const BuildingIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="1"/>
    <path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>
  </svg>
);
const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const CheckCircleIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
  </svg>
);
const TruckIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="1"/>
    <path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);
const ShieldCheckIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
  </svg>
);
const CameraIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);

/* ─── Sidebar nav ────────────────────────────────────────── */
const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard',          icon: <DashboardIcon /> },
  { id: 'livemap',   label: 'Live Map',            icon: <MapIcon /> },
  { id: 'register',  label: 'Register a Vehicle',  icon: <BusIcon /> },
  { id: 'driver',    label: "Driver's View",       icon: <DriverIcon /> },
];

/* ─── Component ─────────────────────────────────────────── */
export default function AccountSettings() {
  const [activeNav, setActiveNav] = useState('settings');
  const fileRef = useRef(null);

  const [profile, setProfile] = useState({
    fullName:     'John Cena',
    email:        'j.cena@fleetops.com',
    phone:        '+1 (555) 123 4567',
    organization: 'Global Logistics Solutions Inc.',
  });

  const [security, setSecurity] = useState({
    currentPassword: '',
    newPassword:     '',
    confirmPassword: '',
  });

  const [avatarSrc, setAvatarSrc] = useState(null);
  const [saved,     setSaved]     = useState(false);

  const setP = (k) => (e) => setProfile((p) => ({ ...p, [k]: e.target.value }));
  const setS = (k) => (e) => setSecurity((p) => ({ ...p, [k]: e.target.value }));

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setAvatarSrc(url);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
    // TODO: call your API / Supabase here
    console.log('Saved profile:', profile);
    console.log('Password change requested:', !!security.newPassword);
  };

  const handleDiscard = () => {
    setProfile({
      fullName:     'John Cena',
      email:        'j.cena@fleetops.com',
      phone:        '+1 (555) 123 4567',
      organization: 'Global Logistics Solutions Inc.',
    });
    setSecurity({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  return (
    <div className="as-shell">

      {/* ══ SIDEBAR ══ */}
      <aside className="as-sidebar">
        <div className="as-sidebar__logo">
          <span className="as-logo-icon"><GridIcon /></span>
          <span className="as-logo-text">RouteConnect</span>
        </div>

        <div className="as-sidebar__section">
          <p className="as-sidebar__label">Main Menu</p>
          <nav className="as-nav">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`as-nav-item${activeNav === item.id ? ' as-nav-item--active' : ''}`}
                onClick={() => setActiveNav(item.id)}
              >
                <span className="as-nav-item__icon">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="as-sidebar__bottom">
          <button
            type="button"
            className={`as-nav-item${activeNav === 'settings' ? ' as-nav-item--active' : ''}`}
            onClick={() => setActiveNav('settings')}
          >
            <span className="as-nav-item__icon"><SettingsIcon /></span>
            <span>Settings</span>
          </button>
          <button type="button" className="as-nav-item as-nav-item--logout">
            <span className="as-nav-item__icon"><LogoutIcon /></span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* ══ MAIN ══ */}
      <div className="as-main">

        {/* Top bar */}
        <header className="as-topbar">
          <div className="as-topbar__spacer" />
          <div className="as-topbar__right">
            <button className="as-bell" type="button" aria-label="Notifications">
              <BellIcon />
              <span className="as-bell__dot" aria-hidden="true" />
            </button>
            <div className="as-user">
              <div>
                <p className="as-user__name">John Cena</p>
                <p className="as-user__role">Fleet Manager</p>
              </div>
              <div className="as-avatar">
                {avatarSrc
                  ? <img src={avatarSrc} alt="User" className="as-avatar__img" />
                  : 'JC'}
                <span className="as-avatar__dot" aria-hidden="true" />
              </div>
            </div>
          </div>
        </header>

        {/* Page body */}
        <div className="as-content">
          <h1 className="as-page-title">Settings</h1>
          <p className="as-page-sub">
            Manage your administrative profile and fleet organization details.
          </p>

          <form onSubmit={handleSave} noValidate>
            {/* ── Profile card ── */}
            <div className="as-card as-card--profile">
              <div className="as-profile-pic-wrap">
                {avatarSrc
                  ? <img src={avatarSrc} alt="Profile" className="as-profile-pic" />
                  : <div className="as-profile-pic as-profile-pic--placeholder">JC</div>
                }
              </div>
              <div className="as-profile-info">
                <p className="as-profile-name">{profile.fullName || 'John Cena'}</p>
                <p className="as-profile-role">Fleet Manager • Administrator</p>
                <button
                  type="button"
                  className="as-change-photo"
                  onClick={() => fileRef.current?.click()}
                >
                  <CameraIcon /> Change Photo
                </button>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handlePhotoChange}
                />
              </div>
            </div>

            {/* ── Account Information ── */}
            <div className="as-card">
              <h2 className="as-section-title">Account Information</h2>
              <p className="as-section-sub">
                Update your primary contact and identification details.
              </p>

              <div className="as-form-grid">
                {/* Full Name */}
                <div className="as-field">
                  <label htmlFor="fullName">Full Name</label>
                  <div className="as-input-wrap">
                    <span className="as-ico-left"><PersonIcon /></span>
                    <input
                      id="fullName" type="text"
                      value={profile.fullName}
                      onChange={setP('fullName')}
                      autoComplete="name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="as-field">
                  <label htmlFor="email">Email Address</label>
                  <div className="as-input-wrap">
                    <span className="as-ico-left"><MailIcon /></span>
                    <input
                      id="email" type="email"
                      value={profile.email}
                      onChange={setP('email')}
                      autoComplete="email"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="as-field">
                  <label htmlFor="phone">Phone Number</label>
                  <div className="as-input-wrap">
                    <span className="as-ico-left"><PhoneIcon /></span>
                    <input
                      id="phone" type="tel"
                      value={profile.phone}
                      onChange={setP('phone')}
                      autoComplete="tel"
                    />
                  </div>
                </div>

                {/* Organization */}
                <div className="as-field">
                  <label htmlFor="org">Organization / Company (Optional)</label>
                  <div className="as-input-wrap">
                    <span className="as-ico-left"><BuildingIcon /></span>
                    <input
                      id="org" type="text"
                      value={profile.organization}
                      onChange={setP('organization')}
                    />
                  </div>
                </div>
              </div>

              <hr className="as-divider" />

              {/* ── Security ── */}
              <h2 className="as-section-title" style={{ marginTop: '4px' }}>Security</h2>
              <p className="as-section-sub">
                Ensure your account is protected with a strong password.
              </p>

              {/* Current Password — full width */}
              <div className="as-field as-field--full" style={{ marginTop: '16px' }}>
                <label htmlFor="currentPwd">Current Password</label>
                <div className="as-input-wrap">
                  <span className="as-ico-left"><LockIcon /></span>
                  <input
                    id="currentPwd" type="password"
                    placeholder="Enter current password"
                    value={security.currentPassword}
                    onChange={setS('currentPassword')}
                    autoComplete="current-password"
                  />
                </div>
              </div>

              <div className="as-form-grid" style={{ marginTop: '14px' }}>
                <div className="as-field">
                  <label htmlFor="newPwd">New Password</label>
                  <div className="as-input-wrap">
                    <span className="as-ico-left"><LockIcon /></span>
                    <input
                      id="newPwd" type="password"
                      placeholder="Min. 8 characters"
                      value={security.newPassword}
                      onChange={setS('newPassword')}
                      autoComplete="new-password"
                    />
                  </div>
                </div>
                <div className="as-field">
                  <label htmlFor="confirmPwd">Confirm New Password</label>
                  <div className="as-input-wrap">
                    <span className="as-ico-left"><LockIcon /></span>
                    <input
                      id="confirmPwd" type="password"
                      placeholder="Repeat new password"
                      value={security.confirmPassword}
                      onChange={setS('confirmPassword')}
                      autoComplete="new-password"
                    />
                  </div>
                </div>
              </div>

              {/* Action bar */}
              <div className="as-action-bar">
                <p className="as-last-updated">Last updated on October 12, 2024</p>
                <div className="as-action-bar__buttons">
                  <button
                    type="button"
                    className="btn-discard"
                    onClick={handleDiscard}
                  >
                    Discard Changes
                  </button>
                  <button type="submit" className={`btn-save${saved ? ' btn-save--saved' : ''}`}>
                    {saved ? '✓ Saved!' : '💾 Save Changes'}
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* ── Status cards ── */}
          <div className="as-status-row">
            <div className="as-status-card">
              <span className="as-status-icon as-status-icon--green">
                <CheckCircleIcon />
              </span>
              <p className="as-status-card__title">Account Verified</p>
              <p className="as-status-card__sub">Manager identity verified via SSO.</p>
            </div>
            <div className="as-status-card">
              <span className="as-status-icon as-status-icon--green">
                <TruckIcon />
              </span>
              <p className="as-status-card__title">Fleet Context</p>
              <p className="as-status-card__sub">Manage 12 vehicles in your company.</p>
            </div>
            <div className="as-status-card">
              <span className="as-status-icon as-status-icon--green">
                <ShieldCheckIcon />
              </span>
              <p className="as-status-card__title">Security Level</p>
              <p className="as-status-card__sub">2FA is currently enabled for you.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="as-footer">
          <span>© 2024 DriveTrack Accounts. All rights reserved.</span>
        </footer>
      </div>
    </div>
  );
}