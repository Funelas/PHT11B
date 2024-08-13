// Conrol Flow Structures

// 1. Conditional Statements - execute blocks of code based on a condition

// Conditional: if, else, else if, else statemkents
// () - condition block
// {} - code block
// Use: Complex Conditions

let temperature = 31

if (temperature<0){
    // Group of statements
    // Range: below 0
    console.log("It's freezing.");
} else if (temperature >=0 && temperature < 20){
    // Range: 0 - 19
    console.log ("It's cool outside.")
} else if (temperature >=20 && temperature < 30){
    // Range: 20 - 30
    console.log ("It's warm outside.")
} else {
    // Range: 30 and beyond
    console.log("It's hot outside.")
}

// Conditional: switch-case statements
// Use: Check for exact values

let day = "Wednesday"
switch(day){
    case 'Monday':
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It's the end of the week.");
        break;
        default:
            console.log("It's a regular day.")
}

// 2. Looping Statements - Used to repeatedly execute codes

// loops: for loop

    // 1st argument: Variable Initialization
    // 2nd argument: Condition Expression 
    // 3rd argument: Increment / Decrement

for(let i = 1; i <=3 ; i++){
    console.log("For loop count:", i);
}

// loops: while loop
let count = 1; 
while(count<=3){
    console.log("While loop count: ", count);
    count++;
}

// loops: do-while loop
let counter = 1
do {
    console.log("do-while loop count: ", counter);
    counter++
} while (counter <= 3)

// Functions - allows us to reuse blocks of codes

// Defining Functions

function greet() {
    console.log("Hello, welcome to the world of functions!");
    console.log("WHOOOOOOOOOOOOOOOOOOOOOOOOOOO!")
}

// Calling Functions
greet();

// Parameters - variable / placeholder
// Arguments - values that will takeover the parameters
function sum(param1, param2){
    return param1 + param2;
    console.log("Calculation done");
}

console.log("Sum", sum(6,9));
