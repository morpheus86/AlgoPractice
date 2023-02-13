"use strict mode";
/**helper function recursion
 * Understand the problem
 * write your edge cases
 * Get to diagramming
 * Brute Force and memoizinng
 */

const printArr = (nums) => {
  const helper = (i) => {
    if (i >= nums.length) {
      return;
    }
    console.log("nums[]", nums[i]);
    helper(i + 1);
  };
  helper(0);
};
// console.log("printArr", printArr([1, 2, 3]));

const reverseStr = (str) => {
  let res = "";
  const helper = (i) => {
    if (i < 0) {
      return;
    }
    res += str[i];
    helper(i - 1);
  };
  helper(str.length - 1);
  return res;
};
// console.log("reverseStr", reverseStr("hello"));

const pairs = (nums) => {
  let result = [];
  const helper = (i) => {
    if (i >= nums.length) return;
    result.push([nums[i], nums[i + 1]]);
    helper(i + 2);
  };
  helper(0);
  return result;
};
// console.log("pairs", pairs([1, 2, 3, 4, 5]));

const flatten = (nums) => {
  let res = [];
  const helper = (nums) => {
    for (let i = 0; i < nums.length; i++) {
      if (Array.isArray(nums[i])) {
        helper(nums[i]);
      } else {
        res.push(nums[i]);
      }
    }
  };
  helper(nums, 0);
  return res;
};
// console.log("flatten()", flatten([1, [2, 3], 4]));

// mrege 2 array
const mergeArr = (a1, a2) => {
  let result = [];
  const helper = (p1, p2) => {
    if (p1 + p2 >= a1.length + a2.length) return;
    let num1 = a1[p1],
      num2 = a2[p2];
    if (p2 > a2.length || (p1 < a1.length && num1 <= num2)) {
      result.push(num1);
      p1++;
    } else {
      result.push(num2);
      p2++;
    }
    helper(p1, p2);
  };
  helper(0, 0);
  return result;
};
// console.log("mergeArr", mergeArr([1, 4, 7], [1, 2, 3, 4, 6, 7, 9]));

const cuttingRods = (rods, price) => {
  let maxProfit = 0;
  const helper = (remRod, i) => {
    if (remRod <= i) {
      return 0;
    }
    if (i >= price.length) {
      return 0;
    }
    let left = price[i] + helper(remRod - i - 1, i);
    let right = helper(remRod, i + 1);
    return (maxProfit = Math.max(left, right));
  };
  return helper(rods, 0);
};
var rLength = 4,
  rPrices = [1, 5, 8, 9];
// console.log("cuttingRods", cuttingRods(rLength, rPrices));

const cuttingRodMemoize = (rods, price) => {
  let maxProfit = 0;
  let cache = {};
  const helper = (remRod, i) => {
    if (remRod <= i) {
      return 0;
    }
    if (i >= price.length) {
      return 0;
    }
    let key = `${i}-${remRod}`;
    if (key in cache) {
      return cache[key];
    }
    let left = price[i] + helper(remRod - i - 1, i);
    let right = helper(remRod, i + 1);
    maxProfit = Math.max(left, right);
    cache[key] = maxProfit;
    return maxProfit;
  };
  return helper(rods, 0);
};
// console.log("cuttingRods", cuttingRodMemoize(rLength, rPrices));

const houseRobber = (houses) => {
  let maxProfit = 0;
  let cache = {};
  const helper = (i) => {
    if (i >= houses.length) return 0;
    if (houses.length === 0) return 0;
    if (houses.length === 1) return houses[0];
    if (houses.length === 2) return Math.max(houses[0], houses[1]);
    let key = `${i}`;
    let left = houses[i] + helper(i + 2);
    let right = helper(i + 1);
    maxProfit = Math.max(left, right);
    cache[key] = maxProfit;
    return maxProfit;
  };
  return helper(0);
};
console.log("houseRobber", houseRobber([10, 5, 2, 12]));
