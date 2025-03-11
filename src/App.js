import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import './App.css';

const App = () => {
  // Sample data for the dashboard
  const balance = 3542.65;
  const income = 5120;
  const expense = 1577.35;
  
  const recentTransactions = [
    { id: 1, description: 'Grocery', amount: -67.42, type: 'expense' },
    { id: 2, description: 'User B Salary', amount: 1200, type: 'income' },
    { id: 3, description: 'Internet Bill', amount: -89.99, type: 'expense' },
    { id: 4, description: 'User A Bonus', amount: 500, type: 'income' },
    { id: 5, description: 'Gas Station', amount: -45.23, type: 'expense' }
  ];
  
  const userContributions = [
    { name: 'User A', contribution: 1800 },
    { name: 'User B', contribution: 1500 },
    { name: 'User C', contribution: 920 },
    { name: 'User D', contribution: 650 },
    { name: 'User E', contribution: 250 }
  ];
  
  // Get user class name based on user name
  const getUserClassName = (userName) => {
    const userMap = {
      'User A': 'user-a-color',
      'User B': 'user-b-color',
      'User C': 'user-c-color',
      'User D': 'user-d-color',
      'User E': 'user-e-color'
    };
    return userMap[userName] || '';
  };
  
  return (
    <div className="app-container">
      {/* App Header */}
      <div className="app-header">
        <h1 className="app-title">Finance Tracker</h1>
      </div>
      
      {/* Balance Card */}
      <div className="balance-card">
        <p className="balance-label">Overall Balance</p>
        <p className="balance-amount">${balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
      </div>
      
      {/* Income/Expense Cards */}
      <div className="summary-container">
        <div className="summary-card">
          <p className="summary-label">Income</p>
          <p className="income-amount">${income.toLocaleString('en-US')}</p>
        </div>
        <div className="summary-card">
          <p className="summary-label">Expense</p>
          <p className="expense-amount">${expense.toLocaleString('en-US')}</p>
        </div>
      </div>
      
      {/* Recent Transactions */}
      <div className="transactions-card">
        <div className="card-header">
          <h2 className="card-title">Recent Transactions</h2>
          <button className="see-all-button">See All</button>
        </div>
        <div className="transaction-list">
          {recentTransactions.map(transaction => (
            <div key={transaction.id} className="transaction-item">
              <span className="transaction-description">{transaction.description}</span>
              <span className={transaction.type === 'income' ? 'income-transaction' : 'expense-transaction'}>
                {transaction.type === 'income' ? '+' : ''}${Math.abs(transaction.amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* User Contributions */}
      <div className="contributions-card">
        <h2 className="card-title">User Contributions</h2>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={userContributions} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <Bar dataKey="contribution" name="Contribution" radius={[4, 4, 0, 0]}>
                {userContributions.map((entry, index) => (
                  <Bar key={`cell-${index}`} fill={entry.name === 'User A' ? '#7952B3' : 
                                                    entry.name === 'User B' ? '#4CAF50' : 
                                                    entry.name === 'User C' ? '#FF9800' : 
                                                    entry.name === 'User D' ? '#F44336' : 
                                                    '#009688'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* User Contribution Bars */}
        <div className="progress-container">
          {userContributions.map(user => (
            <div key={user.name} className="progress-item">
              <div className="progress-header">
                <span className="user-name">{user.name}</span>
                <span className="user-amount">${user.contribution}</span>
              </div>
              <div className="progress-bar-bg">
                <div 
                  className={`progress-bar ${getUserClassName(user.name)}`}
                  style={{ width: `${(user.contribution / income) * 100}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button className="nav-button nav-active">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span className="nav-text">Home</span>
        </button>
        <button className="nav-button nav-inactive">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
          <span className="nav-text">Income</span>
        </button>
        <button className="nav-button nav-inactive">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
          <span className="nav-text">Expense</span>
        </button>
        <button className="nav-button nav-inactive">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
          <span className="nav-text">Reports</span>
        </button>
      </div>
    </div>
  );
};

export default App;