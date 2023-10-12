//Implement a function that returns a resolved Promise after a specified delay using async/await
function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  async function delayedPromise() {
    console.log("Before the delay");
    await delay(2000); 
    console.log("After the delay");
  }
  
  delayedPromise();
  