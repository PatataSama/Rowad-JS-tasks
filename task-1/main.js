let num = parseInt(prompt("Enter the number:"))

function EvenOrOdd(num) {
    if (num%2 == 0) {
        console.log("The number is even");
    }else{
        console.log("The number is odd");
    }
}

EvenOrOdd(num);

let Radius = Number(prompt("Enter the Radius:"))

function Circle(Radius) {
    let Area = Radius * Radius * Math.PI
    let Circumference = 2 * Radius * Math.PI
    console.log("Area = " + Area);
    console.log("Circumference = " + Circumference);
}

Circle(Radius)

let num1 = parseFloat(prompt("Enter first number for sum"))
let num2 = parseFloat(prompt("Enter second number for sum"))

function Sum(num1 , num2) {
    let sum = num1 + num2
    console.log("Sum = " + sum);
}

Sum(num1 , num2)

let n1 = parseFloat(prompt("Enter first number for Check"))
let n2 = parseFloat(prompt("Enter second number for Check"))

function NegativeChecker(num1 , num2) {
    if (Math.abs(num1) == num1) {
        console.log("first number positive");
    } else {
        console.log("first number negative");
    }
    if (Math.abs(num2) == num2) {
        console.log("second number positive");
    } else {
        console.log("second number negative");
    }
}

NegativeChecker(n1 , n2)

let str = prompt("Enter String to reverse it:")

function reverseString(str) {
    let restr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        restr += str[i]
    }
    console.log(restr);
}

reverseString(str)
