/*function showAge() {
    console.log("Clicked");
    let yearInput = document.getElementById("year-input");
    let year = Number(yearInput.value)
    let currentYear = 2026
    let age = currentYear - year;
    console.log("Age:", age);
    let output = document.getElementById("output");
    output.textContent = "Age: " + age;
    if (year === 0 || isNaN(year)) {
        output.textContent = "Please enter a year";
    }
}
let button = document.getElementById("year-button");
button.onclick = showAge;

function getAge(year) {
    let yearInput = document.getElementById("year-input");
    let year = Number(yearInput.value)
    let currentYear = 2026
    let age = currentYear - year;
    return age;
}*/

// make a function that converts inch to cm, eg convertUnit
// second argument: outputUnit. if "cm", convert from inch to cm. if "inch", opposite
// convertUnit(10, "cm")
function convertUnit(n, unit) {
    if (unit === "cm") {
        n / 2.54;
    }
    else {
        n * 2.54;
    }
}
console.log("Length: " + convertUnit(5, "cm"));