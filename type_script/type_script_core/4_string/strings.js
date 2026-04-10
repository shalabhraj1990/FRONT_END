"use strict";
var s1 = '<a href="" />';
let name_ = "shalabh";
var s2 = `my name si ${name_}`;
console.log(s2);
console.log(s2.length);
console.log(s2.charAt(0));
console.log(s2.indexOf('i'));
console.log(s2.lastIndexOf('i'));
//assignment 1
var num = 20;
var float = 3.14;
var str = "success is the best revenage";
var Days;
(function (Days) {
    Days[Days["monday"] = 0] = "monday";
    Days[Days["tuesday"] = 1] = "tuesday";
    Days[Days["wednesday"] = 2] = "wednesday";
    Days[Days["thurday"] = 3] = "thurday";
    Days[Days["friday"] = 4] = "friday";
    Days[Days["saturday"] = 5] = "saturday";
    Days[Days["sunday"] = 6] = "sunday";
})(Days || (Days = {}));
//assignment 2
//var prompt_value = prompt("Enter a numberic number !!!");
//let number:number  = parseInt(prompt_value ?? "");
// if (number % 2 == 0)
// alert("Number is even")
// else
// alert("Number is Odd")
//assignment 3
var prompt_value = prompt("Enter a numberic number !!!");
let number = parseInt(prompt_value ?? "");
let i = 1;
while (i < number) {
    if (i % 5 === 0) {
        continue;
    }
    console.log(i);
    i++;
}
