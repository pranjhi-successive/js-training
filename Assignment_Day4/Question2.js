//.Write a program to reverse a string ("Hello John" => "olleH nhoJ")

function reverse() {
  const String = "Hello John";
  const words = String.split(' ');
  const reversedWords = words.map(word => word.split('').reverse().join(''));
  
  console.log(reversedWords.join(' '));
}
reverse();

