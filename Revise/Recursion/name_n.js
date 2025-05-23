function printName(i,n){
    if(i>n) return;
    console.log("Anag is here");
    printName(i+1,n);
}
printName(1,5)