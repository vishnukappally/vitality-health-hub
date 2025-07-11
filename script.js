document.addEventListener('DOMContentLoaded', function() {

    // 1. Appointment Modal Form Submission Alert
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('patientName').value;
            const email = document.getElementById('patientEmail').value;
            const service = document.getElementById('serviceSelect').value;
            const date = document.getElementById('appointmentDate').value;
            const time = document.getElementById('appointmentTime').value;

            if (name && email && service && date && time) {
                alert(`Thank you, ${name}! Your appointment for ${service} on ${date} at ${time} has been requested. We will confirm via email.`);
                // In a real application, this data would be sent to a backend server.
                const modal = bootstrap.Modal.getInstance(document.getElementById('appointmentModal'));
                if (modal) {
                    modal.hide(); // Hide the modal after submission
                }
                appointmentForm.reset(); // Clear the form
            } else {
                alert('Please fill in all the required fields for your appointment.');
            }
        });
    }

    // 2. Contact Form Submission Alert
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const message = document.getElementById('contactMessage').value;

            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been sent. We'll get back to you at ${email} shortly.`);
                // In a real application, this data would be sent to a backend server.
                contactForm.reset(); // Clear the form
            } else {
                alert('Please fill in all fields to send your message.');
            }
        });
    }

    // Optional: Smooth scrolling for nav links (adjusts for fixed navbar height)
    document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 0; // Get navbar height

            // Calculate scroll position, accounting for navbar and a little extra padding
            const offsetPosition = targetElement.offsetTop - navbarHeight - 20;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

});