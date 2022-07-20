// 33

const TreeNode = (val, left, right) => {
  return {
    val: val === undefined ? 0 : val,
    left: left === undefined ? null : left,
    right: right === undefined ? null : right,
  };
};

const treeHead = () => {
  return TreeNode(4, TreeNode(2, 1, 3), TreeNode(7, 6, 9));
};

console.log(treeHead());

const dfs = (currNode) => {
  /**
   * check if current node is empty
   *
   * if it is empty, go back
   */

  // base case! What to do if not a node. If we are at the end!
  if (!currNode) {
    return;
  }

  // what to do if we are not at the end!
  const left = currNode.left;
  const right = currNode.right;

  currNode.left = right;
  currNode.right = left;

  dfs(currNode.left);
  dfs(currNode.right);
};

const invertTree = (treeHead) => {
  //
  /**
   * loop through object
   *
   */
};

// 4
// 2 7
// 1 3 6 9

// going through every node exactly once big O of n O(n)
// space complex O of log H
// 4 -> 1 the HEIGHT of the tree = 3 nodes

// ===========================================================

// function invertTree(node) {
//   if (node !== null) {
//       const tmp = node.left;
//       node.left = invertTree(node.right);
//       node.right = invertTree(tmp);
//   }
//   return node;
// };
