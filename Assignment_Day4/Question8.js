//Write a program to remove dupliacte elements from an array
console.log("Remove  Duplicate Elements are:");
function removeDuplicatesFromArray(inputArray) {
    const uniqueArray = [];
    
    for (let i = 0; i < inputArray.length; i++) {
      const currentItem = inputArray[i];
      let isDuplicate = false;
      for (let j = 0; j < uniqueArray.length; j++) {
        if (currentItem === uniqueArray[j]) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        uniqueArray.push(currentItem);
      }
    }
    
    return uniqueArray;
  }
  
  const inputArray = [1, 2, 2, 3, 4, 4, 5];
  const resultArray = removeDuplicatesFromArray(inputArray);
  
  console.log(resultArray); 
  
