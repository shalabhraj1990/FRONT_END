function hello(): string {
    return "hellpow";
}

console.log(hello());

let gradeCalculator = function(){
var maths: any = prompt("Enter the maths number");
var physics: any = prompt("Enter the physics number");
var chemistry: any = prompt("Enter the chemistry number");

var m: number | null = parseInt(maths);
var p: number | null = parseInt(physics);
var c: number | null = parseInt(chemistry);

var avg: number = (m + p + c) / 3;

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
}

gradeCalculator();