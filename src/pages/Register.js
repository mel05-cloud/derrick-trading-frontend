import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API = 'https://derrick-trading-backend.onrender.com';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(`${API}/auth/register`, { name, email, password });
      setMessage(res.data.message);
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>📈 Create Account</h2>
        <p style={styles.subtitle}>Join Derrick Trading today</p>
        <p style={styles.demo}>⚠️ Demo app – do not use your real password</p>
        {message && <p style={styles.message}>{message}</p>}
        <input style={styles.input} type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input style={styles.input} type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input style={styles.input} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button style={styles.button} onClick={handleRegister}>Create Account</button>
        <p style={styles.loginText}>Already have an account? <a href="/login" style={styles.loginLink}>Sign In</a></p>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f5f5f5' },
  card: { backgroundColor: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', width: '400px' },
  title: { textAlign: 'center', color: '#0052ff', marginBottom: '5px' },
  subtitle: { textAlign: 'center', color: '#666', marginBottom: '10px' },
  demo: { textAlign: 'center', color: '#ff9800', fontSize: '13px', marginBottom: '15px' },
  message: { textAlign: 'center', color: 'green', marginBottom: '10px' },
  input: { width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '15px', boxSizing: 'border-box' },
  button: { width: '100%', padding: '12px', backgroundColor: '#0052ff', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold' },
  loginText: { textAlign: 'center', marginTop: '15px', color: '#666' },
  loginLink: { color: '#0052ff', textDecoration: 'none', fontWeight: 'bold' }
};

export default Register;