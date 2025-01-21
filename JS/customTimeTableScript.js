const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
});

const timetables = {
    "CS2B": {
        department: "TIME TABLE DEPARTMENT OF COMPUTER SCIENCE",
        schedule: [
            ["CS-II-B", "1st", "OOP-LAB\nLAB-1\nShahmin Sharafat", "Object Oriented Programming\n29-S\nShahmin Sharafat", "Accounting Fundamentals\n29-S\nSaba Iqbal", "Discrete Structures\n29-S\nNasir Ghaffar", "Expository Writing\n29-S\nSadia Rafique"],
            ["CS-II-B", "2nd", "Calculus\n30-S\nJannat ul Firdous", "Civics & Community Engagement\n29-S\nDr. M Irfan", "Pre-Math 2\n29-S\nDr. Nadeem Azhar", "", "Pre-Math 2\n33-S\nDr. Nadeem Azhar"]
        ]
    },
    "ENG1A": {
        department: "DEPARTMENT OF ENGLISH",
        schedule: [
            ["ENG-I-A", "1st", "Introduction to Literature", "Creative Writing", "Grammar Fundamentals", "Shakespeare Studies", "Academic Writing"],
            ["ENG-I-A", "2nd", "World Literature", "Critical Thinking", "Poetry Workshop", "Modern Drama", "Research Methods"]
        ]
    }, "SE1A": {
        department: "TIME TABLE DEPARTMENT OF SOFTWARE ENGINEERING",
        schedule: [
            ["SE-I-A", "1st", "Maths\n9:00-9:50\nDr. Smith", "Programming\n9:00-9:50\nDr. Allen", "Databases\n9:00-9:50\nDr. Jones", "Networking\n9:00-9:50\nDr. Green", "Software Design\n9:00-9:50\nDr. White"],
            ["SE-I-A", "2nd", "Physics\n10:00-10:50\nDr. Brown", "Algorithms\n10:00-10:50\nDr. Lee", "OS\n10:00-10:50\nDr. Clark", "AI\n10:00-10:50\nDr. Adams", "Ethics\n10:00-10:50\nDr. Taylor"],
            ["SE-I-A", "3rd", "Cybersecurity\n11:00-11:50\nDr. Wilson", "Project Mgmt\n11:00-11:50\nDr. King", "Data Mining\n11:00-11:50\nDr. Morgan", "Compilers\n11:00-11:50\nDr. Evans", "Software Testing\n11:00-11:50\nDr. Carter"],
            ["SE-I-A", "4th", "HCI\n1:00-1:50\nDr. Bell", "Big Data\n1:00-1:50\nDr. Young", "IoT\n1:00-1:50\nDr. Walker", "Blockchain\n1:00-1:50\nDr. Hall", "Data Analytics\n1:00-1:50\nDr. Scott"],
            ["SE-I-A", "5th", "Cyber Laws\n2:00-2:50\nDr. Hill", "Cloud Computing\n2:00-2:50\nDr. Green", "Web Dev\n2:00-2:50\nDr. Lee", "Mobile Dev\n2:00-2:50\nDr. White", "Research\n2:00-2:50\nDr. Adams"]
        ]
    }
};

const confirmBtn = document.getElementById("confirm-btn");
const passcodeInput = document.getElementById("passcode");
const timetableContainer = document.getElementById("timetable-container");
const departmentHeading = document.getElementById("department-heading");
const timetableBody = document.querySelector("#timetable tbody");

confirmBtn.addEventListener("click", () => {
    const passcode = passcodeInput.value.trim();
    if (timetables[passcode]) {
        const { department, schedule } = timetables[passcode];

        // Update department heading
        departmentHeading.textContent = department;

        // Clear previous timetable rows
        timetableBody.innerHTML = "";

        // Populate the timetable based on the passcode
        schedule.forEach(row => {
            const tr = document.createElement("tr");
            row.forEach(cell => {
                const td = document.createElement("td");
                td.textContent = cell;
                tr.appendChild(td);
            });
            timetableBody.appendChild(tr);
        });

        // Show the timetable container
        timetableContainer.classList.remove("hidden");
    } else {
        alert("Invalid passcode. Please try again.");
        timetableContainer.classList.add("hidden");
    }
});