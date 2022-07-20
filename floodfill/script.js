// bfs ? || dfs ?

const arr = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
// to
[
  [2, 2, 2],
  [2, 2, 0],
  [2, 0, 1],
];

/**
 * 1 row
 * 1 col
 *
 * there should always be a converging point?
 *
 * I still have no idea what i'm doing with color
 */

/**
 * check if the new dfs is within bounds of the image
 */
const isValid = (image, sr, sc) => {
  if (sr >= image.length || sr < 0 || sc >= image[0].length || sc < 0) {
    return false;
  }
  return true;
};

const dfs = (image, sr, sc, oldColor, newColor) => {
  // base case
  if (image[sr][sc] !== oldColor) return;
  // actually do something
  image[sr][sc] = newColor;
  // then after do dfs
  if (isValid(image, sr - 1, sc)) {
    dfs(image, sr - 1, sc, oldColor, newColor);
  }
  if (isValid(image, sr + 1, sc)) {
    dfs(image, sr + 1, sc, oldColor, newColor);
  }
  if (isValid(image, sr, sc - 1)) {
    dfs(image, sr, sc - 1, oldColor, newColor);
  }
  if (isValid(image, sr, sc + 1)) {
    dfs(image, sr, sc + 1, oldColor, newColor);
  }
  // dfs(image, sr + 1, sc, oldColor, newColor)
};

const floodFill = (image, sr, sc, color) => {
  // why am i saving start ?
  const startingPoint = image[sr][sc];
  // does this work (?)
  const oldColor = image[sr][sc];
  if (color === oldColor) return image;
  dfs(image, sr, sc, oldColor, color);

  return image;
};

// const res = floodFill(arr, 1, 1, 2);
// console.log(res);

const arr2 = [
  [0, 0, 0],
  [0, 0, 0],
];

const res = floodFill(arr2, 0, 0, 0);
console.log(res);
