// the onclick for the other "pages"
var projects = document.getElementById('projects-bar');
var projectsContainer = document.getElementById('projects-container');

/* document.getElementById function
    makes document.getElementById => getId(id)
*/
function getId(id){
    return document.getElementById(id);
}
// end getId   
projects.onclick = function () {
    togglePage(projectsContainer);
}
 
// set the css of the about and projects containers onclick
function togglePage(id) {
    console.log('toggle clicked');
    if (!id.classList.contains('toggle')) {
        id.classList.add('toggle');
    } else {
        id.classList.remove('toggle');
    }
}


