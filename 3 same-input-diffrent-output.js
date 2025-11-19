// same input  same output

function pure_fun(val) {
  return val * val;
}

console.log(pure_fun(5));
console.log(pure_fun(5)); // when ever i gave 5 to pure_fun it always give me 25 output

// same input different output

function impure_fun(val){
    let ran_num=Math.random()*5;
    return ran_num*val;
}

console.log(impure_fun(5));
console.log(impure_fun(5));     // whenever i gave 5 to impure_fun it gives diffrent output 