import { useParams, useNavigate } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Axios from "axios";
import NewNavbar from "./NewNavbar";

export default function User() {
  const { user_id } = useParams();
  const navigate = useNavigate();

  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [categorySummary, setCategorySummary] = useState({});
  const [monthlySummary, setMonthlySummary] = useState({});
  const [activeTab, setActiveTab] = useState('dashboard');
  const canvasRef = useRef(null);
  const chartCanvasRef = useRef(null);
  const monthlyChartRef = useRef(null);

  useEffect(() => {
    // Fetch expenses data
    Axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/user/expenses?user_id=${user_id}`
    )
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // Background animation
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dots = [];
    for (let i = 0; i < 50; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x > canvas.width || dot.x < 0) dot.vx = -dot.vx;
        if (dot.y > canvas.height || dot.y < 0) dot.vy = -dot.vy;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(125, 75, 255, 0.6)";
        ctx.fill();
      });

      dots.forEach((dot, index) => {
        for (let j = index + 1; j < dots.length; j++) {
          const otherDot = dots[j];
          const distance = Math.sqrt(
            Math.pow(dot.x - otherDot.x, 2) + Math.pow(dot.y - otherDot.y, 2)
          );
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(otherDot.x, otherDot.y);
            ctx.strokeStyle = `rgba(125, 75, 255, ${1 - distance / 100})`;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(draw);
    }

    draw();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [user_id]);

  // Calculate total expense and category summaries
  useEffect(() => {
    if (expenses.length > 0) {
      // Calculate total expenses
      const total = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
      setTotalExpense(total);

      // Calculate category summary
      const categoryData = {};
      expenses.forEach(expense => {
        const category = expense.category || 'Uncategorized';
        if (!categoryData[category]) {
          categoryData[category] = 0;
        }
        categoryData[category] += parseFloat(expense.amount);
      });
      setCategorySummary(categoryData);

      // Calculate monthly summary
      const monthlyData = {};
      expenses.forEach(expense => {
        const date = new Date(expense.date);
        const monthYear = `${date.getMonth() + 1}/${date.getFullYear()}`;
        if (!monthlyData[monthYear]) {
          monthlyData[monthYear] = 0;
        }
        monthlyData[monthYear] += parseFloat(expense.amount);
      });
      setMonthlySummary(monthlyData);

      // Draw category pie chart
      drawPieChart();
      
      // Draw monthly line chart
      drawMonthlyChart();
    }
  }, [expenses]);

  // Draw pie chart for categories
  const drawPieChart = () => {
    if (!chartCanvasRef.current || Object.keys(categorySummary).length === 0) return;

    const canvas = chartCanvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;
    
    const categories = Object.keys(categorySummary);
    const amounts = Object.values(categorySummary);
    const total = amounts.reduce((a, b) => a + b, 0);
    
    // Define colors for each category
    const colors = [
      '#4361ee', '#3a0ca3', '#7209b7', '#f72585', '#4cc9f0',
      '#fb8500', '#023e8a', '#0077b6', '#118ab2', '#06d6a0'
    ];
    
    let startAngle = 0;
    
    // Draw pie slices
    categories.forEach((category, index) => {
      const sliceAngle = (amounts[index] / total) * 2 * Math.PI;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      
      ctx.fillStyle = colors[index % colors.length];
      ctx.fill();
      
      // Add labels
      const labelAngle = startAngle + sliceAngle / 2;
      const labelX = centerX + Math.cos(labelAngle) * (radius * 0.7);
      const labelY = centerY + Math.sin(labelAngle) * (radius * 0.7);
      
      // Calculate percentage
      const percentage = ((amounts[index] / total) * 100).toFixed(1);
      
      // Only draw label if slice is big enough
      if (sliceAngle > 0.2) {
        ctx.fillStyle = '#fff';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${percentage}%`, labelX, labelY);
      }
      
      startAngle += sliceAngle;
    });
    
    // Draw legend
    const legendY = canvas.height + 10;
    const itemHeight = 20;
    const itemsPerRow = 3;
    
    categories.forEach((category, index) => {
      const row = Math.floor(index / itemsPerRow);
      const col = index % itemsPerRow;
      
      const x = 20 + col * (canvas.width / itemsPerRow);
      const y = legendY + row * itemHeight;
      
      // Draw color box
      ctx.fillStyle = colors[index % colors.length];
      ctx.fillRect(x, y, 10, 10);
      
      // Draw category name
      ctx.fillStyle = '#333';
      ctx.font = '12px Arial';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${category}`, x + 15, y + 5);
    });
  };

  // Draw monthly chart
  const drawMonthlyChart = () => {
    if (!monthlyChartRef.current || Object.keys(monthlySummary).length === 0) return;

    const canvas = monthlyChartRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const months = Object.keys(monthlySummary).sort((a, b) => {
      const [aMonth, aYear] = a.split('/').map(Number);
      const [bMonth, bYear] = b.split('/').map(Number);
      return aYear === bYear ? aMonth - bMonth : aYear - bYear;
    });
    
    const values = months.map(month => monthlySummary[month]);
    
    const maxValue = Math.max(...values) * 1.1; // Add 10% padding
    const padding = 40;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;
    
    // Draw axes
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.strokeStyle = '#999';
    ctx.stroke();
    
    // Draw horizontal grid lines
    const numGridLines = 5;
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.font = '12px Arial';
    ctx.fillStyle = '#666';
    
    for (let i = 0; i <= numGridLines; i++) {
      const y = padding + (chartHeight - chartHeight * (i / numGridLines));
      const value = (maxValue * i / numGridLines).toFixed(0);
      
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(canvas.width - padding, y);
      ctx.strokeStyle = 'rgba(200, 200, 200, 0.5)';
      ctx.stroke();
      
      ctx.fillText(value, padding - 5, y);
    }
    
    // Draw month labels
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    
    months.forEach((month, index) => {
      const x = padding + index * (chartWidth / (months.length - 1 || 1));
      ctx.fillText(month, x, canvas.height - padding + 5);
    });
    
    // Draw line chart
    ctx.beginPath();
    months.forEach((month, index) => {
      const x = padding + index * (chartWidth / (months.length - 1 || 1));
      const y = padding + chartHeight - (chartHeight * (monthlySummary[month] / maxValue));
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.strokeStyle = '#7d4bff';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Draw points
    months.forEach((month, index) => {
      const x = padding + index * (chartWidth / (months.length - 1 || 1));
      const y = padding + chartHeight - (chartHeight * (monthlySummary[month] / maxValue));
      
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#7d4bff';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  };

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const logout = () => {
    navigate("/Login");
  };

  // Get last 5 transactions for dashboard
  const recentTransactions = useMemo(() => {
    return [...expenses].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
  }, [expenses]);

  // Calculate category with highest expense
  const highestCategory = useMemo(() => {
    if (Object.keys(categorySummary).length === 0) return null;
    return Object.keys(categorySummary).reduce((a, b) => 
      categorySummary[a] > categorySummary[b] ? a : b
    );
  }, [categorySummary]);

  return (
    <>
      <NewNavbar />
      <div className="app-container">
        <canvas ref={canvasRef} className="background-canvas"></canvas>
        
        <div className="sidebar">
          <div className="user-profile">
            <div className="avatar">
              <span>{user_id?.charAt(0)?.toUpperCase() || 'U'}</span>
            </div>
            <h3>Welcome back!</h3>
            <p>User ID: {user_id}</p>
          </div>
          
          <div className="menu">
            <button 
              className={`menu-item ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <i className="fas fa-chart-line"></i> Dashboard
            </button>
            <button 
              className={`menu-item ${activeTab === 'expenses' ? 'active' : ''}`}
              onClick={() => setActiveTab('expenses')}
            >
              <i className="fas fa-receipt"></i> Expenses
            </button>
            <button 
              className={`menu-item ${activeTab === 'add' ? 'active' : ''}`}
              onClick={() => setActiveTab('add')}
            >
              <i className="fas fa-plus-circle"></i> Add Expense
            </button>
            <button 
              className={`menu-item ${activeTab === 'reports' ? 'active' : ''}`}
              onClick={() => setActiveTab('reports')}
            >
              <i className="fas fa-file-alt"></i> Reports
            </button>
          </div>
          
          <button className="logout-button" onClick={logout}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
        
        <div className="main-content">
          {activeTab === 'dashboard' && (
            <div className="dashboard">
              <h2>Financial Dashboard</h2>
              
              <div className="summary-cards">
                <div className="card total-card">
                  <div className="card-icon">
                    <i className="fas fa-money-bill-wave"></i>
                  </div>
                  <div className="card-content">
                    <h3>Total Expenses</h3>
                    <p className="amount">${totalExpense.toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="card">
                  <div className="card-icon">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <div className="card-content">
                    <h3>Transactions</h3>
                    <p className="amount">{expenses.length}</p>
                  </div>
                </div>
                
                <div className="card">
                  <div className="card-icon">
                    <i className="fas fa-tag"></i>
                  </div>
                  <div className="card-content">
                    <h3>Top Category</h3>
                    <p className="category">{highestCategory || 'N/A'}</p>
                  </div>
                </div>
              </div>
              
              <div className="charts-container">
                <div className="chart-card">
                  <h3>Expense by Category</h3>
                  <div className="canvas-container">
                    <canvas ref={chartCanvasRef} width="300" height="300"></canvas>
                  </div>
                </div>
                
                <div className="chart-card">
                  <h3>Monthly Expenses</h3>
                  <div className="canvas-container">
                    <canvas ref={monthlyChartRef} width="500" height="300"></canvas>
                  </div>
                </div>
              </div>
              
              <div className="recent-transactions">
                <h3>Recent Transactions</h3>
                <div className="transactions-list">
                  {recentTransactions.length > 0 ? (
                    recentTransactions.map((expense, index) => (
                      <div className="transaction-item" key={index}>
                        <div className="transaction-category">
                          <span className="category-icon">
                            {expense.category ? expense.category.charAt(0).toUpperCase() : 'O'}
                          </span>
                          <span>{expense.category || 'Other'}</span>
                        </div>
                        <div className="transaction-details">
                          <p className="transaction-description">{expense.description}</p>
                          <p className="transaction-date">{new Date(expense.date).toLocaleDateString()}</p>
                        </div>
                        <p className="transaction-amount">${parseFloat(expense.amount).toFixed(2)}</p>
                      </div>
                    ))
                  ) : (
                    <p className="no-transactions">No recent transactions</p>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'expenses' && (
            <div className="expenses-container">
              <h2>All Expenses</h2>
              <ExpenseList expenses={expenses} />
            </div>
          )}
          
          {activeTab === 'add' && (
            <div className="add-expense-container">
              <h2>Add New Expense</h2>
              <ExpenseForm user_id={user_id} onAddExpense={handleAddExpense} />
            </div>
          )}
          
          {activeTab === 'reports' && (
            <div className="reports-container">
              <h2>Expense Reports</h2>
              <div className="report-filters">
                <div className="filter-group">
                  <label>Date Range:</label>
                  <select>
                    <option>Last 30 days</option>
                    <option>This month</option>
                    <option>Last month</option>
                    <option>This year</option>
                  </select>
                </div>
                <div className="filter-group">
                  <label>Categories:</label>
                  <select>
                    <option>All Categories</option>
                    {Object.keys(categorySummary).map((category, index) => (
                      <option key={index}>{category}</option>
                    ))}
                  </select>
                </div>
                <button className="generate-report-btn">Generate Report</button>
              </div>
              
              <div className="report-summary">
                <h3>Summary</h3>
                <table className="summary-table">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Amount</th>
                      <th>% of Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(categorySummary).map((category, index) => (
                      <tr key={index}>
                        <td>{category}</td>
                        <td>${categorySummary[category].toFixed(2)}</td>
                        <td>{((categorySummary[category] / totalExpense) * 100).toFixed(1)}%</td>
                      </tr>
                    ))}
                    <tr className="total-row">
                      <td><strong>Total</strong></td>
                      <td><strong>${totalExpense.toFixed(2)}</strong></td>
                      <td>100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        .app-container {
          display: flex;
          min-height: calc(100vh - 60px);
          font-family: 'Poppins', sans-serif;
          background-color: #f5f7ff;
          position: relative;
          overflow: hidden;
        }
        
        .background-canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        
        .sidebar {
          width: 280px;
          background-color: rgba(255, 255, 255, 0.9);
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          padding: 30px 20px;
          display: flex;
          flex-direction: column;
          z-index: 10;
          overflow-y: auto;
          backdrop-filter: blur(10px);
        }
        
        .user-profile {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
        }
        
        .avatar {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #7d4bff, #4361ee);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          box-shadow: 0 4px 10px rgba(67, 97, 238, 0.3);
        }
        
        .avatar span {
          color: white;
          font-size: 32px;
          font-weight: 500;
        }
        
        .user-profile h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 5px;
          color: #333;
        }
        
        .user-profile p {
          font-size: 14px;
          color: #777;
        }
        
        .menu {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: auto;
        }
        
        .menu-item {
          display: flex;
          align-items: center;
          padding: 12px 20px;
          border-radius: 10px;
          color: #555;
          background: none;
          border: none;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }
        
        .menu-item i {
          margin-right: 12px;
          font-size: 18px;
        }
        
        .menu-item:hover {
          background-color: rgba(125, 75, 255, 0.1);
          color: #7d4bff;
        }
        
        .menu-item.active {
          background: linear-gradient(135deg, #7d4bff, #4361ee);
          color: white;
          box-shadow: 0 4px 10px rgba(67, 97, 238, 0.3);
        }
        
        .logout-button {
          margin-top: 20px;
          padding: 12px 20px;
          border-radius: 10px;
          background-color: #f5f5f5;
          color: #555;
          border: none;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
        }
        
        .logout-button i {
          margin-right: 12px;
          font-size: 18px;
        }
        
        .logout-button:hover {
          background-color: #ff5367;
          color: white;
        }
        
        .main-content {
          flex: 1;
          padding: 30px;
          overflow-y: auto;
          z-index: 5;
        }
        
        h2 {
          font-size: 24px;
          font-weight: 600;
          color: #333;
          margin-bottom: 25px;
        }
        
        /* Dashboard Styles */
        .summary-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .card {
          background-color: white;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          padding: 20px;
          display: flex;
          align-items: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        .total-card {
          background: linear-gradient(135deg, #7d4bff, #4361ee);
        }
        
        .total-card h3,
        .total-card p {
          color: white;
        }
        
        .card-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background-color: rgba(67, 97, 238, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
        }
        
        .total-card .card-icon {
          background-color: rgba(255, 255, 255, 0.2);
        }
        
        .card-icon i {
          font-size: 22px;
          color: #4361ee;
        }
        
        .total-card .card-icon i {
          color: white;
        }
        
        .card-content h3 {
          font-size: 14px;
          font-weight: 500;
          color: white;
          margin-bottom: 5px;
        }
        
        .card-content .amount {
          font-size: 24px;
          font-weight: 600;
          color: #333;
        }
        
        .card-content .category {
          font-size: 18px;
          font-weight: 500;
          color: #333;
        }
        
        .charts-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .chart-card {
          background-color: white;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .chart-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        .chart-card h3 {
          font-size: 18px;
          font-weight: 500;
          color: #444;
          margin-bottom: 15px;
        }
        
        .canvas-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        
        .recent-transactions {
          background-color: white;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .recent-transactions:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        .recent-transactions h3 {
          font-size: 18px;
          font-weight: 500;
          color: #444;
          margin-bottom: 15px;
        }
        
        .transactions-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .transaction-item {
          display: flex;
          align-items: center;
          padding: 12px;
          border-radius: 10px;
          background-color: #f9f9f9;
          transition: background-color 0.3s ease;
        }
        
        .transaction-item:hover {
          background-color: #f0f0f0;
        }
        
        .transaction-category {
          display: flex;
          align-items: center;
          margin-right: 15px;
          min-width: 100px;
        }
        
        .category-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7d4bff, #4361ee);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          margin-right: 10px;
        }
        
        .transaction-details {
          flex: 1;
        }
        
        .transaction-description {
          font-size: 15px;
          font-weight: 500;
          color: #333;
          margin-bottom: 4px;
        }
        
        .transaction-date {
          font-size: 13px;
          color: #777;
        }
        
        .transaction-amount {
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }
        
        .no-transactions {
          text-align: center;
          color: #777;
          font-style: italic;
          padding: 20px 0;
        }
        
        /* Reports Styles */
.report-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  padding: 20px;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.filter-group label {
  font-size: 15px;
  font-weight: 500;
  color: #555;
}

.filter-group select {
  padding: 8px 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 14px;
  color: #333;
  background-color: #f9f9f9;
  outline: none;
  transition: border-color 0.3s;
}

.filter-group select:focus {
  border-color: #7d4bff;
}

.generate-report-btn {
  padding: 8px 20px;
  background: linear-gradient(135deg, #7d4bff, #4361ee);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  margin-left: auto;
}

.generate-report-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(67, 97, 238, 0.3);
}

.report-summary {
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  padding: 20px;
}

.report-summary h3 {
  font-size: 18px;
  font-weight: 500;
  color: #444;
  margin-bottom: 15px;
}

.summary-table {
  width: 100%;
  border-collapse: collapse;
}

.summary-table th,
.summary-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.summary-table th {
  background-color: #f9f9f9;
  font-weight: 500;
  color: #555;
}

.summary-table tr:hover td {
  background-color: #f5f7ff;
}

.summary-table .total-row td {
  background-color: #f0f2ff;
  font-weight: 500;
}

/* Expenses List Styles - to override any existing styles in ExpenseList component */
.expenses-container {
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  padding: 20px;
}

/* Add Expense Form Styles - to override any existing styles in ExpenseForm component */
.add-expense-container {
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  padding: 20px;
}

/* Responsive styles */
@media (max-width: 992px) {
  .app-container {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .user-profile {
    flex-direction: row;
    align-items: center;
    padding-bottom: 15px;
    gap: 15px;
  }
  
  .avatar {
    width: 60px;
    height: 60px;
    margin-bottom: 0;
  }
  
  .menu {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px 0;
  }
  
  .menu-item {
    padding: 10px 15px;
  }
  
  .logout-button {
    margin-top: 10px;
  }
  
  .charts-container {
    grid-template-columns: 1fr;
  }
  
  .summary-cards {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 20px 15px;
  }
  
  .card-content .amount {
    font-size: 20px;
  }
  
  .transaction-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .transaction-category {
    margin-right: 0;
  }
  
  .transaction-amount {
    align-self: flex-end;
    margin-top: -30px;
  }
  
  .report-filters {
    flex-direction: column;
    padding: 15px;
  }
  
  .filter-group {
    width: 100%;
  }
  
  .generate-report-btn {
    width: 100%;
    margin-top: 10px;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  
  .menu-item {
    font-size: 14px;
  }
  
  .user-profile h3 {
    font-size: 16px;
  }
  
  .user-profile p {
    font-size: 12px;
  }
  
  .summary-cards {
    grid-template-columns: 1fr;
  }
  
  .summary-table th,
  .summary-table td {
    padding: 10px 8px;
    font-size: 14px;
  }
}
      `}</style>
    </>
  );
}