// api.js
// Mock API service with simulated network delay

// Financial data
const financialData = {
  balance: 345234,
  income: 5120,
  expense: 1577.35,
};

// Transaction data
const transactionData = [
  {
    id: 1,
    description: "Grocery",
    amount: -67.42,
    type: "expense",
    date: "2025-03-10",
  },
  {
    id: 2,
    description: "User B Salary",
    amount: 1200,
    type: "income",
    date: "2025-03-08",
  },
  {
    id: 3,
    description: "Internet Bill",
    amount: -89.99,
    type: "expense",
    date: "2025-03-07",
  },
  {
    id: 4,
    description: "User A Bonus",
    amount: 500,
    type: "income",
    date: "2025-03-05",
  },
  {
    id: 5,
    description: "Gas Station",
    amount: -45.23,
    type: "expense",
    date: "2025-03-01",
  },
];

// User contribution data
const contributionData = [
  { name: "User A", contribution: 1800 },
  { name: "User B", contribution: 1500 },
  { name: "User C", contribution: 920 },
  { name: "User D", contribution: 650 },
  { name: "User E", contribution: 250 },
];

// Helper function to simulate API delay
const mockAPICall = (data, delay = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

// Financial data endpoints
export const fetchBalance = () => mockAPICall(financialData.balance);
export const fetchIncome = () => mockAPICall(financialData.income);
export const fetchExpense = () => mockAPICall(financialData.expense);
export const fetchFinancialSummary = () =>
  mockAPICall({
    balance: financialData.balance,
    income: financialData.income,
    expense: financialData.expense,
    netFlow: financialData.income - financialData.expense,
    savingsRate:
      ((financialData.income - financialData.expense) / financialData.income) *
      100,
  });

// Transaction data endpoints
export const fetchRecentTransactions = (limit = 5) =>
  mockAPICall(transactionData.slice(0, limit));

export const fetchTransactionsByType = (type) =>
  mockAPICall(
    transactionData.filter((transaction) => transaction.type === type)
  );

// User contribution endpoints
export const fetchUserContributions = () => mockAPICall(contributionData);

export const fetchTotalContributions = () =>
  mockAPICall(
    contributionData.reduce((total, user) => total + user.contribution, 0)
  );
