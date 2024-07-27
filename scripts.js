document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        alert('Thank you for your message!');
        // Here you can add more logic, such as sending the data to a server
        document.getElementById('contact-form').reset(); // Reset the form
    } else {
        alert('Please fill out all fields.');
    }
});
