
//o(n)
function findTheNumberThatAppearsOnce(ar){
    let mapOfFrequencies=ar.reduce((acc,curr)=>{
        if(acc[curr]) acc[curr]++;
        else acc[curr]=1

        return acc;
    },{})
    return Object.keys(mapOfFrequencies).find((key)=>mapOfFrequencies[key]==1)
}

// (1) If you take xor of a number with 0 ( zero ) , it would return the same number again.

// Means , n ^ 0 = n

// (2) If you take xor of a number with itself , it would return 0 ( zero ).

// Means , n ^ n = 0
// 1^1=0
// 0^2=2
//tc- o(n)
//sc- o(1)
function usingXOR(ar){
    let xor=0;
    for(let i=0;i<ar.length;i++){
       xor=xor^ar[i];
    }
    return xor;
}

console.log(usingXOR([1,1,2,3,3,5,5]))