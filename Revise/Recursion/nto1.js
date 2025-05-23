function ntoone(i,n){
    if(i<1) return;
    console.log(i);
    ntoone(i-1,n);
}

function ntoonebacktrack(i,n){
    if(i>n) return;
    ntoonebacktrack(i+1,n);
    console.log(i);
}
// ntoone(5,5);
ntoonebacktrack(1,5);