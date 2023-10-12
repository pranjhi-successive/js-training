//Write a program deepClone that takes an object as input and returns a deep copy of that object.
const personObj = {
  contactInfo: {
    name: "pranjhi",
    address: {
      city: "agra",
      country: "India",
    },
  },
};
let copyPersonObj = JSON.parse(JSON.stringify(personObj));

copyPersonObj.contactInfo.name = "Riya"; 
console.log(copyPersonObj);
console.log(personObj);
