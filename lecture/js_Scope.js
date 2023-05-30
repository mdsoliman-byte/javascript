var x = 20; //
// global scope /parents scope

function hello() {
  // block scope /child scope
  x = 30;
  console.log(`${x} im from function `);
}
hello();
console.log(x);
/*
note : we can access any global scope variable from block scope ;
but we cannto access any block scope variabl data from global scope 


*/
