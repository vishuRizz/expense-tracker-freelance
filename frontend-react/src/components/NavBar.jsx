import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const userId = localStorage.getItem("user_id");

  const styles = {
    navBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#1a1a1a',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      color: '#fff',
      position: 'relative',
      zIndex: 1000,
    },
    titleHome: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#fff',
      textDecoration: 'none',
    },
    menuToggle: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: '#fff',
      fontSize: '24px',
      cursor: 'pointer',
    },
    ul: {
      listStyle: 'none',
      display: 'flex',
      gap: '20px',
      margin: 0,
      padding: 0,
    },
    mobileUl: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginTop: '12px',
      padding: '12px 0',
      backgroundColor: '#222',
      position: 'absolute',
      top: '70px',
      left: 0,
      width: '100%',
    },
    li: {
      position: 'relative',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '18px',
      transition: 'color 0.3s',
    },
    linkHover: {
      color: '#00aaff',
    },
    active: {
      fontWeight: 'bold',
      color: '#00aaff',
    },
    activeAfter: {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '2px',
      backgroundColor: '#00aaff',
      bottom: '-4px',
      left: '0',
    },
    responsive: {
      display: 'flex',
      flexDirection: 'column',
    },
    mediaQuery: `@media (max-width: 768px)`
  };

  const navItems = [
    { to: "/register", label: "Register" },
    { to: "/login", label: "Log In" },
    { to: userId ? `/userPage/${userId}` : "/login", label: "My Account" },
    { to: "/logout", label: "Sign Out" }
  ];

  return (
    <nav style={styles.navBar}>
      <Link
        to="/"
        style={styles.titleHome}
        onMouseOver={(e) => (e.currentTarget.style.color = styles.linkHover.color)}
        onMouseOut={(e) => (e.currentTarget.style.color = styles.titleHome.color)}
      >
        Home
      </Link>

      {/* Menu Toggle Button for Mobile */}
      <button
        style={{ ...styles.menuToggle, ...(window.innerWidth <= 768 ? { display: 'block' } : {}) }}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Desktop Menu */}
      <ul style={{ ...styles.ul, ...(window.innerWidth <= 768 ? { display: 'none' } : {}) }}>
        {navItems.map((item) => (
          <Content key={item.to} to={item.to} styles={styles}>
            {item.label}
          </Content>
        ))}
      </ul>

      {/* Mobile Menu */}
      {isOpen && window.innerWidth <= 768 && (
        <ul style={styles.mobileUl}>
          {navItems.map((item) => (
            <Content key={item.to} to={item.to} styles={styles} onClick={() => setIsOpen(false)}>
              {item.label}
            </Content>
          ))}
        </ul>
      )}
    </nav>
  );
}

function Content({ to, children, styles, onClick }) {
  const resolved = useResolvedPath(to);
  const isActive = useMatch({ path: resolved.pathname, end: true });

  return (
    <li style={styles.li} className={isActive ? "active" : ""}>
      <Link
        to={to}
        style={isActive ? { ...styles.link, ...styles.active } : styles.link}
        onClick={onClick}
        onMouseOver={(e) => (e.currentTarget.style.color = styles.linkHover.color)}
        onMouseOut={(e) =>
          (e.currentTarget.style.color = isActive
            ? styles.active.color
            : styles.link.color)
        }
      >
        {children}
      </Link>
    </li>
  );
}
