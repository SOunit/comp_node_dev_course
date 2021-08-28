const validator = require('validator');
const getNotes = require('./notes');

console.log(getNotes());
console.log(validator.isEmail('jack@test.com'));
console.log(
  validator.isURL(
    'https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728848#overview'
  )
);
