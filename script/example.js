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
