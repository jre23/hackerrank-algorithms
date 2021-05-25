# You are given pointer to the root of the binary search tree and two values  and . You need to return the lowest common ancestor (LCA) of  and  in the binary search tree.

# image
# In the diagram above, the lowest common ancestor of the nodes  and  is the node . Node  is the lowest node which has nodes  and  as descendants.

# Function Description

# Complete the function lca in the editor below. It should return a pointer to the lowest common ancestor node of the two values given.

# lca has the following parameters:
# - root: a pointer to the root node of a binary search tree
# - v1: a node.data value
# - v2: a node.data value

# Input Format

# The first line contains an integer, , the number of nodes in the tree.
# The second line contains  space-separated integers representing  values.
# The third line contains two space-separated integers,  and .

# To use the test data, you will have to create the binary search tree yourself. Here on the platform, the tree will be created for you.

# Constraints




# The tree will contain nodes with data equal to  and .

# Output Format

# Return the a pointer to the node that is the lowest common ancestor of  and .

# Sample Input

# 6
# 4 2 3 1 7 6
# 1 7
# image

#  and .

# Sample Output

# [reference to node 4]

# Explanation

# LCA of  and  is , the root in this case.
# Return a pointer to the node.

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

# Enter your code here. Read input from STDIN. Print output to STDOUT
'''
class Node:
      def __init__(self,info): 
          self.info = info  
          self.left = None  
          self.right = None 
           

       // this is a node of the tree , which contains info as data, left , right
'''

def lca(root, v1, v2):
  if root is None:
    return root
  elif v1 <= root.info and v2 >= root.info or v2 <= root.info and v1 >= root.info:
    return root
  else:
    if (v1 < root.info and v2 < root.info):
      if root.left:
        root = root.left
        return lca(root, v1, v2)
    elif (v2 > root.info and v2 > root.info):
      if root.right:
        root = root.right
        return lca(root, v1, v2)

tree = BinarySearchTree()
arr = [4, 2, 3, 1, 7, 6]

for i in range(len(arr)):
  tree.create(arr[i])

print(lca(tree.root, 1, 7), "expected 4")

tree2 = BinarySearchTree()
arr2 = [1, 2]

for i in range(len(arr2)):
  tree2.create(arr2[i])

print(lca(tree2.root, 1, 2), "expected 1")

tree3 = BinarySearchTree()
arr3 = [5, 3, 8, 2, 4, 6, 7]

for i in range(len(arr3)):
  tree3.create(arr3[i])

print(lca(tree3.root, 7, 3), "expected 5")

# t = int(input())

# arr = list(map(int, input().split()))

# for i in range(t):
#     tree.create(arr[i])

# v = list(map(int, input().split()))

# ans = lca(tree.root, v[0], v[1])
# print (ans.info)
