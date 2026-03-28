import { Search, Bell } from 'lucide-react';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <header className="topbar">
          <div className="search-bar">
            <Search size={18} />
            <input type="text" placeholder="Search insights or tools..." />
          </div>
          <div className="flex-1" />
          <button style={{ color: 'var(--zen-gray-500)', position: 'relative' }} className="p-2 hover:bg-gray-100 rounded-full transition">
            <Bell size={20} />
            <span style={{ position: 'absolute', top: 6, right: 6, width: 8, height: 8, background: 'var(--zen-red)', borderRadius: '50%', border: '2px solid white' }} />
          </button>
        </header>

        <main className="page-content slide-in">
          {children}
        </main>
      </div>
    </div>
  );
}
