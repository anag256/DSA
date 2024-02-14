//brute force
//tc -> o(n1logn+n2logn) + o(n1+n2) n--size of set
// sc=> o(n1+n2) + o(n1+n2)
function Union(ar1,ar2){
    let unionSet=new Set();
    let result=[];
    for(let i=0;i<ar1.length;i++){
        unionSet.add(ar1[i])
    }
    for(let i=0;i<ar2.length;i++){
        unionSet.add(ar2[i])
    }
unionSet.forEach(item=>result.push(item))
    return result;
}
// console.log(Union([1,1,2,3,3,3,4,5,5,6],[2,3,5,7,9,12]))


//optimal-using 2 pointers
//tc o(n1+n2)
//sc o(n1+n2) -> to return not to solve
function UnionOptimal(ar1,ar2){
    let i=0;
    let j=0;
    let unionAr=[];
    while(i<ar1.length && j<ar2.length){
        if(ar1[i]<=ar2[j]){
            if(unionAr.length==0 || unionAr.indexOf(ar1[i])==-1){
                unionAr.push(ar1[i]);
            }
            i++;
        }
        else{
            if(ar1[i]>ar2[j]){
                if(unionAr.length==0 || unionAr.indexOf(ar2[j])==-1){
                    unionAr.push(ar2[j]);
                }
                j++;
            }
        }


    }
    while(i<ar1.length){

            if(unionAr.length==0 || unionAr.indexOf(ar1[i])==-1){
                unionAr.push(ar1[i]);
            }
            i++;

    }
    while(j<ar2.length){

            if(unionAr.length==0 || unionAr.indexOf(ar2[j])==-1){
                unionAr.push(ar2[j]);
            }
            j++;
        }

    return unionAr
}
console.log(UnionOptimal([1,1,2,3,3,3,4,5,5,6],[2,3,5,7,9,12]))


//intersection
//bruteforce
// tc - o(n1xn2)
// sc - o(n2)
function intersection(ar1,ar2){
    let visited=[];
    let intersectionAr=[]
    for(let i=0;i<ar2.length;i++){
        visited.push(0);
    }
    for(let i=0;i<ar1.length;i++){
        for(let j=0;j<ar2.length;j++){
            if(ar1[i]==ar2[j] && visited[j]==0){
                intersectionAr.push(ar1[i]);
                visited[j]=1;
                break;
            }
            if(ar2[j]>ar1[i]) break;
        }

    }
    return intersectionAr;
}

//2pointer
//tc-o(n1+n2)
//sc-o(1)
function optimalIntersection(ar1,ar2){
    let i=0,j=0;
    let intersectionAr=[];
    while(i<ar1.length && j<ar2.length){
        if(ar1[i]==ar2[j]){
            intersectionAr.push(ar1[i])
            i++;
            j++;
        }
        else if(ar1[i]<ar2[j]){
            i++;
        }
        else{
            j++;
        }

    }
    return intersectionAr;
}

console.log("intersection",optimalIntersection([1,1,2,3,3,3,4,5,5,6],[2,3,3,5,7,9,12]))