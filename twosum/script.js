var twoSum = function (nums, target) {
  const hashmap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    if (hashmap[difference] !== undefined) {
      return [hashmap[difference], i];
    } else {
      hashmap[nums[i]] = i;
    }
  }
};

twoSum([2, 7, 11, 15], 9);

// const arr = [2, 7, 11, 15];

// const hashmap = new Map();

// arr.forEach((item, index) => (hashmap[item] = index));

// console.log(hashmap);

// console.log(hashmap[7] !== undefined);

// const hashmap = new Map();
// for (let i = 0; i < nums.length; i++) {
//   const difference = target - nums[i];
//   if (hashmap[difference] !== undefined) {
//     return [hashmap[difference], i];
//   } else {
//     hashmap[nums[i]] = i;
//   }
// }
