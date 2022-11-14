var array = ["J&J", "Pfizer", "Sputnik"];
console.log(array);
for (var index = 0; index < array.length; index++) {
    var element = array[index];
}
array.push("Covaxin");
// Added one value Covaxin using push method
console.log(array);
console.log("===========================Array Destructuring=====================================");
var p = array[0], q = array[1], r = array[2], s = array[3];
console.log(p);
console.log(q);
console.log(r);
console.log(s);
