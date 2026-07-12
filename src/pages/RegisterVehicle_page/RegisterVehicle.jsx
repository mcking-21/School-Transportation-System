import { useState } from 'react';
import './RegisterVehicle.css';

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
const GlobeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const AlertCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r="1" fill="#ef4444" stroke="none"/>
  </svg>
);
const QuestionIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r="1" fill="currentColor" stroke="none"/>
  </svg>
);
const DocIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/>
  </svg>
);
const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
const VehicleCardIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="13" rx="2"/>
    <path d="M2 10h20"/><path d="M6 15h2"/><path d="M16 15h2"/>
  </svg>
);

/* ─── Sidebar nav items ──────────────────────────────────── */
const NAV_ITEMS = [
  { label: 'Dashboard',          icon: <DashboardIcon />, id: 'dashboard' },
  { label: 'Live Map',           icon: <MapIcon />,       id: 'livemap' },
  { label: 'Register a Vehicle', icon: <BusIcon />,       id: 'register' },
  { label: "Driver's View",      icon: <DriverIcon />,    id: 'driver' },
];

/* ─── Plate number validation ────────────────────────────── */
const PLATE_RE = /^[A-Z]{3}-\d{4}$/;

/* ─── Component ─────────────────────────────────────────── */
export default function RegisterVehicle() {
  const [activeNav, setActiveNav] = useState('register');

  const [form, setForm] = useState({
    vehicleType:   '',
    plateNumber:   'ABC-1234',
    gpsDeviceId:   '',
    operatorPhone: '',
    totalCapacity: '',
  });

  const [touched, setTouched] = useState({});

  const plateError =
    touched.plateNumber && form.plateNumber && !PLATE_RE.test(form.plateNumber)
      ? 'Plate number format is invalid (e.g., ABC-1234)'
      : '';

  const set = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));
  const blur = (key) => () => setTouched((p) => ({ ...p, [key]: true }));

  const handleNext = (e) => {
    e.preventDefault();
    setTouched({ plateNumber: true });
    if (plateError) return;
    // TODO: advance to next step / call your API
    console.log('Vehicle payload:', form);
  };

  return (
    <div className="rv-shell">

      {/* ══ SIDEBAR ══ */}
      <aside className="rv-sidebar">
        {/* Logo */}
        <div className="rv-sidebar__logo">
          <span className="rv-logo-icon"><GridIcon /></span>
          <span className="rv-logo-text">RouteConnect</span>
        </div>

        {/* Main nav */}
        <div className="rv-sidebar__section">
          <p className="rv-sidebar__label">Main Menu</p>
          <nav className="rv-nav" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`rv-nav-item${activeNav === item.id ? ' rv-nav-item--active' : ''}`}
                onClick={() => setActiveNav(item.id)}
                type="button"
              >
                <span className="rv-nav-item__icon">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom nav */}
        <div className="rv-sidebar__bottom">
          <button className="rv-nav-item" type="button">
            <span className="rv-nav-item__icon"><SettingsIcon /></span>
            <span>Settings</span>
          </button>
          <button className="rv-nav-item rv-nav-item--logout" type="button">
            <span className="rv-nav-item__icon"><LogoutIcon /></span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* ══ MAIN ══ */}
      <div className="rv-main">

        {/* Top bar */}
        <header className="rv-topbar">
          <div className="rv-topbar__spacer" />
          <div className="rv-topbar__right">
            <button className="rv-bell" aria-label="Notifications" type="button">
              <BellIcon />
              <span className="rv-bell__dot" aria-hidden="true" />
            </button>
            <div className="rv-user">
              <div>
                <p className="rv-user__name">John Cena</p>
                <p className="rv-user__role">Fleet Manager</p>
              </div>
              <div className="rv-avatar" aria-label="User avatar">
                JC
                <span className="rv-avatar__dot" aria-hidden="true" />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable content */}
        <div className="rv-content">

          {/* Page heading row */}
          <div className="rv-page-header">
            <div>
              <h1 className="rv-page-title">Vehicle Registration</h1>
              <p className="rv-page-sub">
                Register a new unit to the RouteConnect fleet management system.
              </p>
            </div>
            <button className="btn-view-fleet" type="button">
              View Registered Fleet <ArrowRightIcon />
            </button>
          </div>

          {/* Form card */}
          <div className="rv-card">

            {/* Card heading */}
            <div className="rv-card__head">
              <span className="rv-card__head-icon"><VehicleCardIcon /></span>
              <div>
                <p className="rv-card__head-title">Vehicle Information</p>
                <p className="rv-card__head-sub">
                  Basic vehicle identification and classification.
                </p>
              </div>
            </div>
            <hr className="rv-card__divider" />

            {/* Form */}
            <form onSubmit={handleNext} noValidate>
              <div className="rv-form-grid">

                {/* Vehicle Type */}
                <div className="rv-field">
                  <label htmlFor="vehicleType">Vehicle Type</label>
                  <input
                    id="vehicleType"
                    type="text"
                    value={form.vehicleType}
                    onChange={set('vehicleType')}
                    onBlur={blur('vehicleType')}
                  />
                </div>

                {/* Plate Number */}
                <div className="rv-field">
                  <label htmlFor="plateNumber">Plate Number</label>
                  <div className={`rv-input-wrap${plateError ? ' rv-input-wrap--error' : ''}`}>
                    <input
                      id="plateNumber"
                      type="text"
                      value={form.plateNumber}
                      onChange={set('plateNumber')}
                      onBlur={blur('plateNumber')}
                      className={plateError ? 'input--error' : ''}
                    />
                    {plateError && (
                      <span className="rv-input-ico-right">
                        <AlertCircleIcon />
                      </span>
                    )}
                  </div>
                  {plateError && (
                    <p className="rv-field__error">{plateError}</p>
                  )}
                </div>

                {/* GPS Device ID */}
                <div className="rv-field">
                  <label htmlFor="gpsDeviceId">
                    GPS Device ID
                    <span className="rv-required-tag">Required</span>
                  </label>
                  <div className="rv-input-wrap rv-input-wrap--icon-left">
                    <span className="rv-input-ico-left"><GlobeIcon /></span>
                    <input
                      id="gpsDeviceId"
                      type="text"
                      placeholder="IMEI or Tracking ID"
                      value={form.gpsDeviceId}
                      onChange={set('gpsDeviceId')}
                      onBlur={blur('gpsDeviceId')}
                    />
                  </div>
                </div>

                {/* Operator Phone */}
                <div className="rv-field">
                  <label htmlFor="operatorPhone">Operator Phone Number</label>
                  <input
                    id="operatorPhone"
                    type="tel"
                    placeholder="+63 9XX XXX XXXX"
                    value={form.operatorPhone}
                    onChange={set('operatorPhone')}
                    onBlur={blur('operatorPhone')}
                  />
                </div>

                {/* Total Capacity — spans left column only */}
                <div className="rv-field rv-field--half">
                  <label htmlFor="totalCapacity">
                    Total Capacity
                    <span className="rv-required-tag">Required</span>
                  </label>
                  <input
                    id="totalCapacity"
                    type="number"
                    min="1"
                    value={form.totalCapacity}
                    onChange={set('totalCapacity')}
                    onBlur={blur('totalCapacity')}
                  />
                </div>

              </div>

              {/* Action buttons */}
              <div className="rv-form-actions">
                <button type="button" className="btn-back">Back</button>
                <button type="submit" className="btn-next">Next Step</button>
              </div>
            </form>
          </div>

          {/* Help cards */}
          <div className="rv-help-row">
            <div className="rv-help-card">
              <span className="rv-help-card__ico rv-help-card__ico--gray">
                <QuestionIcon />
              </span>
              <div>
                <p className="rv-help-card__title">Need Help?</p>
                <p className="rv-help-card__sub">Contact support agent</p>
              </div>
            </div>
            <div className="rv-help-card">
              <span className="rv-help-card__ico rv-help-card__ico--blue">
                <DocIcon />
              </span>
              <div>
                <p className="rv-help-card__title">Guidelines</p>
                <p className="rv-help-card__sub">View registration PDF</p>
              </div>
            </div>
            <div className="rv-help-card">
              <span className="rv-help-card__ico rv-help-card__ico--red">
                <ShieldIcon />
              </span>
              <div>
                <p className="rv-help-card__title">Security</p>
                <p className="rv-help-card__sub">Your data is encrypted</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="rv-footer">
          <span>© 2024 RouteConnect Systems. All rights reserved.</span>
          <nav className="rv-footer__links" aria-label="Footer links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/support">Support</a>
          </nav>
        </footer>
      </div>
    </div>
  );
}