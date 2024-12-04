// const express = require('express');
// const bodyParser = require('body-parser');
// const expenseRoutes = require('./routes/expenses');
// const cronTasks = require('./utils/cronTasks');

// const app = express();
// app.use(bodyParser.json());


// app.use('/expenses', expenseRoutes);


// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


// cronTasks.initialize();

// app.js
const express = require('express');
const app = express();
const expenseRoutes = require('./routes/expenses');

// Middleware to parse JSON
app.use(express.json());

// Use the expense routes
app.use('/expenses', expenseRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Expense Tracker API');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

