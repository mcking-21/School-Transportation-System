import { useState } from 'react';
import './Login.css';
import UMLogo from '../../assets/UM_Logo.png';

const BusIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="14" rx="2" />
    <path d="M2 9h20" />
    <path d="M2 14h20" />
    <path d="M6 18v2M18 18v2" />
    <circle cx="6" cy="19" r="1" fill="white" stroke="none" />
    <circle cx="18" cy="19" r="1" fill="white" stroke="none" />
    <path d="M8 4v5M16 4v5" />
  </svg>
);

const MailIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LockIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <circle cx="12" cy="16" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: replace with your auth logic (e.g. Firebase, Supabase, API call)
    setTimeout(() => setLoading(false), 1500);
  };

  const handleGoogleSignIn = () => {
    // TODO: replace with your Google OAuth logic
    console.log('Google sign-in triggered');
  };

  return (
    <div className="login-page">

      {/* ── LEFT PANEL ── */}
      <aside className="login-left">
        <div className="login-left__content">

          <div className="login-logo" aria-hidden="true">
            <BusIcon />
          </div>

          <h1 className="login-left__heading">
            Connecting the Campus Community
          </h1>

          <p className="login-left__subtext">
            Real-time tracking for a safer, more efficient ride.
          </p>

          <div className="login-stats">
            <div className="login-stat-card">
              <span className="login-stat-card__value">98%</span>
              <span className="login-stat-card__label">On-Time Rate</span>
            </div>
            <div className="login-stat-card">
              <span className="login-stat-card__value">15+</span>
              <span className="login-stat-card__label">Active Routes</span>
            </div>
          </div>
        </div>

        <footer className="login-left__footer">
          <div className="logo-container">
            <div className="top-row">
              <img src={UMLogo} alt="University of Mindanao Seal" className="seal-img" />
            </div>
            <div className="bottom-row">
              <p className="full-name">Trusted by the University of Mindanao</p>
            </div>
          </div>
        </footer>
      </aside>

      {/* ── RIGHT PANEL ── */}
      <main className="login-right">
        <div className="login-form-wrapper">

          <h2 className="login-form__heading">Welcome back</h2>
          <p className="login-form__subtext">
            Enter your credentials to access your tracking dashboard
          </p>

          <form onSubmit={handleSubmit} className="login-form" noValidate>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <div className="input-wrapper">
                <span className="input-icon" aria-hidden="true"><MailIcon /></span>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="name@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <div className="form-group__header">
                <label htmlFor="password">Password</label>
                <a href="/forgot-password" className="forgot-password">
                  Forgot password?
                </a>
              </div>
              <div className="input-wrapper">
                <span className="input-icon" aria-hidden="true"><LockIcon /></span>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-signin"
              disabled={loading}
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          {/* Google sign-in */}
          <button
            type="button"
            className="btn-google"
            onClick={handleGoogleSignIn}
          >
            <GoogleIcon />
            Sign in with Google
          </button>

          <p className="create-account">
            Don't have an account?{' '}
            <a href="/register">Create an account</a>
          </p>
        </div>

        {/* Bottom footer links */}
        <nav className="login-footer" aria-label="Site links">
          <a href="/help">Help Center</a>
          <span aria-hidden="true">•</span>
          <a href="/about">About RouteConnect</a>
          <span aria-hidden="true">•</span>
          <a href="/privacy">Privacy</a>
        </nav>
      </main>

    </div>
  );
};

export default Login;
