const { readFileSync, writeFileSync, readFile } = require('fs');
//console.log(readFileSync, writeFileSync);

// writeFileSync("./content/subfolder/text1.txt", "I am first file");
// writeFileSync("./content/subfolder/text2.txt", "I am second file");

var first = readFileSync('./content/subfolder/text1.txt', 'utf8');
var second = readFileSync('./content/subfolder/text2.txt', 'utf8');
//console.log(first, second)

writeFileSync("./content/subfolder/mix1and2.txt", ` hi i am mix of ${first}and ${ second }`, { flag: 'a' })