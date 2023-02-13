function sym() {
  let first = new Set();
  arguments[0].forEach((a) => first.add(a));
  for (let index = 1; index < arguments.length; index++) {
    [...new Set(arguments[index])].forEach((a) => {
      if (first.has(a)) {
        first.delete(a);
      } else {
        first.add(a);
      }
    });
  }
  return [...first];
}

// console.log(
//   "first",
//   sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])
// );

const updateInventory = (a1, a2) => {
  let hash = {};
  for (const curr of a1) {
    let [amount, product] = curr;
    hash[product] = amount;
  }
  for (const upd of a2) {
    let [amount, product] = upd;
    if (product in hash) {
      hash[product] += amount;
    } else {
      hash[product] = amount;
    }
  }
  console.log("hash", hash);
  return Object.keys(hash)
    .sort()
    .map((a) => {
      return [a, hash[a]];
    });
};
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];
// console.log("updateInventory", updateInventory(curInv, newInv));

const permutation = (str) => {
  let result = [];
  const helper = (buildStr, i) => {
    console.log("buildStr", buildStr);
    if (i > str.length) return buildStr;
    result.push(buildStr);
    helper(buildStr + str[i], i + 1);
    helper(buildStr, i + 1);
    // let right = helper(i++);
  };
  helper("", 0);
  return result;
};
// console.log("permutation", permutation("abc"));
