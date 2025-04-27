const button = document.getElementById('grade');

button.onclick = function(){
    console.log("hit");
    let rows = [];
    let grades = [];
    let unweightedGrades = [];
    for (let i = 1; i <= 8; i++){
        rows.push(document.getElementById(i.toString()));
    }
    for (let row of rows) {
        console.log(row)
        let gradeValue = row.querySelector('.gpaSection').innerHTML;
        gradeValue = Number(gradeValue);
        gradeValue && grades.push(gradeValue);

        let grade = row.querySelector('.grade').value;
        let letter = grade[0];
        switch (letter) {
            case "A": unweightedGrades.push(4.00); break;
            case "B": unweightedGrades.push(3.00); break;
            case "C": unweightedGrades.push(2.00); break;
            case "D": unweightedGrades.push(1.00); break;
            case "F": unweightedGrades.push(0.00); break;
        }

    }
    console.log(grades);
    const tot = grades.reduce((a, b) => a + b);
    console.log(tot);


    const weightedGPA = tot/grades.length;
    const weightedGPATD = document.getElementById('weightedGPA');
    weightedGPATD.innerText = "Weighted GPA: "+Math.round(weightedGPA*100)/100;

    const unweightedGPA = unweightedGrades.reduce((a, b) => a + b)/unweightedGrades.length;
    const unweightedGPATD = document.getElementById('unweightedGPA');
    unweightedGPATD.innerText = "Unweighted GPA: "+Math.round(unweightedGPA*1000)/1000;
}