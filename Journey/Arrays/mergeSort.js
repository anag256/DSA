
// divide & merge
//tc o(nlog2n)
//sc o(n)
function merge(ar,low,mid,high){
    let left=low,temp=[];
    let right=mid+1;

    while(left<=mid && right<=high){
        if(ar[left]<ar[right]){
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
            left++;
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
function MergeSort(ar,low,high){
    if(low==high) return;
    let mid=parseInt((low+high)/2);
    MergeSort(ar,low,mid);
    MergeSort(ar,mid+1,high);
    return merge(ar,low,mid,high);
}


console.log(MergeSort([20,5,-9,65,87,24,12,7,90,76,32,-21,6],0,12));