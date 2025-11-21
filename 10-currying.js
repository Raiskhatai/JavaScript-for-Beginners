// Currying is a technique of transforming a function that takes multiple arguments into a sequence of functions, where each function takes only one argument and returns another function until all arguments are provided.

console.log(sum(12, 21, 21)); // 54

// currying function :

// first way to declare :
// function x(a) {
//   return function y(b) {
//     return function z(c) {
//       return a * b * c;
//     };
//   };
// }

// first way to call :
// let fun_y = x(5);
// let fun_z = fun_y(10);
// let res = fun_z(2);
// console.log(res); //100

// second way to declare :
let x = (a) => (b) => (c) => a * b * c;

// second way to call :
console.log(x(5)(10)(5)); // 250

// without currying
// simple

function sum(a, b, c) {
  return a + b + c;
}
