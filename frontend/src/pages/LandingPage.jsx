import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--zen-gray-50)', fontFamily: 'var(--font-body)' }}>
      
      {/* NAV */}
      <nav className="landing-nav">
        <div className="flex items-center gap-2">
          <div style={{ width: 32, height: 32, background: 'var(--zen-green)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--zen-dark)' }}>Zen G</span>
        </div>
        <div className="landing-nav-links">
          <a href="#features" className="active">Features</a>
          <a href="#security">Security</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/login">
            <button className="btn btn-ghost" style={{ color: 'var(--zen-gray-700)' }}>Log In</button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-primary">Sign Up</button>
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ textAlign: 'center', padding: '100px 24px 60px', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative dashes */}
        <svg style={{ position: 'absolute', top: 80, left: '5%', opacity: 0.3 }} width="300" height="200" viewBox="0 0 300 200">
          <path d="M0,150 Q75,50 150,100 Q225,150 300,50" fill="none" stroke="var(--zen-green)" strokeWidth="2" strokeDasharray="8,6"/>
        </svg>
        <svg style={{ position: 'absolute', top: 80, right: '5%', opacity: 0.3 }} width="300" height="200" viewBox="0 0 300 200">
          <path d="M300,150 Q225,50 150,100 Q75,150 0,50" fill="none" stroke="var(--zen-green)" strokeWidth="2" strokeDasharray="8,6"/>
        </svg>

        <div style={{ width: 64, height: 64, background: 'var(--zen-white)', borderRadius: '50%', border: '1px solid var(--zen-gray-200)', boxShadow: 'var(--shadow-md)', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--zen-green)" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        </div>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 8vw, 80px)', fontWeight: 700, color: 'var(--zen-dark)', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 20, maxWidth: 700, margin: '0 auto 20px' }}>
          Zen G
        </h1>
        <p style={{ fontSize: 18, color: 'var(--zen-gray-600)', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.7 }}>
          Understand your spending habits and visualise your financial future. See how your daily decisions shape your life at 60. Make smarter choices with clear insights.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/signup">
            <button className="btn btn-primary btn-lg">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-secondary btn-lg">Log In</button>
          </Link>
        </div>

        {/* Trust signals */}
        <div className="flex items-center justify-center gap-8 mt-8" style={{ color: 'var(--zen-gray-500)', fontSize: 12, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase' }}>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Bank-grade Security
          </div>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            Real-time Insights
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40 }}>
          {[
            { icon: '👁️', title: 'Crystal Clarity', desc: 'No more guesswork. Every transaction is mapped to your long-term goals instantly.' },
            { icon: '📊', title: 'Editorial Insights', desc: 'Beautifully curated reports that tell the story of your wealth creation journey.' },
            { icon: '🔮', title: 'Future Projection', desc: 'Proprietary algorithms show you the compound effect of every latte or stock purchase.' },
          ].map((f) => (
            <div key={f.title} style={{ padding: 8 }}>
              <div style={{ fontSize: 28, marginBottom: 16, background: 'var(--zen-green-pale)', width: 52, height: 52, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{f.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: 'var(--zen-dark)' }}>{f.title}</h3>
              <p style={{ color: 'var(--zen-gray-500)', fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding: '0 24px 80px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ background: 'var(--zen-dark)', borderRadius: 32, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 340 }}>
          <div style={{ padding: '56px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 700, color: 'white', lineHeight: 1.2, marginBottom: 16 }}>
              The future you is thanking you today.
            </h2>
            <p style={{ color: 'var(--zen-gray-400)', fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
              We've designed an interface that breathes. No clutter, no anxiety. Just the essential data you need to reach your peak financial sanctuary.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/signup">
                <button className="btn btn-primary">Get Early Access</button>
              </Link>
              <button style={{ color: 'var(--zen-gray-300)', fontSize: 14, display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', cursor: 'pointer' }}>Learn more →</button>
            </div>
          </div>
          <div style={{ background: 'linear-gradient(135deg, var(--zen-green) 0%, #0a3d22 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 80, marginBottom: 16 }}>📈</div>
              <div style={{ color: 'rgba(255,255,255,.6)', fontSize: 13, fontWeight: 600 }}>Your Financial OS</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid var(--zen-gray-200)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--zen-dark)', marginBottom: 16 }}>Zen G</div>
        <div className="flex items-center justify-center gap-6 mb-6" style={{ color: 'var(--zen-gray-500)', fontSize: 13 }}>
          <a href="#" style={{ color: 'var(--zen-gray-500)' }}>Privacy</a>
          <a href="#" style={{ color: 'var(--zen-gray-500)' }}>Terms</a>
          <a href="#" style={{ color: 'var(--zen-gray-500)' }}>Support</a>
          <a href="#" style={{ color: 'var(--zen-gray-500)' }}>Twitter</a>
        </div>
        <p style={{ color: 'var(--zen-gray-400)', fontSize: 12 }}>© 2024 Zen G Financial. The Editorial Oasis.</p>
      </footer>
    </div>
  );
}
