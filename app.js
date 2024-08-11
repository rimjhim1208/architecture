// Mock Credentials
const mockUsername = 'testuser@example.com';
const mockPassword = 'password123';

// Mock Authentication (Simulate login)
function authenticate(username, password) {
    if (username === mockUsername && password === mockPassword) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('app').style.display = 'block';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

// Handle Login Form Submission
document.getElementById('login-form').onsubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    authenticate(username, password);
}
