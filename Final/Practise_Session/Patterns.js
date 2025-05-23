// 1)
function pattern1(n){
    let str="";
    for(let i=0;i<n;i++){
        str="";
        for(let j=0;j<n;j++){
            str+="*";

        }
        console.log(str);
    }
}

//2)
function pattern2(n){
    let str="";
    for(let i=0;i<n;i++){
        str="";
        for(let j=0;j<=i;j++){
            str+="*";
        }
        console.log(str);
    }
}
//3)
function pattern3(n){
    let str="";
    for(let i=0;i<n;i++){
        str="";
        for(let j=0;j<=i;j++){
            str+=j+1;
        }
        console.log(str);
    }
}

//4)
function pattern4(n){
    let str="";
    for(let i=0;i<n;i++){
        str="";
        for(let j=0;j<=i;j++){
            str+=i+1;
        }
        console.log(str);
    }
}

//5)
function pattern5(n){
    let str="";
    for(let i=0;i<n;i++){
        str="";
        for(let j=n-i;j>0;j--){
            str+="*";
        }
        console.log(str);
    }
}

//6)
function pattern6(n){
    let str="";
    for(let i=0;i<n;i++){
        str="";
        for(let j=0;j<n-i;j++){
            str+=j+1;
        }
        console.log(str);
    }
}


//7)
function pattern7(n){
    let str="",numOfStars,numOfSpace;
    for(let i=0;i<n;i++){
        numOfSpace=n-i-1;
        numOfStars=2*n -1 - (2*numOfSpace);
        str="";
        for(let space=0;space<numOfSpace;space++){
            str+=" ";
        }
        for(let stars=0;stars<numOfStars;stars++){
            str+="*";
        }
        for(let space=0;space<numOfSpace;space++){
            str+=" ";
        }
        console.log(str);
    }
}

//8)
function pattern8(n){
    let str="",numOfStars,numOfSpace;
    for(let i=0;i<n;i++){
        numOfSpace=i;
        numOfStars=2*n -1 - (2*numOfSpace);
        str="";
        for(let space=0;space<numOfSpace;space++){
            str+=" ";
        }
        for(let stars=0;stars<numOfStars;stars++){
            str+="*";
        }
        for(let space=0;space<numOfSpace;space++){
            str+=" ";
        }
        console.log(str);
    }
}

//9)
function pattern9(n){
    let str="",numOfStars,numOfSpace;
    for(let i=0;i<n;i++){
        numOfSpace=n-i-1;
        numOfStars=2*n -1 - (2*numOfSpace);
        str="";
        for(let space=0;space<numOfSpace;space++){
            str+=" ";
        }
        for(let stars=0;stars<numOfStars;stars++){
            str+="*";
        }
        for(let space=0;space<numOfSpace;space++){
            str+=" ";
        }
        console.log(str);
    }
    for(let i=0;i<n;i++){
        numOfSpace=i;
        numOfStars=2*n -1 - (2*numOfSpace);
        str="";
        for(let space=0;space<numOfSpace;space++){
            str+=" ";
        }
        for(let stars=0;stars<numOfStars;stars++){
            str+="*";
        }
        for(let space=0;space<numOfSpace;space++){
            str+=" ";
        }
        console.log(str);
    }
}

//10)
 function pattern10(n){
    let str="",numOfStars;
    for(let i=0;i<2*n-1;i++){
        numOfStars=i>n-1 ? 2*n-1-i :i+1;
        str="";
        for(let j=0;j<numOfStars;j++){
            str+="*";
        }
        console.log(str);
    }
 }

 //11)
 function pattern11(n){
    let str="",num=1;
    for(let i=0;i<n;i++){
        str="";
        num=i%2===0 ?1:0;
        for(let j=0;j<=i;j++){
            str+=num;
            num=1-num;
        }
        console.log(str);
    }
 }

  //12)
  function pattern12(n){
    let str="",numOfStars;
    for(let i=0;i<n;i++){
        numOfStars=i+1;
        numOfSpace=2*n - 2*numOfStars;
        str="";
        for(let stars=0;stars<numOfStars;stars++){
            str+=stars+1;
        }
        for(let space=0;space<numOfSpace;space++){
            str+=" ";

        }
        for(let stars=numOfStars-1;stars>=0;stars--){
            str+=stars+1;
        }
        console.log(str);
    }
 }

 //14)

function pattern14(n){
    let str="",num=1;
    for(let i=0;i<n;i++){
        str="";
        for(let j=0;j<=i;j++){
            str+=num;
            num+=1;
            str+=" ";
        }
        console.log(str);
    }
}

//15)
function pattern15(n){
    let str="",num=65;
    for(let i=0;i<n;i++){
        str="",num=65;
        for(let j=0;j<=i;j++){
            str+= String.fromCharCode(num);
            num++;
        }
        console.log(str);
    }
}

//16)
function pattern16(n){
    let str="",num=65;
    for(let i=0;i<n;i++){
        str="",num=65;
        for(let j=0;j<=n-i-1;j++){
            str+= String.fromCharCode(num);
            num++;
        }
        console.log(str);
    }
}

//17)
function pattern17(n){
    let str="",num=65;
    for(let i=0;i<n;i++){
        str="";
        for(let j=0;j<=i;j++){
            str+= String.fromCharCode(num);

        }
        num++;
        console.log(str);
    }
}


//17)
function pattern17(n){
    let str="",numOfStars,numOfSpace,num=64;
    for(let i=0;i<n;i++){
        numOfSpace=n-i-1;
        numOfStars=2*n -1 - (2*numOfSpace);
        str="",num=64;
        for(let space=0;space<numOfSpace;space++){
            str+=" ";
        }
        for(let stars=0;stars<numOfStars;stars++){
            num=stars>(numOfStars/2) ? num-1 : num+1;
            str+=String.fromCharCode(num);

        }
        for(let space=0;space<numOfSpace;space++){
            str+=" ";
        }
        console.log(str);
    }
}


//18)
function pattern18(n){
    let str="",num=69;
    for(let i=0;i<n;i++){
        str="",num=69-i;
        for(let j=0;j<=i;j++){
            str+=String.fromCharCode(num);
            num++;
        }
        console.log(str);
    }
}


//19)
function pattern19(n){
    let str="",numOfStars,numOfSpace;
    for(let i=0;i<n;i++){
        numOfStars=n-i;
        numOfSpace=2*n-2*numOfStars;
        str="";
        for(let stars=0;stars<numOfStars;stars++){
            str+="*";

        }
        for(let space=0;space<numOfSpace;space++){
            str+=" ";

        }

        for(let stars=0;stars<numOfStars;stars++){
            str+="*";

        }
        console.log(str);
    }
    for(let i=0;i<n;i++){
        numOfStars=i+1;
        numOfSpace=2*n-2*numOfStars;
        str="";
        for(let stars=0;stars<numOfStars;stars++){
            str+="*";

        }
        for(let space=0;space<numOfSpace;space++){
            str+=" ";

        }

        for(let stars=0;stars<numOfStars;stars++){
            str+="*";

        }
        console.log(str);
    }
}


//20)
function pattern20(n){
    let str="",numOfStars,numOfSpace;
    for(let i=0;i<2*n;i++){
        numOfStars=i>n-1? 2*n-i-1:i+1;
        numOfSpace=2*n-2*numOfStars;
        str="";
        for(let stars=0;stars<numOfStars;stars++){
            str+="*";

        }
        for(let space=0;space<numOfSpace;space++){
            str+=" ";

        }

        for(let stars=0;stars<numOfStars;stars++){
            str+="*";

        }
        console.log(str);
    }

}

//21
function pattern21(n){
    let str="";
    for(let i=0;i<n;i++){
        str="";
        for(let j=0;j<n;j++){
            if(i===0 || i===n-1 || j===0 || j===n-1){
                str+="*";
            }
            else{
                str+=" ";
            }

        }
        console.log(str);
    }
}

pattern21(5);