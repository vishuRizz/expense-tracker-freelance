import React from "react";

function ExpenseList({ expenses }) {
  const styles = {
    expenseList: {
      marginTop: '50px',
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '600px',
      textAlign: 'center',
      margin: '50px auto',
      transition: 'transform 0.3s',
    },
    title: {
      color: '#333333',
      marginBottom: '20px',
      fontSize: '24px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    thead: {
      backgroundColor: '#f8f9fa',
    },
    th: {
      padding: '12px',
      textAlign: 'left',
      fontSize: '16px',
      color: '#555555',
    },
    tbody: {
      backgroundColor: '#ffffff',
    },
    td: {
      padding: '12px',
      textAlign: 'left',
      fontSize: '16px',
      color: '#333333',
      borderBottom: '1px solid #dddddd',
    },
    trHover: {
      backgroundColor: '#f1f1f1',
    },
  };

  return (
    <div style={styles.expenseList}>
      <h1 style={styles.title}>Expense List</h1>
      <table style={styles.table}>
        <thead style={styles.thead}>
          <tr>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Category</th>
            <th style={styles.th}>Amount</th>
          </tr>
        </thead>
        <tbody style={styles.tbody}>
          {expenses.map((expense) => (
            <tr
              key={expense.expenseId}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.trHover.backgroundColor)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.tbody.backgroundColor)}
            >
              <td style={styles.td}>{expense.description}</td>
              <td style={styles.td}>{expense.category}</td>
              <td style={styles.td}>{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;
