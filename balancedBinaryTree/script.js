// balanced binary tree (bbt)

const bbt = (root) => {
  let balanced = true;
  const getHeight = (node) => {
    if (!node) return 0;
    if (balanced === false) return;
    let leftHeight = getHeight(node.left);
    let rightHeight = getHeight(node.right);
    let diff = Math.abs(leftHeight - rightHeight);
    if (diff > 1) balanced = false;
    return Math.max(leftHeight, rightHeight) + 1;
  };
  getHeight(root);
  return balanced;
};

const balanceTree = (root) => {
  // boolean that we actually return.
  let balanced = true;
  // dfs recursive function
  const getHeight = (node) => {
    // if we hit node === null; we hit the end of a branch; return 0
    if (!node) return 0;
    // if at any point balanced is false, just return. Can't ever go back to true.
    if (balanced === false) return;
    // sum of left-height and right-height.
    let leftHeight = getHeight(node.left);
    let rightHeight = getHeight(node.right);
    // difference is the absolute value of left - right;
    let diff = Math.abs(leftHeight - rightHeight);
    // if the difference is over 1, balance is off.
    if (diff > 1) balanced = false;
    // + 1 accounts for the root node + whichever height was bigger
    return Math.max(leftHeight, rightHeight) + 1;
  };
  getHeight(root);
  return balanced;
};
