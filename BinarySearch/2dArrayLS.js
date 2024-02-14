function linearSearch(ar,target){
    for(let row=0;row<ar.length;row++){
        for(let col=0;col<ar[row].length;col++){
            if(ar[row][col]===target){
                return [row,col];
            }
        }
    }
    return -1;
}
console.log(linearSearch([
    [5, 20, 60],
    [8, 10, 52],
    [15, 15, 24],
    [26, 28, 43],
    [12, 16, 51]
  ],52));