//an elemnt that appears more than n/2 times

//brute
//tc - o(n^2)
function MajorityElement(ar){
    let count=0;
    for(let i=0;i<ar.length;i++){
        count=0;
        for(let j=i+1;j<ar.length;j++){
            if(ar[i]==ar[j]){
                count++;
            }

        }
        if(count>parseInt(ar.length/2)){
            return ar[i];
        }
    }
    return -1;
}

//better
//using hashobj
//tc-o(n)+ o(n)
//sc- o(n)
function MajorityElementBetter(ar){
    let hashObj={};
    for(let i=0;i<ar.length;i++){
        if(hashObj[ar[i]]){
            hashObj[ar[i]]++;
        }
        else{
            hashObj[ar[i]]=1;
        }

    }
    console.log("hash",hashObj)
    for(let key in hashObj){
        if(hashObj[key]>parseInt(ar.length/2)){
            return key;
        }
    }
    return -1;
}

//optimal- optimize space complexity - Moore's voting algo
//tc - o(2n)
// sc -o(1)
function MajorityElementUsingMoore(ar){
    let count=0,el,count2=0;
    for(let i=0;i<ar.length;i++){
        if(count===0){
            el=ar[i];
            count++;
        }
        else if(ar[i]===el){
            count++;
        }
        else{
            count--;
        }
    }
    for(let i=0;i<ar.length;i++){
        if(el==ar[i]){  //this step will only come in if problem states that ar can or canot have a majority element.
            count2++;
        }
    }
    if(count2>parseInt(ar.length/2)){
        return el;
    }
    return -1;
}

console.log(MajorityElement([-1,0,8,2,3,1,1,2,3,2,2,2,1,1,1,1,1,1,1,1,1,1,1]))
console.log(MajorityElementBetter([-1,0,8,2,3,1,1,2,3,2,2,2,1,1,1,1,1,1,1,1,1,1,1]))
console.log(MajorityElementUsingMoore([-1,0,8,2,3,1,1,2,3,2,2,2,1,1,1,1,1,1,1,1,1,1,1]))