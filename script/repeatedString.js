// There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

// Example

// The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider
// Returns

// int: the frequency of a in the substring
// Input Format

// The first line contains a single string, .
// The second line contains an integer, .

// Constraints

// For  of the test cases, .
// Sample Input

// Sample Input 0

// aba
// 10
// Sample Output 0

// 7
// Explanation 0
// The first  letters of the infinite string are abaabaabaa. Because there are  a's, we return .

// Sample Input 1

// a
// 1000000000000
// Sample Output 1

// 1000000000000
// Explanation 1
// Because all of the first  letters of the infinite string are a, we return .

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

// // Complete the repeatedString function below.

// pseudo code
// s = string to be repeated
// n = number of characters to consider
// return number of occurrences of the letter "a"
// edge case: check if s === "a", then return n and done
// divide n by the length of s to get how many s strings there will be repeated
// use modulus to get remainder and add to results of above division
// first create string out of s that is enough to loop through n times
// then loop through and compare s[i] === "a", count++
// return count
function repeatedString(s, n) {
  if (s === "a") {
    return n;
  }
  let sTimes = Math.floor(n / s.length);
  let remainder = n % s.length;
  let runningTotal = 0;
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === "a") {
      runningTotal++;
    }
  }
  runningTotal *= sTimes;
  if (remainder > 0) {
    for (let i = 0; i < remainder; i++) {
      if (s[i] === "a") {
        runningTotal++;
      }
    }
  }
  return runningTotal;
}

let s1 = "ab";
let n1 = 100000000000;

let s2 = "a";
let n2 = 100000000000;

let s3 = "aba";
let n3 = 10;

console.log(repeatedString(s1, n1));
console.log(repeatedString(s2, n2));
console.log(repeatedString(s3, n3));

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const s = readLine();

//     const n = parseInt(readLine(), 10);

//     let result = repeatedString(s, n);

//     ws.write(result + "\n");

//     ws.end();
// }
