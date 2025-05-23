function OnetoN(i,n){
    if(i>n) return;
    console.log(i);
    OnetoN(i+1,n);
}

function onetonBacktrack(i,n){
    if(i===0) return;
    onetonBacktrack(i-1,n);
    console.log(i);
}

function NtoOne(i,n){
    if(i===0) return;
    console.log(i);
    NtoOne(i-1,n)
}

function NtoOneBacktrack(i,n){
    if(i>n) return;
    NtoOneBacktrack(i+1,n)
    console.log(i);
}

OnetoN(1,5);
console.log("---- 1to n BAckTracK----")
onetonBacktrack(5,5);
console.log("n to 1")
NtoOne(5,5)

console.log("---- nto 1 BAckTracK----")
NtoOneBacktrack(1,5);