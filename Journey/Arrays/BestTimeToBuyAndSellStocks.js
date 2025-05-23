function BestTimetoBuyAndSellStocks(ar){
    let cost,profit=0,min=Number.MAX_SAFE_INTEGER,end=0;
    for(let i=0;i<ar.length;i++){
        cost=ar[i]-min;
        // profit=Math.max(profit,cost);
        if(cost>profit){
            profit=cost;
            end=i
        }
        min=Math.min(min,ar[i]);
    }
    return [profit,min,end];
}

console.log(BestTimetoBuyAndSellStocks([7,1,5,3,6,4]))