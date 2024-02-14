var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [ar[i],ar[j]]
            }
        }
    }
};

//better approach ( array needs to be sorted)

let nsum=function(nums,target){
    let left=0;
    let right=nums.length-1;
    while(left<right){
        if(nums[left]+nums[right]===target){
            return [left,right];
        }
        else if(nums[left]+nums[right]>target){
            right--;
        }
        else{
            left++;
        }
    }
}
console.log(nsum([-5,-4,-3,-2,0,2,4,6,8],0))