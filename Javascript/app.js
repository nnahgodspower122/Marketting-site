// Header
function setActiveLink() {
    const links = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname;

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath || link.getAttribute('href') === currentPath + 'index.html') {
            link.classList.add('active');
        }
    });
}
setActiveLink();

 


// Carasousel 



//Menu Toggle
function toggleMenu() {
    const flyoutMenu = document.getElementById('flyoutMenu');
    flyoutMenu.classList.toggle('active'); // Toggle active class
}