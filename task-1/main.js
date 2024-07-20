function EvenOrOdd(num) {
    if (num%2 == 0) {
        console.log("The number is even");
    }else{
        console.log("The number is odd");
    }
}

EvenOrOdd(5)
EvenOrOdd(6)

function Circle(Radius) {
    let Area = Radius * Radius * Math.PI
    let Circumference = 2 * Radius * Math.PI
    console.log("Area = " + Area);
    console.log("Circumference = " + Circumference);
}

Circle(2)

function Sum(num1 , num2) {
    let sum = num1 + num2
    console.log("Sum = " + sum);
}

Sum(6 , 5)

function NegativeChecker(num1 , num2) {
    if (Math.abs(num1) == num1) {
        console.log("first number positive and second number negative");
    } else {
        console.log("first number negative and second number positive");
    }
}

NegativeChecker(-1 , 2)
NegativeChecker(3 , -5)

function reverseString(str) {
    let restr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        restr += str[i]
    }
    console.log(restr);
}

reverseString("Welcome")
reverseString("Peter")
