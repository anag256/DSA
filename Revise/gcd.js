//gcd - for 2 given nos, the greatest no that divides both the nos.
function gcd(n1,n2){
    let gcd=0;
    for(let i=1;i<=Math.min(n1,n2);i++){
        if(n1%i==0 && n2%i==0){
            gcd=i

        }
    }
    return gcd;
}


//euclidean algo

// gcd(a,b)=>gcd(a-b,b) given a>b

function euclidean(n1,n2){
    while(n1>0 && n2>0){
        if(n1>n2){
            n1=n1%n2;
        }
        else{
            n2=n2%n1;
        }

    }
    if(n1==0) return n2
    return n1;
}
console.log(euclidean(20,40))

//tc logΦ(min(a,b))