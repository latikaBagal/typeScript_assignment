var employee = {
    emp_id: 1,
    emp_name: "Latika",
    emp_salary: 60000,
    emp_city: "Pandharpur",
    emp_pin_code: 413304
};
console.log("Employee id is:- ".concat(employee.emp_id, ","));
console.log("Employee Name is:-".concat(employee.emp_name));
console.log("Employee salary is:-".concat(employee.emp_salary));
console.log("Employee city is:-".concat(employee.emp_city));
console.log("Employee pinCode is:-".concat(employee.emp_pin_code));
console.log("==================================================");
var emp_id = employee.emp_id, emp_name = employee.emp_name, emp_salary = employee.emp_salary, emp_city = employee.emp_city, emp_pin_code = employee.emp_pin_code;
console.log("==============Object Destructuring===========");
console.log("Employee id is:- ".concat(emp_id, ","));
console.log("Employee Name is:-".concat(emp_name));
console.log("Employee salary is:-".concat(emp_salary));
console.log("Employee city is:-".concat(emp_city));
console.log("Employee pinCode is:-".concat(emp_pin_code));
console.log("======object traversing using for in loop=================");
for (var key in employee) {
    {
        var element = employee[key];
        console.log(element);
    }
}
