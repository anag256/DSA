function threeSum(ar){
   let res=[],set=new Set();
    for(let i=0;i<ar.length;i++){
        for(let j=i+1;j<ar.length;j++){
            for(let k=j+1;k<ar.length;k++){
                if(ar[i]+ar[j]+ar[k]===0){
                    set.add(JSON.stringify([ar[i],ar[j],ar[k]].sort()));

                }
            }
        }
    }
    for(let item of set){
        res.push(JSON.parse(item))
    }
    return res;
}


function threeSumBetter(ar){
    let hashObj={},res=[],set=new Set();


    for(let i=0;i<ar.length;i++){
        hashObj={};
        for(let j=i+1;j<ar.length;j++){
            // console.log(hashObj)
            let third= 0-(ar[i]+ar[j])
            if(hashObj[third]){
                set.add(JSON.stringify([ar[i],ar[j],third].sort()))

            }


                hashObj[ar[j]]=1;
        }
    }
    for(let item of set){
        res.push(JSON.parse(item))
    }
    return res;
}


function threeSumOptimal(ar){
    ar.sort((a,b)=>a-b);
    let res=[];
   for(let i=0;i<ar.length;i++){
    if(i>0 && ar[i]===ar[i-1]) continue;
    let j=i+1,k=ar.length-1
    while(j<k){
        let sum=ar[i]+ar[j]+ar[k];
        if(sum<0){
            j++;
        }
        else if(sum > 0){
            k--;
        }
        else{
            res.push([ar[i],ar[j],ar[k]])
            j++;
            k--;
            while(j<k &&  ar[j]===ar[j-1]) j++;
            while(j<k &&  ar[k]===ar[k+1]) k--;
        }
    }
   }
   return res;

}

console.log(threeSum([-1,0,1,2,-1,-4]))

console.log(threeSumBetter([-1,0,1,2,-1,-4]))

console.log(threeSumOptimal([-1,0,1,2,-1,-4]))