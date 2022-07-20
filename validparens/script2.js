/**
 * given a string
 * open brackets must be closed by the same type of brackets
 * open brackets must be closed in the correct order
 */

/**
 * record each open paren
 * compare to first closed paren
 * if NOT last closed matches last open, return false
 * else return true
 */

/**
 * dont get opens, get closing brackets
 */
// var isValid = function (s) {
//   const stack = [];
//   const hashmap = {
//     ')': '(',
//     ']': '[',
//     '}': '{',
//   };
//   for (let i = 0; i < s.length; i++) {
//     if (!hashmap[s[i]]) {
//       stack.push(s[i]);
//     } else if (stack.pop() !== hashmap[s[i]]) {
//       return false;
//     }
//   }
//   return stack.length === 0;
// };

// const res = isValid('(())');
// console.log(res);

/**
 * given a string
 * open brackets must be closed by the same type of brackets
 * open brackets must be closed in the correct order
 */

/**
 * record each open paren
 * compare to first closed paren
 * if NOT last closed matches last open, return false
 * else return true
 */

/**
 * dont get opens, get closing brackets
 */
var isValid = function (s) {
  const stack = [];
  //* compare closing with opening ) : (
  // !not open with closing ( : )
  const hashmap = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  for (let i = 0; i < s.length; i++) {
    // if it is an open:
    // push to stack
    if (!hashmap[s[i]]) {
      stack.push(s[i]);
      /**
       * check to see last item in stack is the same bracket
       * if NOT return false.
       */
    } else if (stack.pop() !== hashmap[s[i]]) {
      return false;
    }
  }
  return stack.length === 0;
};

const res = isValid('(())');
console.log(res);
