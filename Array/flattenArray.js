
function outer(ar){
    let res=[];
    function flatten(ar){
  ar.forEach((item)=>{
     if(Array.isArray(item)) flatten(item);
     else res.push(item)

 })

 }
 flatten(ar);
 return res;
 }


 console.log(outer([1,[1,1],[2,3,5,6],[8,9],10]))