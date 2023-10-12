//Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit
class TaskQueue {
    constructor(concurrency) {
      this.concurrency = concurrency;
      this.queue = [];
      this.running = 0;
    }
    runTask(task) {
      return new Promise((resolve, reject) => {
        const taskWrapper = async () => {
          this.running++;
          try {
            const result = await task();
            resolve(result);
          } catch (error) {
            reject(error);
          } finally {
            this.running--;
            this.processQueue();
          }
        };
        this.queue.push(taskWrapper);
        this.processQueue();
      });
    }
    processQueue() {
      if (this.running < this.concurrency && this.queue.length > 0) {
        const task = this.queue.shift();
        if (task) {
          task();
        }
      }
    }
  }
  const taskQueue = new TaskQueue(2); 
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  function createTask(id, delayMs) {
    return async () => {
      console.log(`Task ${id} start`);
      await delay(delayMs);
      console.log(`Task ${id} executed`);
      return `Task ${id} result`;
    };
  }
  
  const tasks = [
    createTask(1, 2000),
    createTask(2, 1000),
    createTask(3, 1500),
    createTask(4, 500),
    createTask(5, 3000),
  ];
  
  tasks.forEach((task, index) => {
    taskQueue.runTask(task)
      .then(result => console.log(`Task ${index + 1} result: ${result}`))
      .catch(error => console.error(`Task ${index + 1} error: ${error}`));
  });
  