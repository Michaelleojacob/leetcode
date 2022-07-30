const maxSubArray = (nums) => {
  // first pointer -> set it to first item in the array.
  let max = nums[0];

  // second pointer -> set it to be whichever is higher, max OR 0
  let curr = Math.max(max, 0);

  for (let i = 1; i < nums.length; i++) {
    //every round of the loop, 3 things need to happen

    // 1. curr accumulates.
    curr += nums[i];

    // 2. compare max and curr, set max as the higher value between the two.
    max = Math.max(max, curr);

    // 3. check if curr is higher than 0. IF it is not, we reset curr back to 0.
    curr = Math.max(curr, 0);
  }
  return max;
};

console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// no comments
const maxSubArr = (nums) => {
  let max = nums[0];
  let curr = Math.max(max, 0);
  for (i = 1; i < nums.length; i++) {
    curr += nums[i];
    max = Math.max(max, curr);
    curr = Math.max(curr, 0);
  }
};
