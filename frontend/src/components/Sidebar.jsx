import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Activity, 
  TrendingUp, 
  Bot, 
  Gift, 
  BarChart2, 
  ShieldCheck, 
  Flag, 
  User as UserIcon,
  LogOut
} from 'lucide-react';
import { useAuth } from '../App';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: Home },
  { path: '/onboarding', label: 'Onboarding', icon: Activity }, // Removing later, useful for testing
  { path: '/money-flow', label: 'Money Flow', icon: TrendingUp },
  { path: '/simulator', label: 'Future Simulator', icon: BarChart2 },
  { path: '/fincoach', label: 'FinCoach AI', icon: Bot },
  { path: '/rewards', label: 'Rewards', icon: Gift },
  { path: '/insights', label: 'Insights', icon: Activity }, // Not built deeply
  { path: '/safety-net', label: 'Safety Net', icon: ShieldCheck }, // Not built deeply
  { path: '/goals', label: 'Goals', icon: Flag }, // Not built deeply
  { path: '/profile', label: 'Profile', icon: UserIcon },
];

export default function Sidebar() {
  const { pathname } = useLocation();
  const { user, logout } = useAuth();

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="flex items-center gap-2">
          <div style={{ width: 28, height: 28, background: 'var(--zen-green)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          </div>
          <div className="sidebar-logo-name">Zen G</div>
        </div>
        <div className="sidebar-logo-sub">The Editorial Oasis</div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          return (
            <Link key={item.path} to={item.path}>
              <div className={`sidebar-item ${isActive ? 'active' : ''}`}>
                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                {item.label}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-user">
        <div className="sidebar-avatar">
          {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
        </div>
        <div className="flex-1 truncate">
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--zen-gray-900)' }} className="truncate">
            {user?.name || 'User'}
          </div>
          <div style={{ fontSize: 11, color: 'var(--zen-gray-500)' }} className="truncate">
            Zen Master Lv. 4
          </div>
        </div>
        <button onClick={logout} title="Log Out" style={{ padding: 4, color: 'var(--zen-gray-400)' }} className="hover:text-red transition">
          <LogOut size={16} />
        </button>
      </div>
    </aside>
  );
}
