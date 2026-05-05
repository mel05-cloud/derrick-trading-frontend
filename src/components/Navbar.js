import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = 'https://derrick-trading-backend.onrender.com';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await axios.post(`${API}/auth/logout`, {}, { withCredentials: true });
    navigate('/login');
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>📈 Derrick Trading</Link>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/register" style={styles.link}>Register</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
        <Link to="/add-crypto" style={styles.link}>Add Crypto</Link>
        <button onClick={handleLogout} style={styles.button}>Logout</button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#0052ff',
    color: 'white',
  },
  logo: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '22px',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '15px',
  },
  button: {
    backgroundColor: 'white',
    color: '#0052ff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
};

export default Navbar;