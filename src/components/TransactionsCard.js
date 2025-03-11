// TransactionsCard.js
import React from 'react';
import TransactionsList from './TransactionsList';

const TransactionsCard = ({ transactions }) => {
  return (
    <div className="transactions-card">
      <div className="card-header">
        <h2 className="card-title">Recent Transactions</h2>
        <button className="see-all-button">See All</button>
      </div>
      <TransactionsList transactions={transactions} />
    </div>
  );
};

export default TransactionsCard;

