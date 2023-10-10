//3.1 Create a class Person with properties name, age, gender, and interests.
//Add a method greeting() that returns a string introducing the person.
//Also add a method farewell() that returns a string saying goodbye to the person.
// 3.2 Create a class Student that inherits from the Person class and has a property studies.
// Override the greeting() method to include information about what the student is studying.
// 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught.
// Override the farewell() method to include information about what the teacher teaches.

class person{
    constructor(name,age,genger,interests){
        this.name=name;
        this.age=age;
        this.gender=genger;
        this.interests=interests;  
    }
    greeting(){
        return `Hi my name is ${this.name} and I am ${this.age} years old and my interests are ${this.interests}`;
    }
    farewell(){
        return `Goodbye ${this.name}`;
    }
}
class student extends person{
    constructor(name,age,genger,interests,studies){
        super(name,age,genger,interests);
        this.studies=studies;
    }
    greeting(){
        return `Hi my name is ${this.name} and I am ${this.age} years old and my interests are ${this.interests} and I am studying ${this.studies}`;
    }
}
class teacher extends student{
    constructor(name,age,gender,interests,studies,subjectsTaught){
        super(name,age,gender,interests,studies);
        this.subjectsTaught=subjectsTaught;
    }
    farewell(){
        return `Hi my name is ${this.name} and I am ${this.age} years old and my interests are ${this.interests} and I have studied ${this.studies} andI am teaching ${this.subjectsTaught}`;
    }
}
const p1=new person("john",23,"male",["reading","coding"]);
console.log(p1.greeting() + "\n");
const p2=new student("john",23,"male",["reading","coding"],"maths");
console.log(p2.greeting()+ "\n");
const p3=new teacher("riya",20,"female",["reading","coding"],"B.tech", "physics");
console.log(p3.farewell());