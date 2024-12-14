// Smooth scroll functionality for "Learn More" button
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop - 100, // Adjust for navbar height
      behavior: 'smooth'
    });
  }
  
  // Basic form validation on the contact page (optional enhancement)
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      event.preventDefault();
      alert('Please fill out all fields.');
    }
  });
  