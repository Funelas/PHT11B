console.log("Hello PHT11"); 
// This is a comment in a single line
/*
    This is a comment using multi-line
*/ 
let UPPERCASE = "UPPERCASE";
let lowercase = "lowercase";
console.log(UPPERCASE);
// three ways to call a variable
// 1. let 2. const 3. var 
UPPERCASE = "pht11"; 
console.log(UPPERCASE);
let firstName = 'Jason';
let age = 16; 
console.log ("My name is", firstName, "and my age is", age + "." );
//Addition 
let x = 20;
let y = 5;
let sum = x + y;
console.log("The sum of", x,"+",y,"=", sum);
//Subtraction
let difference = x - y;
console.log("The difference of", x,"-",y,"=", difference);
//Multiplication
let product = x * y;
console.log("The product of", x,"*",y,"=", product);
//Division
let quotient = x / y;
console.log("The quotient of", x,"/",y,"=", quotient);

//Data Types
/*
    Primitive Types
    -->Number - 10, 3.14, -5
    -->String - "name", 'string'
    -->Boolean - true, false 
    -->Undefined - blank
    -->Null - intentional absence of any object value
    -->Symbols - a unique identifier that is often used as a property key in objects.
    Object Types: 
*/ 
let dataNum = 8.88;
let dataString = "Kevin";
let dataBool = true;
let dataUndefined;
let car = null;
console.log("Data type of", dataNum, "is:", typeof dataNum);
console.log("Data type of", dataString, "is:", typeof dataString);
console.log("Data type of", dataBool, "is:", typeof dataBool);
console.log("Data type of", dataUndefined, "is:", typeof dataUndefined);
console.log("Data type of", car, "is:", typeof car);

//Javascript Opperators
/*
    Arithmetic Operator: +, -, *, /, %
        Modulo: (one way to determine odd or even)
        12 % 2 = even 
        13 % 2 =  odd 
    Assignment Operator: =, +=, -=, *=, /=, %=
        sum = x + y
        sum += y  (expounded version: sum = sum + y )
    Comparison Operator: compares values and return true or false
        ==, !=, =, >, <, >=, <=
        - 5 == 5 (result: true)
        - 5 != 5 (result: true)
        - 5 != 4 (result: true)
    Unary Operators: this performs single operand
    +, - , ++, --, !
    - let x = 2;
    - console.log(++x)

*/ 
let first = 5;
let second = 4; 
console.log(first != second);
console.log('It still works fine!')