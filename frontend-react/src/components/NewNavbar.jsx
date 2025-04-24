import { useState } from "react";

export default function NewNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
return(
    <nav style={styles.nav}>
    <div style={styles.navContainer}>
      <div style={styles.logo}>
        <span style={styles.logoIcon}>💰</span>
        <span style={styles.logoText}>FinTrack</span>
      </div>
      
      <div style={styles.mobileMenuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✕' : '☰'}
      </div>
      
      <ul style={{...styles.navItems, ...(isMenuOpen ? styles.navItemsOpen : {})}}>
        <li style={styles.navItem}><a href="/userPage/:user_id" style={styles.navLink}>Expense page</a></li>
        <li style={styles.navItem}><a href="#testimonials" style={styles.navLink}>Testimonials</a></li>
        <li style={styles.navItem}><a href="/register" style={styles.navLink}>Register</a></li>
        <li style={styles.navItem}><a href="/logout" style={styles.navLink}>Logout</a></li>
        <li style={styles.navItem}>
          <a href="/login" style={styles.signupButton}>Login</a>
        </li>
      </ul>
    </div>
  </nav>
)
}

const styles = {
      // Navigation styles
  nav: {
    backgroundColor: '#FFFFFF',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    padding: '15px 0',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 800,
    fontSize: '24px',
    color: '#2563EB',
  },
  logoIcon: {
    marginRight: '8px',
    fontSize: '28px',
  },
  logoText: {
    fontWeight: 800,
  },
  mobileMenuButton: {
    display: 'none',
    fontSize: '24px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
      display: 'block',
    }
  },
  navItems: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    '@media (max-width: 768px)': {
      display: 'none',
    }
  },
  navItemsOpen: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '70px',
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  },
  navItem: {
    margin: '0 15px',
    '@media (max-width: 768px)': {
      margin: '10px 0',
    }
  },
  navLink: {
    textDecoration: 'none',
    color: '#4B5563',
    fontWeight: 500,
    transition: 'color 0.3s ease',
    ':hover': {
      color: '#2563EB',
    }
  },
  loginButton: {
    textDecoration: 'none',
    color: '#2563EB',
    fontWeight: 600,
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
  },
  signupButton: {
    textDecoration: 'none',
    color: '#FFFFFF',
    backgroundColor: '#2563EB',
    fontWeight: 600,
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
  },
  
}