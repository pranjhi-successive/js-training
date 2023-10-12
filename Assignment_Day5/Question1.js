//Write a program to iterate over object
const person = {
    name: "john",
    age: 23,
    fun: function () {
      return "Hello";
    },
  };
  
  for (const key in person) {
    if (typeof person[key] === "function") {
      console.log(person[key]());
    } else {
      console.log(person[key]);
    }
  }
  

