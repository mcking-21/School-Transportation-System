import React, { useState, useEffect } from 'react';
import './LiveMap.css';

/* ---------- Icons (inline SVG — no external icon library required) ---------- */

function IconGripDots({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="6" cy="6" r="1.6" />
      <circle cx="12" cy="6" r="1.6" />
      <circle cx="18" cy="6" r="1.6" />
      <circle cx="6" cy="12" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="18" cy="12" r="1.6" />
    </svg>
  );
}

function IconGrid({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function IconSearch({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconBell({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function IconMap({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" y1="3" x2="9" y2="18" />
      <line x1="15" y1="6" x2="15" y2="21" />
    </svg>
  );
}

function IconVehicle({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 11l1.5-4A2 2 0 0 1 8.4 5.5h7.2a2 2 0 0 1 1.9 1.5L19 11" />
      <rect x="3" y="11" width="18" height="6" rx="1.5" />
      <circle cx="7.5" cy="19" r="1.5" />
      <circle cx="16.5" cy="19" r="1.5" />
    </svg>
  );
}

function IconSteeringWheel({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 3v6.5M6.5 16.8L11 13.8M17.5 16.8L13 13.8" />
    </svg>
  );
}

function IconSettings({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function IconLogout({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

function IconActivity({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="2 14 7 14 10 5 14 20 17 10 19 14 22 14" />
    </svg>
  );
}

function IconRoute({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="6" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path d="M7.2 7.6C9 10 9 10 12 12s5 2 6.8 4.4" />
    </svg>
  );
}

function IconBus({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="12" rx="2" />
      <path d="M4 11h16" />
      <path d="M8 16v2M16 16v2" />
      <circle cx="7.5" cy="19" r="1" />
      <circle cx="16.5" cy="19" r="1" />
    </svg>
  );
}

function IconUsers({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconFlag({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 21V4" />
      <path d="M5 4h11l-2.5 3.5L16 11H5" />
    </svg>
  );
}

function IconPlus({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function IconMinus({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function IconLocate({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l17-8-8 17-2-7-7-2z" />
    </svg>
  );
}

function IconLayers({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function IconMoreVertical({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="5" r="1.8" />
      <circle cx="12" cy="12" r="1.8" />
      <circle cx="12" cy="19" r="1.8" />
    </svg>
  );
}

function IconMapPin({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-6.5 7-11.5A7 7 0 1 0 5 9.5C5 14.5 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

/* ---------- Decorative map placeholder ---------- */
/* This is a stylized illustration standing in for a real map. Swap it for an
   actual map provider (Leaflet, Mapbox GL, Google Maps) and keep the markers/
   controls layered on top the same way. */
function MapIllustration() {
  return (
    <svg
      className="map-illustration"
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lm-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dee5ee" />
          <stop offset="100%" stopColor="#c9d4e1" />
        </linearGradient>
        <pattern id="lm-grid" width="26" height="26" patternUnits="userSpaceOnUse">
          <path d="M26 0H0V26" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        </pattern>
        <clipPath id="lm-landClip">
          <path d="M0,190 C90,230 140,330 210,300 C260,278 250,220 320,235 C380,248 360,320 430,318 C520,315 520,230 600,245 C680,260 690,340 760,330 C790,326 800,300 800,300 L800,500 L0,500 Z" />
        </clipPath>
      </defs>

      <rect width="800" height="500" fill="url(#lm-water)" />

      <path d="M0,130 C110,80 230,150 360,100 C500,50 640,120 800,75 L800,0 L0,0 Z" fill="#c3cdae" />
      <path d="M0,165 C130,120 270,190 420,140 C560,95 680,155 800,120 L800,0 L0,0 Z" fill="#aab896" />

      <path
        d="M0,190 C90,230 140,330 210,300 C260,278 250,220 320,235 C380,248 360,320 430,318 C520,315 520,230 600,245 C680,260 690,340 760,330 C790,326 800,300 800,300 L800,500 L0,500 Z"
        fill="#28324a"
      />
      <rect width="800" height="500" fill="url(#lm-grid)" clipPath="url(#lm-landClip)" />

      <path
        d="M60,500 C110,420 90,360 150,320 C210,280 260,300 300,360 C340,420 400,430 430,500"
        fill="none"
        stroke="#5c7a95"
        strokeWidth="14"
        strokeLinecap="round"
        opacity="0.75"
      />

      <path d="M120,500 L340,230" stroke="rgba(255,255,255,0.18)" strokeWidth="3" fill="none" />
      <path d="M500,500 L560,260" stroke="rgba(255,255,255,0.18)" strokeWidth="3" fill="none" />
      <path d="M230,500 L620,270" stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="none" />
    </svg>
  );
}

/* ---------- Static data — swap for real data from your API/store ---------- */

const NAV_ITEMS = [
  { label: 'Dashboard', icon: IconGrid },
  { label: 'Live Map', icon: IconMap },
  { label: 'Register a Vehicle', icon: IconVehicle },
  { label: "Driver's View", icon: IconSteeringWheel },
];

/* stopsProgress is a placeholder second metric (assumed "stop N of route length") —
   rename/rewire it to whatever your data actually tracks. */
const VEHICLES = [
  {
    id: 'RC-4822',
    location: 'BE Building',
    nextStop: 'GET Building',
    passengers: '22/24',
    stopsProgress: '7/24',
    top: '36%',
    left: '55%',
  },
  {
    id: 'JNE-990',
    location: 'Maa Gate',
    nextStop: 'Library',
    passengers: '4/24',
    stopsProgress: '3/24',
    top: '48%',
    left: '29%',
  },
];

export default function LiveMaps() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeNav, setActiveNav] = useState('Live Map');
  const [search, setSearch] = useState('');
  const [zoom, setZoom] = useState(1);
  const [selectedId, setSelectedId] = useState(null);
  const [secondsAgo, setSecondsAgo] = useState(2);

  useEffect(() => {
    const id = setInterval(() => setSecondsAgo((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const handleZoomIn = () => setZoom((z) => Math.min(1.6, +(z + 0.1).toFixed(2)));
  const handleZoomOut = () => setZoom((z) => Math.max(0.8, +(z - 0.1).toFixed(2)));
  const handleRecenter = () => setZoom(1);
  const toggleSelected = (id) => setSelectedId((current) => (current === id ? null : id));

  return (
    <div className={`livemap-app${sidebarCollapsed ? ' sidebar-collapsed' : ''}`}>
      {/* ---------- Topbar (full width) ---------- */}
      <header className="topbar">
        <button
          type="button"
          className="sidebar-toggle"
          onClick={() => setSidebarCollapsed((c) => !c)}
          aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <IconGripDots size={16} />
        </button>

        <div className="topbar-brand">
          <span className="topbar-brand-icon">
            <IconGrid size={16} />
          </span>
          <span className="topbar-brand-name">RouteConnect</span>
        </div>

        <div className="topbar-search">
          <IconSearch size={14} />
          <input
            type="text"
            placeholder="Search routes or vehicle plates..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search routes or vehicle plates"
          />
        </div>

        <div className="topbar-spacer" />

        <button type="button" className="topbar-bell" aria-label="Notifications">
          <IconBell size={18} />
        </button>
        <div className="topbar-user">
          <div className="topbar-user-info">
            <div className="topbar-user-name">John Cena</div>
            <div className="topbar-user-role">Fleet Manager</div>
          </div>
          <div className="topbar-avatar">JC</div>
        </div>
      </header>

      {/* ---------- Sidebar + main ---------- */}
      <div className="app-body">
        <aside className="sidebar">
          <div className="sidebar-section-label">MAIN MENU</div>
          <nav className="sidebar-nav">
            {NAV_ITEMS.map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                className={`sidebar-nav-item${activeNav === label ? ' active' : ''}`}
                onClick={() => setActiveNav(label)}
              >
                <Icon size={17} />
                <span>{label}</span>
              </button>
            ))}
          </nav>

          <div className="sidebar-footer">
            <button type="button" className="sidebar-nav-item">
              <IconSettings size={17} />
              <span>Settings</span>
            </button>
            <button type="button" className="sidebar-nav-item">
              <IconLogout size={17} />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        <div className="main">
          <main className="content">
            <div className="stats-row">
              <div className="stat-card-compact">
                <span className="stat-card-compact-icon">
                  <IconActivity size={17} />
                </span>
                <div>
                  <div className="stat-card-compact-label">Vehicles Online</div>
                  <div className="stat-card-compact-value">2</div>
                </div>
              </div>

              <div className="stat-card-compact">
                <span className="stat-card-compact-icon">
                  <IconRoute size={17} />
                </span>
                <div>
                  <div className="stat-card-compact-label">Active Routes</div>
                  <div className="stat-card-compact-value">2</div>
                </div>
              </div>
            </div>

            <div className="live-grid">
              <div className="live-main-column">
                <div className="map-card">
                  <div className="map-canvas" style={{ transform: `scale(${zoom})` }}>
                    <MapIllustration />

                    {VEHICLES.map((vehicle) => (
                      <button
                        key={vehicle.id}
                        type="button"
                        className={`map-marker${selectedId === vehicle.id ? ' selected' : ''}`}
                        style={{ top: vehicle.top, left: vehicle.left }}
                        onClick={() => toggleSelected(vehicle.id)}
                        aria-label={`Vehicle ${vehicle.id}`}
                        title={vehicle.id}
                      >
                        <IconBus size={14} />
                      </button>
                    ))}

                    <div className="map-location-marker" style={{ top: '80%', left: '44%' }} title="Main Terminal">
                      <IconMapPin size={26} />
                    </div>
                  </div>

                  <div className="map-controls">
                    <div className="zoom-control">
                      <button type="button" onClick={handleZoomIn} aria-label="Zoom in">
                        <IconPlus size={16} />
                      </button>
                      <button type="button" onClick={handleZoomOut} aria-label="Zoom out">
                        <IconMinus size={16} />
                      </button>
                    </div>
                    <button type="button" className="locate-control" onClick={handleRecenter} aria-label="Recenter map">
                      <IconLocate size={16} />
                    </button>
                  </div>

                  <button type="button" className="map-layers-btn" aria-label="Toggle map layers">
                    <IconLayers size={17} />
                  </button>

                  <div className="map-overlay-footer">
                    <span className="live-feed-pill">
                      <span className="live-dot" />
                      Live Feed Active
                    </span>
                    <span className="map-updated">Updated {secondsAgo}s ago</span>
                  </div>
                </div>
              </div>

              <aside className="activity-panel">
                <div className="panel-header">
                  <div>
                    <div className="panel-title">Activity</div>
                    <div className="panel-subtitle">Recent updates from vehicles</div>
                  </div>
                  <button type="button" className="icon-btn" aria-label="More options">
                    <IconMoreVertical size={16} />
                  </button>
                </div>

                <div className="activity-list">
                  {VEHICLES.map((vehicle) => (
                    <button
                      key={vehicle.id}
                      type="button"
                      className={`activity-item${selectedId === vehicle.id ? ' selected' : ''}`}
                      onClick={() => toggleSelected(vehicle.id)}
                    >
                      <span className="activity-icon">
                        <IconBus size={15} />
                      </span>
                      <span className="activity-main">
                        <span className="activity-name">{vehicle.id}</span>
                        <span className="activity-detail">Location: {vehicle.location}</span>
                        <span className="activity-detail">Next Stop: {vehicle.nextStop}</span>
                      </span>
                      <span className="activity-stats">
                        <span className="activity-stat">
                          <IconUsers size={12} />
                          {vehicle.passengers}
                        </span>
                        <span className="activity-stat">
                          <IconFlag size={12} />
                          {vehicle.stopsProgress}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </aside>
            </div>
          </main>

          <footer className="footer">
            <span>© 2024 RouteConnect Systems. All rights reserved.</span>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#support">Support</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}