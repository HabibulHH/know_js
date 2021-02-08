let array = new Array(4);
// Fill array with default value
array.fill(0);
console.log(array);
console.log("array length", array.length);
// How to resize array length?

array.length = 2;
console.log("array length", array.length);

// Converting an array to and object

let products = ["T shirt", "Make up", "Camera", "Cycle", "Cycle"];
console.log(products);
let ProductsObject = { ...products };
console.log(ProductsObject);

// Get random values from and array

let randomProduct = products[Math.floor(Math.random() * products.length)];
console.log(randomProduct);

// Remove Duplicates from an array

let UniqueArray = [...new Set(products)];
console.log(UniqueArray, "............ This is uniqe array");

// Find duplicates/ intersection from two array
let PreviousOrder = ["apple,orange", "mango", "banana"];
let CurrentOrder = ["apple,orange", "mango", "banana"];
let commonItems = [...new Set(PreviousOrder)].filter((item) =>
  CurrentOrder.includes(item)
);
console.log(commonItems, "Items are common");

// Use reducers array

function ReducerExample() {
  let array = [12, 2, 3, 4];
  let singleValue = array.reduce((accumulator, currentValue, index, array) => {
    return (accumulator += currentValue);
  }, 0);

  console.log("Sinale value from reducer func", singleValue);
}

ReducerExample();

function sortAarray() {
  let marks = [12, 2, 3, 4];
  let sorted = marks.sort((a, b) => a - b);
  console.log(sorted);
}

sortAarray();
