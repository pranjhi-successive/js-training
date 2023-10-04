// 3.//Write a function expression that takes in another function as an argument
function greet(){
    return "Hello Good Morning" ;
}
function call(greet){
  console.log(greet()) ;
}
call(greet) ;
