export function createFooter(){
const f = document.createElement('footer');
f.className = 'footer';
const year = new Date().getFullYear();
f.textContent = `© ${year} Modular Todo — built with ES modules`;
return f;
}