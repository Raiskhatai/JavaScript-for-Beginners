// map() is a higher order array method
// map() newarray banata hey old array mey koi change nhi karta 
// map() ka use array mey modification karne ke liye kiya jata hey 

let arr = [1, 2, 3, 4, 5];

// example 1;

// let newarr = arr.map((item) => item * 2);        // [2,2,6,8,10]
// console.log(newarr);

// example 2

let newarr = arr.map(function (item) {
  return item * item;
}); //[1,4,9,16,26]
console.log(newarr);
