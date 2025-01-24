const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
});

async function loadAssignments() {
    try {
        const response = await fetch('../assets/assignment.xlsx');
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });

        // Assuming the first sheet contains the data
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Convert the sheet data to JSON
        const assignments = XLSX.utils.sheet_to_json(sheet);

        // Dynamically populate the assignments
        const container = document.getElementById('submission-container');
        assignments.forEach(assignment => {
            const card = document.createElement('div');
            card.classList.add('submission-card');

            const title = document.createElement('div');
            title.classList.add('submission-title');
            title.textContent = assignment.Title;

            const link = document.createElement('a');
            link.href = assignment.Link;
            link.classList.add('submission-link');
            link.target = '_blank';
            link.textContent = 'Submit Assignment';

            card.appendChild(title);
            card.appendChild(link);
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading assignments:', error);
    }
}

// Load assignments on page load
loadAssignments();