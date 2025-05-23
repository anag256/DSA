// https://leetcode.com/problems/daily-temperatures/
//store days in stack
let dailyTemperatures = function(ar) {
    let res=[],stack=[];
    res=Array.from(ar).fill(0);
    for(let i=0;i<ar.length;i++){
        let stackTopElement=stack[stack.length-1];
        while(ar[i]>ar[stackTopElement]){

                res[stackTopElement]=i-stackTopElement;
                stack.pop();

        }
        stack.push(i);
    }
    return res;
};
console.log(dailyTemperatures([55,38,53,81,61,93,97,32,43,78]));