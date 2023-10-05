//Write a program to dispaly number from 1-20 using all types of loops

//for
console.log ("USING FOR LOOP");
function displayUsingForLoop(){
    let ans=" ";
    for( let i=1;i<=20;i++){
        ans+=i+" ";
    }console.log(ans);
}
displayUsingForLoop();
//while
console.log ("USING WHILE LOOP");
function displayUsingWhileLoop(){
    let i=1;
    let ans=" ";
    while(i<=20){
        ans+=i+" ";
        i++;
    }console.log(ans);
}
displayUsingWhileLoop();
//dowhile
console.log ("USING DOWHILE LOOP");
function displayUsingDiWhileLoop(){
    let i=1;
    let ans=" ";
  do{
        ans+=i+" ";
        i++;
    }while(i<=20)console.log(ans);
}
displayUsingWhileLoop();
//for...of
console.log ("USING FOR...OF LOOP");
function displayUsingForOfLoop(){
const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for(const result of numbers){
    console.log(result);
}
}displayUsingForOfLoop();
//for...in
console.log ("USING FOR...IN LOOP");
function displayUsingForInLoop(){
const num=[];
for(let i=1;i<=20;i++){
    num[i]=i;
}
for(const key in num){
    console.log(num[key]);
}
} displayUsingForInLoop();




