// You’re given the pointer to the head nodes of two linked lists. Compare the data in the nodes of the linked lists to check if they are equal. If all data attributes are equal and the lists are the same length, return . Otherwise, return .

// Example

// The two lists have equal data attributes for the first  nodes.  is longer, though, so the lists are not equal. Return .

// Function Description

// Complete the compare_lists function in the editor below.

// compare_lists has the following parameters:

// SinglyLinkedListNode llist1: a reference to the head of a list
// SinglyLinkedListNode llist2: a reference to the head of a list
// Returns

// int: return 1 if the lists are equal, or 0 otherwise
// Input Format

// The first line contains an integer , the number of test cases.

// Each of the test cases has the following format:
// The first line contains an integer , the number of nodes in the first linked list.
// Each of the next  lines contains an integer, each a value for a data attribute.
// The next line contains an integer , the number of nodes in the second linked list.
// Each of the next  lines contains an integer, each a value for a data attribute.

// Constraints

// Output Format

// Compare the two linked lists and return 1 if the lists are equal. Otherwise, return 0. Do NOT print anything to stdout/console.

// The output is handled by the code in the editor and it is as follows:

// For each test case, in a new line, print  if the two lists are equal, else print .

// Sample Input

// 2
// 2
// 1
// 2
// 1
// 1
// 2
// 1
// 2
// 2
// 1
// 2
// Sample Output

// 0
// 1
// Explanation

// There are  test cases, each with a pair of linked lists.

// In the first case, linked lists are: 1 -> 2 -> NULL and 1 -> NULL

// In the second case, linked lists are: 1 -> 2 -> NULL and 1 -> 2 -> NULL

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

// const SinglyLinkedListNode = class {
//     constructor(nodeData) {
//         this.data = nodeData;
//         this.next = null;
//     }
// };

// const SinglyLinkedList = class {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     insertNode(nodeData) {
//         const node = new SinglyLinkedListNode(nodeData);

//         if (this.head == null) {
//             this.head = node;
//         } else {
//             this.tail.next = node;
//         }

//         this.tail = node;
//     }
// };

// function printSinglyLinkedList(node, sep, ws) {
//     while (node != null) {
//         ws.write(String(node.data));

//         node = node.next;

//         if (node != null) {
//             ws.write(sep);
//         }
//     }
// }

// // Complete the CompareLists function below.

// /*
//  * For your reference:
//  *
//  * SinglyLinkedListNode {
//  *     int data;
//  *     SinglyLinkedListNode next;
//  * }
//  *
//  */

// pseudo code
// check if both heads are null => return 1
// else if one or the other is null while the other isn't => return 0;
// else if one or the other's head.next is null while the other isn't => return 0
// else traverse through each list putting data into two separate arrays
// then check if array.lengths are equal, if not => return 0
// else iterate through length of array and check each value against other array value
// keep track of a boolean that will be set to false if any of the values aren't equal
function CompareLists(llist1, llist2) {
  if (llist1 === null && llist2 === null) {
    return 1;
  } else if (
    (llist1 === null && llist2 !== null) ||
    (llist1 !== null && llist2 === null)
  ) {
    return 0;
  } else if (
    (llist1.next === null && llist2.next !== null) ||
    (llist1.next !== null && llist2.next === null)
  ) {
    return 0;
  } else {
    let current1 = llist1;
    let current2 = llist2;
    let arr1 = [];
    let arr2 = [];
    while (current1) {
      arr1.push(current1.data);
      current1 = current1.next;
    }
    while (current2) {
      arr2.push(current2.data);
      current2 = current2.next;
    }
    if (arr1.length !== arr2.length) {
      return 0;
    } else {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return 0;
        }
      }
      return 1;
    }
  }
}

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const tests = parseInt(readLine(), 10);

//     for (let testsItr = 0; testsItr < tests; testsItr++) {
//         const llist1Count = parseInt(readLine(), 10);

//         let llist1 = new SinglyLinkedList();

//         for (let i = 0; i < llist1Count; i++) {
//             const llist1Item = parseInt(readLine(), 10);
//             llist1.insertNode(llist1Item);
//         }

//       	const llist2Count = parseInt(readLine(), 10);

//         let llist2 = new SinglyLinkedList();

//         for (let i = 0; i < llist2Count; i++) {
//             const llist2Item = parseInt(readLine(), 10);
//             llist2.insertNode(llist2Item);
//         }

//         let result = CompareLists(llist1.head, llist2.head);

//         ws.write((result ? 1 : 0) + "\n");
//     }

//     ws.end();
// }
