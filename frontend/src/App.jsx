import { useState, useEffect } from 'react';

function App() {
  const [dbStatus, setDbStatus] = useState('Checking...');
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const checkDatabase = async () => {
    try {
      const res = await fetch('/api/db-test');
      const data = await res.json();
      if (data.status === 'success') {
        setDbStatus('✅ Connected to Neon PostgreSQL');
      } else {
        setDbStatus('❌ Database connection failed');
      }
    } catch (err) {
      setDbStatus('❌ Error connecting to database');
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/users');
      const data = await res.json();
      if (data.status === 'success') {
        setUsers(data.data);
      }
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  const addUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      });
      const data = await res.json();
      if (data.status === 'success') {
        setName('');
        setEmail('');
        fetchUsers();
      }
    } catch (err) {
      console.error('Error adding user:', err);
    }
  };

  useEffect(() => {
    checkDatabase();
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui', maxWidth: '800px', margin: '0 auto' }}>
      <h1>React + Node + Neon PostgreSQL</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>{dbStatus}</p>

      <div style={{ marginBottom: '2rem', padding: '1rem', background: '#f5f5f5', borderRadius: '8px' }}>
        <h2>Add User</h2>
        <form onSubmit={addUser} style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ padding: '0.5rem', fontSize: '1rem' }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '0.5rem', fontSize: '1rem' }}
          />
          <button type="submit" style={{ padding: '0.5rem', fontSize: '1rem', cursor: 'pointer' }}>
            Add User
          </button>
        </form>
      </div>

      <div>
        <h2>Users ({users.length})</h2>
        {users.length === 0 ? (
          <p>No users yet. Add one above!</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {users.map(user => (
              <li key={user.id} style={{ padding: '1rem', background: '#f9f9f9', marginBottom: '0.5rem', borderRadius: '4px' }}>
                <strong>{user.name}</strong> - {user.email}
                <br />
                <small style={{ color: '#666' }}>Added: {new Date(user.created_at).toLocaleString()}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
