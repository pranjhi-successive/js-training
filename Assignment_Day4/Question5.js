// Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)  
  function toCamelCase(inputString) {
    const words = inputString.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (i === 0) {
        words[i] = words[i][0].toLowerCase() + words[i].substring(1);
      } else {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
      }
    }
    const camelCaseString = words.join('');
    return camelCaseString;
  }
  
  const inputString = 'Hello john doe';
  const camelCaseResult = toCamelCase(inputString);
  
  console.log(camelCaseResult);