// https://leetcode.com/problems/daily-temperatures/
let dailyTemperatures = function(temperatures) {
    let i=0,j=1;
    let res=[];
    while(i<temperatures.length){
        if(j==temperatures.length){
           res[i]=0
           i++;
           j=i+1;
        }
        else if(temperatures[j]>temperatures[i]){
            res[i]=(res[i] || 0) + 1;
            ++i;
            j=i+1;
        }
        else{
            res[i]=(res[i] || 0) + 1;
            j++;
        }

    }
    return res;
};
console.log(dailyTemperatures([55,38,53,81,61,93,97,32,43,78]));