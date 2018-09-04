// the onclick for the other "pages"
var about = document.getElementById('about-container');
var projects = document.getElementById('projects-container');

about.onclick = function () {
    togglePage(about);
}
projects.onclick = function () {
    togglePage(projects);
}
// need to add "open" classes for each page
// set the css of the about and projects containers onclick
function togglePage(id) {
    if (!id.classList.contains('toggle')) {
        id.classList.add('toggle');
    } else {
        id.classList.remove('toggle');
    }
}