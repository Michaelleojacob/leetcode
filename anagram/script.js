/**
 * return true/false
 * check if every character of t is in s
 */

const countLetters = (str) => {
  return str.split('').reduce((total, letter) => {
    total[letter] ? total[letter]++ : (total[letter] = 1);
    return total;
  }, {});
};

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  /**
   * one loop
   * reduce t into one object -> letters:letterCount
   * compare s to object
   */

  const checkT = countLetters(t);
  const checkS = countLetters(s);
  for (const [key, value] of Object.entries(checkT)) {
    if (checkS[key] !== checkT[key]) return false;
  }
  return true;
};

console.log(isAnagram('rat', 'car'));
