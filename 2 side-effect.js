// side effect  vs  no side-effect

// side-effect    
// ex =>
const obj = {
  fname: "salman",
  age: 21,
};

function rename(newname) {
  obj.fname = newname;              //change global variable value
  console.log("renamed !");
}

rename("shahukh"); //renamed !

// no side-effect
// ex=>
const obj2 = {
  fname: "aamir",
  age: 22,
};

function newname(obj2_values, new_age) {
  return {
    fname: obj2_values.fname,         // not change any outside world value changes
    age:new_age
  };
}

let obj3 = newname(obj2, 20);
console.log(obj2); // { fname: 'aamir', age: 22 }
console.log(obj3); // { fname: 'aamir', age: 20 }
