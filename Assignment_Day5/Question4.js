//Write a program deepClone that takes an object as input and returns a deep copy of that object.
// The function should handle nested objects and arrays.
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle Arrays
  if (Array.isArray(obj)) {
    const arrCopy = [];
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepClone(obj[i]);
    }
    return arrCopy;
  }

  // Handle Objects
  if (typeof obj === "object") {
    const objCopy = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        objCopy[key] = deepClone(obj[key]);
      }
    }
    return objCopy;
  }
}
const originalObj = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
  hobbies: ["reading", "coding"],
};

const clonedObj = deepClone(originalObj);
clonedObj.name = "Pranjhi";
clonedObj.age = 21;
clonedObj.address.city = "Agra";
clonedObj.address.zip = "282010";

console.log(originalObj);
console.log(clonedObj);
