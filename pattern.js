//1)
// 1
// 12
// 123
// 1234
// 12345


function printPattern1(){

    let str="";
    for(let row=1;row<=5;row++){
        str="";
        for(let column=1;column<=row;column++){
            str+=column;

        }
        console.log(str);
    }
}
printPattern1()


//2)

// 1
// 2 2
// 3 3 3
// 4 4  4 4
// 5 5  5 5 5

function printPattern2(){
      let str="";
    for(let row=1;row<=5;row++){
        str="";
        for(let column=1;column<=row;column++){
            str+=row;

        }
        console.log(str);
    }
}
printPattern2();

//3)
// 1
// 23
// 456
// 78910

function printPattern3(){
    let str="";
    let num=0;
    for(let row=1;row<=5;row++){
        str="";

        for(let col=1;col<=row;col++){
            num++;
            str=str+num+" ";
        }
        console.log(str);
    }
}
printPattern3();

// 4)

// *****
// ****
// ***
// **
// *

function printPattern4(n){
    let str="";
    for(let row=1;row<=n;row++){
        str="";

        for(let col=1;col<=n+1-row;col++){ //n-row

            str=str+"*";
        }
        console.log(str);
    }
}

printPattern4(5);

//5)


// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

//(N-(row-N+1)=2N-row-1)
function printPattern5(n){
    let str="";
    for(let row=1;row<=2*n;row++){
        str="";
        let totalColsInRow=row>n? (2*n - row): row;
        let noOfSpaces=n-totalColsInRow;
        for(let s=0;s<noOfSpaces;s++){
            str+=" "
        }
        for(let col=1;col<=totalColsInRow;col++){ //n-row

            str=str+"* ";
        }
        console.log(str);
    }
}

printPattern5(5);


//6)
// diamond star

function printPattern6(n){
    let str="";
    console.log("-----pattern6---")
    for(let row=1;row<=2*n;row++){
        str="";
        let totalColsInRow=row>n? (2*n - row): row;
        for(let col=1;col<=totalColsInRow;col++){ //n-row

            str=str+"* ";
        }
        console.log(str);
    }
}
printPattern6(5);
// 7) Pattern30-https://github.com/kunal-kushwaha/DSA-Bootcamp-Java/blob/main/assignments/09-patterns.md


function pattern30(n){
    let str="";
    for(let row=1;row<=n;row++){
        str="";
        let noOfSpaces=n-row;
        for(let s=0;s<noOfSpaces;s++){
            str+=" "
        }
        for(let col=row;col>=1;col--){
            str+=col;
        }
        for(let col=2;col<=row;col++){
            str+=col;
        }
        console.log(str);
    }
}

pattern30(10);


function pattern17(n){
    let str="";
    for(let row=1;row<=2*n;row++){
        str="";
        let totalColsInRow=row>n? (2*n - row): row;
        let noOfSpaces=n-totalColsInRow;
        for(let s=0;s<noOfSpaces;s++){
            str+=" "
        }
        for(let col=totalColsInRow;col>=1;col--){
            str+=col;
        }
        for(let col=2;col<=totalColsInRow;col++){
            str+=col;
        }
        console.log(str);
    }
}
pattern17(10);
