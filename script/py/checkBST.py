# For the purposes of this challenge, we define a binary search tree to be a binary tree with the following properties:

# The  value of every node in a node's left subtree is less than the data value of that node.
# The  value of every node in a node's right subtree is greater than the data value of that node.
# The  value of every node is distinct.
# For example, the image on the left below is a valid BST. The one on the right fails on several counts:
# - All of the numbers on the right branch from the root are not larger than the root.
# - All of the numbers on the right branch from node 5 are not larger than 5.
# - All of the numbers on the left branch from node 5 are not smaller than 5.
# - The data value 1 is repeated.

# Given the root node of a binary tree, determine if it is a binary search tree.

# Function Description

# Complete the function checkBST in the editor below. It must return a boolean denoting whether or not the binary tree is a binary search tree.

# checkBST has the following parameter(s):

# root: a reference to the root node of a tree to test
# Input Format

# You are not responsible for reading any input from stdin. Hidden code stubs will assemble a binary tree and pass its root node to your function as an argument.

# Constraints

# Output Format

# Your function must return a boolean true if the tree is a binary search tree. Otherwise, it must return false.

# Sample Input

# image

# Sample Output

# Yes
# Explanation

# The tree in the diagram satisfies the ordering property for a Binary Search Tree, so we print Yes.

class Node:
    def __init__(self, data): 
        self.data = data  
        self.left = None  
        self.right = None 
        self.level = None 

    def __str__(self):
        return str(self.data) 

class BinarySearchTree:
    def __init__(self): 
        self.root = None

    def create(self, val):  
        if self.root == None:
            self.root = Node(val)
        else:
            current = self.root
         
            while True:
                if val < current.data:
                    if current.left:
                        current = current.left
                    else:
                        current.left = Node(val)
                        break
                elif val > current.data:
                    if current.right:
                        current = current.right
                    else:
                        current.right = Node(val)
                        break
                else:
                    break

# """ Node is defined as
# class node:
#     def __init__(self, data):
#         self.data = data
#         self.left = None
#         self.right = None
# """

dict = {}
def checkBST(root):
  if root is None:
    return True
  elif not root.left and not root.right:
    return True
  else:
    arr = inOrder(root)
    # print(arr, "arr")
    for i in range(len(arr)):
      if (i > 0 and arr[i] <= arr[i - 1]):
        return False
    return True

arr = []
def inOrder(root):
  if root is None:
    return
  else:
    if root.left:
      inOrder(root.left) 
    arr.append(root.data)
    if root.right:
      inOrder(root.right)
  return arr
      

testTree = BinarySearchTree()
arr = [1, 2, 4, 3, 5, 6, 7]
for i in range(len(arr)):
    testTree.create(arr[i])

print(checkBST(testTree.root), "expected No")
