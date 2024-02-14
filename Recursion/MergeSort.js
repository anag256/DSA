//tc-o(nlog2n)
//sc-o(n)
function MergeSort(ar,low,high){
    let mid=Math.floor(low+(high-low)/2);
    if(low===high) return;
    MergeSort(ar,low,mid);
    MergeSort(ar,mid+1,high);
    return merge(ar,low,mid,high);
}

function merge(ar,low,mid,high){
    let left=low;
    let right=mid+1;
    let temp=[];
    while(left<=mid && right<=high){
        if(ar[left]<=ar[right]){
            temp.push(ar[left]);
            left++;
        }
        else{
            temp.push(ar[right]);
            right++;
        }
    }
    while(left<=mid){
        temp.push(ar[left]);
        left++
    }
    while(right<=high){
        temp.push(ar[right]);
        right++;
    }
for(let i=low;i<=high;i++){
    ar[i]=temp[i-low];
}
return ar;
}
console.log(MergeSort([2,9,1,25,16,8,3,5,10],0,8))