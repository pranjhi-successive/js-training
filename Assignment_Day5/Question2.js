//Write a program to sort an array of object on the basis of age ({name:"John", age:26})
function person() {
  const person = [
    {
    name: "john",
    age: 23,
    city: "Delhi",
    id: 1,
  },
  {
    name: "alia",
    age: 20,
    city: "meerut",
    id: 3,
  },
   {
    name: "riya",
    age: 28,
    city: "noida",
    id: 2,
  }];
  person.sort ((a,b)=>
    a.age - b.age);
    console.log(person);
}

person();


