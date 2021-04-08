// Insert a Node at the Tail of a Linked List

// You are given the pointer to the head node of a linked list and an integer to add to the list. Create a new node with the given integer. Insert this node at the tail of the linked list and return the head node of the linked list formed after inserting this new node. The given head pointer may be null, meaning that the initial list is empty.

// Function Description

// Complete the insertNodeAtTail function in the editor below.

// insertNodeAtTail has the following parameters:

// SinglyLinkedListNode pointer head: a reference to the head of a list
// int data: the data value for the node to insert
// Returns

// SinglyLinkedListNode pointer: reference to the head of the modified linked list
// Input Format

// The first line contains an integer , the number of elements in the linked list.
// The next  lines contain an integer each, the value that needs to be inserted at tail.

// Constraints

// Sample Input

// STDIN Function ----- -------- 5 size of linked list n = 5 141 linked list data values 141..474 302 164 530 474

// Sample Output

// 141
// 302
// 164
// 530
// 474
// Explanation

// First the linked list is NULL. After inserting 141, the list is 141 -> NULL.
// After inserting 302, the list is 141 -> 302 -> NULL.
// After inserting 164, the list is 141 -> 302 -> 164 -> NULL.
// After inserting 530, the list is 141 -> 302 -> 164 -> 530 -> NULL. After inserting 474, the list is 141 -> 302 -> 164 -> 530 -> 474 -> NULL, which is the final list.

// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
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

// // Complete the insertNodeAtTail function below.

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
// first check if head is null, create new node with data, set head === data, => return head;
// if head.next === null, create new node with data, set head.next = data
// else traverse to end of list, set current.next = data;
// return head

function insertNodeAtTail(head, data) {
  let newNode = new SinglyLinkedListNode(data);
  if (head === null) {
    head = newNode;
    return head;
  } else {
    let current = head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    return head;
  }
}

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const llistCount = parseInt(readLine(), 10);

//     let llist = new SinglyLinkedList();

//     for (let i = 0; i < llistCount; i++) {
//         const llistItem = parseInt(readLine(), 10);
//     	const llist_head = insertNodeAtTail(llist.head, llistItem);
//       	llist.head = llist_head;
//     }

//     printSinglyLinkedList(llist.head, '\n', ws);
//     ws.write('\n');

//     ws.end();
// }
