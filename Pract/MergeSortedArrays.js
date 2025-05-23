

function MergeSorted(ar1,m,ar2,n){

   let i=m-1,j=n-1,resIndex=ar1.length-1;
   while(i>=0 && j>=0){
        if(ar2[j]>=ar1[i]){
            ar1[resIndex]=ar2[j];
            resIndex--;
            j--;
        }
        else{
            ar1[resIndex]=ar1[i];
            resIndex--;
            i--;
        }
   }

   while(i>=0){
    ar1[resIndex]=ar1[i];
    resIndex--;
            i--;
   }

   while(j>=0){
    ar1[resIndex]=ar2[j];
    resIndex--;
            j--;
   }
   return ar1;
}

console.log(MergeSorted([1,2,3,0,0,0],3,[2,5,6],3))
console.log(MergeSorted([4,5,6,0,0,0],3,[1,2,3],3))
console.log(MergeSorted([4,0,0,0,0,0],1,[1,2,3,5,6],5))