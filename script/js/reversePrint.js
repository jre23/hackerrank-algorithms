// Given a pointer to the head of a singly-linked list, print each  value from the reversed list. If the given list is empty, do not print anything.

// Example

//  refers to the linked list with  values

// Print the following:
// 3
// 2
// 1

// Function Description

// Complete the reversePrint function in the editor below.

// reversePrint has the following parameters:

// SinglyLinkedListNode pointer head: a reference to the head of the list
// Prints

// The  values of each node in the reversed list.

// Input Format

// The first line of input contains , the number of test cases.

// The input of each test case is as follows:

// The first line contains an integer , the number of elements in the list.
// Each of the next n lines contains a data element for a list node.
// Constraints

// , where  is the  element in the list.
// Sample Input

// 3
// 5
// 16
// 12
// 4
// 2
// 5
// 3
// 7
// 3
// 9
// 5
// 5
// 1
// 18
// 3
// 13
// Sample Output

// 5
// 2
// 4
// 12
// 16
// 9
// 3
// 7
// 13
// 3
// 18
// 1
// 5
// Explanation

// There are three test cases. There are no blank lines between test case output.

// The first linked list has  elements: . Printing this in reverse order produces:
// 5
// 2
// 4
// 12
// 16

// The second linked list has  elements: . Printing this in reverse order produces:
// 9
// 3
// 7
// The third linked list has  elements: . Printing this in reverse order produces:
// 13
// 3
// 18
// 1
// 5

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

// function printSinglyLinkedList(node, sep) {
//     while (node != null) {
//         process.stdout.write(String(node.data));

//         node = node.next;

//         if (node != null) {
//             process.stdout.write(sep);
//         }
//     }
// }

// // Complete the reversePrint function below.

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
// if head === null => return; don't print anything
// else, traverse through list, add each value into an array
// use unshift() to add to the front of the array so that when the array is looped through, print values FILO
// or use push() and iterate backwards through array
function reversePrint(head) {
  if (head === null) {
    return;
  } else {
    let current = head;
    let arr = [];
    while (current) {
      arr.unshift(current.data);
      current = current.next;
    }
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
}

// function main() {
//     const tests = parseInt(readLine(), 10);

//     for (let testsItr = 0; testsItr < tests; testsItr++) {
//         const llistCount = parseInt(readLine(), 10);

//         let llist = new SinglyLinkedList();

//         for (let i = 0; i < llistCount; i++) {
//             const llistItem = parseInt(readLine(), 10);
//             llist.insertNode(llistItem);
//         }

//         reversePrint(llist.head);
//     }
// }
