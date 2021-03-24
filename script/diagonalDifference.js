// // Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// // For example, the square matrix  is shown below:

// // 1 2 3
// // 4 5 6
// // 9 8 9
// // The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

// // Function description

// // Complete the  function in the editor below.

// // diagonalDifference takes the following parameter:

// // int arr[n][m]: an array of integers
// // Return

// // int: the absolute diagonal difference
// // Input Format

// // The first line contains a single integer, , the number of rows and columns in the square matrix .
// // Each of the next  lines describes a row, , and consists of  space-separated integers .

// // Constraints

// // Output Format

// // Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

// // Sample Input

// // 3
// // 11 2 4
// // 4 5 6
// // 10 8 -12
// // Sample Output

// // 15
// // Explanation

// // The primary diagonal is:

// // 11
// //    5
// //      -12
// // Sum across the primary diagonal: 11 + 5 - 12 = 4

// // The secondary diagonal is:

// //      4
// //    5
// // 10
// // Sum across the secondary diagonal: 4 + 5 + 10 = 19
// // Difference: |4 - 19| = 15

// // Note: |x| is the absolute value of x

// "use strict";

// const fs = require("fs");

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function () {
//   inputString = inputString.split("\n");

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

// /*
//  * Complete the 'diagonalDifference' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts 2D_INTEGER_ARRAY arr as parameter.
//  */
// // pseudo code
// // if arr.length < 1, return 0
// // if arr.length === 1, return Math.abs(arr[0] - arr[1])
// // else
// // let n = arr.length;
// // loop through each row (arr[i]) and add to a running total for each diagonal
// // left to right diagonal will start at arr[i][0] and end at arr[n - 1][n -1]
// // let j = n-1. this will be decremented as i is incremented
// // right to left diagonal will strat at arr[i][n-1] and end at arr[n-1][0]
// // return Math.abs of difference between both totals
function diagonalDifference(arr) {
  // Write your code here
  if (arr.length < 1) {
    return 0;
  } else if (arr.length === 1) {
    return Math.abs(arr[0][0] - arr[0][arr.length - 1]);
  } else {
    let n = arr.length;
    let leftToRight = 0;
    let rightToLeft = 0;
    for (let i = 0; i < n; i++) {
      console.log(arr[i][i], "arr[i][i]");
      console.log(arr[i][n - 1], "arr[i][n-1]");
      console.log(n - i, "n-i");
      leftToRight += arr[i][i];
      rightToLeft += arr[i][n - i - 1];
    }
    return Math.abs(leftToRight - rightToLeft);
  }
}

// // Input Format
// // The first line contains a single integer, , the number of rows and columns in the square matrix .
// // Each of the next n lines describes a row, , and consists of  space-separated integers
// [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ] arr input
let arr1 = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
console.log(diagonalDifference(arr1, "expected 15"));

// function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const n = parseInt(readLine().trim(), 10);

//   let arr = Array(n);

//   for (let i = 0; i < n; i++) {
//     arr[i] = readLine()
//       .replace(/\s+$/g, "")
//       .split(" ")
//       .map((arrTemp) => parseInt(arrTemp, 10));
//   }

//   const result = diagonalDifference(arr);

//   ws.write(result + "\n");

//   ws.end();
// }
