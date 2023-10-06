// Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)
function toCamelCase(inputString) {
    const words = inputString.split(' ');
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    const camelCaseString = words.join('');
    return camelCaseString;
  }
  
  const inputString = 'hello john doe';
  const camelCaseResult = toCamelCase(inputString);
  
  console.log(camelCaseResult); 
  