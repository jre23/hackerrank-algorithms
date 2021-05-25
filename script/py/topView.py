# Given a pointer to the root of a binary tree, print the top view of the binary tree.

# The tree as seen from the top the nodes, is called the top view of the tree.

# For example :

#    1
#     \
#      2
#       \
#        5
#       /  \
#      3    6
#       \
#        4
# Top View : 

# Complete the function  and print the resulting values on a single line separated by space.

# Input Format

# You are given a function,

# void topView(node * root) {

# }
# Constraints

#  Nodes in the tree  

# Output Format

# Print the values on a single line separated by space.

# Sample Input

#    1
#     \
#      2
#       \
#        5
#       /  \
#      3    6
#       \
#        4
# Sample Output

# 1 2 5 6

# Explanation

#    1
#     \
#      2
#       \
#        5
#       /  \
#      3    6
#       \
#        4
# From the top, only nodes  are visible.

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
def topView(root):
    #Write your code here
    if root is None:
      return

tree = BinarySearchTree()
arr1 = [1, 2, 5, 3, 4, 6]

for i in range(len(arr1)):
  tree.create(arr1[i])

print(topView(tree.root), "expected 1 2 5 6")

# t = int(input())

# arr = list(map(int, input().split()))

# for i in range(t):
#     tree.create(arr[i])

# topView(tree.root)