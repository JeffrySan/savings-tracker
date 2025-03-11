export const getSavingsBalance = () => {
  // Simulating an API call delay (optional)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(35000000);
    }, 1000);
  });
};

export const getTransactionList = () => {
    // Simulating an API call delay (optional)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([]);
      }, 1000);
    });
  };
  