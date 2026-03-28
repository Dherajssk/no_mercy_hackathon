import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';

const API = '/api';

export default function OnboardingPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    onboarding_mode: 'quick_start',
    age: user?.age || '',
    occupation: user?.occupation || '',
    monthly_income: '',
    liquid_savings: '',
    monthly_debt: '',
    goals: [],
    spending_style: 3,
    risk_comfort: 3,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  
  const toggleGoal = (g) => {
    setForm((p) => ({
      ...p,
      goals: p.goals.includes(g) ? p.goals.filter(x => x !== g) : [...p.goals, g]
    }));
  };

  const handleFinish = async () => {
    setLoading(true);
    try {
      // Create user profile - simplified for MVP
      const res = await fetch(`${API}/onboarding/complete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('zen_token')}`
        },
        body: JSON.stringify(form)
      });
      // Navigate regardless of API fail in MVP, to keep flow moving
      setTimeout(() => {
        navigate('/dashboard');
      }, 800);
    } catch (err) {
      navigate('/dashboard');
    }
  };

  if (step === 1) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--zen-gray-50)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          
          {/* Header */}
          <div className="flex items-center gap-2 mb-12">
            <div style={{ width: 32, height: 32, background: 'var(--zen-green)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'var(--zen-dark)' }}>Zen G</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: 60 }}>
            {/* Left Col */}
            <div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 700, color: 'var(--zen-dark)', lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em' }}>
                Build clarity about your <br/><span style={{ color: 'var(--zen-green)', fontStyle: 'italic', fontWeight: 600 }}>financial future.</span>
              </h1>
              <p style={{ fontSize: 16, color: 'var(--zen-gray-600)', lineHeight: 1.6, marginBottom: 40 }}>
                No spreadsheets. No anxiety. Just a calm, editorial approach to managing your wealth and reaching your freedom.
              </p>
              <div style={{ background: 'var(--zen-green-muted)', height: 260, borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div style={{ fontSize: 80 }}>🪴</div>
              </div>
            </div>

            {/* Right Col */}
            <div>
              {/* Stepper */}
              <div className="step-bar">
                <div className="step-dot active">1</div>
                <div className="step-line"></div>
                <div className="step-dot">2</div>
                <div className="step-line"></div>
                <div className="step-dot">3</div>
              </div>
              <div className="flex justify-between mb-8" style={{ marginTop: '-24px', padding: '0 8px' }}>
                <div className="step-label">Identity</div>
                <div className="step-label">Visions</div>
                <div className="step-label">Habits</div>
              </div>

              {/* Mode Selection */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div 
                  className={`mode-card ${form.onboarding_mode === 'quick_start' ? 'selected' : ''}`}
                  onClick={() => setForm(p => ({ ...p, onboarding_mode: 'quick_start' }))}
                >
                  <div className="mode-card-icon">⚡</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>Quick Start</h3>
                  <p style={{ fontSize: 13, color: 'var(--zen-gray-500)' }}>Get an estimate in 2 minutes.</p>
                </div>
                <div 
                  className={`mode-card ${form.onboarding_mode === 'complete_analysis' ? 'selected' : ''}`}
                  onClick={() => setForm(p => ({ ...p, onboarding_mode: 'complete_analysis' }))}
                >
                  <div className="mode-card-icon" style={{ background: 'var(--zen-dark)' }}>📊</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>Complete Analysis</h3>
                  <p style={{ fontSize: 13, color: 'var(--zen-gray-500)' }}>Deep dive into your trajectory.</p>
                </div>
              </div>

              {/* Form Basics */}
              <div className="card card-pad mb-8">
                <h3 className="text-lg font-bold mb-6">The Basics</h3>
                <div className="grid grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="input-label">Full Name</label>
                    <input className="input" type="text" value={user?.name || ''} readOnly style={{ background: 'var(--zen-gray-50)' }} />
                  </div>
                  <div>
                    <label className="input-label">Current Age</label>
                    <input className="input" type="number" name="age" value={form.age} onChange={handleChange} placeholder="e.g. 24" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="input-label">Occupation</label>
                    <input className="input" type="text" name="occupation" value={form.occupation} onChange={handleChange} placeholder="e.g. Designer" />
                  </div>
                  <div>
                    <label className="input-label">Annual Income</label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                      <input className="input" style={{ paddingLeft: 24 }} type="number" name="monthly_income" value={form.monthly_income} onChange={handleChange} placeholder="85,000" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="input-label">Liquid Savings</label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                      <input className="input" style={{ paddingLeft: 24 }} type="number" name="liquid_savings" value={form.liquid_savings} onChange={handleChange} placeholder="12,500" />
                    </div>
                  </div>
                  <div>
                    <label className="input-label">Monthly Debt</label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                      <input className="input" style={{ paddingLeft: 24 }} type="number" name="monthly_debt" value={form.monthly_debt} onChange={handleChange} placeholder="450" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Goals */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-2">What are you building for?</h3>
                <p className="text-sm text-muted mb-4">Select all that apply to your long-term vision.</p>
                <div className="flex flex-wrap gap-2">
                  {['Travel', 'Emergency fund', 'Family support', 'Home', 'Freedom', 'Retirement'].map(g => (
                    <div 
                      key={g} 
                      className={`chip ${form.goals.includes(g) ? 'active' : ''}`}
                      onClick={() => toggleGoal(g)}
                    >
                      {g}
                    </div>
                  ))}
                </div>
              </div>

              {/* Habits */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Your Habit Profile</h3>
                
                <div className="bg-white p-5 rounded-xl border mb-4">
                  <div className="text-xs font-bold text-green mb-2 tracking-wide">SPENDING STYLE</div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">"I enjoy treating myself when I feel I've earned it."</p>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(v => (
                        <div 
                          key={v}
                          onClick={() => setForm(p => ({ ...p, spending_style: v }))}
                          style={{
                            width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--zen-gray-200)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, cursor: 'pointer',
                            background: form.spending_style === v ? 'var(--zen-green)' : 'transparent',
                            color: form.spending_style === v ? 'white' : 'var(--zen-gray-700)',
                            borderColor: form.spending_style === v ? 'var(--zen-green)' : 'var(--zen-gray-200)'
                          }}
                        >{v}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border">
                  <div className="text-xs font-bold text-green mb-2 tracking-wide">RISK COMFORT</div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">"I prefer slow, steady growth over high volatility."</p>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(v => (
                        <div 
                          key={v}
                          onClick={() => setForm(p => ({ ...p, risk_comfort: v }))}
                          style={{
                            width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--zen-gray-200)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, cursor: 'pointer',
                            background: form.risk_comfort === v ? 'var(--zen-green)' : 'transparent',
                            color: form.risk_comfort === v ? 'white' : 'var(--zen-gray-700)',
                            borderColor: form.risk_comfort === v ? 'var(--zen-green)' : 'var(--zen-gray-200)'
                          }}
                        >{v}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <button 
                className="btn btn-primary w-full btn-lg mb-4"
                onClick={handleFinish}
                disabled={loading}
              >
                {loading ? 'Analyzing your profile...' : 'Start My Journey'}
              </button>
              
              <p className="text-xs text-center text-muted">
                By continuing, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
              </p>

            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
