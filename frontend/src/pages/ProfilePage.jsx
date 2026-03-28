import { useState } from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../App';

export default function ProfilePage() {
  const { user } = useAuth();
  const [tone, setTone] = useState('friendly');

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
      </div>

      <div className="grid grid-cols-12 gap-8 mb-8">
        {/* Profile Card */}
        <div className="col-span-4 card card-pad flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-full border-4 border-green flex items-center justify-center text-5xl bg-gray-50 text-gray-400">
              <span className="opacity-50">👤</span>
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-green text-white rounded-full flex items-center justify-center border-2 border-white shadow-sm hover:scale-105 transition">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </button>
          </div>
          
          <h2 className="text-2xl font-bold mb-1">{user?.name || 'Alex Rivera'}</h2>
          <p className="text-gray-500 mb-6">{user?.email || 'alex.rivera@zeng.io'}</p>
          
          <div className="flex gap-2">
            <div className="badge bg-blue-50 text-blue-700 border-none font-bold">PRO MEMBER</div>
            <div className="badge bg-green-50 text-green-700 border-none font-bold">ZEN LEVEL 4</div>
          </div>
        </div>

        {/* Archetype Card */}
        <div className="col-span-8 p-10 rounded-3xl" style={{ background: 'linear-gradient(135deg, #e8f5ee 0%, #d1ebe0 100%)' }}>
          <div className="text-xs font-bold text-green tracking-widest uppercase mb-2">FINANCIAL ARCHETYPE</div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">The Balanced Strategist</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-2xl">
            You prioritize long-term growth without sacrificing the occasional high-quality indulgence. Your risk-reward ratio is in the top 5% of your peers.
          </p>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white/60 p-5 rounded-2xl">
              <div className="text-xs font-bold text-gray-500 tracking-wider mb-2">PRUDENCE</div>
              <div className="text-2xl font-bold text-green">88%</div>
            </div>
            <div className="bg-white/60 p-5 rounded-2xl">
              <div className="text-xs font-bold text-gray-500 tracking-wider mb-2">AGILITY</div>
              <div className="text-2xl font-bold text-blue-600">64%</div>
            </div>
            <div className="bg-white/60 p-5 rounded-2xl">
              <div className="text-xs font-bold text-gray-500 tracking-wider mb-2">VISION</div>
              <div className="text-2xl font-bold text-red-700">92%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 mb-8">
        
        {/* FinCoach Tone */}
        <div className="col-span-6 card card-pad">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold flex items-center gap-2"><span className="text-green">🤖</span> FinCoach AI Tone</h3>
            <div className="badge bg-gray-100 text-gray-600 font-bold border-none">ACTIVE</div>
          </div>

          <div className="flex gap-4 mb-6">
            <div 
              className={`flex-1 p-4 rounded-xl text-center cursor-pointer transition ${tone==='strict'?'border-2 border-gray-900 bg-gray-50':'border border-gray-200'}`}
              onClick={()=>setTone('strict')}
            >
              <div className="text-xl mb-2">📏</div>
              <div className="text-sm font-bold">STRICT</div>
            </div>
            <div 
              className={`flex-1 p-4 rounded-xl text-center cursor-pointer transition ${tone==='friendly'?'border-2 border-green bg-green-50 text-green-900':'border border-gray-200'}`}
              onClick={()=>setTone('friendly')}
            >
              <div className="text-xl mb-2">💚</div>
              <div className="text-sm font-bold">FRIENDLY</div>
            </div>
            <div 
              className={`flex-1 p-4 rounded-xl text-center cursor-pointer transition ${tone==='motivational'?'border-2 border-orange-500 bg-orange-50':'border border-gray-200'}`}
              onClick={()=>setTone('motivational')}
            >
              <div className="text-xl mb-2">⚡</div>
              <div className="text-sm font-bold">MOTIVATIONAL</div>
            </div>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-green text-gray-600 italic text-sm leading-relaxed relative">
            "Hey Alex! You're doing great with your savings. Maybe we can find a slightly better way to manage those late-night delivery orders?"
            <div className="mt-4 text-[10px] font-bold text-gray-400 tracking-widest uppercase not-italic">— CURRENT TONE PREVIEW</div>
          </div>
        </div>

        {/* Blind Spot Analysis */}
        <div className="col-span-6 card card-pad">
          <h3 className="text-xl font-bold flex items-center gap-2 mb-6"><span className="text-red">👁️‍🗨️</span> Blind Spot Analysis</h3>
          
          <div className="space-y-4 mb-6">
            <div className="bg-red-50 p-4 rounded-xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white text-red flex items-center justify-center text-xl shadow-sm">📺</div>
              <div>
                <h4 className="font-bold text-gray-900">Ghost Subscriptions</h4>
                <p className="text-xs text-red-800">3 unused apps costing $42/mo found.</p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white text-orange-500 flex items-center justify-center text-xl shadow-sm">🕛</div>
              <div>
                <h4 className="font-bold text-gray-900">After-Hours Spending</h4>
                <p className="text-xs text-orange-800">24% of impulse buys happen after 11 PM.</p>
              </div>
            </div>
          </div>

          <button className="btn w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold border-none transition">
            Generate Deep Dive Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 mb-8">
        
        {/* Integrations */}
        <div className="col-span-8 card card-pad">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">App Integrations</h3>
            <button className="text-sm font-bold text-green">+ Add New</button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border border-gray-100 bg-gray-50 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-900 rounded-lg text-white font-bold text-[10px] flex items-center justify-center shadow-lg">CHASE</div>
                <div>
                  <h4 className="font-bold text-sm">Chase Primary</h4>
                  <p className="text-xs text-gray-500">Checking • 4821</p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-green text-white flex items-center justify-center text-xs">✓</div>
            </div>

            <div className="border border-gray-100 bg-gray-50 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg text-white font-bold text-[10px] flex items-center justify-center shadow-lg">UPI</div>
                <div>
                  <h4 className="font-bold text-sm">UPI Payments</h4>
                  <p className="text-xs text-gray-500">Auto-sync active</p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-green text-white flex items-center justify-center text-xs">✓</div>
            </div>

            <div className="border border-dashed border-gray-300 bg-white rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3 opacity-60">
                <div className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">📈</div>
                <div>
                  <h4 className="font-bold text-sm">Robinhood</h4>
                  <p className="text-xs text-gray-500">Connect Portfolio</p>
                </div>
              </div>
              <button className="badge bg-gray-100 text-gray-500 font-bold border-none">LINK</button>
            </div>

            <div className="border border-dashed border-gray-300 bg-white rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3 opacity-60">
                <div className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">🏦</div>
                <div>
                  <h4 className="font-bold text-sm">Betterment</h4>
                  <p className="text-xs text-gray-500">Connect Savings</p>
                </div>
              </div>
              <button className="badge bg-gray-100 text-gray-500 font-bold border-none">LINK</button>
            </div>
          </div>
        </div>

        {/* Personalization */}
        <div className="col-span-4 card card-pad">
          <h3 className="text-xl font-bold mb-6">Personalization</h3>

          <div className="space-y-6 mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-bold text-sm">Dark Mode</h4>
                <p className="text-xs text-gray-500">Follow system preference</p>
              </div>
              <div className="w-10 h-6 bg-gray-200 rounded-full relative cursor-pointer">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-bold text-sm">Focus Mode</h4>
                <p className="text-xs text-gray-500">Hide non-critical balances</p>
              </div>
              <div className="w-10 h-6 bg-green rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-bold text-sm">Smart Alerts</h4>
                <p className="text-xs text-gray-500">Predictive notification logic</p>
              </div>
              <div className="w-10 h-6 bg-green rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition" />
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold text-gray-500 tracking-wider mb-3">ACCENT COLOR</div>
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-green cursor-pointer shadow-sm border-2 border-green ring-2 ring-transparent hover:ring-green/30" />
              <div className="w-6 h-6 rounded-full bg-blue-600 cursor-pointer shadow-sm hover:scale-110 transition" />
              <div className="w-6 h-6 rounded-full bg-red cursor-pointer shadow-sm hover:scale-110 transition" />
              <div className="w-6 h-6 rounded-full bg-purple-600 cursor-pointer shadow-sm hover:scale-110 transition" />
            </div>
          </div>

        </div>

      </div>
    </Layout>
  );
}
