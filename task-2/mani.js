let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let body = document.getElementsByName("body")

let color2 = btn1.value

let root = document.querySelector(":root")

btn1.addEventListener("change" , function () {
    let color1 = btn1.value
    root.style.setProperty("--color-1", color1)
})
btn2.addEventListener("change" , function () {
    let color2 = btn2.value
    root.style.setProperty("--color-2", color2)
})