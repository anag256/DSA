var productExceptSelf = function(nums) {
    let prod=1,ans=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0) prod=prod*nums[i];
    }
    console.log("rpd",prod)
    for(let i=0;i<nums.length;i++){
        ans[i]=nums[i]>0 ? prod/nums[i] : prod;
    }
    return ans;
};

console.log(productExceptSelf([-1,1,0,-3,3]))