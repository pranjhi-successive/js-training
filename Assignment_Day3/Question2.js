//Write a program to display following output as shown in figure
// 1
// 2 3
// 4 5 6
// 7 8 9 10
console.log("Pattern1:");
function printPattern1(){
const numberOfRows=4; 
let num=1;
for(let i=1;i<=numberOfRows;i++){
    let row=" ";
    for(let j=1;j<=i;j++){
        row+=num+" ";
        num++;
    } 
    console.log(row);
}
}printPattern1();

// 1
// 2 2
// 3 3 3
// 4 4 4 4
console.log("Pattern2:");
function printPattern2(){
    const numberOfRows=4; 
    let num=1;
    for(let i=1;i<=numberOfRows;i++){
        let row=" ";
        for(let j=1;j<=i;j++){
            row+=i+" ";
            num++;
        } 
        console.log(row);
    }
    }printPattern2();

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
console.log("Pattern3:");
function printPattern3(){
    const numberOfRows=5; 
    let num=1;
    for(let i=1;i<=numberOfRows;i++){
        let row=" ";
        for(let j=1;j<=numberOfRows-i+1;j++){
            row+=j+" ";
            num++;
        } console.log(row);
    }
        for(let i=2;i<=numberOfRows;i++){
            let row=" ";
            for(let j=1;j<=i;j++){
                row+=j+" ";
            num++;
            }
        console.log(row);
    }
    }printPattern3();
