const productExceptSelf1 = (nums) => {
  let ans = [];
  let left = [];
  let right = [];
  let temp = 1;
  for (let i = 0; i < nums.length; i++) {
    temp *= nums[i];
    left.push(temp);
  }
  console.log(left);

  // reset temp
  temp = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    temp *= nums[i];
    right.unshift(temp);
  }
  console.log(right);
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      ans.push(right[1]);
    } else if (i == nums.length - 1) {
      ans.push(left[nums.length - 2]);
    } else {
      ans.push(left[i - 1] * right[i + 1]);
    }
  }
  return ans;
};

/**
 * left = [1,2,6,24] 1*1 1*2 2*3 6*4
 * right= [24,24,12,4] 4*1 4*3 12*2 24*1
 */
console.log(productExceptSelf1([1, 2, 3, 4]));
