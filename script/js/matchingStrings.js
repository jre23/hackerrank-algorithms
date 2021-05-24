// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

// Example

// There are  instances of ',  of '' and  of ''. For each query, add an element to the return array, .

// Function Description

// Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in strings.

// matchingStrings has the following parameters:

// string strings[n] - an array of strings to search
// string queries[q] - an array of query strings
// Returns

// int[q]: an array of results for each query
// Input Format

// The first line contains and integer , the size of .
// Each of the next  lines contains a string .
// The next line contains , the size of .
// Each of the next  lines contains a string .

// Constraints

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

// Complete the matchingStrings function below.

// pseudo code
// if strings array is empty, return array of size queries.length with all zeroes => let arr = new Array(queries.length).fill(0);
// else if queries is empty, return [];
// else iterate through queries array, checking against each string in strings, incrementing count each time ===
// reset count when index increases in queries loop
// return [ints]
function matchingStrings(strings, queries) {
  if (strings.length === 0) {
    return new Array(queries.length).fill(0);
  } else if (queries.length === 0) {
    return [];
  } else {
    let results = [];
    let count = 0;
    for (let i = 0; i < queries.length; i++) {
      count = 0;
      for (let j = 0; j < strings.length; j++) {
        if (queries[i] === strings[j]) {
          count++;
        }
      }
      results.push(count);
    }
    return results;
  }
}

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const stringsCount = parseInt(readLine(), 10);

//     let strings = [];

//     for (let i = 0; i < stringsCount; i++) {
//         const stringsItem = readLine();
//         strings.push(stringsItem);
//     }

//     const queriesCount = parseInt(readLine(), 10);

//     let queries = [];

//     for (let i = 0; i < queriesCount; i++) {
//         const queriesItem = readLine();
//         queries.push(queriesItem);
//     }

//     let res = matchingStrings(strings, queries);

//     ws.write(res.join("\n") + "\n");

//     ws.end();
// }
