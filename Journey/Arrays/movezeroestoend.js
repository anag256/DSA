//brute
//tc -o(2n)
//sc - o(k)
function moveZerosToEnd(ar){
    let temp=[];
    for(let i=0;i<ar.length;i++){
        if(ar[i]!==0){
            temp.push(ar[i]);
        }
    }

    for(let i=0;i<temp.length;i++){
        ar[i]=temp[i]
    }
    for(let i=temp.length;i<ar.length;i++){
        ar[i]=0
    }
    return ar;
}

//optimal
//tc-o(n)
//sc-o(1)
function moveZerosToEndOptimal(ar){
    let i=0,j=0,temp;
    while(j<ar.length){
        if(ar[j]!==0){
            temp=ar[i];
            ar[i]=ar[j];
            ar[j]=temp;
            i++;
        }
        j++;
    }
    return ar;
}

console.log(moveZerosToEnd([1,0,3,0,2,0,7,0,0,0,0,8,0,0,9,0,10]))
console.log(moveZerosToEndOptimal([1,0,3,0,2,0,7,0,0,0,0,8,0,0,9,10]))