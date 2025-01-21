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
    {
        rollNumber: "CS-342",
        cnic: "12345-6789012-3",
        name: "Abdul Rehman",
        image: "img.png",
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
    },{
        rollNumber: "CS-000",
        cnic: "00000-0000000-0",
        name: "Student 1",
        image: "img.png",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 0 },
            { subject: "Accounting Fundamentals", marks: 0 },
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 0 }
        ]
    },
    {
        rollNumber: "CS-341",
        cnic: "35202-1421567-5",
        name: "Abdul Rehman",
        image: "../assets/images/students/341.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 67 },
            { subject: "Accounting Fundamentals", marks: 65 },
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 66 }
        ]
    },
    {
        rollNumber: "CS-342",
        cnic: "36601-7109122-1",
        name: "Ateeb Khalid",
        image: "../assets/images/students/342.jpeg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 63},
            { subject: "Accounting Fundamentals", marks: 50},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 60}
        ]
    },
    {
        rollNumber: "CS-343",
        cnic: "35202-8498405-1",
        name: "Abdul Sami",
        image: "../assets/images/students/343.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 68},
            { subject: "Accounting Fundamentals", marks: 60},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 72}
        ]
    },
    {
        rollNumber: "CS-344",
        cnic: "34104-4843906-5",
        name: "Abdul Ahad",
        image: "../assets/images/students/344.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 74},
            { subject: "Accounting Fundamentals", marks: 71},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 76}
        ]
    },
    {
        rollNumber: "CS-345",
        cnic: "35201-7578377-5",
        name: "Abdullah Irshad",
        image: "../assets/images/students/345.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 85},
            { subject: "Accounting Fundamentals", marks: 89},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 97 }
        ]
    },
    {
        rollNumber: "CS-346",
        cnic: "38201-3268906-7",
        name: "Adeel Ahmed",
        image: "../assets/images/students/346.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 57},
            { subject: "Accounting Fundamentals", marks: 61},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 54}
        ]
    },
    {
        rollNumber: "CS-347",
        cnic: "32402-3956830-9",
        name: "Ahmad Anwar",
        image: "../assets/images/students/347.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 85},
            { subject: "Accounting Fundamentals", marks: 80},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 89}
        ]
    },
    {
        rollNumber: "CS-348",
        cnic: "35202-6279376-1",
        name: "Ali Husnain",
        image: "../assets/images/students/348.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 79},
            { subject: "Accounting Fundamentals", marks: 55},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 73}
        ]
    },
    {
        rollNumber: "CS-350",
        cnic: "35301-8410656-1",
        name: "Student 2",
        image: "img.png",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 0 },
            { subject: "Accounting Fundamentals", marks: 25},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 0 }
        ]
    },
    {
        rollNumber: "CS-351",
        cnic: "34302-9700957-6",
        name: "Eman Fatima",
        image: "../assets/images/students/351.JPG",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 70},
            { subject: "Accounting Fundamentals", marks: 65},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 82}
        ]
    },
    {
        rollNumber: "CS-352",
        cnic: "33302-2415581-0",
        name: "Ezzah Nawaz",
        image: "../assets/images/students/352.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 79},
            { subject: "Accounting Fundamentals", marks: 58},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 80}
        ]
    },
    {
        rollNumber: "CS-353",
        cnic: "35200-8149405-0",
        name: "Fareeha Fatima",
        image: "../assets/images/students/353.jpeg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 71},
            { subject: "Accounting Fundamentals", marks: 53},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 71}
        ]
    },
    {
        rollNumber: "CS-354",
        cnic: "33202-1783734-8",
        name: "Farwa Fatima",
        image: "../assets/images/students/354.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 80},
            { subject: "Accounting Fundamentals", marks: 62},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 77}
        ]
    },
    {
        rollNumber: "CS-355",
        cnic: "33202-2520122-4",
        name: "Fatima Zafar",
        image: "../assets/images/students/355.png",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 77},
            { subject: "Accounting Fundamentals", marks: 55},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 77}
        ]
    },
    {
        rollNumber: "CS-356",
        cnic: "35201-5912679-9",
        name: "Farhan Faiz",
        image: "../assets/images/students/356.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 70},
            { subject: "Accounting Fundamentals", marks: 62},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 80}
        ]
    },  {
        rollNumber: "CS-357",
        cnic: "35102-9229477-9",
        name: "Irfan Rasheed",
        image: "../assets/images/students/357.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 68},
            { subject: "Accounting Fundamentals", marks: 72},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 85}
        ]
    },
    {
        rollNumber: "CS-358",
        cnic: "35202-5398052-8",
        name: "Javeria Javaid",
        image: "../assets/images/students/358.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 86},
            { subject: "Accounting Fundamentals", marks: 70},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 87}
        ]
    },
    {
        rollNumber: "CS-359",
        cnic: "35202-5233164-4",
        name: "Laiba Bader",
        image: "../assets/images/students/359.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 71 },
            { subject: "Accounting Fundamentals", marks: 60},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 82}
        ]
    },
    {
        rollNumber: "CS-360",
        cnic: "35201-9601691-5",
        name: "Muhammad Faizan Saadi",
        image: "../assets/images/students/360.jpeg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 61},
            { subject: "Accounting Fundamentals", marks: 45},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 68}
        ]
    },
    {
        rollNumber: "CS-361",
        cnic: "35202-9596415-7",
        name: "Muhammad Hashim Zahoor",
        image: "../assets/images/students/361.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 65 },
            { subject: "Accounting Fundamentals", marks: 52 },
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 64}
        ]
    },
    {
        rollNumber: "CS-362",
        cnic: "35404-2702964-7",
        name: "Muhammad Abdullah Khan",
        image: "../assets/images/students/362.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 75 },
            { subject: "Accounting Fundamentals", marks: 54},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 88}
        ]
    },
    {
        rollNumber: "CS-363",
        cnic: "35202-1628533-9",
        name: "Muhammad Ahsan Shahid",
        image: "../assets/images/students/363.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 77},
            { subject: "Accounting Fundamentals", marks: 53},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 82}
        ]
    },
    {
        rollNumber: "CS-364",
        cnic: "36502-1848650-1",
        name: "Muhammad Ahsan Siddique",
        image: "../assets/images/students/364.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 80},
            { subject: "Accounting Fundamentals", marks: 80},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 87}
        ]
    },
    {
        rollNumber: "CS-365",
        cnic: "32102-2835192-5",
        name: "Muhammad Ayish Hafeez",
        image: "../assets/images/students/365.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 64},
            { subject: "Accounting Fundamentals", marks: 39},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 77}
        ]
    },
    {
        rollNumber: "CS-366",
        cnic: "35503-0231268-1",
        name: "Muhammad Danish Zia",
        image: "../assets/images/students/366.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 74},
            { subject: "Accounting Fundamentals", marks: 52},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 78}
        ]
    },
    {
        rollNumber: "CS-367",
        cnic: "32304-6621089-5",
        name: "Muhammad Fahad Shaikh",
        image: "../assets/images/students/367.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 66},
            { subject: "Accounting Fundamentals", marks: 50},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 68}
        ]
    },
    {
        rollNumber: "CS-368",
        cnic: "35202-5035816-5",
        name: "Muhammad Haseeb",
        image: "../assets/images/students/368.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 75},
            { subject: "Accounting Fundamentals", marks: 65},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 90}
        ]
    },
    {
        rollNumber: "CS-369",
        cnic: "35202-5847881-3",
        name: "Muhammad Yarmiah Saddique",
        image: "../assets/images/students/369.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 65},
            { subject: "Accounting Fundamentals", marks: 50},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 70}
        ]
    },
    {
        rollNumber: "CS-370",
        cnic: "38404-2215877-3",
        name: "Muhammad Zeeshan Sarfraz",
        image: "../assets/images/students/370.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks:65},
            { subject: "Accounting Fundamentals", marks: 66},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 68}
        ]
    },
    {
        rollNumber: "CS-371",
        cnic: "35201-0926430-3",
        name: "Muhammad Mujtaba Farooqi",
        image: "../assets/images/students/371.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 67 },
            { subject: "Accounting Fundamentals", marks: 70},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 83}
        ]
    },
    {
        rollNumber: "CS-372",
        cnic: "35404-6545732-1",
        name: "Muneeb Najam",
        image: "../assets/images/students/372.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 79},
            { subject: "Accounting Fundamentals", marks: 63},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 86}
        ]
    },
    {
        rollNumber: "CS-373",
        cnic: "34102-4303284-6",
        name: "Noor Fatima",
        image: "../assets/images/students/373.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 83},
            { subject: "Accounting Fundamentals", marks: 60},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 94}
        ]
    },
    {
        rollNumber: "CS-374",
        cnic: "35202-4680119-2",
        name: "Okasha",
        image: "../assets/images/students/374.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 68},
            { subject: "Accounting Fundamentals", marks: 62},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 77}
        ]
    }, {
        rollNumber: "CS-375",
        cnic: "35201-4557403-8",
        name: "Saher Farman",
        image: "../assets/images/students/375.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 77},
            { subject: "Accounting Fundamentals", marks: 66},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 87}
        ]
    },
    {
        rollNumber: "CS-376",
        cnic: "35201-9784588-1",
        name: "Shahmir Hafeez",
        image: "../assets/images/students/376.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 65},
            { subject: "Accounting Fundamentals", marks: 56},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 80}
        ]
    },
    {
        rollNumber: "CS-378",
        cnic: "37405-0736903-5",
        name: "Taha Shahid",
        image: "../assets/images/students/378.heic",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 69},
            { subject: "Accounting Fundamentals", marks: 60},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 73}
        ]
    },
    {
        rollNumber: "CS-379",
        cnic: "38401-3392252-1",
        name: "Ubaid Ullah Irshad",
        image: "../assets/images/students/379.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 84},
            { subject: "Accounting Fundamentals", marks: 85},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 85}
        ]
    },
    {
        rollNumber: "CS-380",
        cnic: "34501-2673990-2",
        name: "Urooj Nisar",
        image: "../assets/images/students/380.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 77},
            { subject: "Accounting Fundamentals", marks: 63},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 94}
        ]
    },
    {
        rollNumber: "CS-381",
        cnic: "32403-4590228-7",
        name: "Zair Haider",
        image: "../assets/images/students/381.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 68 },
            { subject: "Accounting Fundamentals", marks: 57},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 83}
        ]
    },
    {
        rollNumber: "CS-382",
        cnic: "45207-7949809-5",
        name: "Zawar Husain",
        image: "../assets/images/students/382.jpg",
        subjects: [
            { subject: "Pre-Math II (Non Credit)", marks: 0 },
            { subject: "Calculus and Analytical Geometry", marks: 0 },
            { subject: "Object Oriented Programming (Lab)", marks: 0 },
            { subject: "Object Oriented Programming", marks: 0 },
            { subject: "Expository Writing", marks: 74},
            { subject: "Accounting Fundamentals", marks: 43},
            { subject: "Discrete Structures", marks: 0 },
            { subject: "Civics & Community Engagement", marks: 77}
        ]
    }
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