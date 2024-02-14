//brute force
//tc o(n)+o(x)+o(n-x)
//sc o(x)
function moveZeroesToEnd(ar){
    let temp=[];
    for(let i=0;i<ar.length;i++){
        if(ar[i]!=0) temp.push(ar[i]);
    }
    for(let i=0;i<temp.length;i++){
        ar[i]=temp[i];
    }
    for(let i=temp.length;i<ar.length;i++){
        ar[i]=0;
    }
    return ar;
}
// console.log(moveZeroesToEnd([2,0,2,3,0,44,0,5,4,5,0]))
//optimal-2pointer
// tc - o(n) sc - o(1)
function optimal(ar){
   let i=0,j=1;
   while(j!=ar.length){

        if(ar[i]==0 && ar[j]!=0){
            ar=swap(ar,i,j)
        }
        else if(ar[i]==0 && ar[j]==0){
            j++;

        }
        else{
            i++;
            j++;
        }

   }
   return ar;
}

function swap(ar,i,j){
    temp=ar[i];
    ar[i]=ar[j];
    ar[j]=temp;
    return ar;
}
console.log(optimal([2,0,2,3,0,44,0,0,5,4,5,0]))