//Write a program to convert given string to upperCase OR lowerCase
function convertToUpperCase(inputString) {
    return inputString.toUpperCase();
  }
  function convertToLowerCase(inputString) {
    return inputString.toLowerCase();
  }
  
  const inputString = 'Hello World';
  
  const upperResult = convertToUpperCase(inputString);
  const lowerResult = convertToLowerCase(inputString);
  console.log('Uppercase:', upperResult);
  console.log('Lowercase:', lowerResult);