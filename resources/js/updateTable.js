
import {classArray, grades, points} from "./classArray.js";

const classInputs = Array.from(document.getElementsByClassName('CLASS'));
const gradeInputs = Array.from(document.getElementsByClassName('grade'));
//console.log(classInputs);

function inClassArray (className) {
    let bool = false;
    let theOne;
    classArray.forEach(certainClass => {
        //console.log(className.trim());
        //console.log(certainClass.name);
        if (certainClass.name === className.trim()) {
            bool = true;
            theOne = certainClass;
        }
    })
    return {bool, theOne};
}

function setGpaSection(event){
    const row = event.target.parentElement.parentElement;
    let gpaSection = row.querySelector('.gpaSection');
    let grade = row.querySelector('.grade');
    let index = grades.indexOf(grade.value);
    const type = row.querySelector('.typeSelector').value;
    let add = 0;
    if (type === "AP") {
        add++;
    } else if (type === "Honors"){
        add+=0.5;
    } else if (type === "Flex"){
        grade.value = "nil";
        gpaSection.innerHTML = "---";
        return
    }

    gpaSection.innerHTML = points[index]+add;

}

function updateTable(event) {
    const academic = event.target.value;
    if (inClassArray(academic).bool) {
        const classObj = inClassArray(academic).theOne;
        const classType = classObj.type;
        const row = event.target.parentElement.parentElement;
        let typeSelector = row.querySelector('.typeSelector');
        typeSelector.value = classType;

        setGpaSection(event)
        console.log(row.id);

    }

}

for (let classInput of classInputs) {
    classInput.addEventListener('blur', updateTable);
}
for (let gradeInput of gradeInputs){
    gradeInput.addEventListener('blur', setGpaSection);
}
console.log(grades);