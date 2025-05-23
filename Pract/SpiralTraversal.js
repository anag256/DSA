function SpiralTraversal(matrix){
    let m=matrix.length,n=matrix[0].length;
    let left=0,right=n-1,top=0,bottom=m-1,res=[];

    while(left<=right && top<=bottom){
        for(let i=left;i<=right;i++){
            res.push(matrix[top][i]);
        }
        top++;
        for(let i=top;i<=bottom;i++){
            res.push(matrix[i][right]);
        }

        right--;

        if(top<=bottom){
            for(let i=right;i>=left;i--){
                res.push(matrix[bottom][i]);
            }
        }
        bottom--;

        if(left<=right){
            for(let i=bottom;i>=top;i--){
                res.push(matrix[i][left])
            }
        }

        left++;

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
