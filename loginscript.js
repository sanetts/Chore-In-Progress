
document.addEventListener('DOMContentLoaded', function() {

    const signinForm = document.getElementById('signin-form');

    signinForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = [
      { email: 's.nettey.2002@gmail.com', password: '1234567' },
      { email: 'johnny@gmail.com', password: 'letmein' },

    ];

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      alert('Login successful!'); 
      window.location.href = 'home.html'; 
    } else {
      alert('Invalid email or password. Please try again.');
    }
 

  

  
});
  
});