//-------------------------- Patterns --------------------------------
//1)

// function pattern1(n){
//     let str="";
//     for(let i=0;i<n;i++){
//         str="";
//         for(let j=0;j<n;j++){
//             str=str+"*";
//         }
//         console.log(str);
//     }

// }

// function pattern2(n){
//     let str="";
//     for(i=0;i<n;i++){
//         str="";
//         for(let j=0;j<=i;j++){
//             str+="*";
//         }
//         console.log(str);
//     }
// }


// function pattern3(n){
//     let str="",num=1;
//     for(i=0;i<n;i++){
//         str="";
//         num=1;
//         for(let j=0;j<=i;j++){
//             str+=num;
//             num++;
//         }
//         console.log(str);
//     }
// }

// function pattern4(n){
//     let str="";
//     for(i=1;i<=n;i++){
//         str="";
//         for(let j=1;j<=i;j++){
//             str+=i;
//         }
//         console.log(str);
//     }
// }


// function pattern5(n){
//     let str="";
//     for(let i=0;i<n;i++){
//         str="";
//         for(let j=0;j<n-i;j++){
//             str+="*";
//         }
//         console.log(str);
//     }
// }

// function pattern7(n){
//     let str="",starsForARow=0,spaceForARow=0,total=2*n-1;
//     for(let i=0;i<n;i++){
//         str="";
//         starsForARow=2*i+1;
//         spaceForARow=parseInt((total-starsForARow)/2);
//         for(let space=0;space<=spaceForARow;space++){
//             str+=" ";
//         }
//         for(let stars=1;stars<=starsForARow;stars++){
//             str+="*";
//         }
//         for(let space=0;space<=spaceForARow;space++){
//             str+=" ";
//         }
//         console.log(str);
//     }
// }

// function pattern8(n){
//     let str="",starsForARow=0,spaceForARow=0,total=2*n-1;
//     for(let i=0;i<n;i++){
//         str="";
//         spaceForARow=parseInt((2*i+1)/2);
//         starsForARow=total-2*spaceForARow;
//         for(let space=0;space<=spaceForARow;space++){
//             str+=" ";
//         }
//         for(let stars=1;stars<=starsForARow;stars++){
//             str+="*";
//         }
//         for(let space=0;space<=spaceForARow;space++){
//             str+=" ";
//         }
//         console.log(str);
//     }
// }


// function pattern9(n){
//     let str="",starsForARow=0,spaceForARow=0,total=2*n-1;
//     for(let i=0;i<n;i++){
//         str="";
//         starsForARow=2*i+1;
//         spaceForARow=parseInt((total-starsForARow)/2);
//         for(let space=0;space<=spaceForARow;space++){
//             str+=" ";
//         }
//         for(let stars=1;stars<=starsForARow;stars++){
//             str+="*";
//         }
//         for(let space=0;space<=spaceForARow;space++){
//             str+=" ";
//         }
//         console.log(str);
//     }

//     for(let i=0;i<n;i++){
//         str="";
//         spaceForARow=parseInt((2*i+1)/2);
//         starsForARow=total-2*spaceForARow;
//         for(let space=0;space<=spaceForARow;space++){
//             str+=" ";
//         }
//         for(let stars=1;stars<=starsForARow;stars++){
//             str+="*";
//         }
//         for(let space=0;space<=spaceForARow;space++){
//             str+=" ";
//         }
//         console.log(str);
//     }
//         }



// function pattern10(n){
// let str="",starsForARow=0;
//     for(let i=0;i<2*n-1;i++){
//         str="";
//         starsForARow=i<n ? i : 2*n-i-2;
//         for(let j=0;j<=starsForARow;j++){
//             str+="*";
//         }
//         console.log(str);
//     }
// }

// function pattern11(n){
//     let str="",val=0;
//     for(i=1;i<=n;i++){
//         str="";
//         val= (i+1)%2===0? 0:1;
//         for(let j=1;j<=i;j++){
//             str+=1-val;
//             val=1-val;
//         }
//         console.log(str);
//     }
// }

// function pattern12(n){
//     let str="",starsForARow=0,spaceForARow=0,total=2*n;
//     for(i=0;i<n;i++){
//         str="";

//         starsForARow=2*i+2;
//         spaceForARow=total-starsForARow;
//         for(let star=0;star<parseInt(starsForARow/2);star++){
//             str+=star+1;
//         }
//         for(let space=0;space<=spaceForARow;space++){
//            str+=" ";
//         }
//         for(let star=0;star<parseInt(starsForARow/2);star++){
//             str+=star+1;
//         }
//         console.log(str);
//     }
// }

// function pattern13(n){
//     let str="",num=1;
//     for(i=1;i<=n;i++){
//         str="";
//         for(let j=1;j<=i;j++){
//             str+=num;
//             str+=" ";
//             num++;
//         }
//         console.log(str);
//     }
// }

// function pattern14(n){
//     let str="",num=1;
//     for(i=1;i<=n;i++){
//         str="";
//         for(let j=1;j<=i;j++){
//             str+=num;
//             str+=" ";
//             num++;
//         }
//         console.log(str);
//     }
// }

// function pattern15(n){
//     let str="",num=65;
//     for(i=1;i<=n;i++){
//         str="";
//         num=65;
//         for(let j=1;j<=i;j++){
//             str+=String.fromCharCode(num);
//             num++;
//         }
//         console.log(str);
//     }
// }



// function pattern16(n){
//     let str="",num=64;
//     for(i=1;i<=n;i++){
//         str="";
//         num++;
//         for(let j=1;j<=i;j++){
//             str+=String.fromCharCode(num);
//         }
//         console.log(str);
//     }
// }

// function pattern17(n){
//     let str="",starsForARow=0,spaceForARow=0,total=2*n-1,num=65;
//     for(let i=0;i<n;i++){
//         str="";
//         starsForARow=2*i+1;
//         spaceForARow=parseInt((total-starsForARow)/2);
//         for(let space=0;space<=spaceForARow;space++){
//             str+=" ";
//         }
//         num=65;
//         for(let stars=1;stars<=starsForARow;stars++){
//             str+=String.fromCharCode(num);
//             num=stars<Math.round(starsForARow/2)? num+1:num-1;
//         }
//         for(let space=0;space<=spaceForARow;space++){
//             str+=" ";
//         }
//         console.log(str);
//     }
// }

// function pattern18(n){
//     let str="",num;
//     for(i=0;i<n;i++){
//         str="";
//         num=69-i;
//         for(let j=0;j<=i;j++){
//             str+=String.fromCharCode(num);
//             num++;
//         }
//         console.log(str);
//     }
// }

// function pattern19(n){
//     let str="",starsForARow,spaceForARow,total=2*n;
//     for(i=0;i<n;i++){
//         str="";
//         spaceForARow=2*i;
//         starsForARow=total-spaceForARow;
//         for(let stars=0;stars<parseInt(starsForARow/2);stars++){
//             str+="*"
//         }
//         for(let space=0;space<spaceForARow;space++){
//             str+=" ";
//         }
//         for(let stars=0;stars<parseInt(starsForARow/2);stars++){
//             str+="*"
//         }

//         console.log(str);
//     }
//     for(i=0;i<n;i++){
//         str="";
//         starsForARow=2*i+2;
//         spaceForARow=total-starsForARow;
//         for(let stars=0;stars<parseInt(starsForARow/2);stars++){
//             str+="*"
//         }
//         for(let space=0;space<spaceForARow;space++){
//             str+=" ";
//         }
//         for(let stars=0;stars<parseInt(starsForARow/2);stars++){
//             str+="*"
//         }

//         console.log(str);
//     }
// }


// function pattern20(n){
//     let str="",starsForARow,spaceForARow,total=2*n;
//     for(i=0;i<2*n;i++){
//         str="";
//         starsForARow= i<n ? (2*i)+2: starsForARow-2;
//         spaceForARow=total-starsForARow;
//         for(let stars=0;stars<parseInt(starsForARow/2);stars++){
//             str+="*";
//         }
//         for(let space=0;space<spaceForARow;space++){
//             str+=" ";
//         }
//         for(let stars=0;stars<parseInt(starsForARow/2);stars++){
//             str+="*";
//         }
//         console.log(str);
//     }
// }


// function pattern21(n){
//     let str="";
//     for(let i=0;i<n;i++){
//         str="";
//         for(let j=0;j<n;j++){
//             str=j===0 || j===n-1 || i===0 || i===n-1 ? str+"*" :str+" ";
//         }
//         console.log(str);
//     }

// }

// pattern1(5)
// pattern2(5)
// pattern3(5);

// pattern4(5);
// pattern5(5);
// pattern8(5);

// pattern9(5);

// pattern10(5);

// pattern11(5);
// pattern12(5);
// pattern13(5);

// pattern15(5);

// pattern16(5);
// pattern18(5);
// pattern19(5);
// pattern20(5);
// pattern21(5);


// ------------------------- Basic Maths -------------------------------

// function power(x,y){
//     let pro=1;
//     for(let i=0;i<y;i++){
//         pro=pro*x;
//     }
//     return pro;
// }
// function ArmStrong(n){
//     let sum=0,rem=0,original=n,count=0;

//     while(n>0){
//         rem=n%10;
//         n=parseInt(n/10);
//         count++;
//     }
//     n=original;
//     while(n>0){
//         rem=n%10;
//         n=parseInt(n/10);
//         sum+=power(rem,count)
//     }

//     return sum===original;
// }

// function divisors(n){
// for(let i=1;i<=n;i++){
//     if(n%i===0){
//         console.log(i, n/i);
//     }
// }
// }

// function optimised_divisors(n){
//     for(let i=1;i<=Math.sqrt(n);i++){
//         if(n%i===0){
//             console.log(i,n/i)
//         }
//     }
// }

// function prime(n){
//     if(n===0 || n===1) return false;
//     let flag=0;
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i===0){
//             flag=1;
//             break;
//         }
//     }
//     return flag===0;
// }

// function gcd(n1,n2){
//     let gcd=0;
//    for(let i=1;i<=Math.min(n1,n2);i++){
//     if(n1%i===0 && n2%i===0){
//         gcd=i;
//     }
//    }
//    return gcd;
// }
// a>b,a%b,b
// function euclidean(n1,n2){
//     let gcd=0;
//    while(n1>0 && n2>0){
//     if(n1>n2){
//         n1=n1%n2;
//     }
//     else{
//         n2=n2%n1;
//     }
//    }
//    gcd=n1===0 ? n2:n1;
//    return gcd;
// }
// divisors(90);
// optimised_divisors(121);
// console.log(ArmStrong(407))

// console.log(prime(37))

// console.log(euclidean(20,40))


// function Denomination(amount){
//     const notes=[2000,500,200,100,50,20,10,1],map={};
//     for(let i=0;i<notes.length;i++){
//         if(amount>=notes[i]){
//             map[notes[i]]=parseInt(amount/notes[i]);
//             amount=amount%notes[i];
//         }



//     }
//     return map;

// }




function DailyTemperatures(ar){
    let i=0,j=1,ans=[],wait=1;
    while(i<ar.length){
        if(j>=ar.length){
            ans[i]=0;
            i++;
            wait=1;
            j=i+1;
        }
        if(ar[j]>ar[i]){
            ans[i]=wait;
            i++;
            j=i+1;
            wait=1;
        }
        else{
        wait++;
        j++;
        }


    }
    return ans;
}

function binarySearch(ar,target){
    let low=0,high=ar.length-1,mid;
    while(low<high){
        mid=parseInt(low+(high-low)/2);
        if(ar[mid]===target) return mid;
        else if(target<ar[mid]){
            high=mid-1;
        }
        else{
            low=mid+1;
        }
    }
    return -1;
}

function orderAgnosticBS(ar,target,start,end){
    let low=start || 0 ,high=end || ar.length-1,mid;
    const isAsc=ar[high]>ar[low];

    while(low<=high){
        mid=parseInt(low+(high-low)/2);
        if(ar[mid]===target) return mid;
        if(isAsc){
            if(target<ar[mid]){
                high=mid-1;
            }
            else{
                low=mid+1;
            }
        }
        else{
            if(target<ar[mid]){
                low=mid+1;
            }
            else{

                high=mid-1;
            }
        }
    }
    return -1;
}

function ceiling(ar,target){
    let low=0,high=ar.length-1,mid;
    const isAsc=ar[high]>ar[low];

    while(low<=high){
        mid=parseInt(low+(high-low)/2);
        if(ar[mid]===target) return mid;
        if(isAsc){
            if(target<ar[mid]){
                high=mid-1;
            }
            else{
                low=mid+1;
            }
        }
        else{
            if(target<ar[mid]){
                low=mid+1;
            }
            else{

                high=mid-1;
            }
        }
    }
    return low;
}

function floor(ar,target){
    let low=0,high=ar.length-1,mid;
    const isAsc=ar[high]>ar[low];

    while(low<=high){
        mid=parseInt(low+(high-low)/2);
        if(ar[mid]===target) return mid;
        if(isAsc){
            if(target<ar[mid]){
                high=mid-1;
            }
            else{
                low=mid+1;
            }
        }
        else{
            if(target<ar[mid]){
                low=mid+1;
            }
            else{

                high=mid-1;
            }
        }
    }
    return high;
}

function peakIndex(ar){
    let start=0,end=ar.length-1,mid=-1;
    while(start<end){
        mid=parseInt(start+(end-start)/2);
        if(ar[mid]>ar[mid+1]){
            end=mid;
        }
        else{
            start=mid+1;
        }
    }
    return start;
}

function findPivot(ar){
    let start=0,end=ar.length-1,mid;
    while(start<end){
        mid=parseInt(start+(end-start)/2);
        if(ar[mid]>ar[mid+1]){
            return mid;
        }
        if(ar[mid-1]>ar[mid]){
            return mid-1;
        }
        if(ar[start]>ar[mid]){
            end=mid-1;
        }

        else {
            start=mid+1;

        }

    }
    return -1;
}

function findPivotWithDuplicates(ar){
    let start=0,end=ar.length-1,mid;
    while(start<=end){
        mid=parseInt(start+(end-start)/2)
        if(ar[mid]>ar[mid+1]){
            return mid;
        }
        if(ar[mid-1]>ar[mid]){
            return mid-1;
        }
        if(ar[start]===ar[mid] && ar[mid]===ar[end]){
            if(ar[start]>ar[start+1]){
                return start;
            }
            start++;
            if(ar[end-1]>ar[end]){
                return end-1;
            }
            end--;
        }
        //left hand side is sorted,pivot in right
        if(ar[start]<ar[mid] || (ar[start]===ar[mid] && ar[mid]>ar[end])){
            start=mid+1;
        }
        else{
            end=mid-1;
        }

    }
    return mid;
}
function search_rotated_sorted(ar,target){
    let ans=-1;
    let pivot=findPivot(ar);
    ans=orderAgnosticBS(ar,target,0,pivot);
    if(ans==-1){
        ans=orderAgnosticBS(ar,target,pivot+1,ar.length-1);
    }
return ans;
}

function searchInInfiniteSortedArray(ar,target){
    let start=0,end=1,temp;
    while(target<ar[end]){
        temp=start+1;
        end=(end-start+1)*2+end;
        start=temp;
    }
    return orderAgnosticBS(ar,target,start,end);
}

function firstAndLastOccurence(ar,target,findFirst){
    let low=0,high=ar.length-1,mid,ans=-1;
    while(low<=high){
        mid=parseInt(low+(high-low)/2);
        if(ar[mid]===target) {
            ans=mid;
            if(findFirst){
                high=mid-1;
            }
            else{
                low=mid+1;
            }
        }
        else if(target<ar[mid]){
            high=mid-1;
        }
        else{
            low=mid+1;
        }
    }
    return ans;
}
// console.log(binarySearch([-19,-12,-5,2,3,4,16,89,90],89))
console.log(orderAgnosticBS([100,87,67,45,10,-6],-6))
// console.log(ceiling([-19,-12,-5,2,3,4,16,89,90,100],1));
// console.log(floor([-19,-12,-5,2,3,4,16,89,90,100],1));
// console.log(peakIndex([1,3,5,7,8,9,6,2,-1,0]))
// console.log(findPivot([4,7,7,10,90,-2,2,3,4,4]))
// console.log(search_rotated_sorted([1,3],7));
// console.log(Denomination(4300));

console.log(findPivot([10,12,14,25,39,-5,2,4,6,8]));

console.log(findPivotWithDuplicates([4,4,6,6,6,7,7,-5,-2,-2,-2]));

console.log(searchInInfiniteSortedArray([100,87,67,45,10,-6],-6))

console.log(firstAndLastOccurence([5,7,7,8,8,10],7,true))
console.log(firstAndLastOccurence([5,7,7,8,8,10],7,false))