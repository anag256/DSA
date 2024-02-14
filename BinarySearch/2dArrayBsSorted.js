// sorted array
// o(log(n)+log(m))

function BSForARow(ar,target,row,cStart,cEnd){
    while(cStart<cEnd){
        let cMid=cStart+Math.floor(cEnd-cStart)/2;
        if(ar[row][cMid]===target){return [row,cMid]}
        else if(ar[row][cMid] < target){
            cStart=cMid+1;
        }
        else{
            cEnd=cMid-1;
        }
    }
    return [-1,-1]
}
function TwoDimensionalArrayBSSorted(matrix,target){
    let rows=matrix.length;
    let columns=matrix[0].length;
    if(rows===1){
        BSForARow(matrix,target,0,0,columns-1)
    }
    let rStart=0;
    let rEnd=rows-1;
    let cMid=Math.floor(columns/2);
    //run the loop till 2 rows are remaining

    while(rStart<(rEnd-1)){// while true it will have more than 2 rows

        let mid=rStart+Math.floor(rEnd-rStart)/2;
        if(matrix[mid][cMid]==target){
            return [mid,cMid]
        }
        if(matrix[mid][cMid]<target){
            rStart=mid;
        }
        else{
            rEnd=mid;
        }
    }
    //now we have 2 rows
    //check whether middle element of rows contain the target
    let result=BSForARow();

}


// -------------INCOMPLETE-----------------