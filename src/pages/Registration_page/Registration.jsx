import { useState } from 'react';
import './Registration.css';

/* ─── SVG Icons ─────────────────────────────────────────── */
const ShieldIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const PersonIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>
);
const MailIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const PhoneIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.4 2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const LockIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const BriefcaseIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    <path d="M2 12h20"/>
  </svg>
);
const CheckIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

/* ─── Password strength helper ───────────────────────────── */
function getStrength(pwd) {
  if (!pwd) return null;
  let score = 0;
  if (pwd.length >= 8)          score++;
  if (pwd.length >= 12)         score++;
  if (/[A-Z]/.test(pwd))        score++;
  if (/[0-9]/.test(pwd))        score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  if (score <= 1) return { label: 'Weak',   color: '#ef4444' };
  if (score === 2) return { label: 'Fair',   color: '#f59e0b' };
  if (score === 3) return { label: 'Good',   color: '#10b981' };
  return            { label: 'Strong', color: '#3b82f6' };
}

/* ─── Component ─────────────────────────────────────────── */
export default function Register() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [verification, setVerification] = useState('email');
  const [agreed, setAgreed]             = useState(false);
  const [loading, setLoading]           = useState(false);

  const strength = getStrength(form.password);

  const set = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) return;
    setLoading(true);
    // TODO: replace with your API / Supabase / Firebase call
    console.log('Register payload:', { ...form, verification });
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="reg-page">

      {/* ══ LEFT PANEL ══ */}
      <aside className="reg-left">
        <div className="reg-left__body">

          {/* Hero copy */}
          <h1 className="reg-hero">
            Begin your journey<br />
            with <em>University Excellence.</em>
          </h1>
          <p className="reg-hero__sub">
            Access the most comprehensive platform for campus 
            transportation services.
          </p>

          {/* Features */}
          <p className="reg-onboarding-label">Quick Onboarding</p>
          <ul className="reg-features">
            <li className="reg-feature">
              <span className="reg-feature__ico"><PersonIcon size={17} /></span>
              <div>
                <p className="reg-feature__title">Unified Identity</p>
                <p className="reg-feature__desc">
                  One account for all UM services, ensuring a seamless digital
                  experience across platforms.
                </p>
              </div>
            </li>
            <li className="reg-feature">
              <span className="reg-feature__ico"><BriefcaseIcon size={17} /></span>
              <div>
                <p className="reg-feature__title">Professional Network</p>
                <p className="reg-feature__desc">
                  Operators gain access to exclusive university fleet management
                  tools and auditing.
                </p>
              </div>
            </li>
            <li className="reg-feature">
              <span className="reg-feature__ico"><ShieldIcon size={17} /></span>
              <div>
                <p className="reg-feature__title">Safety First</p>
                <p className="reg-feature__desc">
                  Advanced encryption and verification protocols protecting your
                  identity and data.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Testimonial footer */}
        <div className="reg-left__foot">
          <hr className="reg-divider" />
          <div className="reg-testimonial">
            <div className="reg-avatar" aria-hidden="true">
            </div>
            <div>
              <p className="reg-testimonial__name">Join us now!</p>
              <p className="reg-testimonial__quote">
                "The fastest way to navigate campus services."
              </p>
            </div>
          </div>
        </div>

        {/* Decorative ring */}
        <div className="reg-ring" aria-hidden="true" />
      </aside>

      {/* ══ RIGHT PANEL ══ */}
      <main className="reg-right">
        <div className="reg-right__inner">

          <h2 className="reg-title">Create your account</h2>
          <p className="reg-subtitle">
            Enter your details to get started with the UM Portal.
          </p>

          <div className="reg-card">
            <form onSubmit={handleSubmit} noValidate>

              {/* ── PERSONAL INFORMATION ── */}
              <section className="reg-section">
                <div className="reg-section-head">
                  <PersonIcon size={13} />
                  <span>Personal Information</span>
                </div>
                <hr className="reg-section-rule" />

                <div className="reg-grid">
                  {/* Full Name */}
                  <div className="field">
                    <label htmlFor="fullName">Full Name</label>
                    <div className="field__wrap">
                      <span className="field__ico"><PersonIcon /></span>
                      <input
                        id="fullName" type="text"
                        placeholder="Juan Dela Cruz"
                        value={form.fullName}
                        onChange={set('fullName')}
                        autoComplete="name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="field">
                    <label htmlFor="regEmail">Email Address</label>
                    <div className="field__wrap">
                      <span className="field__ico"><MailIcon /></span>
                      <input
                        id="regEmail" type="email"
                        placeholder="juan.dela.cruz@example.com"
                        value={form.email}
                        onChange={set('email')}
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="field">
                    <label htmlFor="phone">Phone Number</label>
                    <div className="field__wrap">
                      <span className="field__ico"><PhoneIcon /></span>
                      <input
                        id="phone" type="tel"
                        placeholder="+63 912 345 6789"
                        value={form.phone}
                        onChange={set('phone')}
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  {/* Preferred Verification */}
                  <div className="field">
                    <label>Preferred Verification</label>
                    <div className="toggle-row">
                      <button
                        type="button"
                        className={`toggle-btn${verification === 'email' ? ' toggle-btn--active' : ''}`}
                        onClick={() => setVerification('email')}
                      >
                        <MailIcon size={13} /> Email
                      </button>
                      <button
                        type="button"
                        className={`toggle-btn${verification === 'sms' ? ' toggle-btn--active' : ''}`}
                        onClick={() => setVerification('sms')}
                      >
                        💬 SMS
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── ACCOUNT SECURITY ── */}
              <section className="reg-section">
                <div className="reg-section-head">
                  <LockIcon size={13} />
                  <span>Account Security</span>
                </div>
                <hr className="reg-section-rule" />

                <div className="reg-grid">
                  {/* Password */}
                  <div className="field">
                    <label htmlFor="password">Password</label>
                    <div className="field__wrap">
                      <span className="field__ico"><LockIcon /></span>
                      <input
                        id="password" type="password"
                        placeholder="secure_pass"
                        value={form.password}
                        onChange={set('password')}
                        autoComplete="new-password"
                      />
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="field">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="field__wrap">
                      <span className="field__ico"><LockIcon /></span>
                      <input
                        id="confirmPassword" type="password"
                        placeholder="secure_pass"
                        value={form.confirmPassword}
                        onChange={set('confirmPassword')}
                        autoComplete="new-password"
                      />
                    </div>
                  </div>
                </div>

                {strength && (
                  <p className="pwd-strength" style={{ '--clr': strength.color }}>
                    <CheckIcon size={13} />
                    Strength: <strong>{strength.label}</strong>
                  </p>
                )}
              </section>

              {/* ── TERMS ── */}
              <div className="reg-terms">
                <input
                  type="checkbox" id="agreed"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <label htmlFor="agreed">
                  I agree to the <a href="/terms">Terms of Service</a> and{' '}
                  <a href="/privacy">Privacy Policy</a>. I understand my data will be
                  handled in accordance with UM's safety guidelines.
                </label>
              </div>

              {/* ── SUBMIT ── */}
              <button
                type="submit"
                className="btn-create"
                disabled={!agreed || loading}
              >
                {loading ? 'Creating account…' : 'Create Account'}
                {!loading && <ArrowRight />}
              </button>

              <p className="reg-login-link">
                Already have an account?{' '}
                <a href="/login"><strong>Sign in here</strong></a>
              </p>
            </form>
          </div>

          {/* Page footer */}
          <footer className="reg-footer">
            <div className="reg-footer__rule">
              <hr /><span>Verified Institutional Partner</span><hr />
            </div>
            <p>© 1946–2024 University of Mindanao. Vincit Omnia Veritas.</p>
          </footer>

        </div>
      </main>
    </div>
  );
}
