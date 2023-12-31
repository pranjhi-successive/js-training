//Write a program to remove dupliacte elements from an array
console.log("Remove  Duplicate Elements in long way:");
function removeDuplicatesFromArray(inputArray) {
  const uniqueArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    const currentItem = inputArray[i];
    if (!uniqueArray.includes(currentItem)) {
      uniqueArray.push(currentItem);
    }
  }

  return uniqueArray;
}

const inputArray = [1, 2, 2, 3, 4, 4, 5];
const resultArray = removeDuplicatesFromArray(inputArray);
console.log(resultArray);
; 

  //SHORTHAND

console.log("Remove  Duplicate Elements in short way:");
  function removeDuplicate(arr){
    return Array.from(new Set(arr));
  }
  const inputArray1 = [1, 2, 2, 3, 4, 4, 5];
  const resultArray1 = removeDuplicate(inputArray); 
  console.log(resultArray1); 
  
