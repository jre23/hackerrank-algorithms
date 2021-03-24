// In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

// Function Description

// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

// aVeryBigSum has the following parameter(s):

// int ar[n]: an array of integers .
// Return

// long: the sum of all array elements
// Input Format

// The first line of the input consists of an integer .
// The next line contains  space-separated integers contained in the array.

// Output Format

// Return the integer sum of the elements in the array.

// Constraints

// Sample Input

// 5
// 1000000001 1000000002 1000000003 1000000004 1000000005
// Output

// 5000000015
// Note:

// The range of the 32-bit integer is .
// When we add several integer values, the resulting sum might exceed the above range. You might need to use long int C/C++/Java to store such sums.

// "use strict";

// const fs = require("fs");

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", (inputStdin) => {
//   inputString += inputStdin;
// });

// process.stdin.on("end", (_) => {
//   inputString = inputString
//     .replace(/\s*$/, "")
//     .split("\n")
//     .map((str) => str.replace(/\s*$/, ""));

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

// // Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
  // BigInt
  if (ar.length === 0) {
    return 0;
  } else if (ar.length === 1) {
    return ar[0];
  } else {
    // loop through array adding to BigInt sum each element
    let sum = BigInt(0);
    console.log(sum);
    console.log(typeof sum, "typeof");
    for (let i = 0; i < ar.length; i++) {
      sum += BigInt(ar[i]);
    }
    return sum;
  }
}

let ar1 = [0, 1, 2, 3, 4, 5, 10000];
let ar2 = [];
let ar3 = [10000];

console.log(aVeryBigSum(ar1), "ar1");
// console.log(aVeryBigSum(ar2), "ar2");
// console.log(aVeryBigSum(ar3), "ar3");

// function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const arCount = parseInt(readLine(), 10);

//   const ar = readLine()
//     .split(" ")
//     .map((arTemp) => parseInt(arTemp, 10));

//   let result = aVeryBigSum(ar);

//   ws.write(result + "\n");

//   ws.end();
// }
