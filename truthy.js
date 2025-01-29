let value = 0;

if (value){
    console.log("Truthy");
}
else {
    console.log("Falsy");
} 


/* The ternary operator
condition ? expressionIFTrue : expressionIFFalse;
*/

let age = 15;

let status = age >= 18? "Adult" : "Miner";

console.log(status);


let score = 100;

let grade = score >= 90 ? "A" : 
score >=80 ? "B" : 
score >=70 ? "C":
score >=60? "D" :
 "F";

console.log(grade);

/* The Switch Statement 
the switch statement is used to evaluet an expresion against
 multiple possible cases. It is an alternative to long if -else-if chains.
*/

let day = "Monday";

switch (day){
    case "Monday":
        console.log("Start of the workweek");
        break;
    case "Friday":
        console.log("End of the workweek");
        break;
    default:
        console.log("Midweek");
}

if (1){
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}