var plusOne = function(digits) {
    let carry=1;

    let j=digits.length-1;
    while(carry>0 && j>=0){
        let sum=digits[j]+carry;
        if(sum > 9){
            carry=1;
            digits[j]=sum%10;
            j--;
        }
        else{
            digits[j]=sum%10;
            carry=0;
        }
    }
    while(carry>0){
        digits.unshift(carry);
        carry=0;
    }
    return digits;
};

console.log(plusOne([9]))