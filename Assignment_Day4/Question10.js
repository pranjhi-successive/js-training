//Write a program to concatenate an input of array of arrays
function concatenateArrays(arrays) {
    const result = [];
    for (let i = 0; i < arrays.length; i++) {
      const currentArray = arrays[i];
      
      for (let j = 0; j < currentArray.length; j++) {
        result.push(currentArray[j]);
      }
    }
    
    return result;
  }
  const arrayOfArrays = [[1, 2], [3, 4], [5, 6]];
  const concatenatedArray = concatenateArrays(arrayOfArrays);
  console.log("concatenatedArray with long hand",concatenatedArray); 

  //shorthand
  const arrayOfArrays1 = [[1, 2], [3, 4], [5, 6]].flat();
  const concatenatedArray1 = concatenateArrays(arrayOfArrays);
  console.log("concatenatedArray with shorthand",concatenatedArray1);

  
  