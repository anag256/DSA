function Subsets(ar){
    let resultSet=[],tempSet=[];
    resultSet=backtrack(ar,resultSet,tempSet,0);
    return resultSet;
}

function backtrack(ar,resultSet,tempSet,start){
    console.log(tempSet)
    resultSet.push([...tempSet]);
    for(let i=start;i<ar.length;i++){
        // case of including the number
        tempSet.push(ar[i]);
        backtrack(ar,resultSet,tempSet,i+1);

        //case of not including the number
        tempSet.pop();
    }
return resultSet;
}

console.log(Subsets([1,2,3]))