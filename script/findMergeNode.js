// Given pointers to the head nodes of  linked lists that merge together at some point, find the node where the two lists merge. The merge point is where both lists point to the same node, i.e. they reference the same memory location. It is guaranteed that the two head nodes will be different, and neither will be NULL. If the lists share a common node, return that node's  value.

// Note: After the merge point, both lists will share the same node pointers.

// Example

// In the diagram below, the two lists converge at Node x:

// [List #1] a--->b--->c
//                      \
//                       x--->y--->z--->NULL
//                      /
//      [List #2] p--->q
// Function Description

// Complete the findMergeNode function in the editor below.

// findMergeNode has the following parameters:

// SinglyLinkedListNode pointer head1: a reference to the head of the first list
// SinglyLinkedListNode pointer head2: a reference to the head of the second list
// Returns

// int: the  value of the node where the lists merge
// Input Format

// Do not read any input from stdin/console.

// The first line contains an integer , the number of test cases.

// Each of the test cases is in the following format:
// The first line contains an integer, , the node number where the merge will occur.
// The next line contains an integer,  that is the number of nodes in the first list.
// Each of the following  lines contains a  value for a node. The next line contains an integer,  that is the number of nodes in the second list.
// Each of the following  lines contains a  value for a node.

// Constraints

// The lists will merge.
// .
//  .

// Sample Input

// The diagrams below are graphical representations of the lists that input nodes  and  are connected to.

// Test Case 0

//  1
//   \
//    2--->3--->NULL
//   /
//  1
// Test Case 1

// 1--->2
//       \
//        3--->Null
//       /
//      1
// Sample Output

// 2
// 3
// Explanation

// Test Case 0: As demonstrated in the diagram above, the merge node's data field contains the integer .
// Test Case 1: As demonstrated in the diagram above, the merge node's data field contains the integer .

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

// /*
//     Find merge point of two linked lists
//     Note that the head may be 'null' for the empty list.
//     Node is defined as
//     var Node = function(data) {
//         this.data = data;
//         this.next = null;
//     }
// */

// // This is a "method-only" submission.
// // You only need to complete this method.

// pseudo code
// since it is guaranteed that the two head nodes will be different, and neither will be NULL, don't have to check for this
// traverse through headA and put nodes in a map
// traverse through headB and check map if it has the same node
// if so, return node.data
// since the lists will merge, a node should be found
function findMergeNode(headA, headB) {
  let map = new Map();
  let current = headA;
  map.set(headA, 1);
  while (current.next) {
    map.set(current.next, 1);
    current = current.next;
  }
  current = headB;
  while (current) {
    if (map.has(current)) {
      return current.data;
    } else {
      current = current.next;
    }
  }
}

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const tests = parseInt(readLine(), 10);

//     for (let testsItr = 0; testsItr < tests; testsItr++) {
//         const index = parseInt(readLine(), 10);

//         const llist1Count = parseInt(readLine(), 10);

//         let llist1 = new SinglyLinkedList();

//         for (let i = 0; i < llist1Count; i++) {
//             const llist1Item = parseInt(readLine(), 10);
//             llist1.insertNode(llist1Item);
//         }

//       	const llist2Count = parseInt(readLine(), 10);

//         let llist2 = new SinglyLinkedList();

//         for (let i = 0; i < llist2Count; i++) {
//             const llist2Item = parseInt(readLine(), 10);
//             llist2.insertNode(llist2Item);
//         }

//       	let ptr1 = llist1.head;
//         let ptr2 = llist2.head;

//         for (let i = 0; i < llist1Count; i++) {
//           if (i < index) {
//             ptr1 = ptr1.next;
//           }
//         }

//         for (let i = 0; i < llist2Count; i++) {
//           if (i != llist2Count-1) {
//             ptr2 = ptr2.next;
//           }
//         }

//         ptr2.next = ptr1;

//         let result = findMergeNode(llist1.head, llist2.head);

//         ws.write(result + "\n");
//     }

//     ws.end();
// }
