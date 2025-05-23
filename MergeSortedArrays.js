function swap(ar,i,j){
    temp=ar[i];
    ar[i]=ar[j];
    ar[j]=temp;
}
function MergeSorted(nums1,m,nums2,n){
    let i=m-1,j=n-1,index=nums1.length-1;
    while(i>=0 && j>=0){
        if(nums1[i]>=nums2[j]){
            nums1[index]=nums1[i];
            i--;
            index--;
        }
        else{
            nums1[index]=nums2[j];
            j--;
            index--;
        }
    }
    while(i>=0){
        nums1[index]=nums1[i];
            i--;
            index--;
    }
    while(j>=0){
        nums1[index]=nums2[j];
        j--;
        index--;
    }
    return nums1;
}

console.log(MergeSorted([1,2,3,0,0,0],3,[2,5,6],3))
console.log(MergeSorted([4,5,6,0,0,0],3,[1,2,3],3))
console.log(MergeSorted([4,0,0,0,0,0],1,[1,2,3,5,6],5))