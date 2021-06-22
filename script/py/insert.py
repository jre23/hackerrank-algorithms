# You are given a pointer to the root of a binary search tree and values to be inserted into the tree. Insert the values into their appropriate position in the binary search tree and return the root of the updated binary tree. You just have to complete the function.

# Input Format

# You are given a function,

# Node * insert (Node * root ,int data) {

# }
# Constraints

# No. of nodes in the tree  500
# Output Format

# Return the root of the binary search tree after inserting the value into the tree.

# Sample Input

#         4
#        / \
#       2   7
#      / \
#     1   3
# The value to be inserted is 6.

# Sample Output

#          4
#        /   \
#       2     7
#      / \   /
#     1   3 6

class Node:
    def __init__(self, info):
        self.info = info  
        self.left = None  
        self.right = None 
        self.level = None 

    def __str__(self):
        return str(self.info) 

def preOrder(root):
    if root == None:
        return
    print (root.info, end=" ")
    preOrder(root.left)
    preOrder(root.right)
    
class BinarySearchTree:
    def __init__(self): 
        self.root = None

#Node is defined as
#self.left (the left child of the node)
#self.right (the right child of the node)
#self.info (the value of the node)

# pseudo code
# check base case
# if self is None, self.info = val
# return self
# else
# traverse through tree checking if val > or <  self.info
# if < => check left
# if node.left recurse left
# else go right
    def insert(self, val):
        #Enter you code here.
        if self.root == None:
            self.root = Node(val)
        else:
            temp = self.root
            
            while True:
                if val < temp.info:
                    if temp.left:
                        temp = temp.left
                    else:
                        temp.left = Node(val)
                        break
                elif val > temp.info:
                    if temp.right:
                        temp = temp.right
                    else:
                        temp.right = Node(val)
                        break
                else:
                    break

tree = BinarySearchTree()
t = int(input())

arr = list(map(int, input().split()))

for i in range(t):
    tree.insert(arr[i])

preOrder(tree.root)
