// Given the pointer to the head node of a doubly linked list, reverse the order of the nodes in place. That is, change the next and prev pointers of the nodes so that the direction of the list is reversed. Return a reference to the head node of the reversed list.

// Note: The head node might be NULL to indicate that the list is empty.

// Function Description

// Complete the reverse function in the editor below.

// reverse has the following parameter(s):

// DoublyLinkedListNode head: a reference to the head of a DoublyLinkedList
// Returns
// - DoublyLinkedListNode: a reference to the head of the reversed list

// Input Format

// The first line contains an integer , the number of test cases.

// Each test case is of the following format:

// The first line contains an integer , the number of elements in the linked list.
// The next  lines contain an integer each denoting an element of the linked list.
// Constraints

// Output Format

// Return a reference to the head of your reversed list. The provided code will print the reverse array as a one line of space-separated integers for each test case.

// Sample Input

// 1
// 4
// 1
// 2
// 3
// 4
// Sample Output

// 4 3 2 1
// Explanation

// The initial doubly linked list is:

// The reversed doubly linked list is:

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

// const DoublyLinkedListNode = class {
//     constructor(nodeData) {
//         this.data = nodeData;
//         this.next = null;
//         this.prev = null;
//     }
// };

// const DoublyLinkedList = class {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     insertNode(nodeData) {
//         let node = new DoublyLinkedListNode(nodeData);

//         if (this.head == null) {
//             this.head = node;
//         } else {
//             this.tail.next = node;
//             node.prev = this.tail;
//         }

//         this.tail = node;
//     }
// };

// function printDoublyLinkedList(node, sep, ws) {
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
//  * DoublyLinkedListNode {
//  *     int data;
//  *     DoublyLinkedListNode next;
//  *     DoublyLinkedListNode prev;
//  * }
//  *
//  */

// pseudo code
// if head === null || head.next === null, return head
// else traverse through list, keeping track of previous, current, and next
// sample list: 1 -> 2 -> 3 -> 4 -> 5 -> null
// reversed: 5 -> 4 -> 3 -> 2 -> 1 -> null
function reverse(head) {
  if (head === null || head.next === null) {
    return head;
  } else {
    let current = head;
    let previous = null;
    let temp = null;
    while (current) {
      temp = current.next;
      current.next = previous;
      current.prev = temp;
      previous = current;
      current = temp;
    }
    return previous;
  }
}

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const t = parseInt(readLine(), 10);

//     for (let tItr = 0; tItr < t; tItr++) {
//         const llistCount = parseInt(readLine(), 10);

//         let llist = new DoublyLinkedList();

//         for (let i = 0; i < llistCount; i++) {
//             const llistItem = parseInt(readLine(), 10);
//             llist.insertNode(llistItem);
//         }

//         let llist1 = reverse(llist.head);

//         printDoublyLinkedList(llist1, " ", ws)
//         ws.write("\n");
//     }

//     ws.end();
// }
