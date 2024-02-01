
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
  
    registrationForm.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateForm()) {
        submitForm();
      }
    });
  
    function validateForm() {
        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const familyRole = document.getElementById('family_role').value;
        const dob = document.getElementById('d_o_b').value;
        const phoneNumber = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rePassword = document.getElementById('re_password').value;

        if (!firstName || !lastName || !gender || !familyRole || !dob || !phoneNumber || !email || !password || !rePassword) {
          alert('Please fill in all fields.');
          return false;
        }
    
        if (password.length < 6) {
          alert('Password should be at least 6 characters.');
          return false;
        }
    
        if (password !== rePassword) {
          alert('Passwords do not match.');
          return false;
        }
    
        return true;
      }
  
   
    function submitForm() {
      const formData = {
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        familyRole: document.getElementById('family_role').value,
        dob: document.getElementById('d_o_b').value,
        phoneNumber: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
      };
  

      displaySubmittedData(formData);
    }
  

    function displaySubmittedData(formData) {

      console.log('Submitted Data:', formData);
  
      alert('Registration successful!\n\nSubmitted Data:\n' +
        `First Name: ${formData.firstName}\n` +
        `Last Name: ${formData.lastName}\n` +
        `Gender: ${formData.gender}\n` +
        `Family Role: ${formData.familyRole}\n` +
        `Date of Birth: ${formData.dob}\n` +
        `Phone Number: ${formData.phoneNumber}\n` +
        `Email: ${formData.email}\n`
      );
      window.location.href = 'home.html';
    }


    
  
});


