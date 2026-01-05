import { createNavbar } from '../components/navbar.js';
import { createFooter } from '../components/footer.js';


// Inject common layout
const app = document.getElementById('app');
app.prepend(createNavbar());
app.appendChild(createFooter());


// Signup logic
const form = document.getElementById('signupForm');
if(form){
form.addEventListener('submit', e => {
e.preventDefault();
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim().toLowerCase();
const password = document.getElementById('password').value;


if(!name || !email || password.length < 6){
alert('Please provide valid details (password at least 6 chars).');
return;
}


const users = JSON.parse(localStorage.getItem('users') || '[]');
const exists = users.find(u => u.email === email);
if(exists){
alert('An account with this email already exists.');
return;
}


users.push({ name, email, password });
localStorage.setItem('users', JSON.stringify(users));
alert('Signup successful. You can now log in.');
window.location.href = '/login.html';
});
}