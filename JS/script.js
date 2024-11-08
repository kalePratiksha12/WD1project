document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.footer-form form');
    const submitButton = form.querySelector('.submit');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Simple validation
        const name = form['your-name'].value.trim();
        const email = form['your-email'].value.trim();
        const phone = form['your-phone'].value.trim();
        const course = form['course'].value;

        if (name === '' || email === '' || phone === '' || course === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Example: Simulate a successful submission (you can replace this with actual submission logic)
        alert('Thank you for your enquiry, ' + name + '! We will get back to you soon.');

        // Reset the form fields
        form.reset();
    });
});
