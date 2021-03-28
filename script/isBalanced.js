// A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

// Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

// A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

// By this logic, we say a sequence of brackets is balanced if the following conditions are met:

// It contains no unmatched brackets.
// The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
// Given  strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, return YES. Otherwise, return NO.

// Function Description

// Complete the function isBalanced in the editor below.

// isBalanced has the following parameter(s):

// string s: a string of brackets
// Returns

// string: either YES or NO
// Input Format

// The first line contains a single integer , the number of strings.
// Each of the next  lines contains a single string , a sequence of brackets.

// Constraints

// , where  is the length of the sequence.
// All chracters in the sequences ∈ { {, }, (, ), [, ] }.
// Output Format

// For each string, return YES or NO.

// Sample Input

// STDIN Function ----- -------- 3 n = 3 {[()]} first s = '{[()]}' {[(])} second s = '{[(])}' {{[[(())]]}} third s ='{{[[(())]]}}'

// Sample Output

// YES
// NO
// YES
// Explanation

// The string {[()]} meets both criteria for being a balanced string.
// The string {[(])} is not balanced because the brackets enclosed by the matched pair { and } are not balanced: [(]).
// The string {{[[(())]]}} meets both criteria for being a balanced string.

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

// Complete the isBalanced function below.

// pseudo code
// if string length is odd, return NO
// loop through string
// put first half into a stack
// put second half into queue
// pop stack and dequeue queue and compare each value
// if statement to check what came out of the stack
// compare opposite of that to what came out of the queue
function isBalanced(s) {
  if (
    s.length < 2 ||
    s.length % 2 !== 0 ||
    s[0] === "}" ||
    s[0] === ")" ||
    s[0] === "]" ||
    s[s.length - 1] === "{" ||
    s[s.length - 1] === "(" ||
    s[s.length - 1] === "["
  ) {
    return "NO";
  }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "(" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      let tempOpenBracket = s[i] === "}" ? "{" : s[i] === ")" ? "(" : "[";
      let tempStack = stack.pop();
      if (tempStack !== tempOpenBracket) {
        return "NO";
      }
    }
  }
  return "YES";
}

let s1 = "{(([])[])[]}";
let s2 = "{(([])[])[]]}";
let s3 = "{(([])[])[]}[]";
let s4 = "{{([])}}";
let s5 = "{{)[](}}";
let s6 = "{[()]}";
let s7 = "{[(])}";
let s8 = "{{[[(())]]}}";

console.log(isBalanced(s1), "expected YES");
console.log(isBalanced(s2), "expected NO");
console.log(isBalanced(s3), "expected YES");
console.log(isBalanced(s4), "expected YES");
console.log(isBalanced(s5), "expected NO");
console.log(isBalanced(s6), "expected YES");
console.log(isBalanced(s7), "expected NO");
console.log(isBalanced(s8), "expected YES");

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const t = parseInt(readLine(), 10);

//     for (let tItr = 0; tItr < t; tItr++) {
//         const s = readLine();

//         let result = isBalanced(s);

//         ws.write(result + "\n");
//     }

//     ws.end();
// }
