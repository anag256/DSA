//1)
// function pattern1(n){
//     let str="";
//     for(let i=0;i<n;i++){
//         str="";
//         for(let j=0;j<n;j++){
//             str+="*";
//         }
//         console.log(str);
//     }
// }

// pattern1(5);

//2)
// function pattern2(n){
//     let str="";
//     for(let i=0;i<n;i++){
//         str="";
//         for(let j=0;j<=i;j++){
//             str+="*";
//         }
//         console.log(str);
//     }
// }

// pattern2(5);

//3)

// function pattern3(n){
//     let str="";
//     for(let i=1;i<=n;i++){
//         str="";
//         for(let j=1;j<=i;j++){
//             str+=j;
//         }
//         console.log(str);
//     }

// }

// pattern3(5);

//4)

// function pattern4(n){
//     let str="";
//     for(let i=1;i<=n;i++){
//         str="";
//         for(let j=1;j<=i;j++){
//             str+=i;
//         }
//         console.log(str);
//     }

// }

// pattern4(5);


//5)

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
// pattern5(5);

//6)

// function pattern6(n){
//     let str="";
//     for(let i=1;i<=n;i++){
//         str="";
//         for(let j=1;j<=n-i+1;j++){
//             str+=j;
//         }
//         console.log(str);
//     }

// }

// pattern6(5);


//7)

// function pattern7(n){

//     let str="";

//     for(let i=0;i<n;i++){
//         let numberOfSpace=n-i-1;
//         let numberOfStars=2*n-1-2*numberOfSpace;
//         str="";
//         for(let space=0;space<numberOfSpace;space++){
//             str+=" ";

//         }
//         for(let stars=0;stars<numberOfStars;stars++){
//             str+="*";

//         }
//         for(let space=0;space<numberOfSpace;space++){
//             str+=" ";

//         }
//         console.log(str);
//     }
// }

// pattern7(5);


// 8)


// function pattern8(n){

//     let str="";

//     for(let i=0;i<n;i++){
//         let numberOfSpace=i;
//         let numberOfStars=2*n-1-2*numberOfSpace;
//         str="";
//         for(let space=0;space<numberOfSpace;space++){
//             str+=" ";

//         }
//         for(let stars=0;stars<numberOfStars;stars++){
//             str+="*";

//         }
//         for(let space=0;space<numberOfSpace;space++){
//             str+=" ";

//         }
//         console.log(str);
//     }
// }

// pattern8(5);


//10)

// function pattern10(n){
//     let str="";
//     for(let i=0;i<2*n-1;i++){
//         let numberOfStars=i>=n ? 2*n-1-i : i+1;
//         str="";
//         for(let stars=0;stars<numberOfStars;stars++){
//             str+="*";
//         }
//         console.log(str);
//     }
// }

// pattern10(5);


// 11)

// function pattern11(n){
//     let str="",val=1;
//     for(let i=0;i<n;i++){
//         str="";
//         val=i%2===0 ? 1 :0;
//         for(let j=0;j<=i;j++){
//             str+=val;
//             val=1-val;
//         }
//         console.log(str);
//     }
// }

// pattern11(5);


// 12)

// function pattern12(n){
//     let str="";
//     for(let i=0;i<n;i++){
//         str="";
//         let numberOfStars=i+1;
//         let numberOfSpace=2*n-2*numberOfStars;
//         for(let stars=0;stars<numberOfStars;stars++){
//             str+=stars+1;
//         }
//         for(let space=0;space<numberOfSpace;space++){
//             str+=" ";
//         }
//         for(let stars=numberOfStars-1;stars>=0;stars--){
//             str+=stars+1;
//         }
//         console.log(str);
//     }

// }

// pattern12(5);

//13)
// function pattern13(n){
//     let str="",num=1;;
//     for(let i=1;i<=n;i++){
//         str="";
//         for(let j=1;j<=i;j++){
//             str+=num;
//             num++;
//             str+=" "
//         }
//         console.log(str);
//     }

// }

// pattern13(5);

//14)

// function pattern14(n){
//     let str="",num=65;
//     for(let i=1;i<=n;i++){
//         str="";
//         num=65;
//         for(let j=1;j<=i;j++){

//             str+=String.fromCharCode(num);
//             num++;
//             str+=" "
//         }
//         console.log(str);
//     }

// }

// pattern14(5);


//15)


// function pattern15(n){
//     let str="",num=65;
//     for(let i=0;i<n;i++){
//         str="";
//         num=65;
//         for(let j=0;j<n-i;j++){

//             str+=String.fromCharCode(num);
//             num++;
//             str+=" "
//         }
//         console.log(str);
//     }

// }

// pattern15(5);


//16)


// function pattern16(n){
//     let str="",num=64;
//     for(let i=1;i<=n;i++){
//         str="";
//         num++;
//         for(let j=1;j<=i;j++){

//             str+=String.fromCharCode(num);
//         }
//         console.log(str);
//     }

// }

// pattern16(5);

//17)


// function pattern17(n){

//     let str="";
//     let num=65;
//     for(let i=0;i<n;i++){
//         let numberOfSpace=n-i-1;
//         let numberOfStars=2*n-1-2*numberOfSpace;
//         num=65;
//         str="";
//         for(let space=0;space<numberOfSpace;space++){
//             str+=" ";

//         }
//         for(let stars=0;stars<numberOfStars;stars++){
//             str+=String.fromCharCode(num);
//             num= stars+1> (numberOfStars-1)/2 ? num-1 : num+1;

//         }
//         for(let space=0;space<numberOfSpace;space++){
//             str+=" ";

//         }
//         console.log(str);
//     }
// }

// pattern17(5);



// 18)

// function pattern18(n){
//     let str="",num=70;
//     for(let i=1;i<=n;i++){
//         str="";
//         num=70-i;
//         for(let j=1;j<=i;j++){
//             str+=String.fromCharCode(num);
//             num++;
//         }
//         console.log(str);
//     }

// }

// pattern18(5);


//19)


// function pattern19(n){
//     let str="";
//     for(let i=0;i<n;i++){
//         str="";
//         let numberOfStars=n-i;
//         let numberOfSpace=2*n-2*numberOfStars;
//         for(let stars=0;stars<numberOfStars;stars++){
//             str+="*";
//         }
//         for(let space=0;space<numberOfSpace;space++){
//             str+=" ";
//         }
//         for(let stars=0;stars<numberOfStars;stars++){
//             str+="*";
//         }
//         console.log(str);
//     }
//     for(let i=n;i>0;i--){
//         str="";
//         let numberOfStars=n-i+1;
//         let numberOfSpace=2*n-2*numberOfStars;
//         for(let stars=0;stars<numberOfStars;stars++){
//             str+="*";
//         }
//         for(let space=0;space<numberOfSpace;space++){
//             str+=" ";
//         }
//         for(let stars=0;stars<numberOfStars;stars++){
//             str+="*";
//         }
//         console.log(str);
//     }
// }

// pattern19(5);



//20)



// function pattern20(n){
//     let str="";
//     for(let i=0;i<2*n-1;i++){
//         str="";
//         let numberOfStars=i>=n ? 2*n-i-1:i+1;
//         let numberOfSpace=2*n-2*numberOfStars;
//         for(let stars=0;stars<numberOfStars;stars++){
//             str+="*";
//         }
//         for(let space=0;space<numberOfSpace;space++){
//             str+=" ";
//         }
//         for(let stars=0;stars<numberOfStars;stars++){
//             str+="*";
//         }
//         console.log(str);
//     }

// }

// pattern20(5);


// function pattern21(n){
//     let str="";
//     for(let i=0;i<n;i++){
//         str="";
//         for(let j=0;j<n;j++){
//             if(i===0 || i===n-1 || j==0 || j===n-1){
//                 str+="*";
//             }
//             else{
//                 str+=" ";
//             }

//         }
//         console.log(str);
//     }
// }

// pattern21(4);