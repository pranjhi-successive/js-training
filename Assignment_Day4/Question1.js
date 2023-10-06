//Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")
function removeDuplicates(){
    const  str = "Hello Yellow";
   console.log (... new Set(str));
}removeDuplicates();

//normal

function removeDuplicate(){
    const string ="Hello Yellow";
     let ans="";
    let uniquechar={};
    for(let i=0;i<string;i++){
        let char=string.charAt(i);
        if(!uniquechar[char]){
            uniquechar[char]=true;
            ans+=char;
        }
           }
    return ans;
}
console.log(removeDuplicate());