function BS(ar,target){

    let start=0;
    let end=ar.length-1;
    while(start<=end){
        let mid=Math.floor(start + (end-start)/2);
        if(ar[mid]===target){
            return mid;
        }
        else if(ar[mid]<target){
            start=mid+1;
        }
        else {
            end=mid-1;
        }
    }
    return -1;
}

function orderAgnosticBS(ar,target){

    let start=0;
    let end=ar.length-1;
    let isAsc=ar[start]<ar[end];
    while(start<=end){
        let mid=Math.floor(start + (end-start)/2);
        if(ar[mid]===target){
            return mid;
        }
        if(isAsc){
            if(ar[mid]<target){
                start=mid+1;
            }
            else {
                end=mid-1;
            }
        }
        else{
            if(ar[mid]<target){

                end=mid-1;
            }
            else {
                start=mid+1;
            }
        }

    }
    return -1;
}


function orderAgnosticBSWithStartAndEndParams(ar,target,start,end){

    let isAsc=ar[start]<ar[end];
    while(start<=end){
        let mid=Math.floor(start + (end-start)/2);
        if(ar[mid]===target){
            return mid;
        }
        if(isAsc){
            if(ar[mid]<target){
                start=mid+1;
            }
            else {
                end=mid-1;
            }
        }
        else{
            if(ar[mid]<target){

                end=mid-1;
            }
            else {
                start=mid+1;
            }
        }

    }
    return -1;
}
function Celing(ar,target){

    let start=0;
    let end=ar.length-1;
    while(start<=end){
        let mid=Math.floor(start + (end-start)/2);
        if(ar[mid]===target){
            return mid;
        }
        else if(ar[mid]<target){
            start=mid+1;
        }
        else {
            end=mid-1;
        }
    }
    return start;
}
function Floor(ar,target){

    let start=0;
    let end=ar.length-1;
    while(start<=end){
        let mid=Math.floor(start + (end-start)/2);
        if(ar[mid]===target){
            return mid;
        }
        else if(ar[mid]<target){
            start=mid+1;
        }
        else {
            end=mid-1;
        }
    }
    return end;
}

function FirstAndLastOccurenceOfElement(ar,target,findStartIndex){
    let start=0;
    let end=ar.length-1;
    let ans=-1;
    while(start<=end){
        let mid=Math.floor(start + (end-start)/2);
         if(ar[mid]<target){
            start=mid+1;
        }
        else if(ar[mid]>target){
            end=mid-1;
        }
        else{
            ans=mid;
            if(findStartIndex){
                end=mid-1;
            }
            else{
                start=mid+1;
            }
        }
    }
    return ans;
}


function findFirstAndLast(ar,target){
    let ans=[-1,-1];
    ans[0]=FirstAndLastOccurenceOfElement(ar,target,true);
    ans[1]=FirstAndLastOccurenceOfElement(ar,target,false);
    return ans;
}


function findInInfiniteSortedArray(ar,target){
    let start=0;
    let end= 1;
    while(target>ar[end]){
        temp=end+1;
        //New End= Prev end + size of box*2
        end=end+(end-start+1)*2;
        start=temp;
    }
    return orderAgnosticBSWithStartAndEndParams(ar,target,start,end);

}

function PeakIndexInMountainArray(ar){
    let start=0;
    let end=ar.length-1;
    while(start!==end){
        let mid=Math.floor(start + (end-start)/2)
        if(ar[mid]>ar[mid+1]){
            end=mid;
        }
        else{
            start=mid+1;
        }
    }
    return end;
}

function searchInMountainArray(ar,target){
    let peak=PeakIndexInMountainArray(ar);
    let ans=orderAgnosticBSWithStartAndEndParams(ar,target,0,peak);
    if(ans==-1){
        ans=orderAgnosticBSWithStartAndEndParams(ar,target,peak+1,ar.length-1);
    }
    return ans;
}

function smallestLetterGreaterThanTarget(ar,target){
    let start=0;
    let end=ar.length-1;
    while(start<=end){
        let mid=Math.floor(start + (end-start)/2);
         if(ar[mid]<target){
            start=mid+1;
        }
        else {
            end=mid-1;
        }
    }
    return ar[start % ar.length];
}
function searchInRotatedSortedArray(ar,target){

}


// console.log(smallestLetterGreaterThanTarget(["c","f","j"],"a"))
// console.log(searchInMountainArray([1,2,3,4,5,3,1],3));
// console.log(PeakIndexInMountainArray([1,3,5,7,8,9,6,2,-1,0]))
// console.log(findInInfiniteSortedArray([3,5,6,8,9,12,15,20,25,30,50,60,90],12))

// console.log(BS([-19,-12,-5,2,3,4,16,89,90,100],4))

// console.log(orderAgnosticBS([100,87,67,45,10,-6],45))

// console.log(Celing([-19,-12,-5,2,3,4,16,89,90,100],10))

// console.log(Floor([-19,-12,-5,2,3,4,16,89,90,100],10))

// console.log(findFirstAndLast([5,7,7,8,8,10],7))