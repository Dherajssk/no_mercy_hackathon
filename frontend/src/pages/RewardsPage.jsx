import Layout from '../components/Layout';

export default function RewardsPage() {
  return (
    <Layout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Rewards</h1>
          <p className="text-muted text-base">Keep the momentum going.</p>
        </div>
        <div className="badge badge-green px-4 py-2 text-sm font-bold shadow-sm flex items-center gap-2">
          <span>⭐</span> 2,450 XP
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-8">
        {/* Status Card */}
        <div className="col-span-8 card card-pad relative overflow-hidden flex flex-col justify-center">
          <div className="absolute right-4 top-4 text-7xl opacity-5">🎖️</div>
          <div className="badge badge-green inline-flex self-start mb-4 uppercase tracking-widest text-[10px]">CURRENT STATUS</div>
          <h2 className="text-4xl font-black mb-2">Level 24</h2>
          <p className="text-gray-600 mb-8 max-w-sm">
            You're in the top 5% of savers this month. Keep the momentum going to unlock Platinum Tier.
          </p>
          
          <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
            <span>Progress to Level 25</span>
            <span className="text-green">850 / 1000 XP</span>
          </div>
          <div className="xp-bar mb-2">
            <div className="xp-fill w-[85%]" />
          </div>
        </div>

        {/* Streak Card */}
        <div className="col-span-4 rounded-3xl p-8 flex flex-col items-center justify-center text-white" style={{ background: 'linear-gradient(135deg, #2980b9 0%, #1e5c8a 100%)' }}>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 backdrop-blur-md">
            🔥
          </div>
          <div className="text-5xl font-black mb-1">14</div>
          <div className="text-lg font-bold mb-4">Day Saving Streak</div>
          <div className="text-sm font-medium text-white/80">Personal Best: 21 days</div>
          <div className="flex gap-1.5 mt-6">
            {[1,1,1,1,1,1,0].map((v, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${v ? 'bg-white' : 'bg-white/30'}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Active Challenges */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Active Challenges</h3>
            <p className="text-sm text-gray-500">Complete tasks to earn bonus multipliers</p>
          </div>
          <button className="text-sm font-bold text-green hover:underline">View All →</button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Challenge 1 */}
          <div className="card card-pad hover:-translate-y-1 transition duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green text-xl mb-4">🏦</div>
            <h4 className="font-bold text-lg mb-2">The 5-Day Save</h4>
            <p className="text-sm text-gray-500 mb-6 flex-1 min-h-[40px]">Deposit at least $5 every day for 5 days straight.</p>
            
            <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
              <span>4 of 5 days</span><span className="text-green">80%</span>
            </div>
            <div className="progress-bar mb-4"><div className="progress-fill" style={{ width: '80%' }} /></div>
            
            <div className="flex gap-2">
              <span className="badge badge-green">+250 XP</span>
              <span className="badge badge-blue">Badge</span>
            </div>
          </div>

          {/* Challenge 2 */}
          <div className="card card-pad hover:-translate-y-1 transition duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red text-xl mb-4">🍔</div>
            <h4 className="font-bold text-lg mb-2">Zero Delivery Week</h4>
            <p className="text-sm text-gray-500 mb-6 flex-1 min-h-[40px]">Avoid food delivery apps for 7 days. Cook at home!</p>
            
            <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
              <span>2 of 7 days</span><span className="text-red">28%</span>
            </div>
            <div className="progress-bar mb-4"><div className="progress-fill bg-red" style={{ width: '28%' }} /></div>
            
            <div className="flex gap-2">
              <span className="badge badge-green">+500 XP</span>
            </div>
          </div>

          {/* Challenge 3 */}
          <div className="card card-pad hover:-translate-y-1 transition duration-300 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 text-xl mb-4">🎯</div>
            <h4 className="font-bold text-lg mb-2">Hit the Target</h4>
            <p className="text-sm text-gray-500 mb-6 flex-1 min-h-[40px]">Reach 50% of your 'Summer Trip' goal this month.</p>
            
            <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
              <span>$450 of $500</span><span className="text-blue-500">90%</span>
            </div>
            <div className="progress-bar mb-4"><div className="progress-fill bg-blue-500" style={{ width: '90%' }} /></div>
            
            <div className="flex gap-2">
              <span className="badge badge-green">+1,000 XP</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 mb-8">
        {/* Unlocked Badges */}
        <div className="col-span-8">
          <h3 className="text-2xl font-bold mb-6">Unlocked Badges</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="badge-card border-none bg-yellow-50">
              <div className="w-14 h-14 bg-yellow-400 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3 shadow-lg shadow-yellow-400/40">⭐</div>
              <div className="text-[10px] font-bold text-yellow-800 tracking-wider">FIRST SAVE</div>
            </div>
            <div className="badge-card border-none bg-green-50">
              <div className="w-14 h-14 bg-green text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3 shadow-lg shadow-green/40">🍃</div>
              <div className="text-[10px] font-bold text-green tracking-wider">GREEN WARRIOR</div>
            </div>
            <div className="badge-card border-none bg-blue-50">
              <div className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3 shadow-lg shadow-blue-500/40">⚡</div>
              <div className="text-[10px] font-bold text-blue-700 tracking-wider">POWER SAVER</div>
            </div>
            <div className="badge-card border-dashed border-2 bg-gray-50 flex flex-col justify-center items-center opacity-60">
              <span className="text-gray-400 text-2xl mb-2">🔒</span>
              <div className="text-[10px] font-bold text-gray-400 tracking-wider">???</div>
            </div>
            {/* Row 2 */}
            <div className="badge-card border-dashed border-2 bg-gray-50 flex flex-col justify-center items-center opacity-60">
              <span className="text-gray-400 text-2xl mb-2">🔒</span>
              <div className="text-[10px] font-bold text-gray-400 tracking-wider">???</div>
            </div>
            <div className="badge-card border-dashed border-2 bg-gray-50 flex flex-col justify-center items-center opacity-60">
              <span className="text-gray-400 text-2xl mb-2">🔒</span>
              <div className="text-[10px] font-bold text-gray-400 tracking-wider">???</div>
            </div>
            <div className="badge-card border-dashed border-2 bg-gray-50 flex flex-col justify-center items-center opacity-60">
              <span className="text-gray-400 text-2xl mb-2">🔒</span>
              <div className="text-[10px] font-bold text-gray-400 tracking-wider">???</div>
            </div>
            <div className="badge-card border border-red-200 bg-white relative cursor-pointer hover:scale-105 transition shadow-sm">
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green" />
              <div className="w-14 h-14 bg-red text-white flex items-center justify-center text-2xl mx-auto mb-3 rounded-lg shadow-lg shadow-red/30">🎁</div>
              <div className="text-[10px] font-bold text-gray-900 tracking-wider">SECRET GIFT</div>
            </div>
          </div>
        </div>

        {/* Global Savers Leaderboard */}
        <div className="col-span-4 card card-pad">
          <h3 className="text-xl font-bold mb-6">Global Savers</h3>
          <div className="space-y-4">
            {[
              { rank: 1, name: 'StealthySaver', lvl: 52, xp: '12,400', color: 'bg-green' },
              { rank: 2, name: 'BudgetNinja', lvl: 48, xp: '11,200', color: 'bg-blue-500' },
            ].map((usr) => (
              <div key={usr.rank} className="flex items-center gap-3 p-2 rounded-lg">
                <div className="font-bold text-gray-400 w-4 text-center">{usr.rank}</div>
                <div className={`w-10 h-10 rounded-full text-white flex items-center justify-center text-xs font-bold ${usr.color}`}>
                  {usr.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm">{usr.name}</div>
                  <div className="text-xs text-gray-500">Level {usr.lvl}</div>
                </div>
                <div className="text-sm font-bold text-gray-900">{usr.xp} XP</div>
              </div>
            ))}

            {/* Current user */}
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-200 shadow-sm relative -mx-2">
              <div className="font-bold text-green-700 w-4 text-center">12</div>
              <div className="w-10 h-10 rounded-full border-2 border-green bg-white flex items-center justify-center text-xl font-bold shadow-sm text-green">
                A
              </div>
              <div className="flex-1">
                <div className="font-bold text-green-900 text-sm">You</div>
                <div className="text-xs text-green-700">Level 24</div>
              </div>
              <div className="text-sm font-bold text-green-900">2,450 XP</div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg">
              <div className="font-bold text-gray-400 w-4 text-center">13</div>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">Z</div>
              <div className="flex-1">
                <div className="font-bold text-sm text-gray-600">ZenMaster99</div>
                <div className="text-xs text-gray-500">Level 22</div>
              </div>
              <div className="text-sm font-bold text-gray-600">2,380 XP</div>
            </div>
          </div>

          <button className="btn btn-secondary w-full mt-6 bg-gray-100 border-none text-sm font-bold">Full Leaderboard</button>
        </div>
      </div>

      {/* Claim Reward Banner */}
      <div className="rounded-3xl p-10 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--zen-dark) 0%, var(--zen-green) 100%)' }}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400 via-transparent to-transparent blend-overlay"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-2">Claim Your Weekly Reward</h2>
          <p className="text-green-muted mb-8 text-base font-medium max-w-md mx-auto">
            You've reached your savings target 3 weeks in a row. Open your mystery box to see what's inside!
          </p>
          <button className="btn bg-white text-green font-bold text-lg px-8 py-3 shadow-xl hover:scale-105 transition hover:shadow-green/50">
            Reveal My Reward
          </button>
        </div>
      </div>

    </Layout>
  );
}
