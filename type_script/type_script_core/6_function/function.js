"use strict";
function hello() {
    return "hellpow";
}
console.log(hello());
let gradeCalculator = function () {
    var maths = prompt("Enter the maths number");
    var physics = prompt("Enter the physics number");
    var chemistry = prompt("Enter the chemistry number");
    var m = parseInt(maths);
    var p = parseInt(physics);
    var c = parseInt(chemistry);
    var avg = (m + p + c) / 3;
    switch (true) {
        case avg < 70:
            console.log("C Grade");
            break;
        case avg > 70 && avg < 90:
            console.log("B Grade");
            break;
        case avg > 90:
            console.log("A Grade");
            break;
        default:
            console.log("Invalid grade.");
    }
};
gradeCalculator();
