//5. Write a program to print all even number first and then all odd numbers using only one iteration
console.log("To print all even number first and then all odd numbers using only one iteration");
function displayEvenThenOdd(){
const num=20;
for(let i=1,even=2,odd=1;i<=num;i++){
    if(i%2==0){
        console.log(even);
        even+=2;
    }
    else{
        console.log(odd);
        odd+=2;
    }
}

}
displayEvenThenOdd();