const { getExpenses, clearExpenses } = require('../models/expense');
const cron = require('node-cron');

const generateSummary = () => {
  const expenses = getExpenses();
  const summary = {};

  expenses.forEach(({ category, amount, date }) => {
    const month = new Date(date).toLocaleString('default', { month: 'long' });
    if (!summary[month]) summary[month] = {};
    if (!summary[month][category]) summary[month][category] = 0;
    summary[month][category] += amount;
  });

  console.log('Monthly Summary:', summary);
};

const initialize = () => {
  cron.schedule('0 0 1 * *', () => {
    console.log('Generating monthly summary...');
    generateSummary();
    clearExpenses();
  });
};

module.exports = { initialize };
