import React, { useState, useEffect } from 'react';
import './App.css';

// Import components
import Header from './components/Header';
import BalanceCard from './components/BalanceCard';
import SummaryCards from './components/SummaryCards';
import TransactionsCard from './components/TransactionsCard';
import UserContributionsCard from './components/UserContributionsCard';
import BottomNavigationBar from './components/BottomNavigationBar';
import LoadingSpinner from './components/LoadingSpinner'; // You'll need to create this component

import { 
  fetchIncome, 
  fetchExpense, 
  fetchBalance,
  fetchRecentTransactions, 
  fetchUserContributions 
} from './services/userService';

const App = () => {
  // State for storing data
  const [balance, setBalance] = useState(null);
  const [income, setIncome] = useState(null);
  const [expense, setExpense] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [userContributions, setUserContributions] = useState([]);
  
  // Loading states
  const [isBalanceLoading, setIsBalanceLoading] = useState(true);
  const [isSummaryLoading, setIsSummaryLoading] = useState(true);
  const [isTransactionsLoading, setIsTransactionsLoading] = useState(true);
  const [isContributionsLoading, setIsContributionsLoading] = useState(true);

  // Fetch balance data
  useEffect(() => {
    const getBalanceData = async () => {
      try {
        const data = await fetchBalance();
        setBalance(data);
      } catch (error) {
        console.error("Error fetching balance:", error);
      } finally {
        setIsBalanceLoading(false);
      }
    };
    
    getBalanceData();
  }, []);

  // Fetch income and expense data
  useEffect(() => {
    const getSummaryData = async () => {
      try {
        // Fetch both income and expense concurrently
        const [incomeData, expenseData] = await Promise.all([
          fetchIncome(),
          fetchExpense()
        ]);
        
        setIncome(incomeData);
        setExpense(expenseData);
      } catch (error) {
        console.error("Error fetching summary data:", error);
      } finally {
        setIsSummaryLoading(false);
      }
    };
    
    getSummaryData();
  }, []);

  // Fetch transactions data
  useEffect(() => {
    const getTransactionsData = async () => {
      try {
        const data = await fetchRecentTransactions();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setIsTransactionsLoading(false);
      }
    };
    
    getTransactionsData();
  }, []);

  // Fetch user contributions data
  useEffect(() => {
    const getUserContributionsData = async () => {
      try {
        const data = await fetchUserContributions();
        setUserContributions(data);
      } catch (error) {
        console.error("Error fetching user contributions:", error);
      } finally {
        setIsContributionsLoading(false);
      }
    };
    
    getUserContributionsData();
  }, []);

  return (
    <div className="app-container">
      <Header />
      
      {isBalanceLoading ? (
        <div className="card-placeholder">
          <LoadingSpinner />
        </div>
      ) : (
        <BalanceCard balance={balance} />
      )}
      
      {isSummaryLoading ? (
        <div className="card-placeholder">
          <LoadingSpinner />
        </div>
      ) : (
        <SummaryCards income={income} expense={expense} />
      )}
      
      {isTransactionsLoading ? (
        <div className="card-placeholder">
          <LoadingSpinner />
        </div>
      ) : (
        <TransactionsCard transactions={transactions} />
      )}
      
      {isContributionsLoading ? (
        <div className="card-placeholder">
          <LoadingSpinner />
        </div>
      ) : (
        <UserContributionsCard 
          userContributions={userContributions} 
          totalIncome={income} 
        />
      )}
      
      <BottomNavigationBar />
    </div>
  );
};

export default App;