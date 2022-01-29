'use strict';
let allEmpInformation = [];
checkLocalAndPush()



function checkLocalAndPush() {
    if (allEmpInformation.length == 0) {
        let arr = readFromLocalS();
        if (arr.length != 0) {
            allEmpInformation = arr;
        }
    }
}


function readFromLocalS() {
    let jsonArr = localStorage.getItem('employeedata');
    let arr = JSON.parse(jsonArr);
    if (arr !== null) {
        return arr;
    } else {
        return [];
    }
}
