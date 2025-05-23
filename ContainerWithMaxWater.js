function ContainerWithMaxWater(ar){
    let left=0,right=ar.length-1,area,maxArea=Number.MIN_SAFE_INTEGER;

    while(left<=right){
        // area=Smaller height (length) * width
        area=Math.min(ar[left],ar[right]) * (right-left);
        maxArea=Math.max(maxArea,area);
        if(ar[left]>=ar[right]){
            right--;
        }
        else{
            left++;
        }
    }
    return maxArea;
}

console.log(ContainerWithMaxWater([1,8,6,2,5,4,8,3,7]));