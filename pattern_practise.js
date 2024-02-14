https://github.com/kunal-kushwaha/DSA-Bootcamp-Java/blob/main/assignments/09-patterns.md
function pattern1(n){
    console.log("-----------PATTERN---------");
    let str="";
    for(let row=0;row<n;row++){
        str="";
        for(let col=0;col<n;col++){
            str+="*"
        }
        console.log(str);
    }
}
pattern1(5);

function pattern2(n){
    console.log("-----------PATTERN---------");
    let str="";
    for(let row=1;row<=n;row++){
        str="";
        for(let col=1;col<=row;col++){
            str+="*"
        }
        console.log(str);
    }
}
pattern2(5);

function pattern3(n){
    console.log("-----------PATTERN---------");
    let str="";
    for(let row=1;row<=n;row++){
        str="";
        for(let col=1;col<=n-row;col++){
            str+="*"
        }
        console.log(str);
    }
}
pattern3(5);

function pattern4(n){
    console.log("-----------PATTERN---------");
    let str="";
    for(let row=1;row<=n;row++){
        str="";
        for(let col=1;col<=row;col++){
            str+=col
        }
        console.log(str);
    }
}
pattern4(5);

function pattern5(n){
    console.log("-----------PATTERN---------");
    let str="";
    for(let row=1;row<=2*n;row++){
        str="";
        let totalColsInRow=row>n?2*n-row:row;
        for(let col=1;col<=totalColsInRow;col++){
            str+="*"
        }
        console.log(str);
    }
}
pattern5(5);

function pattern6(n){
    console.log("-----------PATTERN---------");
    let str="";
    for(let row=1;row<=n;row++){
        str="";
        let noOfSpaces=n-row;
        for(let s=0;s<=noOfSpaces;s++){
            str=str+ " ";
        }
        for(let col=1;col<=row;col++){
            str+="*"
        }
        console.log(str);
    }
}
pattern6(5);

function pattern7(n){
    console.log("-----------PATTERN---------");
    let str="";
    for(let row=1;row<=n;row++){
        str="";
        for(let col=1;col<=n-row+1;col++){
            str+="*"
        }
        console.log(str);
    }
}
pattern7(5);

function pattern8(n){
    console.log("-----------PATTERN8---------");
    let str="";
    for(let row=1;row<=n;row++){
        str="";
        for(s=1;s<=n-row;s++){
            str+=" ";
        }
        for(let col=1;col<=2*row-1;col++){
            str+="*"
        }
        // for(let col=1;col<=row-1;col++){
        //     str+="*"
        // }
        console.log(str);
    }
}
pattern8(5);


function pattern9(n){
    console.log("-----------PATTERN---------");
    let str="";
    for(let row=1;row<=n;row++){
        str="";
        for(s=1;s<=row-1;s++){
            str+=" ";
        }
        for(let col=1;col<=2*(n-row)+1;col++){
            str+="*"
        }
        // for(let col=1;col<=n-row;col++){
        //     str+="*"
        // }
        console.log(str);
    }
}

pattern9(5);


function pattern10(n){
    console.log("-----------PATTERN---------");
    let str="";
    for(let row=1;row<=n;row++){
        str="";
        for(s=1;s<=n-row;s++){
            str+=" ";
        }
        for(let col=1;col<=row;col++){
            str+="* "
        }

        console.log(str);
    }
}

pattern10(5);



function pattern11(n){
    console.log("-----------PATTERN---------");
    let str="";
    for(let row=1;row<=n;row++){
        str="";
        for(s=1;s<=row-1;s++){
            str+=" ";
        }
        for(let col=1;col<=n-row+1;col++){
            str+="* "
        }

        console.log(str);
    }
}

pattern11(5);


function pattern12(n){
    console.log("-----------PATTERN---------");
    let str="";
    for(let row=1;row<=2*n;row++){
        str="";
        let noOfSpaces=row>n?2*n-row:row-1;
        let totalColsInRow=n-noOfSpaces;
        for(s=1;s<=noOfSpaces;s++){
            str+=" ";
        }
        for(let col=1;col<=totalColsInRow;col++){
            str+="* "
        }

        console.log(str);
    }
}

pattern12(5);


function pattern13(n){
    console.log("-----------PATTERN---------");
    let str="";
    for(let row=1;row<=n;row++){
        str=""
        for(let s=1;s<=n-row;s++){
            str+=" ";
        }
        for(let col=1;col<=2*row-1;col++){

            if(col==1 || row==n || col==2*row-1){
                str+="*"
            }
            else{
                str+=" "
            }

        }



        console.log(str);
    }
}

pattern13(5);




function pattern14(n){
    console.log("-----------PATTERN---------");
    let str="";
    for(let row=1;row<=n;row++){
        str=""
        for(let s=1;s<=row-1;s++){
            str+=" ";
        }
        for(let col=1;col<=2 * (n-row)+1 ;col++){

            if(col==1 || row==1 || col==2 * (n-row)+1 ){
                str+="*"
            }
            else{
                str+=" "
            }

        }



        console.log(str);
    }
}

pattern14(5);


