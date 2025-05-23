function SpiralTraversal(ar) {
  let m = ar.length;
  let n = ar[0].length,
    res = [],
    left = 0,
    right = n - 1,
    top = 0,
    bottom = m - 1;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(ar[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      res.push(ar[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(ar[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(ar[i][left]);
      }
      left++;
    }
  }

  return res;
}

console.log(
  SpiralTraversal([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
