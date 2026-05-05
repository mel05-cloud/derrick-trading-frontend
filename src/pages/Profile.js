import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API = 'https://derrick-trading-backend.onrender.com';

function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${API}/auth/profile`, { withCredentials: true });
        setUser(res.data);
      } catch (error) {
        setError('Not authorized! Please login.');
        setTimeout(() => navigate('/login'), 2000);
      }
    };
    fetchProfile();
  }, [navigate]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>👤 My Profile</h2>
        {error && <p style={styles.error}>{error}</p>}
        {user ? (
          <div>
            <div style={styles.infoBox}>
              <p style={styles.label}>Full Name</p>
              <p style={styles.value}>{user.name}</p>
            </div>
            <div style={styles.infoBox}>
              <p style={styles.label}>Email Address</p>
              <p style={styles.value}>{user.email}</p>
            </div>
            <div style={styles.infoBox}>
              <p style={styles.label}>Member Since</p>
              <p style={styles.value}>{new Date(user.createdAt).toDateString()}</p>
            </div>
          </div>
        ) : (!error && <p style={styles.loading}>Loading profile...</p>)}
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f5f5f5' },
  card: { backgroundColor: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', width: '400px' },
  title: { textAlign: 'center', color: '#0052ff', marginBottom: '20px' },
  infoBox: { backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '8px', marginBottom: '15px' },
  label: { color: '#666', fontSize: '13px', margin: '0 0 5px 0' },
  value: { color: '#000', fontSize: '16px', fontWeight: 'bold', margin: '0' },
  error: { textAlign: 'center', color: 'red' },
  loading: { textAlign: 'center', color: '#666' }
};

export default Profile;