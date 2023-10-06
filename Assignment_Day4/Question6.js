//6. Write a program to find sum of an array
console.log("Sum of an array is:");
function sumOfArray(){
     let ans=0;
    const array=[1,2,5,7,9];
    for(let i=0;i<array.length;i++){
        ans += array[i];
    }
    console.log(ans);  
}
sumOfArray();