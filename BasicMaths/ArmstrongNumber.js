function ArmStrongNumber(num){
    let sum=0;
    let originalNum=num;
    while(num>0){
        rem=num%10;
        num=Math.floor(num/10);
        sum=sum+(rem*rem*rem);
    }
   if(originalNum===sum) return true
   return false;
}


console.log(ArmStrongNumber(371))