// SummaryCards.js
import React from 'react';

const SummaryCards = ({ income, expense }) => {
  return (
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
  );
};

export default SummaryCards;