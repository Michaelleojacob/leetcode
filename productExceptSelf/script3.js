//constant space

const productExceptSelf = (nums) => {
  const result = [];

  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }
  return result;
};

// console.log(productExceptSelf([1, 2, 3, 4]));

/**
 * first we populate going left to right (prefix)
 * then we mutate going right to left (suffix)
 *
 * result[i] = prefix -> populate
 *
 * result[i] *= suffix -> mutate
 */

/**
 * prefix:
 * start at 1
 * for loop to go left to right on nums.
 *
 * i=0
 * prefix = 1
 * result[0] = 1
 * accumulator = 1 * 1;
 *
 * i=1
 * prefix = 1
 * result[0] = 1
 * accumulator 1 *= 2
 *
 * i=2
 * prefix = 2
 * result[2] = 2
 * accumulator = 2 * 3
 *
 * i=3
 * prefix = 6
 * result[3] = 6
 * accumulator = 6 * 4
 *
 * no i=4
 */

/**
 * in this example, the suffix depends on there being items in the result array
 * so the way it is written suffix depends on prefix
 */

//----------------------------------------------------------

// const testPrefix = (nums) => {
//   const result = [];

//   let prefix = 1;

//   for (let i = 0; i < nums.length; i++) {
//     result[i] = prefix;
//     prefix *= nums[i];
//   }
//   console.log(result);
// };

// testPrefix([1, 2, 3, 4]);

// const testSuffix = (nums) => {
//   const result = [1, 1, 2, 6];

//   let suffix = 1;

//   for (let i = nums.length - 1; i >= 0; i--) {
//     result[i] *= suffix;
//     suffix *= nums[i];
//   }
//   console.log(result);
// };

// testSuffix([1, 2, 3, 4]);
