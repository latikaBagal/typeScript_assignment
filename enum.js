var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
console.log("===========================WeekEnds===================");
console.log(WeekDays[1]);
console.log(WeekDays[2]);
console.log(WeekDays[3]);
console.log(WeekDays[4]);
console.log(WeekDays[5]);
console.log(WeekDays[6]);
console.log(WeekDays[7]);
console.log("============================Direction===========================");
var Compass;
(function (Compass) {
    Compass[Compass["North"] = 0] = "North";
    Compass[Compass["East"] = 1] = "East";
    Compass[Compass["South"] = 2] = "South";
    Compass[Compass["West"] = 3] = "West";
})(Compass || (Compass = {}));
console.log(Compass);
console.log("================Gender=========================================");
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Female);
console.log(Gender.Male);
console.log(Gender[1]);
console.log(Gender[0]);
