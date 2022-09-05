let num1 = 0
let num2 = 0
document.getElementById("count-h").textContent = num1
document.getElementById("count-g").textContent = num2
let newResultHome = document.getElementById("count-h")
let newResultGuest = document.getElementById("count-g")
let sumHome = 0
let sumGuest = 0


function countHome1 () {
    sumHome = sumHome + 1
    newResultHome.textContent = sumHome
}

function countHome2 () {
    sumHome = sumHome + 2
    newResultHome.textContent = sumHome
}

function countHome3 () {
    sumHome = sumHome + 3
    newResultHome.textContent = sumHome
}

function countGuest1 () {
    sumGuest = sumGuest + 1
    newResultGuest.textContent = sumGuest
}

function countGuest2 () {
    sumGuest = sumGuest + 2
    newResultGuest.textContent = sumGuest
}

function countGuest3 () {
    sumGuest = sumGuest + 3
    newResultGuest.textContent = sumGuest
}

function reset () {
    sumHome = 0
    sumGuest = 0
    newResultHome.textContent = sumHome
    newResultGuest.textContent = sumGuest
}