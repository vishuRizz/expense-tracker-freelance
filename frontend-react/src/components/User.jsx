import { useParams, useNavigate } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";

export default function User() {
  const { user_id } = useParams();
  const navigate = useNavigate();

  const [expenses, setExpenses] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    Axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/user/expenses?user_id=${user_id}`
    )
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

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
        ctx.fillStyle = "#ddd";
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
            ctx.strokeStyle = `rgba(221, 221, 221, ${1 - distance / 100})`;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(draw);
    }

    draw();
  }, [user_id]);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const logout = () => {
    navigate("/Login");
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '50px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '15px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0.5,
      zIndex: -1,
    },
    formContainer: {
      flex: 1,
      marginRight: '20px',
    },
    listContainer: {
      flex: 1,
    },
    logoutButton: {
      marginTop: '20px',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '8px',
      backgroundColor: '#007bff',
      color: '#ffffff',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.3s',
    },
    logoutButtonHover: {
      backgroundColor: '#0056b3',
      transform: 'scale(1.05)',
    },
  };

  return (
    <div style={styles.container}>
      <canvas ref={canvasRef} style={styles.background}></canvas>
      <div style={styles.formContainer}>
        <ExpenseForm user_id={user_id} onAddExpense={handleAddExpense} />
      </div>
      <div style={styles.listContainer}>
        <ExpenseList expenses={expenses} />
      </div>
      <button
        onClick={logout}
        style={styles.logoutButton}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = styles.logoutButtonHover.backgroundColor;
          e.currentTarget.style.transform = styles.logoutButtonHover.transform;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = styles.logoutButton.backgroundColor;
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        Logout
      </button>
    </div>
  );
}
