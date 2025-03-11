// BalanceCard.js
import React from "react";

function BalanceCard({balance}) {
  return (
    <div className="balance-card">
      <p className="balance-label">Overall Balance</p>
      <p className="balance-amount">
        {balance.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
    </div>
  );
}

export default BalanceCard;
