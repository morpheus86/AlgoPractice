"use strict mode";

/**sorted array agnostically we do not know if it is ascending or descending find key */
const orderAgnostic = (nums, key) => {
  let start = 0,
    end = nums.length - 1;
  let isAscending = nums[start] < nums[end];
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] === key) return mid;
    if (isAscending) {
      if (nums[mid] > key) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[mid] > key) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

const ceilingNum = (nums, key) => {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] === key) return mid;
    if (nums[mid] > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

const minDiff = (nums, key) => {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] === key) return mid;
    if (nums[mid] > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

const bitonicArrMax = (nums) => {
  let start = 0,
    end = nums.length - 1;
  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] > nums[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return nums[start];
};
// console.log("bitonicArrMax", bitonicArrMax([1, 2, 1, 3, 5, 6, 4]));
