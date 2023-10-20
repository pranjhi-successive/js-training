//Implement a function that returns a resolved Promise after a specified delay using async/await
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const delayedPromise = async () => {
  console.log("Before the delay");
  await delay(2000); 
  console.log("After the delay");
};

delayedPromise();
