// filter() higher-order array method hey
// filter() wo element jo condition ko pass karega unko new array mey rakhega
// filter() new array banata hey old array mey changes nhi karta

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newarr = arr.filter((item) => item % 2 == 0); //[2,4,6,8,10]
console.log(newarr);

let arr1 = [1, "shahrukh", 2, 3, "salman", "aamir"];
let newarr1 = arr1.filter((item) => {
  //   return typeof item == "number";      //[1,2,3]
  return typeof item == "string"; //['shahrukh','salman','aamir']
});
console.log(newarr1);
