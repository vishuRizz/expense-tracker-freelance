import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {
  const styles = {
    navBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#333',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    titleHome: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '24px',
      fontWeight: 'bold',
      transition: 'color 0.3s',
    },
    titleHomeHover: {
      color: '#007bff',
    },
    ul: {
      listStyle: 'none',
      display: 'flex',
      gap: '20px',
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
      color: '#007bff',
    },
    active: {
      fontWeight: 'bold',
    },
    activeAfter: {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '2px',
      backgroundColor: '#007bff',
      bottom: '-4px',
      left: '0',
      transition: 'width 0.3s',
    },
  };

  return (
    <nav style={styles.navBar}>
      <Link to="/" style={styles.titleHome} onMouseOver={(e) => (e.currentTarget.style.color = styles.titleHomeHover.color)} onMouseOut={(e) => (e.currentTarget.style.color = styles.titleHome.color)}>
        Home
      </Link>
      <ul style={styles.ul}>
        <Content to="/register" styles={styles}>
          Register
        </Content>
        <Content to="/login" styles={styles}>
          Log In
        </Content>
        <Content to="/Login" styles={styles}>
          Sign Out
        </Content>
      </ul>
    </nav>
  );
}

function Content({ to, children, styles, ...props }) {
  const resolved = useResolvedPath(to);
  const isActive = useMatch({ path: resolved.pathname, end: true });

  return (
    <li style={styles.li} className={isActive ? "active" : ""}>
      <Link
        to={to}
        style={styles.link}
        onMouseOver={(e) => (e.currentTarget.style.color = styles.linkHover.color)}
        onMouseOut={(e) => (e.currentTarget.style.color = styles.link.color)}
        {...props}
      >
        {children}
      </Link>
      {isActive && <div style={styles.activeAfter} />}
    </li>
  );
}
