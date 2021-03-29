// Given the pointer to the head node of a linked list and an integer to insert at a certain position, create a new node with the given integer as its  attribute, insert this node at the desired position and return the head node.

// A position of 0 indicates head, a position of 1 indicates one node away from the head and so on. The head pointer given may be null meaning that the initial list is empty.

// Example
//  refers to the first node in the list

// Insert a node at position  with . The new list is

// Function Description Complete the function insertNodeAtPosition in the editor below. It must return a reference to the head node of your finished list.

// insertNodeAtPosition has the following parameters:

// head: a SinglyLinkedListNode pointer to the head of the list
// data: an integer value to insert as data in your new node
// position: an integer position to insert the new node, zero based indexing
// Returns

// SinglyLinkedListNode pointer: a reference to the head of the revised list
// Input Format

// The first line contains an integer , the number of elements in the linked list.
// Each of the next  lines contains an integer SinglyLinkedListNode[i].data.
// The next line contains an integer , the data of the node that is to be inserted.
// The last line contains an integer .

// Constraints

// , where  is the  element of the linked list.
// .
// Sample Input

// 3
// 16
// 13
// 7
// 1
// 2
// Sample Output

// 16 13 1 7
// Explanation

// The initial linked list is . Insert  at the position  which currently has  in it. The updated linked list is .

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

const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
};

// function printSinglyLinkedList(node, sep, ws) {
//     while (node != null) {
//         ws.write(String(node.data));

//         node = node.next;

//         if (node != null) {
//             ws.write(sep);
//         }
//     }
// }

// // Complete the insertNodeAtPosition function below.

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
// create new node, set data = data, next = null
// first check if empty, if head === null, set head = data
// else iterate through linked list up to position and checking while there is a .next
// if arrived at position, set newNode.next to point at current.next, set previous next to point at newNode
// return head

// class ListNode {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(head = null) {
//     this.head = head;
//   }
// }

function insertNodeAtPosition(head, data, position) {
  let newNode = new SinglyLinkedListNode(data);
  if (head === null) {
    head = newNode;
  } else {
    let i = 0;
    let current = head;
    while (i < position - 1 && current.next) {
      current = current.next;
      i++;
    }
    newNode.next = current.next;
    current.next = newNode;
  }
  return head;
}

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const llistCount = parseInt(readLine(), 10);

//     let llist = new SinglyLinkedList();

//     for (let i = 0; i < llistCount; i++) {
//         const llistItem = parseInt(readLine(), 10);
//         llist.insertNode(llistItem);
//     }

//     const data = parseInt(readLine(), 10);

//     const position = parseInt(readLine(), 10);

//     let llist_head = insertNodeAtPosition(llist.head, data, position);

//     printSinglyLinkedList(llist_head, " ", ws)
//     ws.write("\n");

//     ws.end();
// }
