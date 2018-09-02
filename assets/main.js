// the onclick for the other "pages"
var about = document.getElementById('about-container');
var projects = document.getElementById('projects-container');

about.onclick = function () {
    showPages('about', about);
}
// set the css of the about and projects containers onclick
function showPages(page, id) {
    console.log('pressed');
    if (page === 'about') {
        id.style.right = '3.5%';
    } else {
        id.style.top = '6vh';
    }
}