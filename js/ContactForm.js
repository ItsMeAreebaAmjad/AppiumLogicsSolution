document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact_form');
    const firstNameInput = form.querySelector('input[name="firstname"]');
    const lastNameInput = form.querySelector('input[name="lastname"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const emailInput = form.querySelector('input[name="email"]');
    const subjectInput = form.querySelector('input[name="Subject"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    if (!form || !firstNameInput || !lastNameInput || !phoneInput || !emailInput || !subjectInput || !messageInput) {
        console.error('One or more form elements are not found!');
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        clearErrors(); 

        let isValid = true;

        // Validate First Name (only characters)
        if (!firstNameInput.value.trim()) {
            showError(firstNameInput, 'First Name is required');
            isValid = false;
        } else if (!isValidName(firstNameInput.value.trim())) {
            showError(firstNameInput, 'First Name can only contain letters');
            isValid = false;
        }

        // Validate Last Name (only characters)
        if (!lastNameInput.value.trim()) {
            showError(lastNameInput, 'Last Name is required');
            isValid = false;
        } else if (!isValidName(lastNameInput.value.trim())) {
            showError(lastNameInput, 'Last Name can only contain letters');
            isValid = false;
        }

        // Validate Phone Number (numeric, 10 digits)
        if (!phoneInput.value.trim()) {
            showError(phoneInput, 'Phone Number is required');
            isValid = false;
        } else if (!isValidPhoneNumber(phoneInput.value.trim())) {
            showError(phoneInput, 'Enter a valid Phone Number (10 digits)');
            isValid = false;
        }

        // Validate Email
        if (!emailInput.value.trim()) {
            showError(emailInput, 'Email Address is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'Enter a valid Email Address');
            isValid = false;
        }

        // Validate Subject
        if (!subjectInput.value.trim()) {
            showError(subjectInput, 'Subject is required');
            isValid = false;
        }

        // Validate Message
        if (!messageInput.value.trim()) {
            showError(messageInput, 'Message is required');
            isValid = false;
        }

        // If all validations pass, submit the form
        if (isValid) {
            form.submit();
        }
    });

    function isValidName(name) {
        return /^[A-Za-z]+$/.test(name); // Allow only letters
    }

    function isValidPhoneNumber(phone) {
        return /^\d{10}$/.test(phone);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showError(input, message) {
        input.style.borderColor = 'red';

        const errorElement = document.createElement('span');
        errorElement.style.color = 'red';
        errorElement.style.fontSize = '12px'; 
        errorElement.style.display = 'block'; 
        errorElement.style.marginTop = '4px'; 
        errorElement.textContent = '*' + message;

        input.parentNode.insertBefore(errorElement, input.nextSibling);
    }

    function clearErrors() {
        const errorMessages = form.querySelectorAll('span');
        errorMessages.forEach(function(errorMessage) {
            errorMessage.remove();
        });

        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(function(input) {
            input.style.borderColor = '';
        });
    }
});
