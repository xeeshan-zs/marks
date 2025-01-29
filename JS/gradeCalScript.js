
let currentRows = 0;
const MAX_ROWS = 12;

function getGradeAndPoints(marks) {
    if (marks >= 90) return { grade: 'A+', points: 4.0 };
    if (marks >= 80 && marks < 90) return { grade: 'A', points: 4.0 };
    if (marks >= 75 && marks < 80) return { grade: 'B+', points: 3.50 };
    if (marks >= 70 && marks < 75) return { grade: 'B', points: 3.00 };
    if (marks >= 65 && marks < 70) return { grade: 'C+', points: 2.50 };
    if (marks >= 60 && marks < 65) return { grade: 'C', points: 2.00 };
    if (marks >= 55 && marks < 60) return { grade: 'D+', points: 1.50 };
    if (marks >= 50 && marks < 55) return { grade: 'D', points: 1.00 };
    if (marks < 50) return { grade: 'F', points: 0.0 };
    return { grade: '', points: 0.0 };
}

function updateRowCalculations(row) {
    const marks = parseFloat(row.querySelector('.marks').value) || 0;
    const creditHours = parseFloat(row.querySelector('.credit-hours').value) || 0;

    const { grade, points } = getGradeAndPoints(marks);

    row.querySelector('.grade').value = grade;
    row.querySelector('.points').value = points;

    const gradePoints = points * creditHours;
    row.querySelector('.grade-points').value = gradePoints.toFixed(2);

    if (row === document.querySelector('#gradesTableBody tr:last-child') &&
        (marks || creditHours) && currentRows < MAX_ROWS) {
        addNewRow();
    }
}

function addNewRow() {
    const tbody = document.getElementById('gradesTableBody');
    const row = document.createElement('tr');
    currentRows++;
    row.innerHTML = `
                <td>${currentRows}</td>
                <td><input type="text" class="subject-name" placeholder="Subject ${currentRows}"></td>
                <td><input type="number" class="marks" min="0" max="100" placeholder="0-100" oninput="updateRowCalculations(this.closest('tr'))"></td>
                <td><input type="text" class="grade" readonly></td>
                <td><input type="text" class="points" readonly></td>
                <td><input type="number" class="credit-hours" min="0" placeholder="Hours" oninput="updateRowCalculations(this.closest('tr'))"></td>
                <td><input type="text" class="grade-points" readonly></td>
            `;
    tbody.appendChild(row);
}

function initializeTable() {
    const tbody = document.getElementById('gradesTableBody');
    tbody.innerHTML = '';
    currentRows = 0;

    for (let i = 0; i < 6; i++) {
        addNewRow();
    }
}

function calculate() {
    let sumGradePoints = 0;
    let sumCreditHours = 0;

    document.querySelectorAll('#gradesTableBody tr').forEach(row => {
        const gradePoints = parseFloat(row.querySelector('.grade-points').value) || 0;
        const creditHours = parseFloat(row.querySelector('.credit-hours').value) || 0;

        sumGradePoints += gradePoints;
        sumCreditHours += creditHours;
    });

    document.getElementById('creditHoursSum').value = sumCreditHours;
    document.getElementById('gradePointsSum').value = sumGradePoints.toFixed(3);

    const semesterGpa = sumCreditHours ? (sumGradePoints / sumCreditHours) : 0;
    document.getElementById('semesterGpa').value = semesterGpa.toFixed(4);

    const currentGpa = parseFloat(document.getElementById('currentGpa').value) || 0;
    const totalCreditHours = parseFloat(document.getElementById('totalCreditHours').value) || 0;

    if (currentGpa && totalCreditHours) {
        const cgpa = ((currentGpa * totalCreditHours) + sumGradePoints) / (totalCreditHours + sumCreditHours);
        document.getElementById('cgpa').value = cgpa.toFixed(3);
    }
}

function resetCalculator() {
    document.querySelectorAll('input').forEach(input => input.value = '');
    initializeTable();
}

window.onload = initializeTable;