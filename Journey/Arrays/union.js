//brute
//tc o(n1+n2)
// sc o(n1+n2) + o(n1+n2)
function union(ar1,ar2){
    const uniqueSet=new Set([...ar1,...ar2]);
    return Array.from(uniqueSet);
}

//optimal-sorted-2pointer
//tc o(n1+n2)
//sc o(n1+n2) - to return
function unionOptimal(ar1,ar2){
    let i=0,j=0,union=[];
    while(i<ar1.length && j<ar2.length){
        if(ar1[i]<=ar2[j]){
            if(union.length===0 || union[union.length-1]!==ar1[i])  union.push(ar1[i]);
            i++;
        }
        else{
            if( union.length===0 || union[union.length-1]!==ar2[j]) union.push(ar2[j]);
            j++;
        }
    }
    while(j<ar2.length){
        if(union.length===0 ||union[union.length-1]!==ar2[j]) union.push(ar2[j]);
            j++;
    }
    while(i<ar1.length){
        if(union.length===0 || union[union.length-1]!==ar1[i])  union.push(ar1[i]);
        i++;
    }
return union;
}

console.log(union([1,1,2,2,2,3,4,5,5],[2,3,4,4,4,4,6,7,8]))
console.log(unionOptimal([1,1,2,2,2,3,4,5,5],[2,3,4,4,4,4,6,7,8]))