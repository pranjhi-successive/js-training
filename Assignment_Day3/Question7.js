//Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096)
console.log("To display the twice of a number");
function dislplayTwiceOfANo(){
let i=2 ;
let str="" ;
while(i<=4096){
    str+=i+" " ;
    i*=2 ;
}
console.log(str) ;
} 
dislplayTwiceOfANo();