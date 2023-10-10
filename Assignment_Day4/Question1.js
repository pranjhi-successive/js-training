//Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")
function removeDuplicates(){
    const  str = "Hello Yellow";
   console.log ([... new Set(str)].join(""));
}removeDuplicates();

//normal

function removeDuplicate(){
    const inputString ="Hello Yellow";
     let ans="";
    let uniquechar={};
    for(let i=0;i<inputString.length;i++){
        let char=inputString.charAt(i);
        if(!uniquechar[char]){
            uniquechar[char]=true;
            ans+=char;
        }
           }
    return ans;
}
console.log(removeDuplicate());