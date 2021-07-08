// ou are given an array and you need to find number of tripets of indices  such that the elements at those indices are in geometric progression for a given common ratio  and .

// Example

// There are  and  at indices  and . Return .

// Function Description

// Complete the countTriplets function in the editor below.

// countTriplets has the following parameter(s):

// int arr[n]: an array of integers
// int r: the common ratio
// Returns

// int: the number of triplets
// Input Format

// The first line contains two space-separated integers  and , the size of  and the common ratio.
// The next line contains  space-seperated integers .

// Constraints

// Sample Input 0

// 4 2
// 1 2 2 4
// Sample Output 0

// 2
// Explanation 0

// There are  triplets in satisfying our criteria, whose indices are  and

// Sample Input 1

// 6 3
// 1 3 9 9 27 81
// Sample Output 1

// 6
// Explanation 1

// The triplets satisfying are index , , , ,  and .

// Sample Input 2

// 5 5
// 1 5 5 25 125
// Sample Output 2

// 4
// Explanation 2

// The triplets satisfying are index , , , .

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

// pseudo code
// base cases: if r < 2 return 0;
// else
// for loop through array
// anchor index i, let j = i + 1, k = arr.length - 1
// condition: arr[j] = arr[i] * r, arr[k] = arr[j] * r
// anytime that condition is met, count++
// Complete the countTriplets function below.
function countTriplets(arr, r) {
  if (r < 1) return 0;
  let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    let j = i + 1;
    let k = arr.length - 1;
    let second = arr[i] * r;
    while (j < k) {
      while (arr[j] !== second && j < k) {
        j++;
      }
      if (arr[j] !== second) break;
      let third = arr[j] * r;
      while (arr[k] !== third && j < k) {
        k--;
      }
      if (arr[k] !== third) break;
      if (arr[j] === second && arr[k] === third) {
        count++;
        while (arr[j + 1] === arr[j] && j < k) {
          count++;
          j++;
        }
        while (arr[k - 1] === arr[k] && j < k) {
          count++;
          k--;
        }
        break;
      }
    }
  }
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nr = readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(nr[0], 10);

  const r = parseInt(nr[1], 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const ans = countTriplets(arr, r);

  ws.write(ans + "\n");

  ws.end();
}
