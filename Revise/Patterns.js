// 1)
//  function pattern1(n){
//     let str="";
//     for(let i=1;i<=n;i++){
//         str='';
//         for(let j=1;j<=n;j++){
//             str=str+"*";
//         }
//         console.log(str);
//     }
// }
// pattern1(5);


//2)

// function pattern2(n){
//     let str="";
//     for(let i=1;i<=n;i++){
//         str='';
//         for(let j=1;j<=i;j++){
//             str=str+"*";
//         }
//         console.log(str);
//     }
// }
// pattern2(5);

//3)

// function pattern3(n){
//     let str="";
//     for(let i=1;i<=n;i++){
//         str='';
//         for(let j=1;j<=i;j++){
//             str=str+j;
//         }
//         console.log(str);
//     }
// }
// pattern3(5);

//4)

// function pattern4(n){
//     let str="";
//     for(let i=1;i<=n;i++){
//         str='';
//         for(let j=1;j<=i;j++){
//             str=str+i;
//         }
//         console.log(str);
//     }
// }
// pattern4(5);

//5)


// function pattern5(n){
//     let str="";
//     for(let i=1;i<=n;i++){
//         str='';
//         for(let j=1;j<=n-i+1;j++){
//             str=str+"*";
//         }
//         console.log(str);
//     }
// }
// pattern5(5);

// 6)

// function pattern6(n){
//     let str="";
//     for(let i=1;i<=n;i++){
//         str='';
//         for(let j=1;j<=n-i+1;j++){
//             str=str+j;
//         }
//         console.log(str);
//     }
// }
// pattern6(5);



// 7)

// function pattern7(n){
//        let str="";
//     for(let i=1;i<=n;i++){
//         str='';
//         for(let j=1;j<=n-i;j++){
//             str+=" ";
//         }
//         for(let k=1;k<=2*i-1;k++){
//             str+="*";
//         }
//         for(let j=1;j<=n-i;j++){
//             str+=" ";
//         }
//         console.log(str);
//     }
// }

// pattern7(5);


//8)

// function pattern8(n){
//     let str="";
//  for(let i=1;i<=n;i++){
//      str='';
//      for(let j=1;j<=i-1;j++){
//          str+=" ";
//      }
//      for(let k=1;k<=2*(n-i)+1;k++){
//          str+="*";
//      }
//      for(let j=1;j<=i-1;j++){
//          str+=" ";
//      }
//      console.log(str);
//  }
// }

// pattern8(5);


// 9)

// function pattern9(n){
//        let str="";
//     for(let i=1;i<=n;i++){
//         str='';
//         for(let j=1;j<=n-i;j++){
//             str+=" ";
//         }
//         for(let k=1;k<=2*i-1;k++){
//             str+="*";
//         }
//         for(let j=1;j<=n-i;j++){
//             str+=" ";
//         }
//         console.log(str);
//     }
//     for(let i=1;i<=n;i++){
//         str='';
//         for(let j=1;j<=i-1;j++){
//             str+=" ";
//         }
//         for(let k=1;k<=2*(n-i)+1;k++){
//             str+="*";
//         }
//         for(let j=1;j<=i-1;j++){
//             str+=" ";
//         }
//         console.log(str);
//     }
// }
// pattern9(5);


// 10)

// function pattern10(n){
//     let str="";
//     let space;
//  for(let i=1;i<=2*n-1;i++){
//      str='';
//      space=i>5 ? 2*n-i:i ;
//     for(let j=1;j<=space;j++){
//         str+="*";
//     }
//      console.log(str);
//  }
// }

// pattern10(5);

// 11)


// function pattern11(n){
//     let str="";
//     let num=0;
//  for(let i=1;i<=n;i++){
//      str='';
//      num=i%2===0?0:1;
//     for(let j=1;j<=i;j++){

//         str+=num;
//         num=1-num;

//     }
//      console.log(str);
//  }
// }

// pattern11(5);


//12)

// function pattern12(n){
//     let str="";
//  for(let i=1;i<=n;i++){
//      str='';
//     for(let j=1;j<=i;j++){
//         str+=j;
//     }
//     for(let space=0;space<=2*(n-i);space++){
//         str+=" ";
//     }
//     for(let j=i;j>0;j--){
//         str+=j;
//     }

//      console.log(str);
//  }
// }

// pattern12(5);

//13)

// function pattern13(n){
//     let str="";
//     let num=1;
//  for(let i=1;i<=n;i++){
//      str='';
//     for(let j=1;j<=i;j++){
//         str+=num;
//         str+=" ";
//         num++;
//     }
//      console.log(str);
//  }
// }

// pattern13(5);


//14)

// function pattern14(n){
//     let str="";
//     let char=65;
//  for(let i=1;i<=n;i++){
//      str='';
//      char=65;
//     for(let j=1;j<=i;j++){
//         str+=String.fromCharCode(char);
//         char++;
//     }
//      console.log(str);
//  }
// }

// pattern14(5);


//15)


// function pattern15(n){
//     let str="";
//     let char=65;
//  for(let i=1;i<=n;i++){
//      str='';
//      char=65;
//     for(let j=1;j<=n-i+1;j++){
//         str+=String.fromCharCode(char);
//         char++;
//     }
//      console.log(str);
//  }
// }

// pattern15(5);


// 16)


// function pattern16(n){
//     let str="";
//     let char=65;
//  for(let i=1;i<=n;i++){
//      str='';

//     for(let j=1;j<=i;j++){
//         str+=String.fromCharCode(char);

//     }
//     char++;
//      console.log(str);
//  }
// }

// pattern16(5);


// 17)


// function pattern17(n){
//        let str="";
//        let char=65;
//     for(let i=1;i<=n;i++){
//         str='';
//         char=65;
//         for(let j=1;j<=n-i;j++){
//             str+=" ";
//         }

//         for(let k=1;k<=2*i-1;k++){
//             str+=String.fromCharCode(char);
//             char= k<i ? ++char: --char;

//         }
//         for(let j=1;j<=n-i;j++){
//             str+=" ";
//         }
//         console.log(str);
//     }
// }

// pattern17(5);


// 18)

// function pattern18(n){
//     let str="";
//     let char=69;
//  for(let i=1;i<=n;i++){
//      str='';
//      char=69-i+1;
//      for(let j=1;j<=n-i;j++){
//          str+=" ";
//      }

//      for(let k=1;k<=i;k++){

//          str+=String.fromCharCode(char);
//         char++;

//      }

//      console.log(str);
//  }
// }

// pattern18(5);


// 19)

// function pattern18(n){
//     let str="";
//  for(let i=1;i<=n;i++){
//      str='';
//     for(let j=1;j<=n-i+1;j++){
//         str+="*"
//     }
//     for(let k=1;k<=2*(i-1);k++){
//         str+=" "
//     }
//     for(let j=1;j<=n-i+1;j++){
//         str+="*"
//     }


//      console.log(str);
//  }
//  for(let i=n;i>0;i--){
//     str='';
//    for(let j=1;j<=n-i+1;j++){
//        str+="*"
//    }
//    for(let k=1;k<=2*(i-1);k++){
//        str+=" "
//    }
//    for(let j=1;j<=n-i+1;j++){
//        str+="*"
//    }


//     console.log(str);
// }
// }

// pattern18(5);


// 20)
// function pattern20(n){
//     let str="";
//     let stars,space;
//  for(let i=1;i<=2*n-1;i++){
//      str='';
//     stars=i>n ? 2*n-i: i;
//     space=2*n-2*stars;
//      for(let j=1;j<=stars;j++){
//          str+="*";
//      }

//      for(let k=1;k<=space;k++){

//        str+=" "

//      }
//      for(let j=1;j<=stars;j++){
//         str+="*";
//     }


//      console.log(str);
//  }
// }

// pattern20(5);

//21)
function pattern21(n){
    let str="";
    for(let i=1;i<=n;i++){
        str="";
        for(let j=1;j<=n;j++){
            if(i==1 || i== n || j==1 || j==n){
                str+="*";
            }
            else{
                str+=" ";
            }
        }
        console.log(str);
    }

}
pattern21(4);