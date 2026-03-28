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
    const isNew = params.get('is_new') === 'true';

    if (accessToken && refreshToken) {
      login({ name: name || 'User' }, accessToken, refreshToken);
      // New Google users go to onboarding; returning users go to dashboard
      navigate(isNew ? '/onboarding' : '/dashboard', { replace: true });
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
