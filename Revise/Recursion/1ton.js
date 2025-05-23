function oneton(i,n){
    if(i>n) return;
    console.log(i);
    oneton(i+1,n);
}

function onetonBacktrack(i,n){
    if(i<1) return;
    onetonBacktrack(i-1,n);
    console.log(i);
}


// oneton(1,5)

onetonBacktrack(5,5)

