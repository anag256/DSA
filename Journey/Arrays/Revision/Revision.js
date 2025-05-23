function checkIfSorted(ar){
    for(let i=0;i<ar.length-1;i++){
        if(ar[i+1]<ar[i]){
            return false;
        }
    }
    return true;
}

function Largest(ar){
    let max=ar[0];
    for(let i=1;i<ar.length;i++){
        if(ar[i]>max){
            max=ar[i];
        }
    }
    return max
}

function swap(ar,i,j){
    let temp;
    temp=ar[i];
    ar[i]=ar[j];
    ar[j]=temp
}

function reverseAr(ar,i,j){
    while(i<j){
        swap(ar,i,j);
        i++;
        j--;
    }
    return ar;
}
function secondLargest(ar){
    let largest=ar[0],secondL=Number.MIN_SAFE_INTEGER;
    for(let i=1;i<ar.length;i++){
        if(ar[i]>largest){
            secondL=largest;
            largest=ar[i];
        }
        if(ar[i]>secondL && ar[i]<largest){
            secondL=ar[i]
        }
    }
    return [largest,secondL]
}

//brute
//tc -o(n+k)
//sc - o(k)
function LeftRotateByKPlaces(ar,k){
    k=k%ar.length;
    let temp=[];
    for(let i=0;i<k;i++){
        temp.push(ar[i]);
    }
    for(let i=k;i<ar.length;i++){
        ar[i-k]=ar[i];
    }
    for(let i=ar.length-k;i<ar.length;i++){
        ar[i]=temp[i-(ar.length-k)]
    }
    return ar;
}

//optimal
//tc -o (n)
//sc -o(1)
function LeftRotateOptimal(ar,k){
  k=k%ar.length;
  ar=reverseAr(ar,0,k-1);
  ar=reverseAr(ar,k,ar.length-1);
  ar=reverseAr(ar,0,ar.length-1);
  return ar;
}


//brute
//tc-o(2n)
//sc-o(k)
function moveZerosToEnd(ar)
{
    let temp=[];

    for(let i=0;i<ar.length;i++){
        if(ar[i]!==0){
            temp.push(ar[i]);
        }
    }
    for(let i=0;i<temp.length;i++){
        ar[i]=temp[i]
    }
    for(let i=temp.length;i<ar.length;i++){
        ar[i]=0
    }
    return ar;
}

//tc- o(n)
//sc-o(1)
function moveZerosToEndOptimal(ar){
    let i=0,j=0,temp;
    while(j<ar.length){
        if(ar[j]!==0){
            temp=ar[i];
            ar[i]=ar[j];
            ar[j]=temp;
            i++;
        }
        j++;
    }
    return ar;
}

function RightRotateByKPlaces(ar,k){
    let temp=[];
    k=k%ar.length;
    for(let i=ar.length-k;i<ar.length;i++){
        temp.push(ar[i]);
    }
    for(let i=ar.length-k-1;i>=0;i--){
        ar[i+k]=ar[i];
    }
    for(let i=0;i<k;i++){
        ar[i]=temp[i];
    }
    return ar;
}

function RightRotateByKPlacesOptimal(ar,k){
    k=k%ar.length;
    ar=reverseAr(ar,0,ar.length-1);
    ar=reverseAr(ar,0,k-1);
    ar=reverseAr(ar,k,ar.length-1);
    return ar;
}

//brute
function union(ar1,ar2){
    const union=[];
    const uniqueSet=new Set([...ar1,...ar2]);
    uniqueSet.forEach(ele=>union.push(ele))
    return  union;
}

//optimal

function unionOptimal(ar1,ar2){
    let i=0,j=0,union=[];
    while(i<ar1.length && j<ar2.length){
        if(ar1[i]<=ar2[j]){
            if(union.length===0 || ar1[i]!==union[union.length-1]){
                union.push(ar1[i]);

            }
            i++;
        }
        else{
            if(union.length===0 || ar2[j]!==union[union.length-1]){
                union.push(ar2[j]);

            }
            j++;
        }
    }

    while(i<ar1.length){
        if(union.length===0 || ar1[i]!==union[union.length-1]){
            union.push(ar1[i]);

        }
        i++;
    }
    while(j<ar2.length){
        if(union.length===0 || ar2[j]!==union[union.length-1]){
            union.push(ar2[j]);

        }
        j++;
    }

    return union;
}


//brute
// o(n1xn2)
function intersection(ar1,ar2){
    let vis=[],inter=[];
    for(let i=0;i<ar1.length;i++){
        for(let j=0;j<ar2.length;j++){
            if(ar1[i]===ar2[j] && vis[j]!==1){
                inter.push(ar1[i]);
                vis[j]=1;
                break;
            }
        }
    }
    return inter;
}

function intersectionOptimal(ar1,ar2){
    let i=0,j=0,inter=[];
    while(i<ar1.length && j<ar2.length){
        if(ar1[i]===ar2[j]){
            inter.push(ar1[i]);
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
    return inter;
}

function removeDeplicatesOptimal(ar){
    let i=0,j=1;
    while(j<ar.length){
        if(ar[i]<ar[j]){
            swap(ar,i+1,j);
            i++;
            j++;
        }
        else{
            j++;
        }
    }
    return ar.slice(0,i+1);
}

function CycleSort(ar){
    let i=0;
    while(i<ar.length){
        let correctIndex=ar[i]-1;
        if(ar[i]!==ar[correctIndex]){
            swap(ar,i,correctIndex)
        }
        else{
        i++;
        }
    }
    return ar;
}

function duplicateAndMissingNumbers(ar){
    let i=0,ele=[];
    while(i<ar.length){
        let correctIndex=ar[i]-1;
        if(ar[i]!==ar[correctIndex]){
            swap(ar,i,correctIndex)
        }
        else{
        i++;
        }
    }

    for(let j=0;j<ar.length;j++){
        if(ar[j]!==j+1){
             ele.push([j+1,ar[j]])
        }
    }
    return ele;
}
// console.log(checkIfSorted([-10,1,1,9,10,20,22]))

// console.log(Largest([3,7,1,5,89,54,25,12,1]));
// console.log(secondLargest([3,7,1,5,89,54,25,12,90]));

// console.log(LeftRotateByKPlaces([1,2,3,4,5,6,7],12));

// console.log(LeftRotateOptimal([1,2,3,4,5,6,7],12));

// console.log(moveZerosToEnd([1,0,3,0,2,0,7,0,0,0,0,8,0,0,9,0,10]))

// console.log(moveZerosToEndOptimal([1,0,3,0,2,0,7,0,0,0,0,8,0,0,9,0,10]))

// console.log(RightRotateByKPlaces([1,2,3,4,5,6,7],23));
// console.log(RightRotateByKPlacesOptimal([1,2,3,4,5,6,7],23));

// console.log(union([1,1,2,2,2,3,4,5,5],[2,3,4,4,4,4,6,7,8]))
// console.log(unionOptimal([1,1,2,2,2,3,4,5,5],[2,3,4,4,4,4,6,7,8]))

// console.log(intersection([1,1,2,2,2,3,4,5,5,7],[1,2,2,3,4,4,4,4,6,7,8]))
// console.log(intersectionOptimal([1,1,2,2,2,3,4,5,5,7],[1,2,2,3,4,4,4,4,6,7,8]))

// console.log(removeDeplicatesOptimal([1,1,2,2,2,3,4,4,4,5,5,5,5,5,5,7,9,9,9,10,11,11,11,11,11,12]))

// console.log(CycleSort([2,3,1,5,4,6]));

console.log(duplicateAndMissingNumbers([1,3,4,2,2]));