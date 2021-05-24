// You are given the pointer to the head node of a sorted linked list, where the data in the nodes is in ascending order. Delete nodes and return a sorted list with each distinct value in the original list. The given head pointer may be null indicating that the list is empty.

// Example

//  refers to the first node in the list .

// Remove 1 of the  data values and return  pointing to the revised list .

// Function Description

// Complete the removeDuplicates function in the editor below.

// removeDuplicates has the following parameter:

// SinglyLinkedListNode pointer head: a reference to the head of the list
// Returns

// SinglyLinkedListNode pointer: a reference to the head of the revised list
// Input Format

// The first line contains an integer , the number of test cases.

// The format for each test case is as follows:

// The first line contains an integer , the number of elements in the linked list.
// Each of the next  lines contains an integer, the  value for each of the elements of the linked list.

// Constraints

// Sample Input

// STDIN   Function
// -----   --------
// 1       t = 1
// 5       n = 5
// 1       data values = 1, 2, 2, 3, 4
// 2
// 2
// 3
// 4
// Sample Output

// 1 2 3 4
// Explanation

// The initial linked list is: .

// The final linked list is: .

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

// // Complete the removeDuplicates function below.

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
// if head === null || head.next === null, return head;
// else traverse through list adding key/value pair into a map
// check each next value against map
// if value is in map, delete node
// return head;
function removeDuplicates(head) {
  if (head === null || head.next === null) {
    return head;
  } else {
    let map = new Map();
    map.set(head.data, 1);
    let current = head;
    while (current.next) {
      if (map.has(current.next.data)) {
        // remove
        let temp = current.next;
        current.next = current.next.next;
        temp.next = null;
      } else {
        map.set(current.next.data, 1);
        current = current.next;
      }
    }
    return head;
  }
}

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const t = parseInt(readLine(), 10);

//     for (let tItr = 0; tItr < t; tItr++) {
//         const llistCount = parseInt(readLine(), 10);

//         let llist = new SinglyLinkedList();

//         for (let i = 0; i < llistCount; i++) {
//             const llistItem = parseInt(readLine(), 10);
//             llist.insertNode(llistItem);
//         }

//         let llist1 = removeDuplicates(llist.head);

//         printSinglyLinkedList(llist1, " ", ws)
//         ws.write("\n");
//     }

//     ws.end();
// }
