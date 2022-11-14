var array =["J&J","Pfizer","Sputnik"];
console.log(array);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
array.push("Covaxin");
// Added one value Covaxin using push method
console.log(array);

console.log("===========================Array Destructuring=====================================");
let [p,q,r,s] = array;
console.log(p);
console.log(q);
console.log(r);
console.log(s);
