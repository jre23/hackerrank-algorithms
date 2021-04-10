// Given a reference to the head of a doubly-linked list and an integer, , create a new DoublyLinkedListNode object having data value  and insert it at the proper location to maintain the sort.

// Example

//  refers to the list

// Return a reference to the new list: .

// Function Description

// Complete the sortedInsert function in the editor below.

// sortedInsert has two parameters:

// DoublyLinkedListNode pointer head: a reference to the head of a doubly-linked list

// int data: An integer denoting the value of the  field for the DoublyLinkedListNode you must insert into the list.

// Returns

// DoublyLinkedListNode pointer: a reference to the head of the list
// Note: Recall that an empty list (i.e., where ) and a list with one element are sorted lists.

// Input Format

// The first line contains an integer , the number of test cases.

// Each of the test case is in the following format:

// The first line contains an integer , the number of elements in the linked list.
// Each of the next  lines contains an integer, the data for each node of the linked list.
// The last line contains an integer, , which needs to be inserted into the sorted doubly-linked list.
// Constraints

// Sample Input

// STDIN   Function
// -----   --------
// 1       t = 1
// 4       n = 4
// 1       node data values = 1, 3, 4, 10
// 3
// 4
// 10
// 5       data = 5
// Sample Output

// 1 3 4 5 10
// Explanation

// The initial doubly linked list is:  .

// The doubly linked list after insertion is:

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

const DoublyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
    this.prev = null;
  }
};

const DoublyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    let node = new DoublyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }

    this.tail = node;
  }
};

// function printDoublyLinkedList(node, sep, ws) {
//     while (node != null) {
//         ws.write(String(node.data));

//         node = node.next;

//         if (node != null) {
//             ws.write(sep);
//         }
//     }
// }

// // Complete the sortedInsert function below.

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
// if head === null => return new node with data
// else if head.next === null => check if head.data is < data, add new node with data after head, else add it before (have to make sure to keep track of next and previous pointers)
// else traverse through the list, checking current.data is less than data and if next is !null, if so, check if next.data if > data, if so insert
// if next is null, insert
// sample linkedlist
// 11 -> 13 -> 15 -> null

function sortedInsert(head, data) {
  let newNode = new DoublyLinkedListNode(data);
  if (head === null) {
    head = newNode;
    return head;
  } else if (head.data > data) {
    newNode.next = head;
    head.prev = newNode;
    head = newNode;
    return head;
  } else {
    let current = head;
    let temp = head;
    while (current.next) {
      if (current.data < data) {
        if (current.next.data > data) {
          // insert
          temp = current.next;
          newNode.next = current.next;
          current.next = newNode;
          newNode.prev = current;
          temp.prev = newNode;
          return head;
        } else {
          current = current.next;
        }
      } else {
        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;
        return head;
      }
    }
    // reached end of list, so insert here
    current.next = newNode;
    newNode.prev = current;
    return head;
  }
}

// sample linkedlist
// 1 -> 2 -> 3 -> null

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

//         const data = parseInt(readLine(), 10);

//         let llist1 = sortedInsert(llist.head, data);

//         printDoublyLinkedList(llist1, " ", ws)
//         ws.write("\n");
//     }

//     ws.end();
// }
