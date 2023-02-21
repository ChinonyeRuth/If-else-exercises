//1
//Check if a number is odd or even in Javascript
//Use the %  operator in the if blockk to get the type of number

function isEvenOrOdd(num) {
  if (num % 2 == 0) {
    console.log(`${num} is a Even number`)
  } else {
    console.log(`${num} is an odd number`)
  }
}

isEvenOrOdd(73)

//2
//Find the largest of two number
function findLargest(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is the largest number`)
  } else if (num2 > num1) {
    console.log(`${num2} is the largest number `)
  } else {
    console.log(`${num1} is equal to ${num2}`)
  }
}

findLargest(21, 54) //54 is the largest nummber

//3
//Perform arithmetic operations on two numbers
function evalNumbers(num1, num2, op) {
  if (op == 'add') {
    console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`)
  } else if (op == 'subtract') {
    console.log(`Difference of ${num1} and ${num2} is ${num1 - num2} `)
  } else if (op == 'divide') {
    console.log(`Division of ${num1} and ${num2} is ${num1 / num2} `)
  } else if (op == 'multiply') {
    console.log(`Multiplication of ${num1} and ${num2} is ${num1 * num2} `)
  } else if (op == 'modulus') {
    console.log(`Modulus of ${num1} and ${num2} is ${num1 % num2}`)
  } else {
    console.log(`${op} is an invalid operation`)
  }
}

evalNumbers(5, 6, 'add')
evalNumbers(89, 70, 'subtract')
evalNumbers(50, 25, 'divide')
evalNumbers(90, 34, 'multiply')
evalNumbers(10, 12, 'modulus')
evalNumbers(80, 50, 'square')

//4
//Find the grade for input marks
function findGrade(name, marks) {
  if (marks >= 90 && marks <= 100) {
    console.log(`${name}, you have received S grade `)
  }
}
