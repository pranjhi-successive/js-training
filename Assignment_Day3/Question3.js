// Write a program to display Diamond Pattern
//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 
//  * * * * 
//   * * * 
//    * * 
//     * 
console.log("Display Diomond Pattern");
function displayDiamondPattern(){
    const numberOfRows=4; 
    const num=1;
    for(let i=0;i<=numberOfRows;i++){
        let row=" ";
        for(let j=0;j<numberOfRows-i;j++){
            row+=" ";
        } 
        for(let j=0;j<i+1;j++){
            row+="*"+" ";
        } 
        console.log(row);
    }
    for(let i=numberOfRows;i>=0;i--){
        let row=" ";
        for(let j=0;j<numberOfRows-i+1;j++){
            row+=" ";
        } 
        for(let j=0;j<=i-1;j++){
            row+="*"+" ";
        } 
        console.log(row);
    }
    }displayDiamondPattern();
    