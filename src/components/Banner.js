import React from 'react';

function Banner() {
  return (
    <div style={styles.banner}>
      ⚠️ This is a student project and is not affiliated with Coinbase. Demo app – do not use your real password or personal information.
    </div>
  );
}

const styles = {
  banner: {
    backgroundColor: '#ff9800',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    fontSize: '14px',
    fontWeight: 'bold',
  }
};

export default Banner;