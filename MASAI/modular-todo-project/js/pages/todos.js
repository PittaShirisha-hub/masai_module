import { createNavbar } from '../components/navbar.js';
import { createFooter } from '../components/footer.js';
import { displayTodos } from '../modules/displayTodos.js';


const app = document.getElementById('app');
app.prepend(createNavbar());
app.appendChild(createFooter());


// Protect route: require login
const session = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
if(!session){
// Not logged in -> redirect to login
window.location.href = '/login.html';
} else {
// Optionally show welcome
const heading = document.querySelector('main .container h2');
if(heading) heading.textContent = `Todos — ${session.name}`;
}


const logoutBtn = document.getElementById('logoutBtn');
if(logoutBtn){
logoutBtn.addEventListener('click', () => {
localStorage.removeItem('loggedInUser');
window.location.href = '/login.html';
});
}


// Fetch and render todos
fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(data => {
// show first 50 for performance
displayTodos(data.slice(0, 50));
})
.catch(err => {
console.error(err);
const list = document.getElementById('todosList');
if(list) list.innerHTML = '<li>Failed to load todos.</li>';
});