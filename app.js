// As a user, I want to be able to select numbers so that I can perform operations with them.
// As a user, I want to be able to add two numbers together.
// As a user, I want to be able to subtract one number from another.
// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.
// As a user, I want to be able to see the output of the mathematical operation.
// As a user, I want to be able to clear all operations and start from 0.

//define variable to track the calculator
//  the first event or events pressed prior to the operator
// the second event or events pressed after the operator but before the = 
// display the result of the equation 
// an event that will clear the current equation 

//define required constants 
// 9 number choices 
// 4 operator choices
// 1 clear choice
// 1 run(=) choice
//reference to dom element to display desired message
//handle a user selecting the icons
//computer computes provided equation and displays result


/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/


let a = null
let b = null
let operatorValue = null
let r = 0
let userValueOne = 0 
let userValueTwo = 0


/*------------------------ Cached Element References ------------------------*/

const calculator = document.querySelector('#calculator')
const displayArea = document.querySelector('.display')


/*------------------------------ Event Listeners -----------------------------*/
//adds an event to the calculator, listens for a click in the div area. 
calculator.addEventListener('click', (e) => {
    //if a the classList contains the string number run this 
    if (e.target.classList.contains('number')) {
            //if a is null set first value 
            if (a === null) {
                userValueOne = (e.target.textContent)
                //converts string to number
                a = +userValueOne
                //displays first event number as value a
                displayArea.textContent = (a)
            } else if (b === null) {
                userValueTwo = (e.target.textContent)
                //converts string to number
                b = +userValueTwo
                //displays second event number as value b
                displayArea.textContent = (b)
            }
        }
    //this else if resets the calculator
    else if (e.target.classList.contains('operator') && e.target.textContent === "C") {
        //changes target variables to null
        a = null
        b = null
        operatorValue = null
        //clears out the display area
        displayArea.textContent = ""
    }
    //this 'else if' looks for the click on an operator (/,*,+,-)
    else if (e.target.classList.contains('operator')) {
        // this 'if ... else if' sets the operatorValue to
        if (operatorValue === null && e.target.textContent === "+") {
                userOpValue = (e.target.textContent)
                operatorValue = (userOpValue)
            } else if (operatorValue === null && e.target.textContent === "-") {
                userOpValue = (e.target.textContent)
                operatorValue = (userOpValue)
            } else if (operatorValue === null && e.target.textContent === "*") {
                userOpValue = (e.target.textContent)
                operatorValue = (userOpValue)
            } else if (operatorValue === null && e.target.textContent === "/") {
                userOpValue = (e.target.textContent)
                operatorValue = (userOpValue)
            }
        } 
    // this else if runs the function necessary to compute and then display the answer
    else if (e.target.textContent === "=") {
        if (operatorValue === "+") {
            add(a, b)
            displayArea.textContent = (r)
        } else if (operatorValue === "-" ) {
            subtract(a, b)
            displayArea.textContent = (r)
        } else if (operatorValue === "/") {
            divide(a, b)
            displayArea.textContent = (r)
        } else if (operatorValue === "*") {
            multiply(a, b)
            displayArea.textContent = (r)
        }
    }   
})

/*-------------------------------- Functions --------------------------------*/

function add (x, y) {
    r = x+y    
}
function subtract (x, y) {
    r = x-y
}
function divide (x, y) {
    r = x/y
}
function multiply (x, y) {
    r = x*y
}


