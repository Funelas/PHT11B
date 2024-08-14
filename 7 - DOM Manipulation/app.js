// Accessing Element using getElementById(<element-id>) Selector
let elementWithId = document.getElementById("first-div");
// Check if we were able to get the right element
console.log(elementWithId);

// Modify element .textContent property 
elementWithId.textContent = "Div 1";

// Accessing Element using getElementByClassName(<elements-class>) Selector
let elementWithClass = document.getElementsByClassName("sample-div");

console.log(elementWithClass);

// Modify elements .textcontent property using slicing and index
elementWithClass[1].textContent = "Div 2";

// Accessing Elements using getElementsByTagName() Selector
let listItems = document.getElementsByTagName("li");
console.log(listItems);

// Modify element using .backgroundColor property using index
listItems[1].style.backgroundColor = "lightgreen";

// Accessing Elements using .querySelector() Selector
// It allows access via  ID's, ClassNames & TagNames, but it will only return the first element it meets.
let orderedListItem = document.querySelector(".ordered-list");
console.log(orderedListItem);



let headingThreeVariable = document.querySelectorAll("h3");
console.log(headingThreeVariable)

headingThreeVariable[0].style.backgroundColor = "aqua";

// Update Element Attributes
let dayNightIcon = document.getElementById("day-night-icon");
// Syntax : .setAttribute ("attribute", "new-value")
dayNightIcon.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/3688/3688129.png");

// Appending New Elements
let parentElement = document.getElementById("parent-element");
let createdElement = document.createElement("div");
createdElement.textContent = "Child Element";
parentElement.appendChild(createdElement);

let elementToBeRemoved = document.getElementById("element-to-be-removed")

elementToBeRemoved.remove();

// Adding Event Listeners and Manipulating Elements Style

let darkModeBtn = document.getElementById("dark-mode-btn");
darkModeBtn.addEventListener("click", function(){
    let pageContainer = document.getElementById("page-container");
    pageContainer.style.backgroundColor = "black";
    pageContainer.style.color = "white";
    let pageModeText = document.getElementById("page-mode-text");
    pageModeText.textContent = "Dark Mode"
})



