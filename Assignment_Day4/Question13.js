//Write a program to return inverse of an array

function inverse(array) {
    let copyArray = []
    for (let i = 0; i < array.length; i++) {
      copyArray[array[i]] = i
    }
    return copyArray
  }
  
  const inputArray = [3,0,1,2,4],
    output = inverse(inputArray)
  console.log(output)
  