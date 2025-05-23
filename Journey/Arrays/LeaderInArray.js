//brute
//tc-o(n^2)
function LeaderInArray(ar){
    let leader=true,i,j,leaders=[];
    for( i=0;i<ar.length;i++){
        leader=true;
        for( j=i+1;j<ar.length;j++){
            if(ar[j]>ar[i]){
                leader=false;
                break;
            }
        }
        if(leader) leaders.push(ar[i]);
    }

    return leaders;
}

//optimal
function LeaderInArrayOptimal(ar){
    let max=Number.MIN_SAFE_INTEGER,leaders=[];
    for(let i=ar.length-1;i>=0;i--){
        if(ar[i]>max){
            leaders.push(ar[i]);
        }
        max=Math.max(max,ar[i]);

    }
    return leaders;
}

console.log(LeaderInArray([10,22,12,3,0,6]))

console.log(LeaderInArrayOptimal([10,22,12,3,0,6]))