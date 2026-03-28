import { useState } from 'react';
import Layout from '../components/Layout';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

const projectionData = [
  { age: 25, current: 0, improved: 0 },
  { age: 35, current: 1.2, improved: 2.5 },
  { age: 45, current: 3.5, improved: 6.8 },
  { age: 55, current: 5.8, improved: 10.4 },
  { age: 65, current: 8.2, improved: 12.4 },
];

export default function SimulatorPage() {
  const [scenario, setScenario] = useState('base'); // base, optimistic, pessimistic
  
  // Sliders state (mock)
  const [levers, setLevers] = useState({
    savings: 25,
    expenses: 45,
    income: 1.2,
    roi: 12
  });

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          See where your <span className="text-green">habits</span> take you
        </h1>
        <p className="text-muted text-lg max-w-2xl">
          Your daily choices are compounding into your future reality. Adjust the levers to find your financial zen.
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex bg-gray-100 p-1 rounded-xl">
          <button className={`px-6 py-2 rounded-lg text-sm font-bold transition ${scenario==='base'?'bg-white shadow-sm':'text-gray-500'}`} onClick={()=>setScenario('base')}>Base</button>
          <button className={`px-6 py-2 rounded-lg text-sm font-bold transition ${scenario==='optimistic'?'bg-white shadow-sm':'text-gray-500'}`} onClick={()=>setScenario('optimistic')}>Optimistic</button>
          <button className={`px-6 py-2 rounded-lg text-sm font-bold transition ${scenario==='pessimistic'?'bg-white shadow-sm':'text-gray-500'}`} onClick={()=>setScenario('pessimistic')}>Pessimistic</button>
        </div>
        <div className="flex gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
          <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-red" /> Current Path</div>
          <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-green" /> Improved Path</div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-8">
        
        {/* Main Chart Card */}
        <div className="col-span-8 card card-pad flex flex-col pt-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="text-xs font-bold text-gray-500 mb-1 tracking-wider">PROJECTED NET WORTH</div>
              <div className="text-3xl font-extrabold text-gray-900">₹12.4 Cr</div>
            </div>
            <div className="badge badge-green px-3 py-1.5">+₹4.2 Cr Difference</div>
          </div>

          <div className="flex-1" style={{ height: 260, margin: '0 -16px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={projectionData} margin={{ top: 20, right: 30, left: 30, bottom: 0 }}>
                <defs>
                  <linearGradient id="improvedColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--zen-green)" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="var(--zen-green)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="current" stroke="var(--zen-red)" strokeWidth={4} fill="none" />
                <Area type="monotone" dataKey="improved" stroke="var(--zen-green)" strokeWidth={5} fill="url(#improvedColor)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex justify-between px-8 text-xs font-bold text-gray-400 mt-2">
            <span>AGE 25 (NOW)</span><span>35</span><span>45</span><span>55</span><span>65</span>
          </div>
        </div>

        {/* Right Info Cards */}
        <div className="col-span-4 flex flex-col gap-5">
          <div className="card p-6 flex-1 flex flex-col justify-center">
            <div className="text-xs font-bold text-gray-500 tracking-wider mb-1">WEALTH AT AGE 60</div>
            <div className="text-3xl font-bold mb-2">₹8.2 Cr</div>
            <div className="text-sm font-bold text-green flex items-center gap-1">↗ Early by 4 years</div>
          </div>
          <div className="card p-6 flex-1 flex flex-col justify-center">
            <div className="text-xs font-bold text-gray-500 tracking-wider mb-1">PASSIVE INCOME</div>
            <div className="text-3xl font-bold mb-2">₹4.5L <span className="text-lg text-gray-400 font-medium">/mo</span></div>
            <div className="text-sm text-gray-600">Fully covering lifestyle at 48</div>
          </div>
          <div className="card-green p-6 flex-1 flex flex-col justify-center shadow-green">
            <div className="text-xs font-bold text-green-muted tracking-wider mb-1">FREEDOM AGE</div>
            <div className="text-4xl font-extrabold mb-2">42</div>
            <div className="text-sm text-green-pale">Based on improved savings strategy</div>
          </div>
        </div>

      </div>

      {/* Sliders & Wisdom grid */}
      <div className="grid grid-cols-12 gap-8 mb-8">
        
        {/* Sliders */}
        <div className="col-span-5 bg-gray-50 p-8 rounded-3xl border border-gray-100">
          <h3 className="text-2xl font-bold mb-2">Adjust the Levers</h3>
          <p className="text-sm text-gray-500 mb-8">Simulate changes in your lifestyle to see immediate impact.</p>

          <div className="space-y-6 mb-8">
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-bold flex items-center gap-2"><span className="text-green">💸</span> Savings Rate</div>
                <div className="font-bold">{levers.savings}%</div>
              </div>
              <input type="range" className="w-full accent-green-600 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                value={levers.savings} onChange={e=>setLevers(p=>({...p, savings: e.target.value}))} min="0" max="80" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-bold flex items-center gap-2"><span className="text-green">🛒</span> Monthly Expenses</div>
                <div className="font-bold">₹{levers.expenses}k</div>
              </div>
              <input type="range" className="w-full accent-green-600 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                value={levers.expenses} onChange={e=>setLevers(p=>({...p, expenses: e.target.value}))} min="10" max="200" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-bold flex items-center gap-2"><span className="text-green">💵</span> Monthly Income</div>
                <div className="font-bold">₹{levers.income}L</div>
              </div>
              <input type="range" className="w-full accent-green-600 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                value={levers.income} onChange={e=>setLevers(p=>({...p, income: e.target.value}))} min="0.3" max="5" step="0.1" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-bold flex items-center gap-2"><span className="text-green">📈</span> Investment ROI</div>
                <div className="font-bold">{levers.roi}%</div>
              </div>
              <input type="range" className="w-full accent-green-600 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                value={levers.roi} onChange={e=>setLevers(p=>({...p, roi: e.target.value}))} min="4" max="20" />
            </div>
          </div>

          <button className="btn btn-primary w-full btn-lg">Try another scenario</button>
        </div>

        {/* Narrative Cards */}
        <div className="col-span-7 flex flex-col gap-4 justify-center">
          
          <div className="bg-red-50 p-6 rounded-2xl border border-red-100 relative">
            <div className="text-xs font-bold text-red tracking-wider mb-2 flex items-center gap-2"><span>⚠️</span> INSIGHT OF THE DAY</div>
            <h3 className="text-xl font-bold text-red-900 mb-2 max-w-sm leading-snug">"₹200/day spending can cost lakhs over time."</h3>
            <p className="text-sm text-red-800 opacity-90 leading-relaxed max-w-sm">
              That daily coffee habit compounded at 12% over 20 years is worth <b>₹15.8 Lakhs</b>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="card p-6 flex flex-col relative border-none bg-gray-50 border border-gray-100">
              <div className="text-[10px] font-bold text-red tracking-wider mb-3">CURRENT FUTURE</div>
              <div className="absolute top-6 right-6 w-10 h-10 bg-red-100 flex items-center justify-center rounded-full text-red text-xl opacity-80">😖</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Working till 68</h4>
              <p className="text-sm text-gray-500 mb-4 flex-1">Inflation beats your savings by 2038.</p>
              <div className="text-xs font-bold text-red">↘ Stressed</div>
            </div>
            <div className="card p-6 flex flex-col relative border-none bg-green-50">
              <div className="text-[10px] font-bold text-green tracking-wider mb-3">BETTER FUTURE</div>
              <div className="absolute top-6 right-6 w-10 h-10 bg-green-200 flex items-center justify-center rounded-full text-green text-xl">😌</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Freedom at 42</h4>
              <p className="text-sm text-green-900 opacity-70 mb-4 flex-1">Portfolio covers all living costs.</p>
              <div className="text-xs font-bold text-green">↗ Stable</div>
            </div>
          </div>

          <p className="text-center text-sm font-medium italic text-gray-400 mt-4 max-w-md mx-auto">
            "The best time to plant a tree was 20 years ago. The second best time is now."
          </p>

        </div>
      </div>

      {/* Table */}
      <div className="card">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-xl font-bold">Projection Breakdown</h3>
          <button className="text-sm font-bold text-green hover:underline">Download Report 📥</button>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-xs font-bold text-gray-500 tracking-wider">
                <th className="py-4 px-6 border-b border-gray-100">YEAR</th>
                <th className="py-4 px-6 border-b border-gray-100">AGE</th>
                <th className="py-4 px-6 border-b border-gray-100">CONTRIBUTIONS</th>
                <th className="py-4 px-6 border-b border-gray-100">RETURNS</th>
                <th className="py-4 px-6 border-b border-gray-100 text-right">PROJECTED BALANCE</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { year: 2024, age: 25, con: '₹3.0L', ret: '₹12.4k', bal: '₹15.2L' },
                { year: 2029, age: 30, con: '₹4.2L', ret: '₹1.8L', bal: '₹52.4L' },
                { year: 2034, age: 35, con: '₹6.5L', ret: '₹8.2L', bal: '₹1.2 Cr' },
              ].map((r, i) => (
                <tr key={r.year} className="hover:bg-gray-50 transition border-b border-gray-50 last:border-0">
                  <td className="py-4 px-6 font-medium text-gray-900">{r.year}</td>
                  <td className="py-4 px-6 text-gray-600">{r.age}</td>
                  <td className="py-4 px-6 text-gray-600">{r.con}</td>
                  <td className="py-4 px-6 text-gray-600">{r.ret}</td>
                  <td className="py-4 px-6 text-right font-bold text-green">{r.bal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </Layout>
  );
}
