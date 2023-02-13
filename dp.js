"use strict mode";
/**fib
 * fib(n) = fib(n-1)+fib(n-2)
 * we can use some type of hash to optimize by remembering the cache result and not run it again
 */

// How many ways can you climb N stairs, given that you can take 1 or 2 steps
let cache = {};
const climbingStairs = (stairs) => {
  if (stairs < 0) return 0;
  if (stairs === 0) return 1;
  let res = 0;
  if (cache[stairs]) {
    console.log("here");
    return cache[stairs];
  } else {
    res = climbingStairs(stairs - 1) + climbingStairs(stairs - 2);
    cache[stairs] = res;
  }

  return res;
};
// console.log("climbingStairs", climbingStairs(5));

/**
 * The question goes like this; given a rod of a certain length, along with prices for those lengths selling on the market, find out how to cut the rod so you can maximize the profit
 * idea is to find the revenue of one cut then keep cutting and find max revenue unti you reach the end to find the complete revenue
 * ex: for q len rev = maxRev that is cut + the maxrev remaining
 */
const cuttingRods = (len, price) => {
  if (len === 0) return 0;
  let maxProfit = 0;
  for (let i = 0; i < len; i++) {
    let currentProfit = price[len - i - 1] + cuttingRods(i, price);
    console.log("maxProfit", maxProfit, currentProfit);
    maxProfit = Math.max(maxProfit, currentProfit);
  }
  return maxProfit;
};

// console.log("4", cuttingRods(4, [1, 5, 8, 9]));

/**
 * weights and profits N items, Capacity which can carry these items, Item can only be selected once
 * find Maximum profit
 */
const findMaxProfit = (cap, weight, prices) => {
  let maxProfit = 0;
  const helper = (c, i) => {
    if (c <= 0 || i >= prices.length) {
      return 0;
    }
    if (c < weight[i]) {
      return 0;
    }
    let priceLeft = prices[i] + helper(c - weight[i], i++);
    let priceRight = helper(c, i++);
    // console.log("priceLeft", priceLeft, priceRight);
    maxProfit = Math.max(priceLeft, priceRight);
    return maxProfit;
  };
  return helper(cap, 0);
  // return maxProfit;
};
const price = [1, 6, 10, 16],
  weight = [1, 2, 3, 5];
// console.log("findMaxProfit", findMaxProfit(7, weight, price));

const findMaxProfitMemoize = (cap, weight, prices) => {
  const cache = {};
  const helper = (c, i) => {
    if (c <= 0 || i >= prices.length) {
      return 0;
    }
    if (c < weight[i]) {
      return 0;
    }
    let key = `${c}${i}`;
    if (key in cache) return cache[key];
    let priceLeft = prices[i] + helper(c - weight[i], i++);
    let priceRight = helper(c, i++);
    // console.log("priceLeft", priceLeft, priceRight);
    maxProfit = Math.max(priceLeft, priceRight);
    cache[key] = maxProfit;
    console.log("cache", cache);
    return maxProfit;
  };
  return helper(cap, 0);
};
// console.log("findMaxProfit", findMaxProfitMemoize(7, weight, price));

// Equal Subset Sum partition
// We kow that S is the total sum of all number which transform our problem to finding any subset that are eqaul to S/2
const equalSumPartition = (nums) => {
  let sum = nums.reduce((a, b) => a + b);
  const helper = (halfSum, i) => {
    console.log("halfSum", halfSum);
    if (halfSum === 0) {
      return true;
    }
    if (nums.length === 0 || i >= nums.length) return false;
    if (halfSum < nums[i]) return false;
    let left = helper(halfSum - nums[i], i++);
    let right = helper(halfSum, i++);
    return left || right;
  };
  return helper(sum / 2, 0);
};
// console.log("equalSumPartition", equalSumPartition([1, 1, 3, 4, 7]));

const equalPartMemoi = (nums) => {
  let sum = nums.reduce((a, b) => a + b);
  let dp = {};
  const helper = (halfSum, i) => {
    console.log("halfSum", halfSum);
    if (halfSum === 0) {
      return true;
    }
    let key = `${halfSum}${i}`;
    if (key in dp) {
      return dp[key];
    }
    if (nums.length === 0 || i >= nums.length) return false;
    if (halfSum < nums[i]) return false;
    let left = helper(halfSum - nums[i], i + 1);
    let right = helper(halfSum, i + 1);
    dp[key] = left || right;
    return left || right;
  };
  return helper(sum / 2, 0);
};
// console.log("equalSumPartition", equalPartMemoi([1, 1, 3, 4, 7]));

const minSubSetSumDiff = (nums) => {
  const helper = (s1, s2, i) => {
    if (i >= nums.length) return Math.abs(s1 - s2);
    let left = helper(s1 + nums[i], s2, i + 1);
    let right = helper(s1, s2 + nums[i], i + 1);
    return Math.min(left, right);
  };
  return helper(0, 0, 0);
};

const findKeyBitonicArr = (n, key) => {
  let maxIdx = findMax(n);
  console.log("maxIdx", maxIdx);
  let first = binarySearch(n, 0, maxIdx, key);
  if (first === -1) {
    first = binarySearch(n, maxIdx + 1, n.length - 1, key);
  }
  return first;
};
const findMax = (nums) => {
  let start = 0,
    end = nums.length - 1;
  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] < nums[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};
const binarySearch = (nums, start, end, key) => {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] === key) return mid;
    if (nums[start] < nums[end]) {
      if (nums[mid] < key) {
        start = mid + 1;
      } else {
        end = mid;
      }
    } else {
      if (nums[mid] < key) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return -1;
};
console.log("findKey", findKeyBitonicArr([1, 33, 8, 4, 3], 4));
