import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/login`, {
      username: username,
      password: password,
    })
      .then((response) => {
        if (response.data) {
          navigate(`/userPage/${response.data.user_id}`);
        } else {
          navigate("/userPage");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const styles = {
    loginContainer: {
      marginTop: '50px',
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '350px',
      textAlign: 'center',
      margin: '50px auto',
      transition: 'transform 0.3s',
    },
    title: {
      color: '#333333',
      marginBottom: '20px',
      fontSize: '24px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      color: '#555555',
      marginBottom: '5px',
      textAlign: 'left',
      fontSize: '14px',
    },
    input: {
      padding: '12px',
      marginBottom: '20px',
      border: '1px solid #dddddd',
      borderRadius: '8px',
      fontSize: '16px',
      transition: 'border-color 0.3s',
    },
    inputFocus: {
      borderColor: '#007bff',
      outline: 'none',
    },
    button: {
      padding: '14px',
      border: 'none',
      borderRadius: '8px',
      backgroundColor: '#007bff',
      color: '#ffffff',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
      transform: 'scale(1.05)',
    },
  };

  return (
    <div style={styles.loginContainer}>
      <h1 style={styles.title}>Login</h1>
      <form style={styles.form}>
        <label style={styles.label} htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
          onFocus={(e) => (e.currentTarget.style.borderColor = styles.inputFocus.borderColor)}
          onBlur={(e) => (e.currentTarget.style.borderColor = styles.input.borderColor)}
        />
        <label style={styles.label} htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          onFocus={(e) => (e.currentTarget.style.borderColor = styles.inputFocus.borderColor)}
          onBlur={(e) => (e.currentTarget.style.borderColor = styles.input.borderColor)}
        />
        <button
          onClick={handleSubmit}
          type="submit"
          style={styles.button}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor;
            e.currentTarget.style.transform = styles.buttonHover.transform;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = styles.button.backgroundColor;
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
