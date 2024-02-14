function OnetoNBacktrack(i,n){
    if(i<1) return ;
    OnetoNBacktrack(i-1,n);
    console.log(i);
}

function NtoOneBacktrack(i,n){
    if(i>n) return;
    NtoOneBacktrack(i+1,n);
    console.log(i);
}
OnetoNBacktrack(5,5);

console.log("-----------------")

NtoOneBacktrack(1,5)