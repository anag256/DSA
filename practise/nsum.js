function nsum(ar,target){
    for(let i=0;i<ar.length;i++){
        for(let j=i+1;j<ar.length-1;j++){
            if(ar[i]+ar[j]===target){
                return [i,j]
            }
        }
    }
    return [-1,-1]
}


function nsumWithBS(ar,sum){
  
}

// console.log(nsum([2,7,11,15],18))

console.log(nsumWithBS([2,7,11,15],18))