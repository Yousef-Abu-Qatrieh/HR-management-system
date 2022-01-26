'use strict';
let empForm = document.getElementById('empForm');
let empData = document.getElementById('empData');
let min = 0;
let max = 0;
let salary;
let tax = (7.5 / 100);
function EmployeesInfo(employeeId, fullName, department, level
    , salary) {

    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = `./image/employee-cartoon.png`;
    this.salary = salary;

}
EmployeesInfo.prototype.randomID = function () {
    this.employeeId = getRandomId(1000, 1999);
}

EmployeesInfo.prototype.salaries = function () {


    this.salary = randomSalary(this.level)


    this.salary = Math.floor((this.salary) * tax);

    return this.salary

}
function randomSalary(level) {
    if (level == "Senior") {
        min = 1500;
        max = 2000;
    } else if (level == "Mid-Senior") {

        min = 1000;
        max = 1500;
    } else if (level == "Junior") {
        min = 500;
        max = 1000;
    }

    return Math.floor(Math.random() * (max - min) + min);
}





EmployeesInfo.prototype.render = function () {
   
    let div = document.createElement('div');
    empData.appendChild(div);
    let img = document.createElement('img');
    img.setAttribute('src',this.imageUrl);
    div.appendChild(img);
    let h3 = document.createElement('h3');
  h3.textContent =`Name : ${this.fullName} -ID : ${this.employeeId} ` ;
     div.appendChild(h3);
     let p = document.createElement('p');
    div.appendChild(p);
    p.textContent=`Department : ${this.department} -Level : ${this.level} `;

    
    
   
    


    // document.write(` <p> ${this.fullName}     &nbsp &nbsp    ${randomSalary(this.level)} </p>  <br>`)



}
const employee1 = new EmployeesInfo(1000, 'Ghazi Samer', 'Administration', 'Senior', randomSalary(this.level));
employee1.render();
// const employee2 = new EmployeesInfo(1001, 'Lana Ali', 'Finance', 'Senior', randomSalary(this.level));
// employee2.render();
// const employee3 = new EmployeesInfo(1002, 'Tamara Ayoub', 'Marketing', 'Senior', randomSalary(this.level));
// employee3.render();
// const employee4 = new EmployeesInfo(1003, 'Safi Walid', 'Administration', 'Mid-Senior', randomSalary(this.level));
// employee4.render()
// const employee5 = new EmployeesInfo(1004, 'Omar Zaid', 'Development', 'Senior', randomSalary(this.level));
// employee5.render()
// const employee6 = new EmployeesInfo(1005, 'Rana Saleh', 'Development', 'Junior', randomSalary(this.level));
// employee6.render()
// const employee7 = new EmployeesInfo(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', randomSalary(this.level));
// employee7.render()

// console.table(employee1)
// console.log("the net tax salary for " + employee1.fullName + " is = " + employee1.salaries())
// console.log("the net tax salary for " + employee2.fullName + " is = " + employee2.salaries())
// console.log("the net tax salary for " + employee3.fullName + " is = " + employee3.salaries())
// console.log("the net tax salary for " + employee4.fullName + " is = " + employee4.salaries())
// console.log("the net tax salary for " + employee5.fullName + " is = " + employee5.salaries())
// console.log("the net tax salary for " + employee6.fullName + " is = " + employee6.salaries())
// console.log("the net tax salary for " + employee7.fullName + " is = " + employee7.salaries())

function employeeSubmit(event) {
    event.preventDefault();
    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let imageUrl= event.target.imageUrl.value;
    // console.log(`${fullName}  ${department}  ${level} ${imageUrl}  `);
    let newEmp = new EmployeesInfo( imageUrl, fullName,department,level);
    newEmp.randomID();
    newEmp.render();
}

function getRandomId(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

empForm.addEventListener('submit', employeeSubmit);