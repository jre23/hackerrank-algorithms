// You have an empty sequence, and you will be given  queries. Each query is one of these three types:

// 1 x  -Push the element x into the stack.
// 2    -Delete the element present at the top of the stack.
// 3    -Print the maximum element in the stack.
// Function Description

// Complete the getMax function in the editor below.

// getMax has the following parameters:
// - string operations[n]: operations as strings

// Returns
// - int[]: the answers to each type 3 query

// Input Format

// The first line of input contains an integer, . The next  lines each contain an above mentioned query.

// Constraints

// Constraints

// All queries are valid.

// Sample Input

// STDIN   Function
// -----   --------
// 10      operations[] size n = 10
// 1 97    operations = ['1 97', '2', '1 20', ....]
// 2
// 1 20
// 2
// 1 26
// 1 20
// 2
// 3
// 1 91
// 3
// Sample Output

// 26
// 91

// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /*
//  * Complete the 'getMax' function below.
//  *
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts STRING_ARRAY operations as parameter.
//  */

// pseudo code
// if operations is empty, return null;
// else iterate through operations checking if element [i][0] is a 1, 2, or 3
// ternary to handle each function depending on number
// keep track of results array containing 3 queries (max value)
// return int[]: the answers to each type 3 query
function getMax(operations) {
  if (operations.length === 0) {
    return null;
  } else {
    let results = [];
    let stack = [];
    for (let i = 0; i < operations.length; i++) {
      operations[i][0] === "1"
        ? (stack.push(parseInt(operations[i].substr(2))),
          console.log(parseInt(operations[i].substr(2)), "parseInt"))
        : operations[i][0] === "2"
        ? stack.pop()
        : (results.push(Math.max(...stack)), console.log(Math.max(...stack)));
      console.log(stack, "stack");
    }
    return results;
  }
}

let operations1 = [
  "1 97",
  "2",
  "1 20",
  "2",
  "1 26",
  "1 20",
  "2",
  "3",
  "1 91",
  "3",
];

console.log(getMax(operations1), "expected 26 91");
// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const n = parseInt(readLine().trim(), 10);

//     let ops = [];

//     for (let i = 0; i < n; i++) {
//         const opsItem = readLine();
//         ops.push(opsItem);
//     }

//     const res = getMax(ops);

//     ws.write(res.join('\n') + '\n');

//     ws.end();
// }
