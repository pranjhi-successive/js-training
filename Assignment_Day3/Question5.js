//5. Write a program to print all even number first and then all odd numbers using only one iteration
console.log("To print all even number first and then all odd numbers using only one iteration");
function displayEvenThenOdd(){
const num=20;
let even='',odd='';
for(let i=1;i<=num;i++){
    if(i%2==0){
        even+=i+" ";
    }
    else{
        odd+=i+" ";
    }
}console.log(even);

console.log(odd);

}
displayEvenThenOdd();