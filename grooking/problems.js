const orderAgnostic = (nums, key) => {
  let start = 0,
    end = nums.length - 1;
  let isAscending = nums[start] < nums[end];
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let midNum = nums[mid];
    if (midNum === key) return mid;
    if (isAscending) {
      if (midNum > key) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (midNum > key) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};
// console.log("first", orderAgnostic([4, 6, 10], 10));
// console.log("first", orderAgnostic([1, 2, 3, 4, 5, 6, 7], 5));
// console.log("first", orderAgnostic([10, 6, 4], 10));

const ceilingNum = (nums, k) => {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let numMid = nums[mid];
    if (numMid === k) {
      return mid;
    } else if (numMid < k) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
};

// console.log("ceilingum", ceilingNum([1, 3, 8, 10, 15], 12));

const countSubsetSum = (nums, S) => {
  const dp = {};
  const helper = (i, sum) => {
    if (sum < 0) return 0;
    if (i >= nums.length) return 0;
    if (sum === 0) return 1;
    let key = `${i}-${sum}`;
    if (key in dp) return dp[key];
    let left = helper(i + 1, sum - nums[i]);
    let right = helper(i + 1, sum);
    dp[key] = left + right;
    return left + right;
  };
  return helper(0, S);
};
// console.log("countSubset", countSubsetSum([1, 2, 7, 1, 5], 9));

const targetSum = (nums, target) => {
  const helper = (currSum, i) => {
    if (i > nums.length) return 0;
    if (i === nums.length && currSum === target) return 1;
    let left = helper(currSum + nums[i], i + 1);
    let right = helper(currSum - nums[i], i + 1);
    return left + right;
  };
  return helper(0, 0);
};
// console.log("targetSum", targetSum([1, 1, 2, 3], 1));

const searchRotated = (nums, key) => {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] === key) return mid;
    if (nums[start] < nums[mid]) {
      if (nums[mid] > key && key > nums[start]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[mid] < key && key < nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
};
class LinkedList {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}
let p = new LinkedList(1);
p.next = new LinkedList(2);
p.next.next = new LinkedList(3);
p.next.next.next = new LinkedList(3);
p.next.next.next.next = new LinkedList(4);
p.next.next.next.next.next = new LinkedList(5);

const removeDupInLL = (head) => {
  let newHead = new LinkedList(0, head);
  let pred = newHead;
  while (head) {
    if (head.next && head.val === head.next.val) {
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      pred.next = head.next;
    } else {
      pred = pred.next;
    }
    head = head.next;
  }
  return newHead.next;
};
console.log("removeDuoInLL", removeDupInLL(p));
