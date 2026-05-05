import React, { useState } from 'react';
import axios from 'axios';

const API = 'https://derrick-trading-backend.onrender.com';

function AddCrypto() {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [change24h, setChange24h] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${API}/crypto`, { name, symbol, price: parseFloat(price), image, change24h: parseFloat(change24h) });
      setMessage(res.data.message);
      setError('');
      setName(''); setSymbol(''); setPrice(''); setImage(''); setChange24h('');
    } catch (error) {
      setError(error.response.data.message);
      setMessage('');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>➕ Add New Cryptocurrency</h2>
        {message && <p style={styles.success}>{message}</p>}
        {error && <p style={styles.error}>{error}</p>}
        <input style={styles.input} type="text" placeholder="Coin Name (e.g. Bitcoin)" value={name} onChange={(e) => setName(e.target.value)} />
        <input style={styles.input} type="text" placeholder="Symbol (e.g. BTC)" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
        <input style={styles.input} type="number" placeholder="Price in USD" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input style={styles.input} type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
        <input style={styles.input} type="number" placeholder="24h Change % (e.g. 2.5)" value={change24h} onChange={(e) => setChange24h(e.target.value)} />
        <button style={styles.button} onClick={handleSubmit}>Add Cryptocurrency</button>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f5f5f5' },
  card: { backgroundColor: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', width: '400px' },
  title: { textAlign: 'center', color: '#0052ff', marginBottom: '20px' },
  input: { width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '15px', boxSizing: 'border-box' },
  button: { width: '100%', padding: '12px', backgroundColor: '#0052ff', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold' },
  success: { textAlign: 'center', color: 'green', marginBottom: '10px' },
  error: { textAlign: 'center', color: 'red', marginBottom: '10px' }
};

export default AddCrypto;