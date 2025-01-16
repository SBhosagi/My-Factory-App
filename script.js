const loginButton = document.getElementById('loginButton');// declare the variables
const loginbox = document.getElementById('loginbox');
const signupButton = document.getElementById('signupButton');
const signupbox = document.getElementById('signupbox');
const closeModal = document.getElementById('closeModal');

loginButton.addEventListener('click', () => {//to target the button
  loginbox.classList.add('active');
});

// Close modal when close button is clicked
closeloginbox.addEventListener('click', () => {
  loginbox.classList.remove('active');
});
// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === loginbox) {
    loginbox.classList.remove('active');
  }
});

signupButton.addEventListener('click', () => {//to target the button
  signupbox.classList.add('active');
});

// Close modal when close button is clicked
closesignupbox.addEventListener('click', () => {
  signupbox.classList.remove('active');
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === signupbox) {
    signupbox.classList.remove('active');
  }
});