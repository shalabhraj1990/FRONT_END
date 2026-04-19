"use strict";
let names = ["shalabh", "Raj"];
let store = {};
store.name = "shalabh raj";
store.value = true;
//Genric funcation
function merge(a, b) {
    return [a, b];
}
const ids = merge(1, 2);
const strings = merge("1", "2");
//Genric funcation
function merge2(a, b) {
    return [a, b];
}
const ids1 = merge2(1, "2");
//Genric place holder with contraints
function mergeObj(a, b) {
    return { ...a, ...b };
}
const mergeObj2 = mergeObj({ name: "shalabh" }, { lastname: "raj" });
console.log(mergeObj2);
