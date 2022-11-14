enum WeekDays {
    
    Monday = 1 ,
    Tuesday = 2 ,
    Wednesday = 3, 
    Thursday = 4, 
    Friday = 5, 
    Saturday = 6,
    Sunday = 7,

}
console.log("===========================WeekEnds===================");

console.log(WeekDays[1]);
console.log(WeekDays[2]);
console.log(WeekDays[3]);
console.log(WeekDays[4]);
console.log(WeekDays[5]);
console.log(WeekDays[6]);
console.log(WeekDays[7]);

console.log("============================Direction===========================");
enum Compass{
    North,
    East,
    South,
    West,
}
console.log(Compass);

console.log("================Gender=========================================");
enum  Gender {
    Male,
    Female
}
console.log(Gender.Female);
console.log(Gender.Male);
console.log(Gender[1]);
console.log(Gender[0]);