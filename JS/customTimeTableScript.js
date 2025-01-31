const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
});

const confirmBtn = document.getElementById("confirm-btn");
const passcodeInput = document.getElementById("passcode");
const timetableContainer = document.getElementById("timetable-container");
const departmentHeading = document.getElementById("department-heading");
const timetableBody = document.querySelector("#timetable tbody");

let timetables = {};

// Modified function to handle merged cells
function processSheet(sheet) {
    const range = XLSX.utils.decode_range(sheet['!ref']);
    const merges = sheet['!merges'] || [];
    const data = [];

    // Initialize 2D array with proper dimensions
    for (let row = 0; row <= range.e.r; row++) {
        data[row] = new Array(range.e.c + 1).fill("");
    }

    // First pass: fill all cells
    Object.keys(sheet).forEach(cell => {
        if (cell[0] === '!') return;
        const addr = XLSX.utils.decode_cell(cell);
        data[addr.r][addr.c] = sheet[cell].v || "";
    });

    // Second pass: handle merged cells
    merges.forEach(merge => {
        const start = merge.s;
        const end = merge.e;
        const value = data[start.r][start.c];

        for (let row = start.r; row <= end.r; row++) {
            for (let col = start.c; col <= end.c; col++) {
                data[row][col] = value;
            }
        }
    });

    return data.filter(row => row.some(cell => cell !== ""));
}

fetch("../assets/timetable.xlsx")
    .then(response => response.arrayBuffer())
    .then(data => {
        const workbook = XLSX.read(data, { type: "array" });

        // Process each sheet
        workbook.SheetNames.forEach(sheetName => {
            const sheet = workbook.Sheets[sheetName];
            const processedData = processSheet(sheet);

            timetables[sheetName] = {
                department: sheetName,
                schedule: processedData
            };

            // Populate dropdown
            const option = document.createElement("option");
            option.value = sheetName;
            option.textContent = sheetName;
            passcodeInput.appendChild(option);
        });
    })
    .catch(error => {
        console.error("Error loading timetable:", error);
        // alert("Failed to load timetable file");
    });

confirmBtn.addEventListener("click", () => {
    const passcode = passcodeInput.value.trim();
    if (!timetables[passcode]) {
        alert("Invalid selection");
        return;
    }

    // Clear previous data
    timetableBody.innerHTML = "";
    departmentHeading.textContent = passcode;

    // Populate table
    timetables[passcode].schedule.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell || "";
            tr.appendChild(td);
        });
        timetableBody.appendChild(tr);
    });

    timetableContainer.classList.remove("hidden");
});
