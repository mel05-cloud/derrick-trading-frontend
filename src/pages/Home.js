import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'https://derrick-trading-backend.onrender.com';

function Home() {
  const [cryptos, setCryptos] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [newListings, setNewListings] = useState([]);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    axios.get(`${API}/crypto`).then(res => setCryptos(res.data));
    axios.get(`${API}/crypto/gainers`).then(res => setGainers(res.data));
    axios.get(`${API}/crypto/new`).then(res => setNewListings(res.data));
  }, []);

  const displayData = activeTab === 'all' ? cryptos : activeTab === 'gainers' ? gainers : newListings;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Today's Cryptocurrency Prices</h1>
      <div style={styles.tabs}>
        <button style={activeTab === 'all' ? styles.activeTab : styles.tab} onClick={() => setActiveTab('all')}>All Assets</button>
        <button style={activeTab === 'gainers' ? styles.activeTab : styles.tab} onClick={() => setActiveTab('gainers')}>🔥 Top Gainers</button>
        <button style={activeTab === 'new' ? styles.activeTab : styles.tab} onClick={() => setActiveTab('new')}>✨ New Listings</button>
      </div>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={styles.th}>Coin</th>
            <th style={styles.th}>Symbol</th>
            <th style={styles.th}>Price</th>
            <th style={styles.th}>24h Change</th>
          </tr>
        </thead>
        <tbody>
          {displayData.map((crypto) => (
            <tr key={crypto._id} style={styles.tableRow}>
              <td style={styles.td}>
                <div style={styles.coinInfo}>
                  <img src={crypto.image} alt={crypto.name} style={styles.coinImage} onError={(e) => e.target.style.display = 'none'} />
                  {crypto.name}
                </div>
              </td>
              <td style={styles.td}>{crypto.symbol}</td>
              <td style={styles.td}>${crypto.price.toLocaleString()}</td>
              <td style={{ ...styles.td, color: crypto.change24h >= 0 ? 'green' : 'red' }}>
                {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: { maxWidth: '900px', margin: '30px auto', padding: '0 20px' },
  title: { color: '#000', marginBottom: '20px' },
  tabs: { display: 'flex', gap: '10px', marginBottom: '20px' },
  tab: { padding: '10px 20px', borderRadius: '20px', border: '1px solid #ddd', backgroundColor: 'white', cursor: 'pointer', fontSize: '14px' },
  activeTab: { padding: '10px 20px', borderRadius: '20px', border: 'none', backgroundColor: '#0052ff', color: 'white', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' },
  table: { width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' },
  tableHeader: { backgroundColor: '#f5f5f5' },
  th: { padding: '15px', textAlign: 'left', color: '#666', fontWeight: 'bold' },
  tableRow: { borderTop: '1px solid #f0f0f0' },
  td: { padding: '15px', fontSize: '15px' },
  coinInfo: { display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold' },
  coinImage: { width: '30px', height: '30px', borderRadius: '50%' },
};

export default Home;