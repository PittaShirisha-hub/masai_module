export function createNavbar(){
const nav = document.createElement('nav');
nav.innerHTML = `
<div class="brand">Modular Todo</div>
<div class="navlinks">
<a href="/">Home</a>
<a href="/signup.html">Sign up</a>
<a href="/login.html">Login</a>
<a href="/todos.html">Todos</a>
</div>
`;
return nav;
}