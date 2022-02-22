/**
 * Fenwick tree class
 * @param {Array} arr Takes array as input of the class constructor
 * and initializes the binary indexed tree
 */
function Fenwick(arr) {
  this.arr = arr;
  this.tree = this.init();
}
/**
 * Initializes a fenwick tree of class member array
 * @returns A binary indexed tree of the array class member
 */
Fenwick.prototype.init = function () {
  const tree = this.arr.slice(0);
  for (let i = 0, n = tree.length; i < n; i++) {
    const j = i | (i + 1);
    if (j < n) tree[j] += tree[i];
  }
  return tree;
};
/**
 * Calculates the prefix sum of a fenwick tree
 * @param {Number} i Array index
 * @returns The prefix sum of tree from arr[0] up to given index
 */
Fenwick.prototype.sum = function (i) {
  let sum = 0;
  while (i >= 0) {
    sum += this.tree[i];
    i &= i + 1;
    i--;
  }
  return sum;
};
/**
 * Updates an array element of a fenwick tree
 * @param {Number} i Array index of the element to update
 * @param {any} val The value to add to the element
 */
Fenwick.prototype.update = function (i, val) {
  while (i < this.tree.length) {
    this.tree[i] += val;
    i |= i + 1;
  }
};

module.exports = Fenwick;
