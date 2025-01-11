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
        
        
        // Here, you can add code to send form data to your server
    });
});


// Our Services
// Show the form modal
function showForm(title, price) {
    document.getElementById('serviceTitle').textContent = title;
    document.getElementById('servicePrice').textContent = price;
    document.getElementById('serviceModal').style.display = 'block';
}

// Close the form modal
function closeForm() {
    document.getElementById('serviceModal').style.display = 'none';
}

// Handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    alert(
        "Sorry for the inconvenience, the site is under maintenance. Please write us an email and we'll get back to you. Thank you."
    );
    closeForm(); // Close the modal after the alert
}

// Connect with Us
// Function to show the modal with the selected service details
function showForm(serviceName) {
    document.getElementById('serviceTitle').textContent = serviceName;
    document.getElementById('connectModal').style.display = 'block';
}

// Function to close the modal
function closeForm() {
    document.getElementById('connectModal').style.display = 'none';
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent the page from reloading
    alert(
        "Sorry for the inconvenience, the site is under maintenance. Please write us an email and we'll get back to you. Thank you."
    );
    closeForm(); // Close the modal after showing the alert
}


// Contact Us 
// Function to handle the form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Show the maintenance message
    alert(
        "Sorry for the inconvenience, the site is under maintenance. Please write us an email and we'll get back to you. Thank you."
    );

    // Reset the form fields
    document.getElementById('contactForm').reset();
}

// Book Online
// Function to handle booking form submission
function handleBookingFormSubmit(event) {
    event.preventDefault(); 

    // Display the maintenance message
    alert(
        "Sorry for the inconvenience, the site is under maintenance. Please write us an email and we'll get back to you. Thank you."
    );

    // Reset the form fields
    document.getElementById('booking-form').reset();
}


// Change page from home
        // Wait for the DOM to load
        document.addEventListener("DOMContentLoaded", () => {
            // Select the "Book Online" navigation link
            const bookOnlineLink = document.querySelector('a[href="/bookOnline.html"]');
        
            if (bookOnlineLink) {
              // Add a click event listener to the link
              bookOnlineLink.addEventListener("click", (event) => {
                // Prevent the default navigation
                event.preventDefault();
        
                // Redirect to bookOnline.html
                window.location.href = "bookOnline.html";
              });
            }
          });



// Change page from book online
        // Wait for the DOM to load
        document.addEventListener("DOMContentLoaded", () => {
            // Select the "Book Online" navigation link
            const bookOnlineLink = document.querySelector('a[href="/index.html"]');
        
            if (bookOnlineLink) {
              // Add a click event listener to the link
              bookOnlineLink.addEventListener("click", (event) => {
                // Prevent the default navigation
                event.preventDefault();
        
                // Redirect to bookOnline.html
                window.location.href = "index.html";
              });
            }
          });