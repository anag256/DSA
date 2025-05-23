
// https://leetcode.com/problems/missing-number/description/
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
function swap(ar,a,b){
    let temp;
    temp=ar[a];
    ar[a]=ar[b];
    ar[b]=temp;
    return ar;
}
//tc - o(n)
//sc - o(1)
function MissingNumber(ar){
    let i=0;
    while(i<ar.length){
        if(ar[i]<ar.length && ar[i]!=ar[ar[i]]){ // if the array has 4 elements, 3 missing and 4 is at index 0.then index 4 wont exist
            swap(ar,i,ar[i]);

        }
        else{
        i++;
        }
    }
    //case 1
    for(let j=0;j<ar.length;j++){
        if(j!==ar[j]) return j;
    }

    //case 2
    return ar.length;
}

//1 to n
function findAllMissingNumbers(ar){
    let i=0,missing=[];
    while(i<ar.length){
        if(ar[i]!=ar[ar[i]-1]){ // if the array has 4 elements, 3 missing and 4 is at index 0.then index 4 wont exist
            swap(ar,i,ar[i]-1);

        }
        else{
        i++;
        }
    }
    console.log("ar",ar)

    for(let j=0;j<ar.length;j++){
        if(ar[j]!==j+1) missing.push(j+1);
    }

    return missing;
}
console.log(MissingNumber([0,1,2,5,4,6]));
console.log(findAllMissingNumbers([4,3,2,8,2,3,1]));