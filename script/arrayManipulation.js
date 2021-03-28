// Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in the array.

// Example

// Queries are interpreted as follows:

//     a b k
//     1 5 3
//     4 8 7
//     6 9 1
// Add the values of  between the indices  and  inclusive:

// index->	 1 2 3  4  5 6 7 8 9 10
// 	[0,0,0, 0, 0,0,0,0,0, 0]
// 	[3,3,3, 3, 3,0,0,0,0, 0]
// 	[3,3,3,10,10,7,7,7,0, 0]
// 	[3,3,3,10,10,8,8,8,1, 0]
// The largest value is  after all operations are performed.

// Function Description

// Complete the function arrayManipulation in the editor below.

// arrayManipulation has the following parameters:

// int n - the number of elements in the array
// int queries[q][3] - a two dimensional array of queries where each queries[i] contains three integers, a, b, and k.
// Returns

// int - the maximum value in the resultant array
// Input Format

// The first line contains two space-separated integers  and , the size of the array and the number of operations.
// Each of the next  lines contains three space-separated integers ,  and , the left index, right index and summand.

// Constraints

// Sample Input

// 5 3
// 1 2 100
// 2 5 100
// 3 4 100
// Sample Output

// 200
// Explanation

// After the first update the list is 100 100 0 0 0.
// After the second update list is 100 200 100 100 100.
// After the third update list is 100 200 200 200 100.

// The maximum value is .

// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.replace(/\s*$/, '')
//         .split('\n')
//         .map(str => str.replace(/\s*$/, ''));

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// Complete the arrayManipulation function below.

// pseudo code
// n === the size of the array
// array of zeroes must be created
// array should be all zeroes initially, indexed at 1
// queries === 2 dimensional array, [a, b, k] where a is first index, b is second index, k is summand
// keep track of largest value, remember to initialize at -Infinity to make sure to account for large negative values
// return largest value

function arrayManipulation(n, queries) {
  // create array of zeros with length n
  let arr = new Array(n).fill(0);
  queries.forEach(([a, b, k], index) => {
    arr[a - 1] += k;
    if (b < n) {
      arr[b] -= k;
    }
    console.log(arr, "arr while loop");
    a++;
  });
  for (let i = 1; i < n; i++) {
    arr[i] += arr[i - 1];
  }
  console.log(arr, "arr after for loop");
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
    }
  }
  return max;
}

let n1 = 5;
let queries1 = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100],
];

let n2 = 10;
let queries2 = [
  [1, 5, 3],
  [4, 8, 7],
  [6, 9, 1],
];

let n3 = 10;
let queries3 = [
  [2, 6, 8],
  [3, 5, 7],
  [1, 8, 1],
  [5, 9, 15],
];

// console.log(arrayManipulation(n1, queries1), "expected 200");
// console.log(arrayManipulation(n2, queries2), "expected 10");
console.log(arrayManipulation(n3, queries3), "expected 31");

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const nm = readLine().split(' ');

//     const n = parseInt(nm[0], 10);

//     const m = parseInt(nm[1], 10);

//     let queries = Array(m);

//     for (let i = 0; i < m; i++) {
//         queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
//     }
//     let result = arrayManipulation(n, queries);
//     ws.write(result + "\n")
//     ws.end()
//
