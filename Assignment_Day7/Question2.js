//Give an example of using multiple callback functions in a single function in JavaScript
const performMultipleTasks = (sum, subtract, multiply, finalCallback) => {
  console.log("Addition started");
  sum();
  setTimeout(() => {
    console.log("subtraction started");
    subtract();
    setTimeout(() => {
      console.log("multiplication started");
      multiply();
      console.log("all operations are executed successfully");
      finalCallback();
    }, 5000);
  }, 2000);
};

const sum = () => {
  console.log("Addition completed");
};

const subtract = () => {
  console.log("Subtraction completed");
};

const multiply = () => {
  console.log("Multiplication completed");
};

const finalCallback = () => {
  console.log("All operations are done!");
};

performMultipleTasks(sum, subtract, multiply, finalCallback);
