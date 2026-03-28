import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useAuth } from '../App';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const dummyFutureData = [
  { age: 24, value: 45000 },
  { age: 30, value: 120000 },
  { age: 35, value: 340000 },
  { age: 40, value: 850000 },
  { age: 42, value: 1200000 }, // Freedom age
  { age: 45, value: 1500000 },
  { age: 50, value: 2400000 },
];

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Hello, {user?.name?.split(' ')[0] || 'Alex'}</h1>
        <p className="text-muted text-base">Your sanctuary is balanced. You're 4 days ahead of your savings goal.</p>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-8">
        {/* Score Card */}
        <div className="col-span-4 card card-pad flex flex-col items-center text-center">
          <div className="text-xs font-bold text-green tracking-wide mb-6 uppercase">ZENSCORE</div>
          <div className="score-ring-wrapper mb-6" style={{ width: 140, height: 140 }}>
            {/* SVG Ring */}
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
              <circle cx="50" cy="50" r="45" fill="none" stroke="var(--zen-gray-100)" strokeWidth="8" />
              <circle cx="50" cy="50" r="45" fill="none" stroke="var(--zen-green)" strokeWidth="8" strokeDasharray="283" strokeDashoffset="50" strokeLinecap="round" />
            </svg>
            <div className="score-ring-value">
              <div style={{ fontSize: 42, fontWeight: 800, color: 'var(--zen-dark)', lineHeight: 1 }}>82</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--zen-green)', marginTop: 4, letterSpacing: '.05em' }}>EXCELLENT</div>
            </div>
          </div>
          <p className="text-sm text-muted">Your financial harmony has improved by 4 points since last month.</p>
        </div>

        {/* Future Track Card */}
        <div className="col-span-8 card card-pad relative overflow-hidden flex flex-col">
          <div className="flex justify-between items-start mb-6 z-10">
            <div>
              <div className="text-xs font-bold text-gray-500 tracking-wide mb-1 uppercase">FUTURE YOU</div>
              <h3 className="text-2xl font-bold">Path to Financial Freedom</h3>
            </div>
            <div className="badge badge-green">ON TRACK</div>
          </div>
          
          <div className="flex-1 relative mt-4">
            {/* Chart */}
            <div style={{ height: 140, margin: '0 -24px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dummyFutureData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--zen-green)" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="var(--zen-green)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip contentStyle={{ borderRadius: 8, border: 'none', boxShadow: 'var(--shadow-md)' }} />
                  <Area type="monotone" dataKey="value" stroke="var(--zen-green)" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            {/* Overlay Text */}
            <div className="absolute top-4 left-0">
              <div className="text-xs text-gray-500">Projected Wealth</div>
              <div className="text-2xl font-bold" style={{ textDecoration: 'line-through', opacity: 0.5 }}>$2.4M</div>
            </div>
            <div className="absolute top-4 left-1/3">
              <div className="text-xs text-gray-500">Freedom Age</div>
              <div className="text-2xl font-bold">42</div>
            </div>
          </div>

          <div className="flex gap-3 z-10 mt-4">
            <Link to="/simulator"><button className="btn btn-primary">Run Simulator</button></Link>
            <Link to="/goals"><button className="btn btn-ghost border">Edit Goals</button></Link>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="stat-card">
          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mb-4 text-blue-600">🏦</div>
          <div className="stat-label">SAVINGS RATE</div>
          <div className="stat-value">32.4%</div>
          <div className="stat-delta positive">↗ +2.1% from last mo.</div>
        </div>
        <div className="stat-card">
          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center mb-4 text-green-600">🛡️</div>
          <div className="stat-label">EMERGENCY RUNWAY</div>
          <div className="stat-value">5.2 Months</div>
          <div className="progress-bar mt-3"><div className="progress-fill" style={{ width: '85%' }} /></div>
        </div>
        <div className="stat-card">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center mb-4 text-purple-600">🏛️</div>
          <div className="stat-label">NET INVESTMENTS</div>
          <div className="stat-value">$48,920</div>
          <div className="text-sm text-muted mt-2">3 Assets Active</div>
        </div>
        <div className="stat-card">
          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center mb-4 text-orange-600">📅</div>
          <div className="stat-label">FINANCIAL FREEDOM</div>
          <div className="stat-value">Oct 2041</div>
          <div className="text-sm text-blue-600 font-medium mt-2 flex items-center gap-1">🔒 Locked in schedule</div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Next Action */}
        <div className="col-span-8">
          <div className="card-dark p-8 relative overflow-hidden mb-6">
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-24 h-24 bg-gray-800 rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-green-400 text-4xl">⚡</span>
            </div>
            <div className="badge bg-green-900 text-green-300 border border-green-800 mb-4 inline-flex">BEST NEXT ACTION</div>
            <h3 className="text-2xl font-bold mb-3 max-w-sm">Automate your "Rainy Day" overflow.</h3>
            <p className="text-gray-400 mb-6 max-w-md text-sm leading-relaxed">
              Your checking account has $850 over your safety threshold. Moving this to your high-yield bucket could earn an extra $42/year effortlessly.
            </p>
            <button className="btn bg-white text-gray-900 hover:bg-gray-100 font-bold px-6 py-2.5 rounded-full shadow-lg">
              Execute Auto-Transfer →
            </button>
          </div>

          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Daily Nudges</h3>
            <button className="text-blue-600 text-sm font-semibold">View History</button>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="nudge-card items-center">
              <div className="nudge-icon bg-blue-50 text-blue-600">☕</div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-sm">Subscription Audit</h4>
                  <span className="text-xs text-gray-400">2h ago</span>
                </div>
                <p className="text-sm text-muted">You've spent $14.99 on 'Streaming Service X' for 3 months without use. Cancel?</p>
              </div>
            </div>
            <div className="nudge-card items-center">
              <div className="nudge-icon green">✨</div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-sm">Tax Optimization</h4>
                  <span className="text-xs text-gray-400">5h ago</span>
                </div>
                <p className="text-sm text-muted">Your current IRA contributions are slightly below the tax-advantage limit.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Spending Insights mini column */}
        <div className="col-span-4 card card-pad">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold">Spending Trend</h3>
              <p className="text-xs text-muted">Last 30 Days</p>
            </div>
            <div className="flex p-1 bg-gray-100 rounded-lg">
              <div className="px-3 py-1 bg-white shadow-sm rounded-md text-xs font-bold">W</div>
              <div className="px-3 py-1 text-gray-500 text-xs font-bold">M</div>
            </div>
          </div>

          {/* Mini chart placeholder */}
          <div style={{ height: 280 }} className="flex items-end gap-2 mb-6">
            <div className="w-1/7 bg-gray-200 rounded-t-sm h-12 flex-1" />
            <div className="w-1/7 bg-gray-200 rounded-t-sm h-24 flex-1" />
            <div className="w-1/7 bg-gray-200 rounded-t-sm h-16 flex-1" />
            <div className="w-1/7 bg-gray-200 rounded-t-sm h-32 flex-1" />
            <div className="w-1/7 bg-gray-200 rounded-t-sm h-20 flex-1" />
            <div className="w-1/7 bg-gray-200 rounded-t-sm h-48 flex-1" />
            <div className="w-1/7 bg-green rounded-t-sm h-10 flex-1 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-green rounded-full" />
            </div>
          </div>

          <div className="flex justify-between text-xs text-gray-400 mb-6 px-2">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>

          <div className="space-y-3 pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm"><span className="w-2 h-2 rounded-full bg-green" /> Essentials</div>
              <div className="font-bold text-sm">$1,120</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm"><span className="w-2 h-2 rounded-full bg-blue-500" /> Leisure</div>
              <div className="font-bold text-sm">$450</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm"><span className="w-2 h-2 rounded-full bg-red" /> Uncategorized</div>
              <div className="font-bold text-sm text-red">$120</div>
            </div>
          </div>

          <button className="absolute right-0 bottom-1/2 transform translate-x-1/2 translate-y-1/2 w-12 h-12 bg-green shadow-xl shadow-green/30 text-white rounded-full flex items-center justify-center text-2xl pb-1 hover:scale-105 transition">
            +
          </button>
        </div>
      </div>
    </Layout>
  );
}
