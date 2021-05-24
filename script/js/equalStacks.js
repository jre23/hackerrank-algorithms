// You have three stacks of cylinders where each cylinder has the same diameter, but they may vary in height. You can change the height of a stack by removing and discarding its topmost cylinder any number of times.

// Find the maximum possible height of the stacks such that all of the stacks are exactly the same height. This means you must remove zero or more cylinders from the top of zero or more of the three stacks until they are all the same height, then return the height.

// Example

// There are  and  cylinders in the three stacks, with their heights in the three arrays. Remove the top 2 cylinders from  (heights = [1, 2]) and from  (heights = [1, 1]) so that the three stacks all are 2 units tall. Return  as the answer.

// Note: An empty stack is still a stack.

// Function Description

// Complete the equalStacks function in the editor below.

// equalStacks has the following parameters:

// int h1[n1]: the first array of heights
// int h2[n2]: the second array of heights
// int h3[n3]: the third array of heights
// Returns

// int: the height of the stacks when they are equalized
// Input Format

// The first line contains three space-separated integers, , , and , the numbers of cylinders in stacks , , and . The subsequent lines describe the respective heights of each cylinder in a stack from top to bottom:

// The second line contains  space-separated integers, the cylinder heights in stack . The first element is the top cylinder of the stack.
// The third line contains  space-separated integers, the cylinder heights in stack . The first element is the top cylinder of the stack.
// The fourth line contains  space-separated integers, the cylinder heights in stack . The first element is the top cylinder of the stack.
// Constraints

// Sample Input

// STDIN       Function
// -----       --------
// 5 3 4       h1[] size n1 = 5, h2[] size n2 = 3, h3[] size n3 = 4
// 3 2 1 1 1   h1 = [3, 2, 1, 1, 1]
// 4 3 2       h2 = [4, 3, 2]
// 1 1 4 1     h3 = [1, 1, 4, 1]
// Sample Output

// 5
// Explanation

// Initially, the stacks look like this:

// initial stacks

// To equalize thier heights, remove the first cylinder from stacks  and , and then remove the top two cylinders from stack  (shown below).

// modified stacks

// The stack heights are reduced as follows:

// All three stacks now have , the value to return.

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
//  * Complete the 'equalStacks' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER_ARRAY h1
//  *  2. INTEGER_ARRAY h2
//  *  3. INTEGER_ARRAY h3
//  */

// pseudo code
// if any of the stacks are empty, return 0
// else get the height of each stack
// while each length is not equal to each other, get the tallest stack and shift()
// return height when all are equal

function equalStacks(h1, h2, h3) {
  if (h1.length === 0 || h2.length === 0 || h3.length === 0) {
    return 0;
  } else {
    // get heights
    let heightH1 = 0;
    let heightH2 = 0;
    let heightH3 = 0;
    let longest = Math.max(h1.length, h2.length, h3.length);
    for (let i = 0; i < longest; i++) {
      if (h1[i] !== undefined) {
        heightH1 += h1[i];
      }
      if (h2[i] !== undefined) {
        heightH2 += h2[i];
      }
      if (h3[i] !== undefined) {
        heightH3 += h3[i];
      }
    }
    let highest = 0;
    // while heights aren't equal, remove from stacks
    while (heightH1 !== heightH2 || heightH1 !== heightH3) {
      highest = Math.max(heightH1, heightH2, heightH3);
      highest === heightH1
        ? (heightH1 -= h1.shift())
        : highest === heightH2
        ? (heightH2 -= h2.shift())
        : (heightH3 -= h3.shift());
    }
    return heightH1;
  }
}

let h11 = [3, 2, 1, 1, 1];
let h21 = [4, 3, 2];
let h31 = [1, 1, 4, 1];

let h12 = [1, 2, 1, 1];
let h22 = [1, 1, 2];
let h32 = [1, 1];

console.log(equalStacks(h11, h21, h31), "expected 5");
console.log(equalStacks(h12, h22, h32), "expected 2");

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

//     const n1 = parseInt(firstMultipleInput[0], 10);

//     const n2 = parseInt(firstMultipleInput[1], 10);

//     const n3 = parseInt(firstMultipleInput[2], 10);

//     const h1 = readLine().replace(/\s+$/g, '').split(' ').map(h1Temp => parseInt(h1Temp, 10));

//     const h2 = readLine().replace(/\s+$/g, '').split(' ').map(h2Temp => parseInt(h2Temp, 10));

//     const h3 = readLine().replace(/\s+$/g, '').split(' ').map(h3Temp => parseInt(h3Temp, 10));

//     const result = equalStacks(h1, h2, h3);

//     ws.write(result + '\n');

//     ws.end();
// }
