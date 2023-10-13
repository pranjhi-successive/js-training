//Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have
//a method called `fullName` that returns the person's full name.Additionally, the class should have a method called
//`averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.
class person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
 static  averageAge(people) {
    let sum = 0;
    for (let i = 0; i <people.length; i++) {
      sum = sum + people[i].age;
    }
    return sum / people.length;
  }

}
const p1 = new person("john", "doe", 24);
const p2 = new person("alia", "doe", 20);
const p3 = new person("rohan", "doe", 26);
const people = [p1, p2, p3];

const averageAge = person.averageAge(people);
console.log(`Average Age: ${averageAge}`);
console.log(p1.fullName() + "\n" + p2.fullName() + "\n" + p3.fullName());



