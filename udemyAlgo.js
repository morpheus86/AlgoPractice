/**
 * Recursion
 * Tail Recursion is always better for performance as it achieve O(1) in space if possible
 */
/**
 * unsorted arr return kth largest element. k largest element in sorted order, not the kth distinct element
 *
 * k=2 [1,2,3,4,5,6] => output=5
 * using quicksort we can get our pivot and from there find the k largest element
 * everything before is less and everything after is greater than the pivot
 * using our recursion we can order the array while keeping track of k
 */
const swap = (a, i, j) => {
  [a[i], a[j]] = [a[j], a[i]];
};

const partition = (nums, l, r) => {
  let mid = Math.floor((r + l) / 2);
  let pivot = nums[mid];
  while (l <= r) {
    while (pivot > nums[l]) {
      l++;
    }
    while (pivot < nums[r]) {
      r--;
    }
    console.log("l", l, r);
    if (l <= r) {
      swap(nums, l, r);
      l++;
      r--;
    }
    console.log("nums", nums, l, r);
  }
  console.log("nums", l);
  return l;
};
// console.log("partition", partition([5, 3, 1, 6, 4], 0, 4));

const quickSort = (nums, l, r, k) => {
  let pivot = partition(nums, l, r);
  if (pivot === nums.length - k) {
    return nums[pivot];
  } else if (pivot > nums.length - k) {
    return quickSort(nums, l, pivot - 1, k);
  } else {
    return quickSort(nums, pivot + 1, r, k);
  }
};
// console.log("quickSOrt", quickSort([5, 3, 1, 6, 4], 0, 4, 4));

/**
 * nums arr sorted find starting and ending position of target
 * [5,7,7,8,8,10] target=8 => [3,4]
 * not found = [-1,-1]
 *
 */
const findTargetRange = (nums, target) => {
  let result = [-1, -1];
  result[0] = findRange(nums, false, target);
  if (result[0] !== -1) {
    result[1] = findRange(nums, true, target);
  }
  return result;
};
const findRange = (nums, isFound, target) => {
  let key = -1;
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let midNum = nums[mid];
    if (midNum === target) {
      key = mid;
      if (!isFound) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (target > midNum) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return key;
};
// console.log("findTarget", findTargetRange([5, 7, 7, 8, 8, 8, 10], 8));
