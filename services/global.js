const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // אייקון שמש
    } else {
        localStorage.setItem('dark-mode', 'disabled');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // אייקון ירח
    }
});

if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // אייקון שמש
}
