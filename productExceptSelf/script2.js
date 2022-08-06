// =========================================================

/**
 * nums: [1,2,3,4]
 * output: [24,12,8,6]
 *
 * going left to right on the nums array
 *
 * prefix:
 * prefix = [];
 * for loop i=0, i<exmaple.length
 * if i=0
 * prefix[0] = 1;
 *
 * else i=1
 * prefix[1] = nums[i-1] * prefix[i-1];
 * prefix[1] = nums[0] * prefix[0];
 *
 * else i=2;
 * prefix[2] = nums[i-1] * prefix[i-1]
 * prefix[2] = nums(1) * prefix(1)
 *
 * i=3
 * prefix[3] = nums(2)*prefix(2)
 */

var getPrefix = function (nums) {
  // First, create a prefix array that moves from the left,
  // gathering the running product of the prefix at each index
  const prefix = [];

  // Move left in the input array
  for (let i = 0; i < nums.length; i++) {
    // If i === 0, start with `1`, since there is no prefix
    if (i === 0) {
      prefix[i] = 1;
    } else {
      // Otherwise, multiply nums[i-1] times the prefix at position i-1,
      // and add that to the prefix array at position i
      prefix[i] = nums[i - 1] * prefix[i - 1];
    }
  }
  // console.log(prefix);
  return prefix;
};

/**
 * nums: [1,2,3,4]
 * output: [24,12,8,6]
 *
 * going right to left on the nums array
 *
 * for loop. i=nums.length; go till i>=0. i--
 * if we are at the end, there is nothing to the right,
 * so in our nums we have a length of 4.
 * i starts at 3 then. (leng - 1)
 *
 * suffix[3] = 1 -> will fill an array with [empty empty empty 1]
 *
 * so now we work backwards, filling the empty elements
 *
 * i=3 (starting point)
 * nums[3] = 1 (this is the last item in nums there is nothing to the right of it. So we push 1)
 * i=2
 * suffix[i] = nums[i + 1] * suffix[i + 1]
 * suffix[2] = nums(3)*suffix(3)
 * i=1
 * suffix[1] = nums(2)*suffix(2);
 * i=0
 * suffix[0] = nums(1)*suffix(1)
 */

var getSuffix = function (nums) {
  // Then, let's create a suffix array
  const suffix = [];

  // Move right in the input array
  for (let i = nums.length - 1; i >= 0; i--) {
    // For the last index, we have no suffix, so just add a 1 to that position
    if (i === nums.length - 1) {
      suffix[i] = 1;
    } else {
      // Otherwise, we multiply nums[i+1] by the suffix at position i+1
      // and add that to the suffix array at position i
      suffix[i] = nums[i + 1] * suffix[i + 1];
    }
  }
  // console.log(suffix);
  return suffix;
};

// console.log(getPrefix([1, 2, 3, 4]));
// console.log(getSuffix([1, 2, 3, 4]));

/**
 * example: [1,2,3,4]
 * prefix: [1,1,2,6]
 * suffix: [24,12,4,1]
 *
 * final product:
 * [24,12,8,6]
 */

const getResult = (nums) => {
  const result = [];
  const prefix = getPrefix(nums);
  const suffix = getSuffix(nums);

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix[i] * suffix[i];
  }
  return result;
};

console.log(getResult([1, 2, 3, 4]));
