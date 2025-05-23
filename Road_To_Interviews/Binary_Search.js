function linearSearch(ar,target){
    for(let i=0;i<ar.length;i++){
        if(ar[i]===target){
            return i;
        }
    }
    return -1;

}

function binarySearch(ar,target,start,end){


    while(start<=end){
        let mid=parseInt((start+end)/2);
        if(target===ar[mid]) return mid;
        if(target>ar[mid]){
            start=mid+1;
        }
        else{
            end=mid-1;
        }
    }
    return -1;
}

function OrderAgnosticBinarySearch(ar,target){
    let start=0,end=ar.length-1,isAsc=ar[ar.length-1]>ar[0];

    while(start<=end){
        let mid=parseInt((start+end)/2);
        if(target===ar[mid]) return mid;
        if(isAsc){
            if(target>ar[mid]){
                start=mid+1;
            }
            else{
                end=mid-1;
            }
        }
        else{
            if(target>ar[mid]){
                end=mid-1;
            }
            else{

                start=mid+1;
            }

        }

    }
    return mid;
}

function ceiling(ar,target){
    let start=0,end=ar.length-1;

    while(start<=end){
        let mid=parseInt((start+end)/2);
        if(target===ar[mid]) return mid;
        if(target>ar[mid]){
            start=mid+1;
        }
        else{
            end=mid-1;
        }
    }
    return start;
}

function floor(ar,target){
    let start=0,end=ar.length-1;

    while(start<=end){
        let mid=parseInt((start+end)/2);
        if(target===ar[mid]) return mid;
        if(target>ar[mid]){
            start=mid+1;
        }
        else{
            end=mid-1;
        }
    }
    return end;
}

function peakIndexInMountainArray(ar){
    let start=0,end=ar.length-1,ans;
    while(start<end){
        let mid=parseInt((start+end)/2);
        if(ar[mid]>ar[mid+1]){
            ans=mid;
            end=mid-1;
        }
        else{
            start=mid+1;
        }
    }
return ans;
}

function searchInInfiniteSortedArray(ar,target){
    let start=0,end=1,oldStart;
    while(target>ar[end]){
        oldStart=start;
        start=end+1;
        end=start+2*(end-oldStart);
    }
    return binarySearch(ar,target,start,end);
}

function searchRotatedSortedArray(ar,target){
    let start=0,end=ar.length-1;
    while(start<=end){
            let mid=parseInt((start+end)/2);
            if(target===ar[mid]) return mid;
            //identify sorted arr
            //left side sorted
            if(ar[start]<=ar[mid]){
                if(target<=ar[mid] && target>=ar[start]){
                    end=mid-1;
                }
                else{
                    start=mid+1;
                }
            }
            //right side sorted
            else{
                if(target>=ar[mid] && target<=ar[end]){
                    start=mid+1;
                }
                else{
                    end=mid-1;
                }
            }
    }
    return -1;
}
function searchRotatedSortedArrayWithDuplicates(ar,target){
    let start=0,end=ar.length-1;
    while(start<=end){
            let mid=parseInt((start+end)/2);
            if(target===ar[mid]) return mid;
            if(ar[start]===ar[mid] && ar[mid]===ar[end]){
                start++;
                end--;
                continue;
            }
            //identify sorted arr
            //left side sorted
            if(ar[start]<=ar[mid]){
                if(target<=ar[mid] && target>=ar[start]){
                    end=mid-1;
                }
                else{
                    start=mid+1;
                }
            }
            //right side sorted
            else{
                if(target>=ar[mid] && target<=ar[end]){
                    start=mid+1;
                }
                else{
                    end=mid-1;
                }
            }
    }
    return -1;
}

function firstAndLastOccurence(ar,target,findFirst){
    let start=0,end=ar.length-1,ans=-1;

    while(start<=end){
        let mid=parseInt((start+end)/2);
        if(target===ar[mid]) {
            ans=mid;
            if(findFirst){
                end=mid-1;
            }
            else{
                start=mid+1;
            }
        }
        else if(target<ar[mid]){
            end=mid-1
        }
        else{
            start=mid+1;
        }
    }
    return ans;
}
function minInSortedArray(ar){
    let start=0,end=ar.length-1,min=Number.MAX_SAFE_INTEGER;
    while(start<=end){
        let mid=parseInt((start+end)/2);
        if(ar[start]<=ar[mid]){
            min=Math.min(min,ar[start]);
            start=mid+1;
        }
        else{
            min=Math.min(min,ar[mid]);
            end=mid-1;
        }
    }
    return min;
}
console.log(OrderAgnosticBinarySearch([12,9,7,6,5,2],6))

console.log(floor([-5,-2,1,3,5,7,9],4))
console.log(searchInInfiniteSortedArray([-5,-2,1,3,5,7,9],7))

console.log(peakIndexInMountainArray([-5,-2,1,2,5,4,3,0]))

console.log(searchRotatedSortedArray([3,1],1))


console.log(searchRotatedSortedArrayWithDuplicates([4,4,5,7,4,4,4,4,4,4],5))

console.log(firstAndLastOccurence([5,7,7,8,8,10],7,true))
console.log(firstAndLastOccurence([5,7,7,8,8,10],7,false))


console.log("min",minInSortedArray([7,8,1,2,3,4,5]))