//Give an example of using multiple callback functions in a single function in JavaScript
function performMultipleTasks(task1, task2, task3, finalCallback) {
  console.log("Task 1 started");
  task1();
  setTimeout(() => {
    console.log("Task 2 started");
    task2();
    setTimeout(() => {
      console.log("Task 3 started");
      task3();
      console.log("All tasks completed");
      finalCallback();
    }, 5000);
  }, 2000);
}
function task1() {
  console.log("Task 1 completed");
}
function task2() {
  console.log("Task 2 completed");
}
function task3() {
  console.log("Task 3 completed");
}
function finalCallback() {
  console.log("All tasks are done!");
}
performMultipleTasks(task1, task2, task3, finalCallback);
