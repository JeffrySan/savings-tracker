import React from 'react';
import './App.css';

// Import components
import Header from './component/Header';
import BalanceCard from './component/BalanceCard';
import SummaryCards from './component/SummaryCards';
import TransactionsCard from './component/TransactionsCard';
import UserContributionsCard from './component/UserContributionsCard';
import BottomNavigationBar from './component/BottomNavigationBar';

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
  
  return (
    <div className="app-container">
      <Header />
      <BalanceCard balance={balance} />
      <SummaryCards income={income} expense={expense} />
      <TransactionsCard transactions={recentTransactions} />
      <UserContributionsCard 
        userContributions={userContributions} 
        totalIncome={income} 
      />
      <BottomNavigationBar />
    </div>
  );
};

export default App;