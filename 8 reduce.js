// reduce() higher order array method hey
// reduse() array ke sare element ko combine(reduce) karke single value banata hey

// example 1
let arr = [1, 2, 3, 4, 5];
let newarr = arr.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(newarr); //15

// example 2

let str = ["a", "b", "c"];
let newstr = str.reduce((accumulator, value) => {
  return accumulator + value;
}, "");

console.log(newstr);
 