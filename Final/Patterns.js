// https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/

// 1)
// function pattern1(n){
//     let str="";

//     for(let i=0;i<n;i++){
//         str="";
//        for(let j=0;j<n;j++){
//             str+="*";
//        }
//        console.log(str);
//     }
//     return str;
// }

// pattern1(5);

// 2)
// function pattern2(n){
//     let str="";

//     for(let i=0;i<n;i++){
//         str="";
//        for(let j=0;j<=i;j++){
//             str+="*";
//        }
//        console.log(str);
//     }
//     return str;
// }

// pattern2(5);



//3)

// function pattern3(n){
//         let str="";

//         for(let i=1;i<=n;i++){
//             str="";
//            for(let j=1;j<=i;j++){
//                 str+=j;
//            }
//            console.log(str);
//         }
//         return str;
//     }

//     pattern3(5);
//4)
// function pattern4(n){
//     let str="";

//     for(let i=1;i<=n;i++){
//         str="";
//        for(let j=1;j<=i;j++){
//             str+=i;
//        }
//        console.log(str);
//     }
//     return str;
// }

// pattern4(5);



// 5)

// function pattern5(n){
//             let str="";

//             for(let i=1;i<=n;i++){
//                 str="";
//                for(let j=1;j<=n-i+1;j++){
//                     str+="*";
//                }
//                console.log(str);
//             }
//             return str;
//         }

//         pattern5(5);


//6)

// function pattern6(n){
//     let str="";

//     for(let i=1;i<=n;i++){
//         str="";
//        for(let j=1;j<=n-i+1;j++){
//             str+=j;
//        }
//        console.log(str);
//     }
//     return str;
// }

// pattern6(5);


//7)

// function pattern7(n){
//     let str="";

//     for(let i=1;i<=n;i++){
//         let totalSpace=n-i;
//         let totalStars=(2*n-1)-(2*totalSpace);
//         str="";
//       for(let space=1;space<=totalSpace;space++){
//         str+=" ";
//       }
//       for(let stars=1;stars<=totalStars;stars++){
//         str+="*";
//       }
//       for(let space=1;space<=totalSpace;space++){
//         str+=" ";
//       }
//        console.log(str);
//     }
//     return str;
// }

// pattern7(5);

//8)

// function pattern8(n){
//     let str="";

//     for(let i=1;i<=n;i++){
//         let totalSpace=i-1;
//         let totalStars=(2*n-1)-(2*totalSpace);
//         str="";
//       for(let space=1;space<=totalSpace;space++){
//         str+=" ";
//       }
//       for(let stars=1;stars<=totalStars;stars++){
//         str+="*";
//       }
//       for(let space=1;space<=totalSpace;space++){
//         str+=" ";
//       }
//        console.log(str);
//     }
//     return str;
// }

// pattern8(5);


//9)

// function pattern9(n){
//     pattern7(n);
//     pattern8(n);
// }

// pattern9(5)

//10)



// function pattern10(n){
//     let str="";

//     for(let i=1;i<=2*n-1;i++){
//         let totalStars=i>n ? 2*n-i : i;
//         str="";
//       for(let stars=1;stars<=totalStars;stars++){
//         str+="*";
//       }

//        console.log(str);
//     }
//     return str;
// }
// pattern10(5);


//11)

// function pattern11(n){
//         let str="";
//         let num=1;
//         for(let i=1;i<=n;i++){
//             str="";
//             num=i%2===0 ? 0 :1;
//            for(let j=1;j<=i;j++){
//                 str+=num;
//                 num=1-num;
//            }
//            console.log(str);
//         }
//         return str;
//     }


//     pattern11(5)


//12)

// function pattern12(n){
//     let str="";

//     for(let i=1;i<=n;i++){
//         let totalStars=i;
//         let totalSpace=2*n-2*totalStars;
//         str="";
//       for(let stars=1;stars<=totalStars;stars++){
//         str+=stars;
//       }
//       for(let space=1;space<=totalSpace;space++){
//         str+=" ";
//       }
//       for(let stars=totalStars;stars>=1;stars--){
//         str+=stars;
//       }

//        console.log(str);
//     }
//     return str;
// }

// pattern12(4);


//13)


// function pattern13(n){
//         let str="";
//         let num=1
//         for(let i=1;i<=n;i++){
//             str="";
//            for(let j=1;j<=i;j++){
//                 str+=num;
//                 num++;
//                 str+=" ";
//            }
//            console.log(str);
//         }
//         return str;
//     }

//     pattern13(5);


//14)

// function pattern14(n){
//     let str="";
//     let num=65;
//     for(let i=1;i<=n;i++){
//         str="";
//         num=65;
//        for(let j=1;j<=i;j++){
//             str+=String.fromCharCode(num);
//             num++;
//        }
//        console.log(str);
//     }
//     return str;
// }

// pattern14(5);

//15)

// function pattern15(n){
//             let str="";
//             let num=65;
//             for(let i=1;i<=n;i++){
//                 str="";
//                 num=65;
//                for(let j=1;j<=n-i+1;j++){
//                 str+=String.fromCharCode(num);
//                             num++;
//                }
//                console.log(str);
//             }
//             return str;
//         }

//         pattern15(5);

//16)


// function pattern14(n){
//     let str="";
//     let num=65;
//     for(let i=1;i<=n;i++){
//         str="";

//        for(let j=1;j<=i;j++){
//             str+=String.fromCharCode(num);

//        }
//        num++;
//        console.log(str);
//     }
//     return str;
// }
// pattern14(5);

//17)



// function pattern17(n){
//     let str="";
//     let num=65;

//     for(let i=1;i<=n;i++){
//         let totalSpace=n-i;
//         let totalStars=(2*n-1)-(2*totalSpace);
//         str="";
//         num=65;
//       for(let space=1;space<=totalSpace;space++){
//         str+=" ";
//       }
//       for(let stars=1;stars<=totalStars;stars++){
//         str+=String.fromCharCode(num);
//         num=stars>parseInt(totalStars/2 )?num-1 :num+1;
//       }
//       for(let space=1;space<=totalSpace;space++){
//         str+=" ";
//       }
//        console.log(str);
//     }
//     return str;
// }

// pattern17(5);

// 17)

// function pattern17(n){
//     let str="";
//     let num=70;
//     let totalSpace=0;
//     for(let i=1;i<=n;i++){
//         str="";
//         num=70-i;
//         let totalStars=n-i+1;
//         totalSpace=2*n-2*totalStars;
//        for(let stars=1;stars<=totalStars;stars++){
//         str+="*";
//        }
//        for(let space=1;space<=totalSpace;space++){
//         str+= " ";
//        }
//        for(let stars=1;stars<=totalStars;stars++){
//         str+="*";
//        }

//        console.log(str);
//     }
//     for(let i=1;i<=n;i++){
//         str="";
//         num=70-i;
//         let totalStars=i;
//          totalSpace=2*n-2*totalStars;
//        for(let stars=1;stars<=totalStars;stars++){
//         str+="*";
//        }
//        for(let space=1;space<=totalSpace;space++){
//         str+= " ";
//        }
//        for(let stars=1;stars<=totalStars;stars++){
//         str+="*";
//        }

//        console.log(str);
//     }
//     return str;
// }
// pattern17(5);

//18)



// function pattern18(n){
//     let str="";

//     for(let i=1;i<=2*n-1;i++){
//         let totalStars=i>n? 2*n-i: i;
//         let totalSpace=2*n-2*totalStars;
//         str="";

//       for(let stars=1;stars<=totalStars;stars++){
//        str+="*"
//       }
//       for(let space=1;space<=totalSpace;space++){
//         str+=" ";
//       }
//       for(let stars=1;stars<=totalStars;stars++){
//         str+="*"
//        }

//        console.log(str);
//     }
//     return str;
// }
// pattern18(5);


//21)

function pattern21(n){
    let str="";

        for(let i=0;i<n;i++){
            str="";
           for(let j=0;j<n;j++){
            if(i===0 || i===n-1 || j===0 || j===n-1)
                {str+="*"}
            else{
                str+=" ";
               }
           }

           console.log(str);
        }
        return str;
}

pattern21(5)