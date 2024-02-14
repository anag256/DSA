
//o(n)
function findTheNumberThatAppearsOnce(ar){
    let mapOfFrequencies=ar.reduce((acc,curr)=>{
        if(acc[curr]) acc[curr]++;
        else acc[curr]=1

        return acc;
    },{})
    return Object.keys(mapOfFrequencies).find((key)=>mapOfFrequencies[key]==1)
}

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