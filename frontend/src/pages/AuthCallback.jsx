import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../App';

export default function AuthCallback() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessToken = params.get('access_token');
    const refreshToken = params.get('refresh_token');
    const name = params.get('name');

    if (accessToken && refreshToken) {
      // Mock a user object just enough to get past ProtectedRoute,
      // actual user data will be fetched via /api/auth/me later, or 
      // we can decode from JWT if we decode it here.
      login({ name: name || 'User' }, accessToken, refreshToken);
      
      // We should ideally hit /api/auth/me here to get full user details, 
      // but to keep it fast, we can navigate directly to dashboard.
      navigate('/dashboard', { replace: true });
    } else {
      navigate('/login?error=auth_failed', { replace: true });
    }
  }, [location, login, navigate]);

  return (
    <div className="flex items-center justify-center" style={{ minHeight: '100vh', flexDirection: 'column', gap: 16 }}>
      <div className="loading-spin" style={{ width: 40, height: 40, border: '3px solid var(--zen-green-pale)', borderTop: '3px solid var(--zen-green)', borderRadius: '50%' }} />
      <p style={{ color: 'var(--zen-gray-500)', fontWeight: 500 }}>Completing authentication...</p>
    </div>
  );
}
