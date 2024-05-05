// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
function reverse(str) {
  return str.split("").reverse().join("");
}

// Solution 2
function reverse2(str) {
  let reversed = "";
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

// Solution 3
function reverse3(str) {
  return str.split("").reduce((prev, curr) => curr + prev, "");
}

module.exports = reverse;
