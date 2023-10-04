//7.All of the above questions from 3-6 needs to be done with arrow functions also

//3.
const  greeting=()=>{
    return ("hello world") ;
}

const  calling=(greeting)=>{
  console.log(greeting()) ;
}

calling(greeting) ;

//4.

const input =2;
const ans=(input)=>{

  return (input*input) ; 
}
const ans2=ans(input) ;
console.log(`Square of ${input} is ${ans2}`) ;

//5

const sum= (first, second) => first + second;
const first= 25,
      second = 25;
const s = sum(first, second);
console.log(s);

//6.
const checked=(num)=>{
    if(num%2==0) return true ;
    return false ;
}

const num =4 ;
checked(num) ;
console.log(checked(num)) ;


