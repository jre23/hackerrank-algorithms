// A linked list is said to contain a cycle if any node is visited more than once while traversing the list. Given a pointer to the head of a linked list, determine if it contains a cycle. If it does, return . Otherwise, return .

// Example

//  refers to the list of nodes

// The numbers shown are the node numbers, not their data values. There is no cycle in this list so return .

//  refers to the list of nodes

// There is a cycle where node 3 points back to node 1, so return .

// Function Description

// Complete the has_cycle function in the editor below.

// It has the following parameter:

// SinglyLinkedListNode pointer head: a reference to the head of the list
// Returns

// int:  if there is a cycle or  if there is not
// Note: If the list is empty,  will be null.

// Input Format

// The code stub reads from stdin and passes the appropriate argument to your function. The custom test cases format will not be described for this question due to its complexity. Expand the section for the main function and review the code if you would like to figure out how to create a custom case.

// Constraints

// Sample Input

// References to each of the following linked lists are passed as arguments to your function:

// Sample Inputs

// Sample Output

// 0
// 1
// Explanation

// The first list has no cycle, so return .
// The second list has a cycle, so return .
// JavaScript (Node.js)

// 1646566676869707172737475767778798081
//  null;
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

// // Complete the hasCycle function below.

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
// else traverse list adding each node into a map
// if current.next is in the map, return 1
// else return 0
// return 1 if cycle, else 0
function hasCycle(head) {
  if (head === null || head.next === null) {
    return 0;
  } else {
    let current = head;
    let map = new Map();
    map.set(head, 1);
    while (current.next) {
      if (map.has(current.next)) {
        return 1;
      } else {
        map.set(current.next, 1);
        current = current.next;
      }
    }
    return 0;
  }
}

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const tests = parseInt(readLine(), 10);

//     for (let testsItr = 0; testsItr < tests; testsItr++) {
//         const index = parseInt(readLine(), 10);

//         const llistCount = parseInt(readLine(), 10);

//         let llist = new SinglyLinkedList();

//         for (let i = 0; i < llistCount; i++) {
//             const llistItem = parseInt(readLine(), 10);
//             llist.insertNode(llistItem);
//         }

//       	const extra = new SinglyLinkedListNode(-1);
//         const temp = llist.head;

//         for (let i = 0; i < llistCount; i++) {
//           	if (i == index) {
//             	extra = temp;
//           	}

//           	if (i != llistCount-1) {
//             	temp = temp.next;
//           	}
//         }

//         temp.next = extra;

//         let result = hasCycle(llist.head);

//         ws.write((result ? 1 : 0) + "\n");
//     }

//     ws.end();
// }
