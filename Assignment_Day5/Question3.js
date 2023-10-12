// Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})
function removeId(){
const people=[
    {
    name:"john",
    age:27, 
    id:1
},
{
    name:"alia",
    age:20,
    id:3
},
{
    name:"riya",
    age:28,
    
},
{
    name:"anaya",
    age:26,
    id:4
    
},
{ 
    name:"harry",
    age:23,
    id:5},
];
for(let i=0;i<people.length;i++){
    if(people[i].hasOwnProperty("id")){
    delete people[i].id;}
}
console.log(people);
}
removeId();