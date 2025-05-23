function removeDuplicates(ar){
    let set=new Set(ar);
    return Array.from(set)
}

//otpimal
//o(n)
//sc o(1)
function removeDuplicatesOptimal(ar){
    let i=0;
    let j=1;
   while(j<ar.length-1){
    if(ar[i]!==ar[j]){
      ar[i+1]=ar[j];
      i++;

    }
    j++;

   }
   return i+1;
}
console.log(removeDuplicatesOptimal([1,2,2,3,3,3,4,5,5,5,5,5,5]))