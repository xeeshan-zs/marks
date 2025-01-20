function formatCNIC(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 5) {
        value = value.slice(0, 5) + '-' + value.slice(5);
    }
    if (value.length > 13) {
        value = value.slice(0, 13) + '-' + value.slice(13);
    }
    input.value = value.slice(0, 15);
}

function checkRoll() {
    const rollNumber = document.getElementById('rollNumber').value;
    const cnic = document.getElementById('cnic').value;
    const errorMessage = document.getElementById('errorMessage');
    const marksDisplay = document.getElementById('marksDisplay');
    const marksValue = document.getElementById('marksValue');

    if (!rollNumber || !cnic) {
        errorMessage.style.display = 'block';
        marksDisplay.style.display = 'none';
        return;
    }

    errorMessage.style.display = 'none';

    const studentData = {
        'CS-000': { cnic: '00000-0000000-0', marks: 100 },
        'CS-341': { cnic: '35202-1421567-5', marks: 65 },
        'CS-342': { cnic: '36601-7109122-1', marks: 50 },
        'CS-343': { cnic: '35202-8498405-1', marks: 60 },
        'CS-344': { cnic: '34104-4843906-5', marks: 71 },
        'CS-345': { cnic: '35201-7578377-5', marks: 89 },
        'CS-346': { cnic: '38201-3268906-7', marks: 61 },
        'CS-347': { cnic: '32402-3956830-9', marks: 80 },
        'CS-348': { cnic: '35202-6279376-1', marks: 55 },
        'CS-350': { cnic: '35301-8410656-1', marks: 25 },
        'CS-351': { cnic: '34302-9700957-6', marks: 65 },
        'CS-352': { cnic: '33302-2415581-0', marks: 58 },
        'CS-353': { cnic: '35200-8149405-0', marks: 53 },
        'CS-354': { cnic: '33202-1783734-8', marks: 62 },
        'CS-355': { cnic: '33202-2520122-4', marks: 55 },
        'CS-356': { cnic: '35201-5912679-9', marks: 62 },
        'CS-357': { cnic: '35102-9229477-9', marks: 72 },
        'CS-358': { cnic: '35202-5398052-8', marks: 70 },
        'CS-359': { cnic: '35202-5233164-4', marks: 60 },
        'CS-360': { cnic: '35201-9601691-5', marks: 45 },
        'CS-361': { cnic: '35202-9596415-7', marks: 52 },
        'CS-362': { cnic: '35404-2702964-7', marks: 54 },
        'CS-363': { cnic: '35202-1628533-9', marks: 53 },
        'CS-364': { cnic: '36502-1848650-1', marks: 80 },
        'CS-365': { cnic: '32102-2835192-5', marks: 39 },
        'CS-366': { cnic: '35503-0231268-1', marks: 52 },
        'CS-367': { cnic: '32304-6621089-5', marks: 50 },
        'CS-368': { cnic: '35202-5035816-5', marks: 65 },
        'CS-369': { cnic: '35202-5847881-3', marks: 50 },
        'CS-370': { cnic: '38404-2215877-3', marks: 66 },
        'CS-371': { cnic: '35201-0926430-3', marks: 70 },
        'CS-372': { cnic: '35404-6545732-1', marks: 63 },
        'CS-373': { cnic: '34102-4303284-6', marks: 60 },
        'CS-374': { cnic: '35202-4680119-2', marks: 62 },
        'CS-375': { cnic: '35201-4557403-8', marks: 66 },
        'CS-376': { cnic: '35201-9784588-1', marks: 56 },
        'CS-378': { cnic: '37405-0736903-5', marks: 60 },
        'CS-379': { cnic: '38401-3392252-1', marks: 85 },
        'CS-380': { cnic: '34501-2673990-2', marks: 63 },
        'CS-381': { cnic: '32403-4590228-7', marks: 57 },
        'CS-382': { cnic: '45207-7949809-5', marks: 43 }
    };

    if (studentData[rollNumber] && studentData[rollNumber].cnic === cnic) {
        marksValue.textContent = studentData[rollNumber].marks;
        marksDisplay.style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
        marksDisplay.style.display = 'none';
    }
}

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('findButton').click();
    }
});

function toggleTheme() {
    const body = document.documentElement;
    const themeToggleImg = document.querySelector('.theme-toggle img');
    const currentTheme = body.getAttribute('data-theme');

    if (currentTheme === 'light') {
        body.removeAttribute('data-theme');
    themeToggleImg.src = "/assets/images/dark-icon.svg";  // Updated path for dark theme icon
        } else {
        body.setAttribute('data-theme', 'light');
    themeToggleImg.src = "/assets/images/light-icon.svg";  // Updated path for light theme icon
        }
}
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
});

