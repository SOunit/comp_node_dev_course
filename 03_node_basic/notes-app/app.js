const fs = require('fs');

fs.writeFileSync('./output/notes.txt', 'test');
fs.appendFileSync('./output/notes.txt', ', test2');
fs.appendFileSync('./output/notes.txt', ', test3');
fs.appendFileSync('./output/notes.txt', ', test4');
