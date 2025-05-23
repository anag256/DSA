
function count_digits(num){
    let count=0;
    while(num>0){
        count++;
        num=parseInt(num/10);
    }
    return count;
}
function reverseNo(num){
    let rem,reversedNo=0;
    while(num>0){
        rem=num%10;
        num=parseInt(num/10);
        reversedNo=reversedNo*10+rem;
    }
    return reversedNo
}

function count_digits_using_log(num){
     return parseInt(Math.log10(num)+1)
}

function pow(x,y){
    let prod=1;
    for(let i=0;i<y;i++){
        prod*=x;
    }
    return prod
}

function armstrongNo(num){
    let count=count_digits(num);
    let sum=0,rem,originalNum=num;
    while(num>0){
        rem=num%10;
        sum+=pow(rem,count);
        num=parseInt(num/10);
    }
    return originalNum===sum;
}

function divisors(num){
    let divisors=[];
    for(let i=1;i<=num;i++){
        if(num%i===0){
            divisors.push(i);
        }
    }
    return divisors;
}
function optimised_divisors(num){
    let divisors=[];
    for(let i=0;i<=parseInt(Math.sqrt(num));i++){
        if(num%i===0){
            divisors.push(i);
            if( (num/i) !==i){
                divisors.push(num/i);
            }
        }

    }
    return divisors;
}
function isPrime(num){
    let flag=true;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            flag=false;
            return flag;
        }
    }
    return flag;
}

function gcd(n1,n2){
    let maxDivisor=Number.MIN_SAFE_INTEGER;
    for(let i=1;i<=Math.min(n1,n2);i++){
        if(n1%i === 0 && n2%i===0){
            maxDivisor=Math.max(maxDivisor,i);
        }
    }
    return maxDivisor;
}

function euclidean(n1,n2){
    while(n1 && n2){
        if(n1 > n2){
            n1=n1%n2;
        }
        else{
            n2=n2%n1;
        }
    }
    return n1===0 ? n2 : n1;
}
console.log(count_digits(12377484));
console.log(count_digits_using_log(12377484));
console.log(reverseNo(12377));
console.log(armstrongNo(371))
console.log(pow(2,3))

console.log(divisors(36))
console.log(optimised_divisors(36));

console.log(isPrime(61));

console.log(gcd(20,40))
console.log(euclidean(20,40))