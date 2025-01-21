const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

// Add event listener to toggle password visibility
togglePassword.addEventListener('click', () => {
    // Check the current type of the input
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Change the icon
    togglePassword.textContent = type === 'password' ? '👁️':'show';
});
