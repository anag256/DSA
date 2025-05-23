

/*
 * Complete the 'findSum' function below.
 *
 * The function is expected to return a LONG_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY numbers
 *  2. 2D_INTEGER_ARRAY queries
 */

function findSum(numbers, queries) {
    // Write your code here
    let sum=0,ar=[];

   for(let row=0;row<queries.length;row++){
    sum=0;

        for(let i=queries[row][0];i<=queries[row][1];i++){
            if(numbers[i]===0){
                sum+=queries[row][2];
            }
            else{
                sum+=numbers[i];
            }

        }
        ar.push(sum);

   }
return ar;
}

console.log(findSum([3,5,10,0,1,3],[[1,2,5],[2,3,2]]))