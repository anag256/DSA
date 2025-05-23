function BinarySearch(ar,target,start,end){
    while(start<=end){
        let mid=parseInt((start+end)/2);
        if(target>ar[mid]){
            start=mid+1;
        }
        else if(target<ar[mid]){
            end=mid-1;
        }
        else{
            return mid;
        }
    }
    return -1;
}

function OrderAgnosticBinarySearch(ar,target){
    let start=0;
    let end=ar.length-1;
    let isAsc=ar[end]>ar[start];
    while(start<=end){
        let mid=parseInt((start+end)/2);
        if(target===ar[mid]) return mid;
        if(isAsc){
            if(target>ar[mid]){
                start=mid+1;
            }
            else {
                end=mid-1;
            }

        }
        else{
            if(target>ar[mid]){

                end=mid-1;
            }
            else {
                start=mid+1;
            }
        }

    }
    return -1;
}


function ceiling(ar,target){
    let start=0;
    let end=ar.length-1;
    while(start<=end){
        let mid=parseInt((start+end)/2);
        if(target>ar[mid]){
            start=mid+1;
        }
        else if(target<ar[mid]){
            end=mid-1;
        }
        else{
            return mid;
        }
    }
    return start;
}

function floor(ar,target){
    let start=0;
    let end=ar.length-1;
    while(start<=end){
        let mid=parseInt((start+end)/2);
        if(target>ar[mid]){
            start=mid+1;
        }
        else if(target<ar[mid]){
            end=mid-1;
        }
        else{
            return mid;
        }
    }
    return end;
}

//peak index in a mountain array

function peakIndexInMountainArray(ar){
    let start=0;
    let end=ar.length-1;
    let mid;
    while(start<end){
         mid=parseInt((start+end)/2);
        if(ar[mid]>ar[mid+1]){
            end=mid;
        }
        else{
            start=mid+1;
        }
    }
    return mid;
}

function searchInInfiniteSortedArray(ar,target){
    let start=0;
    let end=1;
    let temp;
    while(target>ar[end]){
        temp=start;
        start=end+1;
        end=start+(end-temp)*2;
    }
    return BinarySearch(ar,target,start,end)
}

function findPivot(ar){
    let start=0;
    let end=ar.length-1;
    while(start<=end){
        let mid=parseInt((start+end)/2);
       if(ar[mid]>ar[mid+1]){
        return mid;
       }
       else if(ar[[mid-1]>ar[mid]]){
        return mid-1;
       }
       else if(ar[start]>ar[mid]){
        end=mid-1
       }
       else{
        start=mid+1;
       }
    }
    return -1;
}
function findFirstAndLastOccurence(ar,target,findFirtsOccurence){
    let start=0;
    let end=ar.length-1;
    let ans=-1;
    while(start<=end){
        let mid=parseInt((start+end)/2);
        if(target>ar[mid]){
            start=mid+1;
        }
        else if(target<ar[mid]){
            end=mid-1;
        }
        else{
            ans=mid;
            if(findFirtsOccurence){
                end=mid-1;
            }
            else{
                start=mid+1;
            }
        }
    }
    return ans;
}

function findFirstAndLastOccurenceBS(ar,target){
    let ans=[-1,-1];
    ans[0]=findFirstAndLastOccurence(ar,target,true);
    ans[1]=findFirstAndLastOccurence(ar,target,false);
    return ans;
}
function searchRotatedSortedArray(ar,target){
    let res;
    let pivot=findPivot(ar);
    res=BinarySearch(ar,target,0,pivot);
    if(res===-1) {
        res=BinarySearch(ar,target,pivot+1,ar.length-1);
    }
    return res;
}
console.log(OrderAgnosticBinarySearch([18,16,12,2,1,0],12))

console.log(ceiling([2,4,6,8,12,20,22],7))
console.log(floor([2,4,6,8,12,20,22],21))

console.log(peakIndexInMountainArray([1,3,5,7,8,9,6,2,-1,0]))

console.log(searchInInfiniteSortedArray([2,4,6,8,12,20,22],8))
console.log(searchRotatedSortedArray([4,5,6,6,6,7,7,7,7,7,7,0,1,2,3],3))

console.log(findFirstAndLastOccurenceBS([4,5,6,6,6,7,7,7,7,7,8],6))

