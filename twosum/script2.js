/**array and target */
/**
 * we need to loop over nums
 * check if our info has the target - currentNumbers;
 * record the difference and the index
 * if it has our difference, return indicies
 */

// for each to help visualize what is going on
var twoSum = function (nums, target) {
  const hashMap = new Map();
  const res = [];
  nums.forEach((item, index) => {
    const difference = target - item;
    if (hashMap[item] >= 0) {
      console.log(index, hashMap[item]);
      res.push(index, hashMap[item]);
      return [index, hashMap[item]];
    } else {
      hashMap[difference] = index;
    }
  });
  return res;
};

//this one uses less memory
var twoSum = function (nums, target) {
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (hashMap[nums[i]] >= 0) {
      return [i, hashMap[nums[i]]];
    } else {
      hashMap[diff] = i;
    }
  }
};

const res = twoSum([2, 7, 11, 15], 9);
console.log(res);
