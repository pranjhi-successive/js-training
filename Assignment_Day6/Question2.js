//Create a class Shape with properties width and height and methods getArea(). 
//Create two classes Rectangle and Triangle that inherit from the Shape class and 
//implement the getArea() method for their respective shapes.
class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {
   
}

class Triangle extends Shape {
    getArea() {
        return super.getArea() / 2;
    }
}

const rect = new Rectangle(10, 20);
const tri = new Triangle(10, 20);

console.log("Area of a rectangle is: " + rect.getArea());
console.log("Area of a triangle is: " + tri.getArea());
