# Given a pointer to the root of a binary tree, you need to print the level order traversal of this tree. In level-order traversal, nodes are visited level by level from left to right. Complete the function  and print the values in a single line separated by a space.

# For example:

#      1
#       \
#        2
#         \
#          5
#         /  \
#        3    6
#         \
#          4  
# For the above tree, the level order traversal is .

# Input Format

# You are given a function,

# void levelOrder(Node * root) {

# }
# Constraints

#  Nodes in the tree  

# Output Format

# Print the values in a single line separated by a space.

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

# 1 2 5 3 6 4

# Explanation

# We need to print the nodes level by level. We process each level from left to right.
# Level Order Traversal: 1 -> 2 -> 5 -> 3 -> 6 -> 4.

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

# pseudo code
# get height of the binary tree
# loop from 1 to height of tree (each level) and print root, then left to right
def levelOrder(root):
    #Write your code here
    height = getHeight(root)
    for i in range (1, height + 1):
        printLevel(root, i)

def printLevel(node, level):
    if node is None:
        return
    if level == 1:
        print(node.info, end=' ')
    elif level > 1:
        printLevel(node.left, level - 1)
        printLevel(node.right, level - 1)
    
def getHeight(root):
    if root is None:
        return 0
    else:
        leftHeight = getHeight(root.left)
        rightHeight = getHeight(root.right)
        return (max(leftHeight, rightHeight) + 1)
    
