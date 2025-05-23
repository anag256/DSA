//brute
//tc- o(n^3)

function ThreeSum(ar,target){
    for(let i=0;i<ar.length;i++){
        for(let j=i+1;j<ar.length;j++){
            for(let k=j+1;k<ar.length;k++){
                if(ar[i]+ar[j]+ar[k]===target){
                    return [i,j,k]
                }
            }
        }
    }
}


