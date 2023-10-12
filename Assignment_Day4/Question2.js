//.Write a program to reverse a string ("Hello John" => "olleH nhoJ")

function reverse() {
  const inputString = "Hello John";
  const words = inputString.split(' ');
  const reversedWords = words.map(word => word.split('').reverse().join(''));
  
  console.log(reversedWords.join(' '));
}
reverse();

