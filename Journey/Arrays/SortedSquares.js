var sortedSquares = function(nums) {
    let i=0,j=nums.length-1,res=Array.from({length:nums.length}),pos=nums.length-1;

   while(i<=j){
       if(Math.abs(nums[i])>Math.abs(nums[j])){
           res[pos]=nums[i]*nums[i];
           i++;
       }
       else{
        res[pos]=nums[j]*nums[j];
           j--;
       }
       pos--;

   }
   return res;
};

console.log(sortedSquares([-5,-3,-2,-1]))