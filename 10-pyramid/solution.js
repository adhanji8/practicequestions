//   pyramid(4)
//   n in this case is 4
//   the pyramid consists of 4 or n rows
//       '   #   ' | 3 spaces, 1 #, 3 spaces (spaceCount = n - 1; hashCount = 1)
//       '  ###  ' | 2 spaces, 3 #'s, 2 spaces (spaceCount = n - 2; hashCount = 3)
//       ' ##### ' | 1 space, 5 #'s, 1 space (spaceCount = n - 3; hashCount = 5)
//       '#######' | 0 space, 7 #'s, 0 space (spaceCount = n - 4; hashCount = 7)

/*
 spaceCount or the number of spaces on either side starts at n — 1 (or 4 — 1, which is 3).
 For each new row, spaceCount decreases by 1 on either side, until you reach the final row,
 in which case the final spaceCount is 0.

 On the other hand, the hashCount or number of #s in the middle of each row,
 starts at 1 and increments by 2 each time you move onto a new row.
 */

/*
Solution 0: Intuitive Approach
function pyramid(n) {
  let spaceCount = n - 1; // 2
  let hashCount = 1;

  while (spaceCount >= 0) {
    let spaces = "   ";
    while (spaces.length < spaceCount) spaces += " ";

    let hashes = "#";
    while (hashes.length < hashCount) hashes += "#";

    console.log(spaces + hashes + spaces); "   #   "

    spaceCount--;
    hashCount += 2;
  }
}
*/
// Solution 1: Iterative Approach
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = "";

//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }

// Solution 2: Recursive Approach
// function pyramid2(n, row = 0, level = "") {
//   if (row === n) {
//     return;
//   }

//   if (level.length === 2 * n - 1) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }

//   const midpoint = Math.floor((2 * n - 1) / 2);
//   let add;
//   if (midpoint - row <= level.length && midpoint + row >= level.length) {
//     add = "#";
//   } else {
//     add = " ";
//   }
//   pyramid2(n, row, level + add);
// }
