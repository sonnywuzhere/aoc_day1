const { match } = require("assert");
const fs = require("fs");
const readline = require("readline");

const file = readline.createInterface({
  input: fs.createReadStream("input.txt"),
  output: process.stdout,
  terminal: false,
});

let numDict = {
  one: 1,
  1: 1,
  two: 2,
  2: 2,
  three: 3,
  3: 3,
  four: 4,
  4: 4,
  five: 5,
  5: 5,
  six: 6,
  6: 6,
  seven: 7,
  7: 7,
  eight: 8,
  8: 8,
  nine: 9,
  9: 9,
};

let total = 0;

file.on("line", (phrase) => {
  let matchArr = [];
  let rawArr = Array.from(
    phrase.matchAll(
      /(?=(one|two|three|four|five|six|seven|eight|nine|1|2|3|4|5|6|7|8|9))/g
    )
  );
  rawArr.forEach((thing) => {
    matchArr.push(thing[1]);
  });

  let sum = "" + numDict[matchArr[0]] + numDict[matchArr.at(-1)];

  total += Number(sum);
  console.log(`total: ${total}`);
});
