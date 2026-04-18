// js/form.js

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    console.log('Form Data Submitted:', data); // For demonstration, log the form data
    
    // Implement AJAX call or other logic for submission here
}

// Add event listener to form
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', handleSubmit);
}