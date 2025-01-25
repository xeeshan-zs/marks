const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
});

// Import PapaParse (if using a bundler like Webpack or ES modules, otherwise include it with a <script> tag)
// const Papa = require('papaparse'); // Uncomment if needed for Node.js or ES Module environments

const loadEventsFromCSV = async () => {
    try {
        // Fetch the CSV file
        const response = await fetch('../assets/notifications.txt');
        const csvData = await response.text();

        // Parse the CSV file using PapaParse
        const parsedData = Papa.parse(csvData, {
            header: true, // Use the first row for column headers
            skipEmptyLines: true, // Skip empty rows
        });

        const events = parsedData.data;

        // Get the container to display events
        const eventsContainer = document.getElementById('events-container');
        eventsContainer.innerHTML = ''; // Clear existing content

        // Iterate over the parsed data and create event cards
        events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card');
            eventCard.innerHTML = `
                <div class="event-title">${event.Title || 'No Title'}</div>
                <div class="event-date">${event.Date || 'No Date'}</div>
                <div class="event-location">${event.Location || 'No Location'}</div>
                <div class="event-description">${event.Description || 'No Description'}</div>
            `;
            eventsContainer.appendChild(eventCard);
        });
    } catch (error) {
        console.error('Error loading events:', error);
    }
};

// Call the function to load events
loadEventsFromCSV();