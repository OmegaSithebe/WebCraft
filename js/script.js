document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
    
    // Form submission
    const bookingForm = document.getElementById('booking-form');
    
    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;
        
        alert(`Booking confirmed for ${name} on ${date} for ${service}`);
        
        // Here, you can add code to send form data to your server
    });
});
