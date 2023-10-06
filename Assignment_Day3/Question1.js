//1. Write a program to perform functionality of a calculator (add,sub,multiply,divide)
function calculator(operation, num1, num2) {
    switch (operation) {
      case "add":
        return num1 + num2;
      case "subtract":
        return num1 - num2;
      case "multiply":
        return num1 * num2;
      case "divide":
        if (num2 === 0) {
          return " Not allowed.";
        }
        return num1 / num2;
    }
  }
  const operation = "add"; 
  const num1 = 10;
  const num2 = 5;
  
  const result = calculator(operation, num1, num2);
  console.log(result);
  