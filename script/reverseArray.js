// An array is a type of data structure that stores elements of the same type in a contiguous block of memory. In an array, , of size , each memory location has some unique index,  (where ), that can be referenced as  or .

// Reverse an array of integers.

// Note: If you've already solved our C++ domain's Arrays Introduction challenge, you may want to skip this.

// Example

// Return .

// Function Description

// Complete the function reverseArray in the editor below.

// reverseArray has the following parameter(s):

// int A[n]: the array to reverse
// Returns

// int[n]: the reversed array
// Input Format

// The first line contains an integer, , the number of integers in .
// The second line contains  space-separated integers that make up .

// Constraints

// Sample Input 1

// CopyDownload
// Array: arr
// 1
// 4
// 3
// 2

// 4
// 1 4 3 2
// Sample Output 1

// 2 3 4 1

// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.replace(/\s*$/, '')
//         .split('\n')
//         .map(str => str.replace(/\s*$/, ''));

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// Complete the reverseArray function below.

// pseudo code
// check if a.length < 1, return []
// check if a.length === 1, return a
// else, loop backwards through a and push each element into a new array

function reverseArray(a) {
  if (a.length < 1) {
    return [];
  } else if (a.length === 1) {
    return a;
  } else {
    return a.reverse();
  }
}

let a1 = [
  0,
  1,
  3,
  4,
  4,
  5,
  6,
  2,
  3,
  0,
  1,
  3,
  4,
  5,
  6,
  2,
  3,
  0,
  1,
  3,
  4,
  5,
  6,
  2,
  3,
];

console.log(reverseArray(a1));

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const arrCount = parseInt(readLine(), 10);

//     const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

//     const res = reverseArray(arr);

//     ws.write(res.join(' ') + '\n');

//     ws.end();
// }
