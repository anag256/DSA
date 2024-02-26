// https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/

// 1)

function Pattern1(n){
    let str="";
    for(let i=0;i<n;i++){
        str="";
        for(let j=0;j<n;j++){
            str+="*";
        }
        console.log(str);
    }

}

Pattern1(5);


// 2)

function Pattern2(n){
    let str="";
    for(let i=0;i<n;i++){
        str="";
        for(let j=0;j<=i;j++){
            str+="*";
        }
        console.log(str);
    }

}

Pattern2(5);


// 3)

function Pattern3(n){
    let str="";
    for(let i=1;i<=n;i++){
        str="";
        for(let j=1;j<=i;j++){
            str+=j;
        }
        console.log(str);
    }

}

Pattern3(5);

// 4)

function Pattern4(n){
    let str="";
    for(let i=1;i<=n;i++){
        str="";
        for(let j=1;j<=i;j++){
            str+=i;
        }
        console.log(str);
    }

}

Pattern4(5);

// 5)

function Pattern5(n){
    let str="";
    for(let i=0;i<n;i++){
        str="";
        for(let j=0;j<n-i;j++){
            str+="*";
        }
        console.log(str);
    }

}

Pattern5(5);

// 6)

function Pattern6(n){
    let str="";
    for(let i=1;i<=n;i++){
        str="";
        for(let j=1;j<=n-i+1;j++){
            str+=j;
        }
        console.log(str);
    }

}

Pattern6(5);

// 7)

function Pattern7(n){
    let str="";
    for(let i=0;i<n;i++){
        str="";
        for(let space=0;space<n-i-1;space++){
            str+=" ";
        }
        for(let j=0;j<2*i+1;j++){
            str+="*";
        }
        for(let space=0;space<n-i-1;space++){
            str+=" ";
        }
        console.log(str);
    }

}

Pattern7(5);

//8)

function Pattern8(n){
    let str="";
    for(let i=0;i<n;i++){
        str="";
        for(let space=0;space<i;space++){
            str+=" ";
        }
        for(let j=0;j<2*n-2*i-1;j++){
            str+="*";
        }
        for(let space=0;space<i;space++){
            str+=" ";
        }
        console.log(str);
    }

}

Pattern8(5);


//9)

function Pattern9(n){
    let str="";

        Pattern7(n);
        Pattern8(n);


}

Pattern9(5);



//10)

function Pattern10(n){
    let str="";
    for(let i=1;i<=2*n-1;i++){
        str="";
        let stars=i>n ? 2*n-i:i;
        for(let j=1;j<stars;j++){
            str+="*";
        }
        console.log(str);
    }

}

Pattern10(5);


// 11)

function Pattern11(n){
    let str="";
    let val=1;
    for(let i=1;i<=n;i++){
        str="";
        val=i%2===0?0:1;
        for(let j=1;j<=i;j++){
            str+=val;
            val=1-val;
        }
        console.log(str);
    }

}

Pattern11(5);



// 12)

function Pattern12(n){
    let str="";
    for(let i=1;i<=n;i++){
        str="";
        for(let j=1;j<=i;j++){
            str+=j;
        }
        for(let space=1;space<=2*(n-i);space++){
            str+=" ";
        }
        for(let j=i;j>=1;j--){
            str+=j;
        }
        console.log(str);
    }

}

Pattern12(5);



// 13)

function Pattern13(n){
    let str="";
    let val=1;
    for(let i=1;i<=n;i++){
        str="";
        for(let j=1;j<=i;j++){
            str+=val;
            str+=" "
            val++;
        }
        console.log(str);
    }

}
Pattern13(5);

// 14)

function Pattern14(n){
    let str="";
    let asciiVal=65;
    for(let i=1;i<=n;i++){
        str="";
        asciiVal=65
        for(let j=1;j<=i;j++){

           str+= String.fromCharCode(asciiVal);
            asciiVal++;
        }
        console.log(str);
    }

}
Pattern14(5);

// 15)

function Pattern15(n){
    let str="";
    let asciiVal=65;
    for(let i=1;i<=n;i++){
        str="";
        asciiVal=65
        for(let j=1;j<=n-i+1;j++){

             str+= String.fromCharCode(asciiVal);
            asciiVal++;
        }
        console.log(str);
    }

}

Pattern15(5);



// 16)

function Pattern16(n){
    let str="";
    let asciiVal=65;
    for(let i=1;i<=n;i++){
        str="";

        for(let j=1;j<=i;j++){

           str+= String.fromCharCode(asciiVal);

        }
        asciiVal++;
        console.log(str);
    }

}
Pattern16(5);

// 7)

function Pattern17(n){
    let str="";
    let asciiVal=65;
    for(let i=0;i<n;i++){
        str="";
        asciiVal=65;
        for(let space=0;space<n-i-1;space++){
            str+=" ";
        }
        let toPrint=2*i+1;
        for(let j=1;j<=toPrint;j++){
            str+= String.fromCharCode(asciiVal);
            asciiVal=j<Math.round(toPrint/2)?++asciiVal:--asciiVal
        }
        for(let space=0;space<n-i-1;space++){
            str+=" ";
        }
        console.log(str);
    }

}

Pattern17(5);


// 18)

function Pattern18(n){
    let str="";
    let asciiVal=69;
    for(let i=0;i<n;i++){
        str="";

        asciiVal=69-i;
        for(let j=0;j<=i;j++){
           str+= String.fromCharCode(asciiVal);
            asciiVal++;
        }
        asciiVal++;
        console.log(str);
    }

}
Pattern18(5);


//19

function Pattern19(n){
    let str="";

    for(let i=1;i<=n;i++){
        str="";

        for(let star=1;star<=n-i+1;star++){
            str=str+"*";

        }
        for(let space=1;space<=2*(i-1);space++){
            str=str+" "
        }
        for(let star=1;star<=n-i+1;star++){
            str=str+"*";
        }

        console.log(str);
    }
    for(let i=1;i<=n;i++){
        str="";
        for(let star=1;star<=i;star++){
            str=str+"*";
        }
        for(let space=1;space<=2*(n-i);space++){
            str=str+" "
        }

        for(let star=1;star<=i;star++){
            str=str+"*";
        }
        console.log(str);
    }
}
Pattern19(5)


//20

function pattern20(n){
    let str="";


    for(let i=1;i<=2*n-1;i++){
        str="";

        totalStars=i>n?2*n-i:i;
        totalSpace=i>n?2*(n-totalStars):2*(n-i)
        for(let star=1;star<=totalStars;star++){
            str=str+"*";

        }
        for(let space=1;space<=totalSpace;space++){
            str=str+" "
        }
        for(let star=1;star<=totalStars;star++){
            str=str+"*";

        }
        console.log(str);
    }
}
pattern20(5);

//21


function pattern21(n){
    let str="";


    for(let i=1;i<=n;i++){
        str="";


        for(let star=1;star<=n;star++){
            if(i==1 || i==n|| star==1 || star==n){
                str=str+"*";
            }
           else{
            str=str+" "
           }

        }


        console.log(str);
    }
}
pattern21(4);


//22)

function Pattern22(n){
    let str="";
    for(let i=0;i<2*n-1;i++){
        str=""
        for(let j=0;j<2*n-1;j++){
             top=i;
             left=j;
             right=2*n-1-1-j;
             bottom=2*n-1-1-i;
             str+=n-Math.min(Math.min(top,bottom),Math.min(left,right))
        }
        console.log(str);
    }
}
Pattern22(4);