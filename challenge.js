const makeArrays = (array) => {
  let result = [];
  let result1 = [[]];
  let result2 = [];
  let result3 = [];

  array.forEach((item) => result1.push([item]));

  // if(array.length > 2) {
  //   array.forEach((item) => )
  // }

  array.forEach(
    (item) => {
      if(result2.find((findItem) => findItem !== item)){
        result2.push(item);
      }
    } 
  );

  return result;
};

const arr1 = [1, 2];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 3, 4];

console.log(makeArrays(arr1));
console.log(makeArrays(arr2));
console.log(makeArrays(arr3));
