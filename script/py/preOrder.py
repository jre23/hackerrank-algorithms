# Complete the  function in the editor below, which has  parameter: a pointer to the root of a binary tree. It must print the values in the tree's preorder traversal as a single line of space-separated values.

# Input Format

# Our test code passes the root node of a binary tree to the preOrder function.

# Constraints

#  Nodes in the tree 

# Output Format

# Print the tree's preorder traversal as a single line of space-separated values.

# Sample Input

#      1
#       \
#        2
#         \
#          5
#         /  \
#        3    6
#         \
#          4  
# Sample Output

# 1 2 5 3 4 6 
# Explanation

# The preorder traversal of the binary tree is printed.

class Node:
    def __init__(self, info): 
        self.info = info  
        self.left = None  
        self.right = None 
        self.level = None 

    def __str__(self):
        return str(self.info) 

class BinarySearchTree:
    def __init__(self): 
        self.root = None

    def create(self, val):  
        if self.root == None:
            self.root = Node(val)
        else:
            current = self.root
         
            while True:
                if val < current.info:
                    if current.left:
                        current = current.left
                    else:
                        current.left = Node(val)
                        break
                elif val > current.info:
                    if current.right:
                        current = current.right
                    else:
                        current.right = Node(val)
                        break
                else:
                    break

"""
Node is defined as
self.left (the left child of the node)
self.right (the right child of the node)
self.info (the value of the node)
"""

# preorder traversal: root, left, right
def preOrder(root):
    #Write your code here
    if root is None:
      return
    else:
      print(str(root.info), end=" ")
      if (root.left):
        preOrder(root.left)
      if (root.right):
        preOrder(root.right)


tree = BinarySearchTree()
arr1 = [1, 2, 5, 3, 4, 6]

for i in range(len(arr1)):
  tree.create(arr1[i])

print(preOrder(tree.root), "expected 1 2 5 3 4 6")

tree2 = BinarySearchTree()
arr2 = [1, 14, 3, 2, 7, 4, 5, 6, 13, 10, 8, 9, 11, 12, 15]

for i in range(len(arr2)):
  tree2.create(arr2[i])

print(preOrder(tree2.root), "expected 1 14 3 2 7 4 5 6 13 10 8 9 11 12 15")

# t = int(input())

# arr = list(map(int, input().split()))

# for i in range(t):
#     tree.create(arr[i])

# preOrder(tree.root)