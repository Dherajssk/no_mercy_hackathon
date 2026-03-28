import { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import Layout from '../components/Layout';

const trajectoryData = [
  { day: 'MON', value: 400 },
  { day: 'TUE', value: 600 },
  { day: 'WED', value: 300 },
  { day: 'THU', value: 900 },
  { day: 'FRI', value: 50 },
  { day: 'SAT', value: 800 },
  { day: 'SUN', value: 400 },
];

export default function MoneyFlowPage() {
  const [filter, setFilter] = useState('weekly');

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Money Flow</h1>
        <p className="text-muted text-base">Spending intelligence for the intentional life.</p>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-6">
        {/* Monthly Velocity */}
        <div className="col-span-8 card card-pad flex items-center gap-12">
          {/* Ring Chart Mock */}
          <div className="score-ring-wrapper" style={{ width: 180, height: 180 }}>
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
              <circle cx="50" cy="50" r="40" fill="none" stroke="var(--zen-gray-100)" strokeWidth="12" />
              {/* Green part */}
              <circle cx="50" cy="50" r="40" fill="none" stroke="var(--zen-green)" strokeWidth="12" strokeDasharray="251" strokeDashoffset="100" strokeLinecap="round" />
              {/* Blue part */}
              <circle cx="50" cy="50" r="40" fill="none" stroke="#2980b9" strokeWidth="12" strokeDasharray="251" strokeDashoffset="190" strokeLinecap="round" className="transform origin-center rotate-[150deg]" />
              {/* Red part */}
              <circle cx="50" cy="50" r="40" fill="none" stroke="#e74c3c" strokeWidth="12" strokeDasharray="251" strokeDashoffset="220" strokeLinecap="round" className="transform origin-center rotate-[220deg]" />
            </svg>
            <div className="score-ring-value flex flex-col items-center">
              <span className="text-xs font-bold text-gray-400 tracking-wider">SPENT</span>
              <span className="text-2xl font-extrabold text-gray-900">$2,840</span>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
              <h3 className="text-xl font-bold">Monthly Velocity</h3>
              <div className="text-green font-bold text-sm">+4% vs last mo.</div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green" /> <span className="text-sm font-medium hover:text-green-600 transition cursor-pointer">Fixed Essentials</span></div>
                <div className="font-bold text-sm">$1,420</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-600" /> <span className="text-sm font-medium hover:text-green-600 transition cursor-pointer">Growth & Fun</span></div>
                <div className="font-bold text-sm">$840</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-400" /> <span className="text-sm font-medium hover:text-green-600 transition cursor-pointer">Miscellaneous</span></div>
                <div className="font-bold text-sm">$580</div>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="badge border bg-gray-50 hover:bg-gray-100 transition cursor-pointer">MEANINGFUL</div>
              <div className="badge border bg-gray-50 hover:bg-gray-100 transition cursor-pointer">REGRET</div>
              <div className="badge border bg-gray-50 hover:bg-gray-100 transition cursor-pointer">IMPULSE</div>
            </div>
          </div>
        </div>

        {/* Leak Detector */}
        <div className="col-span-4 rounded-3xl p-6" style={{ background: 'var(--zen-red-soft)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-red text-white flex items-center justify-center text-xl shadow-lg shadow-red/30">🩸</div>
            <h3 className="text-xl font-bold text-red-900">Leak Detector</h3>
          </div>
          <p className="text-sm text-red-800 mb-6 leading-relaxed">
            We found 3 subscriptions and habits that aren't aligning with your Zen goals.
          </p>

          <div className="space-y-3 mb-6">
            <div className="bg-white/60 p-3 rounded-xl flex justify-between items-center">
              <div>
                <div className="font-bold text-sm text-gray-900">Unused Cloud Storage</div>
                <div className="text-xs text-gray-500">Auto-renewal in 2 days</div>
              </div>
              <div className="font-bold text-red">$9.99</div>
            </div>
            <div className="bg-white/60 p-3 rounded-xl flex justify-between items-center">
              <div>
                <div className="font-bold text-sm text-gray-900">Late Night Delivery</div>
                <div className="text-xs text-gray-500">3x this week (Impulse)</div>
              </div>
              <div className="font-bold text-red">$64.20</div>
            </div>
          </div>

          <button className="btn w-full bg-red text-white hover:bg-red-700 shadow-xl shadow-red/20 py-3">Plug the Leaks</button>
        </div>
      </div>

      {/* Spending Trajectory */}
      <div className="card card-pad mb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Spending Trajectory</h3>
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button className={`px-4 py-1.5 rounded-md text-xs font-bold transition ${filter === 'weekly' ? 'bg-white shadow-sm' : 'text-gray-500'}`} onClick={() => setFilter('weekly')}>Weekly</button>
            <button className={`px-4 py-1.5 rounded-md text-xs font-bold transition ${filter === 'monthly' ? 'bg-white shadow-sm' : 'text-gray-500'}`} onClick={() => setFilter('monthly')}>Monthly</button>
          </div>
        </div>
        
        <div style={{ height: 200, margin: '0 -24px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trajectoryData} margin={{ top: 20, right: 30, left: 30, bottom: 0 }}>
              <Area type="monotone" dataKey="value" stroke="var(--zen-green)" strokeWidth={4} fill="transparent" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-between px-8 text-xs font-bold text-gray-400 mt-2">
          {trajectoryData.map(d => <span key={d.day}>{d.day}</span>)}
        </div>
      </div>

      {/* Category Tiles */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        {[
          { icon: '🍴', label: 'Food', amount: 420 },
          { icon: '🛍️', label: 'Shopping', amount: 310 },
          { icon: '🏠', label: 'Rent', amount: 1200 },
          { icon: '🚗', label: 'Transport', amount: 180 },
          { icon: '🎭', label: 'Entertainment', amount: 240 },
          { icon: '🧾', label: 'Bills', amount: 490 },
        ].map(cat => (
          <div key={cat.label} className="card p-4 hover:-translate-y-1 transition duration-300 cursor-pointer">
            <div className="text-2xl mb-3">{cat.icon}</div>
            <div className="text-xs font-bold text-gray-500 mb-1">{cat.label}</div>
            <div className="text-lg font-bold text-gray-900">${cat.amount}</div>
          </div>
        ))}
      </div>

      {/* 50/30/20 Rule */}
      <div className="card card-pad mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">The 50/30/20 Rule</h3>
          <div className="text-right">
            <div className="text-xs text-gray-500">Current Health</div>
            <div className="text-sm font-bold text-green">Stable (84%)</div>
          </div>
        </div>
        
        <div className="flex h-10 rounded-full overflow-hidden mb-6 text-xs font-bold text-white leading-10">
          <div className="bg-green px-4" style={{ width: '52%' }}>52% NEEDS</div>
          <div className="bg-blue-600 px-4" style={{ width: '28%' }}>28% WANTS</div>
          <div className="bg-green-400 px-4 text-green-900" style={{ width: '20%' }}>20% SAVED</div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 tracking-wide mb-2"><span className="w-2 h-2 rounded-full bg-green" /> NEEDS</div>
            <p className="text-sm text-gray-600">You are <span className="text-red font-bold">+2% over</span> your ideal shelter and utility cap.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 tracking-wide mb-2"><span className="w-2 h-2 rounded-full bg-blue-600" /> WANTS</div>
            <p className="text-sm text-gray-600">Great job. You have <span className="text-green font-bold">$120 left</span> for guilt-free fun this week.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 tracking-wide mb-2"><span className="w-2 h-2 rounded-full bg-green-400" /> SAVINGS</div>
            <p className="text-sm text-gray-600">Target reached. Your automated transfers are functioning perfectly.</p>
          </div>
        </div>
      </div>

      {/* Spending Intentions */}
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-4">Spending Intentions</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="card p-6 border-l-4 border-l-green">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green text-xl">💚</div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Meaningful</h4>
                <p className="text-sm text-gray-500">68% of your transactions bring long-term value.</p>
              </div>
            </div>
            <div className="badge badge-green">HEALTHY HABIT</div>
          </div>
          <div className="card p-6 border-l-4 border-l-red">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red text-xl">😩</div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Regret</h4>
                <p className="text-sm text-gray-500">12% of your spending leads to immediate regret.</p>
              </div>
            </div>
            <div className="badge badge-red">REDUCE THIS</div>
          </div>
          <div className="card p-6 border-l-4 border-l-blue-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 text-xl">⚡</div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Impulse</h4>
                <p className="text-sm text-gray-500">20% of decisions were made in under 60 seconds.</p>
              </div>
            </div>
            <div className="badge badge-blue">WATCH CLOSELY</div>
          </div>
        </div>
      </div>

    </Layout>
  );
}
