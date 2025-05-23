
//***important***/

//bruteforce//o(n)
// sc-o(n)
function removeDuplicatesInPlaceFromSortedArray(ar){
let array=[];
//o(n)
const uniqueSet= new Set(ar);
// return Array.from(uniqueSet);
// o(n)
 uniqueSet.forEach(ele=>array.push(ele));
return array;
}


//optimized-2pointer //o(n) sc-o(1)
function removeDeplicatesOptimal(ar){
    let i=0,j=1;
    while(j<ar.length){
        if(ar[j]>ar[i]){
            ar[i+1]=ar[j];
            i++;
        }
        j++;
    }
    return i+1;
}
console.log(removeDuplicatesInPlaceFromSortedArray([1,1,2,2,2,3,4,4,4,5,5,5,5,5,5]))

console.log(removeDeplicatesOptimal([1,2,3,4,5,4]))