import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { DollarSign, PieChart as PieChartIcon, TrendingUp, Shield } from 'lucide-react';

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

  // Sample data for charts
  const pieData = [
    { name: 'Food', value: 400 },
    { name: 'Rent', value: 800 },
    { name: 'Transport', value: 200 },
    { name: 'Utilities', value: 150 },
  ];

  const barData = [
    { name: 'Jan', amount: 2400 },
    { name: 'Feb', amount: 1800 },
    { name: 'Mar', amount: 3200 },
    { name: 'Apr', amount: 2700 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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
      alignItems: 'flex-start',
      gap: '0.75rem',
    },
    featureTitle: {
      fontWeight: '600',
      fontSize: '1.125rem',
    },
    featureText: {
      color: '#BFDBFE',
      fontSize: '0.875rem',
    },
    chartGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1.5rem',
      marginBottom: '1.5rem',
    },
    chartBox: {
      background: 'rgba(255, 255, 255, 0.1)',
      padding: '1rem',
      borderRadius: '0.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    chartTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
      textAlign: 'center',
    },
    iconWrapper: {
      color: '#93C5FD',
    },
    formSection: {
      width: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
    },
    loginContainer: {
      backgroundColor: '#ffffff',
      padding: '2.5rem',
      borderRadius: '1rem',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
      width: '400px',
      textAlign: 'center',
      transition: 'transform 0.3s',
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
      padding: '0.75rem 1rem',
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
    forgotPassword: {
      textAlign: 'right',
      marginBottom: '1.5rem',
    },
    forgotPasswordLink: {
      color: '#3B82F6',
      fontSize: '0.875rem',
      textDecoration: 'none',
    },
    button: {
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
    },
    buttonHover: {
      backgroundColor: '#2563EB',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
    },
    createAccount: {
      marginTop: '1.5rem',
      fontSize: '0.875rem',
      color: '#6B7280',
    },
    createAccountLink: {
      color: '#3B82F6',
      fontWeight: '600',
      textDecoration: 'none',
      marginLeft: '0.25rem',
    },
    responsiveHide: {
      display: 'block',
      '@media (max-width: 768px)': {
        display: 'none',
      }
    },
    mobileFullWidth: {
      '@media (max-width: 768px)': {
        width: '100%',
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Info Section */}
      <div style={styles.infoSection} className="responsive-hide">
        <div style={styles.infoContainer}>
          <h1 style={styles.mainTitle}>ExpenseTracker</h1>
          <h2 style={styles.subtitle}>Take control of your finances</h2>
          <p style={styles.description}>Track, analyze, and optimize your spending habits with our powerful and intuitive expense tracking platform.</p>
          
          <div style={styles.featuresGrid}>
            <div style={styles.featureBox}>
              <div style={styles.iconWrapper}>
                <DollarSign size={24} />
              </div>
              <div>
                <h3 style={styles.featureTitle}>Budget Planning</h3>
                <p style={styles.featureText}>Set monthly budgets and receive alerts</p>
              </div>
            </div>
            <div style={styles.featureBox}>
              <div style={styles.iconWrapper}>
                <PieChartIcon size={24} />
              </div>
              <div>
                <h3 style={styles.featureTitle}>Visual Reports</h3>
                <p style={styles.featureText}>Understand your spending patterns</p>
              </div>
            </div>
            <div style={styles.featureBox}>
              <div style={styles.iconWrapper}>
                <TrendingUp size={24} />
              </div>
              <div>
                <h3 style={styles.featureTitle}>Trend Analysis</h3>
                <p style={styles.featureText}>Track financial progress over time</p>
              </div>
            </div>
            <div style={styles.featureBox}>
              <div style={styles.iconWrapper}>
                <Shield size={24} />
              </div>
              <div>
                <h3 style={styles.featureTitle}>Secure Data</h3>
                <p style={styles.featureText}>Your financial data stays protected</p>
              </div>
            </div>
          </div>
          
          <div style={styles.chartGrid}>
            <div style={styles.chartBox}>
              <h3 style={styles.chartTitle}>Expense Categories</h3>
              <PieChart width={200} height={200}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </div>
            <div style={styles.chartBox}>
              <h3 style={styles.chartTitle}>Monthly Overview</h3>
              <BarChart width={200} height={200} data={barData}>
                <XAxis dataKey="name" tick={{ fill: 'white' }} />
                <YAxis tick={{ fill: 'white' }} />
                <Tooltip />
                <Bar dataKey="amount" fill="#82ca9d" />
              </BarChart>
            </div>
          </div>
        </div>
      </div>

      {/* Login Form Section */}
      <div style={styles.formSection}>
        <div style={styles.loginContainer}>
          <div style={styles.logo}>ExpenseTracker</div>
          <p style={styles.welcomeText}>Welcome back! Please login to your account.</p>
          <h1 style={styles.formTitle}>Login</h1>
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="username">Username</label>
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
                placeholder="Enter your username"
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="password">Password</label>
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
                placeholder="Enter your password"
              />
            </div>
            <div style={styles.forgotPassword}>
              <a href="#" style={styles.forgotPasswordLink}>Forgot password?</a>
            </div>
            <button
              type="submit"
              style={styles.button}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
                e.target.style.transform = styles.buttonHover.transform;
                e.target.style.boxShadow = styles.buttonHover.boxShadow;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = styles.button.backgroundColor;
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Login
            </button>
            <div style={styles.createAccount}>
              Don't have an account?
              <a href="#" style={styles.createAccountLink}>Sign up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;