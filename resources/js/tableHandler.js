
const tbody = document.getElementById('gpaTBody');

import { classArray } from "./classArray.js";


const options = ["A", "B", "C"];
const additions = ["+", "","-"];
const types = ["CP","Honors","AP","Flex"];

function createDataList (arr, id) {
    let dataList  = document.createElement('datalist');
    dataList.id = id;
    for (let Class of arr){
        let option = document.createElement('option');
        option.value = Class.name;
        option.textContent = Class.name;
        dataList.appendChild(option);
    }
    document.body.appendChild(dataList);
}


function classSelector(i){
    const dropDown = document.createElement('input');
    dropDown.setAttribute('name', 'dropDown');
    dropDown.setAttribute('list', 'dropDown-list');
    dropDown.setAttribute('type', 'text')
    dropDown.style.width = "98%";
    dropDown.style.height = "97%";
    dropDown.style.backgroundColor = "#669965";
    dropDown.setAttribute('placeholder', `Period: ${i+1}`);
    dropDown.className ='CLASS';

    return dropDown;
}
function gradeSelector(){
    const select = document.createElement('select');
    select.setAttribute('name', 'grade');
    select.style.width = "98%";
    select.style.height = "97%";
    select.style.backgroundColor = "#669965";
    select.className = 'grade';
    for (let letter of options) {
        for (let char of additions) {
            let option = document.createElement('option');
            option.value = letter+char;
            option.textContent = letter+char;
            select.appendChild(option);
        }
    }

    let d = document.createElement('option');
    d.value = "D";
    d.textContent = "D";
    select.appendChild(d);

    let f = document.createElement('option');
    f.value = "F";
    f.textContent = "F";
    select.appendChild(f);
    return select;

}

function typeSelector(){
    const select = document.createElement('select');
    select.setAttribute('name', 'type');
    select.style.width = "98%";
    select.style.backgroundColor = "#669965";
    select.style.height = "97%";
    select.className = "typeSelector";
    for (let type of types) {
        let option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        select.appendChild(option);
    }
    return select;
}

function tdBaser(td){
    td.style.backgroundColor = "#669965";
    td.className = "gpaSection";
    td.innerText = "Blank";
    return td;
}

function tdMaker (id,i){
    let td = document.createElement('td');
    switch(id){
        case 0:  td.appendChild(classSelector(i)); break;
        case 1:  td.appendChild(typeSelector()); break;
        case 2:  td.appendChild(gradeSelector()); break;
        case 3:  td = tdBaser(td) ; break;
    }
    return td;
}
function addRow(x){
    const tableRow = document.createElement('tr');
    for (let i = 0; i < 4; i++){
        tableRow.appendChild(tdMaker(i,x));
    }
    return tableRow;

}

function createTable() {
    createDataList(classArray, 'dropDown-list');
    for  (let i = 0; i < 8; i++) {
        let row = addRow(i);
        row.id = (i+1).toString();
        tbody.appendChild(row);
    }
}
console.log("start");

createTable();