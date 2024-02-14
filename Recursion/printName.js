
function printName(i,n){
    if(i>n) return;
    console.log("Anag");

    printName(++i,n);

}
printName(1,5)