// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become . Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// Function Description

// Complete the function rotLeft in the editor below.

// rotLeft has the following parameter(s):

// int a[n]: the array to rotate
// int d: the number of rotations
// Returns

// int a'[n]: the rotated array
// Input Format

// The first line contains two space-separated integers  and , the size of  and the number of left rotations.
// The second line contains  space-separated integers, each an .

// Constraints

// Sample Input

// 5 4
// 1 2 3 4 5
// Sample Output

// 5 1 2 3 4
// Explanation

// When we perform  left rotations, the array undergoes the following sequence of changes:

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

// Complete the rotLeft function below.

// pseudo code
// if d = 0 || d = a.length || a.length % d === 0, return a
// a.length % d !== 0 , new number of rotations would be the remainder of a.length % d
// frontSlice = slice(0, d);
// backSlice = slice(d);
// newArray = backSlice.concat(frontSlice);

function rotLeft(a, d) {
  if (d === 0 || d === a.length) {
    return a;
  } else if (d > a.length) {
    d = a.length % d;
  }
  let frontSlice = a.slice(0, d);
  let backSlice = a.slice(d);
  return backSlice.concat(frontSlice);
}

let a1 = [
  41,
  73,
  89,
  7,
  10,
  1,
  59,
  58,
  84,
  77,
  77,
  97,
  58,
  1,
  86,
  58,
  26,
  10,
  86,
  51,
];
let d1 = 10;

console.log(
  rotLeft(a1, d1),
  "expected [77 97 58 1 86 58 26 10 86 51 41 73 89 7 10 1 59 58 84 77]"
);

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const nd = readLine().split(' ');

//     const n = parseInt(nd[0], 10);

//     const d = parseInt(nd[1], 10);

//     const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

//     const result = rotLeft(a, d);

//     ws.write(result.join(' ') + '\n');

//     ws.end();
// }
