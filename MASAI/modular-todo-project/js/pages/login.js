import { createNavbar } from '../components/navbar.js';
import { createFooter } from '../components/footer.js';


const app = document.getElementById('app');
app.prepend(createNavbar());
app.appendChild(createFooter());


const form = document.getElementById('loginForm');
if(form){
form.addEventListener('submit', e => {
e.preventDefault();
const email = document.getElementById('email').value.trim().toLowerCase();
const password = document.getElementById('password').value;


const users = JSON.parse(localStorage.getItem('users') || '[]');
const user = users.find(u => u.email === email && u.password === password);
if(!user){
alert('Invalid credentials.');
return;
}


// Store current session
localStorage.setItem('loggedInUser', JSON.stringify({ email: user.email, name: user.name }));
// Redirect to todos
window.location.href = '/todos.html';
});
}