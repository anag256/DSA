//1)

// function pattern1(n){
//     let str="";
//     for(let i=0;i<n;i++){
//         str="";
//         for(let j=0;j<n;j++){
//             str+="*";
//         }
//         console.log(str)
//     }

// }

// pattern1(5)
//2)

// function pattern2(n){
//     let str="";

//     for(let i=0;i<n;i++){
//         str="";
//         for(let j=0;j<=i;j++){
//             str+="*";
//         }
//         console.log(str)
//     }
// }

// pattern2(5)

//3)


// function pattern3(n){
//     let str="";

//     for(let i=0;i<n;i++){
//         str="";
//         for(let j=0;j<=i;j++){
//             str+=j+1;
//         }
//         console.log(str)
//     }
// }

// pattern3(5)


// function pattern4(n){
//     let str="";

//     for(let i=0;i<n;i++){
//         str="";
//         for(let j=0;j<=i;j++){
//             str+=i+1;
//         }
//         console.log(str)
//     }
// }

// pattern4(5)

// 5)
// function pattern5(n){
//     let str="";

//     for(let i=0;i<n;i++){
//         str="";
//         for(let j=0;j<n-i;j++){
//             str+="*";
//         }
//         console.log(str)
//     }
// }

// pattern5(5)


//6)

// function pattern6(n){
//     let str="";
//     for(let i=0;i<n;i++){
//         str="";
//         for(j=0;j<n-i;j++){
//             str+=j+1;
//         }

//         console.log(str);
//     }
// }

// pattern6(5);

//7)

// function pattern7(n){
//     let str="";

//   for(let i=0;i<n;i++){
//     let numOfSpace=n-1-i;
//     let numOfStars=2*n -1 - 2*numOfSpace;
//     str="";
//     for(let space=0;space<numOfSpace;space++){
//         str+=" ";
//     }

//     for(let stars=0;stars<numOfStars;stars++){
//         str+="*";
//     }

//     for(let space=0;space<numOfSpace;space++){
//         str+=" ";
//     }

//     console.log(str);

//   }
// }

// pattern7(5)


//8)

// function pattern8(n){
//     let str="";

//   for(let i=0;i<n;i++){
//     let numOfSpace=i;
//     let numOfStars=2*n -1 - 2*numOfSpace;
//     str="";
//     for(let space=0;space<numOfSpace;space++){
//         str+=" ";
//     }

//     for(let stars=0;stars<numOfStars;stars++){
//         str+="*";
//     }

//     for(let space=0;space<numOfSpace;space++){
//         str+=" ";
//     }

//     console.log(str);

//   }
// }

// pattern8(5)


//9)

// function pattern9(n){
//         let str="";

//   for(let i=0;i<n;i++){
//     let numOfSpace=n-1-i;
//     let numOfStars=2*n -1 - 2*numOfSpace;
//     str="";
//     for(let space=0;space<numOfSpace;space++){
//         str+=" ";
//     }

//     for(let stars=0;stars<numOfStars;stars++){
//         str+="*";
//     }

//     for(let space=0;space<numOfSpace;space++){
//         str+=" ";
//     }

//     console.log(str);

//   }

//     for(let i=0;i<n;i++){
//     let numOfSpace=i;
//     let numOfStars=2*n -1 - 2*numOfSpace;
//     str="";
//     for(let space=0;space<numOfSpace;space++){
//         str+=" ";
//     }

//     for(let stars=0;stars<numOfStars;stars++){
//         str+="*";
//     }

//     for(let space=0;space<numOfSpace;space++){
//         str+=" ";
//     }

//     console.log(str);

//   }
// }



// pattern9(5);


//10)

// function pattern10(n){
//     let str="",num=0;

//     for(let i=0;i<2*n;i++){
//         let numOfStars=i>=n ? num-- :num++;
//         str="";
//         for(let j=0;j<numOfStars;j++){
//             str+="*";
//         }
//         console.log(str)
//     }
// }
// pattern10(5);


// 11)

// function pattern11(n){
//     let str="",num=0;
//     for(let i=0;i<n;i++){
//         str="";
//         num=i%2===0 ? 1 :0;
//         for(let j=0;j<=i;j++){

//             str+=num;
//             num=1-num;
//         }
//         console.log(str);
//     }
// }

// pattern11(5);


//12)

// function pattern12(n){
//     let str="";

//     for(let i=0;i<n;i++){
//         let str="";
//         let numOfStars=i+1;
//        let numOfSpace=2*n-2*numOfStars;

//             str="";
//             for(let stars=0;stars<numOfStars;stars++){
//                 str+=stars+1;
//             }
//             for(let space=0;space<numOfSpace;space++){
//                 str+=" ";
//             }
//             for(let stars=0;stars<numOfStars;stars++){
//                 str+=stars+1;
//             }
//             console.log(str);

//     }
// }

// pattern12(4);


// 13)

// function pattern13(n){
//     let str="",num=1;

//     for(let i=0;i<n;i++){
//         str="";
//         for(let j=0;j<=i;j++){
//             str+=num;
//             num++;
//             str+=" "
//         }
//         console.log(str)
//     }
// }

// pattern13(5);


// 14)


// function pattern14(n){
//     let str="",num=65;

//     for(let i=0;i<n;i++){
//         str="";
//         num=65;
//         for(let j=0;j<=i;j++){

//             str+=String.fromCharCode(num);
//             num++;
//             str+=" "
//         }
//         console.log(str)
//     }
// }

// pattern14(5);


//15)

// function pattern15(n){
//     let str="",num=65;
//     for(let i=0;i<n;i++){
//         str="";
//         num=65;
//         for(j=0;j<n-i;j++){
//             str+=String.fromCharCode(num);
//             num++;
//         }

//         console.log(str);
//     }
// }

// pattern15(5);


//16)



// function pattern16(n){
//     let str="",num=64;

//     for(let i=0;i<n;i++){
//         str="";
//         num=num+1;
//         for(let j=0;j<=i;j++){

//             str+=String.fromCharCode(num);

//         }
//         console.log(str)
//     }
// }

// pattern16(5);


//17)


// function pattern17(n){
//     let str="",num=64;

//   for(let i=0;i<n;i++){
//     num=64;
//     let numOfSpace=n-1-i;
//     let numOfStars=2*n -1 - 2*numOfSpace;
//     str="";
//     for(let space=0;space<numOfSpace;space++){
//         str+=" ";
//     }

//     for(let stars=0;stars<numOfStars;stars++){
//         num=stars>(numOfStars/2)? num-1 :num+1
//         str+=String.fromCharCode(num);

//     }

//     for(let space=0;space<numOfSpace;space++){
//         str+=" ";
//     }

//     console.log(str);

//   }
// }

// pattern17(5)


//18)

// function pattenr18(n){
//     let str="", num=69;

//         for(let i=0;i<n;i++){
//             str="",num=69-i;
//             for(let j=0;j<=i;j++){
//                 str+=String.fromCharCode(num);
//                 num=num+1;
//             }
//             console.log(str)
//         }

// }

// pattenr18(5);


//19)

// function pattern19(n){
//     let str="";
//     for(let i=0;i<n;i++){
//         let numOfStars=n-i;
//         let numOfSpace=2*n-2*numOfStars;
//         str="";
//         for(let stars=0;stars<numOfStars;stars++){
//             str+="*";
//         }
//         for(let space=0;space<numOfSpace;space++){
//             str+=" ";
//         }
//         for(let stars=0;stars<numOfStars;stars++){
//             str+="*";
//         }

//         console.log(str);
//     }
//     for(let i=0;i<n;i++){
//         let numOfStars=i+1;
//         let numOfSpace=2*n-2*numOfStars;
//         str="";
//         for(let stars=0;stars<numOfStars;stars++){
//             str+="*";
//         }
//         for(let space=0;space<numOfSpace;space++){
//             str+=" ";
//         }
//         for(let stars=0;stars<numOfStars;stars++){
//             str+="*";
//         }

//         console.log(str);
//     }
// }

// pattern19(5);

//20)
// function pattern20(n){
//     let str="";
//     for(let i=0;i<2*n;i++){
//         let numOfStars=i>=n ?  2*n-1-i :i+1;
//         let numOfSpace=2*n-2*numOfStars;
//         str="";
//         for(let stars=0;stars<numOfStars;stars++){
//             str+="*";
//         }
//         for(let space=0;space<numOfSpace;space++){
//             str+=" ";
//         }
//         for(let stars=0;stars<numOfStars;stars++){
//             str+="*";
//         }
//         console.log(str);
//     }
// }

// pattern20(5);


//21)


// function pattern21(n){
//     let str="";

//     for(let i=0;i<n;i++){
//         str="";
//         for(let j=0;j<n;j++){
//             if(i===0 || i===n-1 || j===0 || j===n-1)
//             {
//                 str+="*";
//             }
//             else{
//                 str+=" ";
//             }

//         }
//         console.log(str)
//     }
// }

// pattern21(5);