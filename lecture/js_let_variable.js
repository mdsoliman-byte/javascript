let name = "Soliman "; // let variables is a block scop  variable ,
// let variable value we cannot redeclar 
// example : let naem = "Shakil" , we cannot do this ,, 

let num = "Shakil"; // ist a global scop , we can access this variable any wher , becouse this a global variable scop
{
    let num = "Shakil"; // its a block scop ,, we can access this variable in this block , outside of block we cannot access this , 
}

function hello (){
    // its a functional scop , if we diclear a variable in here , we can access this in the function , outside of function we cannot access , 
    let name = "Prity" // example : we cannto access this variable outside of function , becouse this variable in the functional scop , 
}

let x = 60;
function foo(){
    console.log(x)
}
function bar(){
    let x = 20;
    foo()
}
bar()

let a = 40 ;
// let a , declaration part 
// a = 20 , assaigne part 
// we cannot let redeclare , but we reassaign let value 
const helloOne = 75885
// hello thiis is test comment for github pull testing 
