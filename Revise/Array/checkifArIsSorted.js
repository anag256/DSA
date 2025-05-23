function checkIfArIsSorted(ar){
   for(let i=0;i<ar.length-1;i++){
        if(ar[i]<ar[i+1]){
            flag=true;
        }
        else{
           return false;
        }
    }
return true;

}
console.log(checkIfArIsSorted([89,101,444,1,2,5,7]));