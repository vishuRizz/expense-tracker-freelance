import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { User, Lock, CreditCard, ArrowRight } from 'lucide-react';

function Registration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  // const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/register`, {
      username: username,
      password: password,
      name: name,
    })
      .then((response) => {
        if (response.data) {
          localStorage.setItem("user_id", response.data.user_id);
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
    container: {
      display: 'flex',
      height: '100vh',
      background: 'linear-gradient(to bottom right, #EBF4FF, #E0E7FF)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    infoSection: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '50%',
      padding: '2rem',
      background: 'linear-gradient(to bottom right, #3B82F6, #4F46E5)',
      color: 'white',
    },
    infoContainer: {
      maxWidth: '600px',
    },
    mainTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
    },
    subtitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1rem',
    },
    description: {
      fontSize: '1.125rem',
      marginBottom: '2rem',
      lineHeight: '1.5',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1.5rem',
      marginBottom: '2.5rem',
    },
    featureBox: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '1rem',
      borderRadius: '0.5rem',
    },
    featureTitle: {
      fontWeight: '600',
      fontSize: '1.125rem',
    },
    iconWrapper: {
      color: '#93C5FD',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      flexShrink: 0,
    },
    formSection: {
      width: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
    },
    registrationContainer: {
      backgroundColor: '#ffffff',
      padding: '2.5rem',
      borderRadius: '1rem',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
      width: '400px',
      textAlign: 'center',
    },
    logo: {
      color: '#3B82F6',
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    welcomeText: {
      fontSize: '1rem',
      color: '#6B7280',
      marginBottom: '2rem',
    },
    formTitle: {
      color: '#111827',
      marginBottom: '1.25rem',
      fontSize: '1.5rem',
      fontWeight: '600',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    inputGroup: {
      marginBottom: '1.25rem',
      textAlign: 'left',
      width: '100%',
    },
    inputField: {
      position: 'relative',
      width: '100%',
    },
    inputIcon: {
      position: 'absolute',
      left: '1rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9CA3AF',
    },
    eyeIcon: {
      position: 'absolute',
      right: '1rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9CA3AF',
      cursor: 'pointer',
    },
    label: {
      color: '#4B5563',
      marginBottom: '0.5rem',
      textAlign: 'left',
      fontSize: '0.875rem',
      fontWeight: '500',
      display: 'block',
    },
    input: {
      padding: '0.75rem 1rem 0.75rem 2.5rem',
      width: '100%',
      border: '1.5px solid #E5E7EB',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      transition: 'all 0.3s',
      boxSizing: 'border-box',
    },
    inputFocus: {
      borderColor: '#3B82F6',
      boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.2)',
      outline: 'none',
    },
    registerButton: {
      padding: '0.875rem',
      border: 'none',
      borderRadius: '0.5rem',
      backgroundColor: '#3B82F6',
      color: '#ffffff',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
    },
    registerButtonHover: {
      backgroundColor: '#2563EB',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
    },
    loginLink: {
      marginTop: '1.5rem',
      fontSize: '0.875rem',
      color: '#6B7280',
    },
    loginLinkText: {
      color: '#3B82F6',
      fontWeight: '600',
      textDecoration: 'none',
      marginLeft: '0.25rem',
    }
  };

  return (
    <div style={styles.container}>
      {/* Info Section */}
      <div style={styles.infoSection}>
        <div style={styles.infoContainer}>
          <h1 style={styles.mainTitle}>ExpenseTracker</h1>
          <h2 style={styles.subtitle}>Take control of your finances</h2>
          <p style={styles.description}>
            Track, analyze, and optimize your spending habits with our powerful and intuitive expense tracking platform. 
            Join thousands of users who have transformed their financial habits with ExpenseTracker.
          </p>
          
          <div style={styles.featuresGrid}>
            <div style={styles.featureBox}>
              <div style={styles.iconWrapper}>
                <CreditCard size={20} />
              </div>
              <div>
                <h3 style={styles.featureTitle}>Track Expenses</h3>
              </div>
            </div>
            <div style={styles.featureBox}>
              <div style={styles.iconWrapper}>
                <User size={20} />  
              </div>
              <div>
                <h3 style={styles.featureTitle}>User Profiles</h3>
              </div>
            </div>
            <div style={styles.featureBox}>
              <div style={styles.iconWrapper}>
                <Lock size={20} />
              </div>
              <div>
                <h3 style={styles.featureTitle}>Secure Storage</h3>
              </div>
            </div>
            <div style={styles.featureBox}>
              <div style={styles.iconWrapper}>
                <ArrowRight size={20} />
              </div>
              <div>
                <h3 style={styles.featureTitle}>Easy Access</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form Section */}
      <div style={styles.formSection}>
        <div style={styles.registrationContainer}>
          <div style={styles.logo}>ExpenseTracker</div>
          <p style={styles.welcomeText}>Create your account to start tracking expenses</p>
          <h1 style={styles.formTitle}>Registration</h1>
          
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="name">Name:</label>
              <div style={styles.inputField}>
                <div style={styles.inputIcon}>
                  <User size={16} />
                </div>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={styles.input}
                  onFocus={(e) => {
                    e.target.style.borderColor = styles.inputFocus.borderColor;
                    e.target.style.boxShadow = styles.inputFocus.boxShadow;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = styles.input.border.split(' ')[2];
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="username">Username:</label>
              <div style={styles.inputField}>
                <div style={styles.inputIcon}>
                  <User size={16} />
                </div>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={styles.input}
                  onFocus={(e) => {
                    e.target.style.borderColor = styles.inputFocus.borderColor;
                    e.target.style.boxShadow = styles.inputFocus.boxShadow;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = styles.input.border.split(' ')[2];
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="johndoe123"
                />
              </div>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="password">Password:</label>
              <div style={styles.inputField}>
                <div style={styles.inputIcon}>
                  <Lock size={16} />
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={styles.input}
                  onFocus={(e) => {
                    e.target.style.borderColor = styles.inputFocus.borderColor;
                    e.target.style.boxShadow = styles.inputFocus.boxShadow;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = styles.input.border.split(' ')[2];
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <button
              type="submit"
              style={styles.registerButton}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = styles.registerButtonHover.backgroundColor;
                e.target.style.transform = styles.registerButtonHover.transform;
                e.target.style.boxShadow = styles.registerButtonHover.boxShadow;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = styles.registerButton.backgroundColor;
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Register <ArrowRight size={16} />
            </button>
            
            <div style={styles.loginLink}>
              Already have an account?
              <a href="#" style={styles.loginLinkText}>Log in</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;