document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.appointmentform');
    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const messageInput = form.querySelector('textarea');
    const sendButton = form.querySelector('.btn');
    const charCounter = document.createElement('p');
    
    charCounter.style.fontSize = '12px';
    charCounter.style.margin = '4px 0 0 0';
    charCounter.style.color = 'white';
    charCounter.textContent = '0/150 characters';
    messageInput.parentNode.insertBefore(charCounter, messageInput.nextSibling);
  
    messageInput.addEventListener('input', function() {
      const charCount = messageInput.value.length;
      charCounter.textContent = `${charCount}/150 characters`;
  
      if (charCount > 150) {
        messageInput.value = messageInput.value.substring(0, 150);
        charCounter.textContent = '150/150 characters';
      }
    });
  
    sendButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Clear previous error messages and borders
      clearErrors();
  
      let hasError = false;
  
      // Check if name is empty or contains non-alphabetic characters
      const nameValue = nameInput.value.trim();
      if (nameValue === '') {
        showError(nameInput, 'Enter Name');
        hasError = true;
      } else if (!/^[A-Za-z\s]+$/.test(nameValue)) {
        showError(nameInput, 'Name can only contain letters');
        hasError = true;
      }
  
      // Check if email is empty or invalid
      const emailValue = emailInput.value.trim();
      if (emailValue === '') {
        showError(emailInput, 'Enter Email');
        hasError = true;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        showError(emailInput, 'Enter a valid Email Address');
        hasError = true;
      }
  
      // Check if message is empty
      const messageValue = messageInput.value.trim();
      if (messageValue === '') {
        showError(messageInput, 'Enter Message');
        hasError = true;
      }
  
      // If there's an error, prevent the alert from showing
      if (!hasError) {
        alert('Contact us on given links');
      }
    });
  
    function showError(input, message) {
      input.style.border = '1px solid red';
      const errorElement = document.createElement('p');
      errorElement.style.color = 'red';
      errorElement.style.fontSize = '12px';
      errorElement.style.margin = '4px 0 0 0';
      errorElement.textContent = '*' + message;
      input.parentNode.insertBefore(errorElement, input.nextSibling);
    }
  
    function clearErrors() {
      nameInput.style.border = '';
      emailInput.style.border = '';
      messageInput.style.border = '';
  
      const errorMessages = form.querySelectorAll('.appointmentform p');
      errorMessages.forEach(function(errorMessage) {
        if (errorMessage !== charCounter) {
          errorMessage.remove();
        }
      });
    }
  });
  