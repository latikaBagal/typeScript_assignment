var mathMark = prompt("Please enter your math mark");
var num1 = parseInt(mathMark);
var physicsMark = prompt("Please enter your physics mark");
var num2 = parseInt(physicsMark);
var chemMark = prompt("Please enter your Chemistry mark");
var num3 = parseInt(chemMark);
console.log("Maths Mark:-", mathMark);
console.log("Physics Mark:-", physicsMark);
console.log("Chemistry Mark:-", chemMark);
var sum = num1 + num2 + num3;
console.log(sum);
var average = sum / 3;
console.log("Average mark is :-", average);
if (average < 70) {
    console.log("Grade is C");
}
if (average > 70 && average < 90) {
    console.log("Grade is B");
}
if (average > 90) {
    console.log("Grade is A");
}
