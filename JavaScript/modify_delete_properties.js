// Original object
const Employee = {
    name: "John",
    position: "Developer",
    salary: 50000,
};

// Update salary
Employee.salary = 60000;

// Add new property
Employee.departmentId = "D101";

// Delete position property
delete Employee.position;

// Print updated object
document.getElementById("output").textContent = JSON.stringify(Employee, null, 2);
