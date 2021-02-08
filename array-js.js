let array = new Array(4);
// Fill array with default value
array.fill(0);
console.log(array);
console.log("array length", array.length);
// How to resize array length?

array.length = 2;
console.log("array length", array.length);

// Converting an array to and object

let products = ["T shirt", "Make up", "Camera", "Cycle"];
console.log(products);
let ProductsObject = { ...products };
console.log(ProductsObject);

// Get random values from and array

let randomProduct = products[Math.floor(Math.random() * products.length)];
console.log(randomProduct);
