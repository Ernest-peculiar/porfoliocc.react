function sendMail() {
    let params = {
      name: document.getElementById("user_name").value,
      email: document.getElementById("user_email").value,
      subject: document.getElementById("subject").value,  // Corrected to getElementById
      message: document.getElementById("message").value,  // Corrected to getElementById
    };
  
    // Send the email using EmailJS
    emailjs.send("service_roam0sq", "template_7qil2ub", params)
      .then(function(response) {
        console.log('Email Sent!!', response);
        alert("Your message was sent successfully!");  // Optional: Show success message
      })
      .catch(function(error) {
        console.log('Failed to send email:', error);
        alert("Oops! Something went wrong. Please try again.");
      });
  }
  