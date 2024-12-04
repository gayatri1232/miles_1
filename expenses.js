// const express = require('express');
// const {
//   addExpenseHandler,
//   getExpensesHandler,
//   analyzeSpendingHandler,
// } = require('../controllers/expenseController');

// const router = express.Router();

// // Routes
// router.post('/', addExpenseHandler);
// router.get('/', getExpensesHandler);
// router.get('/analysis', analyzeSpendingHandler);

// module.exports = router;



const express = require('express');
const router = express.Router();
const { addExpenseHandler } = require('../controllers/expenseController');


router.post('/', addExpenseHandler);

module.exports = router;
