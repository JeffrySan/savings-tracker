// TransactionsList.js
import React from "react";
import TransactionItem from "./TransactionItem";

const TransactionsList = ({ transactions }) => {
  return (
    <div className="transaction-list">
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionsList;
