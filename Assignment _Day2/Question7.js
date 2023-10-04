//7.All of the above questions from 3-6 needs to be done with arrow functions also

//3.
let  greeting=()=>{
    return ("hello world") ;
}

let  calling=(greeting)=>{
  console.log(greeting()) ;
}

calling(greeting) ;

//4.

let input =2;
let ans=(input)=>{

  return (input*input) ; 
}
let ans2=ans(input) ;
console.log(`Square of ${input} is ${ans2}`) ;

//5

let sum= (first, second) => first + second;
  let first= 25;
let second = 25;
let s = sum(first, second);
console.log(s);

//6.
const checked=(num)=>{
    if(num%2==0) return true ;
    return false ;
}

let num =4 ;
checked(num) ;
console.log(checked(num)) ;


