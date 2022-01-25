'use strict';

function EmployeesInfo(employeeId, fullName, department, level
    , salary) {

    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = `./image/employee-cartoon.png`;
    this.salary = salary;

}
 EmployeesInfo.prototype.salaries = function () {

    
   let salary=this.salary;
   let tax=(salary)*(7.5/100);



    return (salary-tax); 

}
EmployeesInfo.prototype.render=function(){
    
document.write(` <p> ${this.fullName}     &nbsp &nbsp    ${this.salary} </p>  <br>` )



}
const employee1 = new EmployeesInfo(1000, 'Ghazi Samer', 'Administration', 'Senior', 1800);
employee1.render();
const employee2 = new EmployeesInfo(1001, 'Lana Ali', 'Finance', 'Senior', 1900);
employee2.render();
const employee3 = new EmployeesInfo(1002, 'Tamara Ayoub', 'Marketing', 'Senior', 1850);
employee3.render();
const employee4 = new EmployeesInfo(1003, 'Safi Walid', 'Administration', 'Mid-Senior', 1450);
employee4.render()
const employee5 = new EmployeesInfo(1004, 'Omar Zaid', 'Development', 'Senior', 1700);
employee5.render()
const employee6 = new EmployeesInfo(1005, 'Rana Saleh', 'Development', 'Junior', 800);
employee6.render()
const employee7 = new EmployeesInfo(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', 1200);
employee7.render()

    console.table(employee1)
    console.log("the net salary for "+employee1.fullName +" is = "+employee1.salaries())
    console.log("the net salary for "+employee2.fullName +" is = "+employee2.salaries())
    console.log("the net salary for "+employee3.fullName +" is = "+employee3.salaries())
    console.log("the net salary for "+employee4.fullName +" is = "+employee4.salaries())
    console.log("the net salary for "+employee5.fullName +" is = "+employee5.salaries())
    console.log("the net salary for "+employee6.fullName +" is = "+employee6.salaries())
    console.log("the net salary for "+employee7.fullName +" is = "+employee7.salaries())
    

