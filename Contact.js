document.addEventListener('DOMContentLoaded', function() {
    // Get the submit button element
    const submitBtn = document.getElementById('submit-button');

    // Event handler for when the submit button is clicked
    submitBtn.addEventListener('click', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Reference to the contact page section
        const contactSection = document.getElementById('contact-page');

        // Create a new paragraph element with the thank you message
        const thankYouMsg = document.createElement('p');
        thankYouMsg.textContent = "Thank you for your message";
        thankYouMsg.style.fontSize = "24px";

        // Clear the existing contents of the contact page
        contactSection.innerHTML = '';

        // Add the thank you message to the contact page
        contactSection.appendChild(thankYouMsg);
    });
});