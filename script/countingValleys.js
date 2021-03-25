// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

// Example

// The hiker first enters a valley  units deep. Then they climb out and up onto a mountain  units high. Finally, the hiker returns to sea level and ends the hike.

// Function Description

// Complete the countingValleys function in the editor below.

// countingValleys has the following parameter(s):

// int steps: the number of steps on the hike
// string path: a string describing the path
// Returns

// int: the number of valleys traversed
// Input Format

// The first line contains an integer , the number of steps in the hike.
// The second line contains a single string , of  characters that describe the path.

// Constraints

// Sample Input

// 8
// UDDDUDUU
// Sample Output

// 1
// Explanation

// If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:

// _/\      _
//    \    /
//     \/\/
// The hiker enters and leaves one valley.

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
//  * Complete the 'countingValleys' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER steps
//  *  2. STRING path
//  */

// pseudo code
// steps = path.length
// U = up = 1, D = down = -1
// want to keep track of how many times 0 goes negative then back to 0
// if so, add to total
// need runningTotal initialize to 0
// loop through path string
// check if path[i] === D or U
// if D add 1, else subtract 1
// check if negative
// check if returned back to zero once runningTotal goes negative

function countingValleys(steps, path) {
  // Write your code here
  let numberOfValleys = 0;
  let runningTotal = 0;
  let negativeBool = false;
  for (let i = 0; i < steps; i++) {
    if (path[i] === "D") {
      runningTotal--;
    } else {
      runningTotal++;
    }
    if (runningTotal < 0) {
      negativeBool = true;
    }
    if (i > 0 && negativeBool) {
      if (runningTotal === 0) {
        negativeBool = false;
        numberOfValleys++;
      }
    }
  }
  return numberOfValleys;
}

// Sample Input

// 8
// UDDDUDUU
// Sample Output

// 1

let steps1 = 8;
let path1 = "UDDDUDUU";

console.log(countingValleys(steps1, path1), "expected 1");

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const steps = parseInt(readLine().trim(), 10);

//     const path = readLine();

//     const result = countingValleys(steps, path);

//     ws.write(result + '\n');

//     ws.end();
// }
