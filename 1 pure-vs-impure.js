// not pure or impure function

// impure function has two things
// side effect :- changing outside world(function) value 
// same input diffrent output 

// example of side-effect
// example 1
let fname = "salman";

function greet() {
  console.log(`hello ${fname}`); // console.log();
}

greet(); // hello salman

// exaple 2

let counter = 0;

function increase() {
  counter++;
  console.log(counter);
}

increase(); //1
increase(); //2

// example of same-input -> diffrent output

function changes(){
  return Math.random();
}

let val1=changes();
let val2=changes();

console.log(val1);
console.log(val2);

// pure

// example 1:

function greeting(fname,lname) {
  return `hi ${fname} ${lname}`;
}

let salman_fname = greeting("salman","khan");
let kartik_fname = greeting("kartik","aryan");

console.log(salman_fname); // hi  salman
console.log(kartik_fname); // hi  kartik
