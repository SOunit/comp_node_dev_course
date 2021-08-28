const chalk = require('chalk');
const getNotes = require('./notes');

console.log(getNotes());
console.log(chalk.green('Success!!!'));
console.log(chalk.bold.green('bold green!'));
console.log(chalk.inverse.green('inverse green!'));
console.log(chalk.inverse.bold.green('inverse bold green!'));
console.log(
  `npm ${chalk.inverse.yellow(
    'WARN'
  )} notes-app@1.0.0 No description... just joking!`
);
