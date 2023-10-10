// const data = fetch('https://catfact.ninja/fact');
// console.log(data.then(res => res.json()).then(res => console.log(res)));
// async function getData() {
//     const result = await fetch("https://catfact.ninja/fact");
//     const res = await result.data;
//     return res;
//    }
   
//    console.log(getData())
   
async function getData() {
    const result = await fetch("https://catfact.ninja/fact");
    const res = await result.data;
    return res;
   }
   
   console.log(getData())
   