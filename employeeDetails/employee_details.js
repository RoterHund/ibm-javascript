// define an array of objects representing employees' records. 
// Each object contains several key-value pairs, 
// where each key represents a specific attribute of an employee, such as their ID, name, age, department, and salary.

const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    //... More employee records can be added here
  ];

 // Function to display all employees
 // The map method iterates through each employee in the employees array. 
 // For each employee, it constructs a string template literal 
 // The resulting array of constructed strings is joined into a single string using join(''). 
 // This concatenation merges all the HTML-formatted employee details into one continuous string without separators.
 function displayEmployees(){
 const allEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`).join('');
 console.log(allEmployees)
 document.getElementById('employeesDetails').innerHTML = allEmployees;
}

 function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: ${totalSalaries}`);
  }

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}