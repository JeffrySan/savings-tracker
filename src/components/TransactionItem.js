// TransactionItem.js
import React from 'react';

const TransactionItem = ({ transaction }) => {
  return (
    <div className="transaction-item">
      <span className="transaction-description">{transaction.description}</span>
      <span className={transaction.type === 'income' ? 'income-transaction' : 'expense-transaction'}>
        {transaction.type === 'income' ? '+' : ''}${Math.abs(transaction.amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </span>
    </div>
  );
};

export default TransactionItem;