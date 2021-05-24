// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from  to . Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

// Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

// Example

// If person  bribes person , the queue will look like this: . Only  bribe is required. Print 1.

// Person  had to bribe  people to get to the current position. Print Too chaotic.

// Function Description

// Complete the function minimumBribes in the editor below.

// minimumBribes has the following parameter(s):

// int q[n]: the positions of the people after all bribes
// Returns

// No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than  people.
// Input Format

// The first line contains an integer , the number of test cases.

// Each of the next  pairs of lines are as follows:
// - The first line contains an integer , the number of people in the queue
// - The second line has  space-separated integers describing the final state of the queue.

// Constraints

// Subtasks

// For  score
// For  score

// Sample Input

// STDIN       Function
// -----       --------
// 2           t = 2
// 5           n = 5
// 2 1 5 3 4   q = [2, 1, 5, 3, 4]
// 5           n = 5
// 2 5 1 3 4   q = [2, 5, 1, 3, 4]
// Sample Output

// 3
// Too chaotic
// Explanation

// Test Case 1

// The initial state:

// pic1(1).png

// After person  moves one position ahead by bribing person :

// pic2.png

// Now person  moves another position ahead by bribing person :

// pic3.png

// And person  moves one position ahead by bribing person :

// pic5.png

// So the final state is  after three bribing operations.

// Test Case 2

// No person can bribe more than two people, yet it appears person  has done so. It is not possible to achieve the input state.

// 'use strict';

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

// Complete the minimumBribes function below.
// pseudo code
// Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.
// initialize bribes = 0;
// loop through the array, let i = 0
// the value that is supposed to be there is i + 1
// compare the difference with the actual value
// let diff = expectedValue - actualValue;
// if (diff < 0)
// if Math.abs(diff) > 2), return "Too chaotic"
// else if (Math.abs(diff) < 3), bribes += Math.abs(diff)
// return bribes;

function minimumBribes(q) {
  if (q.length < 2) {
    return q;
  }
  let bribes = 0;
  for (let i = 0; i < q.length; i++) {
    let diff = i + 1 - q[i];
    if (diff < 0 && Math.abs(diff) > 2) {
      // console.log("Too chaotic");
      return "Too chaotic";
    } else {
      let j = q[i] - 2 > 0 ? q[i] - 2 : 0;
      while (j < i) {
        if (q[i] < q[j]) {
          bribes++;
        }
        j++;
      }
    }
  }
  // console.log(bribes);
  return bribes;
}

let q1 = [2, 1, 5, 3, 4];
let q2 = [2, 5, 1, 3, 4];
let q3 = [5, 1, 2, 3, 7, 8, 6, 4];
let q4 = [1, 2, 5, 3, 7, 8, 6, 4]; // expected 7

// let q4t = [1, 2, 3, 4, 5, 6, 7, 8]; // no bribes
// let q5t = [1, 2, 5, 3, 4, 6, 7, 8]; // 5 bribes 2 times
// let q6t = [1, 2, 5, 3, 7, 4, 6, 8]; // 7 bribes 2 times
// let q7t = [1, 2, 5, 3, 7, 6, 4, 8]; // 6 bribes 1 time
// let q8t = [1, 2, 5, 3, 7, 8, 6, 4]; // 8 bribes 2 times

// let q6t = [1, 2, 5, 3, 4, 8, 7, 6];
// let q5t = [1, 2, 3, 4, 5, 6, 7, 8];
// let q5t = [1, 2, 5, 3, 4, 6, 7, 8]; +2
// let q6t = [1, 2, 5, 3, 7, 4, 6, 8]; +2
// let q6t = [1, 2, 5, 3, 4, 7, 6, 8]; +1
// let q6t = [1, 2, 5, 3, 4, 8, 7, 6]; +2
let q5 = [1, 2, 5, 3, 4, 8, 7, 6]; // expected 5

console.log(minimumBribes(q1), "expected 3");
console.log(minimumBribes(q2), "expected Too chaotic");
console.log(minimumBribes(q3), "expected Too chaotic");
console.log(minimumBribes(q4), "expected 7");
console.log(minimumBribes(q5), "expected 5");

// function main() {
//     const t = parseInt(readLine(), 10);

//     for (let tItr = 0; tItr < t; tItr++) {
//         const n = parseInt(readLine(), 10);

//         const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

//         minimumBribes(q);
//     }
// }
