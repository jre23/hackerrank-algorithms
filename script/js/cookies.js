// Jesse loves cookies and wants the sweetness of some cookies to be greater than value . To do this, two cookies with the least sweetness are repeatedly mixed. This creates a special combined cookie with:

// sweetness  Least sweet cookie   2nd least sweet cookie).

// This occurs until all the cookies have a sweetness .

// Given the sweetness of a number of cookies, determine the minimum number of operations required. If it is not possible, return .

// Example

// The smallest values are .
// Remove them then return  to the array. Now .
// Remove  and return  to the array. Now .
// Remove , return  and .
// Finally, remove  and return  to . Now .
// All values are  so the process stops after  iterations. Return .

// Function Description
// Complete the cookies function in the editor below.

// cookies has the following parameters:

// int k: the threshold value
// int A[n]: an array of sweetness values
// Returns

// int: the number of iterations required or
// Input Format

// The first line has two space-separated integers,  and , the size of  and the minimum required sweetness respectively.

// The next line contains  space-separated integers, .

// Constraints

// Sample Input

// STDIN               Function
// -----               --------
// 6 7                 A[] size n = 6, k = 7
// 1 2 3 9 10 12       A = [1, 2, 3, 9, 10, 12]
// Sample Output

// 2
// Explanation

// Combine the first two cookies to create a cookie with sweetness  =
// After this operation, the cookies are .
// Then, combine the cookies with sweetness  and sweetness , to create a cookie with resulting sweetness  =
// Now, the cookies are .
// All the cookies have a sweetness .

// Thus,  operations are required to increase the sweetness.

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'cookies' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 */

// pseudo code
// base case k === null throw new Error('k is null')
// base case A.length === 0 return 0;
// sort array
// write helper function to do the mixing of the two least sweet cookies
// keep track of how many times helper function is called
// return count
function cookies(k, A) {
  if (k === null || A === null) throw new Error("Null parameter");
  if (A.length < 2) return -1;
  A = A.sort((a, b) => a - b);
  if (A[0] >= k) return 0;
  if (A[A.length - 1] === 0) return -1;
  let count = 0;
  while (A[0] <= k) {
    if (A.length < 2) return -1;
    let mixed = A[0] + 2 * A[1];
    A.splice(0, 2, mixed);
    if (mixed > A[1]) {
      A = A.sort((a, b) => a - b);
    }
    count++;
  }
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(firstMultipleInput[0], 10);

  const k = parseInt(firstMultipleInput[1], 10);

  const A = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((ATemp) => parseInt(ATemp, 10));

  const result = cookies(k, A);

  ws.write(result + "\n");

  ws.end();
}
