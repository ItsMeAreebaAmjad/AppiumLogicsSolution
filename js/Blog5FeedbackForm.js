// Blog1FeedbackForm.js

document.addEventListener('DOMContentLoaded', function() {
  const feedbackContainer = document.querySelector('.feedback-container');
  const commentsHeading = document.querySelector('.comments-heading');

  // Function to display feedback from localStorage
  function displayFeedback() {
    feedbackContainer.innerHTML = ''; // Clear existing feedback

    // Get feedback from localStorage
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

    // Update comments heading
    commentsHeading.textContent = `${feedbacks.length} Comments`;

    // Display feedback
    feedbacks.forEach(feedback => {
      const feedbackDiv = document.createElement('div');
      feedbackDiv.className = 'feedback-item';
      feedbackDiv.innerHTML = `
        <div class="feedback-item-content">
          <img src="img/feedbackUser.png" alt="User Image" class="feedback-item-image">
          <div class="feedback-text">
            <p><strong>${feedback.firstName}</strong></p>
            <p>${feedback.email}</p>
            <p>${feedback.comment}</p>
          </div>
        </div>
        <hr>
      `;
      feedbackContainer.appendChild(feedbackDiv);
    });
  }

  // Display existing feedback on page load
  displayFeedback();

  // Get the form element
  const form = document.querySelector('form');

  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Get form data
      const firstName = document.querySelector('input[name="first-name"]').value;
      const email = document.querySelector('input[name="email"]').value;
      const comment = document.querySelector('textarea[name="comment"]').value;

      // Create new feedback object
      const newFeedback = {
        firstName,
        email,
        comment
      };

      // Get existing feedbacks from localStorage
      const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

      // Add new feedback to the list
      feedbacks.push(newFeedback);

      // Save updated feedbacks to localStorage
      localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

      // Clear the form
      form.reset();

      // Display updated feedbacks
      displayFeedback();
    });
  } else {
    console.error('Form element not found!');
  }
});
