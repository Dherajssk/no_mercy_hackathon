import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect, createContext, useContext } from 'react';

// Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';
import MoneyFlowPage from './pages/MoneyFlowPage';
import SimulatorPage from './pages/SimulatorPage';
import FinCoachPage from './pages/FinCoachPage';
import RewardsPage from './pages/RewardsPage';
import GoalsPage from './pages/GoalsPage';
import ProfilePage from './pages/ProfilePage';
import AuthCallback from './pages/AuthCallback';

// Auth Context
export const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="flex items-center justify-center" style={{ minHeight: '100vh' }}><div className="loading-spin" style={{ width: 32, height: 32, border: '3px solid #e8f5ee', borderTop: '3px solid #1a5c38', borderRadius: '50%' }} /></div>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

function PublicRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="flex items-center justify-center" style={{ minHeight: '100vh' }}><div className="loading-spin" style={{ width: 32, height: 32, border: '3px solid #e8f5ee', borderTop: '3px solid #1a5c38', borderRadius: '50%' }} /></div>;
  if (user) return <Navigate to="/dashboard" replace />;
  return children;
}

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('zen_token');
    const savedUser = localStorage.getItem('zen_user');
    if (token && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (_) {
        localStorage.removeItem('zen_token');
        localStorage.removeItem('zen_user');
      }
    }
    setLoading(false);
  }, []);

  const login = (userData, token, refreshToken) => {
    setUser(userData);
    localStorage.setItem('zen_token', token);
    localStorage.setItem('zen_refresh', refreshToken || '');
    localStorage.setItem('zen_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('zen_token');
    localStorage.removeItem('zen_refresh');
    localStorage.removeItem('zen_user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      <Routes>
        {/* Public */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><SignupPage /></PublicRoute>} />
        <Route path="/auth/callback" element={<AuthCallback />} />

        {/* Protected App Routes */}
        <Route path="/onboarding" element={<ProtectedRoute><OnboardingPage /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="/money-flow" element={<ProtectedRoute><MoneyFlowPage /></ProtectedRoute>} />
        <Route path="/simulator" element={<ProtectedRoute><SimulatorPage /></ProtectedRoute>} />
        <Route path="/fincoach" element={<ProtectedRoute><FinCoachPage /></ProtectedRoute>} />
        <Route path="/rewards" element={<ProtectedRoute><RewardsPage /></ProtectedRoute>} />
        <Route path="/goals" element={<ProtectedRoute><GoalsPage /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthContext.Provider>
  );
}
