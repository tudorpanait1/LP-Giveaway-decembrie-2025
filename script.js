// ===================================
// Form Submission Handler
// ===================================

// TODO: THEMARKETER INTEGRATION
// Replace the endpoint URL below with the actual theMarketer API endpoint
// Documentation: Check theMarketer API docs for the correct endpoint and required fields
// Required fields typically: email, firstname, consent flags

const THEMARKETER_ENDPOINT = 'YOUR_THEMARKETER_API_ENDPOINT_HERE'; // TODO: Replace with actual endpoint
const THEMARKETER_API_KEY = 'YOUR_API_KEY_HERE'; // TODO: Add your API key if required

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('giveaway-form');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const errorText = document.getElementById('error-text');
    
    // Smooth scroll for CTA buttons
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Hide any previous messages
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
        
        // Get form data
        const formData = {
            firstname: document.getElementById('firstname').value.trim(),
            email: document.getElementById('email').value.trim(),
            gdpr_consent: document.getElementById('gdpr-consent').checked
        };
        
        // Basic validation
        if (!formData.firstname || !formData.email || !formData.gdpr_consent) {
            showError('Te rugăm să completezi toate câmpurile obligatorii.');
            return;
        }
        
        // Email validation
        if (!isValidEmail(formData.email)) {
            showError('Te rugăm să introduci o adresă de email validă.');
            return;
        }
        
        // Disable submit button during processing
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Se procesează...';
        
        try {
            // TODO: INTEGRATE WITH THEMARKETER API
            // This is where you send the data to theMarketer
            // Replace this mock implementation with actual API call
            
            const success = await submitToTheMarketer(formData);
            
            if (success) {
                // Show success message
                showSuccess();
                
                // Reset form
                form.reset();
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                showError('A apărut o eroare la procesarea cererii. Te rugăm să încerci din nou.');
            }
            
        } catch (error) {
            console.error('Form submission error:', error);
            showError('A apărut o eroare. Te rugăm să verifici conexiunea la internet și să încerci din nou.');
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
    
    // Helper function to validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Helper function to show success message
    function showSuccess() {
        successMessage.style.display = 'flex';
        errorMessage.style.display = 'none';
    }
    
    // Helper function to show error message
    function showError(message) {
        errorText.textContent = message;
        errorMessage.style.display = 'flex';
        successMessage.style.display = 'none';
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // ===================================
    // TODO: THEMARKETER API INTEGRATION
    // ===================================
    // This function should send data to theMarketer
    // Replace the mock implementation below with actual API call
    
    async function submitToTheMarketer(formData) {
        // MOCK IMPLEMENTATION - Replace this entire function with actual theMarketer integration
        
        // Example of what the real implementation might look like:
        /*
        try {
            const response = await fetch(THEMARKETER_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${THEMARKETER_API_KEY}`, // If required
                    // Add other required headers per theMarketer documentation
                },
                body: JSON.stringify({
                    email: formData.email,
                    firstname: formData.firstname,
                    // Add other fields required by theMarketer API
                    // Check their documentation for exact field names and structure
                    newsletter_consent: formData.gdpr_consent,
                    source: 'giveaway_decembrie_2025',
                    // Additional fields as needed
                })
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data.success || true; // Adjust based on actual API response structure
            
        } catch (error) {
            console.error('theMarketer API error:', error);
            return false;
        }
        */
        
        // TEMPORARY MOCK - Remove this and uncomment the real implementation above
        console.log('Form data to be sent to theMarketer:', formData);
        console.log('TODO: Replace this mock with actual theMarketer API call');
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock success (90% success rate for testing)
        return Math.random() > 0.1;
    }
});

// ===================================
// Additional Utilities
// ===================================

// Track form field interactions (optional analytics)
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('#giveaway-form input');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            // TODO: Add analytics tracking if needed
            console.log(`Field focused: ${this.id}`);
        });
    });
});

// Add animation to elements on scroll (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to sections (optional)
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.step-card, .prize-card, .benefit-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});