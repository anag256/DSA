//brute
//tc- o(n1xn2)
//sc- o(n2)
function intersection(ar1,ar2){
    let visited= Array.from(ar2).fill(0);
    let intersection=[];
    for(let i=0;i<ar1.length;i++){
        for(let j=0;j<ar2.length;j++){
            if(ar1[i]===ar2[j] && visited[j]===0){
                intersection.push(ar1[i])
                visited[j]=1;
                break;
            }
        }
    }
    return intersection;
}

//optimal

function intersectionOptimal(ar1,ar2){
   let i=0,j=0,inter=[];
    while(i<ar1.length && j<ar2.length){
        if(ar1[i]<ar2[j]){
            i++;
        }

        else if(ar1[i]===ar2[j]){
            inter.push(ar1[i]);
            i++;
            j++;
        }
        else{
            j++;
        }
    }
    return inter;
}

console.log(intersection([1,1,2,2,2,3,4,5,5,7],[1,2,2,3,4,4,4,4,6,7,8]))

console.log(intersectionOptimal([1,1,2,2,2,3,4,5,5,7],[2,3,4,4,4,4,6,7,8]))