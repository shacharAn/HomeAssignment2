const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode','enabled');
        darkModeToggle.innerHTML =  '<i class="fas fa-sun"></i>';  
    } else {
        localStorage.setItem('dark-mode','disabled');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; 
    }
});

if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; 
}else{
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; 
};


document.getElementById('hamburger-icon').addEventListener('click', function() {
    const menuList = document.getElementById('menu-list');
    menuList.classList.toggle('show');  
});
