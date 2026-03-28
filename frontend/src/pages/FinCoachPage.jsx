import { useState } from 'react';
import Layout from '../components/Layout';
import { Send, Paperclip } from 'lucide-react';

const RECOMMENDATIONS = [
  { icon: '📺', title: 'Cancel 2 unused subs', desc: 'Save $24.98 monthly', type: 'blue' },
  { icon: '💳', title: "Switch to 'Grocer' card", desc: '3% more cashback rewards', type: 'green' },
  { icon: '🏠', title: 'Rent Negotiation', desc: 'New market rates available', type: 'red' },
];

export default function FinCoachPage() {
  const [mode, setMode] = useState('fincoach'); // fincoach | future_you
  const [input, setInput] = useState('');
  
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      time: 'JUST NOW',
      content: (
        <div>
          Good morning! I've been reviewing your spending from the last week. You're doing great with your <span className="text-green font-bold">Health & Wellness</span> budget, but I noticed a slight spike in <span className="text-blue-600 font-bold">Dining Out</span>.
          <br /><br />
          Would you like to see how this affects your "Europe 2025" goal or should we look at some ways to optimize your grocery list instead?
        </div>
      )
    },
    {
      id: 2,
      role: 'user',
      time: '2M AGO',
      content: 'Where am I overspending exactly? Show me the breakdown for the last 7 days.'
    },
    {
      id: 3,
      role: 'assistant',
      time: 'JUST NOW',
      content: (
        <div>
          Here is the breakdown. Most of the overspending occurred between Wednesday and Friday.
          <div className="mt-4 p-4 bg-gray-50 rounded-xl border">
            {/* Mock chart block */}
            <div className="flex h-20 gap-2 items-end mb-2">
              <div className="w-8 bg-gray-200 rounded-t-sm h-12" />
              <div className="w-8 bg-gray-200 rounded-t-sm h-8" />
              <div className="w-8 bg-red-400 rounded-t-sm h-16" />
              <div className="w-8 bg-red-400 rounded-t-sm h-20" />
              <div className="w-8 bg-red-400 rounded-t-sm h-14" />
              <div className="w-8 bg-gray-200 rounded-t-sm h-6" />
              <div className="w-8 bg-gray-200 rounded-t-sm h-10" />
            </div>
          </div>
        </div>
      )
    }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages(p => [...p, { id: Date.now(), role: 'user', time: 'JUST NOW', content: input }]);
    setInput('');
  };

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-8 h-[calc(100vh-140px)]">
        
        {/* Chat Area */}
        <div className="col-span-8 flex flex-col pt-2">
          
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-1">FinCoach</h1>
              <p className="text-muted text-base">Your editorial financial guide.</p>
            </div>
            
            <div className="flex bg-gray-100 p-1 rounded-xl">
              <button 
                className={`px-6 py-2 rounded-lg text-sm font-bold transition ${mode === 'fincoach' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'}`}
                onClick={() => setMode('fincoach')}
              >
                FinCoach
              </button>
              <button 
                className={`px-6 py-2 rounded-lg text-sm font-bold transition ${mode === 'future_you' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'}`}
                onClick={() => setMode('future_you')}
              >
                Future You
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pr-4 space-y-8 pb-4">
            {messages.map(m => (
              <div key={m.id} className={`flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 ${m.role === 'assistant' ? 'bg-green text-white' : 'bg-orange-100 text-2xl'}`}>
                  {m.role === 'assistant' ? '🤖' : '👩‍🦰'}
                </div>
                <div className="flex flex-col">
                  <div className={`chat-bubble ${m.role === 'assistant' ? 'ai' : 'user'} shadow-sm`}>
                    {m.content}
                  </div>
                  <div className={`text-[10px] font-bold text-gray-400 mt-2 tracking-widest ${m.role === 'user' ? 'text-right mr-4' : 'ml-4'} uppercase`}>
                    {m.role === 'user' ? 'YOU' : 'FINCOACH'} • {m.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Suggested Prompts */}
          <div className="flex gap-3 mb-4 mt-2 justify-center">
            <button className="chip">Where am I overspending?</button>
            <button className="chip">How can I save more?</button>
            <button className="chip">Improvement tips</button>
          </div>

          {/* Input Box */}
          <form onSubmit={handleSend} className="chat-input-bar">
            <input 
              type="text"
              placeholder="Ask FinCoach anything..."
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button type="button" className="p-2 text-gray-400 hover:text-gray-600 transition">
              <Paperclip size={20} />
            </button>
            <button type="submit" className="chat-send-btn">
              <Send size={16} />
            </button>
          </form>

        </div>

        {/* Right Sidebar Widget */}
        <div className="col-span-4 flex flex-col gap-6 pt-2">
          
          <div className="card card-pad">
            <div className="flex justify-between items-start mb-4">
              <div className="text-xs font-bold text-gray-500 tracking-wide uppercase">ACTIVE GOAL</div>
              <span className="text-green text-xl">🛫</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Europe 2025</h3>
            <p className="text-sm text-gray-600 mb-4">$4,200 of $8,500 saved</p>
            
            <div className="progress-bar mb-4">
              <div className="progress-fill" style={{ width: '49%' }} />
            </div>

            <p className="text-xs text-gray-500 italic mt-6">
              "At current overspend, you'll reach this 2 months late."
            </p>
          </div>

          <div className="card card-pad">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-6">SMART RECOMMENDATIONS</h3>
            
            <div className="flex flex-col gap-5 mb-6">
              {RECOMMENDATIONS.map((r, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 bg-${r.type}-50 text-${r.type}-600`}>
                    {r.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{r.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn w-full bg-green-50 text-green hover:bg-green-100 font-bold tracking-wide text-xs uppercase h-10">
              VIEW ALL 8 TIPS
            </button>
          </div>

          <div className="card bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden p-8 flex-1 flex flex-col justify-end">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
            <h3 className="text-2xl font-bold italic text-gray-800 mb-4 max-w-[200px] leading-snug">
              "Financial peace isn't about having more, but needing less."
            </h3>
            <div className="text-xs font-bold text-gray-500 tracking-widest uppercase">THE ZEN G PHILOSOPHY</div>
          </div>

        </div>

      </div>
    </Layout>
  );
}
