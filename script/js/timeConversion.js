// // Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// // Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// // - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// // Example

// // Return '12:01:00'.

// // Return '00:01:00'.

// // Function Description

// // Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// // timeConversion has the following parameter(s):

// // string s: a time in  hour format
// // Returns

// // string: the time in  hour format
// // Input Format

// // A single string  that represents a time in -hour clock format (i.e.:  or ).

// // Constraints

// // All input times are valid
// // Sample Input 0

// // 07:05:45PM
// // Sample Output 0

// // 19:05:45

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
//  * Complete the 'timeConversion' function below.
//  *
//  * The function is expected to return a STRING.
//  * The function accepts STRING s as parameter.
//  */

// // pseudo code
// // base case: null inputs
// // s[2] && s[5] === ':'
// // sample input: 07:05:45PM
function timeConversion(s) {
  let hr = s.substring(0, 2);
  let min = s.substring(3, 5);
  let sec = s.substring(6, 8);
  let amPm = s.substring(8);
  if (hr === "12" && amPm === "AM") {
    return "00:" + min + ":" + sec;
  } else if (amPm === "PM" && hr !== "12") {
    let hrNum = parseInt(hr) + 12;
    return hrNum.toString() + ":" + min + ":" + sec;
  } else if (amPm === "PM" && hr === "12") {
    return hr + ":" + min + ":" + sec;
  } else {
    return hr + ":" + min + ":" + sec;
  }
}

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const s = readLine();

//     const result = timeConversion(s);

//     ws.write(result + '\n');

//     ws.end();
// }
