const studentResults = [
    {
        rollNumber: "CS-123",
        cnic: "12345-6789012-3",
        name: "Muhammad Shayan Sarfraz",
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS11c2VyIj48cGF0aCBkPSJNMTkgMjF2LTJhNCA0IDAgMCAwLTQtNEg5YTQgNCAwIDAgMC00IDR2MiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iNyIgcj0iNCIvPjwvc3ZnPg==",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 90 },
            { subject: "Calculus and Analytical Geometry", marks: 85 },
            { subject: "Object Oriented Programming (Lab)", marks: 88 },
            { subject: "Object Oriented Programming", marks: 92 },
            { subject: "Expository Writing", marks: 80 },
            { subject: "Accounting Fundamentals", marks: 78 },
            { subject: "Discrete Structures", marks: 89 },
            { subject: "Civics & Community Engagement", marks: 87 },
        ]
    },
    // Add more students as needed
];

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

function showResult() {
    const rollNumber = document.getElementById("rollNumber").value.trim();
    const cnic = document.getElementById("cnic").value.trim();
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

    const student = studentResults.find(
        s => s.rollNumber === rollNumber && s.cnic === cnic
    );

    if (student) {
        studentImage.src = student.image;
        studentName.textContent = student.name;
        studentRoll.textContent = student.rollNumber;

        student.subjects.forEach((subject, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${index + 1}</td>
            <td>${subject.subject}</td>
            <td>${subject.marks}</td>
            <td>100</td>
          `;
            resultTable.appendChild(row);
        });
        resultContainer.style.display = "block";
        printBtn.style.display = "block";
    } else {
        errorMessage.textContent = "No result found for the given Roll Number and CNIC.";
    }
}

function printResult() {
    window.print();
}