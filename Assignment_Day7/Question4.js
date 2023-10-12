//Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number
class RateLimiter {
  constructor(limit) {
    this.limit = limit;
    this.queue = [];
  }
  async execute(task) {
    return new Promise(async (resolve) => {
      if (this.queue.length < this.limit) {
        this.queue.push(task);
      } else {
        await Promise.all(this.queue);
        this.queue = [];
        this.queue.push(task);
      }
      resolve(await task());
    });
  }
}
const limiter = new RateLimiter(2);
async function fetchData(url) {
  console.log(`Fetching data from ${url}`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`Data fetched from ${url}`);
}
async function main() {
  const urls = ['url1', 'url2', 'url3', 'url4', 'url5'];

  for (const url of urls) {
    await limiter.execute(() => fetchData(url));
  }
}
main();
