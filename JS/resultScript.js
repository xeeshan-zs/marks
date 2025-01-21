function showResult() {
    const rollNumber = document.getElementById("rollNumber").value.trim();
    const cnic = document.getElementById("cnic").value.trim();
    const errorMessage = document.getElementById("errorMessage");
    const resultContainer = document.getElementById("result");
    const resultTable = document.getElementById("resultTable");
    const studentImage = document.getElementById("studentImage"); // Student Image Element
    const studentName = document.getElementById("studentName");
    const studentRoll = document.getElementById("studentRoll");
    const printBtn = document.getElementById("printBtn");

    errorMessage.textContent = "";
    resultContainer.style.display = "none";
    printBtn.style.display = "none";
    resultTable.innerHTML = ""; // Clear previous table contents

    // Load the Excel file (from the assets folder)
    fetch('../assets/results.xlsx')
        .then(response => response.arrayBuffer())
        .then(data => {
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];

            // Convert the sheet into JSON
            const students = XLSX.utils.sheet_to_json(sheet, { header: 1 });

            // Loop through the rows to find a match for both roll number and CNIC
            let found = false;
            for (let i = 1; i < students.length; i++) {
                const student = students[i];

                // Get roll number and CNIC from the sheet
                const rollNumberFromSheet = student[1] ? student[1].toString().trim() : ''; // Roll number is in column 1 (index 0)
                const cnicFromSheet = student[16] ? student[16].toString().trim() : ''; // CNIC is in column 17 (index 16)

                // Normalize the roll number (e.g., extract numeric part from CS-345)
                const normalizedRollNumber = rollNumberFromSheet.replace(/\D/g, '').trim();
                const normalizedInputRoll = rollNumber.replace(/\D/g, '').trim();

                // Check if both roll number and CNIC match
                if (normalizedRollNumber === normalizedInputRoll && cnicFromSheet === cnic) {
                    // Display the result if matched
                    studentName.textContent = student[2]; // Student Name
                    studentRoll.textContent = student[1]; // Roll Number

                    // Load the student image based on roll number
                    const imageUrl = `../assets/images/students/${normalizedRollNumber}.jpg`; // Image URL formed from normalized roll number
                    studentImage.src = imageUrl;

                    // Loop through subjects (columns 3 to 11)
                    let totalMarks = 0; // To accumulate total marks
                    for (let j = 3; j <= 10; j++) { // Ensure to loop correctly from subjects 1 to 8 (index 3 to 10)
                        const row = document.createElement("tr");
                        const marksObtained = student[j] || 0; // If no marks, default to 0
                        totalMarks += marksObtained;

                        row.innerHTML = ` 
                            <td>${j - 2}</td>
                            <td>${students[0][j]}</td>
                            <td>${marksObtained}</td>
                            <td>100</td>
                        `;
                        resultTable.appendChild(row);
                    }

                    // Add the Total row (index 11 should be the total column)
                    const totalRow = document.createElement("tr");
                    totalRow.innerHTML = ` 
                        <td></td>
                        <td>Total</td>
                        <td>${totalMarks}</td>
                        <td>800</td>
                    `;
                    resultTable.appendChild(totalRow);

                    // Now map the correct values for Percentage, SGPA, CGPA, and Remarks
                    const percentage = student[12] || 'N/A'; // Assuming percentage is in column 12
                    const sgpa = student[13] || 'N/A'; // Assuming SGPA is in column 13
                    const cgpa = student[14] || 'N/A'; // Assuming CGPA is in column 14
                    const remarks = student[15] || 'N/A'; // Assuming Remarks is in column 15

                    // Add the extra row below the Total row with Percentage, SGPA, CGPA, and Remarks
                    const percentageRow = document.createElement("tr");
                    percentageRow.innerHTML = ` 
                        <td></td>
                        <td>Percentage</td>
                        <td>${percentage}%</td> <!-- Added percentage sign here -->
                        <td></td>
                    `;
                    resultTable.appendChild(percentageRow);

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

                    // Show the result container and print button
                    resultContainer.style.display = "block";
                    printBtn.style.display = "block";
                    found = true;
                    break;
                }
            }

            // If no student is found, show error
            if (!found) {
                errorMessage.textContent = "No result found for the given Roll Number and CNIC.";
            }
        })
        .catch(error => {
            errorMessage.textContent = "Error loading the student data.";
            console.error(error);
        });
}
