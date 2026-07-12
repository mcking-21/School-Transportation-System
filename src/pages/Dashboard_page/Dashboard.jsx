import React, { useState } from 'react';
import './Dashboard.css';

/* ---------- Icons (inline SVG — no external icon library required) ---------- */

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

function IconBell({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
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

function IconTrendingUp({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
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

/* ---------- Static data — swap for real data from your API/store ---------- */

const NAV_ITEMS = [
  { label: 'Dashboard', icon: IconGrid },
  { label: 'Live Map', icon: IconMap },
  { label: 'Register a Vehicle', icon: IconVehicle },
  { label: "Driver's View", icon: IconSteeringWheel },
];

const FLEET_DATA = [
  {
    id: 'RC-4822',
    shuttle: 'Shuttle 1',
    driver: 'J. Dela Cruz',
    passengers: '22/24',
    congestion: 'High',
    station: 'Matina Gate',
    route: 'Matina Gate → Maa Gate',
    sync: '1s ago',
  },
  {
    id: 'JNE-990',
    shuttle: 'Shuttle 2',
    driver: 'P. Santos',
    passengers: '4/24',
    congestion: 'Low',
    station: 'Maa Gate',
    route: 'Maa Gate → Matina Gate',
    sync: '2s ago',
  },
];

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [search, setSearch] = useState('');

  const filteredFleet = FLEET_DATA.filter((vehicle) => {
    const query = search.trim().toLowerCase();
    if (!query) return true;
    return (
      vehicle.id.toLowerCase().includes(query) ||
      vehicle.driver.toLowerCase().includes(query) ||
      vehicle.station.toLowerCase().includes(query)
    );
  });

  return (
    <div className="dashboard-app">
      {/* ---------- Sidebar ---------- */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span className="sidebar-brand-icon">
            <IconGrid size={16} />
          </span>
          <span className="sidebar-brand-name">RouteConnect</span>
        </div>

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

      {/* ---------- Main column ---------- */}
      <div className="main">
        <header className="topbar">
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

        <main className="content">
          <div className="page-heading">
            <h1>Dashboard</h1>
            <div className="page-subheading">
              <span>June 9, 2025</span>
              <span>•</span>
              <span className="live-dot" />
              <span>Live</span>
            </div>
          </div>

          <div className="top-grid">
            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-card-top">
                  <span className="stat-card-label">Active vehicles</span>
                  <span className="stat-icon blue">
                    <IconBus size={15} />
                  </span>
                </div>
                <div className="stat-value">2</div>
                <div className="stat-caption">All on route</div>
              </div>

              <div className="stat-card">
                <div className="stat-card-top">
                  <span className="stat-card-label">Total passengers</span>
                  <span className="stat-icon green">
                    <IconUsers size={15} />
                  </span>
                </div>
                <div className="stat-value">26</div>
                <div className="stat-caption">Onboard now</div>
              </div>

              <div className="stat-card">
                <div className="stat-card-top">
                  <span className="stat-card-label">Avg. congestion</span>
                  <span className="stat-icon orange">
                    <IconTrendingUp size={15} />
                  </span>
                </div>
                <div className="stat-value">72%</div>
                <div className="stat-caption warning">↑ High</div>
              </div>
            </div>

            <div className="panel">
              <div className="panel-header">
                <span className="panel-title">Vehicle status</span>
                <button type="button" className="panel-link">
                  View all
                </button>
              </div>
              <div className="vehicle-status-list">
                {FLEET_DATA.map((vehicle) => (
                  <div className="vehicle-status-item" key={vehicle.id}>
                    <div className="vehicle-status-row-top">
                      <span className="vehicle-status-name">{vehicle.id}</span>
                      <span className={`badge ${vehicle.congestion.toLowerCase()}`}>
                        {vehicle.congestion}
                      </span>
                    </div>
                    <div className="vehicle-status-row-bottom">
                      <span className="vehicle-status-route">
                        {vehicle.driver} · {vehicle.route}
                      </span>
                      <span className="vehicle-status-count">{vehicle.passengers}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="fleet-panel">
            <div className="fleet-header">
              <span className="fleet-title">Fleet details</span>
              <div className="search-box">
                <IconSearch size={14} />
                <input
                  type="text"
                  placeholder="Search vehicle..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  aria-label="Search vehicle"
                />
              </div>
            </div>

            <div className="fleet-table-wrapper">
              <table className="fleet-table">
                <thead>
                  <tr>
                    <th>Vehicle</th>
                    <th>Driver</th>
                    <th>Passengers</th>
                    <th>Congestion</th>
                    <th>Station</th>
                    <th>Sync</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFleet.map((vehicle) => (
                    <tr key={vehicle.id}>
                      <td>
                        <div className="vehicle-cell-name">{vehicle.id}</div>
                        <div className="vehicle-cell-sub">{vehicle.shuttle}</div>
                      </td>
                      <td>{vehicle.driver}</td>
                      <td>{vehicle.passengers}</td>
                      <td>
                        <span className={`badge ${vehicle.congestion.toLowerCase()}`}>
                          {vehicle.congestion}
                        </span>
                      </td>
                      <td>{vehicle.station}</td>
                      <td className="sync-cell">{vehicle.sync}</td>
                    </tr>
                  ))}
                  {filteredFleet.length === 0 && (
                    <tr>
                      <td colSpan={6} className="no-results">
                        No vehicles match your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <footer className="footer">
            <span>© 2024 RouteConnect Systems. All rights reserved.</span>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#support">Support</a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}