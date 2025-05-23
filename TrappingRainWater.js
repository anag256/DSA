function TrappingRainWater(ar){
    let leftMax=[],rightMax=[];
    leftMax[0]=ar[0],total=0;
    rightMax[ar.length-1]=ar[ar.length-1]
    for(let i=1;i<ar.length;i++){
        if(ar[i]>leftMax[i-1]){
            leftMax[i]=ar[i];
        }
        else{
            leftMax[i]=leftMax[i-1];
        }
    }

    for(let i=ar.length-2;i>=0;i--){
        if(ar[i]>rightMax[i+1]){
            rightMax[i]=ar[i];
        }
        else{
            rightMax[i]=rightMax[i+1];
        }
    }


    for(let i=0;i<ar.length;i++){
        if(ar[i]<leftMax[i] && ar[i]<rightMax[i]){
            total+=Math.min(leftMax[i],rightMax[i])-ar[i];
        }
    }
    return total

}


console.log(TrappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1]));