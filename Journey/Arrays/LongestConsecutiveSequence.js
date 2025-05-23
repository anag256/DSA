//brute

function LinearSearch(ar,target){
    for(let i=0;i<ar.length;i++){
        if(ar[i]===target) return true;
    }
    return false;
}
//tc - o(n^2)
//sc- o(1)
function LongestConsecutiveSequence(ar){
    let x,count=0,max=Number.MIN_SAFE_INTEGER;
    for(let i=0;i<ar.length;i++){
        x=ar[i];
        count=1;
        while(LinearSearch(ar,x+1)===true){
            count++;
            x++;
        }
        max=Math.max(max,count);
    }

return max;
}


//better
//tc - o(nlogn)+o(n)
//sort and then apply algo
function LongestConsecutiveSequenceBetter(ar){
    let lastSmaller=Number.MIN_SAFE_INTEGER,count=1,max=Number.MIN_SAFE_INTEGER;
    ar.sort((a,b)=>a-b)
    for(let i=0;i<ar.length;i++){
        if(ar[i]-1===lastSmaller){
            count++;
            lastSmaller=ar[i];
        }
        else if(lastSmaller != ar[i]){
            count=1;
            lastSmaller=ar[i];
        }
        max=Math.max(max,count);
    }
    return max
}

//optimal
//using set
//tc - o(n) + o(2n) - o(3n)
//sc -o(n)
function LongestConsecutiveSequenceOptimal(ar){
    let n=ar.length,max=Number.MIN_SAFE_INTEGER,count=1,i=1;

    if(n==0) return 0;
    const set=new Set(ar);
    for(let value of set){
       if(!set.has(value-1)){
        count=1;
        i=1;
        while(set.has(value+i)){
            i++;
            count++;
        }
        max=Math.max(max,count);
       }
    }
    return max;
}
console.log(LongestConsecutiveSequence([102,4,100,1,101,3,2,1,1]))
console.log(LongestConsecutiveSequenceBetter([102,4,100,1,101,3,2,1,1]))
console.log(LongestConsecutiveSequenceOptimal([102,4,100,1,101,3,2,1,1]))


