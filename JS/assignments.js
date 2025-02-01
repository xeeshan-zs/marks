const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
});

async function loadAssignmentsFromCsv() {
    try {
        // Add error logging for debugging
        console.log('Fetching data...');

        const response = await fetch('https://raw.githubusercontent.com/xeeshan-zs/idea/refs/heads/main/data.txt', {
            method: 'GET',
            headers: {
                'Accept': 'text/plain',
                'Cache-Control': 'no-cache'
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const csvText = await response.text();
        console.log('Received data:', csvText); // Debug log

        // Check if we actually got data
        if (!csvText) {
            throw new Error('No data received from the server');
        }

        // Parse CSV with error handling
        const parseResult = Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true,
            error: (error) => {
                console.error('Papa Parse Error:', error);
            }
        });

        if (!parseResult.data || parseResult.data.length === 0) {
            throw new Error('No valid data found in CSV');
        }

        // Clear existing content
        const container = document.getElementById('submission-container');
        container.innerHTML = '';

        // Populate with new data
        parseResult.data.forEach(assignment => {
            if (!assignment.Title || !assignment.Link) {
                console.warn('Skipping invalid assignment:', assignment);
                return;
            }

            const card = document.createElement('div');
            card.classList.add('submission-card');

            const title = document.createElement('div');
            title.classList.add('submission-title');
            title.textContent = assignment.Title;

            const link = document.createElement('a');
            link.classList.add('submit-a');
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
            link.href = assignment.Link;

            // Creating the SVG element
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('aria-hidden', 'true');
            svg.setAttribute('stroke', 'currentColor');
            svg.setAttribute('stroke-width', '2');
            svg.setAttribute('viewBox', '0 0 24 24');
            svg.setAttribute('fill', 'none');
            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

            const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path1.setAttribute('stroke-width', '2');
            path1.setAttribute('stroke', '#ffffff');
            path1.setAttribute('d', 'M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125');
            path1.setAttribute('stroke-linejoin', 'round');
            path1.setAttribute('stroke-linecap', 'round');

            const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path2.setAttribute('stroke-linejoin', 'round');
            path2.setAttribute('stroke-linecap', 'round');
            path2.setAttribute('stroke-width', '2');
            path2.setAttribute('stroke', '#ffffff');
            path2.setAttribute('d', 'M17 15V18M17 21V18M17 18H14M17 18H20');

            svg.appendChild(path1);
            svg.appendChild(path2);

            // Creating the text element
            const text = document.createTextNode('Submit');

            // Append the SVG and text to the link
            link.appendChild(svg);
            link.appendChild(text);

            card.appendChild(title);
            card.appendChild(link);
            container.appendChild(card);
        });

    } catch (error) {
        console.error('Error loading assignments:', error);
        // Display error to user
        const container = document.getElementById('submission-container');
        container.innerHTML = `<div class="error-message">Failed to load assignments. Error: ${error.message}</div>`;
    }
}

// Add event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    loadAssignmentsFromCsv();
});
