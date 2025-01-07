// Dynamically Load Courses
const courses = [
    {
        title: "Introduction to Python",
        description: "Learn the basics of Python programming.",
        duration: "8 hours",
    },
    {
        title: "Web Development Bootcamp",
        description: "Master HTML, CSS, and JavaScript.",
        duration: "12 hours",
    },
    {
        title: "Data Science with Python",
        description: "Analyze and visualize data with Python.",
        duration: "10 hours",
    },
];

// Add courses to the course list
const courseList = document.getElementById("course-list");
courses.forEach((course) => {
    const courseDiv = document.createElement("div");
    courseDiv.classList.add("course");
    courseDiv.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <p><strong>Duration:</strong> ${course.duration}</p>
        <button onclick="enroll('${course.title}')">Enroll Now</button>
    `;
    courseList.appendChild(courseDiv);
});

// Scroll to courses section
function scrollToCourses() {
    document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
}

// Enroll action
function enroll(courseTitle) {
    alert(`You have successfully enrolled in ${courseTitle}!`);
}

// Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
});
