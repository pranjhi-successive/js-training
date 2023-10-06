//Write a program to find index of duplicate elements in an array
console.log("Index Of Duplicate Elements are:");
function indexDuplicate(){
    let ans=" ";
    const array =[1,3,4,5,5,2,1,4,82,0,82];
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
        if(array[i]==array[j]){
            ans += "("+ i+" ";
            ans+=j+")";
        } 
    } }
    console.log(ans); 
}
indexDuplicate();