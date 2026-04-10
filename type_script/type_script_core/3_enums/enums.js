"use strict";
var Gender;
(function (Gender) {
    Gender[Gender["female"] = 0] = "female";
    Gender[Gender["male"] = 1] = "male";
})(Gender || (Gender = {}));
console.log(Gender.female);
console.log(Gender.male);
console.log(Gender[0]);
console.log(Gender[1]);
var WeekEnds;
(function (WeekEnds) {
    WeekEnds[WeekEnds["saturday"] = 6] = "saturday";
    WeekEnds[WeekEnds["sunday"] = 7] = "sunday";
})(WeekEnds || (WeekEnds = {}));
console.log(WeekEnds[6]);
console.log(WeekEnds[7]);
