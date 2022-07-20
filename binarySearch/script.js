/**
 * return index of target
 */

const search = (nums, target) => {
  // nums is an array, target is the item we are looking for
  // key hint => two pointers.

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) return mid;
    // base pointers on the target location to/from the pointers
    if (nums[mid] < target) left = mid + 1;
    if (nums[mid] > target) right = mid - 1;
  }

  return -1;
};

search([-1, 0, 3, 5, 9, 12], 9);

// const ran = Math.floor(nums.length / 2);
// const min = nums[0];
// const end = nums.length;
