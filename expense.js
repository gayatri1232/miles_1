let expenses = [];

const getExpenses = () => expenses;

const addExpense = (expense) => {
  expenses.push(expense);
};

const clearExpenses = () => {
  expenses = [];
};

module.exports = { getExpenses, addExpense, clearExpenses };


