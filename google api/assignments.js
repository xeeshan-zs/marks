const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        const root = document.documentElement;
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', newTheme);
    });

    async function loadAssignmentsFromSheet() {
        try {
            const response = await fetch('https://students.atrons.net/api/assignments');
            const data = await response.json();

            if (!Array.isArray(data)) {
                console.error('Invalid assignments data:', data);
                return;
            }

            const container = document.getElementById('submission-container');
            container.innerHTML = '';
            data.forEach(assignment => {
                const card = document.createElement('div');
                card.classList.add('submission-card');

                const title = document.createElement('div');
                title.classList.add('submission-title');
                title.textContent = assignment.Title; // Use the Title column

                const link = document.createElement('a');
                link.classList.add('submit-a');
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
                link.href = assignment.Links; // Use the Links column

                // SVG icon
                const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg.setAttribute('aria-hidden', 'true');
                svg.setAttribute('stroke', 'currentColor');
                svg.setAttribute('stroke-width', '2');
                svg.setAttribute('viewBox', '0 0 24 24');
                svg.setAttribute('fill', 'none');
                svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

                const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path1.setAttribute('stroke-width', '2');
                path1.setAttribute('stroke', '#fffffff');
                path1.setAttribute('d', 'M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125');
                path1.setAttribute('stroke-linejoin', 'round');
                path1.setAttribute('stroke-linecap', 'round');

                const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path2.setAttribute('stroke-linejoin', 'round');
                path2.setAttribute('stroke-linecap', 'round');
                path2.setAttribute('stroke-width', '2');
                path2.setAttribute('stroke', '#fffffff');
                path2.setAttribute('d', 'M17 15V18M17 21V18M17 18H14M17 18H20');

                svg.appendChild(path1);
                svg.appendChild(path2);

                const text = document.createTextNode('Submit');
                link.appendChild(svg);
                link.appendChild(text);

                card.appendChild(title);
                card.appendChild(link);
                container.appendChild(card);
            });
        } catch (error) {
            console.error('Error loading assignments:', error);
        }
    }

    loadAssignmentsFromSheet();