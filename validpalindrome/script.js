/**
 * my solution
 * two variables,
 * two iterations basically
 */
var isPalindrome = function (s) {
  //given string (s)
  //remove all non letters, whitespace
  //lowercase all
  const onlyLetters = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
  const reverseString = onlyLetters.split('').reverse().join('');

  return onlyLetters === reverseString ? true : false;
};

isPalindrome('ab_a');

/**
 * closest to O(n)
 * two pointers,
 * first pointer at the start : (i)
 * second pointer at end : (j)
 * j counts down, i counts up
 * meet in middle
 */

const isPalindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
};
