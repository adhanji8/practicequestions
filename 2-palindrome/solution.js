// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
function palindrome(str) {
  const reversed = str.split("").reverse().join();
  return str === reversed;
}

// Solution 2
/*
Cons: We are doing more comparisons than necessary. 
Once we compared all elements up to the midpoint...there's
no point in comparing the remaining elements. 
TLDR; doing twice as much work as necessary.
*/
function palindrome2(str) {
  return str.split("").every((char, i) => char === str[str.length - 1 - i]);
}

module.exports = palindrome;
