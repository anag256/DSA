var addDigits = function(num) {
    let sum=0,rem=0,isSingleDigitResult=false;

        while(!isSingleDigitResult){
        rem=num%10;
        num=parseInt(num/10);
        sum+=rem;
        if(num===0){
            if(sum>9){
                num=sum;
                sum=0;
            }
            else{
                isSingleDigitResult=true
            }
        }
    }


    return sum
};

console.log(addDigits(38))