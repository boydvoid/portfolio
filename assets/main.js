// the onclick for the other "pages"
var about = document.getElementById('about-bar');
var projects = document.getElementById('projects-bar');
var aboutContainer = document.getElementById('about-container');
var projectsContainer = document.getElementById('projects-container');
about.onclick = function () {
    togglePage(aboutContainer);
}
projects.onclick = function () {
    togglePage(projectsContainer);
}
// need to add "open" classes for each page
// set the css of the about and projects containers onclick
function togglePage(id) {
    console.log('toggle clicked');
    if (!id.classList.contains('toggle')) {
        id.classList.add('toggle');
    } else {
        id.classList.remove('toggle');
    }
}