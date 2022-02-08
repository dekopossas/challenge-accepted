const makeArrays = (array) => {
  array.forEach((item) => console.log(item));
  return array;
};

const arr1 = [1, 2];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 3, 4];

console.log(makeArrays(arr1));
console.log(makeArrays(arr2));
console.log(makeArrays(arr3));
