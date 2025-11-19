// A higher order function is a function that either:-
// 1. takes another function as an argument, or
// 2. return another function as its output.

// example 1:

function print_table(val) {
  for (let i = 1; i <= 10; i++) {
    console.log(val * i);
  }
}

function table(val, cb) {
  return cb(val);
}

table(6, print_table); // table of 6

// example 2:

function table(val, cb) {
  return cb(val);
}

table(5, function (item) {
  for (let i = 1; i <= 10; i++) {
    console.log(item * i); // table of 5
  }
});

// example 3:

// function greeting(name){
//     return ` helloo ${name}`;
// }

// function say_hello(name,cb){
//     return cb(name);
// }

// console.log(say_hello("rais",greeting));

function say_hello(name, cb) {
  return cb(name);
}

console.log(
  say_hello("shahrukh", (name) => {
    return `hello ${name}`; //hello shahrukh
  })
);
