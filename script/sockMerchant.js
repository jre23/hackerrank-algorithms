// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example

// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, , the colors of the socks in the pile.

// Constraints

//  where
// Sample Input

// STDIN                       Function
// -----                       --------
// 9                           n = 9
// 10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// Sample Output

// 3
// Explanation

// sock.png

// There are three pairs of socks.

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

// // Complete the sockMerchant function below.
// pseudo code
// sort ar to make finding duplicates easier
// loop through ar and compare ar[i] with the last value seen
// have to check for different values
// have to keep a running total
// divide by 2 and add this number to the total number of pairs
// ^use Math.floor to get integer
// check if running total is === 1 (no pairs)
// have to set running total back to one when a differing value is encountered
// return integer number of pairs
function sockMerchant(n, ar) {
  if (n < 2) {
    return 0;
  } else if (n === 2) {
    if (ar[0] === ar[1]) {
      return 1;
    }
  } else {
    ar = ar.sort((a, b) => a - b);
    let numberOfPairs = 0;
    let runningTotal = 1;
    for (let i = 0; i <= ar.length; i++) {
      if (i > 0 && ar[i] === ar[i - 1]) {
        runningTotal++;
      } else {
        numberOfPairs += Math.floor(runningTotal / 2);
        runningTotal = 1;
      }
    }
    return numberOfPairs;
  }
}

console.log(Math.floor(13 / 2));
// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const n = parseInt(readLine(), 10);

//     const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

//     let result = sockMerchant(n, ar);

//     ws.write(result + "\n");

//     ws.end();
// }
