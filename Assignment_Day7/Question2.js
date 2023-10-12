//Give an example of using multiple callback functions in a single function in JavaScript
function performMultipleTasks(sum, subtract, multiply, finalCallback) {
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
}
function sum() {
  console.log("Addition completed");
}
function subtract() {
  console.log("Subtraction completed");
}
function multiply() {
  console.log("Multiplication completed");
}
function finalCallback() {
  console.log("All operations are done!");
}
performMultipleTasks(sum, subtract, multiply, finalCallback);
