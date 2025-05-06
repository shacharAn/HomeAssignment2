document.addEventListener('DOMContentLoaded',function(){
    const darkModeButton = document.getElementById('darkModeToggle');
    darkModeButton.addEventListener('click',function(){
        document.body.classList.toggle('dark-mode');
    });
});

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}
