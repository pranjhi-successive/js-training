//1. Write a program to perform functionality of a calculator (add,sub,multiply,divide)
console.log("Program to perform functionality of a calculator")
function calculator(num1,num2){
    function addition(num1,num2){
        return num1+num2;  
    }
    console.log (addition(num1,num2));
    function subtraction(num1,num2){
        return num1-num2;
    }
    console.log (subtraction(num1,num2));
    function multiplication(num1,num2){
        return num1*num2;
    }
    console.log (multiplication(num1,num2));
    function divide(num1,num2){
        return num1/num2;
    }
    console.log (divide(num1,num2));
    
}
const num1=10;
const num2=2;
calculator(num1,num2);