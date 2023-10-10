//Write a program to display intersection of two array
function findIntersection(arr1, arr2) {
  const intersection = [];
  for (let i in arr1 ) {
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

  