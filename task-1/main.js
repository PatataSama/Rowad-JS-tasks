function EvenOrOdd(num) {
    if (num%2 == 0) {
        console.log("The number is even");
    }else{
        console.log("The number is odd");
    }
}

function Circle(Radius) {
    let Area = Radius * Radius * Math.PI
    let Circumference = 2 * Radius * Math.PI
    console.log("Area = " + Area);
    console.log("Circumference = " + Circumference);
}

function Sum(num1 , num2) {
    let sum = num1 + num2
    console.log("Sum = " + sum);
}

function NegativeChecker(num1 , num2) {
    if (Math.abs(num1) == num1) {
        console.log("first number positive and second number negative");
    } else {
        console.log("first number negative and second number positive");
    }
}

function reverseString(str) {
    let restr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        restr += str[i]
    }
    console.log(restr);
}