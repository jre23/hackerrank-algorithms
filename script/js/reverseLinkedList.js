// Given the pointer to the head node of a linked list, change the next pointers of the nodes so that their order is reversed. The head pointer given may be null meaning that the initial list is empty.

// Example
//  references the list

// Manipulate the  pointers of each node in place and return , now referencing the head of the list .

// Function Description

// Complete the reverse function in the editor below.

// reverse has the following parameter:

// SinglyLinkedListNode pointer head: a reference to the head of a list
// Returns

// SinglyLinkedListNode pointer: a reference to the head of the reversed list
// Input Format

// The first line contains an integer , the number of test cases.

// Each test case has the following format:

// The first line contains an integer , the number of elements in the linked list.
// Each of the next  lines contains an integer, the  values of the elements in the linked list.

// Constraints

// , where  is the  element in the list.
// Sample Input

// 1
// 5
// 1
// 2
// 3
// 4
// 5
// Sample Output

// 5 4 3 2 1
// Explanation

// The initial linked list is: .

// The reversed linked list is: .

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

// // Complete the reverse function below.

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
// else traverse through list keeping track of previous and current
// when finished traversing through list, make sure to make head === current (or previous...don't know yet)
function reverse(head) {
  if (head === null || head.next === null) {
    return head;
  } else {
    let previous = null;
    let current = head;
    let temp = head;
    while (current) {
      temp = current.next;
      current.next = previous;
      previous = current;
      current = temp;
    }
    return previous;
  }
}

// 1 -> 2 -> 3 -> 4 -> 5 -> null

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

//         let llist1 = reverse(llist.head);

//         printSinglyLinkedList(llist1, " ", ws)
//         ws.write("\n");
//     }

//     ws.end();
// }
