// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} MyPortfolio | Built with React</p>
      <div style={styles.social}>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#002b5c',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontFamily: 'Philosopher, sans-serif'
  },
  social: {
    marginTop: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem'
  }
};

export default Footer;
