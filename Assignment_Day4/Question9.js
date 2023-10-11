//Write a program to find the last duplicate index in an array
function findLastDuplicate(arr) {
    const lastIndex = {};
    let lastDuplicate = null;

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (lastIndex[element] !== undefined) {
        lastDuplicate = { value: element, index: i };
      }
      lastIndex[element] = i;
    }
    return lastDuplicate;
  }
  const array = [1, 2, 3, 4, 2, 5, 6, 3, 7];
  const lastDuplicate = findLastDuplicate(array);
  
  console.log("Last duplicate value is", lastDuplicate.value, "at index:", lastDuplicate.index);
