function groupAngrams(ar){
    let myMap=new Map();
    for(let str of ar){
        let sortedStr=str.split("").sort().join();
        if(myMap.has(sortedStr)){
            myMap.set(sortedStr,[str,...myMap.get(sortedStr)])
        }
        else{
            myMap.set(sortedStr,[str])
        }
    }

    return [...myMap.values()];
}

console.log(groupAngrams(["eat","tea","tan","ate","nat","bat"]));