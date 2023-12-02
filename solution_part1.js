const fs = require("fs");
const readline = require("readline");

const file = readline.createInterface({
  input: fs.createReadStream("input.txt"),
  output: process.stdout,
  terminal: false,
});

const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let total = 0;
file.on("line", (line) => {
  const twoNums = [];
  for (let i = 0; i < line.length + 1; i++) {
    if (line[i] in nums) {
      twoNums.push(line[i]);
      break;
    }
  }
  for (let i = 1; i < line.length + 1; i++) {
    if (line.at(-i) in nums) {
      twoNums.push(line.at(-i));
      break;
    }
  }

  total += Number(twoNums[0] + twoNums[1]);

  console.log(total);
});
