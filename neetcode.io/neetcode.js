const Heap = require("collections/heap");
const dup = (nums) => {
  let hash = {};
  for (const num of nums) {
    hash[num] = (hash[num] || 0) + 1;
    if (hash[num] > 1) return false;
  }
  return true;
};

const ana = (s, t) => {
  let set = new Map();
  for (let char of s) {
    if (!set.has(char)) {
      set.set(char, 1);
    } else {
      set.set(char, set.get(char) + 1);
    }
  }
  for (let char of t) {
    if (set.has(char)) {
      set.set(char, set.get(char) - 1);
      if (set.get(char) === 0) set.delete(char);
    } else {
      return false;
    }
  }
  console.log("set", set);
  return set.size === 0;
};
// console.log("ana", ana("anagram", "nagaram"));

const groupAna = (arr) => {
  let newArr = arr;
  let hash = {};
  console.log("newArr", newArr);
  for (let i = 0; i < newArr.length; i++) {
    let char = newArr[i].split("").sort().join("");
    hash[char] = hash[char] || [];
    hash[char].push(arr[i]);
  }
  return Object.values(hash);
};
// console.log("groupAna()", groupAna(["eat", "tea", "tan", "ate", "nat", "bat"]));

var topKFrequent = function (nums, k) {
  const hash = {};
  let heap = new Heap([], null, (a, b) => b[0] - a[0]);
  for (let num of nums) {
    hash[num] = (hash[num] || 0) + 1;
  }

  Object.keys(hash).forEach((a) => {
    heap.push([a, hash[a]]);
    if (heap.length > k) {
      heap.pop();
    }
  });
  console.log("heap", heap);
  return;
};

// console.log("topKFr", topKFrequent([], 2));

class Bt {
  constructor(val, left, right) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const tree = new Bt(4);
tree.left = new Bt(3);
tree.right = new Bt(7);
tree.right.right = new Bt(9);
tree.right.left = new Bt(6);
const invertBinary = (root) => {
  const helper = (root) => {
    if (root) return null;
    let left = helper(root.left);
    let right = helper(root.right);
    root.left = right;
    root.right = left;
  };
  helper(root);
  return root;
};
// console.log("invertB", invertBinary(tree));

const compareBT = (h1, h2) => {
  if (!h1 && !h2) return true;
  if (h1.val !== h2.val) return false;
  return compareBT(h1.left, h2.left) && compareBT(h1.right, h2.right);
};
const tree2 = new Bt(4);
tree2.left = new Bt(5);
tree2.right = new Bt(7);
tree2.right.right = new Bt(9);
tree2.right.left = new Bt(6);
// console.log("compareBT", compareBT(tree, tree2));

const compareSub = (root, subroot) => {
  if (!root && !subroot) return true;
  if ((!root && subroot) || (root && !subroot)) return false;
  if (root.val !== subroot.val) {
    return compareSub(root.left, subroot) || compareSub(root.right, subroot);
  } else if (
    root.val === subroot.val &&
    compareSub(root.left, subroot.left) &&
    compareSub(root.right, subroot.right)
  ) {
    return true;
  }
};
// const subtree = new Bt(7);
// subtree.left = new Bt(6);
// subtree.right = new Bt(9);
// console.log("compareSub", compareSub(tree2, subtree));

const lowestCommonAncestor = (root, p, q) => {
  if (!root) return;
  if (p <= root.val && q > root.val) return root.val;
  if (p <= root.val && q < root.val)
    return lowestCommonAncestor(root.left, p, q);
  if (p >= root.val && q > root.val)
    return lowestCommonAncestor(root.right, p, q);
};
// console.log("first", first);

const isBst = (root) => {
  const helper = (node, l, r) => {
    if (!node) return true;
    if (node.val >= r || node.val <= l) return false;
    let left = helper(node.left, l, node.val);
    let right = helper(node.right, node.val, r);
    return left && right;
  };
  return helper(root, -Infinity, Infinity);
};
const bst = new Bt(5);
bst.left = new Bt(3);
bst.right = new Bt(7);
bst.right.right = new Bt(8);
bst.right.left = new Bt(4);

// console.log("isBst", isBst(bst));

const kthSmallest = (root, k) => {
  let res = [];
  const helper = (root) => {
    if (root.left) helper(root.left);
    res.push(root.val);
    if (root.right) helper(root.right);
  };
  helper(root, k);
  console.log("res", res);
  return res[k - 1];
};

// InOrder traversal => sorted in order => Process everything in the left, then root then right
// PreOrder traversal => process node and visit all the way left then right => root, node.left, node.right
// PostOrder traversal => left, right, root
const bstk = new Bt(5);
bstk.left = new Bt(3);
bstk.right = new Bt(6);
bstk.left.right = new Bt(4);
bstk.left.left = new Bt(2);
bstk.left.left.left = new Bt(1);

// console.log("kth", kthSmallest(bstk, 3));
