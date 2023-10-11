// Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)  
function toCamelCase(inputString) {
  const words = inputString.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    if (i > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
  }
  return words.join('');
}

const inputString = 'Hello john doe';
const camelCaseResult = toCamelCase(inputString);

console.log(camelCaseResult);
