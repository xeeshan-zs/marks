document.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            document.getElementById('findButton').click();
        }
    });
    document.addEventListener('DOMContentLoaded', () => {
        handleClassChange();
    });
    function handleClassChange() {
        const className = document.getElementById("className").value;
        const rollNumberGroup = document.getElementById("rollNumber").parentElement;
        const cnicGroup = document.querySelector('.cnic-group');

        if (className === "") {
            rollNumberGroup.classList.add('hidden');
        } else {
            rollNumberGroup.classList.remove('hidden');
        }

        if (className === "1-A" || className === "1-B") {
            const rollNumberInput = document.getElementById("rollNumber");
            rollNumberInput.placeholder = "L-BSCS1234567";
            rollNumberInput.value = "L-BSCS";
            rollNumberInput.pattern = "^L-BSCS\\d{7}$";
        } else if (className !== "") {
            const rollNumberInput = document.getElementById("rollNumber");
            rollNumberInput.placeholder = "CS-000";
            rollNumberInput.value = "CS-";
            rollNumberInput.pattern = "^CS-\\d{3}$";
        }

        if (className === "2-B") {
            cnicGroup.classList.remove('hidden');
        } else {
            cnicGroup.classList.add('hidden');
        }
    }

    function adjustRollNumberFormat() {
        const rollNumberInput = document.getElementById("rollNumber");
        const className = document.getElementById("className").value;

        if (className === "1-A" || className === "1-B") {
            const prefix = "L-BSCS";
            const inputValue = rollNumberInput.value;
            const inputWithoutPrefix = inputValue.replace(prefix, '').replace(/\D/g, '');
            const normalizedRollNumber = inputWithoutPrefix.slice(0, 7);
            rollNumberInput.value = `${prefix}${normalizedRollNumber}`;
        } else {
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
        resultTable.innerHTML = "";

        if (!rollNumber || (className === "2-B" && !cnic)) {
            errorMessage.textContent = "Please provide all required inputs.";
            return;
        }

        fetch(`https://students.atrons.net/api/results?className=${encodeURIComponent(className)}`)

            .then(response => response.json())
            .then(students => {
                if (!Array.isArray(students) || students.length === 0) {
                    errorMessage.textContent = "Invalid class name selected or no data found.";
                    return;
                }

                let found = false;

                for (let i = 1; i < students.length; i++) {
                    const student = students[i];
                    const rollNumberFromSheet = student[1] ? student[1].toString().trim() : '';
                    const cnicFromSheet = student[16] ? student[16].toString().trim() : '';

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

        studentName.textContent = student[2];
        studentRoll.textContent = student[1];

        const firstRow = students[0];
        let totalIndex = firstRow.indexOf("Total");
        if (totalIndex === -1) totalIndex = student.length;

        const imageUrl = `../assets/images/students/${normalizedRollNumber}.jpg`;
        studentImage.src = imageUrl;

        studentImage.onerror = () => {
            studentImage.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXIiPjxwYXRoIGQ9Ik0xOSAyMXYtMmE0IDQgMCAwIDAtNC00SDlhNCA0IDAgMCAwLTQgNHYyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+PC9zdmc+';
        };

        let totalMarks = 0;

        for (let j = 3; j < totalIndex; j++) {
            const row = document.createElement("tr");
            const marksObtained = student[j] || 0;
            totalMarks += marksObtained;

            row.innerHTML = `
                <td>${j - 2}</td>
                <td>${students[0][j]}</td>
                <td>${marksObtained}</td>
                <td>100</td>
            `;
            resultTable.appendChild(row);
        }

        const totalRow = document.createElement("tr");
        totalRow.innerHTML = `
            <td></td>
            <td>Total</td>
            <td>${totalMarks}</td>
            <td>${(totalIndex - 3) * 100}</td>
        `;
        resultTable.appendChild(totalRow);

        const percentageRaw = student[totalIndex + 1];
        const percentage = (!isNaN(parseFloat(percentageRaw)) && isFinite(percentageRaw))
            ? parseFloat(percentageRaw).toFixed(2)
            : 'N/A';

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
        if (window.AndroidPrint) {
            window.AndroidPrint.printPage();
        } else {
            window.print();
        }
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