// lowest common ancestor

//iterative
const lowestCommonAncestor = (root, p, q) => {
  while (root) {
    if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } else if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else {
      break;
    }
  }
  return root;
};

// recursive
const lca = (root, p, q) => {
  if (root.val < p.val && root.val < q.val) return lca(root.right, p, q);
  if (root.val > p.val && root.val > q.val) return lca(root.left, p, q);
  return root;
};

// notes:
/**
 * both approaches are the same:
 *
 * while loop:
 * each round of the loop,
 * check root vs p AND Q
 * IF smaller than p AND q -> go to bigger nums -> right side.
 * IF bigger than p AND q -> go to smaller nums -> left side.
 * IF root is not bigger than p AND q OR smaller than p AND q, return root.
 * ex: root:6, p:3 q:7. 6 IS bigger than 3, but smaller than 7.
 * thus 6 must be the Lowest common ancestor.
 */

/**
 * recursive pitalls:
 * requires return lca();
 * just running lca() without return lca() will result in the base root always being returned.
 */
