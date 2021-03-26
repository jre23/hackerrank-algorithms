// Create a 2-dimensional array, , of  empty arrays. All arrays are zero indexed.
// Create an integer, , and initialize it to .
// There are  types of queries:
// Query: 1 x y
// Find the list within  at index .
// Append the integer  to the .
// Query: 2 x y
// Find the list within  at index .
// Find the value of element  where  is the number of elements in lastAnswer$.
// Print the new value of  on a new line
// Note:  is the bitwise XOR operation, which corresponds to the ^ operator in most languages. Learn more about it on Wikipedia.  is the modulo operator.

// Function Description

// Complete the dynamicArray function below.

// dynamicArray has the following parameters:
// - int n: the number of empty arrays to initialize in
// - string queries[q]: an array of query strings

// Returns

// int[]: the results of each type 2 query in the order they are presented
// Input Format

// The first line contains two space-separated integers, , the size of  to create, and , the number of queries, respectively.
// Each of the  subsequent lines contains a query in the format defined above, .

// Constraints

// It is guaranteed that query type  will never query an empty array or index.
// Sample Input

// 2 5
// 1 0 5
// 1 1 7
// 1 0 3
// 2 1 0
// 2 1 1
// Sample Output

// 7
// 3
// Explanation

// Initial Values:

//  = [ ]
//  = [ ]

// Query 0: Append  to .

//  = [5]
//  = [ ]

// Query 1: Append  to .
//  = [5]
//  = [7]

// Query 2: Append  to .

//  = [5, 3]
//  = [7]

// Query 3: Assign the value at index  of  to , print .

//  = [5, 3]
//  = [7]

// 7
// Query 4: Assign the value at index  of  to , print .

//  = [5, 3]
//  = [7]

// 3

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
//  * Complete the 'dynamicArray' function below.
//  *
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts following parameters:
//  *  1. INTEGER n
//  *  2. 2D_INTEGER_ARRAY queries
//  */

// n = integer number of empty arrays to initialize in arr
// queries = an array of query strings
// Create a 2-dimensional array, arr, of n empty arrays. All arrays are zero indexed
// Create an integer, lastAnswer, and initialize it to 0
// query 1: 1 x y => index = ((x ^ lastAnswer) % n) then append y to the arr[index]
// query 2: 2 x y => index = ((x ^ lastAnswer) % n).
// Find the value of element y % size(arr[index]) where size is the number of elements in arr[index]. Assign the value to lastAnswer$.
// Print the new value of lastAnswer on a new line
// return the results int[] of each type 2 query in the order they are presented

function dynamicArray(n, queries) {
  // Write your code here
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([]);
  }
  let results = [];
  let lastAnswer = 0;
  let index = 0;
  for (let i = 0; i < queries.length; i++) {
    index = (queries[i][1] ^ lastAnswer) % n;
    if (queries[i][0] === 1) {
      // query 1
      // append y to the arr[index]
      arr[index].push(queries[i][2]);
    } else if (queries[i][0] === 2) {
      // query 2
      // Find the value of element y % size(arr[index]) where size is the number of elements in arr[index]. Assign the value to lastAnswer$.
      let size = arr[index].length;
      let elementValue = queries[i][2] % size;
      lastAnswer = arr[index][elementValue];
      console.log(lastAnswer);
      results.push(lastAnswer);
    }
  }
  return results;
}

let n1 = 2;
let queries1 = [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1],
];

console.log(dynamicArray(n1, queries1), "expected [7,3]");

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

//     const n = parseInt(firstMultipleInput[0], 10);

//     const q = parseInt(firstMultipleInput[1], 10);

//     let queries = Array(q);

//     for (let i = 0; i < q; i++) {
//         queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
//     }

//     const result = dynamicArray(n, queries);

//     ws.write(result.join('\n') + '\n');

//     ws.end();
// }
