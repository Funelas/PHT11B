let fruits = ['apple', 'banana', 'orange', 'mango']

// console.log("First fruit: ", fruits[0]);
// console.log("Second fruit: ", fruits[1]);
// console.log("Last fruit: ", fruits[fruits.length-1])

// Editing contents of an array
fruits[1] = 'grapes';
console.log(fruits);

// Adding contents in an array
fruits.push("strawberry");
console.log("Modified array: ", fruits)


// Deleting contents in an array
fruits.pop()
console.log("Diminished Array: ", fruits);

// Array iteration with for loop

let numbers = [1,2,3,4,5];

for (let i=0 ; i < numbers.length; i++){
    console.log(numbers[i]);
}

// Common array methods 

// Length
console.log("Array Length: ", numbers.length);

// indexOf
console.log("Index of 3: ", numbers.indexOf(3));

// Includes
console.log("Includes 5: ", numbers.includes(5));

// join
console.log ("Joined arrays: ", numbers.join("-"));

// slice 
let slicedArray = numbers.slice(1,4);
console.log('Sliced array: ', slicedArray);

//splice
let removedElements = numbers.splice(2,1);
console.log("Removed elements: ", removedElements);
console.log("Update array: ", numbers)

// Step 1: Create an object literal representing a person

const person = {
    firstName: 'Leslie',
    lastName : 'Villanueva',
    age : '18' || '19', 
    hobbies: ['watching', 'angry-ing', 'fashion'],
    greet : function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}. Nice to meet you.`)
    }
}
person.greet()