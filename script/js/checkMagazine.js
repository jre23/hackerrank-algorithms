// Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

// Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

// Example
//  = "attack at dawn"  = "Attack at dawn"

// The magazine has all the right words, but there is a case mismatch. The answer is .

// Function Description

// Complete the checkMagazine function in the editor below. It must print  if the note can be formed using the magazine, or .

// checkMagazine has the following parameters:

// string magazine[m]: the words in the magazine
// string note[n]: the words in the ransom note
// Prints

// string: either  or , no return value is expected
// Input Format

// The first line contains two space-separated integers,  and , the numbers of words in the  and the , respectively.
// The second line contains  space-separated strings, each .
// The third line contains  space-separated strings, each .

// Constraints

// .
// Each word consists of English alphabetic letters (i.e.,  to  and  to ).
// Sample Input 0

// 6 4
// give me one grand today night
// give one grand today
// Sample Output 0

// Yes
// Sample Input 1

// 6 5
// two times three is not four
// two times two is four
// Sample Output 1

// No
// Explanation 1

// 'two' only occurs once in the magazine.

// Sample Input 2

// 7 4
// ive got a lovely bunch of coconuts
// ive got some coconuts
// Sample Output 2

// No
// Explanation 2

// Harold's magazine is missing the word .

// 'use strict';

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

// Complete the checkMagazine function below.

// pseudo code
// loop through magazine and put each word into a hashmap
// loop through note and check if each word exists in magazine hashmap, case sensitive
function checkMagazine(magazine, note) {
  let magazineMap = new Map();
  let count = 0;
  for (let i = 0; i < magazine.length; i++) {
    if (magazineMap.has(magazine[i])) {
      count = magazineMap.get(magazine[i]) + 1;
      magazineMap.set(magazine[i], count);
    } else {
      count = 1;
      magazineMap.set(magazine[i], count);
    }
  }
  let contains = "Yes";
  for (let i = 0; i < note.length; i++) {
    if (!magazineMap.has(note[i])) {
      // contains = "No";
      return "No";
    } else {
      count = magazineMap.get(note[i]);
      if (count === 0) {
        // contains = "No";
        return "No";
      } else {
        count--;
        magazineMap.set(note[i], count);
      }
    }
  }
  // console.log(contains);
  return contains;
}

let magazine1 = "two times three is not four";
let note1 = "two times two is four";

let magazine2 = ["two", "times", "three", "is", "not", " four"];
let note2 = ["two", "times", "two", "is", "four"];

console.log(checkMagazine(magazine1, note1), "expected No");
console.log(checkMagazine(magazine2, note2), "expected No");

// function main() {
//     const mn = readLine().split(' ');

//     const m = parseInt(mn[0], 10);

//     const n = parseInt(mn[1], 10);

//     const magazine = readLine().split(' ');

//     const note = readLine().split(' ');

//     checkMagazine(magazine, note);
// }
