// Given a pointer to the head of a linked list and a specific position, determine the data value at that position. Count backwards from the tail node. The tail is at postion 0, its parent is at 1 and so on.

// Example
//  refers to

// Each of the data values matches its distance from the tail. The value  is at the desired position.

// Function Description

// Complete the getNode function in the editor below.

// getNode has the following parameters:

// SinglyLinkedListNode pointer head: refers to the head of the list
// int positionFromTail: the item to retrieve
// Returns

// int: the value at the desired position
// Input Format

// The first line contains an integer , the number of test cases.

// Each test case has the following format:
// The first line contains an integer , the number of elements in the linked list.
// The next  lines contains an integer, the data value for an element of the linked list.
// The last line contains an integer , the position from the tail to retrieve the value of.

// Constraints

// , where  is the  element of the linked list.
// Sample Input

// 2
// 1
// 1
// 0
// 3
// 3
// 2
// 1
// 2
// Sample Output

// 1
// 3
// Explanation

// In the first case, there is one element in linked list with a value of 1. The last (only) element contains 1.

// In the second case, the list is . The element with position of 2 from tail contains 3.

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

// // Complete the getNode function below.

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
// if head === null => return null;
// else traverse through the list adding each data into an array using unshift()
// return arr[positionFromTail];
function getNode(head, positionFromTail) {
  if (head === null) {
    return null;
  } else {
    let current = head;
    let arr = [];
    while (current) {
      arr.unshift(current.data);
      current = current.next;
    }
    return arr[positionFromTail];
  }
}

// sample linkedList
// 3 -> 2 -> 1 -> 0 -> null
// [0, 1, 2, 3]

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const tests = parseInt(readLine(), 10);

//     for (let testsItr = 0; testsItr < tests; testsItr++) {
//         const llistCount = parseInt(readLine(), 10);

//         let llist = new SinglyLinkedList();

//         for (let i = 0; i < llistCount; i++) {
//             const llistItem = parseInt(readLine(), 10);
//             llist.insertNode(llistItem);
//         }

//         const position = parseInt(readLine(), 10);

//         let result = getNode(llist.head, position);

//         ws.write(result + "\n");
//     }

//     ws.end();
// }
