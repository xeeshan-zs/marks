document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('findButton').click();
    }
});
document.addEventListener('DOMContentLoaded', () => {
    handleClassChange(); // Set the initial visibility of elements
});
function handleClassChange() {
    const className = document.getElementById("className").value;
    const rollNumberGroup = document.getElementById("rollNumber").parentElement; // Get the parent div of rollNumber
    const cnicGroup = document.querySelector('.cnic-group');

    // Hide the Roll Number group if no class is selected
    if (className === "") {
        rollNumberGroup.classList.add('hidden'); // Hide Roll Number field and label
    } else {
        rollNumberGroup.classList.remove('hidden'); // Show Roll Number field and label
    }

    // Adjust roll number placeholder and format for specific classes
    if (className === "1-A" || className === "1-B") {
        const rollNumberInput = document.getElementById("rollNumber");
        rollNumberInput.placeholder = "L-BSCS1234567";
        rollNumberInput.value = "L-BSCS"; // Start with prefix for 1-A and 1-B
        rollNumberInput.pattern = "^L-BSCS\\d{7}$"; // Pattern for "L-BSCS" format
    } else if (className !== "") {
        const rollNumberInput = document.getElementById("rollNumber");
        rollNumberInput.placeholder = "CS-000";
        rollNumberInput.value = "CS-"; // Start with prefix for other classes
        rollNumberInput.pattern = "^CS-\\d{3}$"; // Pattern for "CS-" format
    }

    // Show CNIC group only if the selected class is "2-B"
    if (className === "2-B") {
        cnicGroup.classList.remove('hidden'); // Show CNIC group
    } else {
        cnicGroup.classList.add('hidden'); // Hide CNIC group
    }
}

function adjustRollNumberFormat() {
    const rollNumberInput = document.getElementById("rollNumber");
    const className = document.getElementById("className").value;

    if (className === "1-A" || className === "1-B") {
        // Ensure roll number always starts with "L-BSCS"
        const prefix = "L-BSCS";
        const inputValue = rollNumberInput.value;

        // Remove any character that isn't a number after "L-BSCS"
        const inputWithoutPrefix = inputValue.replace(prefix, '').replace(/\D/g, '');

        // Limit to 7 digits after the prefix
        const normalizedRollNumber = inputWithoutPrefix.slice(0, 7);

        // Set the value, combining prefix with normalized digits
        rollNumberInput.value = `${prefix}${normalizedRollNumber}`;
    } else {
        // Logic for other classes
        rollNumberInput.value = rollNumberInput.value.startsWith("CS-")
            ? rollNumberInput.value
            : "CS-" + rollNumberInput.value.replace(/\D/g, '').slice(0, 3);
    }
}

function showResult() {
    const rollNumber = document.getElementById("rollNumber").value.trim();
    const cnic = document.getElementById("cnic").value.trim();
    const className = document.getElementById("className").value.trim();
    const errorMessage = document.getElementById("errorMessage");
    const resultContainer = document.getElementById("result");
    const resultTable = document.getElementById("resultTable");
    const studentImage = document.getElementById("studentImage");
    const studentName = document.getElementById("studentName");
    const studentRoll = document.getElementById("studentRoll");
    const printBtn = document.getElementById("printBtn");

    errorMessage.textContent = "";
    resultContainer.style.display = "none";
    printBtn.style.display = "none";
    resultTable.innerHTML = ""; // Clear previous table contents

    if (!rollNumber || (className === "2-B" && !cnic)) {
        errorMessage.textContent = "Please provide all required inputs.";
        return;
    }

    // Load the Excel file
    fetch('../assets/results.xlsx')
        .then(response => response.arrayBuffer())
        .then(data => {
            const workbook = XLSX.read(data, { type: 'array' });

            if (!workbook.SheetNames.includes(className)) {
                errorMessage.textContent = "Invalid class name selected.";
                return;
            }

            const sheet = workbook.Sheets[className];
            const students = XLSX.utils.sheet_to_json(sheet, { header: 1 });

            let found = false;

            for (let i = 1; i < students.length; i++) {
                const student = students[i];
                const rollNumberFromSheet = student[1] ? student[1].toString().trim() : '';
                const cnicFromSheet = student[16] ? student[16].toString().trim() : '';

                // Match roll number and CNIC (for "2-B") or roll number only (for others)
                if (
                    (className === "2-B" && rollNumber === rollNumberFromSheet && cnic === cnicFromSheet) ||
                    (className !== "2-B" && rollNumber === rollNumberFromSheet)
                ) {
                    found = true;
                    displayResult(student, students, rollNumber);
                    break;
                }
            }

            if (!found) {
                errorMessage.textContent =
                    className === "2-B"
                        ? "No result found for the given Roll Number and CNIC."
                        : "No result found for the given Roll Number.";
            }
        })
        .catch(error => {
            errorMessage.textContent = "Error loading the student data.";
            console.error(error);
        });
}

function displayResult(student, students, normalizedRollNumber) {
    const resultContainer = document.getElementById("result");
    const resultTable = document.getElementById("resultTable");
    const studentImage = document.getElementById("studentImage");
    const studentName = document.getElementById("studentName");
    const studentRoll = document.getElementById("studentRoll");
    const printBtn = document.getElementById("printBtn");

    studentName.textContent = student[2]; // Student Name
    studentRoll.textContent = student[1]; // Roll Number

    // Dynamically determine the boundary for subjects till "Total"
    const firstRow = students[0]; // Header row
    let totalIndex = firstRow.indexOf("Total"); // Find the index of "Total"
    if (totalIndex === -1) totalIndex = student.length; // If "Total" is not found, use full range

    const imageUrl = `../assets/images/students/${normalizedRollNumber}.jpg`;
    studentImage.src = imageUrl;

    let totalMarks = 0;

    // Iterate only through subject columns (from index 3 to the column before "Total")
    for (let j = 3; j < totalIndex; j++) {
        const row = document.createElement("tr");
        const marksObtained = student[j] || 0; // Handle cases where marks are missing
        totalMarks += marksObtained;

        row.innerHTML = `
            <td>${j - 2}</td>
            <td>${students[0][j]}</td>
            <td>${marksObtained}</td>
            <td>100</td>
        `;
        resultTable.appendChild(row);
    }

    // Add the "Total" row
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
        <td></td>
        <td>Total</td>
        <td>${totalMarks}</td>
        <td>${(totalIndex - 3) * 100}</td>
    `;
    resultTable.appendChild(totalRow);

    // Parse percentage as-is and format to two decimal points if it's a number
    const percentageRaw = student[totalIndex + 1];
    const percentage = (!isNaN(parseFloat(percentageRaw)) && isFinite(percentageRaw))
        ? parseFloat(percentageRaw).toFixed(2)
        : 'N/A'; // Fallback to 'N/A' if percentage is not a valid number

    const percentageRow = document.createElement("tr");
    percentageRow.innerHTML = `
        <td></td>
        <td>Percentage</td>
        <td>${percentage}%</td>
        <td></td>
    `;
    resultTable.appendChild(percentageRow);

    const sgpa = student[totalIndex + 2] || 'N/A';
    const cgpa = student[totalIndex + 3] || 'N/A';
    const remarks = student[totalIndex + 4] || 'N/A';

    const sgpaRow = document.createElement("tr");
    sgpaRow.innerHTML = `
        <td></td>
        <td>SGPA</td>
        <td>${sgpa}</td>
        <td></td>
    `;
    resultTable.appendChild(sgpaRow);

    const cgpaRow = document.createElement("tr");
    cgpaRow.innerHTML = `
        <td></td>
        <td>CGPA</td>
        <td>${cgpa}</td>
        <td></td>
    `;
    resultTable.appendChild(cgpaRow);

    const remarksRow = document.createElement("tr");
    remarksRow.innerHTML = `
        <td></td>
        <td>Remarks</td>
        <td>${remarks}</td>
        <td></td>
    `;
    resultTable.appendChild(remarksRow);

    resultContainer.style.display = "block";
    printBtn.style.display = "block";
}


function printResult() {
    window.print();
}
function formatCNIC(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 0) {
        if (value.length <= 5) {
            input.value = value;
        } else if (value.length <= 12) {
            input.value = value.slice(0,5) + '-' + value.slice(5);
        } else {
            input.value = value.slice(0,5) + '-' + value.slice(5,12) + '-' + value.slice(12,13);
        }
    }
}
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme') ||
    (prefersDarkScheme.matches ? 'dark' : 'light');

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

