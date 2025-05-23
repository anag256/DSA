function SpiralTraversal(ar){
    let m=ar.length;
    let n=ar[0].length;
    let res=[];

        let top=0,bottom=m-1,left=0,right=n-1;

        while(left<=right && top<=bottom){



        for(let j=left;j<=right;j++){
            res.push(ar[top][j]);
        }
        top++;

        for(let j=top;j<=bottom;j++){
            res.push(ar[j][right]);
        }

        right--;
        if(top<=bottom){
            for(let j=right;j>=left;j--){
                res.push(ar[bottom][j]);
            }

            bottom--;
        }

        if(left<=right){
            for(let j=bottom;j>=top;j--){
                res.push(ar[j][left])
            }
            left++;
        }


}
    return res;

}

console.log(SpiralTraversal([
    [ 1, 2, 3, 4 ],
    [ 5, 6, 7, 8 ],
    [ 9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
]))