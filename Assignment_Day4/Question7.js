//Write a program to find index of duplicate elements in an array
console.log("Index Of Duplicate Elements are:");
function findDuplicateIndices(arr) {
  const indices = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (indices[element] === undefined) {
      indices[element] = [i];
    } else {
      indices[element].push(i);
    }
  }
  const duplicateIndices = {};

  for (const key in indices) {
    if (indices[key].length > 1) {
      duplicateIndices[key] = indices[key];
    }
  }
  return duplicateIndices;
}
const array = [1, 3, 4, 5, 5, 2, 1, 4, 82, 0, 82];
const duplicateIndices = findDuplicateIndices(array);

console.log(duplicateIndices);
