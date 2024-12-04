
const expenses = [];

const addExpenseHandler = (req, res) => {
  const { category, amount, date } = req.body;

  // Validate the input
  if (!category || !amount || !date) {
    return res.status(400).json({ status: "error", error: "All fields are required" });
  }

  // Add the expense to the in-memory storage
  const expense = { category, amount, date };
  expenses.push(expense);

  res.status(201).json({ status: "success", data: expense });
};

module.exports = {
  addExpenseHandler,
};
