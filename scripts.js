// script.js

// Handling course form submission
document.getElementById('courseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const theory1 = document.getElementById('theory1').value;
    const theory2 = document.getElementById('theory2').value;
    const theory3 = document.getElementById('theory3').value;
    const theory4 = document.getElementById('theory4').value;

    if (theory1 && theory2 && theory3 && theory4) {
        console.log("Theory Course 1 Teacher:", theory1);
        console.log("Theory Course 2 Teacher:", theory2);
        console.log("Theory Course 3 Teacher:", theory3);
        console.log("Theory Course 4 Teacher:", theory4);
        alert("Theory courses and teachers submitted successfully!");
    } else {
        alert("Please select a teacher for each theory course.");
    }
});

// Handling lab form submission
document.getElementById('labForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const lab1 = document.getElementById('lab1').value;
    const lab2 = document.getElementById('lab2').value;

    if (lab1 && lab2) {
        console.log("Lab Course 1 Teacher:", lab1);
        console.log("Lab Course 2 Teacher:", lab2);
        alert("Lab courses and teachers submitted successfully!");
    } else {
        alert("Please select a teacher for each lab course.");
    }
});

// Handling feedback submission
document.getElementById('submitFeedbackBtn').addEventListener('click', function() {
    const feedback = document.getElementById('feedback').value;
    if (feedback) {
        console.log("Feedback submitted:", feedback);
        alert("Feedback submitted successfully!");
    } else {
        alert("Please write your feedback before submitting.");
    }
});
