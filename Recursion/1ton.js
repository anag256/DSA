function OnetoN(i,n){
    if(i>n) return;
    console.log(i);
    OnetoN(++i,n);
}
function NtoOne(i,n){
    if(i<1) return;
    console.log(i);
    NtoOne(--i,n);
}
NtoOne(5,5)