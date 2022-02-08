const makeArrays = (array) => {
  let result = [];
  if (array) {
    ...array
  }
  return array;
};

const arr1 = [1, 2];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 3, 4];

console.log(makeArrays(arr1));
console.log(makeArrays(arr2));
console.log(makeArrays(arr3));

console.log(...arr2);
