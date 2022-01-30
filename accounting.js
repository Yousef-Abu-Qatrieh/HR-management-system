"use strict";
let allEmpInformation = [];
checkLocalAndPush();

function checkLocalAndPush() {
  if (allEmpInformation.length == 0) {
    let arr = readFromLocalS();
    if (arr.length != 0) {
      allEmpInformation = arr;
    }
  }
}

function readFromLocalS() {
  let jsonArr = localStorage.getItem("employeedata");
  let arr = JSON.parse(jsonArr);
  if (arr !== null) {
    return arr;
  } else {
    return [];
  }
}
// <td id="administrationNumberOfEmployees"></td>
//                 <td id="administrationTotalSalary"></td>
//                 <td id="administrationAverage"></td>

function renderDepartmentData(departmentData, department) {
  let departmentRaw = document.getElementById(`${department}Raw`);
  let numberOfEmployeesCell = document.getElementById(
      
    `${department}NumberOfEmployees`
  );
  console.log (departmentRaw)
  numberOfEmployeesCell.textContent = "";
  numberOfEmployeesCell.textContent = departmentData.length;

  let totalSalaryCell = document.getElementById(
    `${department}TotalSalary`
  );
  totalSalaryCell.textContent = "";

  let totalSalary = 0;
  departmentData.map((data) => {
    totalSalary = totalSalary + data.salary;
  });
  totalSalaryCell.textContent = totalSalary;

  let averageCell = document.getElementById(`${department}Average`);
  averageCell.textContent =Math.round (totalSalary / (departmentData.length || 1));
}

function render() {
  allEmpInformation = readFromLocalS();
  if (allEmpInformation?.length) {
    let administrationData = allEmpInformation.filter(
      (data) => data?.department === "Administration"
    );
    let marketingData = allEmpInformation.filter(
      (data) => data?.department === "Marketing"
    );
    let developmentData = allEmpInformation.filter(
      (data) => data?.department === "Development"
    );
    let financeData = allEmpInformation.filter((data) => data?.department === "Finance");
    let totalData = allEmpInformation;

    renderDepartmentData(administrationData, "administration");
    renderDepartmentData(marketingData, "marketing");
    renderDepartmentData(developmentData, "development");
    renderDepartmentData(financeData, "finance");
    renderDepartmentData(totalData, "total");

    //# of employees ---- Total Salary --- Average
  }
}

render();

