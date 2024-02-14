//matrix is sorted row wise and column wise o(n)
// O(m + n) time complexity, where m = no. of rows and n = no. of columns.


function TwoDimensionalBS(ar,target){
    let row=0;
    let col=ar[row].length-1;
    while(row<=ar.length-1 && col>=0){
        if(ar[row][col]===target){
            return [row,col];
        }
        else if(ar[row][col]<target){
            row++;
        }
        else{
            col--;
        }
    }
    return [-1,-1]
}

// console.log(TwoDimensionalBS([
//     [5, 10, 20],
//     [8, 15, 22],
//     [15, 18, 24],
//     [26, 28, 43],
//     [35, 40, 51]
//   ],51));

console.log(TwoDimensionalBS([[ 1, 2, 3, 4 ],
    [ 5, 6, 7, 8 ],
    [ 9, 10, 11, 12 ] ],6))