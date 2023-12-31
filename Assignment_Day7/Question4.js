//Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number
class Limiter {
  constructor(limit, time, timeLimit) {
    this.limit = limit;
    this.initialValue = 0;
    this.time = time;
    this.timeLimit = timeLimit;
  }
  getData() {
    if (new Date().getTime() / 1000 - this.time > this.timeLimit) {
      this.initialValue = 0;
    }
    return new Promise((resolve, reject) => {
      if (this.initialValue == 0) {
        this.time = new Date().getTime() / 1000;
      }
      if (
        new Date().getTime() / 1000 - this.time <= this.timeLimit &&
        this.initialValue < this.limit
      ) {
        this.initialValue += 1;
        resolve("Done");
      } else {
        reject("limit exausted");
      }
    });
  }
}

const obj = new Limiter(5, 0, 10);
const id = setInterval(() => {
  console.log(obj.getData());
}, 1000);

setTimeout(() => {
  clearInterval(id);
}, obj.timeLimit * 1000);
