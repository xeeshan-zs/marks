const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
});

async function loadAssignmentsFromCsv() {
    try {
        // Fetch the CSV file
        const response = await fetch('../assets/assignment.txt');
        const csvText = await response.text();

        // Parse the CSV data using Papa.parse
        const { data, errors } = Papa.parse(csvText, {
            header: true, // Treat the first row as headers
            skipEmptyLines: true, // Ignore empty rows
        });

        // Handle any parsing errors
        if (errors.length > 0) {
            console.error('Errors occurred while parsing the CSV:', errors);
            return;
        }

        // Dynamically populate the assignments
        const container = document.getElementById('submission-container');
        data.forEach(assignment => {
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

// Call the function when the page loads
loadAssignmentsFromCsv();