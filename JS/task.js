async function loadTasks() {
    try {
        // Fetch Excel file
        const response = await fetch('../assets/task.xlsx');

        const arrayBuffer = await response.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });

        // Get the "Tasks" sheet
        const sheet = workbook.Sheets['Tasks'];
        const tasks = XLSX.utils.sheet_to_json(sheet);

        const tasksContainer = document.getElementById('tasks-container');
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

        // Clear existing content
        tasksContainer.innerHTML = '';

        // Create cards for each day
        days.forEach(day => {
            const dayTasks = tasks.filter(task => task.Day === day);

            const dayCard = document.createElement('div');
            dayCard.className = 'day-card';

            const dayHeader = document.createElement('div');
            dayHeader.className = 'day-header';
            dayHeader.textContent = day;
            dayCard.appendChild(dayHeader);

            // Add tasks for this day
            dayTasks.forEach(task => {
                const taskItem = document.createElement('div');
                taskItem.className = 'task-item';
                if (task.Completed) {
                    taskItem.classList.add('task-completed');
                }

                taskItem.innerHTML = `
                            <input type="checkbox" class="task-checkbox" ${task.Completed ? 'checked' : ''}>
                            <div class="task-content">
                                <div class="task-title">${task.Title}</div>
                                <div class="task-due">${task.DueTime || '-'}</div>
                            </div>
                        `;

                dayCard.appendChild(taskItem);
            });

            tasksContainer.appendChild(dayCard);
        });

        // Add checkbox event listeners
        document.querySelectorAll('.task-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                const taskItem = this.closest('.task-item');
                if (this.checked) {
                    taskItem.classList.add('task-completed');
                } else {
                    taskItem.classList.remove('task-completed');
                }
            });
        });

    } catch (error) {
        console.error('Error loading tasks:', error);
        document.getElementById('tasks-container').innerHTML = '<p>Error loading tasks. Please make sure result.xlsx exists and has a "Tasks" sheet.</p>';
    }
}

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
});

// Load tasks when page loads
window.addEventListener('load', loadTasks);