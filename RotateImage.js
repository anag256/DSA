//brute force
function rotateImage(ar) {
  let m = ar.length,
    n = ar[0].length,
    ans = [[],[],[],[]];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[j][n - 1 - i] = ar[i][j];
    }
  }
  return ans;
}


//optimal -reduce extra space
//transpose and reverse every row
function rotateImageOptimal(ar){
    let m = ar.length,
    n = ar[0].length,temp;
    //transpose
    for(let i=0;i<=m-2;i++){
        for(let j=i+1;j<=n-1;j++){
            temp=ar[i][j];
            ar[i][j]=ar[j][i];
            ar[j][i]=temp;
        }
    }

    for(let i=0;i<m;i++){
        ar[i].reverse();
    }
    return ar;
}
console.log(
  rotateImageOptimal([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
