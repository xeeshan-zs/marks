
let currentRows = 0;
const MAX_ROWS = 12;

function getGradeAndPoints(marks) {
    if (marks >= 90 && marks <= 100) return { grade: 'A1', points: 4.0 };
    if (marks >= 80 && marks <= 89) return { grade: 'A2', points: 4.0 };
    if (marks >= 77 && marks <= 79) return { grade: 'A3', points: 3.66 };
    if (marks >= 74 && marks <= 76) return { grade: 'B1', points: 3.33 };
    if (marks >= 70 && marks <= 73) return { grade: 'B2', points: 3.0 };
    if (marks >= 67 && marks <= 69) return { grade: 'B3', points: 2.66 };
    if (marks >= 64 && marks <= 66) return { grade: 'C1', points: 2.33 };
    if (marks >= 60 && marks <= 63) return { grade: 'C2', points: 2.0 };
    if (marks >= 50 && marks <= 59) return { grade: 'D', points: 1.5 };
    if (marks >= 0 && marks <= 49) return { grade: 'F', points: 0.0 };
    return { grade: '', points: 0 };
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