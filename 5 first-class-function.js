// first class function
// first class fuction is feature of javascript in this feature you can treat function like any other value you can assigne to a variable , passed as argument etc.

//ex 1:
// let fun = function () {
//   console.log("hello fun"); // function stored in a variable
// };

// fun();

// ex 2:

// function greeting(name){
//     return "hello "+name;
// }

// function say_hello(name,greet){
//     console.log("pahle yeh print ho jaye feer callback greeting call hoga");
//     return greet(name);
// }

// console.log(say_hello("shahrukh",greeting));

// ex 3:

function greet(name) {
  return () => {
    return `hello ${name}`;
  };
}

function say_hello(name, cb) {
  return cb(name)();
}

console.log(say_hello("shahrukh", greet));
