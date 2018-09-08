// the onclick for the other "pages"
var projects = document.getElementById('projects-bar');
var projectsContainer = document.getElementById('projects-container');

projects.onclick = function () {
    togglePage(projectsContainer);
}
// need to add "open" classes for each page
//testing 
// set the css of the about and projects containers onclick
function togglePage(id) {
    console.log('toggle clicked');
    if (!id.classList.contains('toggle')) {
        id.classList.add('toggle');
    } else {
        id.classList.remove('toggle');
    }
}