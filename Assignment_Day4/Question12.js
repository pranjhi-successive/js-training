//Write a program to display intersection of two array
console.log("intersection with longhand");
function findIntersection(arr1, arr2) {
  const intersection = [];
  for (let i = 0; i < arr1.length; i++) {
    const currentElement = arr1[i];
    if (arr2.includes(currentElement) && !intersection.includes(currentElement)) {
      intersection.push(currentElement);
    }
  }
  return intersection;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const result = findIntersection(array1, array2);
console.log(result);

//shorthand
console.log("intersection with shorthand");
const array3 = [1, 2, 3, 4, 5];
const array4 = [3, 4, 5, 6, 7];
const filteredArray = array3.filter(value => array4.includes(value));
const result1 = filteredArray;
console.log(result1);

  