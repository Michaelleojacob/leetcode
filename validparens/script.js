var isValid = function (s) {
  const brakcetPairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const heap = [];
  for (const char of s) {
    if (brakcetPairs[char]) {
      heap.push(brakcetPairs[char]);
    } else {
      if (heap.pop() !== char) return false;
    }
  }
  return !heap.length;
};

console.log(isValid('(('));
console.log(isValid('(]'));
console.log(isValid('()[]{}'));
console.log(isValid('()[}'));

// var isValid = function (s) {
//   const brakcetPairs = {
//     '(': ')',
//     '[': ']',
//     '{': '}',
//   };
//   const heap = [];
//   for (const char of s) {
//     if (brakcetPairs[char]) {
//       heap.push(brakcetPairs[char]);
//     } else {
//       if (heap.pop() !== char) return false;
//     }
//   }
//   return !heap.length;
// };
