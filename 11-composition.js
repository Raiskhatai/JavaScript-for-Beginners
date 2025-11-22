// function composition

// ex 1:
let ender = (ending) => (input) => input + ending;

let adore = ender("rocks");
let annonce = ender(", y'all");
let exclaim = ender(" !");

let hyperup = (x) => exclaim(annonce(adore(x)));
console.log(hyperup("js "));        // js rocks, y'all !
console.log(hyperup("FP "));        // FP rocks, y'all !

// ex 2:
function add(a, b) {
  return a + b;
}

function square(val) {
  return val * val;
}

function cube(val) {
  return val ** 3;
}

function compostion(fn1, fn2) {
  return (a, b) => {
    return fn1(fn2(a, b));
  };
}

let answer = compostion(square, add);
let res = answer(2, 3);
console.log(res);          // 25

// ex:3=>
// let answer = compostion(cube, add);

let c2 = (fn1, fn2) => (a, b) => fn1(fn2(a, b));

let task = c2(square, add);
let res2 = task(5, 5);
console.log(res2);          //100

// simple way :

// function add(a, b) {
//   return a + b;
// }

// function square(val) {
//   return val * val;
// }

// let add_val = add(5, 10);
// let res = square(add_val);
// console.log(res);
