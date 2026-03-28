import Layout from '../components/Layout';

export default function GoalsPage() {
  return (
    <Layout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">The Sanctuary</h1>
          <p className="text-muted text-base">Your long-term horizon, curated and intentional.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-200">
            <span>👥</span> Family Mode
          </div>
          <button className="btn btn-primary">
            + New Goal Vault
          </button>
        </div>
      </div>

      {/* Goal Vaults */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="card card-pad hover:-translate-y-1 transition duration-300">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center text-2xl mb-4">🛬</div>
          <h3 className="text-xl font-bold mb-1">Tokyo 2025</h3>
          <p className="text-sm text-gray-500 mb-6 h-10">Cherry Blossom Season trip</p>
          
          <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
            <span className="text-gray-900">$4,200 <span className="text-gray-400 font-normal">/ $6,000</span></span>
            <span className="text-blue-600">70%</span>
          </div>
          <div className="progress-bar mb-4"><div className="progress-fill bg-blue-500" style={{ width: '70%' }} /></div>
          
          <p className="text-xs text-gray-400 font-medium italic">On track to finish by March</p>
        </div>

        <div className="card card-pad hover:-translate-y-1 transition duration-300">
          <div className="w-12 h-12 rounded-xl bg-green-50 text-green flex items-center justify-center text-2xl mb-4">🛡️</div>
          <h3 className="text-xl font-bold mb-1">Peace of Mind</h3>
          <p className="text-sm text-gray-500 mb-6 h-10">6-month safety net</p>
          
          <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
            <span className="text-gray-900">$12,500 <span className="text-gray-400 font-normal">/ $15,000</span></span>
            <span className="text-green">83%</span>
          </div>
          <div className="progress-bar mb-4"><div className="progress-fill bg-green" style={{ width: '83%' }} /></div>
          
          <p className="text-xs text-gray-400 font-medium italic">Automated monthly deposit of $400</p>
        </div>

        <div className="card card-pad hover:-translate-y-1 transition duration-300">
          <div className="w-12 h-12 rounded-xl bg-red-50 text-red flex items-center justify-center text-2xl mb-4">🏠</div>
          <h3 className="text-xl font-bold mb-1">The Loft</h3>
          <p className="text-sm text-gray-500 mb-6 h-10">Down payment savings</p>
          
          <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
            <span className="text-gray-900">$24,000 <span className="text-gray-400 font-normal">/ $80,000</span></span>
            <span className="text-green">30%</span>
          </div>
          <div className="progress-bar mb-4"><div className="progress-fill bg-green" style={{ width: '30%' }} /></div>
          
          <div className="flex gap-2">
            <div className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-[10px] font-bold tracking-wider">CO-FUNDED</div>
            <div className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-[10px] font-bold tracking-wider">LONG TERM</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 mb-8">
        
        {/* Log Life Update */}
        <div className="col-span-4 flex flex-col gap-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Log Life Update</h3>
              <div className="w-5 h-5 bg-gray-200 rounded-full text-xs flex items-center justify-center font-bold text-gray-500 cursor-pointer">i</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card p-4 text-center cursor-pointer hover:border-green hover:shadow-sm transition">
                <div className="text-2xl mb-2 text-green">📈</div>
                <div className="text-sm font-bold text-gray-700">Salary Bump</div>
              </div>
              <div className="card p-4 text-center cursor-pointer hover:border-blue-500 hover:shadow-sm transition">
                <div className="text-2xl mb-2 text-blue-500">💼</div>
                <div className="text-sm font-bold text-gray-700">Job Change</div>
              </div>
              <div className="card p-4 text-center cursor-pointer hover:border-red hover:shadow-sm transition">
                <div className="text-2xl mb-2 text-red">❤️</div>
                <div className="text-sm font-bold text-gray-700">Marriage</div>
              </div>
              <div className="card p-4 text-center cursor-pointer hover:border-gray-500 hover:shadow-sm transition">
                <div className="text-2xl mb-2 text-gray-500">🏥</div>
                <div className="text-sm font-bold text-gray-700">Health Issue</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-6 text-white shadow-lg bg-blue-600" style={{ background: 'linear-gradient(135deg, #2563eb, #1e40af)' }}>
            <h4 className="font-bold text-lg mb-2">Family Synergy</h4>
            <p className="text-sm text-blue-100 mb-4 leading-relaxed">
              Maya's bonus was just added to the "The Loft" vault. You are now 4 months ahead of schedule.
            </p>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-300 border-2 border-blue-600 flex items-center justify-center text-xs">A</div>
              <div className="w-8 h-8 rounded-full bg-pink-300 border-2 border-blue-600 flex items-center justify-center text-xs">M</div>
            </div>
          </div>
        </div>

        {/* Evolution Timeline */}
        <div className="col-span-8 card card-pad relative">
          <h3 className="text-xl font-bold mb-8">Evolution Timeline</h3>
          
          <div className="absolute top-24 bottom-10 left-[43px] w-[2px] bg-gray-100" />

          <div className="space-y-10 relative">
            
            <div className="flex gap-6 relative">
              <div className="w-10 h-10 rounded-full border-2 border-green bg-white flex items-center justify-center text-green z-10">✨</div>
              <div className="flex-1">
                <div className="text-xs font-bold text-green tracking-widest uppercase mb-1">JUNE 2025 • PROJECTED</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Goal Achieved: Tokyo 2025</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Based on current savings rate and planned $500 April boost. Estimated liquid assets: $28,400.
                </p>
              </div>
            </div>

            <div className="flex gap-6 relative">
              <div className="w-10 h-10 rounded-full border-2 border-blue-500 bg-white flex items-center justify-center text-blue-500 z-10">📈</div>
              <div className="flex-1">
                <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">JANUARY 2024 • EVENT LOGGED</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">15% Salary Increase</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Promotion to Senior Design Lead. Redirected 60% of delta to "Home Deposit" vault. Retirement forecast improved by 3 years.
                </p>
              </div>
            </div>

            <div className="flex gap-6 relative">
              <div className="w-10 h-10 rounded-full border-2 border-red bg-white flex items-center justify-center text-red z-10">❤️</div>
              <div className="flex-1">
                <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">OCTOBER 2023 • LIFE UPDATE</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Joined Finances with Maya</h4>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Unified "The Loft" goal. Combined monthly contribution increased to $1,800/mo. Shared safety net established.
                </p>
                <div className="flex gap-4">
                  <div className="bg-gray-50 rounded-lg p-3 flex-1 border border-gray-100">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">IMPACT</div>
                    <div className="font-bold text-green">+42% Growth Velocity</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 flex-1 border border-gray-100">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">RISK</div>
                    <div className="font-bold text-red">-15% Volatility</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-6 relative">
              <div className="w-10 h-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center text-gray-400 z-10">🎓</div>
              <div className="flex-1 opacity-60">
                <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">AUGUST 2022 • START</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Student Loan Clearance</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Final payment made. Redirected former loan payment ($450) to start "Emergency Fund".
                </p>
              </div>
            </div>

            <button className="absolute right-0 top-[40%] w-12 h-12 rounded-full bg-green text-white flex items-center justify-center text-2xl shadow-lg hover:bg-green-mid hover:scale-105 transition">
              +
            </button>
          </div>
        </div>

      </div>

      {/* AI Insight Section */}
      <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 flex gap-8 items-center mb-10">
        <div className="w-64 h-64 bg-green rounded-2xl flex-shrink-0 bg-cover bg-center overflow-hidden">
          {/* using a placeholder visual instead of an actual image */}
          <div className="w-full h-full bg-[linear-gradient(wrap_around)]" style={{ background: 'linear-gradient(to bottom, #0a3d22, #1a5c38)', display:'flex', alignItems: 'center', justifyContent:'center' }}>
            <span className="text-6xl text-white opacity-20">🌲</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="badge badge-green px-3 py-1 mb-4 text-[10px] tracking-widest font-extrabold uppercase shadow-sm inline-flex">FINCOACH AI INSIGHT</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 max-w-lg leading-tight">
            You're building more than wealth; <span className="font-extrabold text-green text-[32px]">you're building freedom.</span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-xl">
            Based on your current trajectory and the "Marriage" update, you can afford to increase your "Tokyo 2025" daily budget by 20% without delaying "The Loft" by more than two weeks. Shall we adjust your vaults?
          </p>
          <div className="flex items-center gap-4">
            <button className="btn btn-primary px-8 btn-lg">Adjust Vaults</button>
            <button className="btn btn-ghost bg-gray-200 text-gray-700 px-8 btn-lg font-bold">Keep as is</button>
          </div>
        </div>
      </div>

    </Layout>
  );
}
