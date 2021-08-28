const chalk = require('chalk');
const getNotes = require('./notes');

console.log(getNotes());
console.log(
  `npm ${chalk.inverse.yellow(
    'WARN'
  )} notes-app@1.0.0 No description... just joking!`
);
