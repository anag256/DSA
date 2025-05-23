//brute
//merge sort
//tc - o(nlogn) sc- o(n) - to store result


//better
//tc - o(2n) sc-o(1)

function swap(ar,i,j){
    let temp;
    temp=ar[i];
    ar[i]=ar[j];
    ar[j]=temp
}

function sort0s1s2s(ar){
    let count1=0,count2=0,count0=0;
    for(let i=0;i<ar.length;i++){
        if(ar[i]==0) count0++;
        else if(ar[i]==1) count1++;
        else count2++;
    }

    for(let i=0;i<count0;i++){
        ar[i]=0;
    }
    for(let i=count0;i<count0+count1;i++){
        ar[i]=1;
    }
    for(let i=count0+count1;i<ar.length;i++){
        ar[i]=2;
    }
    return ar;
}

//optimal
//dutch national flag algorithm
//a[o....low-1] - 0
//a[low....mid-1] - 1
//a[mid....high] - unsorted
//a[high+1....n-1]-2
//tc - o(n) sc- o(1)
function sort0s1s2sOptimal(ar){
    let low=0,mid=0,high=ar.length-1;
    while(mid<=high){
        if(ar[mid]===0){
            swap(ar,mid,low);
            low++;
            mid++;
        }
        else if(ar[mid]===1){
            mid++;
        }
        else{
            swap(ar,mid,high);
            high--;
        }
    }
    return ar;
}
console.log(sort0s1s2s([2,1,1,1,1,0,2,0,0,0,0,0,2,0,1,0,1,1,1]))

console.log(sort0s1s2sOptimal([2,1,1,1,1,0,2,0,0,0,0,0,2,0,1,0,1,1,1]))