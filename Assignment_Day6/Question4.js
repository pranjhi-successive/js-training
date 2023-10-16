//Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have
//a method called `fullName` that returns the person's full name.Additionally, the class should have a method called
//`averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  static averageAge(people) {
    let sum = 0;
    for (let i = 0; i < people.length; i++) {
      sum += people[i].age;
    }
    return sum / people.length;
  }
}

const p1 = new Person("John", "Doe", 24);
const p2 = new Person("Alia", "Doe", 20);
const p3 = new Person("Rohan", "Doe", 26);
const people = [p1, p2, p3];

const averageAge = Person.averageAge(people);
console.log(`Average Age: ${averageAge}`);
console.log(p1.fullName());
console.log(p2.fullName());
console.log(p3.fullName());

