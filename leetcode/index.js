/**21 days to crack algo */

/**
 * sorted array in ascending but is being rotated at undisclosed index find key in O(logn)
 */
const arr = [7, 8, 9, 0, 1, 2];
const search = (nums, key) => {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    isAscending = nums[start] <= nums[mid];
    if (nums[mid] === key) return mid;
    if (isAscending) {
      if (key < nums[mid] && key >= nums[start]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (key > nums[mid] && key <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

const searchMatrix = (matrix, key) => {
  let col = matrix[0].length,
    row = matrix.length;
  let start = 0,
    end = row * col - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let midIdx = matrix[Math.floor(mid / row)][mid % col];
    console.log("mid", {
      mid,
    });
    if (midIdx === key) return mid;
    if (midIdx > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};
// console.log(
//   "searchMatrix",
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 64],
//     ],
//     5
//   )
// );

/**
 * findMin in a sorted rotated arr
 * first we compare start to end and if start <= end we know its is ascending and we have a non rotated array
 * else we will get the ranges start that is increasing and compare it to the end
 */
const findMin = (nums) => {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let middle = nums[mid];
    if (mid < end && middle > nums[mid + 1]) return nums[mid + 1];
    if (mid > start && middle < nums[mid - 1]) return middle;
    if (nums[start] < middle) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
};
// console.log("findMin", findMin([11, 13, 15, 17]));

const kthSmallest = (root, k) => {
  let res = [];
  const helper = () => {
    if (!root) return;
    if (root.left) kthSmallest(root.left, k);
    if (root.right) kthSmallest(root.right, k);
    res.push(root.val);
    if (res.length === k - 1) return res[k - 1];
  };
  return helper(root, k);
};
