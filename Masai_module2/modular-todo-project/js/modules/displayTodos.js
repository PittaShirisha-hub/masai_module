// displayTodos.js
// Exports a single function displayTodos(data) which expects
// an element with id='todosList' present in the document.
export function displayTodos(data){
const list = document.getElementById('todosList');
if(!list) return;
list.innerHTML = '';


data.forEach(todo => {
const li = document.createElement('li');
li.className = todo.completed ? 'completed' : '';
li.innerHTML = `
<span>
<strong>#${todo.id}</strong> ${escapeHtml(todo.title)}
</span>
<span>${todo.completed ? '✅' : '◻️'}</span>
`;
list.appendChild(li);
});
}


function escapeHtml(str){
return String(str)
.replace(/&/g, '&amp;')
.replace(/</g, '&lt;')
.replace(/>/g, '&gt;')
.replace(/"/g, '&quot;')
.replace(/'/g, '&#39;');
}