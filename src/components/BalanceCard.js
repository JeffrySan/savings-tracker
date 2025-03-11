// BalanceCard.js
import React, { useEffect, useState } from "react";
import { getSavingsBalance } from "../services/userService";

function BalanceCard() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    getSavingsBalance().then((responseBalance) => {
      setBalance(responseBalance);
    });
  });

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
