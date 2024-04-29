let num1 = 0
let num2 
let operator
let displayVal = 0
let display2str = ''

const btn1 = document.querySelector('.one')
const btn2 = document.querySelector('.two')
const btn3 = document.querySelector('.three')
const btn4 = document.querySelector('.four')
const btn5 = document.querySelector('.five')
const btn6 = document.querySelector('.six')
const btn7 = document.querySelector('.seven')
const btn8 = document.querySelector('.eight')
const btn9 = document.querySelector('.nine')
const btn0 = document.querySelector('.zero')
const btnAdd = document.querySelector('.add')
const btnSubtract = document.querySelector('.subtract')
const btnMultiply = document.querySelector('.multiply')
const btnDivide = document.querySelector('.divide')
const btnEquals = document.querySelector('.equals')
const btnPoint = document.querySelector('.point')
const btnClear = document.querySelector('.clear')
const btnDelete = document.querySelector('.delete')
const display1 = document.querySelector('.display-primary')
const display2 = document.querySelector('.display-secondary')

function updateDisplay1(){
    display1.textContent = displayVal
}

function updateDisplay2(){
    display2.textContent = display2str
}

function clearDisplay(){
    displayVal = 0
    display2str = ''
    updateDisplay1()
    updateDisplay2()
}


btn1.addEventListener('click', () => {
    if(displayVal == 0){
        displayVal = 1
    }
    else{
        displayVal = Number(displayVal.toString() + '1')
    }
    updateDisplay1()
})
btn2.addEventListener('click', () => {
    if(displayVal == 0){
        displayVal = 2
    }
    else{
        displayVal = Number(displayVal.toString() + '2')
    }
    updateDisplay1()
})
btn3.addEventListener('click', () => {
    if(displayVal == 0){
        displayVal = 3
    }
    else{
        displayVal = Number(displayVal.toString() + '3')
    }
    updateDisplay1()
})
btn4.addEventListener('click', () => {
    if(displayVal == 0){
        displayVal = 4
    }
    else{
        displayVal = Number(displayVal.toString() + '4')
    }
    updateDisplay1()
})
btn5.addEventListener('click', () => {
    if(displayVal == 0){
        displayVal = 5
    }
    else{
        displayVal = Number(displayVal.toString() + '5')
    }
    updateDisplay1()
})
btn6.addEventListener('click', () => {
    if(displayVal == 0){
        displayVal = 6
    }
    else{
        displayVal = Number(displayVal.toString() + '6')
    }
    updateDisplay1()
})
btn7.addEventListener('click', () => {
    if(displayVal == 0){
        displayVal = 7
    }
    else{
        displayVal = Number(displayVal.toString() + '7')
    }
    updateDisplay1()
})
btn8.addEventListener('click', () => {
    if(displayVal == 0){
        displayVal = 8
    }
    else{
        displayVal = Number(displayVal.toString() + '8')
    }
    updateDisplay1()
})
btn9.addEventListener('click', () => {
    if(displayVal == 0){
        displayVal = 9
    }
    else{
        displayVal = Number(displayVal.toString() + '9')
    }
    updateDisplay1()
})


btnClear.addEventListener('click', clearDisplay)

btnDelete.addEventListener('click', () => {
    if(displayVal !== 0){
        displayVal = Number(displayVal.toString().slice(0, displayVal.toString().length -1))
        updateDisplay1()
    }
})

btnAdd.addEventListener('click', () => {
    operator = '+'
    num1 = displayVal
    display2str = `${num1} +`
    updateDisplay2()
})

btnSubtract.addEventListener('click', () => {
    operator = '-'
    num1 = displayVal
    display2str = `${num1} -`
    updateDisplay2()
})

btnMultiply.addEventListener('click', () => {
    operator = '*'
    num1 = displayVal
    display2str = `${num1} x`
    updateDisplay2()
})

btnDivide.addEventListener('click', () => {
    operator = '/'
    num1 = displayVal
    display2str = `${num1} ÷`
    updateDisplay2()
})


function add(num1, num2) {
    displayVal = num1 + num2
    updateDisplay1()
}

function subtract(num1, num2) {
    displayVal = num1 - num2
    updateDisplay1()
}

function multiply(num1, num2) {
    displayVal = num1 * num2
    updateDisplay1()
}

function divide(num1, num2) {
    displayVal = num1 / num2
    updateDisplay1()
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            add(num1, num2)
            break;
        case '-':
            subtract(num1, num2)
            break;
        case '*':
            multiply(num1, num2)
            break;
        case '/':
            divide(num1, num2)
            break;
        default:
            console.error('Invalid operator');
            break;
    }
}

btnEquals.addEventListener('click', () => {
    if(num1 && num2 && operator){
        operate(operator, num1, num2)
    }
})