var employee = {
    emp_id: 1,
    emp_name: "Latika",
    emp_salary: 60000,
   emp_city: "Pandharpur",
    emp_pin_code: 413304
}
console.log(`Employee id is:- ${employee.emp_id},`);
console.log(`Employee Name is:-${employee.emp_name}`);
console.log(`Employee salary is:-${employee.emp_salary}`);
console.log(`Employee city is:-${employee.emp_city}`);
console.log(`Employee pinCode is:-${employee.emp_pin_code}`);

console.log("==================================================");

var {emp_id,emp_name,emp_salary,emp_city,emp_pin_code}=employee
console.log("==============Object Destructuring===========");
console.log(`Employee id is:- ${emp_id},`);
console.log(`Employee Name is:-${emp_name}`);
console.log(`Employee salary is:-${emp_salary}`);
console.log(`Employee city is:-${emp_city}`);
console.log(`Employee pinCode is:-${emp_pin_code}`);
console.log("======object traversing using for in loop=================");
for (const key in employee) {
     {
        const element = employee[key];
        console.log(element);
        
        
    }
}
