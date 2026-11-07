console.log('hi')

// make a function that converts F to C
// arguments: temp in F
// return: temp in C

function convert(tempF) {
    let tempC = (tempF - 32) * (5/9)
    return tempC;
}
let tempC = convert(60)
console.log("Temp today:", tempC)
console.log("Temp tomorrow:", convert(54))

// make a function that calculates ski ticket price
// on weekends - +20%, only for adults
// pass "Mon", "Tue", etc, and age
// start price - 100

function isAdult(age) {
    let adult = false;
    if (age >= 16 && age < 64) {
        adult = true;
    }
    return adult;
}
function isWeekend(day){
    if (day === "Say" || day === "Sun") {
        return true;
    } else {
        return false;
    }
}

function getTicketPrice(age, day) {
    // if (day = "sat")
    let finalPrice = 100;
    /*
    if (age >= 16 && age < 64 && (day === "Say" || day === "Sun")) {
        finalPrice = finalPrice * 1.2
    }
    */
    let adult = isAdult(age);
    let weekend = isWeekend(day);
    if (adult && weekend) {
         finalPrice = finalPrice * 1.2;
    }
    // console.log(day, age)
    return finalPrice
}
let finalPrice = getTicketPrice(50, "Sun");
console.log(finalPrice)

// function that takes a number and returns it multiplied by 10

function number(n) {
    let result = n * 10;
    return result;
}
let result = number(6)
console.log("Result:", result)

// function that takes 3 numbers and returns average

function number(a,b,c) {
    let resultAverage = (a + b + c) / 3;
    return resultAverage;
}
let resultAverage = number(10,5,4)
console.log("Result Average:", resultAverage)