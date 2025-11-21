// a closure in javascript is a fuction that remembers and can access its lexical environment (the scope in which it was declared) even after that lexical environment has closed.

function greeting(gm) {
  return function greet(name) {
    return `${gm} ${name}`;
  };
}

let greet = greeting("good morning");

console.log(greet("shahrukh"));     //good morning shahrukh
console.log(greet("salman"));       //good morning salman

function good_night() {
  let gn = "good night";
  function with_name(name) {
    return `${gn} ${name}`;
  }
  return with_name;
}

let say = good_night();
console.log(say("shahrukh"));       //good night shahrukh
console.log(say("salman"));     //good night salman
