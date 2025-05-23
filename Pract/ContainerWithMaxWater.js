

function ContainerWithMaxWater(heights){
    let area=0,maxArea=Number.MIN_SAFE_INTEGER;

    let left=0,right=heights.length-1;

    while(left<=right){
        area=Math.min(heights[left],heights[right]) * (right-left);
        maxArea=Math.max(maxArea,area);
        if(heights[left]<=heights[right]){
            left++;
        }
        else{
            right--
        }
    }

    return  maxArea;
}

console.log(ContainerWithMaxWater([1,8,6,2,5,4,8,3,7]));