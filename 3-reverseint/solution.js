// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  // return parseInt(reversed); // <- fails. Consider n = -5. Then reversed is "5-"..and parseInt gives us 5.
  // so we need to add back the original sign (we can use Math.sign for this)
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
