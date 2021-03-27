// You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. Find the minimum number of swaps required to sort the array in ascending order.

// Example

// Perform the following steps:

// i   arr                         swap (indices)
// 0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
// 1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
// 2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
// 3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
// 4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
// 5   [1, 2, 3, 4, 5, 6, 7]
// It took  swaps to sort the array.

// Function Description

// Complete the function minimumSwaps in the editor below.

// minimumSwaps has the following parameter(s):

// int arr[n]: an unordered array of integers
// Returns

// int: the minimum number of swaps to sort the array
// Input Format

// The first line contains an integer, , the size of .
// The second line contains  space-separated integers .

// Constraints

// Sample Input 0

// 4
// 4 3 1 2
// Sample Output 0

// 3
// Explanation 0

// Given array
// After swapping  we get
// After swapping  we get
// After swapping  we get
// So, we need a minimum of  swaps to sort the array in ascending order.

// Sample Input 1

// 5
// 2 3 4 1 5
// Sample Output 1

// 3
// Explanation 1

// Given array
// After swapping  we get
// After swapping  we get
// After swapping  we get
// So, we need a minimum of  swaps to sort the array in ascending order.

// Sample Input 2

// 7
// 1 3 5 2 4 6 7
// Sample Output 2

// 3
// Explanation 2

// Given array
// After swapping  we get
// After swapping  we get
// After swapping  we get
// So, we need a minimum of  swaps to sort the array in ascending order.

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

// Complete the minimumSwaps function below.

// pseudo code
// let minSwaps = 0;
// if arr.length <= 1; return 0;
// if arr.length === 2;
// return arr[0] < arr[1] ? 0 : 1;
// else loop through the array and compare each actual value with expected value, which is (i + 1) because arr consist of consecutive ints w/o duplicates, 1 <= arr[i] <= n
// if (arr[i] === (i+1)) continue;
// let j = i;
// let k = i;
// let tempValue = 0;
// if (i <= Math.floor(arr.length/2))
// while (arr[k] !== (j+1) && k<= Math.floor(arr.length/2)) {
// k++; }
// swap values
// minSwaps++;
// else
// while (arr[k] !== (j+1) && k < arr.length) {
// k++; }
// swap values
// minSwaps++;
// tempValue = arr[k];
// arr[k] = arr[i];
// arr[i] = tempValue;
// return minimum number of swaps
function minimumSwaps(arr) {
  console.log(arr, "arr input");
  if (arr.length <= 1) {
    return 0;
  } else if (arr.length === 2) {
    return arr[0] < arr[1] ? 0 : 1;
  }
  let minSwaps = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i + 1) {
      continue;
    } else {
      let k = i;
      let tempValue = 0;
      if (i <= Math.floor(arr.length / 2)) {
        while (arr[k] !== i + 1 && k <= Math.floor(arr.length / 2)) {
          k++;
        }
        if (k > Math.floor(arr.length / 2)) {
          while (arr[k] !== i + 1 && k < arr.length - 1) {
            k++;
          }
          // swap values
          minSwaps++;
          tempValue = arr[k];
          arr[k] = arr[i];
          arr[i] = tempValue;
        } else {
          minSwaps++;
          tempValue = arr[k];
          arr[k] = arr[i];
          arr[i] = tempValue;
        }
      } else {
        while (arr[k] !== i + 1 && k < arr.length - 1) {
          k++;
        }
        // swap values
        minSwaps++;
        tempValue = arr[k];
        arr[k] = arr[i];
        arr[i] = tempValue;
      }
    }
  }
  console.log(arr, "arr returned");
  return minSwaps;
}

let arr0 = [4, 3, 1, 2];
let arr1 = [2, 3, 4, 1, 5];
let arr2 = [1, 3, 5, 2, 4, 6, 7];
let arr3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let arr4 = [1, 2, 3, 4, 5, 6, 7];

console.log(minimumSwaps(arr0), "expected 3");
console.log(minimumSwaps(arr1), "expected 3");
console.log(minimumSwaps(arr2), "expected 3");
console.log(minimumSwaps(arr3), "arr3");
console.log(minimumSwaps(arr4), "expected 0");

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const n = parseInt(readLine(), 10);

//     const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

//     const res = minimumSwaps(arr);

//     ws.write(res + '\n');

//     ws.end();
// }
