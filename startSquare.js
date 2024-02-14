function starTriangle(){
    let str="";
    for(let row=1;row<=5;row++){
        str="";
        for(let col=1;col<=row;col++){
            str+="*";
        }
        console.log(str);
    }
}
function starSquare(){
    let str="";
    for(let row=1;row<=5;row++){
        str="";
        for(let col=1;col<=5;col++){
            str+="*";
        }
        console.log(str);
    }
}
starSquare();

starTriangle();