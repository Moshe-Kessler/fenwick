# Fenwick

npm package for fenwick tree.

## Usage

```js
import Fenwick from "fenwick";

const arr = [1, 2, 3, 4, 5];
const tree = new Fenwick(arr);

tree.sum(arr.length - 1); // 15
tree.update(0, 10);
// tree.sum(arr.length - 1) is now 25
```
