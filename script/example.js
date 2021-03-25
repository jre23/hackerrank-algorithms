// Write a program that adds two numbers and prints the sum to STDOUT. Read the input from STDIN. The first line of your input will contain an integer (N) that tells you how many more lines there are in the input. Each of the subsequent N lines contain 2 integers). You need to print the sum of each pair on a separate line of STDOUT.

// Sample Input

// 3
// 1 5
// 3 10
// 999 -34343
// Sample Output

// 6
// 13
// -33344

// Begin reading from stdin so the process does not exit.
process.stdin.resume();
process.stdin.setEncoding("ascii");

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on("data", function (data) {
  __input_stdin += data;
});

process.stdin.on("end", function () {
  __input_stdin_array = __input_stdin.split("\n");
  var res;
  var n = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
  __input_currentline += 1;
  for (var i = 0; i < n; i++) {
    var _line = __input_stdin_array[__input_currentline].trim();
    __input_currentline += 1;
    var line = _line.split(" ");
    var _a = parseInt(line[0]);
    var _b = parseInt(line[1]);
    res = _a + _b;
    process.stdout.write("" + res + "\n");
  }
});

// ===============================
// Sample Problem Statement

// Given an integerN, print 'hello world'Ntimes.

// Sample Input

// 5
// Sample Output

//  hello world
//  hello world
//  hello world
//  hello world
//  hello world

function processData(input) {
  var i;
  for (i = 0; i < parseInt(input); i++) {
    console.log("hello world");
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});

// ===============================
process.stdin.resume();
process.stdin.setEncoding("utf-8"); // sometimes "ascii" is used

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (data) => {
  inputString += data;
});

process.stdin.on("end", () => {
  inputString = inputString.split("\n");

  main();
});

const readLine = () => {
  inputString[currentLine++];
};

// function to solve algorithm usually goes here

const main = () => {
  const writeStream = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);
  // Arrays can be created using a constructor with a single number parameter. An array with its length property set to that number and the array elements are empty slots.
  // let fruits = new Array(2);
  // console.log(fruits.length); // 2
  // console.log(fruits[0]);     // undefined

  let arr = Array(n);

  // diagonalDifference =========================
  // creates two dimensional array

  // [
  // [11, 2, 4],
  //   [4, 5, 6],
  //   [10, 8, -12],
  // ]
  //   const n = parseInt(readLine().trim(), 10);

  //   let arr = Array(n);

  //   for (let i = 0; i < n; i++) {
  //     arr[i] = readLine()
  //       .replace(/\s+$/g, "")
  //       .split(" ")
  //       .map((arrTemp) => parseInt(arrTemp, 10));
  //   }

  //   const result = diagonalDifference(arr);

  //   ws.write(result + "\n");
  // ==================================================

  // compareTriplets =========================
  // creates one dimensional array [a,b]

  //   const a = readLine()
  //   .replace(/\s+$/g, "")
  //   .split(" ")
  //   .map((aTemp) => parseInt(aTemp, 10));

  // const b = readLine()
  //   .replace(/\s+$/g, "")
  //   .split(" ")
  //   .map((bTemp) => parseInt(bTemp, 10));

  // const result = compareTriplets(a, b);

  // ws.write(result.join(" ") + "\n");
  // ==================================================

  // aVeryBigSum =========================
  // creates one dimensional array

  // const arCount = parseInt(readLine(), 10);

  // const ar = readLine()
  //   .split(" ")
  //   .map((arTemp) => parseInt(arTemp, 10));

  // let result = aVeryBigSum(ar);

  //   ws.write(result + "\n");
  // ==================================================

  // simpleArraySum =========================
  // creates one dimensional array [a,b]

  // const arCount = parseInt(readLine(), 10);

  // const ar = readLine()
  //   .split(" ")
  //   .map((arTemp) => parseInt(arTemp, 10));

  // let result = simpleArraySum(ar);

  // ws.write(result + "\n");
  // ==================================================

  // sockMerchant =========================
  // creates one dimensional array [a,b]

  // const n = parseInt(readLine(), 10);

  // const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

  // let result = sockMerchant(n, ar);

  // ws.write(result + "\n");
  // ==================================================

  // jumpingOnClouds =========================
  // creates one dimensional array [a,b]

  // const n = parseInt(readLine(), 10);

  // const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

  // let result = jumpingOnClouds(c);

  // ws.write(result + "\n");
  // ==================================================

  // countingValleys =========================
  // creates one dimensional array [a,b]

  // const steps = parseInt(readLine().trim(), 10);

  // const path = readLine();

  // const result = countingValleys(steps, path);

  // ws.write(result + '\n');
  // ==================================================

  // set a result variable to what's returned from the function to solve the algorithm. pass in arguments created above (i.e. arr, a, b, etc.)
  // const result = sampleFunction(arr);

  writeStream.write(result.join(" ") + "\n");

  writeStream.end();
};
