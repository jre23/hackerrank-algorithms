// Print the Elements of a Linked List

// This is an to practice traversing a linked list. Given a pointer to the head node of a linked list, print each node's  element, one per line. If the head pointer is null (indicating the list is empty), there is nothing to print.

// Function Description

// Complete the printLinkedList function in the editor below.

// printLinkedList has the following parameter(s):

// SinglyLinkedListNode head: a reference to the head of the list
// Print

// For each node, print its  value on a new line (console.log in Javascript).
// Input Format

// The first line of input contains , the number of elements in the linked list.
// The next  lines contain one element each, the  values for each node.

// Note: Do not read any input from stdin/console. Complete the printLinkedList function in the editor below.

// Constraints

// , where  is the  element of the linked list.
// Sample Input

// 2
// 16
// 13
// Sample Output

// 16
// 13
// Explanation

// There are two elements in the linked list. They are represented as 16 -> 13 -> NULL. So, the printLinkedList function should print 16 and 13 each on a new line.

// 'use strict';

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

// // Complete the printLinkedList function below.

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
// first check is head is null, => return;
// if head.next is null, => console.log(head.data);
// else traverse list, checking for current.next, printing each data element
function printLinkedList(head) {
  if (head === null) {
    return;
  } else if (head.next === null) {
    console.log(head.data);
    return;
  } else {
    let current = head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// function main() {
//     const llistCount = parseInt(readLine(), 10);

//     let llist = new SinglyLinkedList();

//     for (let i = 0; i < llistCount; i++) {
//         const llistItem = parseInt(readLine(), 10);
//         llist.insertNode(llistItem);
//     }

//     printLinkedList(llist.head);
// }
