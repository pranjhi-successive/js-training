//Write a program to display prime numbers from 1 to 50
console.log("Display Prime Number From 1 to 50");
function primeNumber(num){
    if(num<=1)return false;
    if(num<=3)return true;
    
    for(let i=2; i<num; i++){
     if(num%i==0){
         return false;
     }
    }
    return true;
 }
for(let num=1;num<=50;num++){
    if(primeNumber(num)){
        console.log(num);
    }
}


