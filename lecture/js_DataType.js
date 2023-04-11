// Javascript data type 
// string Data type 
let a = 10 + "Shakil";   //string priority 
let b = 10 + 4 + "Shakil" //right to left so , first 10+4 = 14 than 
let c = "Shakil" + 10 + 20;
// console.log(c)  


let d;      // undefined value 
d = 10;    // reassigen number value 
d = "Shakil" // reassign string value , 
// javascript can defrent data type data can hold a single variable , dynamic variable 
// console.log(d)

let e = 10;
let f = 10;
let g = 20;
const restult = (e == f);  // return (true ), so its booleans data type 
const restult2 = (e == g); // return (false ), so its booleans data type
// console.log(restult);
// console.log(restult2);


// array data type 
const arr = [10, 30, 40, 40];
// console.log(arr[3])



// object data type 
const obj = {
    name: "Shakil",
    age: 20,
    address: "Bhola Charfassion ",
    edu: "CSE "
}

// console.log(obj)
// console.log(typeof obj );  // check any data type usige typeof
console.log(obj.name) // find any arry single data use array.propartyName 
