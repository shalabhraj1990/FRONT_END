"use strict";
var levels = [30, 29, 65, 24, 67];
console.log(levels.toString());
console.log(levels.join(" "));
//Assignment
var employee = {
    "id": 45353,
    "name1": "shalabh",
    "salary": 437583.45
};
console.log(employee);
for (var item in employee) {
    console.log(`key ${item} and value ${employee[item]}`);
}
const { id, name1, salary } = employee;
console.log(id, name1, salary);
//Assignment
var vaccines = ["J&J", "Pfizer", "Sputnik"];
vaccines.push("Covaxin");
for (var item in vaccines) {
    console.log(vaccines[item]);
}
const [a, b, c, d] = vaccines;
console.log(a, b, c, d);
