import React from 'react';

function Footer() {
  return (
    <div style={styles.footer}>
      <p>© 2026 Derrick Trading | Demo Project – Not affiliated with Coinbase</p>
      <p>⚠️ Do not enter real personal information on this site.</p>
    </div>
  );
}

const styles = {
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#aaa',
    textAlign: 'center',
    padding: '20px',
    marginTop: '40px',
    fontSize: '13px',
  }
};

export default Footer;